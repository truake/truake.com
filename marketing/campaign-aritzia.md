# Campaign: 我的 Aritzia (“My Aritzia”) — house-of-brands, hybrid framing

**Status:** 🟢 BLOG LIVE 2026-06-24 → https://truake.com/diffr/blog/aritzia-sub-brands-guide  
**GSC (2026-08-21):** first click on `aritzia brands explained` + `aritzia sub brands`, avg pos ~6 → **Defend Batch R** (FAQ, meta, inbound links from Lulu/Gap/capsule guides).
· social cleared to GO (X thread un-HOLD in x-queue) · img sub-brand rows+PL+hero images
in DB · OUTSTANDING: (1) dev — add 1 `preset_scenarios` row to light up the inline
shoppable kit (ids below); (2) img — sub-brand logos still missing (null-graceful).
**Owner of this doc:** content/SEO. Hands off to **img-Agent** (DB brands + PL + images),
then **social-Agent** (UGC campaign). Dev item at bottom.

## Premise
Aritzia is one of the hottest US women’s retailers right now, and it’s secretly a
*house of 7 in-house brands*, each a distinct lifestyle/aesthetic — uncannily close
to Diffr’s “one brand per slot.” We ride that hype **without** abandoning Diffr’s
independent DNA: every scenario shows the **Aritzia sub-brand pick AND the
best-in-class independent alternative** (the “vs the field” verdict). The
celebratory “我的 Aritzia” angle lives on social as a UGC layer.

> Trend is qualitatively strong but **search volumes are UNVERIFIED** — Ahrefs API
> units were exhausted (reset monthly). Pull `aritzia / is aritzia worth it /
> babaton vs / aritzia dupes / aritzia super puff` (US) before final title lock.

## The scenario matrix (creative core — everyone works from this)
One woman, one week. Each scenario = one Aritzia sub-brand head-to-toe, with the
independent pick Diffr would otherwise hand you.

| # | Scenario | Aritzia sub-brand (hero piece) | Independent alt (the verdict) | Alt in DB? |
|---|----------|-------------------------------|-------------------------------|-----------|
| 1 | Work / office | **Babaton** — Effortless Pant + blazer | **Theory** (better wool, lasts) / J.Crew | ✅ 15704 / 15682 |
| 2 | Interview / power | **The Group by Babaton** — suiting | **Theory** | ✅ 15704 |
| 3 | Date night / dinner | **Wilfred** — slip / midi dress | **Reformation** (owns the slip category) | ✅ 12819 |
| 4 | Everyday smart-casual | **Wilfred Free** — knit / tee | **Quince** / **Everlane** (same look, less) | ✅ 1001867 / 1201 |
| 5 | Weekend / athleisure | **TNA** — Atmosphere / Tech sweats | **Vuori** / **Alo** / **Lululemon** | ✅ 1017 / 1846 / 15874 |
| 6 | Night out / party | **Sunday Best** — going-out top | **Reformation** | ✅ 12819 |
| 7 | Winter / cold-weather | **Aritzia Super Puff** | **Patagonia** / **Uniqlo** (warmth-to-weight) | ✅ 33 / 5256 |

Anchor verdict line per row: *“Buy the Aritzia piece if you want it today from one
store; buy the alt if you want it to outlast the trend.”* (tune per row).

## img-Agent task list (the only real asset gap)
Parent **Aritzia** already exists = `brands.id 2738`. **All 11 alternatives already
exist** (ids in table above) — confirm they’re imaged for the relevant product_type,
otherwise no new alt rows needed.

**Add 7 sub-brand rows**, linked to parent Aritzia (2738) via the existing
parent/group convention (`parent_company='Aritzia'` and/or `group_id`):
1. Babaton  2. The Group by Babaton  3. Wilfred  4. Wilfred Free  5. TNA (the Aritzia line — **not** “TNA Knockout” id 41174, that’s wrestling)  6. Sunday Best  7. Super Puff
For each: logo (`supabase_logo_url`), `price_tier`, `keywords`, `product_types`,
short `description`, `parent_company`/`group_id` linkage.

Then **补 PL + 补图**: one product-listing (`pl_id`) + hero image per sub-brand for
its scenario’s product_type, via the `v_brand_type_hero` contract (so the
`/diffr/start` scene kit + the blog’s DB-driven product blocks render). 7 slots.

## social-Agent: “我的 Aritzia” UGC mechanic
- Prompt followers: *“Build your week from one store. Which Aritzia sub-brand is
  your [work / date / weekend / night-out]?”* — they reply with their own wheel.
- We feature the best wheels; each repost cites the blog’s verdict.
- Draft X thread lives in `x-queue.md` under “我的 Aritzia” (HOLD until blog live).

## Dev item
- **Add WC kit brands `7Saber` (Uzbekistan) + `Majid` (Iran)** — absent from DB
  (only unrelated “Majid Azami” person + “Saber” rows exist). Needed so those 2 of
  48 World Cup teams can link a brand. See `world-cup-2026-kit-brands` post.
- (Aritzia) confirm sub-brand→parent linkage convention for img-Agent if `group_id`
  vs `parent_company` matters for the house-of-brands grouping on the brand page.

### Dev — light up the inline shoppable kit (1 preset_scenarios row)
The blog renderer (`app/diffr/blog/[slug]/page.tsx`) renders a live `SceneBrandKit`
when `BLOG_SLUG_TO_PRESET['aritzia-sub-brands-guide']` resolves to a preset. All the
data exists; just needs the scene row + the map entry.

Create a `preset_scenarios` row (name e.g. "My Aritzia", slot_count 7, domain null),
ordered slots = work→interview→date→everyday→weekend→night-out→winter:

| order | sub-brand | brand_id | pl_id | product_type_id |
|---|---|---|---|---|
| 1 | Babaton | 1013001 | 1839830 | 693 |
| 2 | The Group by Babaton | 1013002 | 1839833 | 691 |
| 3 | Wilfred | 1013003 | 1839836 | 5166 |
| 4 | Wilfred Free | 1013004 | 1839839 | 12171 |
| 5 | TNA | 1013005 | 1839842 | 884 |
| 6 | Sunday Best | 1013006 | 1839845 | 6757 |
| 7 | Super Puff | 1013007 | 1839848 | 815 |

→ `slot_brand_ids = {1013001,1013002,1013003,1013004,1013005,1013006,1013007}`,
`slot_product_line_ids = {1839830,1839833,1839836,1839839,1839842,1839845,1839848}`.
All 7 hero images already `status='ready'` in `v_brand_type_hero`.
Then add `'aritzia-sub-brands-guide': <new preset id>` to `BLOG_SLUG_TO_PRESET`
(I'll do the code line once dev gives the id) — kit goes live, no redeploy of prose.
