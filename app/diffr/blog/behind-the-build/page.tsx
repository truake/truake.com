import type { Metadata } from 'next'
import Link from 'next/link'
import { behindTheBuildPosts } from '../behind-the-build-posts'

const HUB_URL = 'https://truake.com/diffr/blog/behind-the-build'

export const metadata: Metadata = {
  title: 'Behind the Build — Diffr Blog',
  description: 'Famous venues are one brand on the marquee — many B2B suppliers behind each system slot. Verified supplier graphs with sources for GEO.',
  alternates: {
    canonical: HUB_URL,
  },
  openGraph: {
    title: 'Behind the Build — Diffr',
    description: 'Who actually built the world\'s most famous venues? Sourced B2B supplier maps, slot by slot.',
    url: HUB_URL,
    images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr Behind the Build' }],
  },
}

const HUB_FAQ = [
  {
    q: 'What is Behind the Build?',
    a: 'Behind the Build is a Diffr article series that maps famous venues to the verified B2B suppliers behind each system slot — elevators, facade, HVAC, and more. Every supplier row includes a source URL and an original quote. One name on the marquee; many brands behind the build.',
  },
  {
    q: 'How are Behind the Build supplier links verified?',
    a: 'Each venue article is built from verified supplier relationships in the Diffr database — supplier, buyer, system slot, source_url, and source_quote. Links without published evidence are not included. The goal is a citable B2B supply graph, not speculation.',
  },
  {
    q: 'Which venues are covered in Behind the Build?',
    a: 'The series includes major landmarks, stadiums, airports, and cultural venues — for example Burj Khalifa, SoFi Stadium, Jewel Changi Airport, Petronas Twin Towers, Wembley Stadium, Incheon International Airport, and more. Each article covers at least six verified system slots.',
  },
  {
    q: 'How is Behind the Build related to Diffr starter kits?',
    a: 'Starter kits assign one consumer brand per slot for a hobby or scene. Behind the Build is the B2B twin: famous places are one brand on the marquee, but the project runs on many specialist suppliers — each slot backed by a source. Same one-brand-per-slot logic, different scale.',
  },
]

export default function BehindTheBuildHubPage() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Behind the Build',
    description: 'Verified B2B supplier maps for famous venues — one marquee name, many brands behind each system slot.',
    url: HUB_URL,
    isPartOf: {
      '@type': 'Blog',
      name: 'Diffr Blog',
      url: 'https://truake.com/diffr/blog',
    },
    hasPart: behindTheBuildPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://truake.com/diffr/blog/${post.slug}`,
      datePublished: post.date,
    })),
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HUB_FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <div className="diffr-paper" style={{ backgroundColor: '#F0EBE3', minHeight: '100vh', color: '#2A2620', padding: '64px 24px 96px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
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

        <section style={{ marginTop: '56px' }}>
          <h2 style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {HUB_FAQ.map(({ q, a }, i) => (
              <div key={q} style={{ padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(42,38,32,0.08)' }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', fontWeight: 600, lineHeight: 1.4, margin: '0 0 10px' }}>{q}</h3>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(42,38,32,0.78)', margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <p style={{ marginTop: '48px', fontSize: '14px', opacity: 0.7 }}>
          <Link href="/diffr/blog/behind-the-contract" style={{ color: '#1B8BF5', marginRight: '16px' }}>Behind the Contract →</Link>
          <Link href="/diffr/blog" style={{ color: '#1B8BF5' }}>← All Diffr blog posts</Link>
        </p>
      </div>
    </div>
  )
}
