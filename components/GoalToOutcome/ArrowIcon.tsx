import React from 'react';

interface ArrowIconProps {
  className?: string;
  size?: number;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className = 'arrow-icon', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, position: 'relative' }}
    >
      <path d="M6.78906 16H25.4557" stroke="#FFCA00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 6.66602L25.3333 15.9993L16 25.3327"
        stroke="#FFCA00"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
