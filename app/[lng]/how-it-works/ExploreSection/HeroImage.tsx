import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-[640px] w-full self-stretch relative object-cover rounded-2xl max-md:h-[480px] max-sm:h-80 max-sm:rounded-xl ${className}`}
    />
  );
};
