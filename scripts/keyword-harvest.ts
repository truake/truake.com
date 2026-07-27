#!/usr/bin/env npx tsx
/**
 * Keyword harvest — merge GSC CSV + Ahrefs CSV + Supabase reddit_insights
 * into marketing/keyword-harvest-latest.md
 *
 * Usage:
 *   npm run keyword-harvest
 *   npm run keyword-harvest -- --gsc marketing/imports/gsc-queries-2026-07-27.csv
 *   npm run keyword-harvest -- --no-reddit
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getAllPosts } from '../app/diffr/blog/posts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const IMPORTS = join(ROOT, 'marketing', 'imports')
const OUT = join(ROOT, 'marketing', 'keyword-harvest-latest.md')

// ── env ──────────────────────────────────────────────────────────────

function loadEnvLocal() {
  const path = join(ROOT, '.env.local')
  if (!existsSync(path)) return
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let val = trimmed.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = val
  }
}

// ── CSV helpers ──────────────────────────────────────────────────────

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') inQuotes = false
      else cell += c
    } else if (c === '"') inQuotes = true
    else if (c === ',') {
      row.push(cell.trim())
      cell = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cell.trim())
      cell = ''
      if (row.some((x) => x.length > 0)) rows.push(row)
      row = []
    } else cell += c
  }
  row.push(cell.trim())
  if (row.some((x) => x.length > 0)) rows.push(row)
  return rows
}

function newestImport(prefix: string): string | null {
  if (!existsSync(IMPORTS)) return null
  const files = readdirSync(IMPORTS)
    .filter((f) => f.startsWith(prefix) && f.endsWith('.csv'))
    .sort()
  return files.length ? join(IMPORTS, files[files.length - 1]!) : null
}

/** GSC UI export: flat gsc-queries CSV or Performance-on-Search folder with 查询数.csv. */
function findGscQueriesCsv(): string | null {
  const flat = newestImport('gsc-queries')
  if (flat) return flat

  if (!existsSync(IMPORTS)) return null
  const dirs = readdirSync(IMPORTS, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.includes('Performance-on-Search'))
    .map((d) => d.name)
    .sort()

  for (const dir of dirs.reverse()) {
    const cn = join(IMPORTS, dir, '查询数.csv')
    if (existsSync(cn)) return cn
    const en = join(IMPORTS, dir, 'Queries.csv')
    if (existsSync(en)) return en
  }
  return null
}

function colIndex(headers: string[], names: string[]): number {
  const lower = headers.map((h) => h.toLowerCase().replace(/^\ufeff/, ''))
  for (const name of names) {
    const i = lower.indexOf(name.toLowerCase())
    if (i >= 0) return i
  }
  return -1
}

function parseNum(s: string): number {
  const n = parseFloat(String(s).replace(/%/g, '').replace(/,/g, ''))
  return Number.isFinite(n) ? n : 0
}

// ── GSC ──────────────────────────────────────────────────────────────

export interface GscRow {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

function parseGscCsv(path: string): GscRow[] {
  const raw = readFileSync(path, 'utf8')
  const rows = parseCsv(raw)
  if (rows.length < 2) return []
  const headers = rows[0]!
  const qi = colIndex(headers, [
    'top queries', 'query', 'queries', 'search query', '热门查询', 'queries.csv',
  ])
  const ci = colIndex(headers, ['clicks', 'click', '点击次数'])
  const ii = colIndex(headers, ['impressions', 'impression', '展示', '展示次数'])
  const ti = colIndex(headers, ['ctr', '点击率'])
  const pi = colIndex(headers, ['position', 'avg. position', 'average position', '排名'])
  if (qi < 0) {
    console.warn(`GSC CSV: no query column in ${path}; headers=${headers.join('|')}`)
    return []
  }
  return rows.slice(1).map((r) => ({
    query: r[qi] ?? '',
    clicks: ci >= 0 ? parseNum(r[ci] ?? '0') : 0,
    impressions: ii >= 0 ? parseNum(r[ii] ?? '0') : 0,
    ctr: ti >= 0 ? parseNum(r[ti] ?? '0') : 0,
    position: pi >= 0 ? parseNum(r[pi] ?? '0') : 0,
  })).filter((r) => r.query.length > 0)
}

type GscAction = 'optimize' | 'defend' | 'new_post' | 'monitor'

function classifyGsc(row: GscRow, hasPage: boolean): GscAction {
  if (!hasPage && row.impressions >= 25) return 'new_post'
  if (row.position <= 4 && row.impressions >= 10) return 'defend'
  if (row.position >= 5 && row.position <= 20 && row.impressions >= 15) return 'optimize'
  if (row.impressions >= 50) return 'monitor'
  return 'monitor'
}

function gscOpportunityScore(row: GscRow): number {
  if (row.impressions < 10 || row.position <= 0) return 0
  const posWeight = row.position >= 5 && row.position <= 20 ? 2 : row.position <= 4 ? 0.5 : 1
  return (row.impressions * posWeight) / row.position
}

// ── Ahrefs ───────────────────────────────────────────────────────────

export interface AhrefsRow {
  keyword: string
  volume: number
  kd: number
}

function parseAhrefsCsv(path: string): AhrefsRow[] {
  const raw = readFileSync(path, 'utf8')
  const rows = parseCsv(raw)
  if (rows.length < 2) return []
  const headers = rows[0]!
  const ki = colIndex(headers, ['keyword', 'keywords', 'query'])
  const vi = colIndex(headers, ['volume', 'search volume', 'sv'])
  const di = colIndex(headers, ['kd', 'keyword difficulty', 'difficulty'])
  if (ki < 0) {
    console.warn(`Ahrefs CSV: no keyword column in ${path}`)
    return []
  }
  return rows.slice(1).map((r) => ({
    keyword: r[ki] ?? '',
    volume: vi >= 0 ? parseNum(r[vi] ?? '0') : 0,
    kd: di >= 0 ? parseNum(r[di] ?? '0') : 0,
  })).filter((r) => r.keyword.length > 0)
}

// ── Slug matching ────────────────────────────────────────────────────

interface BlogIndexEntry {
  slug: string
  title: string
  tags: string[]
  url: string
}

const STOP = new Set(['the', 'and', 'for', 'with', 'best', 'guide', 'brand', 'brands', 'kit', 'starter', 'how', 'what', 'your', 'from', 'that', 'this', 'are', 'was', 'has', 'have'])

function tokens(s: string): Set<string> {
  return new Set(
    s.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/[\s-]+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  )
}

function matchBlog(query: string, index: BlogIndexEntry[]): BlogIndexEntry | null {
  const q = tokens(query)
  if (q.size === 0) return null
  let best: { entry: BlogIndexEntry; score: number } | null = null
  for (const entry of index) {
    const hay = tokens(`${entry.slug.replace(/-/g, ' ')} ${entry.title} ${entry.tags.join(' ')}`)
    let overlap = 0
    for (const t of q) if (hay.has(t)) overlap++
    const score = overlap / q.size
    if (score >= 0.34 && (!best || score > best.score)) best = { entry, score }
  }
  return best?.entry ?? null
}

// ── Reddit ───────────────────────────────────────────────────────────

interface RedditRow {
  title: string
  score: number
  sub: string
}

const SHOPPING_TITLE = [
  'starter', 'beginner', 'essential', 'checklist', 'gear list', 'starter kit',
  'what to buy', 'recommend', 'brand', 'gift', 'registry', 'packing', 'dorm',
  'wardrobe', ' vs ', 'worth it', 'bifl', 'first time', 'new to', 'getting into',
  'help me pick', 'which one', 'shopping', 'haul', 'setup', 'edc',
]

const PREFERRED_SUBS = new Set([
  'buyitforlife', 'campinggear', 'camping', 'backpacking', 'ultralight', 'hiking',
  'running', 'homegym', 'coffee', 'malefashionadvice', 'femalefashionadvice',
  'frugalmalefashion', 'skincareaddiction', 'makeupaddiction', 'giftideas',
  'solotravel', 'onebag', 'digitalnomad', 'photography', 'analogcommunity',
  'homeoffice', 'pcgaming', 'cooking', 'parenting', 'newparents', 'babybumps',
])

function isRelevantReddit(row: RedditRow): boolean {
  const t = row.title.toLowerCase()
  const sub = row.sub.toLowerCase()
  if (PREFERRED_SUBS.has(sub) && SHOPPING_TITLE.some((p) => t.includes(p))) return true
  return SHOPPING_TITLE.filter((p) => !['first time', 'new to'].includes(p)).some((p) => t.includes(p))
}

function suggestScene(title: string): string {
  const t = title.toLowerCase()
  if (t.includes('dorm') || t.includes('college')) return 'dorm-room-essentials'
  if (t.includes('camp')) return 'camping / backpacking'
  if (t.includes('gym')) return 'home-gym'
  if (t.includes('coffee')) return 'home-coffee'
  if (t.includes('gift')) return 'thoughtful-gifts hub'
  if (t.includes('makeup') || t.includes('skincare')) return 'makeup / skincare'
  if (t.includes('wardrobe') || t.includes('outfit')) return 'casual / work wardrobe'
  if (t.includes(' vs ')) return 'comparison post (C-series)'
  return 'new scene TBD'
}

async function fetchRedditInsights(limit = 120): Promise<RedditRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    console.warn('Skipping Reddit: missing Supabase env in .env.local')
    return []
  }
  const patterns = [
    'starter kit', 'beginner', 'essential', 'checklist', 'what to buy', 'recommend',
    'worth it', ' vs ', 'gift idea', 'registry', 'dorm', 'packing', 'first time',
    'getting into', 'BIFL', 'buy it for life', 'gear list',
  ]
  const orFilter = patterns.map((p) => `title.ilike.*${encodeURIComponent(p)}*`).join(',')
  const res = await fetch(
    `${url}/rest/v1/reddit_insights?or=(${orFilter})&order=score.desc&limit=${limit}&select=title,score,sub`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    },
  )
  if (!res.ok) {
    console.warn(`Reddit fetch failed: ${res.status} ${await res.text()}`)
    return []
  }
  const data = (await res.json()) as RedditRow[]
  const seen = new Set<string>()
  return data
    .filter(isRelevantReddit)
    .filter((r) => {
      const k = r.title.toLowerCase()
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    .sort((a, b) => {
      const ap = PREFERRED_SUBS.has(a.sub.toLowerCase()) ? 1 : 0
      const bp = PREFERRED_SUBS.has(b.sub.toLowerCase()) ? 1 : 0
      if (bp !== ap) return bp - ap
      return b.score - a.score
    })
}

// ── Markdown output ──────────────────────────────────────────────────

function mdTable(headers: string[], rows: string[][]): string {
  const sep = headers.map(() => '---')
  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${sep.join(' | ')} |`,
    ...rows.map((r) => `| ${r.join(' | ')} |`),
  ]
  return lines.join('\n')
}

function buildReport(opts: {
  gscPath: string | null
  ahrefsPath: string | null
  gsc: GscRow[]
  ahrefs: AhrefsRow[]
  reddit: RedditRow[]
  index: BlogIndexEntry[]
}): string {
  const now = new Date().toISOString().slice(0, 10)
  const gscRanked = [...opts.gsc]
    .map((r) => ({ ...r, match: matchBlog(r.query, opts.index), score: gscOpportunityScore(r) }))
    .filter((r) => r.score > 0 || r.impressions >= 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 40)

  const gscRows = gscRanked.map((r) => {
    const slug = r.match?.slug ?? '—'
    const action = classifyGsc(r, !!r.match)
    return [
      r.query.slice(0, 60),
      String(Math.round(r.impressions)),
      r.position.toFixed(1),
      slug === '—' ? '**NEW**' : `\`${slug}\``,
      action,
    ]
  })

  const ahrefsGreen = opts.ahrefs
    .filter((r) => (r.volume >= 150 || r.volume === 0) && (r.kd <= 45 || r.kd === 0))
    .slice(0, 30)
  const ahrefsRows = ahrefsGreen.map((r) => {
    const m = matchBlog(r.keyword, opts.index)
    return [
      r.keyword.slice(0, 50),
      r.volume ? String(r.volume) : '—',
      r.kd ? String(Math.round(r.kd)) : '—',
      m ? `\`${m.slug}\`` : '**NEW**',
      m ? 'optimize / defend' : r.volume >= 200 ? 'new post' : 'validate',
    ]
  })

  const redditRows = opts.reddit.slice(0, 25).map((r) => [
    r.title.slice(0, 70).replace(/\|/g, '/'),
    r.sub,
    String(r.score),
    suggestScene(r.title),
  ])

  const newTopics = gscRanked
    .filter((r) => !r.match && r.impressions >= 25)
    .slice(0, 15)
    .map((r) => `- **${r.query}** (${Math.round(r.impressions)} impr, pos ${r.position.toFixed(1)})`)

  return `# Keyword harvest — ${now}

_Auto-generated by \`npm run keyword-harvest\`. Edit playbook in [keyword-harvest.md](./keyword-harvest.md)._

## Sources this run

| Source | File | Rows |
|--------|------|------|
| GSC | ${opts.gscPath ?? '_none — export to `marketing/imports/gsc-queries-*.csv`_'} | ${opts.gsc.length} |
| Ahrefs | ${opts.ahrefsPath ?? '_none — optional `ahrefs-keywords-*.csv`_'} | ${opts.ahrefs.length} |
| Reddit | Supabase \`reddit_insights\` | ${opts.reddit.length} |
| Blog index | \`getAllPosts()\` | ${opts.index.length} URLs |

---

## GSC — priority (optimize / new)

${gscRows.length ? mdTable(['Query', 'Impr', 'Pos', 'Matched slug', 'Action'], gscRows) : '_No GSC CSV found. Export 查询 → `marketing/imports/gsc-queries-YYYY-MM-DD.csv` and re-run._'}

### GSC new-topic candidates (no slug match)

${newTopics.length ? newTopics.join('\n') : '_None above threshold._'}

---

## Ahrefs — validation / new post

${ahrefsRows.length ? mdTable(['Keyword', 'Vol', 'KD', 'Match', 'Action'], ahrefsRows) : '_No Ahrefs CSV. Export from Keywords Explorer → `marketing/imports/ahrefs-keywords-*.csv`_'}

---

## Reddit — scene & thread ideas

${redditRows.length ? mdTable(['Title', 'Sub', 'Score', 'Suggested scene'], redditRows) : '_Reddit pull skipped or empty._'}

---

## Next actions (top 5)

${gscRanked.slice(0, 5).map((r, i) => {
  const action = classifyGsc(r, !!r.match)
  const fix = r.match
    ? `Optimize [\`${r.match.slug}\`](https://truake.com/diffr/blog/${r.match.slug}) — TL;DR/FAQ/meta`
    : `Research new post for "${r.query}"`
  return `${i + 1}. **${action}** — ${fix}`
}).join('\n') || '_Export GSC CSV to populate._'}

---

_Last run: ${new Date().toISOString()}_
`
}

// ── CLI ──────────────────────────────────────────────────────────────

function arg(name: string): string | null {
  const i = process.argv.indexOf(name)
  return i >= 0 ? process.argv[i + 1] ?? null : null
}

async function main() {
  loadEnvLocal()
  const noReddit = process.argv.includes('--no-reddit')
  const gscPath = arg('--gsc') ?? findGscQueriesCsv()
  const ahrefsPath = arg('--ahrefs') ?? newestImport('ahrefs-keywords')

  const index: BlogIndexEntry[] = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    tags: p.tags,
    url: `https://truake.com/diffr/blog/${p.slug}`,
  }))

  const gsc = gscPath && existsSync(gscPath) ? parseGscCsv(gscPath) : []
  const ahrefs = ahrefsPath && existsSync(ahrefsPath) ? parseAhrefsCsv(ahrefsPath) : []
  const reddit = noReddit ? [] : await fetchRedditInsights()

  const md = buildReport({
    gscPath,
    ahrefsPath,
    gsc,
    ahrefs,
    reddit,
    index,
  })

  writeFileSync(OUT, md, 'utf8')
  console.log(`Wrote ${OUT}`)
  console.log(`  GSC: ${gsc.length} rows${gscPath ? ` (${gscPath})` : ''}`)
  console.log(`  Ahrefs: ${ahrefs.length} rows${ahrefsPath ? ` (${ahrefsPath})` : ''}`)
  console.log(`  Reddit: ${reddit.length} rows`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
