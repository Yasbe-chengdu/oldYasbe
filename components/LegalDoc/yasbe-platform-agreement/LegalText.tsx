import React from 'react';

interface LegalTextProps {
  children: React.ReactNode;
  className?: string;
}

export const LegalText: React.FC<LegalTextProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`font-normal text-lg text-[rgba(119,119,119,1)] 
    max-md:text-base max-sm:text-[14.5px] max-sm:leading-[21px] ${className}`}
    >
      {children}
    </div>
  );
};
