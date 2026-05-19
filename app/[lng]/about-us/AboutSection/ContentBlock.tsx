import React from 'react';

interface ContentBlockProps {
  title: string;
  description: string;
  className?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, className = '' }) => {
  return (
    <article
      className={`flex flex-col items-start gap-6 w-full max-md:items-center max-md:text-center max-sm:gap-4 ${className}`}
    >
      <h2 className="w-full max-w-[475px] text-[#1C1C1C] text-[40px] font-bold leading-[52px] tracking-[-0.8px] max-md:text-4xl max-md:text-center max-sm:text-[28px] max-sm:leading-[33.6px] max-sm:tracking-[-0.6px]">
        {title}
      </h2>
      <p className="w-full max-w-[535px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-center max-sm:text-base max-sm:leading-6 max-sm:tracking-[-0.32px]">
        {description}
      </p>
    </article>
  );
};
