"use client";

import React from "react";
import { aboutMessages } from "@/constants/(translate)/hero-about";
import ReactMarkdown from "react-markdown";
import { isUrduTypedLanguage } from "@/constants/language"; // Assuming you have this utility

interface HeroAboutSectionProps {
  locale: string;
}

const HeroAboutSection: React.FC<HeroAboutSectionProps> = ({ locale }) => {
  // Find the about message for the current locale, fallback to English
  const message =
    aboutMessages.find((m) => m.code === locale) ||
    aboutMessages.find((m) => m.code === "en")!;

  // Check if the language is RTL
  const isRtl = isUrduTypedLanguage(message.code);

  return (
    <section
    className=" w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        lg:px-10
        py-8
        sm:py-12
        md:py-16
        transition-all"

      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
        {/* {JSON.stringify(aboutMessages.length)} */}
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        {message.heading}
      </h2>
      <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">
        {message.subHeading}
      </h3>
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
        <ReactMarkdown>{message.description}</ReactMarkdown>
      </div>
    </section>
  );
};

export default HeroAboutSection;
