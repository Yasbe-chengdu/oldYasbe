import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-start gap-6 w-full">
      <h2 className="w-full text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] max-md:text-2xl max-sm:text-xl">
        {title}
      </h2>
      <div className="flex flex-col justify-center items-center gap-4 w-full">{children}</div>
    </section>
  );
};
