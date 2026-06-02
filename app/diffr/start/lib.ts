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

// ── Scene Brand Kit (preset_scenarios → brands → images) ───────────
// THE CLOSED LOOP (first live instance, 2026-06-01). A /diffr/start guide's
// editorial shell (domain_guides) is enriched with DB-driven brand picks from
// the canonical scene table (preset_scenarios), each slot resolved to one brand
// + one image via the v_brand_type_hero contract view. Hybrid model: editorial
// prose stays, product data (brand + image + score) renders from the DB — the
// same data the iOS app reads. Built jointly with the App/DB agent (who owns
// preset_scenarios + brand scoring) and the image agent (who owns the hero view
// + image crawling). Full design + 3-agent contract in Obsidian:
// "Scene 数据闭环 — Blog×预设场景×品牌×图片 三方协作".

// Explicit map: /diffr/start URL slug → preset_scenarios.id
// preset_scenarios.domain is null for dev-built scenes, so there is no
// automatic join key. Extend this as more scenes get the DB-backed treatment.
// slug → preset_scenarios.id. Two kinds of entry:
//  (a) slug matches an existing domain_guide → brand kit layers onto that
//      editorial page (URL preserved).
//  (b) slug has NO domain_guide → a lean preset-driven page is generated
//      (name + description shell + brand kit). See PRESET_ONLY_SLUGS below.
// See Obsidian "Canonical Scene-Slot 蓝本库" for the full scene roster.
export const SLUG_TO_PRESET: Record<string, number> = {
  // (a) domain_guide-matched (brand kit on existing editorial page)
  "cycling-commute": 98,
  "home-coffee": 3,
  "hiking": 27,
  "home-office": 15,
  "home-gaming": 19,
  "skincare": 10,
  "cooking-basics": 1,
  // (b) preset-only (lean DB-driven page, no domain_guide) — all 41 active scenes
  "home-gym-essentials": 22,
  "running-starter-kit": 23,
  "yoga-mindfulness": 24,
  "pm-skincare-routine": 11,
  "make-up-starter-kit": 12,
  "complete-sleep-setup": 16,
  "bed-frame-upgrade": 17,
  "cold-night-bundle": 18,
  "console-gaming-lounge": 20,
  "mobile-casual-gaming": 21,
  "gaming-pc-build": 37,
  "productivity-workstation": 38,
  "budget-pc-starter": 39,
  // preset 1 (Weeknight Family Dinner) is served by "cooking-basics" above — no separate slug (avoids duplicate content)
  "weekend-baking-project": 2,
  "deep-home-clean": 4,
  "laundry-day-essentials": 5,
  "kitchen-dish-cleaning": 6,
  "daily-shower-routine": 7,
  "oral-care-upgrade": 8,
  "relaxing-bath-night": 9,
  "living-room-refresh": 13,
  "bedroom-sanctuary": 14,
  "backpacking-basecamp": 25,
  "car-camping-weekend": 26,
  "everyday-casual-look": 28,
  "workwear-essentials": 29,
  "cold-weather-layering": 30,
  "power-tool-starter-kit": 31,
  "site-safety-gear": 32,
  "precision-workshop": 33,
  "home-health-monitoring": 34,
  "first-aid-ready": 35,
  "daily-wellness-routine": 36,
  "family-game-night": 40,
};

// Slugs with no domain_guide editorial shell — rendered lean from preset data.
export const PRESET_ONLY_SLUGS = new Set<string>([
  "home-gym-essentials", "running-starter-kit", "yoga-mindfulness",
  "pm-skincare-routine", "make-up-starter-kit",
  "complete-sleep-setup", "bed-frame-upgrade", "cold-night-bundle",
  "console-gaming-lounge", "mobile-casual-gaming",
  "gaming-pc-build", "productivity-workstation", "budget-pc-starter",
  "weekend-baking-project",
  "deep-home-clean", "laundry-day-essentials", "kitchen-dish-cleaning",
  "daily-shower-routine", "oral-care-upgrade", "relaxing-bath-night",
  "living-room-refresh", "bedroom-sanctuary",
  "backpacking-basecamp", "car-camping-weekend",
  "everyday-casual-look", "workwear-essentials", "cold-weather-layering",
  "power-tool-starter-kit", "site-safety-gear", "precision-workshop",
  "home-health-monitoring", "first-aid-ready", "daily-wellness-routine",
  "family-game-night",
]);

export async function getPresetMeta(
  presetId: number
): Promise<{ name: string; description: string | null } | null> {
  try {
    const rows = await sbGet<{ name: string; description: string | null }[]>(
      `preset_scenarios?id=eq.${presetId}&is_active=eq.true&select=name,description`
    );
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

export interface SceneSlot {
  index: number;
  productTypeId: number;
  productTypeName: string;
  brandId: number;
  brandName: string;
  beginnerScore: number | null;
  fitScore: number | null; // type-specific fit (from v_slot_pool; null until computed)
  isCuratedPick: boolean; // the scene's curated choice for this slot
  productLine: string | null; // flagship product name
  imageUrl: string | null;
  status: "ready" | "pending" | string;
}

export interface SceneBrandKit {
  presetId: number;
  name: string;
  description: string | null;
  slotCount: number;
  slots: SceneSlot[];
  readyCount: number;
}

interface PresetScenarioRow {
  id: number;
  name: string;
  description: string | null;
  slot_count: number | null;
  product_types: number[] | null;
  slot_brand_ids: number[] | null;
}

interface PoolRow {
  brand_id: number;
  product_type_id: number;
  brand_name: string | null;
  beginner_score: number | null;
  fit_score: number | null;
  is_curated_pick: boolean | null;
  image_url: string | null;
  image_status: string | null;
  pl_id: number | null;
}

// Canonical v_slot_pool ordering for the fallback query (PostgREST syntax):
const POOL_ORDER =
  "is_curated_pick.desc,fit_score.desc.nullslast,beginner_score.desc.nullslast";
const POOL_SELECT =
  "brand_id,product_type_id,brand_name,beginner_score,fit_score,is_curated_pick,image_url,image_status,pl_id";

// Retry once on transient failure so a momentary network blip during SSG does
// not silently drop a scene's brand kit (the .catch fallback would otherwise
// produce an empty kit and hide the whole section).
async function sbGet<T>(path: string): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
        headers,
        next: { revalidate: 3600 },
      });
      if (!res.ok) throw new Error(`Supabase ${path} → ${res.status}`);
      return res.json();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

/**
 * Resolve a preset_scenarios row into an ordered list of brand-filled slots,
 * each with brand + image data from the unified canonical contract view
 * `v_slot_pool` (clean: plausible-only + retailers excluded; image LEFT-joined
 * from synonym members; curated picks force-included via is_curated_pick).
 * This is the same surface iOS reads (fetch_slot_pool projects it).
 * Returns null on any missing/invalid data so callers can skip the section.
 */
export async function getSceneBrandKit(
  presetId: number
): Promise<SceneBrandKit | null> {
  let scenario: PresetScenarioRow | undefined;
  try {
    const rows = await sbGet<PresetScenarioRow[]>(
      `preset_scenarios?id=eq.${presetId}&is_active=eq.true` +
        `&select=id,name,description,slot_count,product_types,slot_brand_ids`
    );
    scenario = rows[0];
  } catch {
    return null;
  }
  if (!scenario) return null;

  const types = scenario.product_types ?? [];
  const brandIds = scenario.slot_brand_ids ?? [];
  if (types.length === 0) return null;

  // Tolerate length mismatch: a slot may be unbranded (e.g. a [digital] app
  // slot with no product brand). Such slots are skipped, not fatal.
  const uniqBrands = [...new Set(brandIds.filter((b): b is number => b != null))];
  if (uniqBrands.length === 0) return null;
  const uniqTypes = [...new Set(types)];

  // Bounded query: resolve each slot's curated pick directly (small, reliable).
  const [pickRows, typeRows] = await Promise.all([
    sbGet<PoolRow[]>(
      `v_slot_pool?brand_id=in.(${uniqBrands.join(",")})&product_type_id=in.(${uniqTypes.join(",")})&select=${POOL_SELECT}`
    ).catch(() => []),
    sbGet<{ id: number; name: string }[]>(
      `product_types?id=in.(${uniqTypes.join(",")})&select=id,name`
    ).catch(() => []),
  ]);
  const pickMap = new Map(pickRows.map((r) => [`${r.brand_id}:${r.product_type_id}`, r]));
  const typeMap = new Map(typeRows.map((t) => [t.id, t.name]));

  // Orphan fallback (dev's intent: orphan slots still render from the pool, not
  // vanish). Only the slots whose curated pick is missing — bounded limit=1 each.
  const orphanTypes = [
    ...new Set(
      types.filter((pt, i) => brandIds[i] != null && !pickMap.has(`${brandIds[i]}:${pt}`))
    ),
  ];
  const fallbackMap = new Map<number, PoolRow>();
  await Promise.all(
    orphanTypes.map(async (pt) => {
      const top = await sbGet<PoolRow[]>(
        `v_slot_pool?product_type_id=eq.${pt}&order=${POOL_ORDER}&limit=1&select=${POOL_SELECT}`
      ).catch(() => []);
      if (top[0]) fallbackMap.set(pt, top[0]);
    })
  );

  // Flagship product-line names (nice-to-have label) via pl_id.
  const allRows = [...pickRows, ...fallbackMap.values()];
  const plIds = [...new Set(allRows.map((r) => r.pl_id).filter((x): x is number => !!x))];
  let plMap = new Map<number, string>();
  if (plIds.length) {
    const plRows = await sbGet<{ id: number; product_line: string | null }[]>(
      `product_lines?id=in.(${plIds.join(",")})&select=id,product_line`
    ).catch(() => []);
    plMap = new Map(plRows.map((p) => [p.id, p.product_line ?? ""]));
  }

  let readyCount = 0;
  const slots: SceneSlot[] = types
    .map((pt, i): SceneSlot | null => {
      const brandId = brandIds[i];
      if (brandId == null) return null; // unbranded slot (e.g. [digital] app)
      // Curated pick if valid; otherwise pool-top fallback; else skip (sparse).
      const row = pickMap.get(`${brandId}:${pt}`) ?? fallbackMap.get(pt);
      if (!row) return null;
      const status = row.image_status ?? "pending";
      if (status === "ready") readyCount++;
      return {
        index: i,
        productTypeId: pt,
        productTypeName: typeMap.get(pt) ?? "",
        brandId: row.brand_id,
        brandName: row.brand_name ?? "",
        beginnerScore: row.beginner_score ?? null,
        fitScore: row.fit_score ?? null,
        isCuratedPick: row.is_curated_pick ?? false,
        productLine: row.pl_id ? plMap.get(row.pl_id) || null : null,
        imageUrl: status === "ready" ? row.image_url ?? null : null,
        status,
      };
    })
    .filter((s): s is SceneSlot => s !== null);

  return {
    presetId: scenario.id,
    name: scenario.name,
    description: scenario.description,
    slotCount: scenario.slot_count ?? slots.length,
    slots,
    readyCount,
  };
}

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
