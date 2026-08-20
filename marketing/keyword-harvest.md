# Keyword Harvest — Diffr / truake.com

> Weekly keyword pipeline: **GSC real demand** + **Ahrefs volume/KD** + **Reddit pain titles** → one prioritized backlog.  
> Auto-report: [`keyword-harvest-latest.md`](./keyword-harvest-latest.md) (regenerate with `npm run keyword-harvest`).

## Quick start

```bash
cd truake-website

# 1) Export GSC 查询 CSV → marketing/imports/gsc-queries-2026-07-27.csv
# 2) (Optional) Ahrefs export → marketing/imports/ahrefs-keywords-2026-07-27.csv

npm run keyword-harvest
```

Requires `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Reddit pull).

---

## Weekly rhythm (~30 min)

| Day | Action | Output column |
|-----|--------|----------------|
| **Mon** | GSC 导出 + `npm run keyword-harvest` | **GSC — optimize** (排名 5–20、有展示) |
| **Wed** | Ahrefs 5 个 seed 展开 → 导入 CSV 再跑脚本 | **Ahrefs — new post** |
| **Fri** | 扫 Reddit 段 + Trends 季节词 | **Reddit — scene idea** |
| **Monthly** | Ahrefs AI Search citation 对比 | **GEO — FAQ/meta pass** |

---

## Triage rules (same as `content-engine.md`)

| Signal | Action |
|--------|--------|
| 已有 `/diffr/blog/{slug}`，GSC 排名 **5–20**，展示 ≥ 20 | **Optimize** — TL;DR / FAQ / meta only (Batch J/K 模式) |
| 已有页面，排名 **1–4** | **Defend** — 内链 + 监控，不改正文 |
| 无页面，Ahrefs US vol ≥ 200 且 KD ≤ 40 | **New post** — Essentials 或 decode 系列 |
| BtB/BtC：venue/buyer 名 + suppliers/contract/TED | **B2B series** — 数据管线已有则生成文 |
| Reddit score ≥ 50 + beginner/starter/vs 标题 | **Social + scene** — x-queue 或新 starter kit |

**Do not skip:** thin/zero volume → drop or reshape before writing.

---

## Manual backlog (edit here between harvest runs)

### GSC — waiting for next export

| Query | Impr | Pos | Matched slug | Action | Batch |
|-------|------|-----|--------------|--------|-------|
| aritzia brands explained | — | ~6 | `aritzia-sub-brands-guide` | **Defend** — FAQ + meta + inbound links (2026-08-21) | R |
| aritzia sub brands | — | ~6 | `aritzia-sub-brands-guide` | **Defend** — same page; re-request index | R |

### Ahrefs — validation queue (seed terms)

Run in Keywords Explorer when units reset; export CSV to `imports/`.

| Seed | US vol | KD | Decision | Notes |
|------|--------|-----|----------|-------|
| aritzia sub brands | — | ~6 | ✅ LIVE | **First GSC click 2026-08-21** · Defend Batch R |
| lululemon lines explained | | | ✅ LIVE | |
| nike sub brands explained | | | queued | decode A-series |
| nike acg vs tech | | | queued | comparison C-series |
| gap brands explained | | | queued | |
| athleta vs lululemon | | | queued | |
| uniqlo heattech starter | | | queued | |
| babaton vs theory workwear | | | queued | |
| camping starter kit essentials | | | ✅ LIVE | watch GSC |
| college dorm checklist | | | ✅ LIVE | Batch J |

### Reddit — scene ideas (manual picks)

| Title (from harvest) | Sub | Score | Suggested scene |
|----------------------|-----|-------|-----------------|
| _(auto-filled in latest.md)_ | | | |

### GEO / AI Search — citation gaps

| Query / prompt | Cited competitor? | Our URL | Fix |
|----------------|-------------------|---------|-----|
| best beginner makeup brands list | | makeup-brand-guide | FAQ ✅ Batch J |
| housewarming gift ideas brands | | housewarming | FAQ ✅ Batch J |
| _(add from Ahrefs AI Search export)_ | | | |

---

## Content type → keyword shape

| Series | Winning query patterns |
|--------|------------------------|
| **Essentials** | `{scene} starter kit`, `{scene} essentials`, `what to buy first {hobby}` |
| **Brand decode** | `{brand} lines explained`, `{sub-brand} vs {sub-brand}`, `which {brand} for {scene}` |
| **Philosophy** | `decision fatigue shopping`, `one brand rule`, `cost per use` |
| **Behind the Build** | `who built {venue}`, `{venue} suppliers`, `{venue} construction companies` |
| **Behind the Contract** | `{hospital} procurement`, `TED contract {supplier}`, `{buyer} medical imaging` |
| **Gift / seasonal** | `{occasion} gift ideas`, `world cup kit brands`, `dorm checklist` |

---

## Related docs

- [`gsc-indexing-queue.md`](./gsc-indexing-queue.md) — URL 送检批次（与 optimize 分开）
- [`content-engine.md`](./content-engine.md) — decode 系列规范 + Ahrefs 门槛
- [`imports/README.md`](./imports/README.md) — CSV 导出步骤

---

## Changelog

| Date | Note |
|------|------|
| 2026-07-27 | Initial harvest template + `scripts/keyword-harvest.ts` |
