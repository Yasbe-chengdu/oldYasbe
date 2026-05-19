'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface FAQCardProps {
  index?: number;
  question: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

const CaretUpIcon = () => (
  <Image
    src="/icons/arrow-up.png"
    alt="Caret Icon"
    width={32}
    height={32}
    className={`caret-icon w-[32px] h-[32px]`}
    priority
  />
);

const CaretDownIcon = () => (
  <Image
    src="/icons/arrow-down.png"
    alt="Caret Icon"
    width={32}
    height={32}
    className={`caret-icon w-[32px] h-[32px]`}
    priority
  />
);

export const FAQCard: React.FC<FAQCardProps> = ({ index = 0, question, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className={`flex flex-col items-start gap-6 self-stretch border relative p-8 rounded-2xl border-solid border-[#D6D6D6] max-sm:p-6 ${
        isExpanded ? 'bg-[#F7F7F7]' : 'bg-white'
      }`}
    >
      <header
        data-aos="flip-up"
        data-aos-delay={(index + 1) * 10}
        className="flex justify-between items-center self-stretch relative cursor-pointer"
        onClick={toggleExpanded}
      >
        <h2 className="text-[#1C1C1C] text-2xl font-semibold leading-[28.8px] tracking-[-0.48px] relative max-md:text-[22px] max-sm:text-xl">
          {question}
        </h2>
        <span
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse answer' : 'Expand answer'}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
        >
          {isExpanded ? <CaretUpIcon /> : <CaretDownIcon />}
        </span>
      </header>
      {isExpanded && children && (
        <div
          data-aos="flip-up"
          data-aos-delay={(index + 1) * 10}
          className="flex flex-col items-start gap-4 self-stretch relative"
          role="region"
          aria-labelledby="faq-question"
        >
          {children}
        </div>
      )}
    </article>
  );
};
