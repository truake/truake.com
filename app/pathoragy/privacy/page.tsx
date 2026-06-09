import type { Metadata } from "next";
import { renderLegalMd } from "../legal/util";
import { LegalDoc } from "../legal/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy — Pathoragy",
  description:
    "How Pathoragy handles your data: local-first storage, bring-your-own-key AI, no trackers, no IDFA. Compliant with GDPR, CCPA, and China's PIPL.",
  alternates: { canonical: "https://truake.com/pathoragy/privacy" },
  openGraph: {
    title: "Pathoragy — Privacy Policy",
    description: "Local-first. No servers store your data. No trackers. Bring-your-own-key AI.",
    url: "https://truake.com/pathoragy/privacy",
  },
};

export default function PathoragyPrivacyPage() {
  const enHtml = renderLegalMd("pathoragy-privacy-en.md");
  const zhHtml = renderLegalMd("pathoragy-privacy-zh.md");
  return <LegalDoc enHtml={enHtml} zhHtml={zhHtml} active="en" />;
}
