import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../posts'
import { PostNavLinks } from './nav-links'
import { getSceneBrandKit } from '../../start/lib'
import SceneBrandKit from '../../start/SceneBrandKit'
import { BLOG_FAQ, BLOG_TLDR } from '../brand-guide-content'

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
  'hiking-gear-brand-guide': 27,
  'yoga-gear-brand-guide': 24,
  'pc-gaming-gear-brand-guide': 19,
  'backpacking-gear-brand-guide': 25,
  'skincare-brand-guide': 10,
  'makeup-brand-guide': 12,
  // Apparel scenes — re-enabled after dev re-curated the slot pools (2026-06-18):
  // type fixes (Casual Jacket / Necktie / Wool Scarf), brand de-pollution
  // (Ansonia Clock→Fossil, dead watch brand→Timex, Patagonia dup→TNF,
  // Canada Goose→Columbia), and the crop-tank base-layer fixed (→Uniqlo
  // HEATTECH). Verified slot-by-slot, no gender/category contamination.
  'casual-wardrobe-brand-guide': 28,
  'work-wardrobe-brand-guide': 29,
  'winter-layering-brand-guide': 30,
}

// Each brand-guide post has a live, interactive twin at /diffr/start/<slug>
// (the App-funnel page reading the same v_slot_pool). Linking blog → scene
// clusters the topic and funnels SEO readers toward conversion.
const BLOG_SLUG_TO_START: Record<string, string> = {
  'bike-commuting-gear-brand-guide': 'cycling-commute',
  'running-gear-brand-guide': 'running-starter-kit',
  'home-gym-brand-guide': 'home-gym-essentials',
  'home-coffee-brand-guide': 'home-coffee',
  'home-office-brand-guide': 'home-office',
  'steak-dinner-brand-guide': 'cooking-basics',
  'hiking-gear-brand-guide': 'hiking',
  'yoga-gear-brand-guide': 'yoga-mindfulness',
  'pc-gaming-gear-brand-guide': 'home-gaming',
  'backpacking-gear-brand-guide': 'backpacking-basecamp',
  'skincare-brand-guide': 'skincare',
  'makeup-brand-guide': 'make-up-starter-kit',
  'casual-wardrobe-brand-guide': 'everyday-casual-look',
  'work-wardrobe-brand-guide': 'workwear-essentials',
  'winter-layering-brand-guide': 'cold-weather-layering',
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
      images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr — curated beginner brand guides' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/diffr-og.png'],
    },
  }
}

const categoryLabel: Record<string, string> = {
  'build-log': 'Build Log',
  'strategy': 'Strategy',
  'product': 'Product',
}

const categoryColor: Record<string, string> = {
  'build-log': '#1B8BF5',
  'strategy': '#1d2088',
  'product': '#F0522C',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  // Brand-guide cluster: cross-link the brand guides to each other so Google
  // reads them as one topical cluster and authority flows between them.
  const isBrandGuide = slug.endsWith('-brand-guide')
  const relatedGuides = isBrandGuide
    ? allPosts.filter((p) => p.slug.endsWith('-brand-guide') && p.slug !== slug).slice(0, 6)
    : []

  // Live shoppable kit for brand-guide posts (DB-driven + affiliate).
  const presetId = BLOG_SLUG_TO_PRESET[slug]
  const brandKit = presetId ? await getSceneBrandKit(presetId) : null
  const startSlug = BLOG_SLUG_TO_START[slug] ?? null
  const faq = BLOG_FAQ[slug] ?? null
  const tldr = BLOG_TLDR[slug] ?? null

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
    ...(tldr ? { abstract: tldr } : {}),
  }

  // ItemList of the DB-driven brand picks — a flat "summary list" of names (+image),
  // structured and AI-citable. Deliberately NOT nested Product items: Google's
  // Product-snippet rich result requires offers/review/aggregateRating, which we
  // have no honest data for pre-PA-API — so typed Products only generate
  // "invalid item" errors in Search Console (seen on winter-layering, 8 items).
  // Brand + product-type live in the visible page content and the kit UI.
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
            // Flagship product line is a clean name (usually already includes the brand).
            name: s.productLine || s.brandName,
            ...(s.status === 'ready' && s.imageUrl ? { image: s.imageUrl } : {}),
          })),
        }
      : null

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Diffr', item: 'https://truake.com/diffr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://truake.com/diffr/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://truake.com/diffr/blog/${post.slug}` },
    ],
  }

  // FAQPage — mirrors the visible FAQ section below. Strong AEO/GEO signal
  // (AI engines parse FAQPage directly) and still valid structured data.
  const faqLd = faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  return (
    <div style={{ backgroundColor: '#F0EBE3', minHeight: '100vh', color: '#2A2620' }}>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}


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
            <span style={{ color: 'rgba(42,38,32,0.4)', fontSize: '13px' }}>
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
          <p style={{ color: 'rgba(42,38,32,0.6)', fontSize: '18px', lineHeight: 1.6 }}>
            {post.description}
          </p>
          <div style={{ height: '1px', background: 'rgba(42,38,32,0.08)', margin: '32px 0' }} />
        </header>

        {/* TL;DR — answer-first summary (GEO/AEO). Mirrors BlogPosting.abstract. */}
        {tldr && (
          <div style={{
            marginBottom: '40px',
            background: 'rgba(27,139,245,0.07)',
            border: '1px solid rgba(27,139,245,0.22)',
            borderRadius: '12px',
            padding: '20px 24px',
          }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#1B8BF5', margin: '0 0 10px',
            }}>
              TL;DR
            </p>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px', lineHeight: 1.7,
              color: 'rgba(42,38,32,0.88)', margin: 0,
            }}>
              {tldr}
            </p>
          </div>
        )}

        {/* Body */}
        <div
          className="blog-prose"
          style={{ fontFamily: 'Georgia, serif', lineHeight: 1.8, fontSize: '17px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Live shoppable kit — DB-driven brand picks + affiliate buy links.
            Renders on the now-light page (matches /diffr/start). */}
        {brandKit && brandKit.slots.length > 0 && (
          <div style={{
            marginTop: '48px',
          }}>
            <SceneBrandKit kit={brandKit} />
            {startSlug && (
              <div style={{
                marginTop: '4px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(42,38,32,0.10)',
              }}>
                <Link href={`/diffr/start/${startSlug}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#1B8BF5', textDecoration: 'none',
                  fontSize: '15px', fontWeight: 700,
                }}>
                  See the interactive {brandKit.name} starter guide on Diffr →
                </Link>
                <p style={{ fontSize: '13px', color: 'rgba(42,38,32,0.55)', margin: '6px 0 0', lineHeight: 1.5 }}>
                  Swap any slot, compare picks side by side, and build your own no-repeat kit.
                </p>
              </div>
            )}
          </div>
        )}

        {/* FAQ — visible content mirrored by the FAQPage JSON-LD above */}
        {faq && (
          <section style={{ marginTop: '48px' }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700, letterSpacing: '-0.02em',
              color: '#2A2620', margin: '0 0 24px',
            }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {faq.map((item, i) => (
                <div key={i} style={{
                  padding: '20px 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(42,38,32,0.08)',
                }}>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '17px', fontWeight: 600, lineHeight: 1.4,
                    color: '#2A2620', margin: '0 0 10px',
                  }}>
                    {item.q}
                  </h3>
                  <p style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '16px', lineHeight: 1.7,
                    color: 'rgba(42,38,32,0.78)', margin: 0,
                  }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related brand guides — cross-link the cluster */}
        {relatedGuides.length > 0 && (
          <section style={{ marginTop: '48px' }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 700, letterSpacing: '-0.02em',
              color: '#2A2620', margin: '0 0 18px',
            }}>
              More beginner brand guides
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
              {relatedGuides.map((g) => (
                <Link key={g.slug} href={`/diffr/blog/${g.slug}`} style={{
                  display: 'block', textDecoration: 'none',
                  background: '#F8F5F1', border: '1px solid rgba(42,38,32,0.10)',
                  borderRadius: '12px', padding: '16px 18px',
                }}>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '15px', fontWeight: 600, lineHeight: 1.35,
                    color: '#1B8BF5', margin: 0,
                  }}>
                    {g.title} →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(42,38,32,0.08)' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                color: 'rgba(42,38,32,0.45)', fontSize: '12px',
                background: 'rgba(42,38,32,0.05)', padding: '4px 12px', borderRadius: '100px',
                border: '1px solid rgba(42,38,32,0.08)',
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '48px',
          background: 'rgba(27,139,245,0.08)',
          border: '1px solid rgba(27,139,245,0.2)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', color: 'rgba(42,38,32,0.8)' }}>
            Diffr is a brand curation app built on the no-repeat principle — one good brand per slot, every slot assigned. It is live on the App Store.
          </p>
          <a href="https://apps.apple.com/us/app/diffr/id6772870733" style={{
            display: 'inline-block',
            background: '#1B8BF5', color: '#fff',
            padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
          }}>
            Get Diffr on the App Store
          </a>
        </div>

        <PostNavLinks prev={prevPost} next={nextPost} />
      </article>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(42,38,32,0.06)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'rgba(42,38,32,0.35)',
        fontSize: '13px',
      }}>
        <p>© 2026 Truake OPC · <Link href="/diffr" style={{ color: 'rgba(42,38,32,0.5)', textDecoration: 'none' }}>Diffr</Link></p>
      </footer>
    </div>
  )
}
