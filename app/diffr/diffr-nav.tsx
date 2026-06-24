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
          {/* Social */}
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 14 }}>
            {[
              { href: "https://x.com/Diffr_app", label: "Diffr on X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { href: "https://www.facebook.com/diffrapp", label: "Diffr on Facebook", path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
              { href: "https://www.tiktok.com/@diffr_app", label: "Diffr on TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
              { href: "https://www.reddit.com/user/Diffr_app/", label: "Diffr on Reddit", path: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="diffr-nav-social" style={{ display: "inline-flex" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
              </a>
            ))}
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
