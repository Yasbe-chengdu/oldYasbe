import React, { useState } from 'react';

interface DueDiligenceCardProps {
  title: string;
  description?: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

export const DueDiligenceCard: React.FC<DueDiligenceCardProps> = ({
  title,
  description,
  isExpanded = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <article
      className="flex flex-col items-start gap-12 self-stretch relative pb-8 border-b-[#6F6F6F] border-b border-solid max-sm:gap-6 max-sm:pb-6 cursor-pointer transition-all duration-200 hover:border-b-[#8F8F8F]"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex flex-col items-start gap-6 self-stretch relative">
        <h3
          className={`text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] relative max-md:text-[22px] max-md:tracking-[-0.44px] max-sm:text-xl max-sm:tracking-[-0.4px] transition-colors duration-200 ${
            isExpanded ? 'text-white' : 'text-[#A5A5A5] hover:text-[#C5C5C5]'
          }`}
        >
          {title}
        </h3>
        {isExpanded && description && (
          <p className="self-stretch text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px] animate-in slide-in-from-top-2 duration-300">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};
