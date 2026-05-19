'use client';
import React, { useState } from 'react';
import { ToggleButtons } from './ToggleButtons';
import { CountryMap } from './CountryMap';

export const Coverage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<'collection' | 'payout' | null>('collection');

  return (
    <section
      className="flex w-full flex-col gap-2.5 relative box-border p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10"
      aria-labelledby="global-coverage-heading"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-start gap-20 w-full relative max-md:gap-[60px] max-sm:gap-10">
        <div className="flex flex-col items-center gap-10 w-full relative max-md:gap-[30px] max-sm:gap-6">
          <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-[42px] max-md:tracking-[-1.68px] max-sm:text-[32px] max-sm:tracking-[-1.28px] max-sm:leading-[38.4px]">
            Global Collection and Payout Coverage
          </h1>
          <nav role="tablist" aria-label="Coverage type selection">
            <ToggleButtons onToggle={setActiveGroup} />
          </nav>
        </div>
        <main className="mx-auto" role="tabpanel" aria-labelledby="global-coverage-heading">
          <CountryMap activeGroup={activeGroup} />
        </main>
      </div>
    </section>
  );
};
