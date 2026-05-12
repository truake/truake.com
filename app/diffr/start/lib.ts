// Shared Supabase fetch helpers for /diffr/start pages

export interface RequiredCategory {
  category: string;
  why: string;
  priority: "required" | "recommended" | "optional";
}

export interface BudgetTier {
  cents: number;
  items: number;
}

export interface DomainGuide {
  id: number;
  domain_slug: string;
  domain_name: string;
  icon_symbol: string;
  short_pitch: string;
  content_md: string;
  required_categories: RequiredCategory[];
  budget_tiers: { basic: BudgetTier; standard: BudgetTier; pro: BudgetTier };
  common_mistakes: string[];
  generated_at: string;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const headers = {
  apikey: ANON_KEY,
  Authorization: `Bearer ${ANON_KEY}`,
};

export async function getAllGuides(): Promise<DomainGuide[]> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/domain_guides?select=*&order=id.asc`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch guides");
  return res.json();
}

export async function getGuideBySlug(urlSlug: string): Promise<DomainGuide | null> {
  const dbSlug = urlSlug.replace(/-/g, "_");
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/domain_guides?domain_slug=eq.${dbSlug}&select=*&limit=1`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  const rows: DomainGuide[] = await res.json();
  return rows[0] ?? null;
}

// SF Symbol name → emoji mapping
export function symbolToEmoji(sym: string): string {
  const map: Record<string, string> = {
    "mountain.2.fill": "🏔️",
    "cup.and.saucer.fill": "☕",
    "gamecontroller.fill": "🎮",
    "gamecontroller": "🎮",
    "face.smiling.inverse": "🧴",
    "camera.fill": "📷",
    "camera": "📷",
    "desktopcomputer": "💻",
    "bicycle": "🚲",
    "fork.knife": "🍳",
    "chart.line.uptrend.xyaxis": "📈",
    "dollarsign.bank.building.fill": "🏦",
    "creditcard.fill": "💳",
    "creditcard": "💳",
    "chart.pie.fill": "🤖",
    "shield.fill": "🛡️",
  };
  return map[sym] ?? "✦";
}

// Convert DB slug (underscore) → URL slug (hyphen)
export function toUrlSlug(dbSlug: string) {
  return dbSlug.replace(/_/g, "-");
}

export function formatBudget(cents: number) {
  return `$${(cents / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

// ── Reddit Insights ────────────────────────────────────────────

export interface RedditComment {
  author: string;
  body: string;
  score: number;
}

export interface RedditInsight {
  sub: string;
  title: string;
  top_comments: RedditComment[];
  score: number;
  num_comments: number;
  brand_mentions: string[];
  pain_signals: string[];
  domain_slug: string;
  permalink: string;
}

export interface BrandFrequency {
  brand: string;
  cnt: number;
}

/**
 * Top 5 posts for a slug with non-empty pain_signals, ordered by score desc.
 * Used for the "What Reddit Users Are Asking" section on /diffr/start/[slug].
 */
export async function getRedditInsightsForSlug(
  urlSlug: string,
  limit = 5
): Promise<RedditInsight[]> {
  const dbSlug = urlSlug.replace(/-/g, "_");
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/reddit_insights` +
      `?domain_slug=eq.${dbSlug}` +
      `&pain_signals=not.eq.%7B%7D` +
      `&order=score.desc` +
      `&limit=${limit}` +
      `&select=sub,title,top_comments,score,num_comments,brand_mentions,pain_signals,permalink`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return res.json();
}

/**
 * Brand frequency analysis for a slug.
 * Fetches brand_mentions for all posts in the slug, counts occurrences client-side.
 * Used to decide brand recommendation ordering.
 */
export async function getBrandFrequencyForSlug(
  urlSlug: string,
  limit = 10
): Promise<BrandFrequency[]> {
  const dbSlug = urlSlug.replace(/-/g, "_");
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/reddit_insights` +
      `?domain_slug=eq.${dbSlug}` +
      `&select=brand_mentions`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const rows: { brand_mentions: string[] }[] = await res.json();
  const freq: Record<string, number> = {};
  for (const row of rows) {
    for (const brand of row.brand_mentions ?? []) {
      if (brand.trim()) freq[brand] = (freq[brand] ?? 0) + 1;
    }
  }
  return Object.entries(freq)
    .map(([brand, cnt]) => ({ brand, cnt }))
    .sort((a, b) => b.cnt - a.cnt)
    .slice(0, limit);
}

/**
 * Posts where both brandA and brandB appear together.
 * Used for /diffr/compare/[a]-vs-[b] pages.
 * Brand names are matched case-insensitively by fetching all co-occurrence candidates.
 */
export async function getCompareInsights(
  brandA: string,
  brandB: string,
  limit = 10
): Promise<RedditInsight[]> {
  // PostgREST cs operator: array contains ALL listed elements.
  // We search case-insensitively by fetching posts mentioning brandA and filtering for brandB.
  const aEnc = encodeURIComponent(brandA);
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/reddit_insights` +
      `?brand_mentions=cs.%7B${aEnc}%7D` +
      `&order=score.desc` +
      `&limit=50` +
      `&select=sub,title,top_comments,score,brand_mentions,pain_signals,permalink,domain_slug`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const all: RedditInsight[] = await res.json();
  // Client-side filter for brandB (case-insensitive)
  const bLower = brandB.toLowerCase();
  return all
    .filter((r) => r.brand_mentions?.some((b) => b.toLowerCase() === bLower))
    .slice(0, limit);
}

/**
 * SEO keyword candidates: titles matching beginner-intent patterns.
 * Useful for keyword research and content planning.
 */
export async function getBeginnerKeywordTitles(
  limit = 100
): Promise<{ title: string; score: number; sub: string }[]> {
  const patterns = ["beginner", "starter", "first", "recommend", "worth it", "vs"];
  const ilikeFilters = patterns
    .map((p) => `title.ilike.*${encodeURIComponent(p)}*`)
    .join(",");
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/reddit_insights` +
      `?or=(${ilikeFilters})` +
      `&order=score.desc` +
      `&limit=${limit}` +
      `&select=title,score,sub`,
    { headers, next: { revalidate: 86400 } }
  );
  if (!res.ok) return [];
  return res.json();
}
