import React from 'react';
import { LanguageOptionProps } from './types';
import Image from 'next/image';

const LanguageOption: React.FC<LanguageOptionProps> = ({ language, isSelected = false, onClick }) => {
  const handleClick = () => {
    onClick(language);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(language);
    }
  };

  return (
    <li
      role="option"
      aria-selected={isSelected}
      className="flex items-center gap-3 relative cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="w-5 h-5 relative overflow-hidden rounded">
        <Image src={language.flag} alt={`${language.name} flag`} fill className="object-contain" />
      </div>
      <div className="text-white text-lg font-bold leading-[28.8px] tracking-[-0.36px] relative whitespace-nowrap max-md:text-base max-sm:text-sm">
        {language.name}
      </div>
    </li>
  );
};

export default LanguageOption;
