import React from 'react';

interface CentralIconProps {
  iconSrc: string;
}

export const CentralIcon: React.FC<CentralIconProps> = ({ iconSrc }) => {
  return (
    <div className="justify-center items-center aspect-[1/1] md:-mt-8 absolute z-0 flex min-h-[60px] w-[60px] gap-2.5 h-[60px] -translate-x-2/4 -translate-y-2/4 bg-[#1C1C1C] px-2 rounded-[80px] border-[12px] border-solid border-white left-2/4 top-2/4 max-md: -mt-12">
      <img
        src={iconSrc}
        alt="Transformation icon"
        className="aspect-[1] object-contain w-full h-full max-w-[70px] max-h-[70px] self-stretch my-auto"
      />
    </div>
  );
};
