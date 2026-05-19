'use client';
import React, { useState } from 'react';
import { FilterButton } from './FilterButton';
import { SearchIcon } from 'lucide-react';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

interface SearchFiltersProps {
  onSearchChange?: (term: string) => void;
  onSectorChange?: (sector: string) => void;
  onTypeChange?: (type: string) => void;
  onSortChange?: (sort: string) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearchChange,
  onSectorChange,
  onTypeChange,
  onSortChange,
}) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'investment-opportunities');
  const [searchTerm, setSearchTerm] = useState('');

  const sectorOptions = [t('realEstate'), t('technology'), t('finance'), t('energy'), t('healthcare')].map(
    (opt: string) => ({
      label: opt,
      value: opt,
    }),
  );
  const typeOptions = [t('debt'), t('equity'), t('hybrid'), t('venture capital')].map((opt: string) => ({
    label: opt,
    value: opt,
  }));
  const sortOptions = [t('newest'), t('oldest'), t('highest raised'), t('lowest min investment')].map(
    (opt: string) => ({
      label: opt,
      value: opt,
    }),
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const handleSectorSelect = (option: string) => {
    if (onSectorChange) onSectorChange(option);
  };

  const handleTypeSelect = (option: string) => {
    if (onTypeChange) onTypeChange(option);
  };

  const handleSortSelect = (option: string) => {
    if (onSortChange) onSortChange(option);
  };

  return (
    <div className="flex w-full items-center gap-3 flex-wrap mt-10 max-md:max-w-full">
      <div className="items-center flex min-w-60 min-h-12 gap-2 text-base text-[#777] font-medium text-center tracking-[-0.32px] leading-[1.6] flex-1 shrink basis-[0%] bg-[#F7F7F7] px-[18px] py-[11px] rounded-lg">
        <SearchIcon className="w-4 h-4 text-[#6F6F6F]" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={t('search')}
          className="text-[#777] bg-transparent border-none outline-none flex-1 placeholder:text-[#777]"
        />
      </div>

      <div className="max-md:w-[30%] relative z-30">
        <FilterButton label={t('sector')} hasDropdown={true} options={sectorOptions} onSelect={handleSectorSelect} />
      </div>

      <div className="max-md:w-[27%] relative z-20">
        <FilterButton label={t('type')} hasDropdown={true} options={typeOptions} onSelect={handleTypeSelect} />
      </div>

      <div className="max-md:w-[36%] relative z-10">
        <FilterButton label={t('sortBy')} hasDropdown={true} options={sortOptions} onSelect={handleSortSelect} />
      </div>
    </div>
  );
};
