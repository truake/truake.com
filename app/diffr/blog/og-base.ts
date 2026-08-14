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
  'nike-lines-explained',
  'lululemon-lines-explained',
  'adidas-lines-explained',
  'uniqlo-lines-explained',
  'apple-ecosystem-lines-explained',
  'patagonia-lines-explained',
  'gardening-starter-kit-brand-guide',
  'new-puppy-essentials-brand-guide',
  // slot-affiliate brand guides (Img_OG batch, 2026-07-08)
  'bike-commuting-gear-brand-guide',
  'running-gear-brand-guide',
  'home-gym-brand-guide',
  'home-coffee-brand-guide',
  'home-office-brand-guide',
  'steak-dinner-brand-guide',
  'hiking-gear-brand-guide',
  'yoga-gear-brand-guide',
  'pc-gaming-gear-brand-guide',
  'backpacking-gear-brand-guide',
  'skincare-brand-guide',
  'makeup-brand-guide',
  'casual-wardrobe-brand-guide',
  'work-wardrobe-brand-guide',
  'winter-layering-brand-guide',
  'camping-gear-brand-guide',
  // Behind the Build — hero venues (2026-07-26)
  'behind-the-build-burj-khalifa',
  'behind-the-build-sofi-stadium',
  'behind-the-build-jewel-changi-airport',
  'behind-the-build-petronas-twin-towers',
  'behind-the-build-wembley-stadium',
  'luxury-investment-brand-guide',
  'quiet-luxury-edc-brand-guide',
  'travel-essentials-brand-guide',
  'poolside-essentials-brand-guide',
  'daily-essentials-brand-guide',
  'creative-desk-edc-brand-guide',
  'girl-essentials-brand-guide',
  'whats-in-my-bag-brand-guide',
  'on-your-feet-all-day-work-brand-guide',
  'just-bring-the-essentials-brand-guide',
  'some-mens-essentials-brand-guide',
  'mens-travel-essentials-brand-guide',
  'never-overpack-again-brand-guide',
  'tech-travel-edc-brand-guide',
  'luxury-travel-tech-desk-brand-guide',
])

export function ogBaseUrl(slug: string): string | null {
  if (!OG_BASE_SLUGS.has(slug)) return null
  const host = (process.env.OG_BASE_HOST ?? 'https://truake.com').replace(/\/$/, '')
  return `${host}/og-base/${slug}.jpg`
}

/** Dynamic layered share card — preset kit, og-base photo, or B2B series slug. */
export function hasDynamicOgCard(slug: string): boolean {
  return (
    OG_BASE_SLUGS.has(slug)
    || slug.startsWith('behind-the-build-')
    || slug.startsWith('behind-the-contract-')
  )
}
