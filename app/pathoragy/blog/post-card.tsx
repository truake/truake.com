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
  'science': '#F59E0B',
  'guide':   '#7C3AED',
}

export function FeaturedCard({ post }: { post: BlogPost }) {
  const color = categoryColor[post.category] ?? '#4F8EF7'
  const label = categoryLabel[post.category] ?? post.category
  return (
    <Link href={`/pathoragy/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '40px' }}>
      <article
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '40px',
          transition: 'border-color 0.2s', cursor: 'pointer',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}55`)}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{
            background: `${color}22`, color,
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '100px', border: `1px solid ${color}44`,
          }}>
            {label}
          </span>
          <span style={{ color: 'rgba(232,232,232,0.4)', fontSize: '13px' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}{post.readTime}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, lineHeight: 1.2,
          letterSpacing: '-0.02em', color: '#e8e8e8', marginBottom: '16px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: 'rgba(232,232,232,0.6)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px', maxWidth: '680px' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{
              color: 'rgba(232,232,232,0.4)', fontSize: '12px',
              background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '100px',
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
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px', padding: '28px', height: '100%',
          transition: 'border-color 0.2s, background 0.2s', cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}44`
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{
            background: `${color}22`, color,
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '3px 8px', borderRadius: '100px', border: `1px solid ${color}44`,
          }}>
            {label}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '18px', fontWeight: 700, lineHeight: 1.3,
          letterSpacing: '-0.02em', color: '#e8e8e8', marginBottom: '12px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: 'rgba(232,232,232,0.55)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          {post.excerpt}
        </p>
        <p style={{ color: 'rgba(232,232,232,0.35)', fontSize: '12px' }}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          {' · '}{post.readTime}
        </p>
      </article>
    </Link>
  )
}
