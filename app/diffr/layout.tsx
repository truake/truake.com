import { Playfair_Display, IBM_Plex_Mono, Syne } from "next/font/google";
import { DiffrNav } from "./diffr-nav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
