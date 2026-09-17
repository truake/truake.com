import { bakedOgUrl } from '../../static-og'
import postTitles from '../../post-titles.json'

/** Production: social crawlers use baked share JPGs from generateMetadata — this route only redirects. */
export async function ogProductionRedirect(ctx: {
  params: Promise<{ slug: string }>
}): Promise<Response> {
  const { slug } = await ctx.params
  if (!postTitles[slug as keyof typeof postTitles]) {
    return Response.redirect('https://truake.com/diffr-og.png', 302)
  }
  const baked = bakedOgUrl(slug)
  if (baked) {
    return Response.redirect(baked, 302)
  }
  return Response.redirect('https://truake.com/diffr-og.png', 302)
}
