import React from 'react';

interface ImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, className = '' }) => {
  return (
    <div
      className={`flex h-[720px] flex-col justify-center items-center gap-10 flex-[1_0_0] relative p-10 rounded-2xl max-md:h-[400px] max-md:p-6 max-sm:h-[300px] max-sm:p-4 bg-[#FFFFFF29] ${className}`}
    >
      <figure className="flex flex-col justify-center items-center flex-[1_0_0] max-md:flex-auto self-stretch shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="w-[959px] h-[640px] aspect-[958.84/640.00] absolute top-0 max-md:w-full max-md:h-full max-md:relative max-md:object-cover max-md:left-0 max-md:top-0"
        />
      </figure>
    </div>
  );
};
