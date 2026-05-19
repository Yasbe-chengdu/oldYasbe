import React from 'react';
import { InvestmentIcon } from './InvestmentIcon';

interface InvestmentCardProps {
  type: 'equity' | 'future-equity' | 'digital-assets' | 'debt' | 'revenue-share';
  title: string;
  description?: string;
  isHighlighted?: boolean;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ type, title, description, isHighlighted = false }) => {
  return (
    <article
      className={`flex flex-col items-start gap-6 self-stretch relative p-6 rounded-2xl max-sm:gap-4 max-sm:p-4 ${
        isHighlighted ? 'bg-[#F7F7F7]' : ''
      }`}
    >
      <header className="flex items-center gap-4 relative max-sm:gap-3">
        <div
          className={`flex justify-center items-center gap-2.5 relative p-4 rounded-[60px] max-sm:p-3 ${
            isHighlighted ? 'bg-[#FFCA00]' : 'bg-[#6F6F6F]'
          }`}
        >
          <InvestmentIcon type={type} />
        </div>
        <h3
          className={`text-2xl font-bold leading-[28.8px] tracking-[-0.96px] relative max-sm:text-xl max-sm:tracking-[-0.8px] ${
            isHighlighted ? 'text-[#1C1C1C]' : 'text-[#A5A5A5]'
          }`}
        >
          {title}
        </h3>
      </header>
      {description && (
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-sm:text-base">
          {description}
        </p>
      )}
    </article>
  );
};
