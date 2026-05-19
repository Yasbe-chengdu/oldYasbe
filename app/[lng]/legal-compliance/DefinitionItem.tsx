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
      <div className="flex-[1_0_0] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
        <div className="font-bold">{term}</div>
        {definition}
      </div>
    </div>
  );
};
