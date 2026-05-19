'use client';
import React from 'react';
import { ReactNode } from 'react';
import { SectionContainer } from '../SectionContainer';
import { SolutionItem } from './SolutionItem';

interface SolutionSectionProp {
  children?: React.ReactNode;
  data: any[];
  title: ReactNode;
}

export const SolutionSection = ({ children, data, title }: SolutionSectionProp) => {
  return (
    <SectionContainer className="items-center">
      <header>
        <h1 className="w-[850px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[1.3] tracking-[-2.24px] max-md:w-full max-md:text-[40px]">
          {title}
        </h1>
      </header>

      <div className="shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.10)] max-w-full w-[1280px] bg-white mt-20 p-16 rounded-2xl max-md:mt-10 max-md:px-5">
        <div className="w-full max-md:max-w-full">
          {data.map((solution, index) => (
            <div key={solution.number} className={index < data.length - 1 ? 'mb-8' : ''}>
              <SolutionItem
                number={index + 1}
                title={solution.title}
                description={solution.description}
                details={solution.details}
                isInitiallyExpanded={solution.isInitiallyExpanded}
              />
            </div>
          ))}
        </div>
        {children}
      </div>
    </SectionContainer>
  );
};
