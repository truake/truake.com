import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://truake.com"),
  title: {
    default: "Truake — One Person. Full Company.",
    template: "%s | Truake",
  },
  description:
    "Truake is a one-person company by Rock Lam, building AI-powered products for intentional living. Creator of Diffr — the curated brand guide that ends choice overload.",
  keywords: [
    "Truake",
    "OPC",
    "one person company",
    "Rock Lam",
    "Diffr",
    "curated shopping",
    "brand guide",
    "AI shopping",
    "intentional consumption",
    "diff-structism",
  ],
  authors: [{ name: "Rock Lam", url: "https://truake.com" }],
  creator: "Rock Lam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truake.com",
    siteName: "Truake",
    title: "Truake — One Person. Full Company.",
    description:
      "One-person company building AI-powered products for intentional living. Creator of Diffr — the curated brand guide that ends choice overload.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Truake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truake — One Person. Full Company.",
    description:
      "One-person company building AI-powered products for intentional living.",
    images: ["/og-image.png"],
    creator: "@truake",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "58b5e42909320c25ac1703a79ecef5d5558bfb351354958e8c96a5273f0f96cf",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <head>
        {/* Ahrefs Analytics — rendered server-side so crawler can detect it */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="iJhSPjNuKSL7w6tdS9OKKw"
          async={true}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Truake",
              url: "https://truake.com",
              logo: "https://truake.com/truake-logo.png",
              description:
                "One-person company building AI-powered products for intentional living.",
              founder: {
                "@type": "Person",
                name: "Rock Lam",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full" style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
