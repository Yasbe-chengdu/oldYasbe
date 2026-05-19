import React from 'react';

interface ChallengeCardProps {
  index?: number;
  iconSrc: string;
  iconAlt: string;
  title?: string;
  description: string;
  className?: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  index = 0,
  iconSrc,
  iconAlt,
  title,
  description,
  className = '',
}) => {
  return (
    <article
      data-aos="flip-up"
      data-aos-delay={(index + 1) * 150}
      className={`justify-center items-stretch border flex min-w-60 flex-col overflow-hidden grow shrink w-[502px] p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5 ${className}`}
    >
      <div className="w-full max-md:max-w-full">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-16 h-16 bg-[#FFCA00] px-4 rounded-[60px]">
            <img src={iconSrc} alt={iconAlt} className="aspect-[1] object-contain w-8" />
          </div>

          {title && <h3 className="text-[#333] text-xl font-semibold leading-snug tracking-tight">{title}</h3>}
        </div>
        <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
