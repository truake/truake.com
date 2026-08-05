import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono, Syne } from "next/font/google";
import { DiffrNav } from "./diffr-nav";

export const metadata: Metadata = {
  other: {
    "p:domain_verify": "d558a10299772fe6bb9f812a41e7d8b9",
  },
};

// Playfair + Syne are variable fonts on Google Fonts. Omitting `weight` loads
// the single variable file per style (covering the whole weight axis) instead
// of one static file per weight — Playfair drops from 12 static files to 2
// variable files, Syne from 5 to 1. The hero <h1> (Playfair 700) is the mobile
// LCP element, so a smaller, faster-arriving display font directly cuts LCP.
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// IBM Plex Mono is decorative (eyebrows / mono labels), never above-the-fold
// critical. preload:false keeps it from competing with the display + body
// fonts for early bandwidth on the hero.
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export default function DiffrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${ibmMono.variable} ${syne.variable}`}
      style={{ fontFamily: "var(--font-syne), sans-serif" }}
    >
      <DiffrNav />
      {children}
    </div>
  );
}
