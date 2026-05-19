import React, { useState } from 'react';
import { CaretIcon } from './CaretIcon';

interface AccordionCardProps {
  title: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const Accordion: React.FC<AccordionCardProps> = ({
  title,
  children,
  isExpanded = false,
  onToggle,
  className = '',
}) => {
  const [internalExpanded, setInternalExpanded] = useState(isExpanded);

  const expanded = onToggle ? isExpanded : internalExpanded;
  const handleToggle = onToggle || (() => setInternalExpanded(!internalExpanded));

  const baseClasses =
    'flex w-[628px] flex-col justify-center items-start border box-border p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:w-full max-sm:p-6';
  const backgroundClass = expanded ? 'bg-[#F7F7F7]' : 'bg-white';

  return (
    <article className={`${baseClasses} ${backgroundClass} ${className}`}>
      <header className="flex justify-between items-center w-full">
        <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:tracking-[-0.4px]">
          {title}
        </h3>
        <button
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="focus:outline-none "
        >
          <CaretIcon direction={expanded ? 'up' : 'down'} />
        </button>
      </header>

      <div
        id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={` overflow-hidden flex flex-col items-start gap-4 w-full ${
          expanded ? 'mt-6 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        role="region"
        aria-labelledby={`accordion-header-${title.replace(/\s+/g, '-').toLowerCase()}`}
        style={{
          transitionProperty: 'max-height, opacity',
        }}
      >
        {children}
      </div>
    </article>
  );
};
