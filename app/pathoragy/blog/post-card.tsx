'use client'

import Link from 'next/link'
import type { BlogPost } from './posts'

const categoryLabel: Record<string, string> = {
  'pillar':  'Pillar Guide',
  'science': 'The Science',
  'guide':   'Deep Dive',
}

const categoryColor: Record<string, string> = {
  'pillar':  '#4F8EF7',
  'science': '#B45309',
  'guide':   '#6D28D9',
}

const C = {
  text:   '#2A2620',
  text60: 'rgba(42,38,32,0.60)',
  text40: 'rgba(42,38,32,0.40)',
  text25: 'rgba(42,38,32,0.25)',
  border: 'rgba(42,38,32,0.08)',
}

export function FeaturedCard({ post }: { post: BlogPost }) {
  const color = categoryColor[post.category] ?? '#4F8EF7'
  const label = categoryLabel[post.category] ?? post.category
  return (
    <Link href={`/pathoragy/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '40px' }}>
      <article
        style={{
          background: '#FFFFFF',
          border: `1px solid ${C.border}`,
          borderRadius: '16px', padding: '40px',
          boxShadow: '0 2px 12px rgba(42,38,32,0.06)',
          transition: 'box-shadow 0.2s, border-color 0.2s', cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}55`
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(42,38,32,0.10)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = C.border
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(42,38,32,0.06)'
        }}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{
            background: `${color}15`, color,
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '100px', border: `1px solid ${color}30`,
          }}>
            {label}
          </span>
          <span style={{ color: C.text40, fontSize: '13px' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}{post.readTime}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, lineHeight: 1.2,
          letterSpacing: '-0.02em', color: C.text, marginBottom: '16px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: C.text60, fontSize: '16px', lineHeight: 1.7, marginBottom: '24px', maxWidth: '680px' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{
              color: C.text40, fontSize: '12px',
              background: 'rgba(42,38,32,0.05)', padding: '4px 10px', borderRadius: '100px',
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}

export function PostCard({ post }: { post: BlogPost }) {
  const color = categoryColor[post.category] ?? '#4F8EF7'
  const label = categoryLabel[post.category] ?? post.category
  return (
    <Link href={`/pathoragy/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          background: '#FFFFFF', border: `1px solid ${C.border}`,
          borderRadius: '12px', padding: '28px', height: '100%',
          boxShadow: '0 1px 6px rgba(42,38,32,0.05)',
          transition: 'box-shadow 0.2s, border-color 0.2s', cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}44`
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,38,32,0.09)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = C.border
          e.currentTarget.style.boxShadow = '0 1px 6px rgba(42,38,32,0.05)'
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{
            background: `${color}15`, color,
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '3px 8px', borderRadius: '100px', border: `1px solid ${color}30`,
          }}>
            {label}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '18px', fontWeight: 700, lineHeight: 1.3,
          letterSpacing: '-0.02em', color: C.text, marginBottom: '12px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: C.text60, fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          {post.excerpt}
        </p>
        <p style={{ color: C.text25, fontSize: '12px' }}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          {' · '}{post.readTime}
        </p>
      </article>
    </Link>
  )
}
