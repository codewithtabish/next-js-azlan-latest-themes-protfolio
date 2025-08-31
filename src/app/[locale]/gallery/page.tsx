import GalleryComp from '@/components/generals/(gallery)/gallery-comp';
import { GalleryGrid } from '@/components/generals/(hallery)/gallery-comp';
import { allowedLocales, LocaleType } from '@/constants/language';
import React from 'react';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: LocaleType = allowedLocales.includes(locale as LocaleType)
    ? (locale as LocaleType)
    : 'en';

  return (
    <div>
      <GalleryComp locale={safeLocale} />
      <GalleryGrid />
    </div>
  );
}
