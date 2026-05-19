import React, { useState } from 'react';
import { CaretIcon } from './CaretIcon';
import { JobCardContent } from './JobCardContent';

interface JobCardProps {
  title: string;
  isInitiallyExpanded?: boolean;
  hasContent?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({ title, isInitiallyExpanded = false, hasContent = false }) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const handleToggle = () => {
    if (hasContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <article
      className={`flex flex-col justify-center items-start gap-6 w-full border box-border p-8 rounded-2xl border-solid max-md:p-6 max-sm:p-5 ${
        hasContent && isExpanded ? 'bg-[#F7F7F7] border-[#D6D6D6]' : 'border-[#D6D6D6]'
      }`}
    >
      <header
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={handleToggle}
        role={hasContent ? 'button' : undefined}
        tabIndex={hasContent ? 0 : undefined}
        onKeyDown={e => {
          if (hasContent && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleToggle();
          }
        }}
        aria-expanded={hasContent ? isExpanded : undefined}
        aria-controls={hasContent ? `job-content-${title.replace(/\s+/g, '-').toLowerCase()}` : undefined}
      >
        <h2 className="text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-md:text-[22px] max-md:tracking-[-0.44px] max-sm:text-xl max-sm:tracking-[-0.4px]">
          {title}
        </h2>
        {hasContent && (
          <div
            className="transition-transform duration-200 ease-in-out"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <CaretIcon direction="down" />
          </div>
        )}
        {!hasContent && (
          <div>
            <CaretIcon direction="down" />
          </div>
        )}
      </header>

      {hasContent && isExpanded && (
        <div
          id={`job-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="w-full animate-in slide-in-from-top-2 duration-300"
        >
          <JobCardContent />
        </div>
      )}
    </article>
  );
};
