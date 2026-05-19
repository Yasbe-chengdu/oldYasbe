import React from 'react';
import { CountryItem } from './CountryItem';

const countries = [
  'Austria',
  'Finland',
  'Italy',
  'Netherlands',
  'Monaco',
  'Singapore',
  'Belgium',
  'France',
  'Latvia',
  'Portugal',
  'San Marino',
  'Hongkong',
  'Croatia',
  'Germany',
  'Lithuania',
  'Slovakia',
  'Vatican City',
  'Japan',
  'Cyprus',
  'Greece',
  'Luxembourg',
  'Slovenia',
  'United Kingdom',
  'South Korea',
  'Estonia',
  'Ireland',
  'Malta',
  'Spain',
  'United States',
  'Australia',
  'Switzerland',
];

export const CountryList: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-6 self-stretch">
      <header className="self-stretch text-[#A5A5A5] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:tracking-[-0.32px]">
        Operating across these countries :
      </header>
      <div className="flex items-start gap-10 self-stretch flex-wrap max-md:gap-[30px] max-sm:flex-col max-sm:gap-5">
        {countries.map((country, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col items-start gap-3 flex-[1_0_0] min-w-[150px] max-md:min-w-[120px] max-sm:w-full max-sm:min-w-[unset]"
          >
            <CountryItem key={columnIndex} name={country} />
          </div>
        ))}
      </div>
    </section>
  );
};
