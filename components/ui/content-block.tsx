import React from 'react';
import { cn } from '@/lib/utils';

interface ContentBlockProps {
  title: string;
  description: string;
  className?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, className }) => {
  return (
    <div className={cn('flex flex-col items-start gap-6 w-full max-sm:gap-4', className)}>
      <h2 className="w-full max-w-[474px] text-[#1C1C1C] text-[40px] font-bold leading-[52px] tracking-[-0.8px] max-md:text-[32px] max-md:max-w-full max-sm:text-[28px] max-sm:leading-[33.6px]">
        {title}
      </h2>
      <p className="w-full max-w-[535px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:max-w-full max-sm:text-base max-sm:leading-6">
        {description}
      </p>
    </div>
  );
};
