import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex justify-center items-center gap-2.5 relative bg-[#FFCA00] p-4 rounded-[60px] max-sm:p-3 ${className}`}
    >
      {children}
    </div>
  );
};
