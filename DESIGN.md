# Truake — Design System

## Color Palette

### Truake (truake.com)
| Token | Value | Use |
|---|---|---|
| `--truake-bg` | `#ECEDE0` | Page background (warm sage-grey) |
| `--truake-text` | `#2A2620` | Primary text |
| `--truake-text-secondary` | `#6B6560` | Secondary / muted text |
| `--truake-accent-green` | `#9DC870` | Primary accent (italic em) |
| `--truake-accent-blue` | `#A8C4D8` | Secondary accent / CTA bg |
| `--truake-border` | `rgba(42,38,32,0.10)` | Dividers |

### Diffr (truake.com/diffr)
| Token | Value | Use |
|---|---|---|
| `--d-bg` | `#F0EBE3` | Page background (warm parchment) |
| `--d-bg2` | `#F8F5F1` | Section alternate bg |
| `--d-text` | `#2A2620` | Primary text |
| `--d-blue` | `#1B8BF5` | Primary brand accent |
| `--d-orange` | `#F0522C` | Secondary accent |

### Pathoragy (truake.com/pathoragy)
| Token | Value | Use |
|---|---|---|
| `--p-bg` | `#F0EBE3` | Page background |
| `--p-bg-dark` | `#1C1208` | Dark sections |
| `--p-text` | `#2A2620` | Primary text |
| `--p-accent` | `#E85435` | Primary accent (orange-red) |

## Typography

### Font Stacks
| Variable | Font | Use |
|---|---|---|
| `--font-cormorant` | Cormorant Garamond | Truake display headings |
| `--font-fraunces` | Fraunces | Pathoragy editorial (loaded, use for pull quotes) |
| `--font-display` | Playfair Display | Diffr display headings |
| `--font-syne` | Syne | Labels, eyebrows, nav (all pages) |
| `--font-mono` | IBM Plex Mono | Data, code, monospace |

### Scale Rules
- Hero/display heading max: **≤ 96px (6rem)**. Above this reads as shouting.
- Display letter-spacing min: **≥ -0.04em**. Tighter = letters touching.
- Body text max line length: **65–75ch**
- Use `text-wrap: balance` on h1–h3
- No all-caps body copy

## Spacing
- Section vertical padding: 80px (mobile) → 128–160px (desktop)
- Max content width: 1200px (diffr/pathoragy), 1280px (truake.com)
- Horizontal page padding: 24px (mobile) → 32–40px (desktop)

## Motion
- Duration: 200–300ms for micro-interactions, 480–700ms for reveals
- Ease: `cubic-bezier(0.34,1.56,0.64,1)` for spring-lift (buttons, cards)
- Ease: `cubic-bezier(0.22,1,0.36,1)` for fade-up reveals
- Always: `@media (prefers-reduced-motion: reduce)` fallback
- Button `:active`: `transform: scale(0.96); transition-duration: 80ms`
- Card hover: `translateY(-4px)` + shadow. Never `brightness()`.
- Transition specificity: Always name exact properties. Never `transition: all`.

## Component Rules
- **Buttons**: `transition: transform, opacity` (specific). `:hover` scale or opacity. `:active` scale(0.96).
- **Cards**: Hover = `translateY(-4px) + box-shadow`. Never `brightness` filter for hover state.
- **Nav links**: `transition: color 150ms ease` or `transition: opacity 150ms ease`.
- **No nested cards.**

## Known Issues (to fix)
- truake.com H1: `clamp(52px, 8.5vw, 112px)` — max exceeds 96px ceiling → fix to `clamp(48px, 7vw, 92px)`
- pathoragy beta H2: `clamp(52px, 8vw, 108px)` — max exceeds 96px ceiling → fix to `clamp(48px, 6.5vw, 88px)`
- pathoragy hero H1 letter-spacing: `-0.045em` is below the -0.04em floor → fix to `-0.040em`
- diffr hero H1: `clamp(48px, 8.5vw, 104px)` — max 104px > 96px ceiling → fix to `clamp(48px, 7.5vw, 96px)`
- truake.com product cards: `brightness-105` hover is weak → replace with `translateY + shadow`
- truake.com CTAs: missing `:active` scale state
- All pages: `transition: all` in some places → replace with specific properties
