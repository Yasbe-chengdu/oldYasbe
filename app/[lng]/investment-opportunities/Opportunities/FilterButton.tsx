import { ChevronDown, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FilterButtonProps {
  label: string;
  options?: Option[];
  selectedValues?: string[];
  onSelect?: (value: string) => void;
  onRemove?: (value: string) => void;
  className?: string;
  multiSelect?: boolean;
  hasDropdown?: boolean;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  options = [],
  selectedValues = [],
  onSelect,
  onRemove,
  className = '',
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (option: Option) => {
    if (onSelect) {
      onSelect(option.value);
      if (!multiSelect) {
        closeDropdown();
      }
    }
  };

  const handleRemove = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hasSelection = selectedValues.length > 0;

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && toggleDropdown()}
        className={`items-center flex min-h-12 gap-2.5 bg-[#F7F7F7] px-[18px] py-[11px] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer ${className}`}
      >
        <span
          className={`text-center text-base leading-[1.6] tracking-[-0.32px] ${
            hasSelection ? 'text-[#777]' : 'text-[#777]'
          }`}
        >
          {label}
        </span>
        <div className="flex items-center gap-1">
          {options.length > 0 && (
            <ChevronDown
              className={`w-4 h-4 ${hasSelection ? 'text-[#1C1C1C]' : 'text-[#6F6F6F]'} transition-transform ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          )}
        </div>
      </div>

      {isOpen && options.length > 0 && (
        <div className="absolute mt-1 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option, idx) => {
              const isSelected = selectedValues.includes(option.value);
              const key = option.value ? `${option.value}-${idx}` : `option-${idx}`;
              return (
                <div
                  key={key}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between z-[9999] ${
                    isSelected ? 'bg-gray-50' : ''
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && <span className="text-[#FFCA00]">✓</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
