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
    title: 'Building a Brand Database: 36,000 Brands, One Solo Developer',
    description: 'How we built a structured database of 36,000+ brands with product lines, images, and category data — as a solo developer, from scratch.',
    date: '2026-04-01',
    readTime: '6 min read',
    tags: ['build log', 'indie dev', 'data pipeline', 'python', 'postgres', 'solo founder'],
    category: 'build-log',
    excerpt: 'To build a brand curation app, you first need to know what brands exist. Building that knowledge base — 36,000 brands and counting — is most of the actual work.',
    content: `
<p class="lead">The hardest part of building Diffr isn't the recommendation logic or the UI. It's the data. You cannot curate brands you don't know about. So before anything else, we needed a structured database of them — their names, categories, product lines, and images.</p>

<p>This is the story of building that foundation as a solo developer.</p>

<h2>The Scale Problem</h2>

<p>We started with a seed list of brand names from public directories, aggregators, and category research. The goal: build a complete, structured dataset with product line information for each brand. The number grew fast. We're now at <strong>36,028 brands</strong> across tens of thousands of product categories.</p>

<p>Each brand needs more than just a name. For Diffr's no-repeat curation to work, we need to know what a brand actually makes — its product lines, its categories, its visual identity. Building that knowledge at scale is a data engineering problem before it's anything else.</p>

<h2>The Data Architecture</h2>

<p>The database is built on <strong>PostgreSQL 17</strong>, running locally on an external SSD. The schema is deliberately flat for the core tables: brands, product types, and product lines. Relationships live in a separate <strong>Neo4j graph database</strong> — the brand knowledge graph that powers Diffr's "no-repeat" constraint logic.</p>

<p>Current scale:</p>
<ul>
  <li><strong>36,028 brands</strong> — with names, categories, and metadata</li>
  <li><strong>47,000+ product types</strong> — the vocabulary of what brands make</li>
  <li><strong>1,079,000 product lines</strong> — the actual items that map to scene slots</li>
  <li><strong>Redis</strong> — for deduplication during data ingestion</li>
  <li><strong>Cloudinary CDN</strong> — for serving product and brand images</li>
</ul>

<h2>The Image Problem</h2>

<p>Brand data without images is only half useful. A curation platform needs to be visual. Our current status: 402 product lines have confirmed images — that's 0.04% of 1,079,000 total. The image pipeline is the primary bottleneck right now.</p>

<p>Each product line requires sourcing, validating, and storing a high-quality image. We've built a confidence-scoring system: <code>high</code>, <code>medium</code>, or <code>none</code> per image, so the curation layer can prioritise well-represented brands in early scenes rather than showing blank slots.</p>

<h2>The Logo System</h2>

<p>Separate from product images, every brand needs a logo — the visual anchor for Diffr's brand-first display format. Logo status is tracked independently:</p>

<ul>
  <li><strong>ok</strong>: Clean logo on appropriate background, ready to display</li>
  <li><strong>warn_black_logo</strong>: Logo exists but needs background treatment</li>
  <li><strong>warn_bad_bg</strong>: Logo on a problematic background</li>
  <li><strong>no_source</strong>: Logo not yet sourced</li>
</ul>

<p>Of 36,028 brands, 773 have confirmed clean logos. Logo quality matters more than quantity — a bad logo display undermines the whole premise of visual brand curation.</p>

<h2>The Graph Layer</h2>

<p>PostgreSQL handles relational data well, but brand relationships aren't relational — they're a network. Which brands compete? Which share a category niche? Which appear together in scenes?</p>

<p>Neo4j stores the brand relationship graph: category co-occupancy, scene co-occurrence, and brand DNA similarity scores. This is what will eventually power Diffr's scene-building logic — selecting the right brand for each slot not just by category match but by relationship fit within the whole scene.</p>

<h2>What Solo Development Looks Like at This Scale</h2>

<p>Running a data pipeline this large solo means making peace with progress that's measured in percentages of percentages. A 1% improvement in image coverage is 10,000 product lines. A database this size takes months to populate, not days.</p>

<p>The things that help most:</p>
<ol>
  <li><strong>Decouple every phase.</strong> Data ingestion, image processing, logo handling, and graph updates are all separate jobs. Each can fail and restart without corrupting the others.</li>
  <li><strong>Log obsessively.</strong> At this scale, a silent failure that runs for hours is worse than a fast crash. Every pipeline job writes structured logs. I check status before trusting any summary number.</li>
  <li><strong>Design for incomplete data.</strong> The curation layer doesn't wait for 100% image coverage. It knows which brands are well-represented and prioritises those for early scenes.</li>
  <li><strong>Use the right database for each job.</strong> PostgreSQL for structured queries. Neo4j for relationship traversal. Redis for real-time deduplication. Don't force one tool to do everything.</li>
</ol>

<h2>What Comes Next</h2>

<p>The data foundation is strong enough to start building the curation layer. The first public Diffr experience will work with the brands we have high-confidence data on — a few thousand well-represented brands across core consumer categories.</p>

<p>As image and logo coverage grows, more brands enter the curation pool. The no-repeat principle only gets more powerful with more options to choose from.</p>

<p>If you want to be among the first to see what 36,000 brands look like when structured by scene, <a href="/diffr#waitlist">join the waitlist</a>.</p>
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

  {
    slug: 'ship-in-days-not-weeks',
    title: 'Ship in Days, Not Weeks: What Indie Developers Actually Do',
    description: 'Lessons from Marc Lou and Simon Høiberg on how to launch a solo app fast — validate with real payments, build in public, and turn social media into a growth engine.',
    date: '2026-04-04',
    readTime: '5 min read',
    tags: ['indie dev', 'app launch', 'solo founder', 'build in public', 'growth'],
    category: 'strategy',
    excerpt: 'Marc Lou built 27 startups. Simon Høiberg runs a 7-figure business solo with AI. Both ship in days. Here\'s the methodology they actually use.',
    content: `
<p class="lead">There's a recurring pattern among indie developers who actually ship products: they move embarrassingly fast, they charge from day one, and they treat social media as a machine they operate deliberately, not a lottery they enter.</p>

<p>Two creators who've made this approach legible — Marc Lou and Simon Høiberg — have documented it in enough detail that the playbook is visible. Here's what it actually looks like.</p>

<h2>Days, Not Weeks</h2>

<p>Marc Lou's core claim is direct: ship in days, not weeks. His own work demonstrates it — he's documented building and launching a SaaS product in 9 days, from idea to paying customers. Not a landing page. A working product.</p>

<p>The mechanism is AI-assisted development. Using tools like Codex and GitHub Copilot, he targets "a few hundred dollars and some hours of work" to test an idea's viability. The goal is to reach a real decision — does this work or not — as quickly as possible.</p>

<p>Simon Høiberg applies the same principle with a specific entry point: SaaS arbitrage. The method: find popular, complex workflows in tools like n8n (a no-code automation platform), identify what real problems people are solving with them, and rebuild those workflows as specialized, user-friendly SaaS products. The demand is already proven. The implementation question is whether you can deliver a better experience.</p>

<h2>Validate With Real Money</h2>

<p>Both developers are explicit on this: verbal validation doesn't count. The only signal that matters is a real user putting real money down.</p>

<p>Marc Lou's approach: put the solution behind a Stripe checkout from day one. If nobody will pay, the idea doesn't have legs — and better to know that after 9 days than after 3 months. The early "no" is the cheap outcome. The expensive outcome is six months of building something nobody will pay for.</p>

<p>This is the "small bets" mental model: run many experiments, quit early on the ones that don't gain traction, and use the time and capital recovered from failed bets to fund the next one.</p>

<h2>Build an Audience Before You Need One</h2>

<p>The marketing foundation for both developers is an owned audience — not social media followers (which are rented), but an email list (which you own).</p>

<p>Marc Lou's newsletter has 24,000 readers. Simon Høiberg uses YouTube to generate consistent attention. Both use social media as an attention-acquisition channel that funnels into email. The email list is the stable asset; the social following is the acquisition engine.</p>

<p>On social, the content style matters. Marc Lou uses "crazy ideas" and humour — stories about Stripe disputes, behind-the-scenes development updates, the failures as much as the wins. The strategy is narrative: make the audience invested in the developer's journey before any product exists. When a new product launches, the audience is already primed.</p>

<h2>Keep the Machine Running With AI</h2>

<p>Simon Høiberg's operational model is instructive for anyone building solo at scale: use AI for 60–80% of repetitive work. He runs YouTube content production by using AI agents to help write scripts in Notion, treating the AI as a creative collaborator rather than a search tool.</p>

<p>The same principle applies across engineering, support, and content. Avoid vendor lock-in and "black-box" platforms — use replaceable building blocks like Postgres and self-hosted infrastructure to maintain margins and long-term control.</p>

<h2>What This Means for Diffr</h2>

<p>We're building Diffr the same way: ship fast, validate with real users, build in public. The waitlist is the start of the audience. The blog posts are the "building in public" layer. And the first version of the product will be in users' hands long before the database is complete.</p>

<p>If you want to follow the build, <a href="/diffr#waitlist">join the waitlist</a> — we send updates to everyone on the list directly.</p>
    `.trim(),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
