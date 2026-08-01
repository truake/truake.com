import { existsSync, statSync } from 'fs'
import { join } from 'path'

const SHARE_DIR = join(process.cwd(), 'public', 'diffr', 'blog', 'share')

/** Append ?v=mtime so X/Facebook re-fetch after rebakes (they cache cards ~7 days). */
function withVersion(filePath: string, url: string): string {
  const v = Math.floor(statSync(filePath).mtimeMs / 1000)
  return `${url}?v=${v}`
}

/** Slugs where JPG share URL was 404-cached at edge — serve PNG in meta instead. */
const PNG_FIRST_SLUGS = new Set<string>(['travel-essentials-brand-guide'])

/** Pre-baked share PNG/JPG — CDN-static for social crawlers (dynamic /og/ times out on X). */
export function bakedOgUrl(slug: string): string | null {
  const png = join(SHARE_DIR, `${slug}.png`)
  const jpg = join(SHARE_DIR, `${slug}.jpg`)
  if (PNG_FIRST_SLUGS.has(slug)) {
    if (existsSync(png)) return withVersion(png, `https://truake.com/diffr/blog/share/${slug}.png`)
    if (existsSync(jpg)) return withVersion(jpg, `https://truake.com/diffr/blog/share/${slug}.jpg`)
  } else {
    // JPG first — smaller/faster for X crawlers (~17s budget); avoids RGBA PNG edge cases.
    if (existsSync(jpg)) return withVersion(jpg, `https://truake.com/diffr/blog/share/${slug}.jpg`)
    if (existsSync(png)) return withVersion(png, `https://truake.com/diffr/blog/share/${slug}.png`)
  }
  const legacy = join(process.cwd(), 'public', 'og', `${slug}.png`)
  if (existsSync(legacy)) return withVersion(legacy, `https://truake.com/og/${slug}.png`)
  return null
}
