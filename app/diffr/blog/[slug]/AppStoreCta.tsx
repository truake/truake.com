'use client'

import { track } from '@vercel/analytics'

const APP_STORE_URL = 'https://apps.apple.com/us/app/diffr/id6772870733'

export function AppStoreButton({
  slug,
  placement,
  label = 'Get Diffr on the App Store',
  variant = 'primary',
}: {
  slug: string
  placement: 'mid_article' | 'bottom_card'
  label?: string
  variant?: 'primary' | 'compact'
}) {
  const handleClick = () => {
    track('app_store_click', { slug, placement })
  }

  if (variant === 'compact') {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
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
        {label}
      </a>
    )
  }

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="diffr-nav-cta"
      style={{
        display: 'inline-block',
        background: '#1B8BF5',
        color: '#fff',
        padding: '14px 32px',
        borderRadius: '100px',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 700,
        fontFamily: "var(--font-syne), 'Syne', sans-serif",
      }}
    >
      {label}
    </a>
  )
}
