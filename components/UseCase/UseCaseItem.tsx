import { cn } from '@/lib/utils';
import React from 'react';

interface UseCaseItemProps {
  index?: number;
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const UseCaseItem: React.FC<UseCaseItemProps> = ({ index = 0, icon, title, description, isLast = false }) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 150}
      className={cn(
        `flex flex-col items-start gap-12 w-full max-sm:gap-6 max-sm:pb-6`,
        !isLast ? 'pb-10 border-b border-solid border-[#D6D6D6]' : '',
      )}
    >
      <div className="flex w-full max-w-screen-xl justify-between items-start max-md:flex-col max-md:gap-6 max-md:items-start">
        <header className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:text-left">
          <div className="flex justify-center items-center bg-[#FFCA00] p-4 rounded-full w-16 h-16">
            <img src={icon} alt={title} className="w-8 h-8 object-contain" />
          </div>
          <h2 className="text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:leading-[26px]">
            {title}
          </h2>
        </header>
        <p className="w-[480px] shrink-0 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};
