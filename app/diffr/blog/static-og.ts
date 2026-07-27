import { existsSync } from 'fs'
import { join } from 'path'

const SHARE_DIR = join(process.cwd(), 'public', 'diffr', 'blog', 'share')

/** Pre-baked share JPG in public/diffr/blog/share/ — under /diffr/blog/ for crawlers. */
export function bakedOgUrl(slug: string): string | null {
  const jpg = join(SHARE_DIR, `${slug}.jpg`)
  const png = join(SHARE_DIR, `${slug}.png`)
  if (existsSync(jpg)) return `https://truake.com/diffr/blog/share/${slug}.jpg`
  if (existsSync(png)) return `https://truake.com/diffr/blog/share/${slug}.png`
  // Legacy path (pre-share migration)
  const legacy = join(process.cwd(), 'public', 'og', `${slug}.png`)
  if (existsSync(legacy)) return `https://truake.com/og/${slug}.png`
  return null
}
