import Image from 'next/image';
import React from 'react';

interface StablecoinIconProps {
  className?: string;
}

export const StablecoinIcon: React.FC<StablecoinIconProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <Image
      src="/icons/hand-ball.svg"
      alt="Caret Icon"
      width={32}
      height={32}
      className={`caret-icon ${className} w-[32px] h-[32px]`}
      priority
    />
  );
};
