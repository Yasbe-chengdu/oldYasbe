import React from 'react';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <div
      className={cn(
        'flex h-[804px] flex-col justify-center items-center gap-10 shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.20)] shrink-0 bg-white p-10 rounded-2xl max-md:w-full max-md:max-w-[600px] max-md:h-auto max-md:p-[30px] max-sm:h-auto max-sm:p-5',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-[550px] h-[724px] shrink-0 object-cover rounded-2xl max-md:w-full max-md:h-auto max-md:max-w-[500px] max-sm:w-full max-sm:h-auto max-sm:max-w-full"
      />
    </div>
  );
};
