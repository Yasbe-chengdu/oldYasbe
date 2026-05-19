'use client';

import React from 'react';

import { ArrowIcon } from './ArrowIcon';
import { FeatureCard } from './FeatureCard';

interface GoalToOutcomeProps {
  title: string;
  firstCardTitle: string;
  secondCardTitle: string;
  firstCardFeatures: { text: string }[];
  secondCardFeatures: { text: string }[];
}

export const GoalToOutcome = ({
  title,
  firstCardTitle,
  secondCardTitle,
  firstCardFeatures,
  secondCardFeatures,
}: GoalToOutcomeProps) => {
  return (
    <section className="flex flex-col items-start p-11 gap-2.5 relative px-4 py-20 max-md:px-4 max-md:py-[60px] max-sm:px-4 max-sm:py-10">
      <div className="flex flex-col items-start bg-black gap-2.5 relative w-full max-w-[1408px] mx-auto my-0 p-16 rounded-2xl max-md:px-8 max-md:py-12 max-sm:px-6 max-sm:py-8">
        <div className="flex w-full max-w-screen-xl flex-col items-start gap-20 relative max-md:gap-[60px] max-sm:gap-10">
          <header className="flex flex-col items-center gap-6 self-stretch relative">
            <h1
              data-aos="fade-up"
              className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]"
            >
              {title}
            </h1>
          </header>

          <div className="flex items-center gap-6 self-stretch relative max-md:flex-col max-md:gap-8 max-sm:gap-6">
            <FeatureCard
              title={firstCardTitle}
              features={firstCardFeatures}
              backgroundColor="#F7F7F7"
              className="w-[460px] max-md:w-full"
            />
            <div className="hidden md:flex w-[60px] h-[60px] justify-center items-center gap-2.5 absolute -translate-x-56 -translate-y-2/4 z-10 bg-[#1C1C1C] p-6 rounded-[80px] border-[12px] border-solid border-white xl:left-[51%] md:left-[59%] top-2/4 max-md:relative max-md:mx-auto max-md:-mt-24 max-md:mb-4 max-md:left-auto max-md:top-auto max-sm:w-12 max-sm:h-12 max-sm:p-3 max-sm:border-8 max-sm:border-solid max-sm:border-white max-sm:-translate-x-2/4">
              <ArrowIcon />
            </div>
            <FeatureCard
              title={secondCardTitle}
              features={secondCardFeatures}
              backgroundColor="#FFCA00"
              className="flex-[1_0_0] self-stretch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
