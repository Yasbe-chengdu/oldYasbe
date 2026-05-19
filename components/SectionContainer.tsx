import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className }) => {
  return (
    <section
      data-aos="fade-up"
      className={cn(
        'flex w-full max-w-[1440px] flex-col items-start gap-2.5 box-border mx-auto my-0 p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10',
        className,
      )}
    >
      {children}
    </section>
  );
};
