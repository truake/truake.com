import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getPostBySlug } from '../posts'
import { PostNavLinks } from './nav-links'
import { getSceneBrandKit } from '../../start/lib'
import SceneBrandKit from '../../start/SceneBrandKit'
import { BLOG_FAQ, BLOG_TLDR } from '../brand-guide-content'
import { BEHIND_THE_BUILD_FAQ, BEHIND_THE_BUILD_TLDR } from '../behind-the-build-posts'
import { BEHIND_THE_CONTRACT_FAQ, BEHIND_THE_CONTRACT_TLDR } from '../behind-the-contract-posts'
import { hasDynamicOgCard, OG_BASE_SLUGS } from '../og-base'
import { bakedOgUrl } from '../static-og'
import {
  buildSupplierItemListLd,
  parseBehindTheBuildTable,
  parseBehindTheContractTable,
} from '../b2b-table-schema'
import { BLOG_SLUG_TO_START } from '../../blog-slug-maps'

interface Props {
  params: Promise<{ slug: string }>
}

// Brand-guide blog posts whose live shoppable kit comes from a preset_scenario.
// The editorial prose stays; the DB block (brands + images + affiliate buy
// links) renders from v_slot_pool — the same data the App reads.
export const BLOG_SLUG_TO_PRESET: Record<string, number> = {
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
  // Toy Team campaign (TS5 tie-in) — dev built preset_scenarios 99-108. Mapped
  // by brand roster to the already-published post slugs (the post slugs differ
  // from dev's working names; rosters matched exactly). Most toy logos/images
  // are still NULL → kit cards render brand name + 'pending' placeholder until
  // images backfill; editorial prose is unaffected.
  'toy-team-heirloom-box': 99,
  'toy-team-builders-box': 100,
  'toy-team-saturday-morning-box': 101,
  'toy-team-backyard-box': 102,
  'toy-team-learn-and-go-box': 103,
  'toy-team-quiet-afternoon-box': 104,
  'toy-team-rainy-day-box': 105,
  'toy-team-throwback-box': 106,
  'toy-team-bedtime-box': 107,
  'toy-team-birthday-box': 108,
  'luxury-investment-brand-guide': 110,
  'quiet-luxury-edc-brand-guide': 113,
  'travel-essentials-brand-guide': 114,
  'poolside-essentials-brand-guide': 120,
  'daily-essentials-brand-guide': 121,
  'creative-desk-edc-brand-guide': 122,
  'girl-essentials-brand-guide': 123,
  'whats-in-my-bag-brand-guide': 112,
  'on-your-feet-all-day-work-brand-guide': 124,
  'just-bring-the-essentials-brand-guide': 125,
  // Lines explained — brand-map posts (presets 115–119; kit renders when DB wired)
  'nike-lines-explained': 115,
  'lululemon-lines-explained': 116,
  'adidas-lines-explained': 117,
  'uniqlo-lines-explained': 118,
  'apple-ecosystem-lines-explained': 119,
  'patagonia-lines-explained': 126,
  'some-mens-essentials-brand-guide': 127,
  'mens-travel-essentials-brand-guide': 128,
  'never-overpack-again-brand-guide': 129,
  'tech-travel-edc-brand-guide': 130,
  'luxury-travel-tech-desk-brand-guide': 131,
  'pack-my-hermes-backpack-brand-guide': 132,
  'do-not-disturb-brand-guide': 133,
  'gray-edc-knoll-brand-guide': 134,
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  // Toy Team campaign posts get the playful "mixed toy box" card; everything
  // else uses the editorial Diffr card.
  // Posts with a hook cover use the photo as the share image; the rest fall
  // back to the generic Diffr card.
  const hasCover = slug === 'mixed-toy-box' || slug.startsWith('toy-team-')
  // Posts with a live slot kit get a dynamic, layered share card (slot product
  // tiles over the hook cover / default base) — see ./og/route.tsx. Falls back to
  // the static cover/default for kit-less posts.
  const isBrandGuide = slug.endsWith('-brand-guide')
  const hasKit = slug in BLOG_SLUG_TO_PRESET || hasDynamicOgCard(slug) || isBrandGuide
  const baked = bakedOgUrl(slug)
  const ogImage = baked
    ?? (hasKit
      ? `https://truake.com/diffr/blog/${slug}/og`
      : hasCover ? `/toy-covers/${slug}.jpg` : '/diffr-og.png')
  const ogAlt = hasKit ? `${post.title} — pick your slot, decide once — Diffr`
    : hasCover ? `${post.title} — Diffr` : 'Diffr — curated beginner brand guides'
  const ogW = hasKit ? 1200 : hasCover ? 1600 : 1200
  const ogH = hasKit ? 630 : hasCover ? 840 : 630
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
      images: [{ url: ogImage, width: ogW, height: ogH, alt: ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [{ url: ogImage, width: ogW, height: ogH, alt: ogAlt }],
    },
    alternates: {
      canonical: `https://truake.com/diffr/blog/${post.slug}`,
    },
  }
}

const categoryLabel: Record<string, string> = {
  'build-log': 'Build Log',
  'strategy': 'Strategy',
  'product': 'Product',
  'announcement': 'Announcement',
}

const categoryColor: Record<string, string> = {
  'build-log': '#1B8BF5',
  'strategy': '#1d2088',
  'product': '#F0522C',
  'announcement': '#1A8F4C',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Hook cover photo (toy-team campaign, og-base brand guides).
  const coverImage = (slug === 'mixed-toy-box' || slug.startsWith('toy-team-'))
    ? `/toy-covers/${slug}.jpg`
    : OG_BASE_SLUGS.has(slug)
      ? `/og-base/${slug}.jpg`
      : null

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
  const faq = BLOG_FAQ[slug] ?? BEHIND_THE_BUILD_FAQ[slug] ?? BEHIND_THE_CONTRACT_FAQ[slug] ?? null
  const tldr = BLOG_TLDR[slug] ?? BEHIND_THE_BUILD_TLDR[slug] ?? BEHIND_THE_CONTRACT_TLDR[slug] ?? null

  const supplierRows = slug.startsWith('behind-the-build-')
    ? parseBehindTheBuildTable(post.content)
    : slug.startsWith('behind-the-contract-')
      ? parseBehindTheContractTable(post.content)
      : []

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

  const supplierItemListLd =
    !brandKit && supplierRows.length > 0
      ? buildSupplierItemListLd(`${post.title} — verified suppliers`, supplierRows)
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
    <div className="diffr-paper" style={{ backgroundColor: '#F0EBE3', minHeight: '100vh', color: '#2A2620' }}>
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
      {supplierItemListLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(supplierItemListLd) }}
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
      <article className="diffr-article-rise" style={{ maxWidth: '720px', margin: '0 auto', padding: '100px 24px 80px' }}>
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
          <p style={{
            fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            color: 'rgba(42,38,32,0.62)', fontSize: '19px', lineHeight: 1.6,
          }}>
            {post.description}
          </p>
          {coverImage && (
            <div style={{ marginTop: '28px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(42,38,32,0.08)' }}>
              <Image
                src={coverImage}
                alt={post.title}
                width={1600}
                height={840}
                priority
                sizes="(max-width: 760px) 100vw, 720px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}
          {/* double hairline rule — the editorial fold between header and body */}
          <div style={{ borderTop: '2px solid rgba(42,38,32,0.55)', borderBottom: '1px solid rgba(42,38,32,0.18)', height: '4px', margin: '34px 0' }} />
        </header>

        {/* TL;DR — answer-first summary (GEO/AEO). Mirrors BlogPosting.abstract. */}
        {tldr && (
          <div style={{
            marginBottom: '40px',
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid rgba(42,38,32,0.10)',
            borderLeft: '4px solid #1B8BF5',
            borderRadius: '0 12px 12px 0',
            padding: '20px 24px',
          }}>
            <p style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
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
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                    fontSize: '17px', fontWeight: 700, lineHeight: 1.4,
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
                <Link key={g.slug} href={`/diffr/blog/${g.slug}`} className="diffr-series-card" style={{
                  display: 'block', textDecoration: 'none',
                  background: '#F8F5F1', border: '1px solid rgba(42,38,32,0.10)',
                  borderRadius: '12px', padding: '16px 18px',
                }}>
                  <p style={{
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                    fontSize: '15px', fontWeight: 600, lineHeight: 1.35,
                    color: '#1B8BF5', margin: 0,
                  }}>
                    {g.title} <span className="diffr-series-arrow">→</span>
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
          background: 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(42,38,32,0.10)',
          borderTop: '3px solid #1B8BF5',
          borderRadius: '0 0 16px 16px',
          padding: '36px 32px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
            fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em',
            lineHeight: 1.3, margin: '0 0 10px', color: '#2A2620',
          }}>
            One good brand per slot.<br />Every slot assigned.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.6, margin: '0 auto 22px', color: 'rgba(42,38,32,0.68)', maxWidth: '440px' }}>
            Diffr is a brand curation app built on the no-repeat principle. It is live on the App Store.
          </p>
          <a href="https://apps.apple.com/us/app/diffr/id6772870733" className="diffr-nav-cta" style={{
            display: 'inline-block',
            background: '#1B8BF5', color: '#fff',
            padding: '14px 32px', borderRadius: '100px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
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
