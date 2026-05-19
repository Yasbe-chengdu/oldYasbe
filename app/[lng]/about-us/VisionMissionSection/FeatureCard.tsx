import React from 'react';
import { IconWrapper } from './IconWrapper';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col justify-center items-start gap-4 self-stretch border relative box-border bg-white p-8 rounded-2xl border-solid border-[#DFE1E7] max-md:p-7 max-sm:p-6">
      <div className="flex flex-col items-start gap-6 self-stretch relative">
        <header className="flex items-center gap-4 relative max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <IconWrapper>{icon}</IconWrapper>
          <h3 className="font-bold text-2xl text-[#1C1C1C] leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:tracking-[-0.4px]">
            {title}
          </h3>
        </header>
        <div className="self-stretch relative">
          <p className="font-normal text-lg text-[#777] leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:tracking-[-0.32px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
