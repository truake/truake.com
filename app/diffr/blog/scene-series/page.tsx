import type { Metadata } from 'next'
import Link from 'next/link'
import { SCENE_SERIES_CATEGORIES, sceneSeriesCount } from '../scene-series-config'
import { OG_BASE_SLUGS } from '../og-base'
import { getPostBySlug } from '../posts'
import { SceneSeriesGallery, type SceneGalleryItem } from './SceneSeriesGallery'

const HUB_URL = 'https://truake.com/diffr/blog/scene-series'

const C = {
  text: '#2A2620',
  muted: 'rgba(42,38,32,0.62)',
  rule: 'rgba(42,38,32,0.16)',
  orange: '#F0522C',
}

const play = "var(--font-display), 'Playfair Display', Georgia, serif"
const sans = "var(--font-syne), -apple-system, sans-serif"

export const metadata: Metadata = {
  title: 'Scene Series: EDC, WIMB & OOTD Brand Guides — Diffr Blog',
  description:
    'Browse every Diffr Scene Series flat-lay brand guide — EDC pocket dumps, WIMB bag spills, and OOTD outfit kits. One brand per slot, live catalog tiles, matching presets in the Diffr iPhone app.',
  alternates: {
    canonical: HUB_URL,
  },
  openGraph: {
    title: 'Scene Series: EDC, WIMB & OOTD Brand Guides — Diffr',
    description:
      'Visual gallery of all Diffr Scene Series flat-lay brand guides — one specialist brand per slot across EDC, WIMB, and OOTD.',
    url: HUB_URL,
    images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr Scene Series' }],
  },
}

export default function SceneSeriesHubPage() {
  const total = sceneSeriesCount()

  const items: SceneGalleryItem[] = SCENE_SERIES_CATEGORIES.flatMap((cat) =>
    cat.scenes.map((scene) => {
      const post = getPostBySlug(scene.slug)
      const coverSrc = OG_BASE_SLUGS.has(scene.slug)
        ? `/og-base/${scene.slug}.jpg`
        : `/diffr/blog/share/${scene.slug}.jpg`
      return {
        slug: scene.slug,
        title: scene.title,
        preset: scene.preset,
        categoryId: cat.id,
        categoryLabel: cat.label,
        coverSrc,
        excerpt: post?.excerpt,
      }
    }),
  ).sort((a, b) => (b.preset ?? 0) - (a.preset ?? 0))

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Diffr Scene Series',
    description:
      'Editorial flat-lay brand guides in three lanes — EDC, WIMB, and OOTD. One specialist brand per slot.',
    url: HUB_URL,
    isPartOf: {
      '@type': 'Blog',
      name: 'Diffr Blog',
      url: 'https://truake.com/diffr/blog',
    },
    hasPart: items.map((item) => ({
      '@type': 'BlogPosting',
      headline: item.title,
      url: `https://truake.com/diffr/blog/${item.slug}`,
    })),
  }

  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '44px 24px 96px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />

      <nav style={{ fontFamily: sans, fontSize: 12, marginBottom: 24, color: C.muted }}>
        <Link href="/diffr/blog" style={{ color: C.muted, textDecoration: 'none' }}>
          ← Back to Diffr Blog
        </Link>
      </nav>

      <header style={{ borderBottom: `1px solid ${C.rule}`, paddingBottom: 28, marginBottom: 32 }}>
        <p style={{
          fontFamily: sans,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: C.orange,
          margin: '0 0 10px',
        }}>
          Scene Series · {total} Visual Guides
        </p>
        <h1 style={{
          fontFamily: play,
          fontSize: 'clamp(30px, 4vw, 44px)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: C.text,
          margin: '0 0 12px',
        }}>
          EDC, WIMB &amp; OOTD Flat-Lay Brand Guides
        </h1>
        <p style={{
          fontFamily: play,
          fontSize: 17,
          lineHeight: 1.6,
          color: C.muted,
          maxWidth: 740,
          margin: 0,
        }}>
          Every Scene decodes an editorial flat lay into a closed starter kit — one specialist brand per slot, zero repeats, backed by live catalog tiles and matching presets in the Diffr iPhone app.
        </p>
      </header>

      <SceneSeriesGallery items={items} />
    </div>
  )
}
