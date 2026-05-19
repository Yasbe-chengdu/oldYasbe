import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <article className="shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.10)] min-w-60 overflow-hidden leading-[29px] flex-1 shrink basis-[0%] bg-white p-6 rounded-2xl max-md:px-5">
      <header className="flex w-full flex-col items-stretch text-[#1C1C1C] font-semibold justify-center">
        <img src={icon} alt="" className="aspect-[1] object-contain w-7 self-center" />
        <h3 className="text-[#1C1C1C] mt-4 text-lg text-center tracking-[-0.36px]">{title}</h3>
      </header>
      <p className="text-[#777] font-normal mt-4 text-lg text-center tracking-[-0.36px]">{description}</p>
    </article>
  );
};
