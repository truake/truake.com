import Link from "next/link";
import Image from "next/image";

// Shared top nav for the entire /diffr/* domain (rendered once in layout.tsx).
// One logo, one nav, everywhere — no per-page nav drift.
const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-syne), sans-serif",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: "0.01em",
  color: "rgba(42,38,32,0.65)",
  textDecoration: "none",
};

export function DiffrNav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(240,235,227,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(42,38,32,0.10)",
      }}
      aria-label="Diffr navigation"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark — diffr-logo.png (correct-font logo, recolored to brand blue #1B8BF5) */}
        <Link href="/diffr" aria-label="Diffr home" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/diffr-logo.png"
            alt="Diffr"
            width={345}
            height={163}
            priority
            style={{ height: 30, width: "auto" }}
          />
        </Link>

        {/* Links + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 24 }}>
            <Link href="/diffr/start" style={linkStyle}>Guides</Link>
            <Link href="/diffr/blog" style={linkStyle}>Blog</Link>
            <Link href="/diffr/support" style={linkStyle}>Support</Link>
          </div>
          <a
            href="https://apps.apple.com/us/app/diffr/id6772870733"
            style={{
              background: "#1B8BF5",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: 100,
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
