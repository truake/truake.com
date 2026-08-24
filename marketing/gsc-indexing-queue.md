# GSC URL Inspection — Indexing Request Queue

> **Daily limit:** ~10–12 requests per property. Open each link while logged into [Google Search Console](https://search.google.com/search-console), then click **Request indexing**.
>
> Property: `sc-domain:truake.com` · Updated: 2026-08-24  
> **Login verified:** `geekrlg@gmail.com` · Use **网址检查** (top search bar) → paste URL → **请求编入索引**

**How to use:** One batch per day (~10 URLs). Paste each URL into **网址检查** → wait for crawl → **请求编入索引** if eligible. Mark ✓ when done.

## ⚠️ Coverage Drilldown 说明（2026-08-24）

三份 GSC 导出共 **85 条**；**多数不是 bug**，勿对 start twin / `/og` 请求索引。

| GSC 状态 | 数量 | 处理 |
|----------|------|------|
| 已抓取 - 尚未编入索引 | 26 | 15× `/og` PNG **忽略**；3× brand guide **请求索引**；3× 旧 `diffr.truake.com` BtB → apex **请求索引**；4× Pathoragy **可缓** |
| 已发现 - 尚未编入索引 | 47 | 11× brand guide + 1× lines + 23× BtB/BtC → **Batch U 分批请求** |
| 已被 robots.txt 屏蔽 | 12 | 全部 `/og` — **预期，忽略** |

**Never request indexing:**
- any URL ending in `/og`
- any `/diffr/start/*` twin (e.g. `running-starter-kit` — **noindex by design**, canonical → blog)
- `/diffr/blog/share/*` · `/og-base/*`

**Request the parent blog URL only.** SEO target for running gear = `running-gear-brand-guide`, **not** `running-starter-kit`.

**Action:** → **Batch U** below（42 正文 URL · ~5 天 · 10/天 quota）

## Batch U — GSC Coverage Drilldown（2026-08-24）· brand guides + BtB + BtC

GSC 导出 2026-08-24：15 brand guides（含 tech-grooming-tray NEW）+ 16 BtB + 10 BtC + 1 lines explained。  
**勿提交 `/og`** — parent blog URL only。  
**勿提交 `/diffr/start/*`** — start twin 故意 noindex。

### U-1 — Day 1（10 URLs）· 已抓取优先 + 新 flat lay + series hubs

| ✓ | Page | URL to paste in 网址检查 | GSC 状态 |
|---|------|--------------------------|----------|
| | Running gear (SEO target; **not** start twin) | `https://truake.com/diffr/blog/running-gear-brand-guide` | 已抓取 |
| | First apartment checklist | `https://truake.com/diffr/blog/first-apartment-checklist-brand-guide` | 已抓取 |
| | Home bar essentials | `https://truake.com/diffr/blog/home-bar-essentials-brand-guide` | 已抓取 |
| | Tech & grooming tray EDC (NEW · preset 140) | `https://truake.com/diffr/blog/tech-grooming-tray-brand-guide` | NEW |
| | BtB Hamad International Airport | `https://truake.com/diffr/blog/behind-the-build-hamad-international-airport` | 已抓取 |
| | BtB Dubai International Airport | `https://truake.com/diffr/blog/behind-the-build-dubai-international-airport` | 已抓取 |
| | BtB Charité Campus Mitte | `https://truake.com/diffr/blog/behind-the-build-charit-campus-mitte` | 已抓取 |
| | Behind the Build hub | `https://truake.com/diffr/blog/behind-the-build` | re-crawl |
| | Behind the Contract hub | `https://truake.com/diffr/blog/behind-the-contract` | re-crawl |
| | starter kits hub | `https://truake.com/diffr/blog/starter-kits` | re-crawl |

### U-2 — Day 2（10 URLs）· brand guides 已发现

| ✓ | Page | URL to paste in 网址检查 | GSC 状态 |
|---|------|--------------------------|----------|
| | Apartment cleaning supplies | `https://truake.com/diffr/blog/apartment-cleaning-supplies-brand-guide` | 已发现 |
| | Baking essentials | `https://truake.com/diffr/blog/baking-essentials-brand-guide` | 已发现 |
| | Beginner soccer gear | `https://truake.com/diffr/blog/beginner-soccer-gear-brand-guide` | 已发现 |
| | Gift ideas for him | `https://truake.com/diffr/blog/gift-ideas-for-him-brand-guide` | 已发现 |
| | Gym bag essentials | `https://truake.com/diffr/blog/gym-bag-essentials-brand-guide` | 已发现 |
| | Luxury investment | `https://truake.com/diffr/blog/luxury-investment-brand-guide` | 已发现 |
| | New home essentials | `https://truake.com/diffr/blog/new-home-essentials-brand-guide` | 已发现 |
| | Pantry staples list | `https://truake.com/diffr/blog/pantry-staples-list-brand-guide` | 已发现 |
| | Toddler essentials | `https://truake.com/diffr/blog/toddler-essentials-brand-guide` | 已发现 |
| | Travel essentials | `https://truake.com/diffr/blog/travel-essentials-brand-guide` | 已发现 |

### U-3 — Day 3（10 URLs）· womens work + lines + BtB 已发现（机场/场馆）

| ✓ | Page | URL to paste in 网址检查 | GSC 状态 |
|---|------|--------------------------|----------|
| | Womens work capsule | `https://truake.com/diffr/blog/womens-work-capsule-brand-guide` | 已发现 |
| | Apple ecosystem lines explained | `https://truake.com/diffr/blog/apple-ecosystem-lines-explained` | 已发现 |
| | BtB AMC Loews Lincoln Square 13 | `https://truake.com/diffr/blog/behind-the-build-amc-loews-lincoln-square-13` | 已发现 |
| | BtB Atlantis The Palm | `https://truake.com/diffr/blog/behind-the-build-atlantis-the-palm` | 已发现 |
| | BtB Cleveland Clinic Neurological Institute | `https://truake.com/diffr/blog/behind-the-build-cleveland-clinic-neurological-institute` | 已发现 |
| | BtB Jewel Changi Airport | `https://truake.com/diffr/blog/behind-the-build-jewel-changi-airport` | 已发现 |
| | BtB Los Angeles International Airport | `https://truake.com/diffr/blog/behind-the-build-los-angeles-international-airport` | 已发现 |
| | BtB Maya Cinemas North Las Vegas | `https://truake.com/diffr/blog/behind-the-build-maya-cinemas-north-las-vegas` | 已发现 |
| | BtB Mercedes-Benz Stadium | `https://truake.com/diffr/blog/behind-the-build-mercedes-benz-stadium` | 已发现 |
| | BtB Metropolitan Museum of Art | `https://truake.com/diffr/blog/behind-the-build-metropolitan-museum-of-art` | 已发现 |

### U-4 — Day 4（10 URLs）· BtB 续 + BtC 医疗合同（1/2）

| ✓ | Page | URL to paste in 网址检查 | GSC 状态 |
|---|------|--------------------------|----------|
| | BtB Sphere Las Vegas | `https://truake.com/diffr/blog/behind-the-build-sphere-las-vegas` | 已发现 |
| | BtB Sydney Opera House | `https://truake.com/diffr/blog/behind-the-build-sydney-opera-house` | 已发现 |
| | BtB Wynn Las Vegas | `https://truake.com/diffr/blog/behind-the-build-wynn-las-vegas` | 已发现 |
| | BtC N. Landesgesundheitsagentur | `https://truake.com/diffr/blog/behind-the-contract-n-landesgesundheitsagentur-1014837` | 已发现 |
| | BtC Osakidetza (Basque Health Service) | `https://truake.com/diffr/blog/behind-the-contract-osakidetza-servicio-vasco-de-salud-organizac-1014182` | 已发现 |
| | BtC Samodzielny Publiczny Szpital (PL) | `https://truake.com/diffr/blog/behind-the-contract-samodzielny-publiczny-specjalistyczny-szpital-za-1014351` | 已发现 |
| | BtC Stadt Wien Wiener Gesundheitsverbund | `https://truake.com/diffr/blog/behind-the-contract-stadt-wien-wiener-gesundheitsverbund-1014338` | 已发现 |
| | BtC Steiermärkische Krankenanstalten (AT) | `https://truake.com/diffr/blog/behind-the-contract-steierm-rkische-krankenanstaltengesellschaft-m-b-1014289` | 已发现 |
| | BtC Universitätsklinikum Freiburg | `https://truake.com/diffr/blog/behind-the-contract-universit-tsklinikum-freiburg-1014309` | 已发现 |
| | BtC Uniwersyteckie Centrum Kliniczne (PL) | `https://truake.com/diffr/blog/behind-the-contract-uniwersyteckie-centrum-kliniczne-1014746` | 已发现 |

### U-5 — Day 5（3 URLs）· BtC 医疗合同（2/2）

| ✓ | Page | URL to paste in 网址检查 | GSC 状态 |
|---|------|--------------------------|----------|
| | BtC Prospitalia GmbH Ulm | `https://truake.com/diffr/blog/behind-the-contract-vertragseinrichtungen-der-prospitalia-gmbh-ulm-1014191` | 已发现 |
| | BtC Wiener Gesundheitsverbund Vorstandsressort | `https://truake.com/diffr/blog/behind-the-contract-wiener-gesundheitsverbund-vorstandsressort-ein-1015268` | 已发现 |
| | BtC Wojewódzkie Centrum Onkologii (PL) | `https://truake.com/diffr/blog/behind-the-contract-wojew-dzkie-wielospecjalistyczne-centrum-onkolog-1014560` | 已发现 |

> **U-5 完成后：** 其余 BtB/BtC 已在 Batch I/L 送检或 sitemap 待自然爬取；若 GSC 仍显示「已发现」可续开 **U-6** 从 hub 列表补漏。

## Batch T — Dark valet tray EDC flat lay（2026-08-21）· preset 138 NEW

Nine-slot nightstand EDC brand guide · targets `everyday carry essentials` cluster. **勿提交 `/og`** — parent blog URL only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Dark valet tray EDC (NEW) | `https://truake.com/diffr/blog/dark-valet-tray-edc-brand-guide` |
| | Quiet luxury EDC (compare / EDC cluster) | `https://truake.com/diffr/blog/quiet-luxury-edc-brand-guide` |
| | Gray EDC knoll (compare) | `https://truake.com/diffr/blog/gray-edc-knoll-brand-guide` |
| | Daily essentials (compare) | `https://truake.com/diffr/blog/daily-essentials-brand-guide` |

## Batch S — Ahrefs Aug 21 meta refresh（2026-08-21）· P0/P1 optimize

Ahrefs Starter batch A/B/C validated SV/KD → title·meta·FAQ pass. **勿提交 `/og`** — parent blog URLs only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Gap Inc. / Athleta vs Lululemon (P0) | `https://truake.com/diffr/blog/gap-inc-lines-explained` |
| | On your feet all day shoes (P0) | `https://truake.com/diffr/blog/on-your-feet-all-day-work-brand-guide` |
| | Makeup essentials list (P0) | `https://truake.com/diffr/blog/makeup-brand-guide` |
| | Everyday carry essentials / quiet luxury EDC (P1) | `https://truake.com/diffr/blog/quiet-luxury-edc-brand-guide` |
| | International travel essentials list (P1) | `https://truake.com/diffr/blog/international-travel-essentials-brand-guide` |
| | Lululemon lines (inbound Athleta vs LL) | `https://truake.com/diffr/blog/lululemon-lines-explained` |
| | starter kits hub | `https://truake.com/diffr/blog/starter-kits` |

## Batch R — Aritzia GSC defend（2026-08-21）· first click pos ~6

First measurable clicks on `aritzia brands explained` + `aritzia sub brands` → landing `aritzia-sub-brands-guide`. Inbound links added from Lululemon, Gap Inc., womens capsule/work guides; FAQ + meta refreshed. **勿提交 `/og`** — request parent blog URL only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Aritzia sub-brands (defend) | `https://truake.com/diffr/blog/aritzia-sub-brands-guide` |
| | Lululemon lines (feeds Aritzia inbound) | `https://truake.com/diffr/blog/lululemon-lines-explained` |
| | Gap Inc. lines (feeds Aritzia inbound) | `https://truake.com/diffr/blog/gap-inc-lines-explained` |
| | Womens capsule (Effortless Pant slot) | `https://truake.com/diffr/blog/womens-capsule-wardrobe-brand-guide` |
| | Womens work capsule | `https://truake.com/diffr/blog/womens-work-capsule-brand-guide` |
| | starter kits hub | `https://truake.com/diffr/blog/starter-kits` |

## Batch Q — GSC Aug 19 winners + Gap Inc. lines（2026-08-19）· P0 SERP push

GSC dashboard (Aug 19): 12 clicks (+1100%), 1908 impressions (+184%). Top pages = Lines Explained + 54321 + Quiet Luxury EDC. **New:** Gap Inc. lines explained. **54321** refreshed with 10-day carry-on H2 + FAQ. **勿提交 `/og`** — request parent blog URLs only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Lululemon lines (#1 clicks) | `https://truake.com/diffr/blog/lululemon-lines-explained` |
| | Adidas lines (#2 clicks) | `https://truake.com/diffr/blog/adidas-lines-explained` |
| | Nike lines (#3 clicks) | `https://truake.com/diffr/blog/nike-lines-explained` |
| | 54321 packing (10-day FAQ refresh) | `https://truake.com/diffr/blog/54321-packing-method-brand-guide` |
| | Quiet luxury EDC (#5 clicks) | `https://truake.com/diffr/blog/quiet-luxury-edc-brand-guide` |
| | Gap Inc. lines (NEW) | `https://truake.com/diffr/blog/gap-inc-lines-explained` |
| | Oak floor travel kit | `https://truake.com/diffr/blog/oak-floor-travel-kit-brand-guide` |
| | Tiny essentials Altoids tin (NEW) | `https://truake.com/diffr/blog/tiny-essentials-brand-guide` |
| | X-PAC monochrome sling EDC (NEW) | `https://truake.com/diffr/blog/xpac-monochrome-sling-edc-brand-guide` |
| | starter kits hub (brand maps + travel) | `https://truake.com/diffr/blog/starter-kits` |

> Day 2 if quota tight: uniqlo-lines-explained · patagonia-lines-explained · international-travel-essentials · gray-edc-knoll.

## Batch N — GSC Aug 16 harvest + flat lay series（2026-08-17）· P0/P1 SEO refresh

Derivative / Adidas / Aritzia meta·TL;DR·FAQ refresh + 3 new flat lay posts. **勿提交 `/og`** — request parent blog URLs only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Derivative economy (Path B CTR) | `https://truake.com/diffr/blog/the-derivative-economy` |
| | Adidas lines (title refresh) | `https://truake.com/diffr/blog/adidas-lines-explained` |
| | Aritzia sub-brands (title refresh) | `https://truake.com/diffr/blog/aritzia-sub-brands-guide` |
| | Lululemon lines (brand lines cross-links) | `https://truake.com/diffr/blog/lululemon-lines-explained` |
| | Luxury travel tech desk (NEW) | `https://truake.com/diffr/blog/luxury-travel-tech-desk-brand-guide` |
| | Pack my Hermès backpack (NEW) | `https://truake.com/diffr/blog/pack-my-hermes-backpack-brand-guide` |
| | Do not disturb (NEW) | `https://truake.com/diffr/blog/do-not-disturb-brand-guide` |
| | starter kits hub (brand maps hub) | `https://truake.com/diffr/blog/starter-kits` |

> Day 2 if quota tight: nike-lines-explained · uniqlo-lines-explained · cost-per-use-rule.

## Batch O — Dorm + 54321 + Uniqlo lines（2026-08-17）· brand-homepage push

Dorm and 54321 meta·FAQ refresh; internal links to lines explained (not flat-lay scenes). Uniqlo HEATTECH vs AIRism title refresh. **勿提交 `/og`**。

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Dorm room essentials (title refresh) | `https://truake.com/diffr/blog/dorm-room-essentials-brand-guide` |
| | 54321 packing method (title refresh) | `https://truake.com/diffr/blog/54321-packing-method-brand-guide` |
| | Uniqlo lines (HEATTECH vs AIRism) | `https://truake.com/diffr/blog/uniqlo-lines-explained` |
| | Patagonia lines (54321 layer anchor) | `https://truake.com/diffr/blog/patagonia-lines-explained` |
| | starter kits hub (brand maps refresh) | `https://truake.com/diffr/blog/starter-kits` |
| | college packing list | `https://truake.com/diffr/blog/college-packing-list-brand-guide` |

## Batch P — Gray EDC knoll brand-homepage decode（2026-08-17）

Brand-homepage model — no mixed-brand preset. **Deploy first**, then **勿提交 `/og`** — request parent blog URL only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Gray EDC knoll (NEW) | `https://truake.com/diffr/blog/gray-edc-knoll-brand-guide` |
| | Oak floor travel kit (NEW) | `https://truake.com/diffr/blog/oak-floor-travel-kit-brand-guide` |
| | gift ideas for him (Bellroy cross-link) | `https://truake.com/diffr/blog/gift-ideas-for-him-brand-guide` |
| | quiet luxury EDC (compare) | `https://truake.com/diffr/blog/quiet-luxury-edc-brand-guide` |

## Batch M — Lines explained SERP push（2026-08-03）· GSC harvest + 3 new posts

Nike/Lulu already climbing (GSC Aug 3 export); title/meta/FAQ refresh on Nike + 3 new brand-map posts. **勿提交 `/og`** — request parent blog URLs only.

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Nike lines (title refresh) | `https://truake.com/diffr/blog/nike-lines-explained` |
| | Lululemon lines | `https://truake.com/diffr/blog/lululemon-lines-explained` |
| | Adidas lines (NEW) | `https://truake.com/diffr/blog/adidas-lines-explained` |
| | Uniqlo lines (NEW) | `https://truake.com/diffr/blog/uniqlo-lines-explained` |
| | Apple ecosystem (NEW) | `https://truake.com/diffr/blog/apple-ecosystem-lines-explained` |
| | starter kits hub (brand maps section) | `https://truake.com/diffr/blog/starter-kits` |
| | casual wardrobe (cross-links) | `https://truake.com/diffr/blog/casual-wardrobe-brand-guide` |
| | running gear (Nike cross-link) | `https://truake.com/diffr/blog/running-gear-brand-guide` |

> Day 2 if quota tight: world-cup kit brands (Adidas cross-link) · 54321 packing (Uniqlo cross-link).

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
| | winter layering brand guide (blog canonical) | `https://truake.com/diffr/blog/winter-layering-brand-guide` |
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
- **`/diffr/start/*` preset pages — intentionally `noindex`** (canonical → blog twin). Example: `running-starter-kit` → request `running-gear-brand-guide` instead. **Never request start URLs.**
- `/diffr/blog/*/og` · `/og-base/*` · `/diffr/blog/share/*` — social assets, robots.txt blocked

## Slug registry

All og-base slugs: `app/diffr/blog/og-base.ts` (19 slugs as of 2026-07-10).

**`/diffr/blog/{slug}/og` routes:** share-card PNG only — `noindex` via `next.config.ts` + `robots.txt`. Skip all `/og` rows in Batches A–E when pasting into 网址检查.
