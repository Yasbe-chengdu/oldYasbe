import React from 'react';
import { PageTitle, BodyText } from './Typography';
import { CountryList, restrictedCountriesColumn1, restrictedCountriesColumn2 } from './CountryList';

export const RestrictedJurisdictions: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="max-w-full flex w-[847px] flex-col items-start gap-12 relative box-border mx-auto my-0 px-5 py-0 max-md:max-w-[991px] max-md:w-full max-md:gap-8 max-md:px-4 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-6 max-sm:px-3 max-sm:py-0">
        <section className="flex flex-col items-start gap-6 self-stretch relative">
          <PageTitle className="self-stretch">Restricted Jurisdictions</PageTitle>

          <article className="flex flex-col justify-center items-center gap-4 self-stretch relative">
            <BodyText className="self-stretch">
              There are a few jurisdictions that YASBe cannot provide services to. This means that
            </BodyText>

            <BodyText className="self-stretch">1. We cannot onboard entities located in these jurisdictions.</BodyText>

            <BodyText className="self-stretch">
              2. We cannot onboard entities that have Ultimate Beneficiary Owners (UBOs) or Directors located in these
              jurisdictions.
            </BodyText>

            <BodyText className="self-stretch">
              3. We cannot send or receive funds to or from these jurisdictions.
            </BodyText>

            <BodyText className="self-stretch">
              The following list is updated regularly based on changing regulatory and partner requirements.
            </BodyText>

            <div className="flex items-start gap-6 self-stretch relative max-md:gap-4 max-sm:flex-col max-sm:gap-3">
              <CountryList countries={restrictedCountriesColumn1} />
              <CountryList countries={restrictedCountriesColumn2} />
            </div>
          </article>
        </section>
      </main>
    </>
  );
};
