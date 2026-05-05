'use client'

import Link from 'next/link'
import type { BlogPost } from '../posts'

export function PostNavLinks({ prev, next }: { prev: BlogPost | null; next: BlogPost | null }) {
  return (
    <nav
      style={{
        display: 'flex', justifyContent: 'space-between', gap: '16px',
        marginTop: '64px', paddingTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {prev ? (
        <Link href={`/pathoragy/blog/${prev.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px', padding: '20px', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
          >
            <p style={{ color: 'rgba(232,232,232,0.35)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              ← Previous
            </p>
            <p style={{ color: '#e8e8e8', fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              {prev.title}
            </p>
          </div>
        </Link>
      ) : <div style={{ flex: 1 }} />}

      {next ? (
        <Link href={`/pathoragy/blog/${next.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px', padding: '20px', textAlign: 'right', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
          >
            <p style={{ color: 'rgba(232,232,232,0.35)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Next →
            </p>
            <p style={{ color: '#e8e8e8', fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              {next.title}
            </p>
          </div>
        </Link>
      ) : <div style={{ flex: 1 }} />}
    </nav>
  )
}
