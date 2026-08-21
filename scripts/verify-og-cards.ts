#!/usr/bin/env npx tsx
/**
 * Gate: prove every baked OG share card is the real post card, not a silent fallback.
 *
 * Three failure modes shipped to production before this gate existed, all of which
 * passed bake-og's `res.ok && content-type: image` check:
 *   A  /og 302-redirected to the site-wide diffr-og.png (stale dev server → posts.find
 *      returned undefined) and bake followed the redirect, baking the generic card.
 *   B  the og-base cover fetch 404'd, so Satori dropped the <img> and rendered a flat
 *      cream field behind the title — a card with no photo.
 *   C  the card was never committed / versions.json never bumped, so production served
 *      a stale or missing file.
 *
 * Usage:
 *   npx tsx scripts/verify-og-cards.ts                # every baked card
 *   npx tsx scripts/verify-og-cards.ts <slug> [...]   # specific slugs
 */
import { execFileSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'
import { OG_BASE_SLUGS } from '../app/diffr/blog/og-base'

const ROOT = process.cwd()
const SHARE_DIR = join(ROOT, 'public', 'diffr', 'blog', 'share')
const OG_BASE_DIR = join(ROOT, 'public', 'og-base')
const VERSIONS_PATH = join(SHARE_DIR, 'versions.json')
const DEFAULT_CARD = join(ROOT, 'public', 'diffr-og.png')

/** X refuses cards over 5 MB and downgrades anything under 300x157. */
const MAX_BYTES = 5 * 1024 * 1024
const WIDTH = 1200
const HEIGHT = 630

type Check = { ok: boolean; label: string; detail?: string }

async function gray16(buf: Buffer): Promise<number[]> {
  const raw = await sharp(buf).resize(16, 16, { fit: 'fill' }).grayscale().raw().toBuffer()
  return Array.from(raw)
}

function hamming(a: number[], b: number[]): number {
  const ma = a.reduce((s, v) => s + v, 0) / a.length
  const mb = b.reduce((s, v) => s + v, 0) / b.length
  let d = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > ma !== b[i] > mb) d++
  }
  return d
}

function gitTracked(rel: string): boolean {
  try {
    execFileSync('git', ['ls-files', '--error-unmatch', rel], { cwd: ROOT, stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

async function verify(slug: string, defaultHash: number[]): Promise<Check[]> {
  const checks: Check[] = []
  const jpg = join(SHARE_DIR, `${slug}.jpg`)

  if (!existsSync(jpg)) {
    return [{ ok: false, label: 'card exists', detail: 'share/*.jpg missing — run bake-og' }]
  }
  const buf = readFileSync(jpg)
  const meta = await sharp(buf).metadata()

  checks.push({
    ok: meta.width === WIDTH && meta.height === HEIGHT,
    label: 'dimensions 1200x630',
    detail: `${meta.width}x${meta.height}`,
  })
  checks.push({
    ok: buf.length <= MAX_BYTES,
    label: 'under 5 MB',
    detail: `${(buf.length / 1024).toFixed(0)} KB`,
  })

  // Failure mode A — the card is the site-wide default, not this post's card.
  const hash = await gray16(buf)
  const dist = hamming(hash, defaultHash)
  checks.push({
    ok: dist > 12,
    label: 'not the generic diffr-og.png',
    detail: `hamming=${dist}${dist <= 12 ? ' — /og redirected to the fallback' : ''}`,
  })

  // Failure mode B — the source photo must at least be on disk. Whether it was
  // actually composited is asserted at bake time from the route's x-og-cover
  // header; pixel forensics cannot tell a flat cover apart from a flat photo.
  if (OG_BASE_SLUGS.has(slug)) {
    const base = ['jpg', 'png'].map((e) => join(OG_BASE_DIR, `${slug}.${e}`)).find(existsSync)
    checks.push({
      ok: Boolean(base),
      label: 'og-base photo on disk',
      detail: base ? 'present' : 'missing from public/og-base/ — card will bake with no photo',
    })
  }

  // Failure mode C — baked but never shipped.
  checks.push({
    ok: gitTracked(`public/diffr/blog/share/${slug}.jpg`),
    label: 'git-tracked',
    detail: 'commit the card or production serves nothing',
  })

  return checks
}

async function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
  const { getAllPosts } = await import('../app/diffr/blog/posts')
  const slugs = args.length
    ? args
    : getAllPosts()
        .map((p) => p.slug)
        .filter((s) => existsSync(join(SHARE_DIR, `${s}.jpg`)))

  const defaultHash = await gray16(readFileSync(DEFAULT_CARD))
  // Absent entries are not fatal — bakedOgUrl falls back to the file's mtime —
  // but a missing entry means the cache-bust token changes on every checkout.
  const versions: Record<string, number> = existsSync(VERSIONS_PATH)
    ? JSON.parse(readFileSync(VERSIONS_PATH, 'utf8'))
    : {}

  let failed = 0
  for (const slug of slugs) {
    const checks = await verify(slug, defaultHash)
    const bad = checks.filter((c) => !c.ok)
    const note = slug in versions ? '' : '  (no versions.json entry — using mtime)'
    if (bad.length) {
      failed++
      console.log(`\n✗ ${slug}`)
      for (const c of checks) {
        console.log(`    ${c.ok ? '·' : '✗'} ${c.label}${c.detail ? ` (${c.detail})` : ''}`)
      }
    } else {
      console.log(`✓ ${slug}${note}`)
    }
  }

  console.log(`\n${slugs.length - failed}/${slugs.length} cards passed`)
  if (failed) {
    console.log('Re-bake the failures: ./scripts/bake-og-auto.sh <slug>')
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
