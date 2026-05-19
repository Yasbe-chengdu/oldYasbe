import React from 'react';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-start gap-6 self-stretch relative">
      <h2 className="self-stretch text-[#1C1C1C] text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] relative max-md:text-2xl max-md:tracking-[-0.48px] max-sm:text-xl max-sm:tracking-[-0.4px]">
        {title}
      </h2>
      <div className="flex flex-col justify-center items-center gap-4 self-stretch relative max-sm:gap-3">
        {children}
      </div>
    </section>
  );
};

interface PolicyTextProps {
  children: React.ReactNode;
  bold?: boolean;
}

export const PolicyText: React.FC<PolicyTextProps> = ({ children, bold = false }) => {
  const fontWeight = bold ? 'font-bold' : 'font-normal';

  return (
    <p
      className={`self-stretch text-[#777] text-lg ${fontWeight} leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]`}
    >
      {children}
    </p>
  );
};

interface BulletPointProps {
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
}

export const BulletPoint: React.FC<BulletPointProps> = ({ children, bold = false, className = '' }) => {
  const fontWeight = bold ? 'font-bold' : 'font-normal';
  return (
    <ul className="list-disc pl-6">
      <li
        className={`self-stretch text-[#777] text-lg ${fontWeight} ${className} leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]`}
      >
        {children}
      </li>
    </ul>
  );
};
