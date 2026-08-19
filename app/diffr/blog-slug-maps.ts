/** Blog post slug → /diffr/start funnel twin (same v_slot_pool kit). */
export const BLOG_SLUG_TO_START: Record<string, string> = {
  'bike-commuting-gear-brand-guide': 'cycling-commute',
  'running-gear-brand-guide': 'running-starter-kit',
  'home-gym-brand-guide': 'home-gym-essentials',
  'home-coffee-brand-guide': 'home-coffee',
  'home-office-brand-guide': 'home-office',
  'steak-dinner-brand-guide': 'cooking-basics',
  'hiking-gear-brand-guide': 'hiking',
  'yoga-gear-brand-guide': 'yoga-mindfulness',
  'pc-gaming-gear-brand-guide': 'home-gaming',
  'backpacking-gear-brand-guide': 'backpacking-basecamp',
  'skincare-brand-guide': 'skincare',
  'makeup-brand-guide': 'make-up-starter-kit',
  'casual-wardrobe-brand-guide': 'everyday-casual-look',
  'work-wardrobe-brand-guide': 'workwear-essentials',
  'winter-layering-brand-guide': 'cold-weather-layering',
  'toy-team-heirloom-box': 'toy-team-heirloom-box',
  'toy-team-builders-box': 'toy-team-builders-box',
  'toy-team-saturday-morning-box': 'toy-team-saturday-morning-box',
  'toy-team-backyard-box': 'toy-team-backyard-box',
  'toy-team-learn-and-go-box': 'toy-team-learn-and-go-box',
  'toy-team-quiet-afternoon-box': 'toy-team-quiet-afternoon-box',
  'toy-team-rainy-day-box': 'toy-team-rainy-day-box',
  'toy-team-throwback-box': 'toy-team-throwback-box',
  'toy-team-bedtime-box': 'toy-team-bedtime-box',
  'toy-team-birthday-box': 'toy-team-birthday-box',
  'luxury-investment-brand-guide': 'luxury-investment-flat-lay',
  'quiet-luxury-edc-brand-guide': 'quiet-luxury-edc-flat-lay',
  'travel-essentials-brand-guide': 'travel-essentials-flat-lay',
  'poolside-essentials-brand-guide': 'poolside-essentials-flat-lay',
  'daily-essentials-brand-guide': 'daily-essentials-flat-lay',
  'creative-desk-edc-brand-guide': 'creative-desk-edc-flat-lay',
  'girl-essentials-brand-guide': 'girl-essentials-macbook-flat-lay',
  'whats-in-my-bag-brand-guide': 'whats-in-my-bag-flat-lay',
  'on-your-feet-all-day-work-brand-guide': 'standing-all-day-work-kit',
  'just-bring-the-essentials-brand-guide': 'just-bring-the-essentials-flat-lay',
  'nike-lines-explained': 'nike-lines-flat-lay',
  'lululemon-lines-explained': 'lululemon-lines-flat-lay',
  'adidas-lines-explained': 'adidas-lines-flat-lay',
  'uniqlo-lines-explained': 'uniqlo-lines-flat-lay',
  'apple-ecosystem-lines-explained': 'apple-ecosystem-flat-lay',
  'patagonia-lines-explained': 'patagonia-lines-flat-lay',
  'some-mens-essentials-brand-guide': 'some-mens-essentials-flat-lay',
  'mens-travel-essentials-brand-guide': 'mens-travel-essentials-flat-lay',
  'never-overpack-again-brand-guide': 'never-overpack-again-flat-lay',
  'tech-travel-edc-brand-guide': 'tech-travel-edc-flat-lay',
  'luxury-travel-tech-desk-brand-guide': 'luxury-travel-tech-desk-flat-lay',
  'pack-my-hermes-backpack-brand-guide': 'pack-my-hermes-backpack-flat-lay',
  'do-not-disturb-brand-guide': 'do-not-disturb-flat-lay',
  'gray-edc-knoll-brand-guide': 'gray-edc-knoll-flat-lay',
  'oak-floor-travel-kit-brand-guide': 'oak-floor-travel-kit-flat-lay',
  'tiny-essentials-brand-guide': 'tiny-essentials-altoids-flat-lay',
}

/** Inverse map: start funnel slug → SEO-canonical blog post slug. */
export const START_SLUG_TO_BLOG: Record<string, string> = Object.fromEntries(
  Object.entries(BLOG_SLUG_TO_START).map(([blog, start]) => [start, blog]),
)

/** Start slugs that duplicate a blog post — keep out of sitemap; canonical → blog. */
export const START_SLUGS_WITH_BLOG_TWIN = new Set(Object.values(BLOG_SLUG_TO_START))

export function blogCanonicalUrl(blogSlug: string): string {
  return `https://truake.com/diffr/blog/${blogSlug}`
}
