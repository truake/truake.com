import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../posts'
import { PostNavLinks } from './nav-links'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Pathoragy`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://truake.com/pathoragy/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

const categoryLabel: Record<string, string> = {
  'pillar':  'Pillar Guide',
  'science': 'The Science',
  'guide':   'Deep Dive',
}

const categoryColor: Record<string, string> = {
  'pillar':  '#4F8EF7',
  'science': '#F59E0B',
  'guide':   '#7C3AED',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  const color = categoryColor[post.category] ?? '#4F8EF7'
  const label = categoryLabel[post.category] ?? post.category

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Rock Lam', url: 'https://truake.com' },
    publisher: { '@type': 'Organization', name: 'Truake', url: 'https://truake.com' },
    url: `https://truake.com/pathoragy/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  return (
    <div style={{ backgroundColor: '#07090E', minHeight: '100vh', color: '#e8e8e8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(7,9,14,0.92)',
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
          <Link href="/pathoragy/blog" style={{ color: 'rgba(232,232,232,0.7)', textDecoration: 'none', fontSize: '14px' }}>
            ← All articles
          </Link>
          <Link href="/pathoragy#beta" style={{
            background: '#4F8EF7', color: '#07090E',
            padding: '8px 20px', borderRadius: '8px',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600,
          }}>
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: '740px', margin: '0 auto', padding: '100px 24px 80px' }}>
        {/* Meta */}
        <header style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{
              background: `${color}22`, color,
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: '100px',
              border: `1px solid ${color}44`,
            }}>
              {label}
            </span>
            <span style={{ color: 'rgba(232,232,232,0.4)', fontSize: '13px' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              {' · '}{post.readTime}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 700, lineHeight: 1.12,
            letterSpacing: '-0.03em', marginBottom: '20px',
          }}>
            {post.title}
          </h1>
          <p style={{ color: 'rgba(232,232,232,0.6)', fontSize: '18px', lineHeight: 1.65 }}>
            {post.description}
          </p>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />
        </header>

        {/* Body */}
        <div
          className="blog-prose"
          style={{ fontFamily: 'Georgia, serif', lineHeight: 1.82, fontSize: '17px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                color: 'rgba(232,232,232,0.45)', fontSize: '12px',
                background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '48px',
          background: 'rgba(79,142,247,0.07)',
          border: '1px solid rgba(79,142,247,0.18)',
          borderRadius: '16px', padding: '32px', textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', lineHeight: 1.65, marginBottom: '8px', color: 'rgba(232,232,232,0.85)' }}>
            <strong>Pathoragy</strong> turns long-horizon life goals into structured routes, waypoints, and daily evidence-backed tasks.
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(232,232,232,0.5)', marginBottom: '24px' }}>
            iOS beta — limited spots available.
          </p>
          <Link href="/pathoragy#beta" style={{
            display: 'inline-block',
            background: '#4F8EF7', color: '#07090E',
            padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
          }}>
            Request Beta Access →
          </Link>
        </div>

        <PostNavLinks prev={prevPost} next={nextPost} />
      </article>

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
