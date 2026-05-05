import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from './posts'
import { FeaturedCard, PostCard } from './post-card'

export const metadata: Metadata = {
  title: 'Blog — Pathoragy',
  description: 'Long-horizon life planning, sustainable happiness, purpose, and intentional living — from the team behind Pathoragy.',
  openGraph: {
    title: 'Pathoragy Blog',
    description: 'Guides on long-horizon life planning, the hedonic treadmill, intentional living, and building a life of wealth, knowledge, and interest.',
    url: 'https://truake.com/pathoragy/blog',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const pillarPosts = posts.filter(p => p.category === 'pillar')
  const otherPosts  = posts.filter(p => p.category !== 'pillar')

  return (
    <div style={{ backgroundColor: '#07090E', minHeight: '100vh', color: '#e8e8e8' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(7,9,14,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link href="/pathoragy" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: '18px', color: '#4F8EF7', letterSpacing: '-0.02em',
          }}>
            pathoragy
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/pathoragy/blog" style={{ color: '#e8e8e8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Blog</Link>
          <Link href="/pathoragy#beta" style={{
            background: '#4F8EF7', color: '#07090E',
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
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <p style={{
          color: '#4F8EF7', fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '16px',
        }}>
          The Pathoragy Blog
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(30px, 4.5vw, 54px)',
          fontWeight: 700, lineHeight: 1.1,
          letterSpacing: '-0.03em', color: '#ffffff', marginBottom: '20px',
        }}>
          Plan the life<br />
          <span style={{ color: '#4F8EF7' }}>you actually want.</span>
        </h1>
        <p style={{ color: 'rgba(232,232,232,0.5)', fontSize: '17px', maxWidth: '480px', margin: '0 auto' }}>
          Guides on long-horizon planning, sustainable happiness, purpose, and building wealth, knowledge, and interests that last.
        </p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 120px' }}>

        {/* Pillar Guides section */}
        {pillarPosts.length > 0 && (
          <section style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F8EF7',
              }}>
                Pillar Guides
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'rgba(79,142,247,0.15)' }} />
              <span style={{ fontSize: '12px', color: 'rgba(232,232,232,0.3)' }}>Comprehensive long-form resources</span>
            </div>
            {pillarPosts[0] && <FeaturedCard post={pillarPosts[0]} />}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {pillarPosts.slice(1).map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Deep Dives + Science */}
        {otherPosts.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,232,232,0.4)',
              }}>
                Deep Dives & Science
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {otherPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 24px', textAlign: 'center',
        color: 'rgba(232,232,232,0.3)', fontSize: '13px',
      }}>
        <p>© 2026 Truake OPC · <Link href="/pathoragy" style={{ color: 'rgba(232,232,232,0.45)', textDecoration: 'none' }}>Pathoragy</Link></p>
      </footer>
    </div>
  )
}
