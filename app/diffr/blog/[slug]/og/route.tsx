// Local bake hits this route for layered Satori cards. On Vercel the function stays
// tiny (redirect only) so deploy stays under the 250MB serverless limit — crawlers
// use pre-baked public/diffr/blog/share/*.jpg from generateMetadata instead.
import { ogProductionRedirect } from './og-production-redirect'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  if (process.env.VERCEL === '1') {
    return ogProductionRedirect(ctx)
  }
  const { renderDynamicOgCard } = await import('./dynamic-og-card')
  return renderDynamicOgCard(req, ctx)
}
