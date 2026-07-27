#!/usr/bin/env npx tsx
/** Fetch dynamic OG PNGs and save to public/og/ for fast social crawlers. */
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { BLOG_SLUG_TO_PRESET } from '../app/diffr/blog/[slug]/page'

const BASE = 'https://truake.com'
const OUT = join(process.cwd(), 'public', 'diffr', 'blog', 'share')

async function bake(slug: string): Promise<void> {
  const url = `${BASE}/diffr/blog/${slug}/og`
  process.stdout.write(`Fetching ${url} … `)
  const res = await fetch(url)
  if (!res.ok) {
    console.log(`FAIL ${res.status}`)
    return
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const out = join(OUT, `${slug}.png`)
  writeFileSync(out, buf)
  console.log(`OK ${buf.length} bytes → public/diffr/blog/share/${slug}.png`)
  // Also emit JPG — X/LinkedIn fetch JPG more reliably than large PNGs.
  try {
    const { default: sharp } = await import('sharp')
    const jpg = await sharp(buf).jpeg({ quality: 88 }).toBuffer()
    writeFileSync(join(OUT, `${slug}.jpg`), jpg)
    console.log(`   + ${jpg.length} bytes → public/diffr/blog/share/${slug}.jpg`)
  } catch {
    console.log('   (sharp unavailable — PNG only)')
  }
}

async function main() {
  mkdirSync(OUT, { recursive: true })
  const args = process.argv.slice(2)
  const slugs =
    args.includes('--all')
      ? Object.keys(BLOG_SLUG_TO_PRESET)
      : args.length > 0
        ? args
        : ['luxury-investment-brand-guide']

  for (const slug of slugs) {
    await bake(slug)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
