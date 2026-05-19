import React from 'react';

interface CryptoIconProps {
  icon: React.ReactNode;
  alt: string;
  className?: string;
}

export const CryptoIcon: React.FC<CryptoIconProps> = ({ icon, alt, className = '' }) => {
  return (
    <div
      className={`flex justify-center items-center gap-2.5 border-neutral-50 relative bg-[rgba(255,255,255,0.03)] rounded-[136.261px] border-[0.973px] border-solid ${className}`}
    >
      {icon}
    </div>
  );
};
