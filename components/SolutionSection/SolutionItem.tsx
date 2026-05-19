import React, { useState } from 'react';

interface SolutionItemProps {
  number: number;
  title: string;
  description?: string[];
  details?: string[];
  isInitiallyExpanded?: boolean;
}

export const SolutionItem: React.FC<SolutionItemProps> = ({
  number,
  title,
  description,
  details,
  isInitiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className="w-full font-semibold leading-[1.2] pb-8 border-b-[#D6D6D6] border-b border-solid max-md:max-w-full"
      data-aos="fade-up"
      data-aos-delay={number * 150}
    >
      <div className="w-full max-md:max-w-full">
        <header
          className="flex w-full items-center gap-6 flex-wrap max-md:max-w-full cursor-pointer"
          onClick={toggleExpanded}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls={`solution-${number}-content`}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleExpanded();
            }
          }}
        >
          <div className="self-stretch flex min-w-60 items-center gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <div className="justify-center items-center self-stretch flex min-h-10 gap-1 text-xl text-[#1C1C1C] whitespace-nowrap tracking-[-0.8px] w-10 h-10 bg-[#FFCA00] my-auto rounded-[25px]">
              <span className="text-[#1C1C1C] self-stretch my-auto">{number}</span>
            </div>
            <h2 className="text-[#1C1C1C] text-2xl tracking-[-0.48px] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              {title}
            </h2>
          </div>
          <img
            src={isExpanded ? '/icons/arrow-up.png' : '/icons/arrow-down.png'}
            alt={isExpanded ? 'Collapse' : 'Expand'}
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto transition-transform duration-200"
            style={{ transform: isExpanded ? 'rotate(360deg)' : 'rotate(0deg)' }}
          />
        </header>

        {isExpanded && description && (
          <div
            id={`solution-${number}-content`}
            className="w-full text-lg text-[#777] font-normal tracking-[-0.36px] leading-[1.6] mt-6 max-md:max-w-full"
          >
            {description && (
              <div className="space-y-4">
                {description.map((desc, index) => (
                  <p key={index} className="text-[#777] max-md:max-w-full">
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {details && (
              <ul className="w-full list-disc pl-6 space-y-2 mt-4 max-md:max-w-full">
                {details.map((detail, index) => (
                  <li key={index} className="text-[#777] mt-1 max-md:max-w-full">
                    {detail.replace(/^•\s*/, '')}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
