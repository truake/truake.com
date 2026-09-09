'use client'

import { useEffect, useState } from 'react'

const APP_STORE =
  'https://apps.apple.com/us/app/diffr/id6772870733?utm_source=truake&utm_medium=sticky_dock&utm_campaign=app_cta'
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

export function AppDownloadDock() {
  const [ready, setReady] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dismissed, setDismissed] = useState(true)

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

  if (!ready || dismissed) return null

  return (
    <aside
      className={`diffr-app-dock${scrolled ? ' is-visible' : ''}`}
      aria-label="Download Diffr"
    >
      <div className="diffr-app-dock-inner">
        <div className="diffr-app-dock-copy">
          <p className="diffr-app-dock-kicker">iPhone app</p>
          <p className="diffr-app-dock-title">Open this kit in Diffr</p>
        </div>
        <div className="diffr-app-dock-actions">
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="diffr-app-dock-cta"
            data-cta="app-store-sticky-dock"
          >
            App Store
          </a>
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
