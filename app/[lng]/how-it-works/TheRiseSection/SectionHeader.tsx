import { ActionButton } from '@/components/ActionButton';
import React from 'react';
import { useRouter } from 'next/navigation';

interface SectionHeaderProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, ctaText, onCtaClick }) => {
  const router = useRouter();
  return (
    <header className="flex justify-end items-end gap-[148px] w-full max-md:flex-col max-md:items-start max-md:gap-10">
      <h1 className="w-[650px] text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] shrink-0 max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:leading-[43.2px] max-sm:tracking-[-1.44px]">
        {title}
      </h1>
      <div className="flex flex-col justify-end items-start max-md:w-full">
        <p className="w-[480px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[600px] max-sm:text-base max-sm:leading-6">
          {description}
        </p>
        <div className="flex flex-col items-start gap-6">
          <ActionButton
            onClick={() => {
              router.push('https://trade.beeznis.com/auth/register');
            }}
            label={ctaText}
            black
          />
        </div>
      </div>
    </header>
  );
};
