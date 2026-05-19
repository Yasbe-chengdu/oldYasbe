import React from 'react';

interface UseCaseCardProps {
  title: string;
  description: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description }) => {
  return (
    <article className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#F7F7F7] p-8 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[1.2] tracking-[-0.48px] max-md:max-w-full">
          {title}
        </h3>
        <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
