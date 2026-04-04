export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  category: 'build-log' | 'strategy' | 'product'
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'the-one-brand-rule',
    title: 'The One-Brand Rule: A New Way to Think About Shopping',
    description: 'Why Diffr recommends exactly one brand per product category — and why that constraint creates better decisions, not fewer options.',
    date: '2026-04-04',
    readTime: '5 min read',
    tags: ['product', 'brand curation', 'shopping', 'design philosophy'],
    category: 'product',
    excerpt: 'Every curated list eventually asks the same impossible question: which brand wins? Diffr sidesteps it entirely. One scene. One slot. One brand. No repeats.',
    content: `
<p class="lead">Open any "best coffee gear" list and you'll find the same brands everywhere. DeLonghi appears in the espresso machine slot, the milk frother slot, and sometimes the grinder slot too. By the end, you don't have a curated list — you have a DeLonghi catalogue.</p>

<p>This is the problem Diffr was built to solve.</p>

<h2>The No-Repeat Principle</h2>

<p>Diffr operates on a single structural rule: <strong>in any given consumption scene, each brand appears exactly once</strong>. If you're building out a home espresso setup, every slot — machine, grinder, tamper, scale, cup — gets a different brand. Even if DeLonghi makes a great grinder, they already occupied the machine slot. Someone else gets the grinder.</p>

<p>This sounds like an artificial constraint. It isn't. It's a philosophical commitment to genuine differentiation.</p>

<p>The idea comes from Ries and Trout's <em>Positioning</em> — the observation that brands win by owning a single category in a consumer's mind. A brand that tries to be everything becomes nothing. The same logic applies to curation: a list that keeps recommending the same brand isn't curating, it's advertising.</p>

<h2>What This Changes for the Shopper</h2>

<p>When you receive a Diffr scene — say, "Japanese minimalist home office" — every item in that scene comes from a brand you haven't encountered yet in that context. The result is a map of the brand landscape, not a ranking of who spent the most on SEO.</p>

<p>You discover brands you wouldn't have found otherwise. You build a mental model of a space. And you make a decision with actual information, not familiarity bias.</p>

<h2>What This Changes for the Platform</h2>

<p>Most recommendation engines optimise for conversion. Show the user the product they're most likely to buy, then show it again in a slightly different format. Diffr optimises for <em>coverage</em>. The goal is for a scene to represent the full diversity of excellent options, not to funnel you toward whoever won the last algorithmic auction.</p>

<p>This creates a different kind of trust. You come to Diffr not to find "the best" by some aggregate score, but to find the right brand for your specific slot — knowing that the recommendation was made without the thumb of a dominant brand on the scale.</p>

<h2>The Hard Part</h2>

<p>Running the no-repeat principle at scale requires a real brand database. You can't enforce uniqueness if you don't know which brands exist, which categories they genuinely belong to, and which scenes they fit. That's most of what we've been building for the past several months: a crawled, structured, categorised dataset of brands and their products.</p>

<p>As of this writing, the database holds <strong>36,000+ brands</strong> across tens of thousands of product categories. That's the foundation the no-repeat principle runs on.</p>

<h2>What's Next</h2>

<p>We're working toward a first public version of Diffr where you can enter a scene — anything from "solo hiking trip" to "home recording studio" — and receive a structured brand map that follows the no-repeat principle.</p>

<p>If that sounds like something you want, <a href="/diffr#waitlist">join the waitlist</a>. We're building this for people who are tired of every list being the same five brands in a different order.</p>
    `.trim(),
  },

  {
    slug: 'building-a-brand-database',
    title: 'Building a Brand Database: 36,000 Brands, Anti-Bot Walls, and Counting',
    description: 'The technical reality of crawling 36,000 brand websites as a solo developer — strategies, anti-bot systems encountered, and what we learned.',
    date: '2026-04-01',
    readTime: '7 min read',
    tags: ['build log', 'web crawling', 'indie dev', 'python', 'postgres'],
    category: 'build-log',
    excerpt: 'To build a brand curation app, you first need to know what brands exist. That means crawling tens of thousands of websites. Here\'s what that actually looks like.',
    content: `
<p class="lead">The hardest part of building Diffr isn't the recommendation logic or the UI. It's the data. You cannot curate brands you don't know about. So before anything else, we needed a database of them.</p>

<p>This is the story of building that database — one crawled website at a time.</p>

<h2>The Scale Problem</h2>

<p>We started with a seed list of brand names and a simple goal: find their official websites, extract their product lines, and build a structured dataset. The number grew fast. We're now at <strong>36,028 brands</strong>, of which 26,785 have confirmed website URLs.</p>

<p>That means ~27,000 websites to crawl. Each one is different: different HTML structures, different JavaScript frameworks, different levels of anti-bot protection.</p>

<h2>The Probe Phase</h2>

<p>Before crawling anything at scale, we run a probe. The probe visits a brand's website and determines two things: what crawling strategy will work, and what CSS selector targets the product image.</p>

<p>The output is a <code>crawler_strategies</code> table entry per brand — a record of how to crawl that site. Current breakdown:</p>

<ul>
  <li><strong>Static HTML</strong> (no JS needed): ~3,700 brands — fast, cheap, reliable</li>
  <li><strong>Playwright</strong> (full browser): ~4,200 brands — slower but necessary</li>
  <li><strong>Blocked entirely</strong>: ~11 brands — gave up on these</li>
</ul>

<p>We're 46% through the probe phase. Every percentage point takes days.</p>

<h2>The Anti-Bot Landscape</h2>

<p>Running a crawler at this scale means having an honest conversation with the anti-bot industry. Here's what we've encountered:</p>

<ul>
  <li><strong>Cloudflare</strong>: The most common. Usually bypassed with <code>curl-cffi</code> for TLS fingerprint spoofing, or Playwright in stealth mode for JS challenges.</li>
  <li><strong>Akamai</strong>: Harder. Requires proper browser headers and timing patterns.</li>
  <li><strong>Incapsula / Imperva</strong>: Moderate difficulty. Session management matters.</li>
  <li><strong>DataDome</strong>: The toughest we've hit. Highly behavioural detection.</li>
  <li><strong>PerimeterX</strong>: Similar to DataDome — real browser behaviour required.</li>
</ul>

<p>We're not trying to scrape data we don't have rights to. We're extracting publicly listed product images and names from brand websites — the same information any shopper sees. But anti-bot systems don't ask why you're crawling, only whether you look human.</p>

<h2>The Tech Stack</h2>

<p>The crawler pipeline is Python, running on a local machine with an external SSD for storage:</p>

<ul>
  <li><strong>probe.py</strong> — determines strategy and image selector per brand</li>
  <li><strong>crawler.py</strong> — static or Playwright crawler, uploads images to Cloudinary</li>
  <li><strong>discover.py</strong> — reverse-discovery: finds product lines not yet in the DB</li>
  <li><strong>logo_fixer.py</strong> — handles brand logos separately (different pages, different selectors)</li>
</ul>

<p>Data lives in <strong>PostgreSQL 17</strong> locally, with a <strong>Neo4j</strong> graph database for brand relationships and <strong>Redis</strong> for deduplication. Images are served via <strong>Cloudinary</strong> CDN.</p>

<h2>The Current State</h2>

<p>As of writing: 402 product lines have images — that's 0.04% of 1,079,000 total product lines. The image crawler is the bottleneck. Each product line requires a page visit, selector matching, image download, and CDN upload. At current speed, full coverage is a long road.</p>

<p>The brand data is good enough to start building the curation layer. The image data will catch up.</p>

<h2>Lessons for Solo Devs Building Data Pipelines</h2>

<ol>
  <li><strong>Probe before you crawl.</strong> Don't assume every site works the same way. A per-site strategy saves you from burning through rate limits on approaches that won't work.</li>
  <li><strong>Log obsessively.</strong> Every crawler run writes to a log. I check <code>tail -1 /tmp/probe_run.log</code> before I trust any status number.</li>
  <li><strong>Decouple phases.</strong> Probe → Strategy → Crawl → Upload are separate jobs. Each can fail and restart independently without corrupting the others.</li>
  <li><strong>Expect the anti-bot landscape to change.</strong> A site that worked last month may not work today. Re-probe on failure, don't assume the selector is wrong.</li>
</ol>

<p>If you're building something similar and want to compare notes, <a href="/diffr#waitlist">join the Diffr waitlist</a> — I reply to everyone who signs up.</p>
    `.trim(),
  },

  {
    slug: 'why-more-choices-makes-you-worse-at-shopping',
    title: 'Why More Choices Make You a Worse Shopper',
    description: 'The paradox of choice is real — and most shopping apps make it worse. Here\'s the psychology behind decision fatigue and how Diffr approaches it differently.',
    date: '2026-03-28',
    readTime: '4 min read',
    tags: ['product', 'psychology', 'shopping', 'ux', 'decision fatigue'],
    category: 'strategy',
    excerpt: 'Barry Schwartz called it the Paradox of Choice. More options don\'t make you happier — they make you more anxious, more likely to regret, and less likely to decide at all.',
    content: `
<p class="lead">In 2000, psychologists Sheena Iyengar and Mark Lepper ran a jam study. One day, a supermarket offered 24 jams for tasting. Another day, just 6. The 24-jam display attracted more visitors. The 6-jam display generated <strong>ten times more sales</strong>.</p>

<p>We've known about the paradox of choice for a quarter century. Shopping apps still refuse to believe it.</p>

<h2>The Problem With "More"</h2>

<p>Open any major e-commerce search and you'll find thousands of results for any query. Filters help, but only a little — you're still choosing between 47 versions of roughly the same thing. Review scores converge. Price differences feel arbitrary. Eventually you either buy the top result by default or abandon the cart.</p>

<p>Neither outcome is a good shopping experience. One produces regret ("did I get the best one?"). The other produces nothing.</p>

<p>The platforms know this, but their incentive is engagement, not decision quality. More options means more time on site. More time on site means more ad impressions. The paradox of choice is, for them, a feature.</p>

<h2>How Most "Curated" Apps Fail</h2>

<p>The word "curated" has been aggressively diluted. Most curated shopping experiences are just filters on top of the same massive catalogue: "Top 10 blenders" articles that list 10 versions of the same 3 brands, ranked by affiliate commission rate.</p>

<p>True curation requires a point of view. It requires the curator to make a decision on your behalf — not to hedge by listing every option and letting you figure it out.</p>

<h2>The Diffr Approach</h2>

<p>Diffr's answer is structural: we make one recommendation per slot. If you're building a photography kit, there's one camera body recommendation, one lens, one bag, one tripod. Not "top 5 camera bags for beginners" — one bag, chosen because it fits the scene.</p>

<p>This forces us to have an actual opinion. It forces the recommendation to be meaningful. And it forces the shopper to engage with a real choice — "does this scene match what I want?" — rather than a paralysing meta-choice about which list to trust.</p>

<h2>What Constraint Creates</h2>

<p>The no-repeat principle has an unexpected benefit beyond reduced choice: it maps the <em>space</em> of a scene. When every product slot has a different brand, you learn something about the brand landscape. You discover that the best travel tripod comes from a company you'd never heard of. You notice that the bag recommendation is from a brand that doesn't appear anywhere else in the photography kit — meaning they specialise.</p>

<p>That's information. Most shopping lists bury it under brand familiarity and ad spend.</p>

<h2>Better Decisions, Not Fewer Decisions</h2>

<p>We're not trying to make shopping require less thought. We're trying to make the thought you put in count for more. A Diffr scene is a starting point for a decision, not a decision made for you. But it's a starting point with real signal — not a ranked list of whoever paid the most to appear at the top.</p>

<p>If you're tired of shopping apps that give you more when you need less, <a href="/diffr#waitlist">Diffr is building something different</a>.</p>
    `.trim(),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
