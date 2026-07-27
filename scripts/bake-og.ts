#!/usr/bin/env npx tsx
/** Fetch dynamic OG PNGs and save to public/diffr/blog/share/ for fast social crawlers. */
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { BLOG_SLUG_TO_PRESET } from '../app/diffr/blog/[slug]/page'
import { getAllPosts } from '../app/diffr/blog/posts'

const BASE = process.env.OG_BASE ?? 'https://truake.com'
const OUT = join(process.cwd(), 'public', 'diffr', 'blog', 'share')

function brandGuideSlugs(): string[] {
  return getAllPosts()
    .map((p) => p.slug)
    .filter((s) => s.endsWith('-brand-guide'))
}

async function bake(slug: string): Promise<void> {
  const url = `${BASE}/diffr/blog/${slug}/og`
  process.stdout.write(`Fetching ${url} … `)
  const t0 = Date.now()
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) {
    console.log(`FAIL ${res.status}`)
    return
  }
  const ct = res.headers.get('content-type') ?? ''
  if (!ct.includes('image')) {
    console.log(`FAIL not an image (${ct})`)
    return
  }
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(join(OUT, `${slug}.png`), buf)
  const legacyOg = join(process.cwd(), 'public', 'og', `${slug}.png`)
  mkdirSync(join(process.cwd(), 'public', 'og'), { recursive: true })
  writeFileSync(legacyOg, buf)
  try {
    const { default: sharp } = await import('sharp')
    const jpg = await sharp(buf).jpeg({ quality: 88 }).toBuffer()
    writeFileSync(join(OUT, `${slug}.jpg`), jpg)
    console.log(`OK ${((Date.now() - t0) / 1000).toFixed(1)}s → ${slug}.jpg (${jpg.length} bytes)`)
  } catch {
    console.log(`OK ${((Date.now() - t0) / 1000).toFixed(1)}s → ${slug}.png only (${buf.length} bytes)`)
  }
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
  for (const slug of slugs) {
    await bake(slug)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
