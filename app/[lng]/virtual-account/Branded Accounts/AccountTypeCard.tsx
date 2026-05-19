import React from 'react';

interface AccountTypeCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const AccountTypeCard: React.FC<AccountTypeCardProps> = ({ icon, title, subtitle, className = '' }) => {
  return (
    <article
      className={`bg-white shadow-[0px_0px_30px_5px_rgba(9,9,9,0.04)] border flex flex-col overflow-hidden items-stretch justify-center p-3.5 rounded-[100px] border-[rgba(255,202,0,0.2)] border-solid max-md:pr-5 ${className}`}
    >
      <div className="flex items-center gap-3 justify-center">
        <div className="bg-[rgba(255,202,0,1)] self-stretch flex items-center gap-2.5 justify-center w-16 h-16 my-auto px-4 rounded-[60px]">
          <img src={icon} alt={`${title} icon`} className="aspect-[1] object-contain w-8 self-stretch my-auto" />
        </div>
        <div className="self-stretch flex flex-col text-center justify-center my-auto">
          <div className="text-[#FFCA00] text-2xl font-semibold leading-[1.2] tracking-[-0.48px]">{title}</div>
          {subtitle && (
            <div className="text-[#1c1c1c] text-lg font-normal leading-[1.6] tracking-[-0.36px] mt-1">{subtitle}</div>
          )}
        </div>
      </div>
    </article>
  );
};
