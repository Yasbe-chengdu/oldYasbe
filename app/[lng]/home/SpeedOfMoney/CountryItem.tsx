import React from 'react';

interface CountryItemProps {
  name: string;
}

export const CountryItem: React.FC<CountryItemProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2 h-2 aspect-square flex-shrink-0"
        >
          <circle cx="4" cy="4.5" r="4" fill="#A5A5A5" />
        </svg>
      </div>
      <div className="text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:tracking-[-0.32px]">
        {name}
      </div>
    </div>
  );
};
