import type { Metadata } from 'next'
import Link from 'next/link'
import { behindTheBuildPosts } from '../behind-the-build-posts'

export const metadata: Metadata = {
  title: 'Behind the Build — Diffr Blog',
  description: 'Famous venues are one brand on the marquee — many B2B suppliers behind each system slot. Verified supplier graphs with sources for GEO.',
  openGraph: {
    title: 'Behind the Build — Diffr',
    description: 'Who actually built the world\'s most famous venues? Sourced B2B supplier maps, slot by slot.',
    url: 'https://truake.com/diffr/blog/behind-the-build',
    images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr Behind the Build' }],
  },
}

export default function BehindTheBuildHubPage() {
  return (
    <div style={{ backgroundColor: '#F0EBE3', minHeight: '100vh', color: '#2A2620', padding: '64px 24px 96px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ color: '#e53e3e', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Behind the Build
        </p>
        <h1 style={{
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '16px',
        }}>
          One name on the marquee. Many brands behind the build.
        </h1>
        <p style={{ fontSize: '17px', lineHeight: 1.65, opacity: 0.85, marginBottom: '40px' }}>
          Each article maps a famous venue to the verified B2B suppliers behind its system slots — elevators, facade, HVAC, and more. Every row has a source URL and an original quote. No speculation.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {behindTheBuildPosts.map((post) => (
            <li key={post.slug} style={{ borderTop: '1px solid rgba(42,38,32,0.12)', paddingTop: '20px' }}>
              <Link href={`/diffr/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2 style={{
                  fontFamily: "var(--font-display), 'Playfair Display', serif",
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}>{post.title}</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.55, opacity: 0.8, margin: 0 }}>{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '48px', fontSize: '14px', opacity: 0.7 }}>
          <Link href="/diffr/blog" style={{ color: '#1B8BF5' }}>← All Diffr blog posts</Link>
        </p>
      </div>
    </div>
  )
}
