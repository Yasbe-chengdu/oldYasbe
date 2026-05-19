import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconAlt, description }) => {
  return (
    <article className="justify-center items-center border self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] my-auto p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:px-5">
      <header className="flex w-10 flex-col items-center justify-center">
        <div className="justify-center items-center flex w-full gap-1.5 h-10 bg-[#FFCA00] px-2.5 rounded-[37.5px]">
          <img src={iconSrc} alt={iconAlt} className="aspect-[1] object-contain w-5 self-stretch my-auto" />
        </div>
      </header>
      <p className="text-[#777] text-center text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6">
        {description}
      </p>
    </article>
  );
};
