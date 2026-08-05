import type { Metadata } from 'next'
import Link from 'next/link'
import { behindTheContractPilotPosts } from '../posts'
import { BEHIND_THE_CONTRACT_TOTAL_READY } from '../behind-the-contract-config'

const HUB_URL = 'https://truake.com/diffr/blog/behind-the-contract'

export const metadata: Metadata = {
  title: 'Behind the Contract — Diffr Blog',
  description:
    'Public health buyers look like monoliths on letterhead — but their capital equipment programmes are many brands across many TED contract awards. Verified procurement graphs with sources.',
  alternates: {
    canonical: HUB_URL,
  },
  openGraph: {
    title: 'Behind the Contract — Diffr',
    description:
      'Who supplies Europe\'s public hospitals and health agencies? Sourced TED award tables, slot by slot.',
    url: HUB_URL,
    images: [{ url: '/diffr-og.png', width: 1200, height: 630, alt: 'Diffr Behind the Contract' }],
  },
}

const HUB_FAQ = [
  {
    q: 'What is Behind the Contract?',
    a: 'Behind the Contract is a Diffr article series that maps public procurement buyers — hospitals, health agencies, universities — to the verified B2B suppliers behind their TED (and equivalent) contract awards. Every row includes a source URL and an original quote from the award notice.',
  },
  {
    q: 'How are Behind the Contract supplier links verified?',
    a: 'Each article is built from verified procurement relationships in the Diffr database — buyer, supplier, system slot, TED notice ID, source_url, and source_quote. Awards without a published public notice are not included.',
  },
  {
    q: 'What is the difference between Behind the Build and Behind the Contract?',
    a: 'Behind the Build maps famous venues to construction and systems suppliers. Behind the Contract maps public buyers to capital-equipment and services suppliers via TED contract awards. Same one-brand-per-slot logic and sourced graph — different procurement context.',
  },
  {
    q: 'Which buyers are covered in the pilot launch?',
    a: 'The pilot includes 20 European health procurement clusters — for example INGESA (Spain), UCK Warsaw, Servicio Cántabro de Salud, OSAKIDETZA, and Region Hovedstaden. Each article lists every verified award in that buyer cluster with TED links.',
  },
]

export default function BehindTheContractHubPage() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Behind the Contract',
    description: 'Verified TED procurement maps for public health buyers — one letterhead name, many contract awards on the record.',
    url: HUB_URL,
    isPartOf: {
      '@type': 'Blog',
      name: 'Diffr Blog',
      url: 'https://truake.com/diffr/blog',
    },
    hasPart: behindTheContractPilotPosts.map((post) => ({
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
        <p style={{ color: '#1d2088', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Behind the Contract
        </p>
        <h1 style={{
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '16px',
        }}>
          One buyer name. Many contract awards on the record.
        </h1>
        <p style={{ fontSize: '17px', lineHeight: 1.65, opacity: 0.85, marginBottom: '16px' }}>
          Each article maps a public procurement buyer to the verified B2B suppliers behind its TED (and equivalent) contract awards — medical imaging, HVAC, elevators, and more. Every row has a source URL and an original quote.
        </p>
        <p style={{ fontSize: '14px', lineHeight: 1.55, opacity: 0.75, marginBottom: '40px' }}>
          Pilot launch: <strong>{behindTheContractPilotPosts.length}</strong> health procurement clusters live now.
          {' '}{BEHIND_THE_CONTRACT_TOTAL_READY} total clusters generated — more rolling out on this hub.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {behindTheContractPilotPosts.map((post) => (
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
          <Link href="/diffr/blog/behind-the-build" style={{ color: '#1B8BF5', marginRight: '16px' }}>Behind the Build →</Link>
          <Link href="/diffr/blog" style={{ color: '#1B8BF5' }}>← All Diffr blog posts</Link>
        </p>
      </div>
    </div>
  )
}
