export interface Language {
  id: string;
  name: string;
  flag: string;
  code: string;
  href: string;
}

export interface LanguageSelectorProps {
  selectedLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
  className?: string;
  classNameTrigger?: string;
}

export interface LanguageOptionProps {
  language: Language;
  isSelected?: boolean;
  onClick: (language: Language) => void;
}

export interface DropdownTriggerProps {
  isOpen: boolean;
  onClick: () => void;
  selectedLanguage: Language;
  className?: string;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  languages: Language[];
  selectedLanguage: Language;
  onLanguageSelect: (language: Language) => void;
}
