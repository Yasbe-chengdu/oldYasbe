import React from 'react';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  label: String;
  onClick?: () => void;
  className?: string;
  black?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, black, className }) => {
  return (
    <div data-aos="zoom-in" className={cn('flex min-h-14 items-stretch gap-[-14px] mt-8', className)}>
      <Button onClick={onClick} variant="yellow" size="hero" className="text-lg">
        {label}
      </Button>
      <div
        className={cn(
          black ? 'bg-black' : 'bg-white',
          'justify-center items-center aspect-[1/1] flex min-h-10 gap-2.5 w-10 h-10 my-auto px-2 rounded-[60px] -ml-4',
        )}
      >
        <ArrowUpRight
          className={cn(
            black ? 'text-white' : 'text-black',
            'aspect-[0.96] object-contain w-[22px] self-stretch my-auto',
          )}
        />
      </div>
    </div>
  );
};
