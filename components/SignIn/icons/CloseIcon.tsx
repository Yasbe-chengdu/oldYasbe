import React from 'react';

interface CloseIconProps {
  onClick?: () => void;
  className?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ onClick, className = '' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      aria-label="Close"
    >
      <path d="M18.75 5.25L5.25 18.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.75 18.75L5.25 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
