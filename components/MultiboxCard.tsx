import Image from 'next/image';
import React from 'react';

interface MultiboxCardProps {
  index?: number;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const MultiboxCard: React.FC<MultiboxCardProps> = ({ index = 0, icon, title, description, className = '' }) => {
  return (
    <article
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 150}
      className={`h-[15rem] flex flex-col justify-center items-start gap-4 flex-[1_0_0] border p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:p-6 max-sm:p-5 w-full ${className}`}
    >
      <div className="flex flex-col items-start gap-6 self-stretch">
        <header className="flex items-center gap-4 self-stretch">
          <div className="flex justify-center items-center gap-2.5 bg-[#FFCA00] p-4 rounded-[60px] max-sm:p-3">
            <Image src={icon} alt={`${title} icon`} width={32} height={32} className="w-8 h-8 object-contain" />
          </div>
          <h3 className="flex-[1_0_0] text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl">
            {title}
          </h3>
        </header>
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
};
