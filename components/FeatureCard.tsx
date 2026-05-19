import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  index?: number;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ index = 0, icon, title, description, className = '' }) => {
  return (
    <article
      className={cn(
        'flex h-[268px] flex-col items-center gap-2.5 border box-border p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:w-full max-md:h-auto max-md:min-h-[268px] max-sm:h-auto max-sm:min-h-60 max-sm:p-6',
        className,
      )}
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 200}
    >
      <div className="flex flex-col gap-6 w-full">
        <header className="flex items-center gap-4 w-full">
          <div
            className="flex justify-center items-center gap-2.5 bg-[#FFCA00] p-4 rounded-[60px]"
            role="img"
            aria-label={`${title} icon`}
          >
            <Image src={icon} alt={`${title} icon`} width={32} height={32} className="w-8 h-8 object-contain" />
          </div>

          <h2 className="text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:leading-6 max-sm:tracking-[-0.4px]">
            {title}
          </h2>
        </header>

        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:leading-6 max-sm:tracking-[-0.32px]">
          {description}
        </p>
      </div>
    </article>
  );
};
