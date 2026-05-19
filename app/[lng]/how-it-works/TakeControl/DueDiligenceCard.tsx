import React from 'react';

interface DueDiligenceCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

export const DueDiligenceCard: React.FC<DueDiligenceCardProps> = ({ number, title, description, index = 0 }) => {
  return (
    <article
      className="flex flex-col justify-center items-start gap-4 flex-[1_0_0] border relative box-border p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:p-7 max-sm:gap-3 max-sm:p-6"
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="flex flex-col items-start gap-6 relative w-full max-sm:gap-5">
        <header className="flex items-center gap-4 relative max-sm:flex-row max-sm:items-center max-sm:gap-3 w-full">
          <div className="flex w-16 h-16 justify-center items-center gap-2.5 relative box-border bg-[#FFCA00] p-4 rounded-[60px] max-sm:w-14 max-sm:h-14 max-sm:p-3.5">
            <span className="text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] relative max-sm:text-xl max-sm:tracking-[-0.4px]">
              <div className="font-bold text-2xl text-[#1C1C1C]">{number}</div>
            </span>
          </div>
          <h2 className="flex-1 break-words text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] relative max-md:text-[22px] max-md:tracking-[-0.44px] max-sm:text-xl max-sm:tracking-[-0.4px]">
            <div className="font-bold text-2xl text-[#1C1C1C]">{title}</div>
          </h2>
        </header>
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          <span className="font-normal text-lg text-[#777]">{description}</span>
        </p>
      </div>
    </article>
  );
};
