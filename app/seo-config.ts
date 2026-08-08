/** Blog slugs excluded from sitemap — still reachable, not crawl-budget priorities. */
export const SITEMAP_EXCLUDE_SLUGS = new Set<string>([
  // Academic/philosophy cluster: high impressions, zero buyer intent (GSC Apr–Jul 2026).
  'the-derivative-economy',
])
