import React from 'react';
import Link from 'next/link';
import { DropdownMenuProps } from './types';
import LanguageOption from './LanguageOption';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, languages, selectedLanguage, onLanguageSelect }) => {
  if (!isOpen) return null;

  return (
    <nav
      role="listbox"
      aria-label="Language options"
      className="flex flex-col items-start md:-ml-[6px] gap-4 absolute border z-[1000] bg-[#202020] mt-2 p-4 rounded-lg border-solid border-[#1C1C1C] left-[33.5px] top-full max-md:gap-3.5 max-md:p-3.5 max-md:left-5 max-sm:gap-3 max-sm:w-[calc(100vw_-_40px)] max-sm:max-w-[300px] max-sm:p-3 max-sm:inset-x-2.5 shadow-lg"
    >
      <ul className="w-full space-y-2">
        {languages.map(language => (
          <Link key={language.id} href={language.href} passHref>
            <LanguageOption
              language={language}
              isSelected={selectedLanguage.id === language.id}
              onClick={onLanguageSelect}
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default DropdownMenu;
