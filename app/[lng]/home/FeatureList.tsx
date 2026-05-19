import { Check } from 'lucide-react';
import React from 'react';

interface FeatureItem {
  text: string;
}

interface FeatureListProps {
  title: string;
  features: FeatureItem[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ title, features }) => {
  return (
    <section className="w-full text-lg text-[#777] tracking-[-0.36px] leading-[1.6] mt-10 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#777] font-semibold max-md:max-w-full">{title}</h2>
      <ul className="w-full font-normal mt-5 max-md:max-w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex w-full items-start gap-2 mt-3 first:mt-0 max-md:max-w-full">
            <Check className="shrink-0 mt-1" />
            <span className="text-[#777] leading-snug">{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
