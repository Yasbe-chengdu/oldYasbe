import React from 'react';

interface PolicyHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const PolicyHeader: React.FC<PolicyHeaderProps> = ({ children, className = '' }) => {
  return (
    <h1
      className={`self-stretch text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] relative max-md:text-2xl max-md:tracking-[-0.48px] max-sm:text-xl max-sm:tracking-[-0.4px] ${className}`}
    >
      {children}
    </h1>
  );
};
