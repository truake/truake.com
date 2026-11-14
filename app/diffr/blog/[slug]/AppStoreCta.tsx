'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

const APP_STORE_URL = 'https://apps.apple.com/us/app/diffr/id6772870733'

interface CtaCopy {
  id: 'A' | 'B' | 'C' | 'D'
  headline: string
  subcopy: string
  midHeadline: string
  midSubcopy: string
  buttonLabel: string
}

const CTA_VARIANTS: readonly CtaCopy[] = [
  {
    id: 'A',
    headline: 'Lock this pick. Never buy a duplicate again.',
    subcopy:
      'Build your one-brand-per-slot kit in Diffr — save the exact pieces you actually want, compare 47,000+ brands by durability & value, and skip impulse clutter. Free on iOS.',
    midHeadline: 'Lock this pick — never buy a duplicate again',
    midSubcopy:
      'Save your one-brand-per-slot kit and compare 47,000+ brands by durability & value in Diffr. Free on iOS.',
    buttonLabel: 'Get Diffr Free on the App Store',
  },
  {
    id: 'B',
    headline: 'Want to see how the rest of your kit scores?',
    subcopy:
      'Look up 47,000+ brands across durability, craft, and value — and keep one winning brand per slot in Diffr. Free on iOS.',
    midHeadline: 'See how the rest of your kit scores',
    midSubcopy:
      'Look up 47,000+ brands across durability, craft, and value — one winning brand per slot. Free on iOS.',
    buttonLabel: 'Check Scores in Diffr (iOS)',
  },
  {
    id: 'C',
    headline: 'Your anti-clutter wishlist, one brand per slot.',
    subcopy:
      'Ditch messy browser tabs and endless wishlists. Save one trusted pick per slot, track what you own, and upgrade only when it counts. Free on iOS.',
    midHeadline: 'Your anti-clutter wishlist — one brand per slot',
    midSubcopy:
      'Ditch messy browser tabs and endless wishlists. Save one trusted pick per slot in Diffr. Free on iOS.',
    buttonLabel: 'Build Your Kit in Diffr (iOS)',
  },
  {
    id: 'D',
    headline: 'Save these picks to your own starter kit.',
    subcopy:
      'Keep your curated picks organized by slot — not buried in screenshots or Notes — and compare 47,000+ brands side by side in Diffr. Free on iOS.',
    midHeadline: 'Save these picks to your own starter kit',
    midSubcopy:
      'Keep curated picks organized by slot — not buried in screenshots or Notes — in Diffr. Free on iOS.',
    buttonLabel: 'Save Kit in Diffr (iOS)',
  },
]

let sessionVariantIndex: number | null = null

function useRandomCtaVariant(): CtaCopy {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (sessionVariantIndex === null) {
      sessionVariantIndex = Math.floor(Math.random() * CTA_VARIANTS.length)
    }
    setIndex(sessionVariantIndex)
  }, [])

  return CTA_VARIANTS[index]
}

export function MidArticleAppStoreCta({ slug }: { slug: string }) {
  const copy = useRandomCtaVariant()

  return (
    <div
      style={{
        marginTop: '36px',
        padding: '20px 24px',
        background: 'rgba(255,255,255,0.55)',
        border: '1px solid rgba(42,38,32,0.10)',
        borderLeft: '4px solid #1B8BF5',
        borderRadius: '0 12px 12px 0',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <div style={{ flex: '1 1 260px' }}>
        <p
          style={{
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            color: '#2A2620',
            margin: '0 0 4px',
          }}
        >
          {copy.midHeadline}
        </p>
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '13.5px',
            lineHeight: 1.5,
            color: 'rgba(42,38,32,0.68)',
            margin: 0,
          }}
        >
          {copy.midSubcopy}
        </p>
      </div>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('app_store_click', { slug, placement: 'mid_article', variant: copy.id })}
        className="diffr-nav-cta"
        style={{
          display: 'inline-block',
          background: '#1B8BF5',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '100px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 700,
          fontFamily: "var(--font-syne), 'Syne', sans-serif",
          whiteSpace: 'nowrap',
        }}
      >
        Open in Diffr (iOS)
      </a>
    </div>
  )
}

export function BottomAppStoreCta({ slug }: { slug: string }) {
  const copy = useRandomCtaVariant()

  return (
    <div
      style={{
        marginTop: '48px',
        background: 'rgba(255,255,255,0.5)',
        border: '1px solid rgba(42,38,32,0.10)',
        borderTop: '3px solid #1B8BF5',
        borderRadius: '0 0 16px 16px',
        padding: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
      }}
    >
      <div style={{ flex: '1 1 320px', textAlign: 'left' }}>
        <p
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            margin: '0 0 10px',
            color: '#2A2620',
          }}
        >
          {copy.headline}
        </p>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            margin: '0 0 20px',
            color: 'rgba(42,38,32,0.68)',
          }}
        >
          {copy.subcopy}
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('app_store_click', { slug, placement: 'bottom_card', variant: copy.id })}
          className="diffr-nav-cta"
          style={{
            display: 'inline-block',
            background: '#1B8BF5',
            color: '#fff',
            padding: '13px 28px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
          }}
        >
          {copy.buttonLabel}
        </a>
      </div>

      {/* Desktop-only QR handoff for the ~52% desktop search audience */}
      <div
        className="hidden sm:flex"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '12px',
          background: '#FFFFFF',
          border: '1px solid rgba(42,38,32,0.08)',
          borderRadius: '12px',
          flexShrink: 0,
        }}
      >
        <img
          src="/diffr/app-store-qr.svg"
          alt="Scan with iPhone to download Diffr on the App Store"
          width={96}
          height={96}
          style={{ display: 'block', width: '96px', height: '96px' }}
        />
        <span
          style={{
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(42,38,32,0.60)',
          }}
        >
          Scan with iPhone
        </span>
      </div>
    </div>
  )
}
