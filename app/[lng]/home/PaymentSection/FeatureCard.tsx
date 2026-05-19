import React from 'react';

interface FeatureCardProps {
  index?: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ index = 0, icon, title, description }) => {
  return (
    <article
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 100}
      className="flex flex-col justify-center items-start gap-4 self-stretch border bg-white p-8 rounded-2xl border-solid border-[#D6D6D6] max-sm:p-6"
    >
      <div className="flex flex-col items-start gap-6 self-stretch">
        <header className="flex items-center gap-4 max-sm:flex-row max-sm:items-center max-sm:gap-3">
          <div className="flex justify-center items-center gap-2.5 bg-[#FFCA00] p-4 rounded-[60px]">{icon}</div>
          <h3 className="text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:tracking-[-0.4px]">
            {title}
          </h3>
        </header>

        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {description}
        </p>
      </div>
    </article>
  );
};
