#!/usr/bin/env npx tsx
/** Fetch dynamic OG PNGs and save to public/og/ for fast social crawlers. */
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { BLOG_SLUG_TO_PRESET } from '../app/diffr/blog/[slug]/page'

const BASE = 'https://truake.com'
const OUT = join(process.cwd(), 'public', 'og')

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
  console.log(`OK ${buf.length} bytes → public/og/${slug}.png`)
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
