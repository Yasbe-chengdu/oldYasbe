import React from 'react';
import { CryptoIconGrid } from './CryptoIconGrid';

interface CryptoIconData {
  icon: React.ReactNode;
  alt: string;
}

interface FeatureCardProps {
  index?: number;
  title: string;
  description: string;
  highlightedText?: string;
  icons: CryptoIconData[];
  iconLayout: 'square' | 'horizontal';
  className?: string;
  trailingText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  index = 0,
  title,
  description,
  highlightedText,
  icons,
  iconLayout,
  className = '',
  trailingText,
}) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 200}
      className={`flex flex-col justify-center items-center gap-10 flex-1 shadow-[0_4px_64px_-20px_rgba(0,0,0,0.20)] relative bg-white p-10 rounded-2xl max-md:p-[30px] max-sm:p-5 ${className}`}
    >
      <div className="flex flex-col justify-end items-center gap-[3.35px] border relative w-full h-[450px] bg-[#1C1C1C] pl-[69.348px] pr-[68px] pt-[82px] pb-0 rounded-2xl border-solid border-[rgba(28,28,28,0.00)] max-md:h-80 max-md:pt-[60px] max-md:px-10 max-sm:h-[280px] max-sm:pt-10 max-sm:px-5">
        <img src="/images/background-blur.svg" className="absolute inset-0 w-full h-full object-cover" alt="" />
        <CryptoIconGrid icons={icons} layout={iconLayout} />
      </div>

      <div className="flex w-[550px] flex-col items-start gap-5 relative max-md:w-full">
        <h3 className="text-[#1C1C1C] text-[40px] font-bold leading-[52px] tracking-[-0.8px] max-md:text-[32px] max-md:tracking-[-0.64px] max-sm:text-[28px] max-sm:tracking-[-0.56px]">
          {title}
        </h3>
        <p className="text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] w-full max-md:text-base max-sm:text-sm">
          {description}
          {highlightedText && <span className="font-bold"> {highlightedText}</span>}
          {trailingText && <span> {trailingText}</span>}
        </p>
      </div>
    </article>
  );
};
