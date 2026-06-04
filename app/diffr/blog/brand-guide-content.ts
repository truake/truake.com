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
  'bike-commuting-gear-brand-guide':
    'Bottom line: a beginner bike commuter needs five things — a reliable bike, a helmet, front and rear lights, a way to carry gear, and a hardened lock. Spend on lights, the lock, and durable tires first; skip the cycling-specific wardrobe until your route tells you what you actually miss. Below is one solid brand per slot, no repeats.',
  'running-gear-brand-guide':
    "Bottom line: the only gear a new runner truly needs is one pair of well-fitting running shoes — get fitted, expect to spend $120–160, and replace them every 300–500 miles. Skip the carbon-plate racers and the GPS watch until you've built a base. Below is Diffr's one-brand-per-slot starter kit.",
  'home-gym-brand-guide':
    'Bottom line: a beginner home gym needs surprisingly little — adjustable dumbbells, a sturdy bench, and a pull-up bar or bands train every major movement. Skip the single-purpose machines; a $300–600 setup built around adjustable dumbbells beats a garage of specialized gear. Below is one brand per slot, no repeats.',
  'home-coffee-brand-guide':
    "Bottom line: great home coffee comes down to fresh beans, a burr grinder, and a brew method you'll use daily — and the grinder matters more than a fancy brewer. You can start genuinely well for $100–150; leave espresso for later. Below is Diffr's one-brand-per-slot setup.",
  'home-office-brand-guide':
    'Bottom line: a productive home office rests on four things — a supportive chair, a desk at the right height, an external monitor, and good lighting. Spend the most on the chair and the screen; a standing desk and accessories can wait. Below is one brand per slot, no repeats.',
  'steak-dinner-brand-guide':
    "Bottom line: a restaurant-quality steak at home needs just a heavy skillet, an instant-read thermometer, and tongs — the thermometer is what guarantees doneness. One good chef's knife beats a matching block. Below is Diffr's one-brand-per-slot kit for cooking at home.",
}

export interface FaqItem {
  q: string
  a: string
}

export const BLOG_FAQ: Record<string, FaqItem[]> = {
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
}
