import React from 'react';
import { FeatureImage } from './FeatureImage';

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <article className=" h-[739px] flex flex-col justify-center items-center gap-10 flex-[1_0_0] shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.20)] bg-white p-10 rounded-2xl max-md:p-8 max-sm:gap-6 max-sm:p-6">
      <FeatureImage src={imageSrc} alt={imageAlt} />
      <div className="flex w-full max-w-[550px] flex-col items-start gap-5 max-sm:gap-4">
        <h2 className="text-[#1C1C1C] text-[40px] font-bold leading-[52px] tracking-[-0.8px] max-md:text-[32px] max-md:leading-[38.4px] max-sm:text-2xl max-sm:leading-[28.8px] max-sm:tracking-[-0.6px]">
          {title}
        </h2>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-[19.6px] max-sm:tracking-[-0.28px]">
          {description}
        </p>
      </div>
    </article>
  );
};
