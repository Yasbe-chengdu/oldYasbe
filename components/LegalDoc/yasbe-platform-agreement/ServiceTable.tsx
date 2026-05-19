import React from 'react';

export const ServiceTable: React.FC = () => {
  return (
    <div className="flex md:ml-32 items-center flex-1 w-full max-sm:overflow-x-auto">
      <div className="flex flex-col items-start flex-1 max-sm:min-w-[120px]">
        <header className="flex h-12 items-center gap-3 w-full bg-[#1C1C1C] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-12 max-sm:px-3 max-sm:py-2">
          <h4 className="text-white text-base font-bold leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Services Level Measures
          </h4>
        </header>
        <div className="flex h-[60px] flex-col justify-center items-start gap-2 w-full bg-[#F7F7F7] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[60px] max-sm:px-3 max-sm:py-2">
          <div className="w-full text-[#1C1C1C] text-base font-normal leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Availability
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 max-sm:min-w-[120px]">
        <header className="flex h-12 items-center gap-3 w-full bg-[#1C1C1C] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-12 max-sm:px-3 max-sm:py-2">
          <h4 className="text-white text-base font-bold leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Standards
          </h4>
        </header>
        <div className="flex h-[60px] flex-col justify-center items-start gap-2 w-full bg-[#F7F7F7] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[60px] max-sm:px-3 max-sm:py-2">
          <div className="w-full text-[#1C1C1C] text-base font-normal leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            99%
          </div>
        </div>
      </div>
    </div>
  );
};
