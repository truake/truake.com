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
    slug: 'claude-code-notebooklm-obsidian-workflow',
    title: 'How I Use Claude Code, NotebookLM, and Obsidian as One System',
    description: 'A practical architecture for solo developers: Claude Code as the orchestrator, NotebookLM as the analysis engine, and Obsidian as the persistent second brain — all wired into a self-improving loop.',
    date: '2026-04-05',
    readTime: '7 min read',
    tags: ['dev workflow', 'claude code', 'notebooklm', 'obsidian', 'ai tools', 'productivity'],
    category: 'build-log',
    excerpt: 'Three tools that seem unrelated — a terminal AI, a research notebook, and a markdown vault — turn out to fit together precisely. Here\'s the architecture I\'m running to build Diffr.',
    content: `
<p class="lead">I didn't plan to use Claude Code, NotebookLM, and Obsidian together. I adopted them separately, for different reasons, and only later noticed they were solving complementary problems. Once I wired them together deliberately, the whole system got noticeably faster.</p>

<p>This post documents the actual architecture — not the aspirational version, the one that's running right now while I build Diffr.</p>

<h2>The Problem This Solves</h2>

<p>Solo development has a specific failure mode: context loss. You work on something for three hours, context window fills up, session ends, and the next time you open the project half the reasoning is gone. What was the decision? Why did I structure it that way? What were the three alternatives I considered?</p>

<p>Notes in a markdown file help, but notes are passive. They don't feed back into the AI. The AI doesn't know about them unless you explicitly provide them. Every session starts cold.</p>

<p>The three-tool architecture solves this. Each tool does one thing it's uniquely suited for.</p>

<h2>The Architecture</h2>

<p><strong>Claude Code is the orchestrator.</strong> It lives in the terminal, it has file system access, it can run scripts, and — crucially — it can operate other tools via CLI integrations. Every task starts here. Claude Code is also where the "skills" layer lives: reusable, versioned automation scripts that accumulate over sessions.</p>

<p><strong>NotebookLM is the analysis engine.</strong> It ingests up to 50 sources — YouTube transcripts, PDFs, articles, raw text — and answers questions grounded strictly in those sources. No hallucination about what a video said, because it can only reference what's actually in the document. For research-heavy tasks (competitive analysis, sourcing blog content, extracting launch strategies from creator content), offloading to NotebookLM saves both Claude Code tokens and human time.</p>

<p><strong>Obsidian is the persistent memory.</strong> Every meaningful output — research summaries, architectural decisions, daily progress, blog drafts — lands in the Obsidian vault as markdown. Because the files are local and plain text, Claude Code can read them directly in future sessions. The vault is the project's long-term memory.</p>

<h2>How They Connect</h2>

<p>The connection between Claude Code and NotebookLM is a CLI called <code>notebooklm-pi</code> (wrapped as a Claude Code skill). Claude Code can create notebooks, add sources, and query them — all from the terminal, without touching a browser.</p>

<p>The connection between Claude Code and Obsidian is the file system. Obsidian just reads a folder of markdown files. Claude Code writes to that same folder. The "integration" is a shared directory.</p>

<p>The flow for research tasks looks like this:</p>

<ol>
  <li>Identify a research question (e.g., "what launch strategies do indie devs use?")</li>
  <li>Claude Code uses a YouTube skill to fetch relevant video transcripts</li>
  <li>Those transcripts get sent to NotebookLM as sources</li>
  <li>Claude Code queries NotebookLM with structured questions</li>
  <li>Answers come back as text, get written to Obsidian as a markdown note</li>
  <li>That note becomes source material for a blog post, a decision document, or a strategy file</li>
</ol>

<p>For this very post: the source video was added to NotebookLM, I queried it with Claude Code, and the answers fed directly into the draft. The whole loop — from "I want to write about this workflow" to "draft is done" — ran inside one session.</p>

<h2>The Skill Layer</h2>

<p>Skills are where this system compounds over time. A skill in Claude Code is a reusable automation script — a defined capability the AI can invoke by name. Once you build a skill for NotebookLM queries, you never have to explain the authentication flow again. Once you build a skill for writing to Obsidian in a specific format, every future output follows that format automatically.</p>

<p>I maintain a <code>~/.claude/skills/</code> directory, tracked in Git, with separate rule files for different domains: deployment, Next.js, workflow, general. Every session that produces a correction or a new discovery adds a rule. The AI reads those rules at the start of each session. It doesn't repeat the same mistakes.</p>

<p>This is the self-improving loop: Claude Code makes a mistake → I correct it → the correction becomes a rule → the rule loads at the start of the next session → the mistake doesn't happen again. Over time, the system gets better at working the way I work.</p>

<h2>The Obsidian Layer</h2>

<p>Obsidian's role is often underestimated in this stack. It looks like "just a notes app," but what it's actually providing is a human-readable audit trail that doubles as AI context.</p>

<p>Every daily progress note for Diffr lives in <code>/Obsidian/Diffr/每日进展/</code>. Every architectural decision is in <code>/Obsidian/Diffr/Projects/</code>. When I start a Claude Code session, I can point at these files directly: "here's the project state, here's what we decided last week, now let's continue." The AI picks up where we left off without me having to reconstruct context manually.</p>

<p>The key convention: every note is structured the same way. Status first, decisions second, open questions third. The AI learns to parse this structure. I stop having to repeat myself.</p>

<h2>Token Economics</h2>

<p>One practical reason this architecture works: it's cheap. NotebookLM runs on Google's infrastructure at no cost. Complex analysis tasks — summarizing a 2-hour video, cross-referencing five sources, extracting structured data from long documents — happen there instead of burning Claude tokens.</p>

<p>Claude Code stays focused on orchestration, code generation, and file operations. NotebookLM handles the heavy reading. Obsidian handles persistence. Each tool does the thing it does cheaply and well.</p>

<h2>What This Produces</h2>

<p>In concrete terms, running this workflow while building Diffr has produced:</p>

<ul>
  <li>A structured record of every architectural decision, queryable by the AI in future sessions</li>
  <li>A skills library of 22 reusable rules that prevent previously-made mistakes from recurring</li>
  <li>A research pipeline that can turn a YouTube video into a structured blog post in one session</li>
  <li>A daily progress system that feeds directly into the project's public-facing blog</li>
</ul>

<p>The goal isn't to automate creativity. It's to eliminate the overhead that surrounds it: context reconstruction, repeated mistakes, knowledge that lives only in a closed browser tab. When that overhead is gone, the actual work gets faster.</p>

<p>If you're building something solo and this workflow sounds useful, I document how Diffr is built — tools, decisions, and all — on this blog. <a href="/diffr#waitlist">The waitlist is the fastest way to follow along.</a></p>
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
  {
    slug: 'the-toothpaste-aisle-tax',
    title: 'The 13-IQ-Point Tax You Pay at Every Checkout',
    description: 'Choice overload isn't a personal failure — it's a structural extraction. Here's how the default economy harvests your cognitive bandwidth, and how the One-Brand Rule gets it back.',
    date: '2026-04-05',
    readTime: '6 min read',
    tags: ['decision fatigue', 'choice overload', 'one-brand rule', 'cognitive bandwidth', 'diff-structism'],
    category: 'strategy',
    excerpt: 'When you stand paralyzed in a supermarket aisle, you're not being indecisive. You're being taxed.',
    content: `
<p class="lead">When you stand paralyzed in a supermarket aisle, you're not being indecisive. You're being taxed.</p>

<p>The tax isn't paid in money. It's paid in the one resource the modern economy cannot manufacture more of: your ability to think clearly. Researchers have measured this precisely. When faced with excessive choice, people's cortisol levels spike, their heart rates increase — and their effective IQ drops by an average of 13 points. Equivalent to staying awake for 24 hours straight. All for a $4 tube of toothpaste.</p>

<p>This is not a metaphor. It is a mechanism. The default economy was not designed to help you choose. It was designed to prevent you from ever finishing the act of choosing at all.</p>

<h2>Two People, One Aisle</h2>

<p>Meet Jason. 32 years old. Marketing manager. Tuesday evening, 7:47pm, Whole Foods toothpaste aisle. He's been there 23 minutes. His jaw is clenched. Whitening or sensitive? Gel or paste? Natural or clinical? Charcoal or baking soda? His phone buzzes — dinner is getting cold — and he doesn't respond. He can't. He's locked in combat with 200 varieties of toothpaste, and he's losing.</p>

<p>Jason isn't choosing. He's <strong>performing unpaid cognitive labor</strong> for a product worth less than the mental energy he's spending on it. The toothpaste is free. The choosing is not.</p>

<p>Now meet Sarah. 29 years old. One-person design consultancy. Wednesday morning, 5:13am. She wakes without an alarm. Makes coffee. One brand, always the same. No decision required. In the silence, something emerges — a connection between two client problems she's been wrestling with for weeks. A solution, fully formed.</p>

<p>Sarah implemented what we call the One-Brand Rule six months ago. One toothpaste. One coffee. One shampoo. One brand of jeans. She didn't lose anything. She freed up the mental RAM that was previously consumed by micro-decisions — and that surplus became available for actual thinking.</p>

<p>Jason is still in the aisle. Sarah is billing for insight.</p>

<h2>Why "More Choice" Is a Poverty Trap</h2>

<p>Barry Schwartz called it the Paradox of Choice. Sheena Iyengar demonstrated it in her famous jam experiment — when a grocery store offered 24 varieties of jam, 3% of shoppers bought. When it offered 6 varieties, 30% bought. More options, fewer decisions made. The relationship is inverse and consistent.</p>

<p>But the economy ran the opposite lesson. If six varieties sold well, what would sixty do? The logic of the market is not to reduce friction for consumers — it's to occupy mental real estate before a competitor can. Every sub-category created, every variant launched, every "new and improved" SKU placed on a shelf is a bid for the irreplaceable resource of human attention.</p>

<p>Ries and Trout mapped this in <em>Positioning</em> in 1981. The mind, they observed, is a ranking machine. You remember the number one brand in a category, tolerate the number two, and mostly forget the rest. The strategic implication they offered to brands: if the top positions are taken, don't compete for them — create a new sub-category and seize number one there instead.</p>

<p>What they described as a tactic turned out to be a self-replicating engine of artificial difference. Every brand follows the logic. The market fractures endlessly. Sub-categories spawn further sub-categories. You end up with 200 types of toothpaste, and an economy of cognitive poverty underneath the material abundance.</p>

<h2>The One-Brand Rule</h2>

<p>The solution is not willpower. It is not minimalism. It is not a detox week or a capsule wardrobe. These respond to symptoms. The cause is structural — and the response needs to be equally structural.</p>

<p>The One-Brand Rule is simple: for each category of recurring purchase, research once, choose well, and commit. One toothpaste. One coffee brand. One notebook manufacturer. The decision is made once, deeply, with full attention — and then it's done. The category becomes a closed file. The cognitive bandwidth returns.</p>

<p>This is not about loyalty for its own sake. It's about converting a recurring tax into a one-time investment. The person who chooses their toothpaste once and buys it automatically has more available attention than the person who reopens the question at every checkout. Multiply that across every category of daily life and the cognitive dividend becomes substantial.</p>

<p>The constraint is the freedom. A piano has 88 keys — finite, constrained. Within those constraints, infinite music is possible. The One-Brand Rule applies the same insight to consumption: by limiting options, you create the structure within which better thinking becomes possible.</p>

<h2>What This Has to Do With Diffr</h2>

<p>Diffr was built around this exact problem. The curation principle behind every Diffr scene is the same rule applied at the platform level: in any given scene, each brand appears exactly once. No brand gets two slots. The goal is not to show you the most popular choices — it's to give you a map of the available landscape, stripped of algorithmic repetition and marketing budget ranking.</p>

<p>The One-Brand Rule is explored in full in <em>The Default Trap: Why Everything You Own Is Owning You</em> — available now on <a href="https://gumroad.com" target="_blank" rel="noopener">Gumroad</a>. The chapter on choice architecture draws on Schwartz, Iyengar, Ries &amp; Trout, and the cognitive science of decision fatigue to build the case from first principles.</p>

<p>If you want the shorter version first: <a href="/diffr#waitlist">join the Diffr waitlist</a>. We'll send you the Manifesto — the condensed version of the book's core arguments — as part of the early access package.</p>
    `.trim(),
  },
  {
    slug: 'original-priority',
    title: 'Original Priority: Why You Should Always Go to the Source',
    description: 'We live in an age of derivatives — adaptations, summaries, reboots, and franchise expansions. Gregory Bateson's definition of information explains why most of it is noise.',
    date: '2026-04-05',
    readTime: '7 min read',
    tags: ['original priority', 'diff-structism', 'cognitive bandwidth', 'information theory', 'creative consumption'],
    category: 'strategy',
    excerpt: 'When you watch the adaptation of a book you\'ve never read, you\'re not experiencing the story. You\'re experiencing someone else\'s compression of it.',
    content: `
<p class="lead">When you watch the adaptation of a book you've never read, you're not experiencing the story. You're experiencing someone else's compression of it.</p>

<p>This is not a criticism of adaptation as an art form. It is a description of an information-theoretic fact. Every translation from one medium to another loses structure. Every compression sacrifices depth for accessibility. Every adaptation is, by definition, a simplified version of something richer.</p>

<p>The question is: does that matter? And the answer, according to Gregory Bateson's definition of information, is: yes. Specifically.</p>

<h2>The Difference That Makes a Difference</h2>

<p>Bateson defined information as <strong>"a difference that makes a difference."</strong> Not all differences are information. A difference only becomes information when it changes something — our understanding, our behavior, our model of the world.</p>

<p>Apply this to creative consumption. When you read George R.R. Martin's novels, you receive a vast amount of information in Bateson's sense: character psychology rendered in interior monologue, political complexity that requires you to hold forty competing interests simultaneously, a narrative structure that deliberately withholds easy moral conclusions. These are differences that make differences — they alter how you think about power, loyalty, consequence.</p>

<p>When you watch the HBO adaptation, you receive some of this. The core plot survives. Key characters remain. But the interior monologue is gone. The narrative complexity is compressed to fit episodic pacing. The moral ambiguity, especially in the later seasons, resolves into heroism and villainy. The structural richness is reduced to what can be conveyed visually in fifty minutes.</p>

<p>The show isn't bad. It was often excellent television. But it is <em>structurally simpler</em> — offering simpler meanings from a simpler structure. The viewer who watches only the show receives less difference, in Bateson's sense, than the reader who reads the books.</p>

<h2>The Derivative Economy</h2>

<p>This would matter less if derivative content were rare. But we live in an age of systematic adaptation inflation. A novel succeeds. Within months, film rights are sold. A series follows. Then a mobile game, merchandise, a theme park. The original work becomes a franchise — a content machine designed to extract maximum value from a single creative source.</p>

<p>Lévi-Strauss taught us that meaning emerges from structure — from the relationships between elements, not the elements themselves. When a work is adapted, its structure is inevitably altered. Characters are combined or eliminated. Subplots are compressed. Themes are simplified for a broader audience. Each adaptation is a structural transformation — and most are structural collapses.</p>

<p>The derivative economy produces what looks like expansion but functions as repetition. The same characters, the same world, the same emotional beats — packaged in new formats, targeting new platforms, extracting new revenue. Each iteration claims to "expand the universe." But expansion without structural addition is just reproduction. And in Bateson's terms, reproduction without new difference is not information at all.</p>

<h2>The Cognitive Bandwidth Trap</h2>

<p>Human cognitive bandwidth is finite. We can only process so much, hold so many concepts, engage with so many structures at once. When we fill that bandwidth with low-information repetition — the comfortable familiarity of known characters in slightly new situations — we have less capacity for the genuinely new.</p>

<p>The adaptation economy exploits this. It creates what might be called familiarity addiction: the comfort of recognition, the pleasure of expanded canon, the satisfaction of "completing" a franchise. But this comfort is expensive. It consumes the bandwidth that would otherwise be available for encountering genuinely new structures — new authors, new frameworks, new ways of seeing.</p>

<p>Foucault argued that classification systems determine what can be seen. The recommendation algorithm is a classification system. It shows you more of what you've already seen, because that is what it is optimized to do. Original Priority is the decision to step outside that system — to ask not "what's next in this franchise" but "what source haven't I found yet."</p>

<h2>The Practice</h2>

<p>Original Priority as a practice is simple to state and difficult to maintain, because the defaults run in the opposite direction:</p>

<p>Before consuming a derivative work, ask: does the original exist and is it accessible? If yes, start there. The adaptation may still be worth your time — but start with the source. Read the novel before you watch the series. See the original film before you watch the remake. Listen to the composition before you listen to the cover.</p>

<p>When you encounter a summary, a "key takeaways" article, a podcast explaining a book, ask: does this give me the structural complexity of the source, or does it give me a map of it? Maps are useful for navigation. They are not substitutes for terrain.</p>

<p>The question Bateson's criterion asks about any piece of content is: does consuming this give me new structural differences — differences that will change how I think? Or does it repeat existing structures in a more convenient format? The former justifies attention. The latter, usually, does not.</p>

<h2>Why This Philosophy Matters for How We Build Diffr</h2>

<p>Original Priority and the One-Brand Rule are the same principle applied to different domains. Material consumption and creative consumption face the same fundamental problem: an economy optimized for repetition and pseudo-difference, against a mind that only grows through genuine structural novelty.</p>

<p>These ideas are developed at length in <em>The Default Trap: Why Everything You Own Is Owning You</em>. Chapter 9 builds the full argument from Bateson, Lévi-Strauss, and the structural analysis of the adaptation economy. If the ideas here resonate, that's where they go deeper.</p>

<p>Available on <a href="https://gumroad.com" target="_blank" rel="noopener">Gumroad</a>. Or <a href="/diffr#waitlist">join the waitlist</a> — early access includes the Manifesto edition.</p>
    `.trim(),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
