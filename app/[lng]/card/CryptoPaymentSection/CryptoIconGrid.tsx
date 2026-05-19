import React from 'react';
import { CryptoIcon } from './CryptoIcon';

interface CryptoIconData {
  icon: React.ReactNode;
  alt: string;
}

interface CryptoIconGridProps {
  icons: CryptoIconData[];
  layout: 'square' | 'horizontal';
  className?: string;
}

export const CryptoIconGrid: React.FC<CryptoIconGridProps> = ({ icons, layout, className = '' }) => {
  const gridClassName =
    layout === 'square'
      ? 'flex w-[296px] flex-col justify-center items-center gap-10 absolute h-[296px] left-[127px] top-[82px] max-md:w-[250px] max-md:h-[250px] max-md:left-[95px] max-md:top-[60px] max-sm:w-[200px] max-sm:h-[200px] max-sm:gap-[30px] max-sm:left-[70px] max-sm:top-10'
      : 'flex flex-col items-start gap-10 absolute w-[424px] h-[296px] left-[63px] top-[82px] max-md:w-[360px] max-md:h-[250px] max-md:left-10 max-md:top-[60px] max-sm:w-[280px] max-sm:h-[200px] max-sm:gap-[30px] max-sm:left-5 max-sm:top-10';

  const rowClassName =
    layout === 'square'
      ? 'flex items-center gap-10 w-full relative max-md:gap-[30px] max-sm:gap-5'
      : 'flex items-center gap-5 w-full relative max-md:gap-[15px] max-sm:gap-2.5';

  const iconClassName =
    'w-32 h-32 p-1 max-md:w-[100px] max-md:h-[100px] max-md:p-5 max-sm:w-20 max-sm:h-20 max-sm:p-[15px]';

  const renderIcons = () => {
    if (layout === 'square') {
      return (
        <>
          <div className={rowClassName}>
            {icons.slice(0, 2).map((iconData, index) => (
              <CryptoIcon key={index} icon={iconData.icon} alt={iconData.alt} className={iconClassName} />
            ))}
          </div>
          <div className={rowClassName}>
            {icons.slice(2, 4).map((iconData, index) => (
              <CryptoIcon key={index + 2} icon={iconData.icon} alt={iconData.alt} className={iconClassName} />
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        <div className={rowClassName}>
          {icons.slice(0, 3).map((iconData, index) => (
            <CryptoIcon key={index} icon={iconData.icon} alt={iconData.alt} className={iconClassName} />
          ))}
        </div>
        <div className={rowClassName}>
          {icons.slice(3, 6).map((iconData, index) => (
            <CryptoIcon key={index + 3} icon={iconData.icon} alt={iconData.alt} className={iconClassName} />
          ))}
        </div>
      </>
    );
  };

  return <div className={`${gridClassName} ${className}`}>{renderIcons()}</div>;
};
