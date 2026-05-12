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
