'use client'

import { useEffect, useRef } from 'react'

export function CircleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height

    // Seeded RNG — deterministic
    let seed = 2026
    function rand() {
      seed = (seed * 1664525 + 1013904223) & 0xffffffff
      return (seed >>> 0) / 4294967296
    }

    ctx.clearRect(0, 0, W, H)

    const blues = [
      '#0f2a68', '#1a3a8a', '#1d4ed8', '#1e40af',
      '#163172', '#1c389a', '#1e3a8a', '#102876',
      '#1b3a8c', '#203080', '#152e7a', '#0d2461',
    ]

    const COLS = 8, ROWS = 4
    const cW = W / COLS
    const cH = H / ROWS
    // Red dot: col 6, row 1 (0-indexed) — right side, visible zone
    const RED_C = 6, RED_R = 1

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const jx = (rand() - 0.5) * cW * 0.18
        const jy = (rand() - 0.5) * cH * 0.18
        const cx = cW * (c + 0.5) + jx
        const cy = cH * (r + 0.5) + jy
        const radius = cW * 0.36 + (rand() - 0.5) * cW * 0.06

        if (c === RED_C && r === RED_R) {
          ctx.shadowColor = 'rgba(229,62,62,0.9)'
          ctx.shadowBlur = 56
          ctx.fillStyle = '#e53e3e'
          ctx.globalAlpha = 1
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = blues[Math.floor(rand() * blues.length)]
          ctx.globalAlpha = 0.72
        }
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    ctx.shadowBlur = 0
    ctx.globalAlpha = 1
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={320}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
      }}
    />
  )
}
