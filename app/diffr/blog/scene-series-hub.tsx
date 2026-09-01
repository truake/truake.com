import Link from 'next/link'
import { SCENE_SERIES_CATEGORIES, SCENE_SERIES_HUB_SLUG, sceneSeriesCount } from './scene-series-config'

const C = {
  text: '#2A2620',
  muted: 'rgba(42,38,32,0.62)',
  rule: 'rgba(42,38,32,0.16)',
  orange: '#F0522C',
}

const play = "var(--font-display), 'Playfair Display', Georgia, serif"
const sans = "var(--font-syne), -apple-system, sans-serif"

const CAT_ACCENT: Record<string, string> = {
  edc: '#1B8BF5',
  wimb: '#F0522C',
  ootd: '#1A8F4C',
}

export function SceneSeriesHubCard() {
  const total = sceneSeriesCount()

  return (
    <section style={{ marginBottom: 40 }}>
      <Link
        href={`/diffr/blog/${SCENE_SERIES_HUB_SLUG}`}
        className="blog-link diffr-series-card"
        style={{
          display: 'block',
          textDecoration: 'none',
          color: C.text,
          marginBottom: 20,
          padding: '28px 32px',
          border: `1px solid ${C.rule}`,
          borderLeft: `4px solid ${C.orange}`,
          background: 'rgba(255,255,255,0.35)',
        }}
      >
        <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.orange }}>
          Series
        </span>
        <h2 style={{ fontFamily: play, fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 700, lineHeight: 1.2, margin: '10px 0 8px' }}>
          Scene Series
        </h2>
        <p style={{ fontFamily: play, fontSize: 16, lineHeight: 1.55, color: C.muted, margin: '0 0 12px', maxWidth: 720 }}>
          Editorial flat-lay brand guides — EDC pocket dumps, WIMB bag spills, and OOTD wardrobe kits. One brand per slot, live catalog tiles, matching presets in the Diffr iPhone app.
        </p>
        <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.orange }}>
          {total} scene guides · EDC · WIMB · OOTD <span className="diffr-series-arrow">→</span>
        </span>
      </Link>

      <div
        className="scene-series-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {SCENE_SERIES_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            style={{
              padding: '20px 22px',
              border: `1px solid ${C.rule}`,
              background: 'rgba(255,255,255,0.28)',
            }}
          >
            <p style={{
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: CAT_ACCENT[cat.id],
              margin: '0 0 6px',
            }}>
              {cat.label}
            </p>
            <p style={{ fontFamily: play, fontSize: 14, lineHeight: 1.45, color: C.muted, margin: '0 0 14px' }}>
              {cat.tagline}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {cat.scenes.slice(0, 4).map((s) => (
                <li key={s.slug} style={{ marginBottom: 8 }}>
                  <Link
                    href={`/diffr/blog/${s.slug}`}
                    className="blog-link"
                    style={{
                      fontFamily: play,
                      fontSize: 15,
                      fontWeight: 600,
                      color: C.text,
                      textDecoration: 'none',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            {cat.scenes.length > 4 && (
              <Link
                href={`/diffr/blog/${SCENE_SERIES_HUB_SLUG}#${cat.id}`}
                style={{
                  fontFamily: sans,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: CAT_ACCENT[cat.id],
                  textDecoration: 'none',
                }}
              >
                +{cat.scenes.length - 4} more →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
