import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px]',
        'max-md:text-2xl max-md:tracking-[-0.48px]',
        'max-sm:text-xl max-sm:tracking-[-0.4px]',
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const BodyText: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        'text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px]',
        'max-md:text-base max-md:tracking-[-0.32px]',
        'max-sm:text-sm max-sm:tracking-[-0.28px]',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const ListItem: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px]',
        'max-md:text-base max-md:tracking-[-0.32px]',
        'max-sm:text-sm max-sm:tracking-[-0.28px]',
        className,
      )}
    >
      {children}
    </div>
  );
};
