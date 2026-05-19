import React from 'react';
import { ListItem } from './Typography';

interface Country {
  name: string;
  id: string;
}

interface CountryListProps {
  countries: Country[];
  className?: string;
}

export const CountryList: React.FC<CountryListProps> = ({ countries, className }) => {
  return (
    <div className={`flex flex-col items-start gap-4 flex-[2_0_0] relative max-sm:gap-3 ${className || ''}`}>
      {countries.map(country => (
        <ListItem key={country.id}>• {country.name}</ListItem>
      ))}
    </div>
  );
};

export const restrictedCountriesColumn1: Country[] = [
  { id: 'abkhazia', name: 'Abkhazia' },
  { id: 'afghanistan', name: 'Afghanistan' },
  { id: 'albania', name: 'Albania' },
  { id: 'angola', name: 'Angola' },
  { id: 'belarus', name: 'Belarus' },
  { id: 'bosnia-herzegovina', name: 'Bosnia and Herzegovina' },
  { id: 'burma-myanmar', name: 'Burma (Myanmar)' },
  { id: 'burundi', name: 'Burundi' },
  { id: 'central-african-republic', name: 'Central African Republic' },
  { id: 'cuba', name: 'Cuba' },
  { id: 'north-korea', name: "Democratic People's Republic of Korea (North Korea)" },
  { id: 'democratic-republic-congo', name: 'Democratic Republic of the Congo' },
  { id: 'ethiopia', name: 'Ethiopia' },
  { id: 'eritrea', name: 'Eritrea' },
  { id: 'guinea', name: 'Guinea' },
  { id: 'guinea-bissau', name: 'Guinea-Bissau' },
  { id: 'haiti', name: 'Haiti' },
  { id: 'iran', name: 'Iran' },
  { id: 'iraq', name: 'Iraq' },
  { id: 'ivory-coast', name: "Ivory Coast (Cote D'Ivoire)" },
  { id: 'kosovo', name: 'Kosovo' },
  { id: 'lebanon', name: 'Lebanon' },
];

export const restrictedCountriesColumn2: Country[] = [
  { id: 'liberia', name: 'Liberia' },
  { id: 'libya', name: 'Libya' },
  { id: 'macedonia', name: 'Macedonia' },
  { id: 'mali', name: 'Mali' },
  { id: 'myanmar-burma', name: 'Myanmar (Burma)' },
  { id: 'nagorno-karabakh', name: 'Nagorno-Karabakh' },
  { id: 'nicaragua', name: 'Nicaragua' },
  { id: 'northern-cyprus', name: 'Northern Cyprus' },
  { id: 'pakistan', name: 'Pakistan' },
  { id: 'russia', name: 'Russia' },
  { id: 'sahrawi-arab-democratic-republic', name: 'Sahrawi Arab Democratic Republic' },
  { id: 'somalia', name: 'Somalia' },
  { id: 'somaliland', name: 'Somaliland' },
  { id: 'south-ossetia', name: 'South Ossetia' },
  { id: 'south-sudan', name: 'South Sudan' },
  { id: 'sudan', name: 'Sudan' },
  { id: 'syria', name: 'Syria' },
  { id: 'serbia', name: 'Serbia' },
  { id: 'sierra-leone', name: 'Sierra Leone' },
  { id: 'ukraine', name: 'Ukraine' },
  { id: 'venezuela', name: 'Venezuela' },
  { id: 'yemen', name: 'Yemen' },
  { id: 'zimbabwe', name: 'Zimbabwe' },
];
