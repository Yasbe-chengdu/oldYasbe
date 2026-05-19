import React from 'react';

interface FeatureItemProps {
  text: string;
  iconSrc: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text, iconSrc }) => {
  return (
    <div className="flex min-w-60 gap-3 grow shrink w-[222px]">
      <div className=" max-md: mt-1">
        <img src={iconSrc} alt="Feature icon" className="aspect-[1] object-contain w-5 self-stretch my-auto" />
      </div>
      <div className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] flex-1 shrink basis-[0%]">
        {text}
      </div>
    </div>
  );
};
