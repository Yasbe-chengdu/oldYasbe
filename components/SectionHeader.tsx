import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title?: string;
  desc?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, desc }) => {
  return (
    <header className="flex items-end w-full gap-[40px_148px] flex-wrap max-md:max-w-full">
      <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[73px] tracking-[-2.24px] grow shrink w-[554px] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
        {title}
      </h1>
      <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] grow shrink w-116 -translate-y-[6px] max-md:max-w-full">
        {desc}
      </p>
    </header>
  );
};
