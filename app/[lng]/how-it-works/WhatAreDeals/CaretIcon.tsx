import Image from 'next/image';
import React from 'react';

interface CaretIconProps {
  direction: 'up' | 'down';
  className?: string;
}

export const CaretIcon: React.FC<CaretIconProps> = ({ direction, className = '' }) => {
  if (direction === 'up') {
    return (
      <Image
        src="/icons/arrow-up.png"
        alt="Caret Icon"
        width={32}
        height={32}
        className={`caret-icon ${className} w-[32px] h-[32px]`}
        priority
      />
    );
  }

  return (
    <Image
      src="/icons/arrow-down.png"
      alt="Caret Icon"
      width={32}
      height={32}
      className={`caret-icon ${className} w-[32px] h-[32px]`}
      priority
    />
  );
};
