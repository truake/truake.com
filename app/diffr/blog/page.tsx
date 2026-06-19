import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from './posts'
import { BlogFeed } from './blog-feed'
import { CircleHero } from './circle-hero'

export const metadata: Metadata = {
  title: 'Blog — Diffr',
  description: 'Build logs, product thinking, and shopping psychology from the team building Diffr — a brand curation app based on the no-repeat principle.',
  openGraph: {
    title: 'Diffr Blog',
    description: 'Build logs and product thinking from the team behind Diffr.',
    url: 'https://truake.com/diffr/blog',
    images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr — curated beginner brand guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diffr Blog',
    description: 'Build logs and product thinking from the team behind Diffr.',
    images: ['/diffr-og.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://truake.com/diffr/blog/rss.xml',
    },
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div style={{ backgroundColor: '#F0EBE3', minHeight: '100vh', color: '#2A2620' }}>

      {/* Hero — circle grid */}
      <header style={{ position: 'relative', overflow: 'hidden', paddingTop: '64px' }}>
        {/* Circle canvas */}
        <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
          <CircleHero />
          {/* parchment scrim: radial spotlight behind the centred text (legibility)
              + bottom fade into the page. Circles stay visible at the edges. */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 72% at 50% 47%, rgba(240,235,227,0.94) 0%, rgba(240,235,227,0.6) 40%, rgba(240,235,227,0) 78%), linear-gradient(to bottom, rgba(240,235,227,0.0) 0%, rgba(240,235,227,0.0) 55%, rgba(240,235,227,0.6) 82%, #F0EBE3 100%)',
          }} />
          {/* centred label over circles */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '0 24px',
          }}>
            <p style={{ color: '#e53e3e', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '12px' }}>
              The Diffr Blog
            </p>
            <h1 style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#2A2620',
            }}>
              Build logs, product thinking,<br />
              <span style={{ color: '#1B8BF5' }}>and brand philosophy.</span>
            </h1>
          </div>
        </div>
        {/* subheading below circles */}
        <div style={{ textAlign: 'center', padding: '24px 24px 48px' }}>
          <p style={{ color: 'rgba(42,38,32,0.55)', fontSize: '17px', maxWidth: '460px', margin: '0 auto' }}>
            From the desk of a solo founder building a brand curation platform from scratch.
          </p>
        </div>
      </header>

      {/* Posts */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 120px' }}>
        <BlogFeed posts={posts} />
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(42,38,32,0.06)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'rgba(42,38,32,0.35)',
        fontSize: '13px',
      }}>
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>© 2026 Truake OPC · <Link href="/diffr" style={{ color: 'rgba(42,38,32,0.5)', textDecoration: 'none' }}>Diffr</Link> ·</span>
          <a href="/diffr/blog/rss.xml" title="Subscribe via RSS" style={{ color: 'rgba(42,38,32,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.05 7.38 20 6.18 20 5 20 4 19.05 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 4.83a10.73 10.73 0 0 1 10.73 10.73H11.9A7.9 7.9 0 0 0 4 12.1z"/></svg>
            RSS
          </a>
        </p>
      </footer>
    </div>
  )
}
