'use client'

import Link from 'next/link'
import type { BlogPost } from '../posts'

export function PostNavLinks({ prev, next }: { prev: BlogPost | null; next: BlogPost | null }) {
  if (!prev && !next) return null
  return (
    <nav style={{
      marginTop: '48px',
      display: 'grid',
      gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
      gap: '16px',
    }}>
      {prev && (
        <Link href={`/diffr/blog/${prev.slug}`} style={{ textDecoration: 'none' }}>
          <div
            style={{
              background: '#F8F5F1', border: '1px solid rgba(42,38,32,0.10)',
              borderRadius: '10px', padding: '20px', transition: 'border-color 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(27,139,245,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(42,38,32,0.07)')}
          >
            <p style={{ fontSize: '11px', color: 'rgba(42,38,32,0.4)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← Previous</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#2A2620', lineHeight: 1.4 }}>{prev.title}</p>
          </div>
        </Link>
      )}
      {next && (
        <Link href={`/diffr/blog/${next.slug}`} style={{ textDecoration: 'none', textAlign: 'right' }}>
          <div
            style={{
              background: '#F8F5F1', border: '1px solid rgba(42,38,32,0.10)',
              borderRadius: '10px', padding: '20px', transition: 'border-color 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(27,139,245,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(42,38,32,0.07)')}
          >
            <p style={{ fontSize: '11px', color: 'rgba(42,38,32,0.4)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Next →</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#2A2620', lineHeight: 1.4 }}>{next.title}</p>
          </div>
        </Link>
      )}
    </nav>
  )
}
