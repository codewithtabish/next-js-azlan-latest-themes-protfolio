"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { feedbackContentArray } from "@/constants/(translate)/feedback-content"
import { LocaleType, isUrduTypedLanguage } from "@/constants/language"

type Props = {
  locale?: LocaleType
}

export default function FeedbackSection({ locale = "en" }: Props) {
  const section =
    feedbackContentArray.find((s) => s.code === locale) ||
    feedbackContentArray.find((s) => s.code === "en")!

  const isRtl = isUrduTypedLanguage(section.code)

  // Split testimonials into chunks -> left (1), right (2)
  const chunks: (typeof section.testimonials)[] = []
  for (let i = 0; i < section.testimonials.length; ) {
    if (i % 2 === 0) {
      chunks.push([section.testimonials[i]]) // left side single
      i += 1
    } else {
      chunks.push(section.testimonials.slice(i, i + 2)) // right side pair
      i += 2
    }
  }

  return (
    <section
      className="py-16 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        {/* Section Heading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">{section.title}</h2>
          <p>{section.subtitle}</p>
        </div>

        {/* Testimonials */}
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          {chunks.map((group, idx) => {
            const alignRight = idx % 2 === 1
            return (
              <div
                key={idx}
                className={`flex flex-col gap-8 ${
                  alignRight
                    ? "md:flex-row-reverse items-start text-right"
                    : "md:flex-row items-start text-left"
                }`}
              >
                {group.map((t, subIdx) => (
                  <div key={subIdx} className="flex flex-col md:flex-row gap-6 flex-1">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {t.image ? (
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-lg font-bold">
                          {t.name[0]}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      {idx === 0 && subIdx === 0 && (
                        <CardHeader className="bg-none shadow-none">
                          <Image
                            src="https://html.tailus.io/blocks/customers/openai.svg"
                            alt="OpenAI Logo"
                            width={120}
                            height={24}
                            className="dark:invert"
                          />
                        </CardHeader>
                      )}
                      <CardContent className="pt-6">
                        <blockquote className="flex flex-col gap-4">
                          <p className="text-lg font-medium leading-relaxed">
                            {t.feedback}
                          </p>
                          <div>
                            <a
                              href={t.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm font-medium hover:underline"
                            >
                              {t.name}
                            </a>
                            <span className="text-muted-foreground block text-sm">
                              {t.role}
                            </span>
                          </div>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
