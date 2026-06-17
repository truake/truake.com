// GEO/AEO supplementary content for the DB-driven brand-guide blog posts:
//   - BLOG_TLDR : answer-first "bottom line up front" lead (AI-citable summary)
//   - BLOG_FAQ  : 4 beginner Q&A per scene (visible section + FAQPage JSON-LD)
//
// Kept separate from posts.ts (which holds long-form essay HTML) because the
// brand-guide-specific maps (preset, scene slug) already live in [slug]/page.tsx
// rather than in posts.ts. FAQ renders as a VISIBLE section AND a FAQPage
// JSON-LD block — schema must mirror visible content (Google policy).
//
// All copy is evergreen, defensible beginner advice grounded in domain knowledge
// + Diffr's "one good pick per slot, don't overbuy" philosophy. Budget ranges are
// realistic and qualitative — no fabricated statistics.

// Answer-first TL;DR shown at the top of the article (after the header) and set
// as the BlogPosting `abstract`. Lead with the conclusion + what to buy first so
// AI engines (ChatGPT, Perplexity, AI Overviews) can extract a clean summary.
export const BLOG_TLDR: Record<string, string> = {
  'womens-minimalist-wardrobe-brand-guide':
    'Bottom line: a minimalist wardrobe is the fewest pieces that still cover your whole life, each good enough that you never reach for anything else. The core eight: an elevated tee, a cashmere crew, straight-leg jeans, a tailored trouser, a crisp white shirt, a wool coat, a leather loafer, and a structured bag. Buy in this order: the tee, jeans, and white shirt first (a complete casual look), then the trouser, knit, and loafer, then the coat and bag. Keep it all in neutral colors and everything pairs by default. Below is one brand per slot, no repeats.',
  'womens-winter-layering-brand-guide':
    'Bottom line: staying warm is a system of three layers, not one big coat — a base that moves sweat, a mid that traps heat, and an outer that blocks weather. The kit: a thermal base top, a fleece mid-layer, a down jacket, and a wool coat, plus a beanie, gloves, wool socks, winter boots, and a scarf. Buy in this order: the base, mid, and down first (a complete system), then the head, hands, and feet extremities, then the wool coat and scarf. Below is one brand per slot, no repeats.',
  'womens-work-capsule-brand-guide':
    'Bottom line: a work wardrobe is a small set of separates that recombine into a different outfit every day, not a closet of complete looks. The core nine: a blazer, tailored trousers, a white button-down, a sheath dress, a pencil skirt, a fine knit, pumps, flats, and a work tote. Buy in this order: the blazer, trousers, and white shirt first (a meeting-ready outfit), then the dress, skirt, and knit to double the week, then the shoes and bag. Keep it neutral and it all interchanges. Below is one brand per slot, no repeats.',
  'womens-capsule-wardrobe-brand-guide':
    'Bottom line: a women’s capsule wardrobe is a system, not a pile — build it around neutral pieces that all pair with each other. The core ten: a tee, a white button-down, jeans, tailored trousers, a knit sweater, a blazer, a little black dress, white sneakers, flats, and a structured tote. Buy in this order: the tee, jeans, button-down, and sneakers first (a complete casual wardrobe), then the blazer, trousers, and flats, then the dress, sweater, and tote. Keep everything in neutral colors and it all goes together. Below is one brand per slot, no repeats.',
  'camping-gear-brand-guide':
    'Bottom line: a beginner car-camping starter kit comes down to shelter and sleep first — a livable tent, a warm sleeping bag, and a plush sleeping pad — because bad sleep is the number one reason people quit camping. Buy in this order: tent, bag, and pad first, then a two-burner stove and a good cooler, then chairs, a lantern, a cook set, and a first aid kit. Built for two or a small family. Below is one brand per slot, no repeats.',
  'bike-commuting-gear-brand-guide':
    'Bottom line: a beginner bike-commuting starter kit is five things — a reliable bike, a helmet, front and rear lights, a way to carry gear, and a hardened lock. On a budget, buy in this order: bike, helmet, lock, and lights first (a safe, legal commute), then a rack and panniers, then weather gear. Spend on the lights, the lock, and durable tires first; skip the cycling-specific wardrobe. Below is one solid brand per slot, no repeats.',
  'running-gear-brand-guide':
    "Bottom line: the only gear a new runner truly needs is one pair of well-fitting running shoes — get fitted, expect to spend $120–160, and replace them every 300–500 miles. Skip the carbon-plate racers and the GPS watch until you've built a base. Below is Diffr's one-brand-per-slot starter kit.",
  'home-gym-brand-guide':
    'Bottom line: a beginner home gym starter kit needs surprisingly little — adjustable dumbbells, a mat, and a pull-up bar or bands train every major movement. On a budget, buy in this order: adjustable dumbbells and a mat first (a full-body workout on their own), then bands and a kettlebell, then the rest. A $300–600 setup built around adjustable dumbbells beats a garage of specialized gear. Below is one brand per slot, no repeats.',
  'home-coffee-brand-guide':
    "Bottom line: great home coffee comes down to fresh beans, a burr grinder, and a brew method you'll use daily — and the grinder matters more than a fancy brewer. You can start genuinely well for $100–150; leave espresso for later. Below is Diffr's one-brand-per-slot setup.",
  'home-office-brand-guide':
    'Bottom line: a productive home office starter kit rests on four things — a supportive chair, a desk at the right height, an external monitor, and good lighting. On a budget, buy in this order: the chair and the monitor first (where your body and eyes live), then the desk and daily tools; a standing desk and accessories can wait. Spend the most on the chair and the screen. Below is one brand per slot, no repeats.',
  'steak-dinner-brand-guide':
    "Bottom line: a restaurant-quality steak at home needs just a heavy skillet, an instant-read thermometer, and tongs — the thermometer is what guarantees doneness. One good chef's knife beats a matching block. Below is Diffr's one-brand-per-slot kit for cooking at home.",
  'hiking-gear-brand-guide':
    'Bottom line: a first day hike needs four things — trail shoes, a ~20L pack, hands-free water, and weather layers — plus good socks and an offline map app, the two cheap items beginners skip. Budget roughly $250–400, with shoes and pack the big line items; skip stiff boots and technical gear until the trail asks for them. Below is one brand per slot, no repeats.',
  'yoga-gear-brand-guide':
    'Bottom line: yoga needs a mat and a body — everything else is a prop that makes poses accessible. Buy one quality mat (the one place not to cheap out, ~$90–140 with a block and strap), add blocks and a strap for tight beginner bodies, and leave the bolster, towel, and meditation cushion until a specific practice asks for them. Below is one brand per slot, no repeats.',
  'pc-gaming-gear-brand-guide':
    'Bottom line: past the PC itself, a beginner gaming setup is four essentials — monitor, keyboard, mouse, headset — plus a chair worth not cheaping out on. On a budget, buy in this order: monitor and the input trio first (a complete setup), then the chair and headset, then the mic and stream deck. Spend on the monitor (high refresh beats high resolution) and the chair. Below is one brand per slot, no repeats.',
  'backpacking-gear-brand-guide':
    'Bottom line: a beginner backpacking starter kit comes down to the big three — pack, tent, and sleep system (bag + pad) — which dominate your weight, space, and budget. Buy in this order: the big three first (rent or borrow them for your first trips before committing), then a stove, water filter, headlamp, and first aid kit, then the comfort extras. Budget roughly $700–1,200. Skip ultralight gear until you know what actually bothers you. Below is one brand per slot, no repeats.',
  'skincare-brand-guide':
    'Bottom line: a beginner skincare starter kit is three steps — cleanse, moisturize, and protect with sunscreen — and sunscreen matters most, by far. On a budget, buy in this order: cleanser, moisturizer, and sunscreen first (a complete routine on their own), then a vitamin C serum; skip toner and eye cream. The whole effective kit costs about $60–100 and is mostly drugstore — expensive rarely means better here. Below is one brand per slot, no repeats.',
  'makeup-brand-guide':
    'Bottom line: an everyday beginner face is about five products — a natural base, concealer, mascara, blush, and a forgiving lip — plus a couple of brushes and a sponge to apply them. Go mostly drugstore with one or two splurges (concealer, a good sponge); skip contour, eyeshadow, and setting products until later. Start with the items hardest to apply badly. Below is one brand per slot, no repeats.',
  'casual-wardrobe-brand-guide':
    'Bottom line: a versatile starter wardrobe is a system, not a pile — build it around a few neutral pieces that all pair with each other. Buy in this order: a good plain tee, a mid-wash slim jean, and a clean white sneaker first (a complete outfit on their own), then a casual jacket and a leather belt, then an everyday watch and sunglasses. Keep everything in neutral colors (white, navy, grey, brown) and it all goes with everything. Below is one brand per slot, no repeats.',
  'work-wardrobe-brand-guide':
    'Bottom line: a first work capsule wardrobe is mix-and-match separates, not one suit. The core four are a crisp dress shirt, charcoal or navy trousers, dark-brown leather dress shoes, and a navy blazer; add a matching belt, a clean work bag, and one good necktie. On a first-job budget, buy in this order — shirt, trousers, and shoes first (a complete interview-ready outfit), then the blazer (the highest-impact upgrade), then the rest. Below is one brand per slot, no repeats.',
  'winter-layering-brand-guide':
    'Bottom line: a winter layering starter kit is a system, not one heavy coat — base layer, mid layer, insulation, and a weatherproof shell, plus the three extremities (head, hands, feet) where most heat escapes. Buy in this order: a thermal base layer, a fleece mid layer, and warm boots first, then the insulated jacket and parka — and do not skip the beanie and gloves, the cheapest, highest-impact warmth beginners miss. Add and shed layers to match the cold. Below is one brand per slot, no repeats.',
}

export interface FaqItem {
  q: string
  a: string
}

export const BLOG_FAQ: Record<string, FaqItem[]> = {
  'womens-minimalist-wardrobe-brand-guide': [
    {
      q: 'What is a minimalist wardrobe?',
      a: 'A minimalist wardrobe is a small set of high-quality, neutral pieces that all pair with each other, chosen so you own less but always have something to wear. The point is not a magic number — it is owning the fewest pieces that still cover your whole life, each one good enough that you never reach for anything else.',
    },
    {
      q: 'How many pieces should a minimalist wardrobe have?',
      a: 'For a beginner, around eight to twelve core pieces is the sweet spot — enough to dress for most of life without a closet full of orphans. Start with a tight eight in neutral colors, wear it for a season, then add only what you find you actually reach for. Fewer and better, all matching, is the whole idea.',
    },
    {
      q: 'What is the difference between a minimalist wardrobe and a capsule wardrobe?',
      a: 'They overlap heavily — both are small, neutral, mix-and-match systems. A capsule wardrobe emphasizes maximizing outfit combinations from a set of pieces; a minimalist wardrobe emphasizes owning as little as possible while still being covered. In practice you build them the same way: one good piece per slot, neutral colors, no repeats.',
    },
    {
      q: 'What should I buy first for a minimalist wardrobe?',
      a: 'Start with three neutral pieces: a good elevated tee, straight-leg jeans, and a crisp white shirt — together they are a complete casual look and pair in any combination. Add a tailored trouser, a cashmere knit, and a leather loafer to dress it up, then a wool coat and a structured bag. Buy the core three first; neutrals are what make everything go together.',
    },
  ],

  'womens-winter-layering-brand-guide': [
    {
      q: 'How do I layer clothes for winter?',
      a: 'Use three layers, each with a job: a thin thermal base against your skin to move sweat, a mid layer like fleece to trap heat, and an outer layer to block wind and weather. Add or shed the middle layers to match the cold. Most heat escapes from your head, hands, and feet, so a beanie, gloves, and warm socks matter as much as the coat.',
    },
    {
      q: 'What do I actually need to stay warm in winter?',
      a: 'A thermal base top, a fleece mid-layer, and a down jacket are the core system — base, mid, outer. Add a wool coat for town, plus a beanie, touchscreen gloves, wool socks, and waterproof winter boots for the extremities. A scarf seals the warm air at your collar. Get the three layers first; everything else protects them.',
    },
    {
      q: 'How much does a beginner winter layering kit cost?',
      a: 'A complete, quality system runs roughly $500–800, with the down jacket, the boots, and the wool coat as the biggest line items. You can start cheaper with an inexpensive thermal base and fleece, then add the warm outer pieces. Do not skip the beanie and gloves — they are the cheapest, highest-impact warmth.',
    },
    {
      q: 'Is one warm coat enough for winter?',
      a: 'Usually not, on its own. A single heavy coat traps heat but cannot adjust — you overheat indoors and freeze when it is truly cold. A layered system lets you add and remove warmth to match the conditions, which is both more comfortable and warmer at the extremes. Buy the layers, not just the coat.',
    },
  ],

  'womens-work-capsule-brand-guide': [
    {
      q: 'What does a women’s work capsule wardrobe need?',
      a: 'About nine mix-and-match separates: a blazer, tailored trousers, a white button-down, a sheath dress, a pencil skirt, a fine knit, pumps, flats, and a work tote. Buy one good version of each in neutral colors and they recombine into a full week of outfits without repeating. Skip trend pieces until the core is covered.',
    },
    {
      q: 'How do I build a professional wardrobe on a budget?',
      a: 'Buy separates, not outfits, and buy them in neutral colors so everything interchanges. Start with the three highest-impact pieces — a blazer, tailored trousers, and a white shirt — which alone make a meeting-ready look. Add the dress, skirt, and knit to multiply your combinations, then the shoes and bag. One good blazer does more than three cheap dresses.',
    },
    {
      q: 'What should I buy first for a work wardrobe?',
      a: 'Start with a blazer, tailored trousers, and a crisp white button-down in neutral colors — together they are a complete, interview-ready outfit and pair with almost anything. The blazer is the single highest-impact piece. Add a sheath dress, a pencil skirt, and a fine knit next to double the week, then pumps, flats, and a work tote.',
    },
    {
      q: 'What colors should a work capsule be?',
      a: 'Build the core in neutrals — black, navy, grey, white, and one warm neutral like camel or stone. Neutrals pair with each other by default, so any top works with any bottom and the whole capsule interchanges. Add one accent color only after the neutral base is solid; that is what keeps a small wardrobe from feeling repetitive.',
    },
  ],

  'womens-capsule-wardrobe-brand-guide': [
    {
      q: 'What does a women’s capsule wardrobe need at a minimum?',
      a: 'About ten versatile pieces cover almost everything: a t-shirt, a white button-down, jeans, tailored trousers, a knit sweater, a blazer, a little black dress, white sneakers, flats, and a structured tote. Buy one good version of each in neutral colors and they all pair with each other. Skip trend pieces until the core is covered.',
    },
    {
      q: 'How many pieces should a capsule wardrobe have?',
      a: 'For a beginner, around ten to fifteen core pieces is the sweet spot — enough to make weeks of non-repeating outfits without a closet full of orphans. Start with a tight ten in neutral colors, wear it for a season, then add only the pieces you find you actually reach for. Fewer and better, all matching, beats more.',
    },
    {
      q: 'What colors should a capsule wardrobe be?',
      a: 'Build the core in neutrals — white, black, grey, navy, and one warm neutral like camel or stone. Neutrals pair with each other by default, so any top goes with any bottom. Add one or two accent colors only after the neutral base is solid; that is what keeps everything interchangeable.',
    },
    {
      q: 'What should I buy first for a capsule wardrobe?',
      a: 'Start with three neutral pieces: a good t-shirt, a pair of jeans, and clean white sneakers — together they are a complete casual outfit and pair in any combination. Add a white button-down and a blazer next to dress it up, then the trousers, dress, sweater, flats, and tote. Buy the core three first; neutrals are what make everything go together.',
    },
  ],

  'camping-gear-brand-guide': [
    {
      q: 'What do I actually need for my first camping trip?',
      a: 'Shelter and sleep come first: a livable tent, a warm sleeping bag, and a comfortable sleeping pad. Add a two-burner stove and a cooler and you can camp and eat well for a weekend. Chairs, a lantern, a cook set, and a first aid kit round it out. Get the sleep system right before anything else — bad sleep is what makes beginners quit.',
    },
    {
      q: 'How much does a beginner camping setup cost?',
      a: 'A complete, quality car-camping kit for two runs roughly $600–1,000, with the tent, sleeping bags, and cooler as the biggest line items. You can start cheaper by borrowing a tent and bags for your first trip before committing, then buy the pieces you found you actually needed. Spend on sleep and the cooler; save on the extras.',
    },
    {
      q: 'Is car camping gear different from backpacking gear?',
      a: 'Yes, and it matters. Car camping prizes comfort and space because you carry nothing — a big tent, a plush mattress, a two-burner stove, a heavy cooler. Backpacking prizes light weight because it all goes on your back. Buying ultralight backpacking gear for car camping wastes money on a problem you do not have; buy the comfortable version.',
    },
    {
      q: 'What does a camping starter kit need at a minimum?',
      a: 'Three essentials get you a good night outdoors: a tent, a sleeping bag, and a sleeping pad. Add a stove and a cooler to eat well, then chairs, a lantern, a cook set, and a first aid kit. Buy the tent, bag, and pad first — comfortable sleep is the difference between a trip you repeat and one you never do again.',
    },
  ],

  'bike-commuting-gear-brand-guide': [
    {
      q: 'What gear does a beginner bike commuter actually need to start?',
      a: 'Five things cover most commutes: a reliable bike, a helmet, front and rear lights, a way to carry your stuff (a pannier or backpack), and a good lock. Everything else — cycling-specific clothing, clipless pedals, a bike computer — can wait until your route tells you what you actually miss. Start with the essentials and let real riding decide the rest.',
    },
    {
      q: 'How much should I spend on my first commuter bike?',
      a: 'A dependable commuter bike runs roughly $400–800 new, or less secondhand from a reputable shop that services it first. Below that you usually pay the difference later in repairs. The bigger mistake is buying a featherweight race bike to commute on — you want durability, mounts for racks and fenders, and tires that shrug off potholes, not a carbon frame.',
    },
    {
      q: 'Do I need a special lock, or will any lock do?',
      a: 'For city parking, a hardened U-lock or a heavy folding lock is the single most important security purchase — cable locks are cut in seconds. Budget $50–100 if you leave the bike outside; it is cheap insurance against losing the whole thing. Lock the frame and rear wheel to a fixed object, and take your lights and bags with you.',
    },
    {
      q: 'What do commuters overspend on at the start?',
      a: 'Apparel. Beginners often buy a full kit before their first week. For most commutes under five miles, normal clothes are fine — add a packable rain jacket and gloves when the weather demands it. Spend on lights, a lock, and reliable tires first: the things that keep you safe and rolling.',
    },
    {
      q: 'What does a bike commuting starter kit need at a minimum?',
      a: 'Five things get you commuting safely: a reliable bike, a helmet, a hardened lock, and front and rear lights — plus a way to carry your stuff (a rack and pannier beat a sweaty backpack). That is a complete, legal commute. Add fenders and weather gear as your route demands. Buy the lock and lights first; they protect you and the bike.',
    },
  ],

  'running-gear-brand-guide': [
    {
      q: 'What do I actually need to start running as a beginner?',
      a: 'Realistically, one thing: running shoes that fit your foot and gait. Add moisture-wicking socks and weather-appropriate clothes you probably already own, and you are running. Watches, hydration vests, and recovery tools stay optional until you are consistently logging 15+ miles a week.',
    },
    {
      q: 'How much should I spend on my first running shoes?',
      a: 'A quality cushioned daily trainer runs about $120–160 — and it is the one place not to cut corners, because shoes are your only real injury-prevention equipment. Get fitted at a running store for your foot shape and stride, then buy that model wherever it is cheapest. Replace them every 300–500 miles.',
    },
    {
      q: 'Are carbon-plate racing shoes worth it for a beginner?',
      a: 'No. Carbon-plate "super shoes" are built for race-day speed, not the easy, durable mileage beginners need to build a base. They wear out faster and do little at beginner paces. Put your money into one comfortable daily trainer; the racing shoes can come once you have a reason to race.',
    },
    {
      q: 'Do I need a GPS running watch to start?',
      a: 'No. Your phone tracks distance and pace for free. A GPS watch earns its place once you train by heart rate or follow a structured plan, but it changes nothing about your first few months. Run first; buy the watch when you have a question only it can answer.',
    },
  ],

  'home-gym-brand-guide': [
    {
      q: 'What is the minimum equipment for a beginner home gym?',
      a: 'A small kit covers most of it: an adjustable pair of dumbbells (or a barbell with plates), a sturdy bench, and a pull-up bar or resistance bands. That combination trains every major movement pattern. You do not need a machine per muscle — you need a few versatile tools and a plan.',
    },
    {
      q: 'How much does a basic home gym cost to set up?',
      a: 'A functional beginner setup runs roughly $300–600 — adjustable dumbbells are the biggest single cost, and they replace an entire rack of fixed weights. You can start cheaper with quality resistance bands and bodyweight work, then add load as you get stronger. Spend on what you will use every session, not the novelty machine.',
    },
    {
      q: 'Adjustable dumbbells or a barbell setup — which comes first?',
      a: 'For most people in limited space, adjustable dumbbells win: the widest range of exercises per dollar and per square foot. A barbell, rack, and plates unlock heavier lower-body lifts but need room and a safety setup. Start with adjustable dumbbells and a bench; add a barbell when your training outgrows them.',
    },
    {
      q: 'What do beginners waste the most money on in a home gym?',
      a: 'Single-purpose machines and gadgets — the ab roller, the vibration plate, the cardio machine that becomes a clothes rack. They eat space and train one thing. A pair of adjustable dumbbells plus consistency will out-build a garage full of specialized equipment every time.',
    },
    {
      q: 'If I am building a home gym from scratch, what should I buy first?',
      a: 'Start with one pair of adjustable dumbbells and a mat — together they are a complete full-body workout in almost no space. Add resistance bands and a kettlebell next for pull-up assistance and conditioning, then a doorway pull-up bar, a foam roller, and flooring as budget allows. Adjustable dumbbells first is the rule: a single pair replaces a whole rack and trains every movement.',
    },
  ],

  'home-coffee-brand-guide': [
    {
      q: 'What do I need to start making good coffee at home?',
      a: 'Three things matter most: fresh whole beans, a burr grinder, and a brew method you will use daily (pour-over, French press, or a simple drip machine). The grinder matters more than a fancy brewer — consistent grounds are the difference between flat and flavorful. Skip the espresso machine until you know you specifically want espresso.',
    },
    {
      q: 'Do I really need a burr grinder, or is pre-ground fine?',
      a: 'A burr grinder is the single highest-impact upgrade in home coffee. Pre-ground goes stale fast and brews unevenly; grinding fresh per cup transforms flavor far more than an expensive brewer would. If you buy one thing, buy a burr grinder — even an entry-level one beats pre-ground.',
    },
    {
      q: 'How much should a beginner spend to start brewing at home?',
      a: 'You can start genuinely well for around $100–150: a solid entry-level burr grinder plus a pour-over or French press. That setup beats most café drip. Espresso is a separate, much pricier hobby — a worthwhile machine and grinder run into the many hundreds — so go there only if espresso is the goal.',
    },
    {
      q: 'Espresso machine or pour-over for a first setup?',
      a: 'Pour-over or French press, almost always. It is inexpensive, forgiving, and teaches the fundamentals — grind, ratio, water — that make all coffee better. Espresso demands a pressurized machine, a finer and more consistent grinder, and a steeper learning curve. Master brewed coffee first; espresso will make more sense later.',
    },
  ],

  'home-office-brand-guide': [
    {
      q: 'What is actually essential for a productive home office?',
      a: 'Four things carry most of the experience: a supportive chair, a desk at the right height, an external monitor, and decent lighting. Your body is in the chair for hours, so that is where comfort compounds. Mechanical keyboards, standing desks, and webcams are nice, but they come after sit-comfort and screen height.',
    },
    {
      q: 'Where should a beginner spend the most money in a home office?',
      a: 'The chair. It is the one piece you are in physical contact with all day, and a good ergonomic chair pays for itself in avoided back and neck pain. After that, an external monitor at eye level does more for daily posture than almost any other upgrade. Spend on the chair and the screen; save on accessories.',
    },
    {
      q: 'Is a standing desk worth it for a beginner?',
      a: 'It can be, but it is not the first purchase. A standing desk helps once you already have a comfortable chair and good monitor height — it adds variety, not a fix for a bad setup. Get the seated ergonomics right first; add a sit-stand desk later if you find yourself wanting to move during the day.',
    },
    {
      q: 'How much should I budget for a decent home office?',
      a: 'A genuinely comfortable setup runs roughly $500–900, with the chair and monitor as the two biggest line items. You can phase it: start with the best chair you can afford and one external monitor, then add lighting, a keyboard, and a desk upgrade over time. Buying everything at once usually means overspending on the wrong things.',
    },
    {
      q: 'What does a home office starter kit need at a minimum?',
      a: 'Three things get you working comfortably: a supportive chair, an external monitor at eye level, and decent lighting — a real table you already own covers the desk to start. Add a keyboard, mouse, and a sit-stand desk next, then headphones and a webcam for calls. Buy the chair and monitor first; they carry the comfort.',
    },
  ],

  'steak-dinner-brand-guide': [
    {
      q: 'What equipment do I need to cook a great steak at home?',
      a: 'Less than you would think: a heavy cast-iron or stainless skillet, an instant-read thermometer, and tongs. The skillet delivers the high, even heat that builds a crust; the thermometer is what actually guarantees the right doneness. Sous-vide rigs and fancy grills are optional — the skillet-and-thermometer combo cooks restaurant-quality steak.',
    },
    {
      q: 'Do I need an expensive knife set to start cooking?',
      a: 'No. One good chef’s knife does almost everything a beginner needs — a matching block is mostly filler. Buy a single quality 8-inch chef’s knife, keep it sharp, and add a paring knife if you want. Sharpness matters far more than the number of knives in the drawer.',
    },
    {
      q: 'What is the most important tool for cooking steak to the right doneness?',
      a: 'An instant-read thermometer. Doneness is a temperature, not a guess — pull the steak a few degrees before your target and let it rest. It is an inexpensive tool that removes the biggest source of beginner failure and works for everything else you cook, too.',
    },
    {
      q: 'Where do beginner cooks overspend?',
      a: 'Gadgets and matching sets — the 15-piece knife block, the single-use tools, the appliance for one specific dish. A heavy skillet, a sharp chef’s knife, and a thermometer will cook more meals better than a cabinet of specialized gear. Buy a few quality basics and learn to use them.',
    },
  ],

  'hiking-gear-brand-guide': [
    {
      q: 'What do I actually need for my first day hike?',
      a: 'Realistically four things: trail-worthy shoes, a small pack, water, and weather-appropriate layers you likely already own. Add a hat, sun protection, and a basic first aid kit and you are equipped for almost any maintained day-hike trail. Poles, headlamps, and technical apparel come once the trail tells you that you want them.',
    },
    {
      q: 'How much should I spend to start day hiking?',
      a: 'A complete, quality day-hiking kit runs roughly $250–400, with the shoes and the pack as the two biggest items. You can start cheaper with trail-running shoes you own and a regular backpack; upgrade the moment comfort or fit becomes the thing limiting your hikes.',
    },
    {
      q: 'Do I need hiking boots, or are trail shoes fine?',
      a: 'For maintained day-hike trails, low hiking shoes or trail runners are plenty — and often better than stiff boots, which beginners over-buy. Save heavy waterproof boots for genuinely rough, wet, or heavily loaded terrain. Comfort and traction matter more than ankle armor for a day hike.',
    },
    {
      q: 'What is the most overlooked beginner hiking item?',
      a: 'Socks and navigation. Good merino socks prevent the blisters that end hikes, and an offline map app prevents the wrong turns that turn a two-hour loop into an ordeal. Both are cheap and both get skipped.',
    },
  ],

  'yoga-gear-brand-guide': [
    {
      q: 'What do I actually need to start yoga at home?',
      a: 'One thing: a decent mat. With a mat and a free video you can practice for months. Blocks and a strap are the first worthwhile additions — they make tight beginner bodies fit the poses — and everything else (bolster, towel, cushion) waits until a specific style of practice calls for it.',
    },
    {
      q: 'How much should a beginner spend on yoga gear?',
      a: 'A quality mat plus a block and strap runs about $90–140 total, and the mat is the one place not to cheap out — a sliding, compressing mat is the fastest way to dislike yoga. The rest of the kit can be added one inexpensive prop at a time.',
    },
    {
      q: 'Is an expensive yoga mat worth it for a beginner?',
      a: 'Yes, more than almost any other beginner-gear question. A dense, grippy mat protects your joints on hard floors and stays put when you sweat, and a buy-once mat outlasts three cheap ones. It is the single prop you are in contact with every session.',
    },
    {
      q: 'Do I need yoga blocks and a strap as a beginner?',
      a: 'Probably more than an experienced yogi does. Props exist to bring the pose to your current flexibility — blocks raise the floor, a strap extends your reach — so beginners with tight hamstrings and shoulders benefit most. They are cheap and they make the practice work instead of frustrate.',
    },
  ],

  'pc-gaming-gear-brand-guide': [
    {
      q: 'What do I actually need for a beginner PC gaming setup?',
      a: 'Beyond the PC itself, four peripherals carry the experience: a monitor, a keyboard, a mouse, and a headset. A chair you will sit in for hours is the next priority. A mic and a stream deck are for voice chat and content creation — skip them until you specifically need them.',
    },
    {
      q: 'Where should a beginner spend the most on a battlestation?',
      a: 'The monitor and the chair. The monitor is what you stare at, and a high-refresh panel transforms how the game feels far more than a flashier keyboard does; the chair is what your back lives in. Peripherals can be solid-and-cheap; those two reward spending.',
    },
    {
      q: 'Do I need a 1440p or 4K monitor to start?',
      a: 'No. For most beginners a 1080p, 165Hz monitor is the better buy — a high refresh rate feels smoother and runs well on modest hardware, while 1440p and 4K demand a stronger, pricier GPU to drive. Match the monitor to the PC you actually have, not the one you wish you had.',
    },
    {
      q: 'Is an expensive gaming chair worth it for a beginner?',
      a: 'It is the one peripheral where buying once beats buying cheap. You are in it for hours, and a quality chair prevents the back and neck pain a cheap chair causes within months. If you trim the budget anywhere, trim the mousepad and the mic — not the chair.',
    },
    {
      q: 'What does a PC gaming starter kit need at a minimum?',
      a: 'Beyond the tower: a high-refresh monitor, a keyboard, a mouse, and a mousepad get you playing — that is the core setup. Add a chair and a headset next for comfort and multiplayer, then a mic and stream deck only if you stream. Buy the monitor first; refresh rate changes how every game feels.',
    },
  ],

  'backpacking-gear-brand-guide': [
    {
      q: 'What do I actually need for my first backpacking trip?',
      a: 'The big three dominate everything: a pack, a shelter (tent), and a sleep system (bag plus pad). Add a stove, a water filter, a headlamp, and a first aid kit and you can complete almost any beginner overnight. Cooksets, poles, and the gram-shaving upgrades come later.',
    },
    {
      q: 'How much does a beginner backpacking kit cost?',
      a: 'A complete, quality setup runs roughly $700–1,200, with the big three as the bulk of it. You can cut that substantially by renting or borrowing the big-ticket items for your first few trips before committing — the smartest beginner move there is.',
    },
    {
      q: 'What is the big three in backpacking?',
      a: 'Your pack, your shelter, and your sleep system (bag plus pad). They dominate your pack weight, volume, and cost, so they are where beginners should focus attention and budget. Get those three right and the rest of the kit is comparatively cheap and easy.',
    },
    {
      q: 'Should a beginner buy ultralight gear?',
      a: 'No. Ultralight gear is expensive, often less durable, and solves a problem (shaving ounces over big miles) that beginners do not yet have. Start with durable, comfortable, well-priced gear, learn what actually bothers you on trail, then upgrade deliberately. Comfort and reliability beat weight for a first season.',
    },
    {
      q: 'What does a backpacking starter kit need at a minimum?',
      a: 'The big three carry it: a pack, a tent, and a sleep system (bag plus pad). Add a stove, a water filter, a headlamp, and a first aid kit and you have a complete, safe overnight kit. Cooksets, poles, and a navigation app round it out. Get the big three right first — and rent or borrow them before you buy.',
    },
  ],

  'skincare-brand-guide': [
    {
      q: 'What does a beginner actually need for skincare?',
      a: 'Three steps, every morning: cleanse, moisturize, and protect with sunscreen. That trio covers the fundamentals for almost everyone. A vitamin C serum is the best optional add, and toners and eye creams are genuinely optional — skip them until you have a specific reason.',
    },
    {
      q: 'What is the most important skincare step?',
      a: 'Sunscreen, by a wide margin. Daily sun protection does more to keep skin healthy and slow visible aging than any serum or treatment. If a beginner does only one thing, it should be wearing a facial sunscreen every morning, rain or shine.',
    },
    {
      q: 'How much should a beginner spend on skincare?',
      a: 'A complete, effective beginner routine costs about $60–100 and is mostly drugstore. Skincare is one area where expensive rarely means better for beginners — the dermatologist-recommended staples are affordable. Spend on a sunscreen you will actually wear, not on a ten-step prestige routine.',
    },
    {
      q: 'Do I need a separate morning and night routine?',
      a: 'Eventually, but not to start. A simple morning routine (cleanse, moisturize, sunscreen) plus removing it at night with a cleanser will serve a beginner well. Night-specific actives like retinol are a deliberate next step, added one at a time once the basics are a habit.',
    },
    {
      q: 'What should a beginner skincare starter kit include?',
      a: 'Three essentials: a gentle cleanser, a basic moisturizer, and a facial sunscreen — that is a complete starter kit that works for almost any skin type. A vitamin C serum is the one worthwhile add. Skip the toner, eye cream, and ten-step extras until you have a specific reason. Buy the three essentials first, and the sunscreen above all.',
    },
  ],

  'makeup-brand-guide': [
    {
      q: 'What does a beginner actually need for an everyday makeup look?',
      a: 'A natural everyday face needs about five things: a base (foundation or tinted moisturizer), concealer, mascara, a touch of blush, and a lip. Add the tools to apply them — a few brushes and a sponge — and you are done. Eyeshadow, contour, and setting products are for later or for occasions.',
    },
    {
      q: 'Where should a beginner spend the most on makeup?',
      a: 'Mostly drugstore is the right call, with one or two strategic splurges — a good concealer and a quality sponge or brush set reward spending, because application quality shows. Foundation, mascara, blush, and primer all have excellent affordable options. Do not buy prestige across the board to start.',
    },
    {
      q: 'Do I need expensive makeup brushes to start?',
      a: 'No. An affordable starter set from a brand like Real Techniques applies everything in a beginner kit well, and a damp makeup sponge does the blending a beginner needs most. The thirty-piece luxury brush set is for hobbyists, not beginners — soft and clean matters more than the logo.',
    },
    {
      q: 'What is the most beginner-friendly makeup item?',
      a: 'A sheer, universal lip tint and a buildable blush — both are nearly impossible to apply badly and instantly make a face look more put-together. Mascara is the other high-impact, low-skill item. Start where mistakes are hardest to make.',
    },
  ],

  'casual-wardrobe-brand-guide': [
    {
      q: 'What does a beginner casual wardrobe actually need?',
      a: 'Seven versatile pieces cover almost everything: a good plain tee, a mid-wash slim jean, a clean white sneaker, a casual jacket, a leather belt, an everyday watch, and sunglasses. Buy one good version of each in neutral colors and they all pair with each other. Skip trend pieces and duplicates until the basics are covered.',
    },
    {
      q: 'How do I make sure everything in my wardrobe goes together?',
      a: 'Stick to a neutral core — white, navy, grey, and brown — and buy your pieces in those colors first. Neutrals pair with each other by default, so a tee, jeans, and a jacket in those tones become a dozen outfits. Add one or two accent colors only after the neutral base is solid.',
    },
    {
      q: 'What should I spend the most on in a casual wardrobe?',
      a: 'The pieces you wear daily and that take the most abuse — your jeans and your sneakers. A well-cut jean and a quality leather sneaker get worn constantly and look better as they age. Tees, belts, and accessories can be inexpensive without anyone noticing.',
    },
    {
      q: 'What do beginners overbuy when building a wardrobe?',
      a: 'Trend pieces and near-duplicates — five graphic tees, three trendy jackets, sneakers in colors that match nothing. The fix is the capsule approach: one good version of each slot in a neutral color, then stop. Owning less but pairing better beats a closet full of orphan pieces.',
    },
    {
      q: 'What should I buy first to build a starter wardrobe?',
      a: 'Start with three neutral pieces: a good plain tee, a mid-wash slim jean, and clean white sneakers. In white, navy, or grey, those three already make a complete casual outfit and pair in any combination. Add a casual jacket and a leather belt next, then an everyday watch and sunglasses. Buy the core three first; neutrals are what make everything go together.',
    },
  ],

  'work-wardrobe-brand-guide': [
    {
      q: 'What does a beginner need for a first professional wardrobe?',
      a: 'Seven pieces: a dress shirt, dress trousers, dark-brown leather dress shoes, a navy blazer, a matching belt, a clean work bag, and one good necktie. Two shirts and two pairs of trousers already mix into a week of outfits. Build separates, not a single suit you can wear only one way.',
    },
    {
      q: 'Should I buy a suit or separates first?',
      a: 'Separates, almost always. A navy blazer with charcoal or grey trousers is more versatile than a matching suit, because each piece also works on its own and mixes with the rest of your wardrobe. A full suit is for specific formal needs; for most offices, smart separates do more.',
    },
    {
      q: 'What should I spend the most on for work clothes?',
      a: 'The blazer and the shoes. The blazer is what makes an outfit read professional, and good leather shoes — ideally recraftable — last for years and anchor everything. Shirts and ties have excellent affordable options, so put the budget where it shows and lasts.',
    },
    {
      q: 'What color dress shoes should a beginner buy first?',
      a: 'Dark brown, not black. Brown leather pairs with navy, grey, and charcoal — the colors a beginner wardrobe is built on — while black is more restricted to formal and very dark outfits. One pair of dark-brown oxfords or derbies covers the widest range of work looks.',
    },
    {
      q: 'What should I buy first for a first office job on a budget?',
      a: 'Start with three pieces: a dress shirt, dress trousers, and a pair of dark-brown leather shoes. A white shirt, charcoal trousers, and brown shoes is a complete, interview-ready outfit on their own. Add a navy blazer next — it is the highest-impact upgrade — then a matching belt, a clean work bag, and a tie only if your role calls for one. Buying in that order lets you build a full work capsule wardrobe without paying for it all at once.',
    },
  ],

  'winter-layering-brand-guide': [
    {
      q: 'How does layering actually keep you warm?',
      a: 'Each layer does one job. A base layer moves sweat off your skin so you do not get chilled, a mid layer (usually fleece) traps body heat, an insulated jacket adds warmth, and a shell or parka blocks wind and snow. Add and shed layers to match the cold instead of relying on one heavy coat.',
    },
    {
      q: 'What is the difference between a base layer, a mid layer, and a shell?',
      a: 'The base layer sits against your skin and manages moisture; the mid layer (fleece or a light insulated piece) holds warmth; the outer shell or parka stops wind, rain, and snow from stripping that warmth away. A good system has all three, and you remove the outer ones as you warm up.',
    },
    {
      q: 'What cold-weather items do beginners skip and regret?',
      a: 'A proper base layer and the extremities — a beanie, gloves, and a warm scarf. A large share of body heat escapes through the head and hands, so these inexpensive items make the biggest difference. Many beginners buy a pricey coat and then freeze because their head, hands, and feet are bare.',
    },
    {
      q: 'Do I need an expensive parka to stay warm?',
      a: 'No. Warmth comes from the system, not one pricey coat. A solid thermal base layer, a fleece mid layer, and a mid-range insulated parka keep you warmer than a single luxury coat over a t-shirt. Spend on warm boots and a good mid layer before splurging on the outer shell.',
    },
    {
      q: 'How many layers should I wear by temperature?',
      a: 'Match layers to the temperature: around 50°F a fleece alone is plenty; in the 40s add a thermal base layer; in the 30s add an insulated jacket; and below freezing add the parka shell plus a beanie, gloves, and a wool scarf. The beginner rule of thumb is to dress to feel slightly cool standing still — you warm up fast once moving, and overheating then sweating is what makes you cold later.',
    },
    {
      q: 'What should I buy first for my first winter?',
      a: 'Start with the working layers: a thermal base layer, a fleece mid layer, and warm waterproof boots — that trio keeps you genuinely warm. Add an insulated jacket and a parka shell for serious cold. And do not skip the beanie, gloves, and a wool scarf: a large share of your heat escapes through your head and hands, so these cheap items are the highest warmth-per-dollar buy. Buy them before any pricey coat.',
    },
  ],
}
