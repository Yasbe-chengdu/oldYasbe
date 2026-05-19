import React from 'react';

interface FeatureCardProps {
  index?: number;
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ index = 0, icon, title, description }) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 150}
      className="bg-white border flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] p-8 rounded-2xl border-[rgba(223,225,231,1)] border-solid max-md:px-5"
    >
      <div className="w-full">
        <header className="flex w-full items-center gap-4">
          <div className="bg-[rgba(255,202,0,1)] self-stretch flex items-center gap-2.5 justify-center w-16 h-16 my-auto px-4 rounded-[60px]">
            <img src={icon} alt="" className="aspect-[1] object-contain w-7 self-stretch my-auto" />
          </div>
          <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[29px] tracking-[-0.48px] flex-1 shrink basis-8 my-auto">
            {title}
          </h3>
        </header>
        <p className="text-[#1c1c1c] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6">{description}</p>
      </div>
    </article>
  );
};
