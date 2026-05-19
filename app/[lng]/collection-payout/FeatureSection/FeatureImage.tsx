import React from 'react';

interface FeatureImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({ src, alt, className = '' }) => {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        className={`h-[460px] w-full object-cover rounded-2xl max-md:h-[300px] max-sm:h-60 ${className}`}
        loading="lazy"
      />
    </figure>
  );
};
