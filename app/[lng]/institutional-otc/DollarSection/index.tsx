import React from 'react';
import { BackgroundBlur } from './BackgroundBlur';
import { HeroContent } from './HeroContent';

export const DollarSection: React.FC = () => {
  return (
    <main
      className="max-w-none w-[1400px] h-[613px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.02)] relative overflow-hidden mx-auto rounded-2xl max-md:max-w-screen-lg max-md:w-full max-md:h-auto max-md:min-h-[500px] max-md:box-border max-md:px-5 max-md:py-10 max-sm:max-w-screen-sm max-sm:h-auto max-sm:min-h-[400px] max-sm:p-5 max-sm:rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      data-aos="fade-up"
    >
      <BackgroundBlur />
      <HeroContent />
      <div className="relative" data-aos="fade-up" data-aos-delay="300">
        <img className="absolute right-0 max-md:w-1/2 max-md:top-32" src="/images/dollar-icon.png" alt="" />
      </div>
    </main>
  );
};
