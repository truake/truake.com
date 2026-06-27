// Per-post OG / scene base images — realistic commercial-photography backdrops
// for the layered share card (and reusable as the app scene cover).
//
// Workflow: a base image is generated from a per-post prompt, saved to
// public/og-base/<slug>.jpg, and the slug added here. The blog OG route then
// composites it as the bottom layer (slot tiles + title + badge on top), and
// generateMetadata points the post's og:image at the dynamic route.
//
// A slug with a base image gets a themed share card even if it has NO preset
// kit (e.g. the brand-decode posts) — base photo + title + badge, no tiles.

export const OG_BASE_SLUGS = new Set<string>([
  // add a slug here once public/og-base/<slug>.jpg exists
])

export function ogBaseUrl(slug: string): string | null {
  return OG_BASE_SLUGS.has(slug) ? `https://truake.com/og-base/${slug}.jpg` : null
}
