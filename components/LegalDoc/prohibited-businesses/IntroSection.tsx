import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-6 self-stretch relative max-md:gap-5 max-sm:gap-[18px]">
      <h1 className="self-stretch text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] relative max-md:text-2xl max-md:tracking-[-0.48px] max-sm:text-[22px] max-sm:tracking-[-0.44px]">
        Prohibited Businesses
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 self-stretch relative max-md:gap-3.5 max-sm:gap-3">
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-[15px] max-sm:tracking-[-0.3px]">
          You must not use YASBe's services in connection with any of the activities, practices, products, or services
          described below. The list is illustrative and not exhaustive.
        </p>
      </div>
    </section>
  );
};
