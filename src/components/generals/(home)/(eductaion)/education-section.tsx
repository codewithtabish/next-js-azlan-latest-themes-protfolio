"use client";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

import { educationSectionsContentArray } from "@/constants/(translate)/education-content";
import { LocaleType, isUrduTypedLanguage } from "@/constants/language";

type EducationSectionProps = {
  locale?: LocaleType;
};

// Localized "Visit Website" labels
const VISIT_WEBSITE_LABELS: Record<LocaleType, string> = {
  en: "Visit Website →",
  es: "Visitar sitio web →",
  fr: "Visiter le site →",
  de: "Webseite besuchen →",
  it: "Visita il sito →",
  pt: "Visitar site →",
  ru: "Посетить сайт →",
  ja: "ウェブサイトを見る →",
  ko: "웹사이트 방문 →",
  ar: "زيارة الموقع →",
  zh: "访问网站 →",
  hi: "वेबसाइट देखें →",
  bn: "ওয়েবসাইট দেখুন →",
  pa: "ਵੈਬਸਾਈਟ ਵੇਖੋ →",
  vi: "Truy cập trang web →",
  id: "Kunjungi situs →",
  tr: "Web sitesini ziyaret et →",
  fa: "مشاهده وبسایت →",
  ta: "இணையதளத்திற்குச் செல்லவும் →",
  te: "వెబ్‌సైట్ చూడండి →",
  mr: "वेबसाइट पहा →",
  ur: "ویب سائٹ دیکھیں →",
  sw: "Tembelea tovuti →",
  th: "เยี่ยมชมเว็บไซต์ →",
  ms: "Lawati laman web →",
  gu: "વેબસાઇટ જુઓ →",
  kn: "ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ →",
  ml: "വെബ്സൈറ്റ് സന്ദർശിക്കുക →",
  or: "ୱେବସାଇଟ୍ ଦେଖନ୍ତୁ →",
  si: "වෙබ් අඩවිය බලන්න →",
  ps: "ویب پاڼه وګورئ →",
};

export default function EducationSection({ locale = "en" }: EducationSectionProps) {
  // Pick relevant content
  const section =
    educationSectionsContentArray.find((s) => s.code === locale) ||
    educationSectionsContentArray.find((s) => s.code === "en")!;

  const isRtl = isUrduTypedLanguage(section.code);

  return (
    <section
      className="w-full flex justify-center items-center py-16"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{section.title}</h2>
          <p className="mt-2 text-muted-foreground">{section.subtitle}</p>
        </div>

        {/* Timeline */}
        <Timeline className="flex justify-center items-start">
          {section.entries.map((entry, idx) => (
            <TimelineItem
              key={idx}
              step={idx + 0}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32 mx-auto w-full"
            >
              <TimelineHeader>
                <TimelineSeparator />

                {/* Date (only endDate like you asked) */}
                <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-32 group-data-[orientation=vertical]/timeline:sm:text-right text-sm font-medium text-muted-foreground">
                  {/* {entry.endDate} */}
                </TimelineDate>

                {/* Institution */}
                <TimelineTitle className="sm:-mt-0.5 text-lg font-semibold">
                  {entry.institution}
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>

              {/* Content */}
              <TimelineContent>
                <p className="font-medium text-primary">{entry.qualification}</p>
                <p className="text-muted-foreground mt-1">{entry.description}</p>
                {entry.website && (
                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-blue-500 hover:underline"
                  >
                    {VISIT_WEBSITE_LABELS[section.code] || VISIT_WEBSITE_LABELS["en"]}
                  </a>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
