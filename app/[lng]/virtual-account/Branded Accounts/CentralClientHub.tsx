import React from 'react';

export const CentralClientHub: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center gap-20">
      <button
        className="bg-[rgba(255,202,0,1)] shadow-[0px_0px_35px_6px_rgba(9,9,9,0.04)] self-center z-10 flex min-h-[76px] w-[220px] max-w-full items-center overflow-hidden text-lg text-[#1C1C1C] font-bold text-center tracking-[-0.36px] leading-[1.6] justify-center -mt-10 px-7 py-[18px] rounded-[66px] max-md:px-5 hover:bg-[rgba(255,202,0,0.9)] transition-colors"
        aria-label="YASBe Client central hub"
      >
        <div className="self-stretch flex w-[204px] items-center justify-between my-auto">
          <img
            src="icons/monitor-analytics.svg"
            alt="YASBe Client"
            className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">YASBe Client</span>
        </div>
      </button>

      <p className="text-[#1c1c1c] text-base font-normal leading-[1.6] tracking-[-0.32px] self-center z-10 mt-[-46px]">
        Account Name = Client Company Name
      </p>
    </div>
  );
};
