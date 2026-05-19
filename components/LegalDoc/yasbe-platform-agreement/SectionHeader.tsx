import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <header className="flex items-start gap-2 self-stretch relative max-sm:gap-1.5">
      <div
        className="w-14 text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative shrink-0 
    max-md:w-auto max-md:min-w-14 max-md:text-base max-md:leading-[150%] 
    max-sm:text-xs max-sm:leading-[130%] max-sm:w-auto max-sm:min-w-10"
      >
        <div className="font-bold text-lg text-[rgba(119,119,119,1)] max-sm:text-sm">{number}</div>
      </div>

      <h2
        className="flex-[1_0_0] text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative 
    max-md:text-base max-md:leading-[150%] 
    max-sm:text-xs max-sm:leading-[130%]"
      >
        <div className="font-bold text-lg text-[rgba(119,119,119,1)] max-sm:text-sm">{title}</div>
      </h2>
    </header>
  );
};
