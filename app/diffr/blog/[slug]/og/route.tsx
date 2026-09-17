// Production crawlers use baked share JPGs from generateMetadata. This handler only
// redirects stray /og hits; local bake calls lib/dynamic-og-card.tsx directly.
import { ogProductionRedirect } from './og-production-redirect'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  return ogProductionRedirect(ctx)
}
