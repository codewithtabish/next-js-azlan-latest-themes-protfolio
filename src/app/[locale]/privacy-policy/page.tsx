"use client";

import PrivacyPolicyComp from "@/components/(privacy-policy)/privacy-policy-comp";
import BackButton from "@/constants/(translate)/back-comp";
import {
  allowedLocales,
  LocaleType,
  isUrduTypedLanguage,
  avalible_languages
} from "@/constants/language";

// Dynamic SEO metadata for Privacy Policy page (Next.js 15: params is a Promise)
export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Type-safe fallback
  const safeLocale: LocaleType = allowedLocales.includes(locale as LocaleType)
    ? (locale as LocaleType)
    : "en";

  return (
    <main className="w-full min-h-screen bg-background flex justify-center items-start overflow-x-hidden">
      <BackButton />
      <PrivacyPolicyComp lang={safeLocale} />
    </main>
  );
}
