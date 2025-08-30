"use client"

import { Card } from "@/components/ui/card"
import { skillContentArray } from "@/constants/(translate)/skill-content"
import { LocaleType, isUrduTypedLanguage } from "@/constants/language"
import { Android, FastAPI, MLNLP, Docker, AWS, Linux } from "../(logos)/logos"

const iconMap = {
  Android: <Android width={40} height={40} />,
  FastAPI: <FastAPI width={40} height={40} />,
  MLNLP: <MLNLP width={40} height={40} />,
  Docker: <Docker width={40} height={40} />,
  AWS: <AWS width={40} height={40} />,
  Linux: <Linux width={40} height={40} />,
}

type Props = {
  locale?: LocaleType
}

export default function SkillSection({ locale = "en" }: Props) {
  const section =
    skillContentArray.find((s) => s.code === locale) ||
    skillContentArray.find((s) => s.code === "en")!

  const isRtl = isUrduTypedLanguage(section.code)

  return (
    <section
      className="py-16 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 md:space-y-16">
        {/* Section Heading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg">{section.subtitle}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.skills.map((skill, idx) => (
            <Card key={idx} className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{iconMap[skill.icon as keyof typeof iconMap]}</div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
