import React from 'react';

interface DefinitionItemProps {
  number: string;
  term: string;
  definition: string;
}

export const DefinitionItem: React.FC<DefinitionItemProps> = ({ number, term, definition }) => {
  return (
    <div className="flex items-start gap-2 w-full max-sm:gap-1.5">
      <div className="w-14 text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] shrink-0 max-md:text-base max-sm:text-sm max-sm:leading-[21px] max-sm:w-12">
        {number}
      </div>
      <div className="text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
        <strong className="font-bold">{term}</strong> {definition}
      </div>
    </div>
  );
};
