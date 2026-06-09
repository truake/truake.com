"use client";

import { useState } from "react";
import Link from "next/link";

const C = {
  bg: "#F0EBE3",
  bg2: "#F8F5F1",
  text: "#2A2620",
  accent: "#E85435",
  t70: "rgba(42,38,32,0.72)",
  t50: "rgba(42,38,32,0.55)",
  bd: "rgba(42,38,32,0.12)",
};

// Bilingual legal/support document. Both languages are rendered into the HTML
// (SSR-complete) and toggled with CSS display, so the full text is always present
// for App Store review and search engines; the toggle just switches which shows.
export function LegalDoc({
  enHtml,
  zhHtml,
  active = "en",
}: {
  enHtml: string;
  zhHtml: string;
  active?: "en" | "zh";
}) {
  const [lang, setLang] = useState<"en" | "zh">(active);

  const tab = (l: "en" | "zh", label: string) => (
    <button
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      style={{
        appearance: "none",
        border: "none",
        background: lang === l ? C.accent : "transparent",
        color: lang === l ? "#fff" : C.t70,
        fontSize: "13px",
        fontWeight: 600,
        padding: "5px 14px",
        borderRadius: "100px",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(240,235,227,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${C.bd}`,
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/pathoragy"
            style={{
              fontFamily: "Georgia, 'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: C.text,
              textDecoration: "none",
            }}
          >
            Pathoragy
          </Link>
          <div style={{ display: "flex", gap: "4px", background: C.bg2, borderRadius: "100px", padding: "3px", border: `1px solid ${C.bd}` }}>
            {tab("en", "EN")}
            {tab("zh", "中文")}
          </div>
        </div>
      </header>

      {/* Document */}
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 96px" }}>
        <article
          className="legal-prose"
          style={{ display: lang === "en" ? "block" : "none" }}
          dangerouslySetInnerHTML={{ __html: enHtml }}
        />
        <article
          className="legal-prose"
          style={{ display: lang === "zh" ? "block" : "none" }}
          lang="zh-CN"
          dangerouslySetInnerHTML={{ __html: zhHtml }}
        />
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${C.bd}`, padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 24px",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "13px",
            color: C.t50,
          }}
        >
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/pathoragy/privacy" style={{ color: C.t70, textDecoration: "none" }}>Privacy</Link>
            <Link href="/pathoragy/terms" style={{ color: C.t70, textDecoration: "none" }}>Terms</Link>
            <Link href="/pathoragy/support" style={{ color: C.t70, textDecoration: "none" }}>Support</Link>
            <a href="mailto:rocklam@truake.com" style={{ color: C.t70, textDecoration: "none" }}>rocklam@truake.com</a>
          </div>
          <span>© 2026 truake LLC — operating Pathoragy</span>
        </div>
      </footer>
    </div>
  );
}
