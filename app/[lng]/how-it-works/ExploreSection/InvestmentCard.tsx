import React from 'react';

interface InvestmentCardProps {
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ title, description, className = '', index = 0 }) => {
  const baseClasses =
    'flex flex-col items-start gap-5 flex-[1_0_0] relative box-border p-6 max-md:flex-[1_1_calc(50%_-_10px)] max-md:min-w-[280px] max-sm:flex-[1_1_100%] max-sm:p-5 hover:bg-[#F7F7F7] hover:border hover:border-solid hover:border-[#D6D6D6] hover:rounded-2xl transition-all duration-200';

  return (
    <article className={`${baseClasses} ${className}`} data-aos="flip-up" data-aos-delay={(index + 1) * 100}>
      <header>
        <h3 className="self-stretch text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] relative max-sm:text-xl max-sm:tracking-[-0.4px]">
          <div className="font-bold text-2xl text-[#1C1C1C] max-sm:text-xl">{title}</div>
        </h3>
      </header>
      <div className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-sm:text-base max-sm:tracking-[-0.32px]">
        <div className="font-normal text-lg text-[#777] max-sm:text-base">{description}</div>
      </div>
    </article>
  );
};
