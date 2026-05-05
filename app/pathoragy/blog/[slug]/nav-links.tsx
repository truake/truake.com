'use client'

import Link from 'next/link'
import type { BlogPost } from '../posts'

const C = {
  text:   '#2A2620',
  text40: 'rgba(42,38,32,0.40)',
  border: 'rgba(42,38,32,0.08)',
  accent: '#E85435',
}

export function PostNavLinks({ prev, next }: { prev: BlogPost | null; next: BlogPost | null }) {
  return (
    <nav
      style={{
        display: 'flex', justifyContent: 'space-between', gap: '16px',
        marginTop: '64px', paddingTop: '32px',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      {prev ? (
        <Link href={`/pathoragy/blog/${prev.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
          <div style={{
            background: '#FFFFFF', border: `1px solid ${C.border}`,
            borderRadius: '12px', padding: '20px',
            boxShadow: '0 1px 6px rgba(42,38,32,0.05)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(232,84,53,0.30)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(42,38,32,0.09)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = C.border
              e.currentTarget.style.boxShadow = '0 1px 6px rgba(42,38,32,0.05)'
            }}
          >
            <p style={{ color: C.text40, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              ← Previous
            </p>
            <p style={{ color: C.text, fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              {prev.title}
            </p>
          </div>
        </Link>
      ) : <div style={{ flex: 1 }} />}

      {next ? (
        <Link href={`/pathoragy/blog/${next.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
          <div style={{
            background: '#FFFFFF', border: `1px solid ${C.border}`,
            borderRadius: '12px', padding: '20px', textAlign: 'right',
            boxShadow: '0 1px 6px rgba(42,38,32,0.05)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(232,84,53,0.30)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(42,38,32,0.09)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = C.border
              e.currentTarget.style.boxShadow = '0 1px 6px rgba(42,38,32,0.05)'
            }}
          >
            <p style={{ color: C.text40, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Next →
            </p>
            <p style={{ color: C.text, fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              {next.title}
            </p>
          </div>
        </Link>
      ) : <div style={{ flex: 1 }} />}
    </nav>
  )
}
