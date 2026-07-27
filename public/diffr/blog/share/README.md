# Baked blog share cards

Pre-rendered JPG/PNG for X/Twitter, LinkedIn, etc. Served under `/diffr/blog/share/` so social crawlers can fetch them (same `/diffr/blog/` path family as posts).

Generate:

```bash
npm run bake-og -- luxury-investment-brand-guide
```

Metadata prefers `.jpg` when both exist.
