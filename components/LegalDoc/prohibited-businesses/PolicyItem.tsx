import React from 'react';

interface PolicyItemProps {
  children: React.ReactNode;
}

export const PolicyItem: React.FC<PolicyItemProps> = ({ children }) => {
  return (
    <li className="text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-[15px] max-sm:tracking-[-0.3px]">
      {children}
    </li>
  );
};
