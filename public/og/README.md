# Baked blog OG images

Twitter and other social crawlers time out on the dynamic `/diffr/blog/[slug]/og` route (~15s cold start). Pre-rendered PNGs here serve instantly from the CDN.

Generate or refresh:

```bash
npm run bake-og -- luxury-investment-brand-guide
# or all kit posts:
npm run bake-og -- --all
```

After baking, `generateMetadata` prefers `https://truake.com/og/<slug>.png` when the file exists.
