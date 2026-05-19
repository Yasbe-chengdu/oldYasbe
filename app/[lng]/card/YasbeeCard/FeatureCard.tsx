import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description?: string;
  isActive: boolean;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isActive, onClick }) => {
  return (
    <article
      className={`
        justify-center items-stretch border flex w-full flex-col overflow-hidden 
        p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5
        cursor-pointer transition-all duration-200 hover:shadow-md
        ${isActive ? 'bg-[#F7F7F7]' : 'bg-white hover:bg-gray-50'}
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="w-full max-md:max-w-full">
        <header className="flex w-full items-start gap-4 flex-nowrap max-md:max-w-full">
          <div
            className={`
              justify-center items-center flex-shrink-0 flex gap-2.5 w-16 h-16 
              px-4 rounded-[60px] transition-colors duration-200
              ${isActive ? 'bg-[#FFCA00]' : 'bg-[#D6D6D6]'}
            `}
          >
            <img src={icon} alt="" className="aspect-[1] object-contain w-8 self-stretch my-auto" />
          </div>
          <h3
            className={`
              text-2xl font-semibold leading-[1.2] tracking-[-0.48px] 
              self-stretch my-auto transition-colors duration-200
              ${isActive ? 'text-[#1C1C1C]' : 'text-[#777]'}
            `}
          >
            {title}
          </h3>
        </header>
        {description && isActive && (
          <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-4 max-md:max-w-full">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};
