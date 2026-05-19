import React from 'react';
import { LegalText } from './LegalText';

interface SubSectionProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

export const SubSection: React.FC<SubSectionProps> = ({ number, children, className }) => {
  return (
    <section
      className={`flex items-start gap-2 self-stretch relative pl-16 max-md:pl-8 max-sm:gap-1.5 max-sm:pl-4 ${className}`}
    >
      <div className="w-[72px] text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative shrink-0 max-md:w-auto max-md:min-w-[72px] max-md:text-base max-md:leading-[150%] max-sm:text-sm max-sm:leading-[130%] max-sm:w-auto max-sm:min-w-[40px]">
        <div className="font-bold text-lg text-[rgba(119,119,119,1)] max-sm:text-sm">{number}</div>
      </div>
      <div className="flex-[1_0_0] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:leading-[150%] max-sm:text-xs max-sm:leading-[130%]">
        <LegalText>{children}</LegalText>
      </div>
    </section>
  );
};
