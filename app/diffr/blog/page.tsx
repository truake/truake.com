import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from './posts'
import { FeaturedCard, PostCard } from './post-card'
import { CircleHero } from './circle-hero'

export const metadata: Metadata = {
  title: 'Blog — Diffr',
  description: 'Build logs, product thinking, and shopping psychology from the team building Diffr — a brand curation app based on the no-repeat principle.',
  openGraph: {
    title: 'Diffr Blog',
    description: 'Build logs and product thinking from the team behind Diffr.',
    url: 'https://truake.com/diffr/blog',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div style={{ backgroundColor: '#0A0A0F', minHeight: '100vh', color: '#e8e8e8' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link href="/diffr" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px', color: '#13ae67', letterSpacing: '-0.02em' }}>
            diffr
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/diffr/blog" style={{ color: '#e8e8e8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Blog</Link>
          <Link href="/diffr#waitlist" style={{
            background: '#13ae67', color: '#0A0A0F',
            padding: '8px 20px', borderRadius: '8px',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600,
          }}>
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Hero — circle grid */}
      <header style={{ position: 'relative', overflow: 'hidden', paddingTop: '64px' }}>
        {/* Circle canvas */}
        <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
          <CircleHero />
          {/* gradient fade to page bg */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,10,15,0.35) 0%, rgba(10,10,15,0.0) 30%, rgba(10,10,15,0.5) 75%, #0A0A0F 100%)',
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
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}>
              Build logs, product thinking,<br />
              <span style={{ color: '#13ae67' }}>and brand philosophy.</span>
            </h1>
          </div>
        </div>
        {/* subheading below circles */}
        <div style={{ textAlign: 'center', padding: '24px 24px 48px' }}>
          <p style={{ color: 'rgba(232,232,232,0.55)', fontSize: '17px', maxWidth: '460px', margin: '0 auto' }}>
            From the desk of a solo founder building a brand curation platform from scratch.
          </p>
        </div>
      </header>

      {/* Posts */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 120px' }}>
        {posts[0] && <FeaturedCard post={posts[0]} />}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {posts.slice(1).map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'rgba(232,232,232,0.35)',
        fontSize: '13px',
      }}>
        <p>© 2026 Truake OPC · <Link href="/diffr" style={{ color: 'rgba(232,232,232,0.5)', textDecoration: 'none' }}>Diffr</Link></p>
      </footer>
    </div>
  )
}
