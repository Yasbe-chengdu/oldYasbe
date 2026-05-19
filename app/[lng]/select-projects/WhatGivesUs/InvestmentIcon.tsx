import Image from 'next/image';
import React from 'react';

interface InvestmentIconProps {
  type: 'equity' | 'future-equity' | 'digital-assets' | 'debt';
  className?: string;
}

export const InvestmentIcon: React.FC<InvestmentIconProps> = ({ type, className = '' }) => {
  const getIconSVG = () => {
    switch (type) {
      case 'equity':
        return (
          <Image
            src="/icons/BagSimple.svg"
            alt="BagSimple Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'future-equity':
        return (
          <Image
            src="/icons/GraduationCap.svg"
            alt="HourglassHigh Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'digital-assets':
        return (
          <Image
            src="/icons/CircleWavyCheck.svg"
            alt="BagSimple Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'debt':
        return (
          <Image
            src="/icons/Money.svg"
            alt="BagSimple Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
    }
  };

  return <div className="flex justify-center items-center">{getIconSVG()}</div>;
};
