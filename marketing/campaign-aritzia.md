# Campaign: 我的 Aritzia (“My Aritzia”) — house-of-brands, hybrid framing

**Status:** brief ready · waiting on img-Agent assets before blog goes live
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
