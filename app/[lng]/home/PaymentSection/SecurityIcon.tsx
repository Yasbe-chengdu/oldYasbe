import Image from 'next/image';
import React from 'react';

interface SecurityIconProps {
  className?: string;
}

export const SecurityIcon: React.FC<SecurityIconProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <Image
      src="/icons/shield-tick.svg"
      alt="Security Icon"
      width={32}
      height={32}
      className={`caret-icon ${className} w-[32px] h-[32px]`}
      priority
    />
  );
};
