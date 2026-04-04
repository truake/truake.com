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
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px', padding: '20px', transition: 'border-color 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(19,174,103,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
          >
            <p style={{ fontSize: '11px', color: 'rgba(232,232,232,0.4)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← Previous</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#e8e8e8', lineHeight: 1.4 }}>{prev.title}</p>
          </div>
        </Link>
      )}
      {next && (
        <Link href={`/diffr/blog/${next.slug}`} style={{ textDecoration: 'none', textAlign: 'right' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px', padding: '20px', transition: 'border-color 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(19,174,103,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
          >
            <p style={{ fontSize: '11px', color: 'rgba(232,232,232,0.4)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Next →</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#e8e8e8', lineHeight: 1.4 }}>{next.title}</p>
          </div>
        </Link>
      )}
    </nav>
  )
}
