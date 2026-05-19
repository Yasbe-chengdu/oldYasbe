import React, { useState, useRef, useEffect } from 'react';
import { Language, LanguageSelectorProps } from './types';
import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import Image from 'next/image';

const languages: Language[] = [
  {
    id: 'en',
    name: 'English',
    code: 'en',
    href: '/en/',
    flag: '/flags/uk.svg',
  },
  {
    id: 'zh-cn',
    name: '中文',
    code: 'zh',
    href: '/cn/',
    flag: '/flags/china.svg',
  },
  {
    id: 'zh-hk',
    name: '繁体中文',
    code: 'zh-hk',
    href: '/hk/',
    flag: '/flags/hong-kong.svg',
  },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage = languages[0],
  onLanguageChange,
  className = '',
  classNameTrigger = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(selectedLanguage);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center relative 
        gap-3 
        max-md:gap-2 
        max-md:w-full max-md:justify-center max-md:px-3 max-md:py-2 
        md:gap-4 md:w-auto md:justify-start 
        ${className}`}
    >
      <div className="shrink-0">
        <Image
          src="/flags/globe-blue.svg"
          alt="Globe Icon"
          width={19}
          height={18}
          className="w-[18px] h-[18px] max-md:w-[16px] max-md:h-[16px]"
        />
      </div>

      <DropdownTrigger
        isOpen={isOpen}
        onClick={toggleDropdown}
        selectedLanguage={currentLanguage}
        className={classNameTrigger}
      />

      <DropdownMenu
        isOpen={isOpen}
        languages={languages}
        selectedLanguage={currentLanguage}
        onLanguageSelect={handleLanguageSelect}
      />
    </div>
  );
};

export default LanguageSelector;
