import React from 'react';

interface FAQHeaderProps {
  title: string;
  description: string;
}

export const FAQHeader: React.FC<FAQHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col justify-center items-center gap-6 self-stretch relative">
      <h1 className="w-[650px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
        {title}
      </h1>
      <p className="w-[800px] text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:w-full max-md:text-base max-sm:text-base">
        {description}
      </p>
    </header>
  );
};
