// Dynamic, layered share card for decode blog posts that have a live slot kit.
// Bottom layer = the hook cover (toy-covers) or a branded gradient base;
// top layer = up to 4 slot product tiles (the scene's curated picks) as elevated
// white cards, giving the share image depth instead of one flat photo.
// generateMetadata in ../page.tsx points slot posts at this route; kit-less posts
// keep the static cover/default and never hit this handler.
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { posts } from '../../posts'
import { getSceneBrandKit } from '../../../start/lib'
import { BLOG_SLUG_TO_PRESET } from '../page'
import { hasDynamicOgCard, ogBaseUrl } from '../../og-base'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// next/og (Satori) does not rasterize WEBP, and the product CDN serves only
// webp — so decode each tile to a PNG data URL here before handing it over.
async function toPngDataUrl(url: string | null): Promise<string | null> {
  if (!url) return null
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    const png = await sharp(buf).resize(336, 336, { fit: 'cover' }).png().toBuffer()
    return `data:image/png;base64,${png.toString('base64')}`
  } catch {
    return null
  }
}

// Official Diffr wordmark (public/diffr-logo-white.png) is white-on-transparent.
// Render it white over dark cover scrims, and a sharp-negated ink version over the
// light gradient base so it's always legible.
async function logoDataUrl(dark: boolean): Promise<string | null> {
  try {
    const res = await fetch('https://truake.com/diffr-logo-white.png')
    if (!res.ok) return null
    let img = sharp(Buffer.from(await res.arrayBuffer()))
    if (dark) img = img.negate({ alpha: false })
    const png = await img.resize({ height: 96 }).png().toBuffer()
    return `data:image/png;base64,${png.toString('base64')}`
  } catch {
    return null
  }
}

const CREAM = '#F4F1EA'
const INK = '#2A2620'
const BLUE = '#1B8BF5'

const ORANGE = '#F0522C'
const NAVY = '#1d2088'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  const presetId = BLOG_SLUG_TO_PRESET[slug]
  const toyCover = (slug === 'mixed-toy-box' || slug.startsWith('toy-team-'))
    ? `https://truake.com/toy-covers/${slug}.jpg` : null
  const coverUrl = ogBaseUrl(slug) ?? toyCover
  const isBtb = slug.startsWith('behind-the-build-')
  const isBtc = slug.startsWith('behind-the-contract-')

  if (!post || (!presetId && !coverUrl && !hasDynamicOgCard(slug))) {
    return Response.redirect('https://truake.com/diffr-og.png', 302)
  }

  const seriesGradient = isBtb
    ? `linear-gradient(135deg, ${ORANGE} 0%, ${INK} 55%, ${BLUE} 100%)`
    : isBtc
      ? `linear-gradient(135deg, ${NAVY} 0%, ${INK} 55%, ${BLUE} 100%)`
      : `linear-gradient(135deg, ${CREAM} 0%, #E7E0D2 55%, #DCD3C0 100%)`
  const seriesBadge = isBtb ? 'Behind the Build' : isBtc ? 'Behind the Contract' : 'decide once'
  const seriesBadgeBg = isBtb ? ORANGE : isBtc ? NAVY : BLUE

  const kit = presetId ? await getSceneBrandKit(presetId).catch(() => null) : null
  const ready = (kit?.slots ?? []).filter((s) => s.status === 'ready' && s.imageUrl).slice(0, 4)
  const tiles = await Promise.all(
    ready.map(async (s) => ({ slot: s, png: await toPngDataUrl(s.imageUrl) })),
  )
  const extra = Math.max(0, (kit?.readyCount ?? ready.length) - ready.length)
  const logo = await logoDataUrl(!coverUrl && !isBtb && !isBtc)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: CREAM,
          fontFamily: 'sans-serif',
        }}
      >
        {/* ── Base layer: hook cover, or branded gradient ── */}
        {coverUrl ? (
          <img
            src={coverUrl}
            width={1200}
            height={630}
            style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex',
              background: seriesGradient,
            }}
          />
        )}
        {/* scrim so text/tiles read on any base */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex',
            background: coverUrl
              ? 'linear-gradient(180deg, rgba(20,18,15,0.55) 0%, rgba(20,18,15,0.20) 40%, rgba(20,18,15,0.70) 100%)'
              : (isBtb || isBtc)
                ? 'linear-gradient(180deg, rgba(20,18,15,0.35) 0%, rgba(20,18,15,0.10) 45%, rgba(20,18,15,0.55) 100%)'
                : 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(20,18,15,0.06) 100%)',
          }}
        />

        {/* ── Top: brand + title ── */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '56px 64px 0', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {logo ? (
              <img src={logo} height={42} width={89} style={{ height: 42, width: 89, objectFit: 'contain' }} />
            ) : (
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 800, color: coverUrl || isBtb || isBtc ? '#fff' : INK, letterSpacing: -0.5 }}>
                Diffr
              </div>
            )}
            <div
              style={{
                display: 'flex', fontSize: 18, fontWeight: 700, color: '#fff', background: seriesBadgeBg,
                padding: '6px 14px', borderRadius: 999, letterSpacing: 0.3,
              }}
            >
              {seriesBadge}
            </div>
          </div>
          <div
            style={{
              display: 'flex', marginTop: 22, fontSize: 52, lineHeight: 1.08, fontWeight: 800,
              color: coverUrl || isBtb || isBtc ? '#fff' : INK, maxWidth: 1000, letterSpacing: -1,
            }}
          >
            {post.title.length > 84 ? post.title.slice(0, 81) + '…' : post.title}
          </div>
        </div>

        {/* ── Bottom: elevated slot tiles ── */}
        <div
          style={{
            display: 'flex', alignItems: 'flex-end', gap: 22, padding: '0 64px 52px',
            marginTop: 'auto', position: 'relative',
          }}
        >
          {tiles.map(({ slot: s, png }) => (
            <div
              key={s.brandId + '-' + s.productTypeId}
              style={{
                display: 'flex', flexDirection: 'column', width: 196, background: '#fff',
                borderRadius: 22, padding: 14, boxShadow: '0 18px 40px rgba(20,18,15,0.34)',
              }}
            >
              <div
                style={{
                  display: 'flex', width: 168, height: 168, borderRadius: 14, overflow: 'hidden',
                  background: CREAM, alignItems: 'center', justifyContent: 'center',
                }}
              >
                {png ? (
                  <img src={png} width={168} height={168} style={{ width: 168, height: 168, objectFit: 'cover' }} />
                ) : (
                  <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, color: '#C9C0AE' }}>
                    {s.brandName.charAt(0)}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', marginTop: 12, fontSize: 22, fontWeight: 800, color: INK }}>
                {s.brandName.length > 16 ? s.brandName.slice(0, 15) + '…' : s.brandName}
              </div>
              <div style={{ display: 'flex', fontSize: 16, color: '#7A7468', marginTop: 2 }}>
                {s.productTypeName.length > 18 ? s.productTypeName.slice(0, 17) + '…' : s.productTypeName}
              </div>
            </div>
          ))}
          {extra > 0 && (
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: 132, height: 196,
                borderRadius: 22, background: 'rgba(255,255,255,0.92)', color: INK, fontSize: 30, fontWeight: 800,
                boxShadow: '0 18px 40px rgba(20,18,15,0.30)',
              }}
            >
              +{extra}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size },
  )
}
