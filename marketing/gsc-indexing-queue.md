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

## Batch V — Aritzia in-house brands refresh（2026-08-24）· P0 · 提交这一条

GSC 2026-08-24 显示 `aritzia in house brands`（35 impr）/ `aritzia house brands` / `aritzia different brands`
全部卡在第 8 位，而 `aritzia brands explained`（pos ~5.9）已有点击 —— 门槛线在第 6–8 位之间。

**已做的修正（本次 commit）：**
- 正文新增三个直答 H2：`Aritzia In-House Brands: The Full List`（完整 11 个自有品牌）、
  `Who Owns Aritzia? Sister Companies, and the Lululemon Mix-Up`、`Denim Forum — Jeans`，
  外加决策块 `Wilfred vs Babaton vs TNA`（吃 `wilfred vs babaton` / `theory vs aritzia` / `is babaton a good brand`）。
- **事实订正**：原文说「seven in-house labels」已过时。按 aritzia.com/Brands + FY2026 Annual Report，
  现为 **11 个**：Babaton、The Group by Babaton、Ten by Babaton、Wilfred、Wilfred Free、Tna、
  Golden、Denim Forum、Sunday Best、Little Moon、The Super Puff（占净收入约 97%）。
- 新增 5 条 FAQ + TL;DR/meta/excerpt 同步。Reigning Champ（CYC Design，2021 收 75% / 2023 收满）
  写进 sister-company 直答。

| ✓ | Page | URL to paste in 网址检查 | 目标 query |
|---|------|--------------------------|-----------|
| ✅ | Aritzia in-house brands（正文大改 · 必须重新抓取） | `https://truake.com/diffr/blog/aritzia-sub-brands-guide` | aritzia in house brands / house brands / sister company |
| | Uniqlo lines（P1 · 正文 410→943 词） | `https://truake.com/diffr/blog/uniqlo-lines-explained` | heattech vs airism / airism base layers / what is airism |
| | Adidas lines（P1 · 正文 594→1225 词） | `https://truake.com/diffr/blog/adidas-lines-explained` | adidas lines / three main adidas brands / terrex range explained |
| | **Burj Khalifa（P2 BtB 模板 · 优先提交这条）** | `https://truake.com/diffr/blog/behind-the-build-burj-khalifa` | who built / who owns burj khalifa |
| | Petronas Twin Towers | `https://truake.com/diffr/blog/behind-the-build-petronas-twin-towers` | companies in petronas twin towers |
| | Incheon（BtB 最好名次 · 第 10.19 位） | `https://truake.com/diffr/blog/behind-the-build-incheon-international-airport` | who built incheon airport |
| | Marina Bay Sands | `https://truake.com/diffr/blog/behind-the-build-marina-bay-sands` | who built marina bay sands |
| | SoFi Stadium | `https://truake.com/diffr/blog/behind-the-build-sofi-stadium` | sofi stadium etfe roof |

> 其余 21 篇 BtB 同批改动，正文与 FAQ 均已更新，但曝光量低 —— 按 10/天 quota 排在上面 5 条之后，
> 不必单独催抓；hub 页 `/diffr/blog/behind-the-build` 提交一次即可带动。

### P2 补充 — Behind the Build 模板直答（2026-08-25）

**问题**：`behind-the-build-burj-khalifa` 单页 66 次曝光、平均第 45.21 位 —— 全站曝光最高的 BtB 页，
点击 0。查询几乎全是两个意图：**谁建的**（`who built burj khalifa` / `burj khalifa made by` /
`burj khalifa builders` / `which construction company built burj khalifa` 等 ~14 次）和
**谁拥有**（`who owns burj khalifa` / `owner of burj khalifa tower` 等 ~8 次）。

页面排得进但答不上来 —— 原文开篇直接进表格，**而 FAQ 里那条 `Who built X?` 的答案是在拒绝回答**：
「Multiple verified B2B suppliers across N system slots — not a single contractor. See the sourced table.」
「谁拥有」则完全没有对应条目。

**改动（改生成器 `generate_btb_posts.py`，27 篇一次性重建）：**
- 正文表格前新增直答 H2 `Who Built X? Who Owns It?`，第一句直接点名总包与业主。
- 从 `role_description` 推导施工方，并**按证据强度分三档措辞**：
  「The main contractor was…」（明确 main/general contractor·12 篇）/
  「The construction names on record are…」/「No single main contractor is on record…」。
  证据只到工程师或建筑师时，绝不写成总包。
- FAQ：`Who built X?` 改为点名回答；新增 `Who owns X?` 与 `What companies worked on X?`（4→5 条）。
- TL;DR 同步补「Who built it / Who owns and operates it」。

**踩到并修掉的坑**（都会产出「听起来很确定但是错的」答案）：
1. 评分原本用 `slot + role`，而 slot 是分类桶 —— 「General Contracting」桶里的**建筑师也拿满分**，
   David Geffen Hall 一度把 Diamond Schmitt（设计建筑师）写成总包。改为只用 `role_description` 评分。
2. `principal design` 命中 "design architect"/"lead design consultant" → 收紧为 `principal design & construction`。
3. `Architectural & Show Lighting` 命中 `architect` → 改用 `\barchitects?\b` 词边界（大都会博物馆照明商曾被当成建筑师）。
4. `design & build` 把 Bellagio 的音乐喷泉商 WET 写成建楼的 → 整条移除。
5. **业主自指**：Apple Park→Apple、Tesla Gigafactory→Tesla、Tokyo DisneySea→Oriental Land 被列为施工方 → 排除 buyer。
6. 只并列**同一证据档**的供应商 —— 原本「Ssangyong E&C **and** Arup (structural engineer)」读起来像 Arup 也是总包。

代价：Petronas、SoFi、Hamad、Heathrow 等降级为更弱但诚实的措辞。对一个主打「每行都有出处」的系列，这个取舍是对的。

**同时发现**：库里有 **47 个** venue 已达发布门槛（≥6 条 verified link），但只有 27 篇上线 ——
**20 篇已验证页面从未发布**（Apple Park、Madison Square Garden、Heathrow T5、Istanbul Airport、
Tesla Gigafactory Texas、Walt Disney World、MetLife Stadium、Bellagio…）。
本次用新增的 `--only-existing` 开关按住不发，**留作单独一次部署**，以便在 GSC 上干净归因模板改动的效果。
→ 已于同日单独部署，见下节 **Batch W**。

## Batch W — Behind the Build 新增 20 篇（2026-08-25）· P2 后续

模板改动（Batch V）部署并核验后，单独发布库里 20 个已达门槛但从未上线的 venue。
27 → **47 篇**。无需手工接线：自动进 `posts.ts` / sitemap（已验证 47 条）/ hub 页（已验证 47 链接）。
BtB 系列本就不烘焙 share card（现有 27 篇里仅 6 篇有 og-base 条目），故不涉及 OG 流程。

**优先提交这 5 条**（GSC 已有同名实体查询或知名度最高）：

| ✓ | Page | URL to paste in 网址检查 |
|---|------|--------------------------|
| | Apple Park | `https://truake.com/diffr/blog/behind-the-build-apple-park` |
| | Madison Square Garden | `https://truake.com/diffr/blog/behind-the-build-madison-square-garden` |
| | Heathrow Terminal 5 | `https://truake.com/diffr/blog/behind-the-build-heathrow-terminal-5` |
| | Walt Disney World | `https://truake.com/diffr/blog/behind-the-build-walt-disney-world` |
| | Tesla Gigafactory Texas | `https://truake.com/diffr/blog/behind-the-build-tesla-gigafactory-texas` |

**其余 15 篇**（按 10/天 quota 顺延，或依赖 sitemap 自然发现）：
Allegiant Stadium、Amazon BFI4 Kent、Amsterdam Airport Schiphol、Apple Store Fifth Avenue、
Bellagio、Cedar Point、Hong Kong International Airport、IKEA Covina、IKEA Giheung、
IMAX Laser Theatres、Istanbul Airport、Mandarin Oriental Hyde Park London、MetLife Stadium、
Tokyo DisneySea、Universal Studios Hollywood。

> 新页的「谁建的」声明已逐条核验：Mortenson（Allegiant）、Rudolph and Sletten（Apple Park）、
> Turner Construction（MSG）、Skanska（MetLife）为明确总包；其余 14 篇证据不足总包档，
> 按分档规则回退为诚实措辞，**无一条错误声明**。

### P1 补充（2026-08-25）

**Uniqlo** —— 目标簇：`airism base layers`（10 次，第 6.3 位，全站单条最大）、
`heattech vs airism` 系列 4 个变体合计 16 次全部卡在第 9–10 位、`what is airism`（第 22 位）。
新增 `HEATTECH vs AIRism — The One-Line Answer` 直答 H2 + 对比表（置于正文最前），
HEATTECH 三档温区表（标准 5–20°C / Extra Warm 1.5× −5–15°C / Ultra Warm 2.25× −20–10°C，
数据取自 Uniqlo 官方 FAQ），AIRism 补「是不是 base layer」直答 + Mesh/Cotton 版本区分。
新增 4 条 FAQ，TL;DR 与 meta 同步。

**Adidas** —— 目标簇：`adidas lines`（28 次，第 9.29 位）、`adidas 4 lines`（5 次，第 7.2 位）、
`adidas terrex range explained`（第 6 位）、`which are the three main adidas brands`（第 7 位）、
`which one is original adidas`（第 6 位）。另有约 25 次 LLM 探针查询
（`evaluate ... adidas - XX on outdoor sports`，第 2–10 位）集中指向 outdoor → 强化 Terrex 是对的。
新增三个直答 H2：三条主线表（Performance/Originals/Sportswear × 3-Bar/Trefoil 徽标对照）、
`Originals vs Performance 怎么分`（徽标判别法 + Trefoil 1971 设计 /1972 慕尼黑发布 /1997 让位 3-Bar 的沿革）、
`哪个才是 original adidas + 四条杠是什么`（**歧义拆解**：问子品牌 → Originals；
问真伪数条纹 → adidas 是三条杠品牌，**不存在四条杠产品线**）。
Terrex 扩成完整 range 表：Free Hiker（徒步）/ Agravic（越野跑）/ Five Ten（攀岩 MTB，2011 收购）。
新增 4 条 FAQ，TL;DR 与 meta 同步。事实源：adidas FY2025 年报。

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
