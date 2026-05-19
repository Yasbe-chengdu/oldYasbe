import React from 'react';
import { IntroSection } from './IntroSection';
import { PolicySection } from './PolicySection';

const policyData = [
  {
    title: '1. Illegal or Unlawful Activities',
    items: [
      'Sale or distribution of illegal drugs, substances intended to replicate such drugs, or equipment used to manufacture or consume them.',
      'Services that provide falsified identification or references.',
      'Businesses or organizations that promote, incite, or glorify unlawful violence or physical harm—whether against individuals, property, or groups defined by race, religion, gender, sexual orientation, disability, national origin, or any other protected characteristic.',
      'Any other activity prohibited by applicable laws or regulations in the jurisdictions where the business operates or markets its services.',
    ],
  },
  {
    title: '2. Unlicensed Financial Services',
    items: [
      'Operation of unlicensed money transmission services or digital asset exchanges.',
      'Services that facilitate the anonymization or obfuscation of cryptocurrency transactions, including mixers, tumblers, and similar technologies.',
    ],
  },
  {
    title: '3. Intellectual Property Violations',
    items: [
      'Unauthorized reproduction, distribution, or sale of copyrighted content such as music, films, software, or other protected materials.',
      'Sale of counterfeit or illegally imported/exported goods.',
      'Unauthorized use or resale of branded or designer products.',
      'Products or services that infringe trademarks, patents, copyrights, trade secrets, privacy rights, or other proprietary interests.',
      'Activities considered deceptive, unfair, or predatory in nature.',
    ],
  },
  {
    title: '4. Deceptive or Predatory Schemes',
    items: [
      '"Get rich quick" offerings, including investment programs that guarantee outsized returns with little or no risk, or that use misleading claims, fabricated testimonials, or aggressive upselling tactics.',
      'Businesses offering "no value-added" resale of goods or services, including government services resold without authorization.',
      'Sale of fraudulent online traffic, followers, or engagement metrics.',
      'Negative option or deceptive telemarketing practices.',
      'Predatory mortgage lending, credit repair, or investment schemes requiring little or no upfront capital.',
      'Remote technical support scams, pay-to-remove mugshot sites, essay mills, chain letters, or door-to-door sales conducted deceptively.',
      'Any other activity deemed by YASBe to be misleading, exploitative, or unfair to consumers.',
    ],
  },
  {
    title: '5. Adult-Oriented Content and Services',
    items: [
      'Pornographic material or explicit content in any medium, including imagery, video, or written works.',
      'Prostitution, escort services, sexual massages, live adult chat, or pay-per-view sexual content.',
      'Adult entertainment venues such as strip clubs or topless bars.',
      'Online dating platforms that promote sexual services.',
    ],
  },
  {
    title: '6. Certain Legal Services',
    items: [
      'Collection of client funds by law firms for purposes unrelated to payment of legal fees.',
      'Bankruptcy representation or related services.',
      'Bail bond services.',
    ],
  },
  {
    title: '7. Weapons, Explosives, and Hazardous Materials',
    items: [
      'Firearms, ammunition, explosives, fireworks, or similar materials.',
      'Toxic, flammable, radioactive, or otherwise hazardous substances, including peptides and research chemicals.',
      'Precious metals sold in a manner that raises regulatory or compliance concerns.',
    ],
  },
  {
    title: '8. Gambling and High-Risk Cash Businesses',
    items: [
      'Games of chance or skill where money or material prizes are awarded, including casinos, sweepstakes, fantasy sports leagues, and sports betting.',
      'Services offering sports forecasting or odds-making for value.',
      'Lotteries and bidding-fee auctions.',
      'Cryptocurrency ATMs located in high-risk jurisdictions.',
      'Other cash-intensive businesses considered high-risk under applicable laws or industry standards.',
    ],
  },
  {
    title: '9. Cannabis and Related Products',
    items: [
      'Sale, distribution, or promotion of cannabis, marijuana, or related products.',
      'Operation of cannabis dispensaries or businesses directly involved in the cannabis industry.',
    ],
  },
];

export const Container: React.FC = () => {
  return (
    <main className="max-w-full flex w-[847px] flex-col items-start gap-12 relative box-border mx-auto my-0 px-5 py-0 max-md:max-w-[991px] max-md:w-full max-md:gap-9 max-md:px-4 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-8 max-sm:px-3 max-sm:py-0">
      <IntroSection />

      {policyData.map((section, index) => (
        <PolicySection key={index} title={section.title} items={section.items} />
      ))}
    </main>
  );
};
