#!/usr/bin/env npx tsx
/** Fetch dynamic OG PNGs and save to public/diffr/blog/share/ for fast social crawlers. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { BLOG_SLUG_TO_PRESET } from '../app/diffr/blog/[slug]/page'
import { getAllPosts } from '../app/diffr/blog/posts'

const BASE = process.env.OG_BASE ?? 'https://truake.com'
const OUT = join(process.cwd(), 'public', 'diffr', 'blog', 'share')
const VERSIONS_PATH = join(OUT, 'versions.json')

function bumpVersions(slugs: string[]): void {
  let versions: Record<string, number> = {}
  if (existsSync(VERSIONS_PATH)) {
    try {
      versions = JSON.parse(readFileSync(VERSIONS_PATH, 'utf8'))
    } catch {
      versions = {}
    }
  }
  const now = Math.floor(Date.now() / 1000)
  for (const slug of slugs) {
    versions[slug] = now
  }
  writeFileSync(VERSIONS_PATH, JSON.stringify(versions, null, 2) + '\n')
}

function brandGuideSlugs(): string[] {
  return getAllPosts()
    .map((p) => p.slug)
    .filter((s) => s.endsWith('-brand-guide'))
}

/**
 * Fetch one card, refusing anything that is not demonstrably this post's card.
 *
 * `res.ok && content-type: image` is not enough, and shipped three broken cards
 * before this check existed. The route 302s to the site-wide diffr-og.png
 * whenever it cannot resolve the post (a stale dev server is enough to trigger
 * it), and `redirect: 'follow'` turned that into a perfectly valid 200 image/png
 * that got committed as the post's card. So: never follow redirects, and make
 * the route declare what it composited via x-og-* headers.
 */
async function bake(slug: string): Promise<boolean> {
  const url = `${BASE}/diffr/blog/${slug}/og`
  process.stdout.write(`Fetching ${url} … `)
  const t0 = Date.now()
  const res = await fetch(url, { redirect: 'manual' })

  if (res.status >= 300 && res.status < 400) {
    console.log(
      `FAIL ${res.status} → ${res.headers.get('location')}\n` +
        `      The route could not resolve "${slug}". Usually a stale dev server:\n` +
        `      restart it so posts.ts is recompiled, then re-bake.`,
    )
    return false
  }
  if (!res.ok) {
    console.log(`FAIL ${res.status}`)
    return false
  }
  const ct = res.headers.get('content-type') ?? ''
  if (!ct.includes('image')) {
    console.log(`FAIL not an image (${ct})`)
    return false
  }

  const cover = res.headers.get('x-og-cover') ?? 'unknown'
  const tiles = Number(res.headers.get('x-og-tiles') ?? '0')
  const preset = res.headers.get('x-og-preset') ?? 'none'

  if (cover === 'none') {
    console.log(
      `FAIL cover not composited\n` +
        `      public/og-base/${slug}.jpg is listed in OG_BASE_SLUGS but could not be\n` +
        `      read. Add the photo before baking — the card would ship with no image.`,
    )
    return false
  }
  if (preset !== 'none' && tiles === 0) {
    console.log(
      `FAIL no slot tiles for preset ${preset}\n` +
        `      getSceneBrandKit returned nothing renderable. Check the preset's pinned\n` +
        `      product lines are crawled before baking.`,
    )
    return false
  }

  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(join(OUT, `${slug}.png`), buf)
  const legacyOg = join(process.cwd(), 'public', 'og', `${slug}.png`)
  mkdirSync(join(process.cwd(), 'public', 'og'), { recursive: true })
  writeFileSync(legacyOg, buf)
  // Printed, not asserted: only the scene spec knows which brands are correct, so
  // this is the operator's chance to spot a pool fallback before the card ships.
  const brands = res.headers.get('x-og-brands') ?? '?'
  const detail = `cover=${cover} tiles=${tiles}`
  try {
    const { default: sharp } = await import('sharp')
    const jpg = await sharp(buf).jpeg({ quality: 88 }).toBuffer()
    writeFileSync(join(OUT, `${slug}.jpg`), jpg)
    console.log(`OK ${((Date.now() - t0) / 1000).toFixed(1)}s → ${slug}.jpg (${jpg.length} bytes, ${detail})`)
  } catch {
    console.log(`OK ${((Date.now() - t0) / 1000).toFixed(1)}s → ${slug}.png only (${buf.length} bytes, ${detail})`)
  }
  if (preset !== 'none') console.log(`      brands: ${brands}   ← must match the scene spec`)
  return true
}

async function main() {
  mkdirSync(OUT, { recursive: true })
  const args = process.argv.slice(2)
  let slugs: string[]
  if (args.includes('--brand-guides')) {
    slugs = brandGuideSlugs()
  } else if (args.includes('--all')) {
    slugs = [...new Set([...Object.keys(BLOG_SLUG_TO_PRESET), ...brandGuideSlugs()])]
  } else if (args.length > 0) {
    slugs = args.filter((a) => !a.startsWith('--'))
  } else {
    slugs = ['luxury-investment-brand-guide']
  }

  console.log(`Baking ${slugs.length} OG card(s) from ${BASE} …`)
  const baked: string[] = []
  const failed: string[] = []
  for (const slug of slugs) {
    if (await bake(slug)) baked.push(slug)
    else failed.push(slug)
  }

  // Only bump what actually baked: a version bump on a failed slug tells the CDN
  // and X to re-fetch a card we know is wrong.
  if (baked.length) {
    bumpVersions(baked)
    console.log(`Updated ${VERSIONS_PATH} for ${baked.length} slug(s)`)
  }
  if (failed.length) {
    console.log(`\n${failed.length} card(s) FAILED and were not written: ${failed.join(', ')}`)
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
