"use client";

import { brandNamesAllLanguages } from "@/constants/(translate)/logo-name";
import { LocaleType, isUrduTypedLanguage } from "@/constants/language";

type BrandLogoTitleProps = {
  locale?: LocaleType;
};

export default function BrandLogoTitle({ locale = "en" }: BrandLogoTitleProps) {
  // Pick correct value based on locale, fallback to English
  const brand =
    brandNamesAllLanguages.find((b: any) => b.code === locale) ||
    brandNamesAllLanguages.find((b: any) => b.code === "en")!;

  const isRtl = isUrduTypedLanguage(locale);

  return (
    <div
      className="flex"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "center",
      }}
    >
      <h1
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-3xl
          font-extrabold 
          bg-gradient-to-r from-primary via-primary/70 to-primary 
          bg-clip-text text-transparent tracking-tight
          drop-shadow-sm hover:drop-shadow-lg transition duration-300
        "
      >
        {brand.value}
      </h1>
    </div>
  );
}
