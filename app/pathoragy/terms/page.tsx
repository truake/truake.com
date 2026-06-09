import type { Metadata } from "next";
import { renderLegalMd } from "../legal/util";
import { LegalDoc } from "../legal/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service — Pathoragy",
  description:
    "The agreement for using Pathoragy: license, subscriptions (Apple ID auto-renewable), AI-content disclaimer, and governing law.",
  alternates: { canonical: "https://truake.com/pathoragy/terms" },
  openGraph: {
    title: "Pathoragy — Terms of Service",
    description: "License, subscriptions, AI disclaimer, and governing law for Pathoragy.",
    url: "https://truake.com/pathoragy/terms",
  },
};

export default function PathoragyTermsPage() {
  const enHtml = renderLegalMd("pathoragy-terms-en.md");
  const zhHtml = renderLegalMd("pathoragy-terms-zh.md");
  return <LegalDoc enHtml={enHtml} zhHtml={zhHtml} active="en" />;
}
