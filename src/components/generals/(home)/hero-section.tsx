"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { isUrduTypedLanguage } from "@/constants/language";
import { welcomeMessages } from "@/constants/(translate)/top-hero";
import CardStackExample from "./stack-card";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const message = welcomeMessages.find((m) => m.code === locale) || welcomeMessages[0];
  const isRtl = isUrduTypedLanguage(message.code);

  return (
    <div className="w-full md:pt-32 overflow-y-hidden relative overflow-x-hidden flex items-center justify-center px-4 lg:px-16">
      <div className="w-full h-96 rounded-lg overflow-hidden">
        <div
          className="w-full max-w-7xl h-full flex flex-col md:flex-row md:items-center mt-10 sm:mt-0 relative z-10 gap-8"
          style={{ textAlign: isRtl ? "right" : "left", direction: isRtl ? "rtl" : "ltr" }}
        >
          {/* Column 1: Text */}
          <div className="md:flex-1 flex flex-col gap-4">
            <h1 className="2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-semibold font-serif text-gray-900 dark:text-white">
              {message.welcome}
            </h1>
            <p className="mt-4 lg:w-[90%] text-gray-700 dark:text-gray-300 text-md md:text-lg 2xl:text-xl">
              {message.shortDesc}
            </p>
            <div className="mt-4 flex justify-start">
              <Button className="p-6 px-8 cursor-pointer" variant="outline">
                {message.actionText}
              </Button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="w-full flex-1 flex justify-end md:w-auto items-center">
            <CardStackExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
