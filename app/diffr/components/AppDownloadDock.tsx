'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { resolveDockContext } from './dock-context'

const DISMISS_KEY = 'diffr-app-dock-dismissed'
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000
const SHOW_AFTER_PX = 280

function wasDismissed(): boolean {
  try {
    const until = Number(localStorage.getItem(DISMISS_KEY) || 0)
    return until > Date.now()
  } catch {
    return false
  }
}

function qrSrc(url: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=128x128&margin=8&ecc=M&data=${encodeURIComponent(url)}`
}

export function AppDownloadDock() {
  const pathname = usePathname() || '/diffr'
  const ctx = resolveDockContext(pathname)
  const [ready, setReady] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dismissed, setDismissed] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setDismissed(wasDismissed())
    setReady(true)
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS))
    } catch {
      /* ignore */
    }
    setDismissed(true)
  }

  const copyKit = async () => {
    try {
      await navigator.clipboard.writeText(ctx.phoneUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* ignore */
    }
  }

  if (!ready || dismissed) return null

  const ctaClass = 'diffr-app-dock-cta'
  const cta = ctx.ctaExternal ? (
    <a
      href={ctx.ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className={ctaClass}
      data-cta={`app-store-sticky-dock-${ctx.mode}`}
    >
      {ctx.ctaLabel}
    </a>
  ) : (
    <Link href={ctx.ctaHref} className={ctaClass} data-cta={`open-kit-sticky-dock-${ctx.mode}`}>
      {ctx.ctaLabel}
    </Link>
  )

  return (
    <aside
      className={`diffr-app-dock${scrolled ? ' is-visible' : ''}`}
      aria-label={ctx.title}
    >
      <div className="diffr-app-dock-inner">
        <img
          className="diffr-app-dock-qr"
          src={qrSrc(ctx.phoneUrl)}
          width={64}
          height={64}
          alt=""
        />
        <div className="diffr-app-dock-copy">
          <p className="diffr-app-dock-kicker">{ctx.kicker}</p>
          <p className="diffr-app-dock-title">{ctx.title}</p>
          <button
            type="button"
            className="diffr-app-dock-copy-link"
            onClick={copyKit}
          >
            {copied ? 'Copied' : 'Copy link for iPhone'}
          </button>
        </div>
        <div className="diffr-app-dock-actions">
          {cta}
          <button
            type="button"
            className="diffr-app-dock-close"
            onClick={dismiss}
            aria-label="Dismiss download bar"
          >
            ×
          </button>
        </div>
      </div>
    </aside>
  )
}
