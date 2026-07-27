# Baked blog share cards

Pre-rendered JPG/PNG for X/Twitter, LinkedIn, etc. Served under `/diffr/blog/share/` so social crawlers can fetch them (same `/diffr/blog/` path family as posts).

Generate one or all brand guides:

```bash
npm run bake-og -- luxury-investment-brand-guide
npm run bake-og -- --brand-guides
```

Metadata prefers `.png` when both exist (better X/Facebook compatibility). Files are permanent static assets — commit to git after baking.
