import React from 'react';
import { CheckIcon } from '../GoalToOutcome/CheckIcon';

interface FeatureItem {
  text: string;
}

interface FeatureCardProps {
  title: string;
  features: FeatureItem[];
  backgroundColor: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, features, backgroundColor, className = '' }) => {
  return (
    <article
      className={`flex flex-col justify-center items-start gap-6 relative p-14 rounded-2xl max-md:p-12 max-sm:p-8 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="flex flex-col items-start gap-6 self-stretch relative">
        <h3 className="text-[#1C1C1C] text-[32px] font-bold leading-[38.4px] tracking-[-0.64px] relative max-md:text-[28px] max-md:tracking-[-0.56px] max-sm:text-2xl max-sm:tracking-[-0.48px]">
          {title}
        </h3>
        <div className="flex flex-col justify-center items-start gap-2 self-stretch relative">
          <ul className="flex flex-col gap-2 self-stretch">
            {features?.length &&
              features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 self-stretch relative">
                  <div className="flex items-center gap-2.5 relative pt-1.5 max-sm:pt-1">
                    <CheckIcon />
                  </div>
                  <span className="flex-[1_0_0] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-sm max-sm:leading-[19.6px]">
                    {feature.text}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
