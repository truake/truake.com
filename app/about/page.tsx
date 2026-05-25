import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Rock Lam — Truake',
  description: 'Rock Lam is the founder of Truake and the author of The Value Boat and The Default Trap — two books on life navigation, intentional consumption, and the philosophy of legitimate difference.',
  alternates: {
    canonical: 'https://truake.com/about',
  },
  openGraph: {
    title: 'About Rock Lam',
    description: 'Founder of Truake. Author of The Value Boat and The Default Trap. Building Pathoragy and Diffr.',
    url: 'https://truake.com/about',
    type: 'profile',
  },
}

const C = {
  bg:     '#F0EBE3',
  bg2:    '#F8F5F1',
  bg3:    '#EDE7DD',
  text:   '#2A2620',
  text60: 'rgba(42,38,32,0.60)',
  text40: 'rgba(42,38,32,0.40)',
  text25: 'rgba(42,38,32,0.25)',
  accent: '#E85435',
  blue:   '#1B8BF5',
  border: 'rgba(42,38,32,0.08)',
  borderMed: 'rgba(42,38,32,0.14)',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rock Lam',
  url: 'https://truake.com/about',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Truake',
    url: 'https://truake.com',
  },
  description: 'Rock Lam is the founder of Truake and the author of The Value Boat and The Default Trap. He writes on long-horizon life planning, intentional consumption, and the philosophy of legitimate difference.',
  knowsAbout: [
    'life design',
    'intentional living',
    'long-horizon planning',
    'behavioral economics',
    'consumer psychology',
    'information theory',
    'philosophy of difference',
    'sustainable happiness',
  ],
  author: [
    {
      '@type': 'Book',
      name: 'The Value Boat',
      url: 'https://www.amazon.com/dp/B0GX2YRK3T',
      description: 'A framework for life navigation in open-water economic conditions, drawing on nautical metaphor, behavioral psychology, and a decade of observing peer divergence.',
    },
    {
      '@type': 'Book',
      name: 'The Default Trap',
      description: 'A philosophical response to cognitive poverty in an age of algorithmic excess. Introduces Diff-Structism and the theory of legitimate vs pseudo-difference.',
    },
  ],
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: '100vh', color: C.text }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(240,235,227,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 700,
            fontSize: '16px', color: C.text, letterSpacing: '-0.02em',
          }}>
            truake
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/pathoragy/blog" style={{ color: C.text60, textDecoration: 'none', fontSize: '14px' }}>Blog</Link>
          <Link href="/pathoragy" style={{ color: C.text60, textDecoration: 'none', fontSize: '14px' }}>Pathoragy</Link>
          <Link href="/diffr" style={{ color: C.text60, textDecoration: 'none', fontSize: '14px' }}>Diffr</Link>
        </div>
      </nav>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '120px 24px 100px' }}>

        {/* Header */}
        <header style={{ marginBottom: '64px' }}>
          <p style={{
            color: C.accent, fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            About
          </p>
          <h1 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '-0.03em', color: C.text, marginBottom: '24px',
          }}>
            Rock Lam
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '19px', lineHeight: 1.75, color: C.text60,
            maxWidth: '620px',
          }}>
            Founder of Truake. Author of <em>The Value Boat</em> and <em>The Default Trap</em>.
            Building tools for people who want to live by their own design rather than someone else's defaults.
          </p>
        </header>

        {/* Divider */}
        <div style={{ height: '1px', background: C.border, marginBottom: '56px' }} />

        {/* The Questions section */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: C.accent, marginBottom: '28px',
          }}>
            The Questions
          </h2>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', lineHeight: 1.82, color: C.text }}>
            <p style={{ marginBottom: '20px' }}>
              I started my working life with a peer group of fifty or so people — college classmates, early colleagues, friends of friends in the same city, the same year, the same starting salary. By any reasonable measure, we were sailing the same water in the same boats.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Ten years later, our lives were not in the same neighborhood anymore. Some were running companies. Some were quietly burned out in ways their LinkedIn pages could not describe. Two were dead.
            </p>
            <p style={{ marginBottom: '20px' }}>
              The variance was not random. It was not a function of effort — the dead worked the hardest. It was not a function of intelligence — the burned-out are not the dim ones. It was a function of something subtler that I spent the next decade trying to put into words.
            </p>
            <p style={{ marginBottom: '20px' }}>
              That question — why do equally-equipped people diverge so dramatically? — is the engine behind everything I write and build. My answer has two parts, and they correspond to two books.
            </p>
          </div>
        </section>

        {/* Books */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: C.text40, marginBottom: '28px',
          }}>
            Books
          </h2>

          {/* The Value Boat */}
          <div style={{
            background: C.bg2,
            border: `1px solid ${C.borderMed}`,
            borderRadius: '14px',
            padding: '32px',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(22,163,74,0.10)', color: '#16a34a',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 10px', borderRadius: '100px',
                border: '1px solid rgba(22,163,74,0.25)',
                flexShrink: 0,
              }}>Available</span>
            </div>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px', fontWeight: 700, fontStyle: 'italic',
              lineHeight: 1.3, color: C.text, marginBottom: '6px',
            }}>
              The Value Boat
            </h3>
            <p style={{ fontSize: '13px', color: C.text40, marginBottom: '16px', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
              A Sailor's Guide to Building Meaning in a World That's Losing Its Shore
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.75, color: C.text60 }}>
              The global economy has become open water. The career paths that once looked like roads have dissolved into currents, weather, and uncertainty. This book translates what navigators know into a framework for the kind of life-planning that actually works in uncertain conditions — drawing on behavioral psychology, the sociology of social comparison, and the practical wisdom of centuries of open-water navigation.
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.75, color: C.text60, marginTop: '14px' }}>
              The core argument: the map most people are using no longer fits the territory. Not their ability to read it.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a
                href="https://www.amazon.com/dp/B0GX2YRK3T"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#FF9900', color: '#111',
                  padding: '10px 20px', borderRadius: '8px',
                  textDecoration: 'none', fontSize: '13px', fontWeight: 700,
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M13.23 10.56V10c-1.94.02-3.98.42-3.98 2.72 0 1.17.61 1.97 1.65 1.97.76 0 1.44-.47 1.87-1.23.51-.93.46-1.8.46-2.9zM20.16 19c-.2.2-.5.2-.74.07C18.4 18 17.9 17.5 17.9 17.5c-1.57 1.6-3.14 2.04-5.31 2.04-2.7 0-4.8-1.67-4.8-5.02 0-2.62 1.42-4.4 3.44-5.27 1.76-.78 4.2-.92 6.08-1.13V7.6c0-.75.06-1.63-.38-2.28-.38-.58-1.12-.82-1.77-.82-1.2 0-2.27.62-2.54 1.9-.05.28-.27.55-.55.56l-3.07-.33c-.26-.06-.54-.27-.47-.67C8.96 2.92 12.07 2 14.86 2c1.42 0 3.28.38 4.4 1.44 1.42 1.33 1.28 3.1 1.28 5.03v4.55c0 1.37.57 1.97 1.1 2.71.2.27.24.6-.01.8l-1.47 1.47zm2.33 2.34c-.5.44-1.23.47-1.8.17C18.4 19.83 17.46 18.7 17.46 18.7s-1.63 1.65-3.95 1.65c-2.01 0-3.59-.65-4.28-1.95-1.87.02-3.07-.53-4.04-1.37-2.78-2.34-2.66-7.52.58-9.53-1.24-.46-2.32-1.33-2.5-2.26L1.5 8.5l.02-.02c.02-.17.07-.34.13-.52L4 8.58c-.18-.6-.08-1.26.31-1.76 1.2-1.55 3.4-2.32 6.18-2.32.52 0 1.03.04 1.53.11-1.15 1-1.82 2.41-1.82 4.24v.45c-1.53.52-2.63 1.66-3.17 3.04-.72 1.82-.58 3.77.4 5.34.82 1.3 2.16 2.05 3.73 2.12 1.44.06 2.73-.42 3.72-1.42.67.68 1.4 1.35 2.5 1.96.37.2.8.3 1.24.3.7 0 1.36-.27 1.86-.77l2.01-2.01z"/>
                </svg>
                Read on Amazon
              </a>
            </div>
          </div>

          {/* The Default Trap */}
          <div style={{
            background: C.bg2,
            border: `1px solid ${C.borderMed}`,
            borderRadius: '14px',
            padding: '32px',
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{
                background: `${C.blue}12`, color: C.blue,
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 10px', borderRadius: '100px',
                border: `1px solid ${C.blue}28`,
                flexShrink: 0,
              }}>Coming Soon</span>
            </div>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px', fontWeight: 700, fontStyle: 'italic',
              lineHeight: 1.3, color: C.text, marginBottom: '6px',
            }}>
              The Default Trap
            </h3>
            <p style={{ fontSize: '13px', color: C.text40, marginBottom: '16px', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
              Why Everything You Own Is Owning You
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.75, color: C.text60 }}>
              A philosophical response to an age of algorithmic excess. Introduces Diff-Structism — a theory rooted in information physics that distinguishes <em>legitimate difference</em> (physically grounded, causally real, capable of transmitting meaning) from <em>pseudo-difference</em> (manufactured by sign systems, pointing to nothing beneath themselves).
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.75, color: C.text60, marginTop: '14px' }}>
              Most of what we own, consume, and do was chosen for us. The default trap is not a trap you fall into once and then escape — it is continuously rebuilt by every algorithm that learns your patterns. This book is about getting out.
            </p>
          </div>
        </section>

        {/* Products */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: C.text40, marginBottom: '28px',
          }}>
            Products Built from These Ideas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>

            {/* Pathoragy */}
            <Link href="/pathoragy" style={{ textDecoration: 'none' }}>
              <div style={{
                background: C.bg3,
                border: `1px solid ${C.borderMed}`,
                borderRadius: '12px', padding: '24px',
                transition: 'border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={undefined}
              >
                <p style={{
                  color: C.accent, fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px',
                }}>
                  pathoragy
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: 1.65, color: C.text60 }}>
                  Long-horizon life planning with structured routes, waypoints, and daily evidence-backed tasks. The operational layer of The Value Boat.
                </p>
                <p style={{ fontSize: '13px', color: C.accent, marginTop: '14px', fontWeight: 600 }}>
                  iOS Beta →
                </p>
              </div>
            </Link>

            {/* Diffr */}
            <Link href="/diffr" style={{ textDecoration: 'none' }}>
              <div style={{
                background: `rgba(27,139,245,0.04)`,
                border: `1px solid rgba(27,139,245,0.15)`,
                borderRadius: '12px', padding: '24px',
                cursor: 'pointer',
              }}>
                <p style={{
                  color: C.blue, fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px',
                }}>
                  diffr
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: 1.65, color: C.text60 }}>
                  Curated brand guides built on the principle of legitimate difference. Structured research to end choice overload — one category at a time.
                </p>
                <p style={{ fontSize: '13px', color: C.blue, marginTop: '14px', fontWeight: 600 }}>
                  Explore Diffr →
                </p>
              </div>
            </Link>

          </div>
        </section>

        {/* Writing */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: C.text40, marginBottom: '28px',
          }}>
            Writing
          </h2>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '17px', lineHeight: 1.82, color: C.text60, marginBottom: '24px' }}>
            The Pathoragy Blog covers long-horizon life planning, the science of sustainable happiness, the hedonic treadmill, eudaimonia, and the frameworks behind intentional living. These articles represent the public-facing version of the research that feeds both the books and the products.
          </p>
          <Link href="/pathoragy/blog" style={{
            display: 'inline-block',
            color: C.accent,
            fontSize: '14px', fontWeight: 600,
            textDecoration: 'none',
            border: `1px solid ${C.accent}40`,
            padding: '10px 20px', borderRadius: '8px',
            background: `${C.accent}08`,
          }}>
            Read the Blog →
          </Link>
        </section>

        {/* Divider */}
        <div style={{ height: '1px', background: C.border, marginBottom: '40px' }} />

        {/* Honest note */}
        <section>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: 1.75, color: C.text40, fontStyle: 'italic' }}>
            I am a builder first and a writer second. The books are in progress because building the tools forced me to test the theory — and the theory keeps improving as a result. This is the order I'd recommend for anyone who wants to understand something: build it and see where the model breaks.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: '32px 24px', textAlign: 'center',
        color: C.text40, fontSize: '13px',
        backgroundColor: C.bg2,
      }}>
        <p>© 2026 Truake OPC · <Link href="/" style={{ color: C.text60, textDecoration: 'none' }}>truake.com</Link></p>
      </footer>
    </div>
  )
}
