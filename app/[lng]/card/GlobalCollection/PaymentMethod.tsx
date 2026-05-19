import React from 'react';

interface PaymentMethodProps {
  icon: string;
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  icon,
  title,
  description,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      className={`bg-white border flex w-full flex-col overflow-hidden items-stretch justify-center mt-4 p-8 rounded-2xl border-[rgba(223,225,231,1)] border-solid max-md:max-w-full max-md:px-3 max-md:py-4 transition-all duration-200 hover:shadow-sm ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex w-full items-center gap-6 max-md:max-w-full max-md:gap-3">
        <div className="bg-[rgba(255,202,0,1)] self-stretch flex items-center gap-2.5 justify-center w-16 h-16 my-auto px-4 rounded-[60px] max-md:w-10 max-md:h-10 max-md:px-2">
          <img
            src={icon}
            alt={`${title} icon`}
            className="aspect-[1] object-contain w-8 self-stretch my-auto max-md:w-5"
          />
        </div>
        <div className="text-[rgba(28,28,28,1)] text-2xl font-semibold leading-[1.2] tracking-[-0.96px] self-stretch flex-1 shrink basis-8 my-auto text-left max-md:text-base max-md:tracking-[-0.5px]">
          {title}
        </div>
        <img
          src="/icons/chevron-right.svg"
          alt="Arrow icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto max-md:w-4"
        />
      </div>
      <div className="text-[#1c1c1c] text-lg font-normal leading-[1.6] tracking-[-0.36px] mt-4 max-md:max-w-full text-left max-md:text-sm max-md:tracking-[-0.2px]">
        {description}
      </div>
    </button>
  );
};
