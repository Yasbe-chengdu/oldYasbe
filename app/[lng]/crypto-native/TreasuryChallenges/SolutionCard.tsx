import React from 'react';
import { FeatureItem } from './FeatureItem';

interface SolutionFeature {
  text: string;
  iconSrc: string;
}

interface SolutionCardProps {
  title: string;
  features: SolutionFeature[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, features }) => {
  return (
    <article className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#FFCA00] mt-5 p-8 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[1.2] tracking-[-0.48px] max-md:max-w-full">
          {title}
        </h3>
        <div className="flex w-full gap-2 flex-wrap mt-6 max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature.text} iconSrc={feature.iconSrc} />
          ))}
        </div>
      </div>
    </article>
  );
};
