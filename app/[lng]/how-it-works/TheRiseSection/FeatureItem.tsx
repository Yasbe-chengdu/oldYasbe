import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col items-start gap-12 w-full pb-10 border-b-[#D6D6D6] border-b border-solid max-sm:gap-6 max-sm:pb-6">
      <div className="flex w-full max-w-screen-xl justify-between items-start max-md:flex-col max-md:gap-6">
        <header className="flex items-center gap-4 max-md:w-full max-sm:flex-row max-sm:items-center max-sm:gap-3 max-sm:text-left w-full">
          <div className="flex justify-center items-center bg-[#FFCA00] p-4 rounded-[60px] max-sm:self-start">
            {icon}
          </div>
          <h2 className="flex-1 break-words text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:leading-[26px]">
            {title}
          </h2>
        </header>
        <p className="w-[480px] shrink-0 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[600px] max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};
