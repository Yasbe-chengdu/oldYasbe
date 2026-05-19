import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex justify-between items-end w-full gap-10 max-md:flex-col max-md:items-start max-md:gap-6">
      <h1 className="w-[650px] text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] shrink-0 max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:leading-[43.2px] max-sm:tracking-[-1.44px]">
        {title}
      </h1>
      <p className="w-[480px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] shrink-0 max-md:w-full max-md:text-base max-sm:text-base">
        {description}
      </p>
    </header>
  );
};
