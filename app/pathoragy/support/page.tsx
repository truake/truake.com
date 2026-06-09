import type { Metadata } from "next";
import { renderLegalMd } from "../legal/util";
import { LegalDoc } from "../legal/LegalDoc";

export const metadata: Metadata = {
  title: "Support — Pathoragy",
  description:
    "Get help with Pathoragy: AI setup (bring-your-own-key), photo verification, subscriptions, and data. Contact rocklam@truake.com.",
  alternates: { canonical: "https://truake.com/pathoragy/support" },
  openGraph: {
    title: "Pathoragy — Support",
    description: "Help with AI setup, subscriptions, and your data. Contact rocklam@truake.com.",
    url: "https://truake.com/pathoragy/support",
  },
};

export default function PathoragySupportPage() {
  const enHtml = renderLegalMd("pathoragy-support-en.md");
  const zhHtml = renderLegalMd("pathoragy-support-zh.md");
  return <LegalDoc enHtml={enHtml} zhHtml={zhHtml} active="en" />;
}
