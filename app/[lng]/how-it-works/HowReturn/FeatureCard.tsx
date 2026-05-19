import React from 'react';
import { IconWrapper } from './IconWrraper';

interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconAlt, title, description, index = 0 }) => {
  return (
    <article
      className="justify-center items-stretch border flex w-full flex-col overflow-hidden p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5"
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <header className="flex items-center gap-4 max-md:max-w-full">
          <IconWrapper src={iconSrc} alt={iconAlt} />
          <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[1.2] tracking-[-0.48px] self-stretch my-auto">
            {title}
          </h3>
        </header>
        <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
