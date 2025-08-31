"use client";

import PrivacyPolicyComp from "@/components/(privacy-policy)/privacy-policy-comp";
import { HoverBackground } from "@/components/ui/hover-background";
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
    <main className="w-full min-h-screen bg-background flex justify-center items-start overflow-hidden">
          <HoverBackground
        colors={{
          background: '',
          objects: [
    
  // Greens / Blues
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-teal-500/30',
  'bg-green-500/30',
  'bg-lime-500/30',
  'bg-cyan-500/30',
  'bg-blue-500/30',

  // Purples / Pinks
  'bg-indigo-500/30',
  'bg-violet-500/30',
  'bg-purple-500/30',
  'bg-fuchsia-500/30',
  'bg-pink-500/30',
  'bg-rose-500/30',

  // Warm Tones
  'bg-red-500/30',
  'bg-orange-500/30',
  'bg-amber-500/30',
  'bg-yellow-500/30',

  // Cool Neutrals
  'bg-slate-500/30',
  'bg-gray-500/30',
  'bg-zinc-500/30',
  'bg-neutral-500/30',
  'bg-stone-500/30',

  // Darker / Subtle Variants
  'bg-emerald-700/20',
  'bg-indigo-700/20',
  'bg-rose-700/20',
  'bg-slate-700/20',
  'bg-purple-700/20',
  'bg-cyan-700/20',
]
,
          
          glow: 'shadow-emerald-400/70',
        }}
        objectCount={12}
      >

      <BackButton />
      <PrivacyPolicyComp lang={safeLocale} />
      </HoverBackground>
    </main>
  );
}
