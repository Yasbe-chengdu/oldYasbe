import React from 'react';
import { DefinitionItem } from '../yasbe-platform-agreement/DefinitionItem';
import { ResponseTimeTable } from '../yasbe-platform-agreement/ResponseTimeTable';
import { ServiceTable } from '../yasbe-platform-agreement/ServiceTable';
import { SectionHeader } from '../yasbe-platform-agreement/SectionHeader';
import { SubSection } from '../yasbe-platform-agreement/SubSection';
import { ContentSection } from '../yasbe-platform-agreement/ContentSection';
import { BulletPoint, PolicyText } from '../cookies-policy/PolicySection';

export default function YasbePlatform() {
  return (
    <main className="flex w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
      <ContentSection title="Privacy Policy">
        <main className="flex w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full max-md:order-1">
          <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
            This Privacy Policy is applicable to customers of YASBe Global.
          </p>
        </main>
      </ContentSection>

      <ContentSection title="1. Definition">
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          "Cookies" refer to small text files that are placed on your computer or mobile device when you browse
          websites. 
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          "We," "Us," or "Our" refer to YASBe Global (“YASBe”).
        </p>
      </ContentSection>
      <ContentSection title="2. Introduction">
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          This Privacy Policy, issued on 1 August 2025, forms a part of the legal agreement between you and us. The
          other components of this legal agreement include our Platform Agreement, our Anti-Money Laundering Policy, and
          the terms governing any additional services provided by us to you.
        </p>
      </ContentSection>
      <ContentSection title="3. Privacy Policy">
        <SectionHeader number="3.1." title="Collection of Information " />
        <SubSection number="3.1.1.">
          We understand the importance of protecting your privacy. In order to provide you with our services, we need to
          collect certain personal information from you and obtain your consent regarding the handling of such
          information. Upon request, you must provide us with all necessary information regarding your financials,
          business affairs, and identity, which may also be used for analytical or secondary purposes such as archiving,
          audits, and statistical or historical analysis. 
        </SubSection>
        <SubSection number="3.1.2.">
          In addition to personal data required for processing your interactions, we may also use this data to inform
          you about changes or additions to our services and provide information related to foreign exchange rates.
          Additionally, we collect non-personal data. 
        </SubSection>
        <SubSection number="3.1.3.">
          "Non-Personal Data" refers to statistical and analytical information gathered on an aggregate basis from all
          visitors to our website. This non-personal data includes information that cannot be used to identify or
          contact you, such as demographic information, clipped or anonymized user IP addresses, browser types, and
          other anonymous statistical data regarding website usage.
        </SubSection>
        <SectionHeader number="3.2." title="Use of Information " />
        <SubSection number="3.2.1.">
          By using our services, you consent to our collection, use, disclosure, storage, and processing of your
          personal information in accordance with this Privacy Policy, our Terms and Conditions, and our Anti-Money
          Laundering Policy. We may also disclose and process your personal information to our affiliates and trusted
          business partners for processing based on our instructions and in compliance with appropriate confidentiality
          and security measures. For example, we may engage banking partners to facilitate payment services. 
        </SubSection>
        <SubSection number="3.2.2.">
          When providing personal data of living individuals, you must ensure that you have obtained due consent from
          the individuals regarding our collection, use, disclosure, and processing of their personal data in accordance
          with this Privacy Policy, our Terms and Conditions, and our Anti-Money Laundering Policy. We assure you that
          we will only use personal data as required by law or permitted under applicable data protection legislation. 
        </SubSection>
        <SubSection number="3.2.3.">
          In the case of corporate data provided solely associated with a corporate entity and not directly linked to
          personal data of living individuals ("Corporate Data"), we will fulfill our obligations regarding the
          acquisition and processing of such Corporate Data. You understand that we may use this Corporate Data for the
          following purposes:
          <BulletPoint>Delivering payment services to you.</BulletPoint>
          <BulletPoint>
            Promoting and marketing our services and those of our third-party partners to the corporate entities
            mentioned in the Corporate Data.
          </BulletPoint>
        </SubSection>
        <SectionHeader number="3.3." title="Identity Verification " />
        <DefinitionItem
          number=""
          term=""
          definition="To ensure a secure relationship, you will be required to provide evidence to verify your identity. If we are not satisfied with the information you provide, we may request additional details. We reserve the right to reject your application and withhold the full range of transaction services until satisfactory verification procedures have been completed."
        />
        <SectionHeader number="3.4." title="Identity Verification " />
        <DefinitionItem
          number=""
          term=""
          definition="To ensure a secure relationship, you will be required to provide evidence to verify your identity. If we are not satisfied with the information you provide, we may request additional details. We reserve the right to reject your application and withhold the full range of transaction services until satisfactory verification procedures have been completed."
        />
        <SectionHeader number="3.5." title="Information Accuracy " />
        <DefinitionItem
          number=""
          term=""
          definition="You are responsible for ensuring that all information provided to us is accurate and up to date at all times. Any changes must be promptly communicated to us. You have the right to request a copy of your personal information, review it, and correct or modify it if necessary. We will respond to your request as soon as reasonably practicable."
        />
        <SectionHeader number="3.6." title="Protection of Information " />
        <DefinitionItem
          number=""
          term=""
          definition="We collect and store information electronically, taking reasonable steps to protect it from unauthorized access, misuse, loss, or destruction. We are not liable for any loss or damage you may incur as a result of the loss or theft of information held by us."
        />
        <SectionHeader number="3.7." title="Retention of Information " />
        <DefinitionItem
          number=""
          term=""
          definition="Any information collected by us, including telephone recordings or transcripts, may be retained or destroyed in accordance with applicable Data Protection Legislation or regulatory requirements as may be amended from time to time."
        />
        <SectionHeader number="3.8." title="Recording Phone Conversations " />
        <DefinitionItem
          number=""
          term=""
          definition="Both parties (you and us) consent to the electronic recording of telephone conversations without an automatic warning tone. These recordings may be used as evidence in any dispute or anticipated dispute between the parties or related to any dealings between the parties."
        />
        <SectionHeader number="3.9." title="Cookies " />
        <DefinitionItem
          number=""
          term=""
          definition="Our Cookies Policy provides detailed information about the cookies used on our website. Please note that our cookies do not store any personally identifiable information. You have the option to disable cookies by adjusting your internet browser settings. However, please be aware that disabling cookies may impact the performance of many websites, including ours."
        />
        <SectionHeader number="3.10." title="Unsubscribe " />
        <DefinitionItem
          number=""
          term=""
          definition="If you wish to revoke consent for us to retain or use your information or if you want to revise or update your information, please contact us. We will remove or amend the information in accordance with applicable legislative and regulatory requirements."
        />
      </ContentSection>
    </main>
  );
}
