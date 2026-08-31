# Diffr — X (Twitter) Post Queue

> **2026-08-06:** Blog 自动队列已取消（940 行 → `rejected`）。X 主策略 = Build in Public（`Diffr/social/x/build_in_public_plan.md`）。本文件仅作历史存档。

Native-thread format. X suppresses reach on posts with external links and rewards
self-contained value (lists people can read/save without clicking out). So each
entry is a **thread**: deliver the whole kit in the tweets, put the link only in
the **last tweet (or first reply)**. Blue check gives the length + reach boost —
that only helps if the post is native, not a link drop.

- **Account:** https://x.com/Diffr_app
- **Voice:** anti-choice-overload, concrete, calm. No hype/superlatives.
- **Format:** numbered thread, value in-thread, link last. First tweet = the hook.
- **Status:** `queued` → social agent flips to `posted YYYY-MM-DD` after publishing.

---

## READY · NotebookLM batch 146–148 — video + blog（2026-08-31）

**Deploy:** `truake-website` `a98b73d` · blog HTTP 200 · share JPG `?v=1788135351`

| Preset | Blog slug | Publish copy |
|--------|-----------|--------------|
| **146** | `japanese-craft-edc-brand-guide` | `Diffr/social/x/japanese-craft-edc_publish_copy_20260831.md` |
| **147** | `wimb-chubby-bag-brand-guide` | `Diffr/social/x/wimb-chubby-bag_publish_copy_20260831.md` |
| **148** | `styling-navy-trousers-brand-guide` | `Diffr/social/x/styling-navy-trousers_publish_copy_20260831.md` |

**Suggested order:** 1) **Blog tweet** per post (OG share card · link in tweet) → 2) **Video reel** when stylization ready (transformation hook · no URL in caption)

**GSC:** Request index all three blog slugs.

### Blog · X（主推 ⭐ · 单帖 + share card）

Paste § **Blog 主推** from each publish copy file. **New tweet** — do not edit old posts.

---

## READY · Dark valet tray EDC — video + blog（2026-08-21）

**Copy file:** `Diffr/social/x/dark-valet-tray-edc_publish_copy_20260821.md`  
**OG:** ✅ share JPG baked · preset **138** · blog + start twin  
**Suggested order:** 1) **Blog tweet** (OG share card · link in tweet) → 2) **Video reel** when stylization ready (transformation hook · link pinned)  
**GSC:** Batch T — `https://truake.com/diffr/blog/dark-valet-tray-edc-brand-guide`

### Blog · X（主推 ⭐ · 单帖 + share card）

Paste § **Blog · 主推文案** from publish copy file. **New tweet** — do not edit an old post (card cache).

### Video · X / Reels / TikTok（when reel ready）

Hook: *Nine nightstand objects. One valet tray. Still here — as artifacts.*  
Caption + 中文 → publish copy file § Video.

---

## READY · Oak floor travel kit — video + blog（2026-08-18）

**Copy file:** `Diffr/social/x/oak-floor-travel-kit_publish_copy_20260818.md`  
**OG:** ✅ share JPG `?v=1787038882` · blog 200  
**Suggested order:** 1) **Video reel** (transformation hook · link last or pinned) → 2) **Blog thread** (5-post native · link tweet 5)  
**GSC:** Batch P — `https://truake.com/diffr/blog/oak-floor-travel-kit-brand-guide`

### Video · X / Reels / TikTok（主推 ⭐）

Hook: *Nine travel objects. Excavated on oak — still here.*  
Caption + 中文 + 首评 → see publish copy file § Video.

### Blog · X thread（主推 ⭐ · link last）

```
1/ Nine objects on warm oak — a luxury work-trip floor kit. Each one is a different brand. Preset 135 pins one catalog line per slot.

2/ LEVEL8 Gibraltar aluminum 20" (not Rimowa). Apple iPad Pro M4 — sole Apple slot. Samsung Galaxy S24 Ultra Titanium Orange. MCM Visetos studded backpack.

3/ Memobottle Slim · Mophie powerstation XL · Louis Vuitton 8 Watch Case · Rolex Submariner · Spigen OneTap In-flight Mount — ninth slot for tray-table viewing.

4/ Interactive Scene: https://truake.com/diffr/start/oak-floor-travel-kit-flat-lay — nine brands, one per slot.

5/ Full decode + brand homepage links: https://truake.com/diffr/blog/oak-floor-travel-kit-brand-guide
```

---

## approved schedule · Ahrefs Jul 2026 harvest (confirmed 2026-07-25)

**Time:** 10:00 AM ET daily · **Account:** @Diffr_app · **Format:** native thread, link last.

| Date | Thread (x-queue heading) | Status |
|------|--------------------------|--------|
| Mon **2026-07-28** | 54321 packing method — READY | ⏳ scheduled |
| Tue **2026-07-29** | Thoughtful gift ideas — READY | ⏳ scheduled |
| Wed **2026-07-30** | College dorm checklist — READY | ⏳ scheduled |
| Thu **2026-07-31** | Running shoes for beginners — READY | ⏳ scheduled |
| Fri **2026-08-01** | Nike sub-brands — READY | ⏳ scheduled |
| Sat **2026-08-02** | Baby registry must haves — READY | ⏳ scheduled |

### Lines explained batch (2026-08-03) · 10:00 AM ET · `thread_queue_2026-08-03-lines-batch.json`

| Date | Thread | Supabase | Status |
|------|--------|----------|--------|
| Sun **2026-08-03** | Lululemon lines explained | #1151 | ⏳ scheduled |
| Mon **2026-08-04** | Nike lines explained | #1153 | ⏳ scheduled |
| Tue **2026-08-05** | Adidas lines explained | #1154 | ⏳ scheduled |
| Wed **2026-08-06** | Uniqlo lines explained | #1155 | ⏳ scheduled |
| Thu **2026-08-07** | Apple ecosystem lines | #1156 | ⏳ scheduled |

After each publish: move entry to `## posted` below + log URL in `Diffr/social/x/posted_log.md`.

**Auto-publish (2026-07-25):** 6 native threads queued via `social/x/thread_queue_2026-07-28.json` → `sku-image-crawler/x_pipeline/queue_native_threads.py` → Supabase `approved` → launchd `com.diffr.xpublish` posts reply chains at 10:00 ET.

---

## queued

### What's In My Bag — luxury beauty flat lay — READY (blog wired 2026-08-08); time to a weekend
```
1/ The luxury "what's in my bag" flat lay is eight objects — not one brand dump. One specialist per slot. 🧵

2/ Bag → Miu Miu matelassé shoulder. The black quilted crossbody from the grid.

3/ Shades → Gentle Monster Matiny 01. Tortoiseshell square frames.

4/ Skin → Typology A43 serum. Minimal bottle, lifting concentrate.

5/ Scent → Chanel N°5 parfum. The square flacon everyone recognizes.

6/ Lip color → Saint Laurent Rouge Pur Couture. Black-and-gold tube.

7/ Lip care → Rhode Peptide Lip Tint. Tint + peptide in one.

8/ Cheek → Saie Dew Blush. Liquid flush from the flat lay.

9/ Jewelry → Mejuri Bold Huggie Hoops. Chunky gold hoops.

10/ Eight slots, eight brands — catalog images pinned on preset 112 ↓
https://truake.com/diffr/blog/whats-in-my-bag-brand-guide
```

### Batch A — og-base priority (GSC climbing, blog live; og refresh 2026-07-08)
**Social:** post one per day, Mon–Fri suggested order below. Link only in last tweet. OG card = `/diffr/blog/{slug}/og`.

### Camping essentials — READY
```
1/ Your first camping trip shouldn't start with a gear rabbit hole. Car camping = comfort first — drive to the site, nothing on your back. Nine slots, one brand each. Buy order matters. 🧵

2/ Buy first (sleep decides everything): REI Wonderland 4 tent → Kelty Tru.Comfort Doublewide bag → Therm-a-Rest MondoKing pad. Bad sleep is why beginners quit.

3/ Buy next (eat well): Coleman Classic 2-burner stove → RTIC 45 cooler. Hot food + cold drinks = a real campsite.

4/ Finish when you can: GCI Freestyle Rocker chairs · Goal Zero Lighthouse 600 lantern · Stanley Base Camp cook set · Adventure Medical Kits first aid.

5/ Not backpacking — that's a different kit (weight on your back, different tent, different stove). Same word, two jobs.

6/ Full nine-slot list with buy order ↓
https://truake.com/diffr/blog/camping-gear-brand-guide
```

### Backpacking checklist — READY
```
1/ Backpacking is car camping with consequences: everything goes on your back. The forums turn that into a six-month research project. Eleven slots, one brand each — start with the big three. 🧵

2/ The big three (rent these first trip if you can): Osprey Atmos AG 65 pack → REI Half Dome SL 2+ tent → Kelty Cosmic Down 20 bag + Therm-a-Rest NeoAir XLite pad.

3/ Add next (self-sufficient overnight): MSR PocketRocket 2 stove → Sawyer Squeeze filter → Black Diamond Spot 400 headlamp → Adventure Medical Kits ultralight first aid.

4/ Finish when you can: GSI Pinnacle cookset · Black Diamond trekking poles · Gaia GPS for when the trail isn't obvious.

5/ Skip ultralight until you know what actually bothers you on trail. Durable + comfortable beats gram-counting for season one.

6/ Full checklist + buy order ↓
https://truake.com/diffr/blog/backpacking-gear-brand-guide
```

### Winter layering system — READY
```
1/ Staying warm isn't one heroic coat — it's a system. Base moves sweat, mid traps heat, shell blocks wind. Beginners buy the parka and freeze because head + hands are bare. 🧵

2/ Buy first: Uniqlo HEATTECH base → Patagonia Better Sweater fleece → Sorel Caribou boots. That trio already works in real cold.

3/ Add next: The North Face ThermoBall Eco (insulation) → Columbia parka shell (wind + snow over everything).

4/ Do not skip (cheapest warmth): Carhartt beanie · Hestra gloves · Johnstons of Elgin wool scarf. Most heat leaves through head and hands.

5/ Cheat sheet: 40–50°F = fleece alone. 30–40°F = base + fleece + insulated jacket. Below 20°F = full system + all three extremities.

6/ Full eight-slot kit + temperature map ↓
https://truake.com/diffr/blog/winter-layering-brand-guide
```

### Running shoes for beginners — READY (title harvest 2026-07-24)
```
1/ Starting to run has ~15 gear decision points before mile one. The honest beginner answer: one pair of shoes that fit. Everything else can wait. 🧵

2/ Buy first: Hoka Clifton 9 (get fitted at a running store — $120–160, replace every 300–500 mi). Add Darn Tough merino socks. That's a run.

3/ Skip for now: carbon-plate "super shoes" (race-day gear, not base mileage), $600 GPS watches (your phone tracks pace free).

4/ When you're logging 15+ mi/week and know what you need: Garmin Forerunner 55 · Patagonia Capilene shirt · Shokz OpenRun for situational awareness on roads.

5/ Eleven slots total — shoes to training app — each closed with one brand. File stays closed until experience opens a slot with evidence.

6/ Full beginner running kit ↓
https://truake.com/diffr/blog/running-gear-brand-guide
```

### College dorm checklist — READY (title harvest 2026-07-24)
```
1/ Move-in lists on the internet are 80 items long. You need about eighteen — in five zones, one brand each. Buy four things first and you can sleep + shower on night one. 🧵

2/ Sleep (Twin XL only): Mellanni sheets → Lucid mattress topper → Beckham pillow → Bedsure comforter. The topper is the upgrade every upperclassman wishes they bought freshman year.

3/ Shower (shared hall bath): Attmu mesh caddy → Adidas shower shoes → Utopia towels. One trip, drains fast, no touching the floor.

4/ Desk + laundry: TaoTronics lamp · Anker surge strip · Simple Houseware hamper · Sterilite under-bed bins · 3M Command hooks.

5/ The dorm room guide is separate from the college packing list (laptop, docs, roommate fridge). Room first, then the rest.

6/ Full college dorm checklist ↓
https://truake.com/diffr/blog/dorm-room-essentials-brand-guide
```

### 54321 packing method — READY (new 2026-07-24)
```
1/ You don't need 14 outfits for a 14-day trip. The 54321 method: 5 tops · 4 bottoms · 3 layers · 2 shoes · 1 wildcard. Twenty outfit combos before you touch the layers. 🧵

2/ The rule: every top pairs with every bottom. Neutral palette (navy, stone, black, white). If it only matches one thing, it stays home.

3/ 2 shoes max — one walk-all-day (Hoka), one cleaner pair for dinner (Veja). Wear the bulkier pair on the plane. The third pair is how carry-ons fail.

4/ Weekend trip? Scale to 3-2-1. Month abroad? Laundry once a week + same formula, or run warm + cool kits separately.

5/ Clothes formula + carry-on gear list = the full travel stack. Gear list ↓
https://truake.com/diffr/blog/international-travel-essentials-brand-guide

6/ Full 54321 breakdown ↓
https://truake.com/diffr/blog/54321-packing-method-brand-guide
```

### Nike sub-brands — READY (title harvest 2026-07-24)
```
1/ Nike's wall is a thousand colorways and zero map. But it's secretly sorted by scene — each sub-brand is one lane of your life. Learn the map, stop scrolling, decide once. 🧵

2/ Everyday → Sportswear (Air Force 1). Travel + couch → Tech Fleece. Actually training → Nike Pro (compression base layers).

3/ The run → Pegasus + Dri-FIT. The trail → ACG. Skate → SB Dunk. Court heritage → Jordan.

4/ The mistake: buying Align-energy everyday gear for a job it wasn't built for — same trap, different swoosh.

5/ One lane, one decision. Match the collection to your week ↓
https://truake.com/diffr/blog/nike-lines-explained
```

### Baby registry must haves — READY (title harvest 2026-07-24)
```
1/ Baby registries push 300 items. New parents use ~40 before the rest goes to donation. The must-haves are smaller than the store wants you to believe. 🧵

2/ Buy before the hospital: Chicco car seat (installed + checked) · Halo bassinet + Aden + Anais swaddles · Pampers + WaterWipes + Aquaphor · a few Dr. Brown's bottles.

3/ Sleep zone: Hatch sound machine. Feeding: Boppy pillow if nursing. Diapering: Keekaroo wipe-clean changing pad.

4/ Skip for now: wipe warmers, newborn shoes, bottle sterilizer machines, most toys. Stroller and high chair are months away.

5/ One good brand per slot — ~15 things, not 300. Full registry must-haves list ↓
https://truake.com/diffr/blog/newborn-must-haves-brand-guide
```

### Thoughtful gift ideas — READY (hub 2026-07-24)
```
1/ Thoughtful gifting isn't a bigger basket — it's one good thing they'll actually use. The internet trains you to buy ten small things. One right thing is the gift. 🧵

2/ For her: Laneige lip mask + Boy Smells candle (under $40, almost never wrong). Splurge: Barefoot Dreams throw.

3/ For him: Bellroy slim wallet — everyone needs one, almost nobody buys their own. Splurge: AirPods he'll use daily.

4/ New home: Nest candle + Brightland olive oil — consumable, handsome, used this week. Splurge: Le Creuset Dutch oven.

5/ New parents: diapers and wipes in bulk — not another single-use gadget. Point them at the minimalist registry list.

6/ One gift beats ten almost-right things. Full hub (her · him · housewarming) ↓
https://truake.com/diffr/blog/thoughtful-gift-ideas-brand-guide
```

### Starter kits index — READY
```
1/ Every hobby has the same problem: "what do I actually need to start?" — and the internet answers with forty tabs. Diffr's rule: one good brand per slot, buy in order, close the file. 🧵

2/ Outdoors: car camping · backpacking · hiking · running · bike commute · yoga

3/ Home: home gym · home office · home coffee · PC gaming · steak dinner at home

4/ Wardrobe: casual capsule · work capsule · winter layering (base → shell + extremities)

5/ Beauty + hobby: skincare (3 steps that matter) · makeup everyday face · film photography

6/ Pick your hobby — full index, every slot assigned ↓
https://truake.com/diffr/blog/starter-kits
```

### Car camping vs backpacking — READY (blog live 2026-07-08)
```
1/ "Camping starter kit" lists mix a 6 lb tent with a 1 lb pad — gear built for opposite jobs. Car camping = drive to the site, comfort first. Backpacking = everything on your back, weight first. Same word, two kits. 🧵

2/ Car camping: tall tent, wide bag, thick pad, two-burner stove, real cooler. Weight doesn't matter — sleep does.

3/ Backpacking: light shelter, mummy bag, inflatable pad, single-burner stove, fitted pack. Every ounce counts.

4/ Buy first (car): tent → bag → pad. Buy first (trail): pack → shelter → sleep system.

5/ Not sure? Start with car camping — cheaper to learn, tells you fast if you like sleeping outside.

6/ Full one-brand-per-slot lists for each path ↓
https://truake.com/diffr/blog/camping-vs-backpacking-starter-kit
```

### Lululemon Lines Explained — READY (blog live 2026-06-24); decide-once voice
```
1/ Lululemon's wall is 200 leggings and zero guidance. But it's secretly sorted by scene — each collection is one lane of your life. Learn the map, stop scrolling, decide once. 🧵

2/ Everyday → Align. Buttery, weightless, low-impact. The one: Align High-Rise Pant.

3/ Commute → ABC. The "anti-ball-crushing" trouser reads as real pants, stretches like sweats. The one: ABC Pant.

4/ Weekend → Scuba. Oversized fleece, throw-it-on-and-you're-dressed. The one: Scuba Half-Zip.

5/ The sweat → Steady State / License to Train. Technical, built to move sweat — the job Align was never for.

6/ The court → Tennis & Golf. Sport-specific, so you stop forcing the everyday line to do it.

7/ One lane, one decision. The brand already sorted the wall — you just match it to your week ↓
https://truake.com/diffr/blog/lululemon-lines-explained
```

### Toy Team campaign (TS5 tie-in)  — thread, pin during the film window
```
1/ The best toy box was never all one brand. It was the mixed one — a wooden train, a plush bear, a die-cast car, a blinking handheld, a tub of blocks — all in the same afternoon. 🧸🧱🚗

2/ So we built ten of them. Each "Toy Team" = one best brand per toy type, assembled into a box. No brand repeated across any of the ten.

3/ A few of the boxes:
• Heirloom — Steiff, Geomag, Majorette, Cybiko
• Saturday-Morning — LEGO, Hot Wheels, Transformers, LeapFrog
• Bedtime — Tonies, Ravensburger, Crayola, Moulin Roty
• Birthday — Yoto, Jellycat, Bburago, L.O.L. Surprise!

4/ One per type beats ten of one — variety of kind is what makes a toy box a world. Pick your box, or build your own 👇
https://truake.com/diffr/blog/mixed-toy-box
```
Note: IP-safe — never name the film/characters. "晒出你留下的那一队" engagement angle works as a reply/quote prompt.

### Diffr App Store launch  (pin this)
```
1/ Diffr is live on the App Store. 📱
The problem was never too few options — it's too many. So we pick the one good brand per slot, for any kit you want to start.

2/ Starting a home gym? You get the dumbbells, the mat, the rack — one brand each, in the order to buy them.

3/ A first work wardrobe, a skincare routine, a camping setup? Same deal. One answer per slot. The research spiral, removed.

4/ Free on iPhone. Decide once, get on with it. 👇
https://apps.apple.com/us/app/diffr/id6772870733
```

### r/OneBrandRule community launch
```
1/ We started a subreddit for decide-once shopping: r/OneBrandRule.
One idea — pick one good brand per category, and stop re-deciding.

2/ It's built for the single-best-answer question: "what's the one ___ for a beginner?" Running shoes. A chef's knife. A first cologne.

3/ Share the picks you committed to and never looked back on. Push back on choice overload. Find the good-enough-forever answer.

4/ Come in 👇
https://www.reddit.com/r/OneBrandRule/
```

### Cologne for Beginners
```
1/ The beginner cologne kit — one scent per occasion, not a $200 collection: 🧵

2/ Everyday: Bleu de Chanel — smell good, don't think about it
3/ Compliments: Dior Sauvage — the safe blind-buy
4/ Date night: Versace Eros
5/ Summer: Acqua di Gio
6/ Winter: Spicebomb
7/ Under $30 to start: Nautica Voyage

8/ You need one, not six. Full breakdown + why each ↓
https://truake.com/diffr/blog/cologne-for-beginners-brand-guide
```

### First Apartment Cleaning Supplies
```
1/ Moving into your first apartment? You need ~10 cleaning supplies, not 40. One good brand each: 🧵

2/ All-purpose: Method
3/ Dish soap: Dawn
4/ Microfiber cloths: MR.SIGA (stop buying paper towels for everything)
5/ Scrubber: Scrub Daddy · Wipes: Clorox
6/ Floors: Shark stick vacuum + O-Cedar spin mop
7/ Bathroom: OXO · Trash: Glad · Paper towels: Bounty

8/ Buy the first 3, add the rest. Full kit + buy-order ↓
https://truake.com/diffr/blog/apartment-cleaning-supplies-brand-guide
```

### Women's Minimalist Wardrobe
```
1/ A minimalist wardrobe isn't owning less for its own sake — it's the fewest pieces that still cover your whole life. 8 slots, one brand each: 🧵

2/ Tee: COS · Cashmere: Quince
3/ Jeans: Everlane · Trouser: Arket
4/ White shirt: Uniqlo · Coat: Uniqlo
5/ Loafer: Vagabond · Bag: Polène

6/ Neutral colors = everything pairs by default. Start with the tee, jeans, white shirt ↓
https://truake.com/diffr/blog/womens-minimalist-wardrobe-brand-guide
```

### Women's Winter Layering
```
1/ Staying warm isn't one heroic coat — it's 3 layers, each with a job. The women's winter system, one brand per slot: 🧵

2/ Base: Uniqlo Heattech (moves sweat off skin)
3/ Mid: Patagonia fleece (traps heat)
4/ Outer: Patagonia down + a Uniqlo wool coat for town
5/ Extremities: Carhartt beanie · The North Face gloves · Smartwool socks · Sorel boots

6/ Get the base/mid/down first — the rest just protects it. Full system ↓
https://truake.com/diffr/blog/womens-winter-layering-brand-guide
```

### Women's Work Capsule
```
1/ A work wardrobe isn't a closet of outfits — it's a few separates that recombine into a different look every day. 9 pieces, one brand each: 🧵

2/ Blazer: J.Crew · Trousers: Aritzia
3/ White shirt: Everlane · Knit: Quince
4/ Sheath dress: J.Crew · Pencil skirt: Banana Republic
5/ Pumps: Cole Haan · Flats: Sam Edelman · Tote: Dagne Dover

6/ Buy the blazer, trousers, and white shirt first — a full week of outfits from there ↓
https://truake.com/diffr/blog/womens-work-capsule-brand-guide
```

### World Cup 2026 Kit Brands — thread, time to a match-day
```
1/ 48 teams at the 2026 World Cup. Cover the crests and it's really three companies on the pitch: Adidas dresses 14 teams, Nike 12, Puma 11. The other 11 are where it gets interesting. 🧵

2/ Adidas (14): Argentina, Germany, Spain, Mexico, Belgium, Japan, Colombia…
3/ Nike (12): Brazil, England, France, Portugal, USA, Croatia, Netherlands…
4/ Puma (11): Switzerland, Morocco, Senegal, Austria, Egypt, Ghana…

5/ The independents: Kelme (Jordan, Bosnia) · Marathon (Ecuador) · Kappa (Tunisia) · Umbro (DR Congo) · Reebok (Panama) · Jako (Iraq) · Capelli (Cape Verde) · Saeta (Haiti)

6/ And two brands most people outside the country have never seen: 7Saber on Uzbekistan, Majid on Iran. Every team is dressed by someone — it just isn't always the someone you'd guess.

7/ Team-by-team, all 48 — who actually wears what ↓
https://truake.com/diffr/blog/world-cup-2026-kit-brands
```

### 我的 Aritzia (My Aritzia) — READY (blog live 2026-06-24); time to a weekend
```
1/ Aritzia isn't one brand. It's 7 — each built for a different part of your week. Here's which sub-brand to wear when, and where it actually beats the rest. 🧵

2/ Work → Babaton. The Effortless Pant earns the hype. (Want it to outlast the trend? Theory.)

3/ Date night → Wilfred. Soft, romantic, French-girl. (The slip-dress crown still belongs to Reformation.)

4/ Weekend → TNA. Cozy, sporty, all-day. (Vuori or Alo if you actually sweat in them.)

5/ Night out → Sunday Best. Young, loud, fun.

6/ Winter → the Super Puff. Genuinely iconic. (Pound-for-pound warmth: Patagonia.)

7/ Build your whole week from one store — or cherry-pick the best of each. Both, decoded ↓
https://truake.com/diffr/blog/aritzia-sub-brands-guide

UGC: reply with your own — which Aritzia sub-brand is your work / date / weekend / night-out?
```

---

## posted

<!-- social agent moves entries here with the post URL + date -->
