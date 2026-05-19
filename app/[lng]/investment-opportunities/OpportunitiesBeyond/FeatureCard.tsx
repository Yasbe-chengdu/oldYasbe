import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index = 0 }) => {
  return (
    <article
      className="flex flex-col justify-center items-start gap-4 flex-1 border box-border p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:p-6"
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="flex flex-col items-start gap-6 w-full">
        <header className="flex items-center gap-4 w-full">
          <div className="flex justify-center items-center box-border bg-[#FFCA00] p-4 rounded-[60px]">{icon}</div>
          <h3 className="flex-1 text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl">
            {title}
          </h3>
        </header>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
};
