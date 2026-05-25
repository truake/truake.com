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

  // Smart title: use "Short Title — Pathoragy" (≤60 chars) or just post.title
  const suffix = ' — Pathoragy'
  const colonIdx = post.title.indexOf(':')
  const shortBase = colonIdx > 0 ? post.title.slice(0, colonIdx) : post.title
  const seoTitle =
    (post.title + suffix).length <= 60 ? post.title + suffix
    : (shortBase + suffix).length <= 60 ? shortBase + suffix
    : post.title.length <= 60 ? post.title
    : post.title.slice(0, 57) + '...'

  return {
    title: seoTitle,
    description: post.description,
    alternates: {
      canonical: `https://truake.com/pathoragy/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://truake.com/pathoragy/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: 'https://truake.com/pathoragy-wordmark.png', width: 900, height: 200, alt: 'Pathoragy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
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

const categoryLabel: Record<string, string> = {
  'pillar':  'Pillar Guide',
  'science': 'The Science',
  'guide':   'Deep Dive',
}

const categoryColor: Record<string, string> = {
  'pillar':  '#4F8EF7',
  'science': '#B45309',
  'guide':   '#6D28D9',
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
    author: { '@type': 'Person', name: 'Rock Lam', url: 'https://truake.com/about' },
    publisher: { '@type': 'Organization', name: 'Truake', url: 'https://truake.com' },
    url: `https://truake.com/pathoragy/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  const faqJsonLd = post.faq && post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <div style={{ backgroundColor: C.bg, minHeight: '100vh', color: C.text }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
          <Link href="/pathoragy/blog" style={{ color: C.text60, textDecoration: 'none', fontSize: '14px' }}>
            ← All articles
          </Link>
          <Link href="/pathoragy#beta" style={{
            background: C.accent, color: '#fff',
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
              background: `${color}15`, color,
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: '100px',
              border: `1px solid ${color}30`,
            }}>
              {label}
            </span>
            <span style={{ color: C.text40, fontSize: '13px' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              {' · '}{post.readTime}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 700, lineHeight: 1.12,
            letterSpacing: '-0.03em', marginBottom: '20px',
            color: C.text,
          }}>
            {post.title}
          </h1>
          <p style={{ color: C.text60, fontSize: '18px', lineHeight: 1.65 }}>
            {post.description}
          </p>
          <div style={{ height: '1px', background: C.border, margin: '32px 0' }} />
          {/* Author byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: `${C.accent}18`,
              border: `1px solid ${C.accent}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: C.accent }}>R</span>
            </div>
            <div>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: C.text, display: 'block', lineHeight: 1.3 }}>
                  Rock Lam
                </span>
              </Link>
              <span style={{ fontSize: '12px', color: C.text40, lineHeight: 1.3 }}>
                Founder, Truake · Author of <em>The Value Boat</em>
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div
          className="pathoragy-prose"
          style={{ fontFamily: 'Georgia, serif', lineHeight: 1.82, fontSize: '17px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                color: C.text40, fontSize: '12px',
                background: 'rgba(42,38,32,0.05)', padding: '4px 12px', borderRadius: '100px',
                border: `1px solid ${C.border}`,
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '48px',
          background: 'rgba(232,84,53,0.06)',
          border: '1px solid rgba(232,84,53,0.18)',
          borderRadius: '16px', padding: '32px', textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', lineHeight: 1.65, marginBottom: '8px', color: C.text }}>
            <strong>Pathoragy</strong> turns long-horizon life goals into structured routes, waypoints, and daily evidence-backed tasks.
          </p>
          <p style={{ fontSize: '14px', color: C.text60, marginBottom: '24px' }}>
            iOS beta — limited spots available.
          </p>
          <Link href="/pathoragy#beta" style={{
            display: 'inline-block',
            background: C.accent, color: '#fff',
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
        borderTop: `1px solid ${C.border}`,
        padding: '32px 24px', textAlign: 'center',
        color: C.text40, fontSize: '13px',
        backgroundColor: C.bg2,
      }}>
        <p>© 2026 Truake OPC · <Link href="/pathoragy" style={{ color: C.text60, textDecoration: 'none' }}>Pathoragy</Link></p>
      </footer>
    </div>
  )
}
