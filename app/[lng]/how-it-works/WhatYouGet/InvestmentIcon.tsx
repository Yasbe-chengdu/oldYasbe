import Image from 'next/image';
import React from 'react';

interface InvestmentIconProps {
  type: 'equity' | 'future-equity' | 'digital-assets' | 'debt' | 'revenue-share';
  className?: string;
}

export const InvestmentIcon: React.FC<InvestmentIconProps> = ({ type, className = '' }) => {
  const getIconSVG = () => {
    switch (type) {
      case 'equity':
        return (
          <Image
            src="/icons/ChartPieSlice.svg"
            alt="Equity Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'future-equity':
        return (
          <Image
            src="/icons/HourglassHigh.svg"
            alt="Equity Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'digital-assets':
        return (
          <Image
            src="/icons/CurrencyBtc.svg"
            alt="Equity Icon"
            width={32}
            height={32}
            className={`w-8 h-8 ${className}`}
          />
        );
      case 'debt':
        return (
          <Image src="/icons/Coins.svg" alt="Equity Icon" width={32} height={32} className={`w-8 h-8 ${className}`} />
        );
      case 'revenue-share':
        return (
          <Image src="/icons/Receipt.svg" alt="Equity Icon" width={32} height={32} className={`w-8 h-8 ${className}`} />
        );
      default:
        return null;
    }
  };

  return <div className="flex justify-center items-center">{getIconSVG()}</div>;
};
