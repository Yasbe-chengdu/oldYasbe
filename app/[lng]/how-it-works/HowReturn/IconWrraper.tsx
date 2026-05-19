import React from 'react';

interface IconWrapperProps {
  src: string;
  alt: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ src, alt }) => {
  return (
    <div className="justify-center items-center self-stretch flex gap-2.5 w-16 h-16 bg-[#FFCA00] my-auto px-4 rounded-[60px]">
      <img src={src} alt={alt} className="aspect-[1] object-contain w-8 self-stretch my-0" />
    </div>
  );
};
