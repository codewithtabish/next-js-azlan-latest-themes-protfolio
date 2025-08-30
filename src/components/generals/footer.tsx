"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import { isUrduTypedLanguage, LocaleType } from "@/constants/language";
import footerContent from "@/constants/(translate)/footer-content";
import FooterQr from "./footer-qr";
import ThemeToggleButton from "./theme-switcher";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/codewithtabish" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/codewithtabish" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/codewithtabish" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/codewithtabish" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/codewithtabish" },
  { icon: Mail, label: "Email", href: "mailto:hello@codewithtabish.com" },
];

type Props = {
  locale?: LocaleType;
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Footer({ locale = "en" }: Props) {
  // Fallback to English if locale not found
  // @ts-ignore
  const content = footerContent[locale] || footerContent.en;
  const isRtl = isUrduTypedLanguage(locale);

  // Group links
  const companyLinks = content.links.filter((link: any) =>
    ["/about", "/projects", "/blogs", "/privacy-policy", "/"].includes(link.href)
  );
  const supportLinks = content.links.filter((link: any) =>
    ["/contact", "/help", "/faq"].includes(link.href)
  );
  const waitlistLink = content.links.find((link: any) => link.href === "/waitlist");

  // Helper to prepend locale to internal links
  const withLocale = (href: string) => {
    if (isExternal(href)) return href;
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  // Section titles (from content or fallback)
  const companyTitle = content.companyTitle || {
    en: "Company", es: "Empresa", fr: "Entreprise", de: "Unternehmen", it: "Azienda", pt: "Empresa", ru: "Компания", ja: "会社", ko: "회사", ar: "الشركة", zh: "公司", hi: "कंपनी", bn: "কোম্পানি", pa: "ਕੰਪਨੀ", vi: "Công ty", id: "Perusahaan", tr: "Şirket", fa: "شرکت", ta: "நிறுவனம்", te: "కంపెనీ", mr: "कंपनी", ur: "کمپنی", sw: "Kampuni", th: "บริษัท", ms: "Syarikat", gu: "કંપની", kn: "ಕಂಪನಿ", ml: "കമ്പനി", or: "କମ୍ପାନୀ", si: "සමාගම", ps: "شرکت"
  }[locale] || "Company";

  const supportTitle = content.supportTitle || {
    en: "Support", es: "Soporte", fr: "Support", de: "Support", it: "Supporto", pt: "Suporte", ru: "Поддержка", ja: "サポート", ko: "지원", ar: "الدعم", zh: "支持", hi: "सहायता", bn: "সহায়তা", pa: "ਸਹਾਇਤਾ", vi: "Hỗ trợ", id: "Dukungan", tr: "Destek", fa: "پشتیبانی", ta: "ஆதரவு", te: "మద్దతు", mr: "सहाय्यता", ur: "سپورٹ", sw: "Msaada", th: "ช่วยเหลือ", ms: "Sokongan", gu: "મદદ", kn: "ಸಹಾಯ", ml: "സഹായം", or: "ସହଯୋଗ", si: "උදව්", ps: "ملاتړ"
  }[locale] || "Support";

  const waitlistTitle = content.waitlistTitle || {
    en: "Waitlist", es: "Lista de espera", fr: "Liste d'attente", de: "Warteliste", it: "Lista d'attesa", pt: "Lista de espera", ru: "Список ожидания", ja: "ウェイトリスト", ko: "대기자 명단", ar: "قائمة الانتظار", zh: "候补名单", hi: "वेटलिस्ट", bn: "ওয়েটলিস্ট", pa: "ਵੈਟਲਿਸਟ", vi: "Danh sách chờ", id: "Daftar Tunggu", tr: "Bekleme Listesi", fa: "لیست انتظار", ta: "வெயிட்லிஸ்ட்", te: "వెయిట్లిస్ట్", mr: "वेटलिस्ट", ur: "ویٹ لسٹ", sw: "Orodha ya Kusubiri", th: "รายชื่อรอ", ms: "Senarai Menunggu", gu: "વેઇટલિસ્ટ", kn: "ವೇಟ್ಲಿಸ್ಟ್", ml: "വെയ്റ്റ്‌ലിസ്റ്റ്", or: "ଅପେକ୍ଷା ତାଲିକା", si: "රැඳී සිටින ලැයිස්තුව", ps: "د انتظار لیست"
  }[locale] || "Waitlist";

  return (
    <footer
      className="mt-16 w-full rounded-t-xl border-t"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
          {/* Brand and description */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-2 text-primary">
              {/* <img
                src="/images/brand-logo.png"
                alt="logo"
                className="h-10 w-10 rounded-full"
              /> */}
              <span className="text-2xl font-semibold text-black dark:text-white">{content.brand}</span>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-black dark:text-white">
              {content.description}
            </p>
            <ul className="mt-8 flex justify-center gap-6 md:gap-8">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-primary transition hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">{companyTitle}</p>
            <ul className="space-y-4 text-sm">
              {companyLinks.map((link: any) => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href)}
                    className="text-black dark:text-white hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">{supportTitle}</p>
            <ul className="space-y-4 text-sm">
              {supportLinks.map((link: any) => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href)}
                    className="text-black dark:text-white hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Waitlist Link */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">{waitlistTitle}</p>
            <ul className="space-y-4 text-sm">
              {waitlistLink && (
                <li>
                  <Link
                    href={withLocale(waitlistLink.href)}
                    className="text-black dark:text-white hover:text-primary transition font-medium"
                  >
                    {waitlistLink.label}
                  </Link>
                </li>
              )}
            </ul>
            <FooterQr locale={locale} />
            <div className="flex justify-end mx-auto w-full">
          <ThemeToggleButton/>

            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-sm text-black dark:text-white">
              {content.copyright}
            </p>
            <p className="text-sm text-black/80 dark:text-white/80">
              Made with ❤️ by {content.brand}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
