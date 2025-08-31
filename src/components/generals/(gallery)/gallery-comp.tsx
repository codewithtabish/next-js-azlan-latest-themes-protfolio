'use client';

import galleryContent from '@/constants/(translate)/gallery-content';
import { allowedLocales, LocaleType, isUrduTypedLanguage } from '@/constants/language';
import { Badge } from '@/components/ui/badge';

type Props = {
  locale?: LocaleType;
};

export default function GalleryComp({ locale = 'en' }: Props) {
  const safeLocale: LocaleType = allowedLocales.includes(locale as LocaleType) ? locale as LocaleType : 'en';
//   @ts-ignore
  const { heading, subheading, desc } = galleryContent[safeLocale]?.section || galleryContent['en'].section;
  const isRTL = isUrduTypedLanguage(safeLocale);

  return (
    <section
      className={`
        w-full max-w-2xl mx-auto pt-32 px-4 text-center
        ${isRTL ? 'rtl text-right' : ''}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Badge
        variant="outline"
        className="mb-4 border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider"
      >
        {subheading}
      </Badge>
      <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
        {heading}
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground">
        {desc}
      </p>
    </section>
  );
}
