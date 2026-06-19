import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from './posts'
import { BlogFeed } from './blog-feed'

export const metadata: Metadata = {
  title: 'Blog — Pathoragy',
  description: 'Long-horizon life planning, sustainable happiness, purpose, and intentional living — from the team behind Pathoragy.',
  openGraph: {
    title: 'Pathoragy Blog',
    description: 'Guides on long-horizon life planning, the hedonic treadmill, intentional living, and building a life of wealth, knowledge, and interest.',
    url: 'https://truake.com/pathoragy/blog',
    images: [{ url: 'https://truake.com/pathoragy-og.png', width: 1200, height: 630, alt: 'Pathoragy — live on purpose, not by default' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathoragy Blog',
    description: 'Guides on long-horizon life planning, the hedonic treadmill, intentional living, and building a life of wealth, knowledge, and interest.',
    images: ['https://truake.com/pathoragy-og.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://truake.com/pathoragy/blog/rss.xml',
    },
  },
}

const C = {
  bg:     '#F0EBE3',
  bg2:    '#F8F5F1',
  text:   '#2A2620',
  text60: 'rgba(42,38,32,0.60)',
  text40: 'rgba(42,38,32,0.40)',
  text25: 'rgba(42,38,32,0.25)',
  accent: '#E85435',
  border: 'rgba(42,38,32,0.08)',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div style={{ backgroundColor: C.bg, minHeight: '100vh', color: C.text }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(240,235,227,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Link href="/pathoragy" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: '18px', color: C.accent, letterSpacing: '-0.02em',
          }}>
            pathoragy
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/pathoragy/blog" style={{ color: C.text, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Blog</Link>
          <Link href="/pathoragy#beta" style={{
            background: C.accent, color: '#fff',
            padding: '8px 20px', borderRadius: '8px',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600,
          }}>
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        paddingTop: '120px', paddingBottom: '64px',
        textAlign: 'center', padding: '120px 24px 64px',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <p style={{
          color: C.accent, fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '16px',
        }}>
          The Pathoragy Blog
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(30px, 4.5vw, 54px)',
          fontWeight: 700, lineHeight: 1.1,
          letterSpacing: '-0.03em', color: C.text, marginBottom: '20px',
        }}>
          Plan the life<br />
          <span style={{ color: C.accent }}>you actually want.</span>
        </h1>
        <p style={{ color: C.text60, fontSize: '17px', maxWidth: '480px', margin: '0 auto' }}>
          Guides on long-horizon planning, sustainable happiness, purpose, and building wealth, knowledge, and interests that last.
        </p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 120px' }}>
        <BlogFeed posts={posts} />
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: '32px 24px', textAlign: 'center',
        color: C.text40, fontSize: '13px',
        backgroundColor: C.bg2,
      }}>
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>© 2026 Truake OPC · <Link href="/pathoragy" style={{ color: C.text60, textDecoration: 'none' }}>Pathoragy</Link> ·</span>
          <a href="/pathoragy/blog/rss.xml" title="Subscribe via RSS" style={{ color: C.text60, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.05 7.38 20 6.18 20 5 20 4 19.05 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 4.83a10.73 10.73 0 0 1 10.73 10.73H11.9A7.9 7.9 0 0 0 4 12.1z"/></svg>
            RSS
          </a>
        </p>
      </footer>
    </div>
  )
}
