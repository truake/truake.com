# Diffr Content Engine — “Scene-Brand Decode”

One repeatable format that feeds every platform. **1 decode blog ≈ a week of content.**
Reference implementation: `aritzia-sub-brands-guide` (live 2026-06-24).

## The format (what every decode blog must be)
> Positioning rule is set by the social-agent BRIEF
> (`Diffr/social/x/campaigns/scene_brand_content_engine_BRIEF.md`, 2026-06-23) — it
> is authoritative; this doc mirrors it.

A “house of brands” / sub-line retailer → one editorial blog mapping each
**sub-line → scenario lane**. Each slot = **the scene lane + one vibe line + the one
piece that line is strongest for** (“它最强的那一件”). The blog LANDS on the thesis:
**pick the right lane, decide once** — framed as *trend observation + intellectual
depth* (cite *The Default Trap*: choice overload / the jam study, 24 options → 3% buy
vs 6 → 30%). That decide-once lens IS the independent angle.

NOT this: “buy out the whole brand,” “don’t buy,” or a “brand X beats Y” commercial
verdict. Head-to-head **“[sub] vs [competitor]”** comparisons live in their own
C-type posts (high commercial intent), not inside the A-decode. Affiliate disclosure
stays on; never imply affiliation.

NOTE: the Aritzia reference post (live) was written verdict-heavy (“buy Theory
instead”) — slightly off this rule. Realign to decide-once tone when convenient.

Authoring contract (same as Aritzia):
- `posts.ts`: self-contained essay HTML, one H2 per scenario, “The Diffr Take” close
  that links to a cornerstone + the app CTA.
- `brand-guide-content.ts`: `BLOG_TLDR` (answer-first, AI-citable) + `BLOG_FAQ`
  (4 Q&A incl. the “is X worth it / is [sub] the same as [parent]” intent → FAQPage).
- Optional shoppable kit: img adds sub-brand rows + PL + hero images; dev adds 1
  `preset_scenarios` row; map slug in `BLOG_SLUG_TO_PRESET`. (Kit is upside, not a
  launch blocker — editorial ships first.)

## The fan-out (social agent owns; blog is the source)
Each decode blog auto-spawns: 1 X thread · 1 carousel · 5–6 hot-takes · reply-ammo
for when that brand trends · all internal-linked to the relevant **cornerstone**.

## Backlog (priority order)
**A — Scene-brand decodes** (ride existing brand search + heat):
| # | Topic | Sub-lines → scenarios | Status |
|---|-------|----------------------|--------|
| 1 | Aritzia | Babaton/work · Wilfred/date · TNA/weekend · Sunday Best/night · Super Puff/winter | ✅ LIVE |
| 2 | Lululemon | Align/everyday · ABC/commute · Define/studio · Scuba/weekend · Steady State/sweat · Tennis & Golf/court | ✅ LIVE 2026-06-24 (decide-once voice; collections within 1 brand, no new rows) |
| 3 | Nike sub-lines | ACG · Tech · Pro · SB · Jordan · Running | queued · validate |
| 4 | Gap Inc. | Athleta/active · Banana Republic/work · Old Navy/budget | queued · validate |
| 5 | Uniqlo | U · +J collab · Heattech as “the one piece” | queued · validate |
| 6 | Abercrombie revival | rebuilt by fit/occasion | queued · validate |
| 7 | extend to beauty / home | parent × sub-line | backlog |

**B — “Why” cornerstones** (evergreen internal-link targets for every push):
- Why you shop by scene now (blog version of the Article)
- The death of brand loyalty
- Decision fatigue is a shopping problem (ties to existing decide-once content)

**C — Viral-format blogs** (ride hot shapes):
- “Which Aritzia sub-brand are you?” (personality/quiz — highly shareable)
- “Babaton vs [competitor] for workwear” (comparison — high intent, comparison posts)

## D — SEO gate (DO NOT skip — avoids 白写)
Before the main-page agent mass-produces any A/C item, **validate the head term in
Ahrefs** (vol + difficulty). Greenlight rule: meaningful US volume + winnable
difficulty → produce; thin/zero → drop or reshape.
**Validation queue (run when Ahrefs units reset — currently 0, monthly):**
`aritzia sub brands` · `wilfred vs babaton` · `which aritzia brand` ·
`lululemon lines explained` · `lululemon abc vs align` · `nike acg vs tech` ·
`gap brands explained` · `athleta vs lululemon` · `uniqlo u vs +j` ·
`abercrombie fits explained` · `babaton vs [competitor]`.
Exception: a topic with self-evidently massive demand (Lululemon) may fast-track
ahead of the gate; log the call here so nothing’s silently un-validated.
