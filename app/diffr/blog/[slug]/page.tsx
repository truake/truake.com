import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../posts'
import { PostNavLinks } from './nav-links'
import { getSceneBrandKit } from '../../start/lib'
import SceneBrandKit from '../../start/SceneBrandKit'

interface Props {
  params: Promise<{ slug: string }>
}

// Brand-guide blog posts whose live shoppable kit comes from a preset_scenario.
// The editorial prose stays; the DB block (brands + images + affiliate buy
// links) renders from v_slot_pool — the same data the App reads.
const BLOG_SLUG_TO_PRESET: Record<string, number> = {
  'bike-commuting-gear-brand-guide': 98,
  'running-gear-brand-guide': 23,
  'home-gym-brand-guide': 22,
  'home-coffee-brand-guide': 3,
  'home-office-brand-guide': 15,
  'steak-dinner-brand-guide': 1,
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Diffr Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://truake.com/diffr/blog/${post.slug}`,
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
  'build-log': 'Build Log',
  'strategy': 'Strategy',
  'product': 'Product',
}

const categoryColor: Record<string, string> = {
  'build-log': '#13ae67',
  'strategy': '#1d2088',
  'product': '#7c6af7',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  // Live shoppable kit for brand-guide posts (DB-driven + affiliate).
  const presetId = BLOG_SLUG_TO_PRESET[slug]
  const brandKit = presetId ? await getSceneBrandKit(presetId) : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Rock Lam', url: 'https://truake.com' },
    publisher: { '@type': 'Organization', name: 'Truake', url: 'https://truake.com' },
    url: `https://truake.com/diffr/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  // ItemList of the DB-driven brand picks — structured, AI-citable, content-aligned.
  // Each item is a Product (name/brand/category/image). No offers/ratings (no
  // real price or reviews pre-PA-API) — honest schema, no spam.
  const itemListLd =
    brandKit && brandKit.slots.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: `${brandKit.name} — Diffr's beginner brand picks`,
          numberOfItems: brandKit.slots.length,
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          itemListElement: brandKit.slots.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              // Flagship product line is a clean name (usually already includes
              // the brand); brand is carried separately below.
              name: s.productLine || s.brandName,
              brand: { '@type': 'Brand', name: s.brandName },
              category: s.productTypeName,
              ...(s.status === 'ready' && s.imageUrl ? { image: s.imageUrl } : {}),
            },
          })),
        }
      : null

  return (
    <div style={{ backgroundColor: '#0A0A0F', minHeight: '100vh', color: '#e8e8e8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {itemListLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      )}

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(10,10,15,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link href="/diffr" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "var(--font-display), 'Playfair Display', serif", fontWeight: 700, fontSize: '18px', color: '#13ae67', letterSpacing: '-0.02em', fontStyle: 'italic' }}>
            diffr
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/diffr/blog" style={{ color: 'rgba(232,232,232,0.7)', textDecoration: 'none', fontSize: '14px' }}>← All posts</Link>
          <Link href="/diffr#waitlist" style={{
            background: '#13ae67', color: '#0A0A0F',
            padding: '8px 20px', borderRadius: '8px',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600,
          }}>
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '100px 24px 80px' }}>
        {/* Meta */}
        <header style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{
              background: `${categoryColor[post.category]}22`,
              color: categoryColor[post.category],
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: '100px',
              border: `1px solid ${categoryColor[post.category]}44`,
            }}>
              {categoryLabel[post.category]}
            </span>
            <span style={{ color: 'rgba(232,232,232,0.4)', fontSize: '13px' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              {' · '}{post.readTime}
            </span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            {post.title}
          </h1>
          <p style={{ color: 'rgba(232,232,232,0.6)', fontSize: '18px', lineHeight: 1.6 }}>
            {post.description}
          </p>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />
        </header>

        {/* Body */}
        <div
          className="blog-prose"
          style={{ fontFamily: 'Georgia, serif', lineHeight: 1.8, fontSize: '17px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Live shoppable kit — DB-driven brand picks + affiliate buy links.
            Wrapped in a light panel so the light-themed kit reads on the dark blog. */}
        {brandKit && brandKit.slots.length > 0 && (
          <div style={{
            marginTop: '48px',
            background: '#F0EBE3',
            borderRadius: '16px',
            padding: '28px 28px 8px',
          }}>
            <SceneBrandKit kit={brandKit} />
          </div>
        )}

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
          background: 'rgba(19,174,103,0.08)',
          border: '1px solid rgba(19,174,103,0.2)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', color: 'rgba(232,232,232,0.8)' }}>
            Diffr is building a brand curation platform based on the no-repeat principle. Early access is limited.
          </p>
          <Link href="/diffr#waitlist" style={{
            display: 'inline-block',
            background: '#13ae67', color: '#0A0A0F',
            padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
          }}>
            Join the Waitlist
          </Link>
        </div>

        <PostNavLinks prev={prevPost} next={nextPost} />
      </article>

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
