import React from 'react';
import { PolicyItem } from './PolicyItem';

interface PolicySectionProps {
  title: string;
  items: string[];
}

export const PolicySection: React.FC<PolicySectionProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col items-start gap-6 self-stretch relative max-md:gap-5 max-sm:gap-[18px]">
      <h2 className="self-stretch text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] relative max-md:text-2xl max-md:tracking-[-0.48px] max-sm:text-[22px] max-sm:tracking-[-0.44px]">
        {title}
      </h2>
      <div className="flex flex-col justify-center items-center gap-4 self-stretch relative max-md:gap-3.5 max-sm:gap-3">
        <ul className="flex flex-col gap-4 self-stretch max-md:gap-3.5 max-sm:gap-3" role="list">
          {items.map((item, index) => (
            <PolicyItem key={index}>• {item}</PolicyItem>
          ))}
        </ul>
      </div>
    </section>
  );
};
