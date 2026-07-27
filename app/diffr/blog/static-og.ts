import { existsSync } from 'fs'
import { join } from 'path'

/** Pre-baked share PNG in public/og/ — instant for Twitter/Facebook crawlers. */
export function bakedOgUrl(slug: string): string | null {
  const path = join(process.cwd(), 'public', 'og', `${slug}.png`)
  return existsSync(path) ? `https://truake.com/og/${slug}.png` : null
}
