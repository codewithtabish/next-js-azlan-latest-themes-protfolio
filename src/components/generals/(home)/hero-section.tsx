"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { isUrduTypedLanguage } from "@/constants/language";
import { welcomeMessages } from "@/constants/(translate)/top-hero";
import CardStackExample from "./stack-card";
import Image from "next/image";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const message = welcomeMessages.find((m) => m.code === locale) || welcomeMessages[0];
  const isRtl = isUrduTypedLanguage(message.code);

  return (
    <section
      className="
        w-full
        pt-16 sm:pt-20 md:pt-32 pb-8
        relative flex items-center justify-center
        px-4 sm:px-6 lg:px-16
        overflow-x-hidden
      "
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8">
        {/* Text Column */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-serif text-gray-900 dark:text-white">
            {message.welcome}
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-base md:text-lg 2xl:text-xl max-w-xl">
            {message.shortDesc}
          </p>
          <div className="mt-4 flex justify-start">
            <Button className="px-6 py-3 text-base md:text-lg" variant="outline">
              {message.actionText}
            </Button>
          </div>
        </div>

        {/* Image/Card Column */}
        {/* Only visible on lg and up */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <CardStackExample />
        </div>
        {/* Only visible below lg */}
        <div className="flex lg:hidden flex-1 justify-center items-center w-full">
          <div className="
            w-[70vw] max-w-[220px]
            sm:w-[60vw] sm:max-w-[300px]
            md:w-[50vw] md:max-w-[350px]
            aspect-square
            flex items-center
          ">
            <Image
              src={'/images/devtwo.png'}
              alt="hero single image"
              className="object-cover w-full h-full rounded-2xl"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
