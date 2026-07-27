# GSC URL Inspection — Indexing Request Queue

> **Daily limit:** ~10–12 requests per property. Open each link while logged into [Google Search Console](https://search.google.com/search-console), then click **Request indexing**.
>
> Property: `sc-domain:truake.com` · Updated: 2026-07-27  
> **Login verified:** `geekrlg@gmail.com` · Use **网址检查** (top search bar) → paste URL → **请求编入索引**

**How to use:** One batch per day (~10 URLs). Paste each URL into **网址检查** → wait for crawl → **请求编入索引** if eligible. Mark ✓ when done.

## ⚠️ 「已抓取 - 尚未编入索引」说明（2026-07-25）

GSC 报告 ~26 条，**多数是 `/diffr/blog/*/og` 动态分享图** — 不是 bug，不应请求索引。

| 类型 | 数量 | 处理 |
|------|------|------|
| `/og` PNG 端点 | ~16 | **不要** 在 GSC 请求索引；`robots.txt` 对 `*` disallow，但 **Twitterbot 等社交爬虫 allow**；`X-Robots-Tag: noindex` 保留 |
| Diffr 哲学/对比文 | ~7 | 低商业意图，Google 常暂不索引；加强内链后 **只请求正文 URL** |
| Pathoragy 博客 | ~4 | 次要属性；可缓 |

**Never request indexing:** any URL ending in `/og`. Request the **parent blog URL** only.

**Real pages worth indexing from the report:** `first-apartment-checklist-brand-guide`, `cost-per-use-rule`, `cold-weather-layering` (`/diffr/start/`), `diffr-vs-wirecutter`, `the-toothpaste-aisle-tax`.

## Batch L — P1 launch（2026-07-27）· Contract pilot + BtB schema + WC FAQ

Behind the Contract pilot (20 posts) + ItemList JSON-LD on BtB/BtC articles + world-cup FAQ。**勿提交 `/og`**。

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Contract hub | `https://truake.com/diffr/blog/behind-the-contract` |
| | INGESA (sample) | `https://truake.com/diffr/blog/behind-the-contract-ingesa-1014264` |
| | UCK Warsaw (sample) | `https://truake.com/diffr/blog/behind-the-contract-uck-warsaw-1014386` |
| | Incheon Airport BtB (ItemList) | `https://truake.com/diffr/blog/behind-the-build-incheon-international-airport` |
| | Marina Bay Sands BtB (ItemList) | `https://truake.com/diffr/blog/behind-the-build-marina-bay-sands` |
| | world cup kit brands | `https://truake.com/diffr/blog/world-cup-2026-kit-brands` |

> Contract 其余 17 篇 pilot 按 hub 列表逐日送检；BtB 全 27 篇 ItemList 已自动注入，优先 re-crawl 无 hero OG 的样本。

## Batch K — SEO/GEO 包（2026-07-27）· hub + 哲学支柱

canonical + TL;DR/FAQ 新增；**勿提交 `/og`**。

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | starter kits hub | `https://truake.com/diffr/blog/starter-kits` |
| | diffr vs wirecutter | `https://truake.com/diffr/blog/diffr-vs-wirecutter` |
| | film photography kit | `https://truake.com/diffr/blog/film-photography-brand-guide` |
| | cost per use rule | `https://truake.com/diffr/blog/cost-per-use-rule` |
| | one brand rule | `https://truake.com/diffr/blog/the-one-brand-rule` |
| | toothpaste aisle tax | `https://truake.com/diffr/blog/the-toothpaste-aisle-tax` |
| | BtB hub (re-crawl schema) | `https://truake.com/diffr/blog/behind-the-build` |

> Batch J 五篇若已送检可跳过重复；本批优先 **starter-kits** + **wirecutter** + 哲学三篇。

## Batch I — Behind the Build launch（2026-07-26）· 优先

27 篇 BtB 已 live；**先提交 hub + 3 篇 sample**（表格/FAQ/TLDR 已验）。**勿提交 `/og`**。

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | BtB series hub | `https://truake.com/diffr/blog/behind-the-build` |
| | Burj Khalifa (hero OG) | `https://truake.com/diffr/blog/behind-the-build-burj-khalifa` |
| | SoFi Stadium (hero OG) | `https://truake.com/diffr/blog/behind-the-build-sofi-stadium` |
| | Incheon Airport (airport cluster) | `https://truake.com/diffr/blog/behind-the-build-incheon-international-airport` |

> **Day 2 续批（quota 允许时）：** Petronas · Jewel Changi · Wembley · Marina Bay Sands · Sydney Opera House · 余下 20 slug（sitemap 已收录，按 hero/交通/医疗场馆分批）。

## Batch J — GEO TL;DR/FAQ/meta 优化（2026-07-26）· 5 篇

Ahrefs AI Search 落地页 + GSC query mirror；**只改 meta/TL;DR/FAQ，正文未动**。

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | makeup (AI Search landing) | `https://truake.com/diffr/blog/makeup-brand-guide` |
| | housewarming (AI Search landing) | `https://truake.com/diffr/blog/housewarming-gift-ideas-brand-guide` |
| | thoughtful gifts hub | `https://truake.com/diffr/blog/thoughtful-gift-ideas-brand-guide` |
| | college dorm checklist | `https://truake.com/diffr/blog/dorm-room-essentials-brand-guide` |
| | 54321 packing method | `https://truake.com/diffr/blog/54321-packing-method-brand-guide` |

## Batch G — Day 7 (1 URL) · merge into Batch F if quota left

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | thoughtful gift ideas hub (NEW) | `https://truake.com/diffr/blog/thoughtful-gift-ideas-brand-guide` |

> newborn minimalist H2 已并入 Batch F「newborn」行；无需单独请求。

## Batch F — Day 6 (10 URLs) · meta harvest 2026-07-24 · priority re-index

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| ✓ | dorm (college dorm checklist title) | `https://truake.com/diffr/blog/dorm-room-essentials-brand-guide` |
| ✓ | running (running shoes for beginners title) | `https://truake.com/diffr/blog/running-gear-brand-guide` |
| | camping (car camping essentials meta) | `https://truake.com/diffr/blog/camping-gear-brand-guide` |
| | newborn (baby registry + minimalist H2) | `https://truake.com/diffr/blog/newborn-must-haves-brand-guide` |
| | nike sub-brands (title harvest) | `https://truake.com/diffr/blog/nike-lines-explained` |
| | 54321 packing method | `https://truake.com/diffr/blog/54321-packing-method-brand-guide` |
| | international travel (54321 cross-link) | `https://truake.com/diffr/blog/international-travel-essentials-brand-guide` |
| | starter kits (gifts section) | `https://truake.com/diffr/blog/starter-kits` |

> **2026-07-24 partial:** dorm + running → 已请求编入索引。余下 Batch F 正文 URL 继续；**勿提交 /og**。

## Batch H — crawled-not-indexed 正文补录（2026-07-25）

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | first apartment checklist | `https://truake.com/diffr/blog/first-apartment-checklist-brand-guide` |
| | cost per use rule | `https://truake.com/diffr/blog/cost-per-use-rule` |
| | cold weather layering (start) | `https://truake.com/diffr/start/cold-weather-layering` |
| | diffr vs wirecutter | `https://truake.com/diffr/blog/diffr-vs-wirecutter` |
| | toothpaste aisle tax | `https://truake.com/diffr/blog/the-toothpaste-aisle-tax` |

> `building-diffr-scene-problem` · `claude-code-notebooklm-obsidian-workflow` = build-log，优先级低，可暂不请求。

## Batch A — Day 1 (10 URLs) · priority

| ✓ | Page | Inspect in GSC |
|---|------|----------------|
| | `/diffr` (homepage SEO) | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr) |
| | backpacking brand guide | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fbackpacking-gear-brand-guide) |
| | backpacking OG image | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fbackpacking-gear-brand-guide%2Fog) |
| | winter layering guide | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fwinter-layering-brand-guide) |
| | winter layering OG | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fwinter-layering-brand-guide%2Fog) |
| | camping essentials | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcamping-gear-brand-guide) |
| | camping OG | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcamping-gear-brand-guide%2Fog) |
| | running gear guide | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Frunning-gear-brand-guide) |
| | running OG | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Frunning-gear-brand-guide%2Fog) |
| | starter kits hub | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fstarter-kits) |

## Batch B — Day 2 (10 URLs) · new og-base slugs 1/5

| ✓ | Page | Inspect in GSC |
|---|------|----------------|
| | `/diffr/blog/bike-commuting-gear-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fbike-commuting-gear-brand-guide) |
| | `/diffr/blog/bike-commuting-gear-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fbike-commuting-gear-brand-guide%2Fog) |
| | `/diffr/blog/home-gym-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-gym-brand-guide) |
| | `/diffr/blog/home-gym-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-gym-brand-guide%2Fog) |
| | `/diffr/blog/home-coffee-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-coffee-brand-guide) |
| | `/diffr/blog/home-coffee-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-coffee-brand-guide%2Fog) |
| | `/diffr/blog/home-office-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-office-brand-guide) |
| | `/diffr/blog/home-office-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhome-office-brand-guide%2Fog) |
| | `/diffr/blog/steak-dinner-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fsteak-dinner-brand-guide) |
| | `/diffr/blog/steak-dinner-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fsteak-dinner-brand-guide%2Fog) |

## Batch C — Day 3 (10 URLs) · new og-base slugs 2/5

| ✓ | Page | Inspect in GSC |
|---|------|----------------|
| | `/diffr/blog/hiking-gear-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhiking-gear-brand-guide) |
| | `/diffr/blog/hiking-gear-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fhiking-gear-brand-guide%2Fog) |
| | `/diffr/blog/yoga-gear-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fyoga-gear-brand-guide) |
| | `/diffr/blog/yoga-gear-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fyoga-gear-brand-guide%2Fog) |
| | `/diffr/blog/pc-gaming-gear-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fpc-gaming-gear-brand-guide) |
| | `/diffr/blog/pc-gaming-gear-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fpc-gaming-gear-brand-guide%2Fog) |
| | `/diffr/blog/skincare-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fskincare-brand-guide) |
| | `/diffr/blog/skincare-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fskincare-brand-guide%2Fog) |
| | `/diffr/blog/makeup-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fmakeup-brand-guide) |
| | `/diffr/blog/makeup-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fmakeup-brand-guide%2Fog) |

## Batch D — Day 4 (10 URLs) · wardrobe + GSC climbers

| ✓ | Page | Inspect in GSC |
|---|------|----------------|
| | `/diffr/blog/casual-wardrobe-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcasual-wardrobe-brand-guide) |
| | `/diffr/blog/casual-wardrobe-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcasual-wardrobe-brand-guide%2Fog) |
| | `/diffr/blog/work-wardrobe-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fwork-wardrobe-brand-guide) |
| | `/diffr/blog/work-wardrobe-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fwork-wardrobe-brand-guide%2Fog) |
| | `/diffr/blog/dorm-room-essentials-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fdorm-room-essentials-brand-guide) |
| | `/diffr/blog/dorm-room-essentials-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fdorm-room-essentials-brand-guide%2Fog) |
| | `/diffr/blog/camping-vs-backpacking-starter-kit` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcamping-vs-backpacking-starter-kit) |
| | `/diffr/blog/camping-vs-backpacking-starter-kit/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fcamping-vs-backpacking-starter-kit%2Fog) |
| | `/diffr/blog/gardening-starter-kit-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fgardening-starter-kit-brand-guide) |
| | `/diffr/blog/gardening-starter-kit-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fgardening-starter-kit-brand-guide%2Fog) |

## Batch E — Day 5 (4 URLs) · lower priority (Jun og-base)

| ✓ | Page | Inspect in GSC |
|---|------|----------------|
| | `/diffr/blog/new-puppy-essentials-brand-guide` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fnew-puppy-essentials-brand-guide) |
| | `/diffr/blog/new-puppy-essentials-brand-guide/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fnew-puppy-essentials-brand-guide%2Fog) |
| | `/diffr/blog/nike-lines-explained` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fnike-lines-explained) |
| | `/diffr/blog/nike-lines-explained/og` | [Open inspect](https://search.google.com/search-console/inspect?resource_id=sc-domain%3Atruake.com&id=https%3A%2F%2Ftruake.com%2Fdiffr%2Fblog%2Fnike-lines-explained%2Fog) |

## Already indexed / skip unless re-crawl needed

- Toy Team posts use `/toy-covers/` — no og-base batch
- `/diffr/start/*` preset pages — index via internal links + sitemap; request only if GSC shows "Discovered – not indexed"

## Slug registry

All og-base slugs: `app/diffr/blog/og-base.ts` (19 slugs as of 2026-07-10).

**`/diffr/blog/{slug}/og` routes:** share-card PNG only — `noindex` via `next.config.ts` + `robots.txt`. Skip all `/og` rows in Batches A–E when pasting into 网址检查.
