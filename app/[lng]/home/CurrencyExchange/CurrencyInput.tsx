import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface Currency {
  code: string;
  name: string;
  flag?: React.ReactNode;
  symbol?: React.ReactNode;
}

interface CurrencyInputProps {
  label: string;
  value: string;
  currency: Currency;
  onValueChange: (value: string) => void;
  onCurrencyChange: (currency: Currency) => void;
  currencies: Currency[];
  readOnly?: boolean;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  currency,
  onValueChange,
  onCurrencyChange,
  currencies,
  readOnly = false,
}) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCurrencies = currencies.filter(
    curr =>
      curr.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curr.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCurrencySelect = (selectedCurrency: Currency) => {
    onCurrencyChange(selectedCurrency);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full relative">
      <label className="text-[#1C1C1C] text-sm font-medium leading-[22.4px] tracking-[-0.28px]">{label}</label>
      <div className="flex h-12 items-center gap-2 w-full border box-border px-4 py-2 rounded-lg border-solid border-[#D6D6D6] max-sm:h-11 max-sm:px-3 max-sm:py-2">
        <input
          type="text"
          value={value}
          onChange={e => onValueChange(e.target.value)}
          readOnly={readOnly}
          className="flex-1 text-[#1C1C1C] text-base font-semibold leading-[25.6px] tracking-[-0.32px] bg-transparent border-none outline-none"
          aria-label={`${label} amount`}
        />
        <div
          ref={buttonRef}
          className="flex items-center gap-4 max-sm:gap-2 max-sm:ml-[-40px] cursor-pointer"
          onClick={handleTogglePopup}
        >
          <div className="flex items-center gap-2 max-sm:gap-1 max-sm:ml-[-40px]">
            {currency.flag && <div className="w-6 h-6 flex items-center justify-center">{currency.flag}</div>}
            <span className="text-[#1C1C1C] text-base font-semibold leading-[25.6px] tracking-[-0.32px] max-sm:text-sm">
              {currency.code}
            </span>
          </div>
          <button
            type="button"
            className="flex items-center justify-center hover:bg-gray-100 rounded p-1 transition-colors"
            aria-label={`Select ${label} currency`}
          >
            <ChevronDown className={`w-4 h-4 text-[#6F6F6F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={popupRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-hidden"
        >
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search currencies..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map(curr => (
                <button
                  key={curr.code}
                  onClick={() => handleCurrencySelect(curr)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    curr.code === currency.code ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {curr.flag || (
                      <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
                        {curr.code}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-sm">{curr.code}</span>
                    <span className="text-xs text-gray-500">{curr.name}</span>
                  </div>
                  {curr.code === currency.code && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <p>{t('noCurrenciesFound')}</p>
                <p className="text-sm">{t('tryDifferentSearchTerm')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
