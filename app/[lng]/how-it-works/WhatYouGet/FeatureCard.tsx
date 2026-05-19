import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description?: string;
  iconBgColor: string;
  titleColor: string;
  isHighlighted?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBgColor,
  titleColor,
  isHighlighted = false,
}) => {
  return (
    <article
      className={`flex flex-col items-start gap-6 self-stretch relative ${
        isHighlighted ? 'bg-[#F7F7F7]' : ''
      } mb-6 p-6 rounded-2xl max-md:gap-[60px] max-md:px-8 max-md:py-12 max-sm:gap-10 max-sm:p-5`}
    >
      <header className="flex items-center gap-4 relative max-md:gap-[60px] max-md:max-w-none max-md:px-8 max-md:py-12 max-sm:gap-3 max-sm:px-6 max-sm:py-8">
        <div
          className="flex justify-center items-center gap-2.5 relative p-4 rounded-[60px] max-md:gap-[60px] max-md:max-w-none max-md:px-8 max-md:py-12 max-sm:gap-10 max-sm:p-3"
          style={{ backgroundColor: iconBgColor }}
          role="img"
          aria-label={`${title} icon`}
        >
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <h3
          className="text-2xl font-semibold leading-[28.8px] tracking-[-0.96px] relative max-md:gap-10 max-md:flex-col max-md:h-[500px] max-md:p-8 max-sm:gap-8 max-sm:h-[400px] max-sm:p-6"
          style={{ color: titleColor }}
        >
          <span className="font-bold text-2xl max-md:text-xl max-sm:text-lg">{title}</span>
        </h3>
      </header>
      {description && (
        <div className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:gap-10 max-md:flex-col max-md:h-[500px] max-md:p-8 max-sm:gap-8 max-sm:h-[400px] max-sm:p-6">
          <p className="font-normal text-lg text-[rgba(119,119,119,1)]">{description}</p>
        </div>
      )}
    </article>
  );
};
