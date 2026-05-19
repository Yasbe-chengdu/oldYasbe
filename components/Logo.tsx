import { cn } from '@/lib/utils';
import React from 'react';

interface Logo {
  className?: string;
}

export const Logo = ({ className }: Logo) => {
  return (
    <div
      className={cn(
        'ml-7 flex relative text-[34px] font-bold whitespace-nowrap tracking-[-1.35px] leading-none w-[108px]',
        className,
      )}
    >
      <img
        src="/images/new-YASBe-image.svg"
        alt=""
        className="absolute -top-28 -left-27 h-[13rem] max-md:-top-21 max-md:-left-17"
      />
    </div>
  );
};
