import React from 'react';
import { ContentSection } from './ContentSection';
import { DefinitionItem } from './DefinitionItem';
import { SubSection } from './SubSection';
import { ResponseTimeTable } from './ResponseTimeTable';
import { ServiceTable } from './ServiceTable';
import { SectionHeader } from './SectionHeader';

export default function YasbePlatform() {
  return (
    <main className="flex w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
      <ContentSection title="YASBe Platform Agreement">
        <main className="flex w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full max-md:order-1">
          <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
            This Platform Agreement (the "Agreement"), including any attached schedules, is entered into by and between
            YASBe ("YASBe") and the entity identified on the Order Form ("Subscriber"). By executing or otherwise
            agreeing to an Order Form that references this Agreement, Subscriber agrees to the terms herein as of the
            date of execution (the "Effective Date"). YASBe and Subscriber may be referred to individually as a "Party"
            and collectively as the "Parties."
          </p>

          <ContentSection title="Platform Agreement">
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              This PLATFORM AGREEMENT, including the attached schedules, which are hereby incorporated (collectively,
              this "Agreement"), is entered into by and between YASBe ("YASBe") and the entity identified on the Order
              Form ("Subscriber"). By executing or otherwise agreeing to an Order Form that references this Agreement,
              Subscriber agrees to the terms of this Agreement, effective as of the date Subscriber executes or
              otherwise agrees to the Order Form (the "Effective Date").
            </p>
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              If Subscriber is entering into this Agreement on behalf of a company or other legal entity, Subscriber
              represents and warrants that it has the authority to bind such entity to this Agreement. YASBe and
              Subscriber may each be referred to individually as a "Party" and collectively as the "Parties."
            </p>
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              WHEREAS, YASBe has developed, operates, and maintains the Platform (as defined below); and WHEREAS,
              Subscriber desires to access the Platform and use the Services (as defined below) on behalf of itself and
              its End Users (as defined below).
            </p>
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              NOW, THEREFORE, for consideration of these promises and for other good and valuable consideration, the
              receipt and sufficiency of which are hereby acknowledged, the Parties hereby agree as follows:
            </p>
          </ContentSection>

          <ContentSection title="Recital and Definitions">
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              The definitions for some of the defined terms used in this Agreement are set forth
            </p>

            <DefinitionItem
              number="1.1."
              term='"Accounts"'
              definition="means Subscriber's and End User's YASBe Accounts and/or accounts held with Safeguarding Institutions."
            />

            <DefinitionItem
              number="1.2."
              term='"Affiliate"'
              definition="means any Person that, directly or indirectly, Controls, is Controlled by, or is under common Control with, a specified Person."
            />

            <DefinitionItem
              number="1.3."
              term='"Anti-Corruption Laws"'
              definition="means all laws, rules, and regulations of any jurisdiction applicable to Subscriber or its Affiliates from time to time concerning or relating to bribery or corruption."
            />

            <DefinitionItem
              number="1.4."
              term='"Anti-Money Laundering Laws"'
              definition="means all laws, rules and regulations of any jurisdiction applicable to YASBe and/or Subscriber or its Affiliates concerning or relating to money.laundering, including the Bank Secrecy Act, 31 U.S.C. § 5311 et seq., and its promulgating regulations, and the applicable sections of the USA Patriot Act and implementing regulations related to know-your-customer and customer identification programs."
            />

            <DefinitionItem number="1.5." term='"API"' definition="means application program interface." />

            <DefinitionItem
              number="1.6."
              term='"Applicable Law"'
              definition="means any applicable national, federal, state, county, and local law, ordinance, regulation, rule, code, and order, including, without limitation, all Privacy Laws."
            />

            <DefinitionItem
              number="1.7."
              term='"Approval" or "approval"'
              definition="means YASBe's approval or consent; provided, however, that the fact that YASBe has provided such approval or consent shall not be construed to mean that: (i) YASBe has performed due diligence with respect to the requested or required approval or consent; (ii) YASBe agrees that the item or information for which approval or consent is being sought complies with any Applicable Law, YASBe's policies, or Subscriber's policies; (iii) YASBe has assumed Subscriber's or any other Person's obligations to comply with all Applicable Laws, YASBe's policies or Subscriber's policies; or (iv) any approval or consent impairs YASBe's rights or remedies under this Agreement, including indemnification rights, for the failure of Subscriber to comply with all Applicable Laws or the terms and conditions of this Agreement. Any approval provided by YASBe under this Agreement is solely for exercising oversight over the Platform and Subscriber's use thereof and does not constitute a waiver of any provision of this Agreement, nor a warranty as to compliance with Applicable Law"
            />

            <DefinitionItem
              number="1.8."
              term='"Authorized Users"'
              definition="means Subscriber's employees and Contractors whom Subscriber authorizes to access and use the Platform; provided, however, that any Contractors' access to and use of the Platform will be limited to their provision of services to Subscriber."
            />

            <DefinitionItem
              number="1.9."
              term='"Confidential Information"'
              definition="means each Party's business and technical information in any form, including without limitation Intellectual Property, End User Data, business and marketing plans, strategies, sales, product and financial data and projections, processes, techniques, trade secrets, know-how, inventions, processes (business, technical, or other), designs, algorithms, source code, customer lists, and the terms of this Agreement. Confidential Information does not include information or data which is: (i) known to the Receiving Party prior to its receipt without obligation of confidentiality; (ii) independently developed by the Receiving Party without use of Confidential Information; (iii) generally known to the public at the time of disclosure other than as a result of disclosure by the Receiving Party; or (iv) received from a third party with a legal right to disclose. End User Data shall always be treated as Subscriber Confidential Information of YASBe subject to the restrictions herein."
            />

            <DefinitionItem
              number="1.10."
              term='"Contractor"'
              definition="means any third party that is under contract to provide services to Subscriber."
            />

            <DefinitionItem
              number="1.11."
              term='"Control"'
              definition='(including "controlling" and "controlled") means the possession, directly or indirectly, of 10% or more of the equity interests of another Person or the power otherwise to direct or cause the direction of the management and policies of such other Person, whether through ownership of voting securities, by contract, or otherwise.'
            />

            <DefinitionItem
              number="1.12."
              term='"Safeguarding Agreements"'
              definition="means any agreement that may be entered into between Subscriber and Safeguarding Institutions pursuant to which such institutions provide safeguarding services to Subscriber."
            />

            <DefinitionItem
              number="1.13."
              term='"Customer Agreement"'
              definition="means the applicable customer agreement governing accounts opened at or through YASBe under its money services business registrations or equivalent regulatory authorizations, as updated from time to time."
            />

            <DefinitionItem
              number="1.14."
              term='"Safeguarding Institutions"'
              definition="means regulated third parties that provide safeguarding of fiat and/or digital assets for Subscriber and End Users."
            />

            <DefinitionItem
              number="1.15."
              term='"Safeguarding Services"'
              definition="means the services provided by Safeguarding Institutions with respect to fiat or digital assets."
            />

            <DefinitionItem
              number="1.16."
              term='"Documentation"'
              definition="means all documentation (hard copy, electronic, or digital), including technical documentation, manuals, instructions, file layouts, flow-charts, screen layouts, specifications, and other written materials designed to provide guidance on the operation, maintenance, and use of the Platform."
            />

            <DefinitionItem
              number="1.17."
              term='"End User Data"'
              definition="means all information about End Users provided by Subscriber to YASBe or to which YASBe otherwise has access by virtue of this Agreement."
            />

            <DefinitionItem
              number="1.18."
              term='"End Users"'
              definition="means Subscriber's customers who have provided KYC data via the Front End and who (i) successfully complete YASBe's and any applicable Safeguarding Institution's compliance checks; and (ii) successfully open an Account on the Platform."
            />

            <DefinitionItem
              number="1.19."
              term='"FBO Account"'
              definition="means a For-Benefit-Of Account, which is an umbrella safeguarding account that pools funds for the benefit of Subscriber or a number of End Users. Subscriber shall not have any legal or beneficial ownership interest in the FBO Account (or funds or assets therein) that are for the benefit of End Users."
            />

            <DefinitionItem
              number="1.20."
              term='"Fees"'
              definition="means the Subscription Fees and the Professional Services Fees, collectively."
            />

            <DefinitionItem
              number="1.21."
              term='"Front End"'
              definition="means the front-end user interface hosted, managed, and/or supported by Subscriber that enables End Users to, among other things, enter KYC data to establish an Account."
            />

            <DefinitionItem
              number="1.22."
              term='"Intellectual Property Rights"'
              definition="means all intellectual and industrial property rights, whether now existing or in the future, including: (i) patent rights, including pending applications; (ii) copyrights and related rights; (iii) trademarks, service marks, trade dress, and other proprietary designations; (iv) rights to proprietary know-how, trade secrets, and Confidential Information; and (v) all other rights covering intellectual property recognized in any jurisdiction."
            />

            <DefinitionItem
              number="1.23."
              term='"KYC"'
              definition="means procedures determined by YASBe for identifying and verifying customers."
            />

            <DefinitionItem
              number="1.24."
              term='"YASBe Accounts"'
              definition="means Subscriber and End User accounts maintained on the Platform's ledger and established pursuant to the Customer Agreement."
            />

            <DefinitionItem
              number="1.25."
              term='"Malicious Code"'
              definition="means any computer virus, Trojan horse, worm, time bomb, or other similar code or component designed to disable, damage, or disrupt operations; permit unauthorized access; or erase, destroy, or modify any software, hardware, network, or other technology."
            />

            <DefinitionItem
              number="1.26."
              term='"Master Accounts"'
              definition="means Subscriber and End User master FBO Accounts safeguarded with Safeguarding Institutions for the benefit of Subscriber and its End Users. Master Accounts do not include cash FBO Accounts not held by Safeguarding Institutions."
            />

            <DefinitionItem
              number="1.27."
              term='"Order Form"'
              definition="means the order form that Subscriber and YASBe have agreed to, whether via YASBe's online portal, a mutually executed order form, or otherwise, that references this Agreement. Each Order Form will form part of this Agreement."
            />

            <DefinitionItem
              number="1.28."
              term='"Person"'
              definition="means an individual, partnership, corporation, limited liability company, trust, joint venture, association, unincorporated organization, government agency, political subdivision, or other entity."
            />

            <DefinitionItem
              number="1.29."
              term='"Personal Information"'
              definition='means any information defined as "personal information," "personal data," "non-public personal information," or other similar term under any Privacy Law.'
            />

            <DefinitionItem
              number="1.30."
              term='"Platform"'
              definition="means YASBe's API-enabled proprietary technology and data processing platform which enables institutions, in conjunction with services provided by Safeguarding Institutions, to provide crypto, payments, and financial services products to their customers. The functionality of which is described in more detail in the documentation accessible via Beezins.com"
            />

            <DefinitionItem
              number="1.31."
              term='"Privacy Laws"'
              definition="means any applicable national, federal, and state laws or regulations relating to the collection, use, processing, and protection of Personal Information in the jurisdictions in which Subscriber does business."
            />

            <DefinitionItem
              number="1.32."
              term='"Privacy Policy"'
              definition="means YASBe's then-current privacy policy, as updated from time to time. Available at link to be updated, as may be updated from time to time."
            />

            <DefinitionItem
              number="1.33."
              term='"Processing"'
              definition="means any operation performed upon Personal Information, whether or not by automated means, including collection, recording, organization, storage, adaptation, retrieval, use, disclosure, alignment, combination, erasure, or destruction."
            />

            <DefinitionItem
              number="1.34."
              term='"Professional Services"'
              definition="means development, migration, integration, testing, conversion, consulting, or other services related to the SaaS Services but not otherwise included as part of them, as agreed upon by the Parties in one or more Statements of Work."
            />

            <DefinitionItem
              number="1.35."
              term='"Professional Services Fees"'
              definition="means the fees due to YASBe for Professional Services, as set forth in the applicable Statement of Work."
            />

            <DefinitionItem
              number="1.36."
              term='"Prohibited User"'
              definition='means any person or entity that is (i) the subject of sanctions administered or enforced by any governmental authority, including being designated on lists of prohibited or restricted parties; (ii) located in, a resident of, or organized in a jurisdiction subject to comprehensive sanctions or designated as "terrorist supporting"; or (iii) owned or controlled by such persons or entities.'
            />

            <DefinitionItem
              number="1.37."
              term='"SaaS Services"'
              definition="means YASBe's provision of access to, and usage of, the Platform as set forth herein and all related hosting, maintenance, and Support Services provided by YASBe."
            />

            <DefinitionItem
              number="1.38."
              term='"Sanctions"'
              definition="means economic or financial sanctions or trade embargoes imposed or enforced by (a) the U.S. government (OFAC, Department of State), and/or (b) the United Nations Security Council, the European Union, Canada, or the United Kingdom."
            />

            <DefinitionItem
              number="1.39."
              term='"Services"'
              definition="means the SaaS Services and the Professional Services, collectively."
            />

            <DefinitionItem
              number="1.40."
              term='"Statement of Work"'
              definition="means a written statement of work entered into by the Parties, as more fully described in Section 2.1 below."
            />

            <DefinitionItem
              number="1.41."
              term='"Subscriber Personal Information"'
              definition="means the Personal Information of, or with respect to, Subscriber and its employees, End Users, and Contractors (other than YASBe or Safeguarding Institutions)."
            />

            <DefinitionItem
              number="1.42."
              term='"Subscription Fees"'
              definition="means the fees due to YASBe for the SaaS Services, as set forth in the Order Form."
            />

            <DefinitionItem
              number="1.43."
              term='"Updates"'
              definition="means any error correction, bug fix, patch, enhancement, update, upgrade, new version, release, or other modification to the Platform provided by YASBe."
            />
          </ContentSection>

          <ContentSection title="2. Subscription Terms">
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              The definitions for some of the defined terms used in this Agreement are set forth
            </p>

            <DefinitionItem
              number="2.1."
              term="Subscription."
              definition={
                'Subject to the terms and conditions of this Agreement, YASBe ("YASBe")s hereby grants Subscriber during the Term (as defined below) a limited, non-exclusive, non-transferable (except as permitted under Section 11.3) right and license to: (i) authorize End Users to access and use the Platform via the Front End to, among other things, buy, sell, transfer, and hold YASBe ("YASBe")s approved virtual assets, open or close Accounts accessible through the Platform and other services provided by or on behalf of YASBe ("YASBe")s through the Platform from time to time, subject to configurations selected by Subscriber and agreed to by YASBe ("YASBe")s; and (ii) authorize its Authorized Users to access and use the Platform via a dashboard, in object code only, for Subscriber (in conjunction with services provided by Custodians) to service Accounts and Master Accounts and to perform first-level support to End Users. Subscriber is responsible for any breach of this Agreement and any acts or omissions by its Authorized Users, End Users, and any other Person who accesses and uses the Platform using any of Subscriber\'s or its Authorized Users\' access credentials.'
              }
            />

            <DefinitionItem
              number="2.2."
              term="Provision of Services."
              definition={
                'Subject to the terms and conditions of this Agreement, YASBe ("YASBe")s shall use commercially reasonable efforts to maintain and support the Platform. YASBe ("YASBe")s agrees to use commercially reasonable efforts to provide the Support Services shall be provided pursuant to and in accordance with Schedule A. Subscriber\'s sole and exclusive remedy for any failure of YASBe ("YASBe")s to meet its obligations set forth in Schedule A shall be to exercise any termination rights it may have under Section 5.2.1 below. Subscriber, Authorized Users, and End Users shall be responsible for obtaining Internet connections and other third-party hardware, software, and services necessary to access the Platform. From time to time, YASBe ("YASBe")s may develop new products, services, and premium features that have an additional cost. These capabilities may be presented to Subscriber as options available for inclusion in an addendum to this Agreement. In the event Subscriber desires to have YASBe ("YASBe")s provide integration, custom development, or other Professional Services outside the scope of this Section, such professional services will be governed by Section 3.'
              }
            />

            <DefinitionItem
              number="2.3."
              term="Access to Documentation."
              definition='YASBe ("YASBe")s shall provide Subscriber access to the Documentation, as may be updated from time to time in order to reflect any Updates or requirements related to the Platform. Subscriber shall comply with Documentation and may print copies of, use, and permit its Authorized Users to use the Documentation solely in connection with the use of the Platform.'
            />

            <DefinitionItem
              number="2.4."
              term="Restrictions on Use."
              definition='Except to the extent expressly permitted in this Agreement, Subscriber shall not (and shall not authorize or permit any End User or other third party to): (i) reverse engineer, decompile, disassemble, or otherwise attempt to discern the source code, algorithms, file formats, or interface protocols of the Platform or of any files contained therein; (ii) copy, modify, adapt, or translate the Platform or otherwise make any use, resell, distribute, or sublicense the Platform; (iii) make the Platform available on a "service bureau" basis; (iv) remove or modify any proprietary markings or restrictive legends placed on the Platform or the Documentation; (v) use the Platform in violation of any Applicable Law; or (vi) introduce into the Platform any Malicious Code. Subscriber agrees not to distribute or make available the Platform on a stand-alone basis. Subscriber shall ensure that no End User is a Prohibited User.'
            />

            <DefinitionItem
              number="2.5."
              term="Title."
              definition={
                'As between YASBe ("YASBe")s and Subscriber: (i) YASBe ("YASBe")s retains all right, title, and interest, including, without limitation, all Intellectual Property Rights, in and to the Platform, the Documentation, and any other materials provided by YASBe ("YASBe")s hereunder (collectively, the "YASBe ("YASBe")s Materials"), and Subscriber shall have no rights with respect to the same other than those license rights expressly granted under this Agreement; and (ii) Subscriber retains all right, title, and interest, including, without limitation, all Intellectual Property Rights, in and to the Front End and the End User Data, and YASBe ("YASBe")s shall have no rights with respect to the same other than those license rights expressly granted under this Agreement. Subscriber warrants and represents that it has obtained all necessary rights, licenses and permissions to provide YASBe ("YASBe")s with the End User Data and any other data that Subscriber provides under this Agreement, for use by YASBe ("YASBe")s and/or its service providers for processing and use as permitted in this Agreement and the Privacy Policy, and that the provision of such data by Subscriber for such purposes does not violate any Applicable Law, any of Subscriber\'s privacy policies, or any contract that Subscriber is a party to.'
              }
            />

            <DefinitionItem
              number="2.6."
              term="End User Agreements."
              definition={
                'Subscriber shall cause each End User to acknowledge and accept an agreement (including online click-through terms of use) that (i) contains provisions as protective of the YASBe ("YASBe")s Materials as the terms set forth herein, including, without limitation, Sections 2.4, 2.5, 6, and 7.4; (ii) names YASBe ("YASBe")s an express, intended, third-party beneficiary with the right to enforce its Intellectual Property Rights directly against the applicable End User; (iii) clearly and conspicuously discloses to End Users that YASBe ("YASBe")s and/or its service providers shall Process the End User Data pursuant to, and in accordance with, the Privacy Policy; and (iv) contains any other YASBe ("YASBe")s end user agreement (including the YASBe ("YASBe")s end user agreement, as may be updated from time to time or other disclosures reasonably required by YASBe ("YASBe")s, including to ensure the Platform is provided in accordance with Applicable Law. Subscriber shall ensure that its End User agreements comply with Applicable Law and provide all disclosures required under Applicable Law or otherwise required for YASBe ("YASBe")s to provide End Users services contemplated hereunder in compliance with Applicable Law. Subscriber shall promptly comply with any modification or change to such End User agreements (or such process to obtain End User\'s acceptance thereof) that is reasonably requested by YASBe ("YASBe")s to comply with Applicable Law, this Agreement or YASBe ("YASBe")s\' risk management policies. Subscriber shall cause each End User to acknowledge and accept any applicable Third-Party Terms (as defined below). Subscriber acknowledges and agrees that if it uses the Platform on its own behalf, then (i) in addition to this Agreement, YASBe ("YASBe")s\' end user agreement available, as may be updated from time to time, shall also apply to such use, and (ii) YASBe ("YASBe")s may use such information provided by Subscriber in connection with such use in accordance with its Privacy Policy.'
              }
            />

            <DefinitionItem
              number="2.7."
              term="Custodian."
              definition={
                'Subscriber acknowledges and agrees that: (i) YASBe ("YASBe")s is not the provider of any Custody Services, nor is YASBe ("YASBe")s responsible for the any act or omission of any Custodian or for anything relating to the Custody Services; and (ii) any banking, money transmitter and/or financial services provided to Subscriber via the Platform for which YASBe ("YASBe")s does not possess the required registration, license, charter or other necessary state or federal regulatory authority shall be provided by third parties (such as an affiliate of YASBe ("YASBe")s) pursuant to either a separate agreement between Subscriber and such third party or an addendum to this Agreement, in either case as facilitated by the Platform and Services provided by YASBe ("YASBe")s under this Agreement. THE CUSTODY SERVICES ARE PROVIDED BY THE CUSTODIANS AND NOT BY YASBe, AND YASBe DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AND SHALL NOT HAVE ANY LIABILITY, WITH RESPECT TO THE CUSTODY SERVICES. Subscriber may be required by YASBe ("YASBe")s to enter into Custodian Agreements directly with Custodians, and, upon YASBe ("YASBe")s\' request, Subscriber shall enter into such Custodian Agreements within a reasonable time as determined by YASBe ("YASBe")s.'
              }
            />

            <DefinitionItem
              number="2.8."
              term="Third Party Services."
              definition={
                'The Platform may enable Subscriber and End Users to access certain services provided by a third party (“Third Party Services”). YASBe ("YASBe") does not provide any representation or warranty, and will have no liability or obligation, with respect to any Third-Party Service. Subscriber’s and its End Users’ access or use of Third-Party Services is at their own risk. If Subscriber or End Users have access to Third Party Services, Subscriber acknowledges and agrees that it and its End Users may be required by YASBe ("YASBe") or the applicable third-party provider of such Third-Party Service to enter terms and conditions governing the access and use of such Third-Party Service (“Third Party Terms”). For clarity, Third Party Services include Fortress Services and Fortress Accounts.'
              }
            />
            <DefinitionItem
              number="2.9."
              term="Modifications; No Contingency for Future Commitments."
              definition={
                'YASBe ("YASBe") may, in its sole discretion, modify the Platform from time to time by adding, deleting, or modifying features to improve the user experience provided, however, that during the Term, such additions, deletions, or modifications to features: (i) will not materially decrease the overall functionality of the Platform; and (ii) will be described by YASBe ("YASBe") through updates to the Documentation. Subscriber acknowledges and agrees that such modifications may require Subscriber to adjust its integration to properly use the Platform. Unless otherwise expressly agreed by the Parties in writing, Subscriber agrees that payment of the Fees under this Agreement is not contingent on the delivery of any future Platform functionalities or features or any other future commitments, except as expressly set forth in this Agreement.'
              }
            />
            <DefinitionItem
              number="2.10."
              term="Cooperation; Records."
              definition={
                'Subscriber acknowledges that YASBe ("YASBe")’s ability to implement and provide the Services is dependent on YASBe ("YASBe") having access to (and being able to spend time with) employees of Subscriber and designated third parties and also dependent on YASBe ("YASBe") being provided with (and continuing to receive) complete, accurate, up-to-date, and timely data, information, and other materials as reasonably requested by YASBe ("YASBe") in connection with the initial diligence and ongoing monitoring of Subscriber and its End Users. Subscriber agrees to provide such data, information, and other materials to YASBe ("YASBe"), Custodians, and any governmental or regulatory authority, as reasonably requested by YASBe ("YASBe"), and shall cause any designated third parties to cooperate with YASBe ("YASBe") for YASBe ("YASBe") to implement and provide the Services on the schedules adopted by the Parties. In addition, Subscriber shall actively and in good faith participate in YASBe ("YASBe")’s compliance and risk management activities in cooperation with YASBe ("YASBe") and Custodians. Without limiting the generality of the foregoing, Subscriber shall provide access to the necessary information to perform necessary ledger reconciliation or recordkeeping in connection with its use of the Platform, including access to data from processors and networks that allow the derivation of accounts based on information accessible to YASBe ("YASBe") in an automated fashion.'
              }
            />
            <DefinitionItem
              number="2.11."
              term="Unclaimed Property."
              definition={
                'Subscriber shall develop a protocol to share information to enable YASBe ("YASBe") to comply with applicable state unclaimed property laws (if any). Subscriber will reimburse YASBe ("YASBe") for the third-party costs of compliance with applicable state unclaimed property laws (if any). Subscriber shall be solely liable for any costs and fines related to any challenge by any governmental authority with respect to escheat or unclaimed property laws, regardless of whether such cost is incurred by or such fines are assessed to YASBe ("YASBe") or Subscriber. Subscriber shall be liable to YASBe ("YASBe") for any amounts claimed by states under unclaimed property laws that has been previously paid to Subscriber by YASBe ("YASBe").'
              }
            />
          </ContentSection>
        </main>
        <SectionHeader number="2.12." title="Subscriber Responsibilities." />

        <SubSection number="2.12.1.">
          As between YASBe ("YASBe")s and Subscriber, Subscriber agrees that it shall be responsible for and liable to
          YASBe ("YASBe")s for all reasonable expenses, costs and Losses incurred by YASBe ("YASBe")s in connection with
          (a) over-limit processing, (b) End User transactions, including End User fraud, (c) under-ﬂoor-limit
          processing, or (d) YASBe ("YASBe")s efforts at fraud remediation or unauthorized transaction recovery, in each
          case to the extent related to the Subscriber's or an End User's use of the Platform and except for those costs
          and expenses incurred as a result of YASBe ("YASBe")s' gross negligence or wilful misconduct. Subscriber shall
          use commercially reasonable efforts to assist with the location and prosecution of the perpetrator of any such
          unauthorized activity or fraud and shall bear its own costs and expenses in connection therewith. To the
          extent Subscriber remits payment to YASBe ("YASBe")s in connection with an incident subject to this Section
          2.13 and all or a portion of such funds are returned to YASBe ("YASBe")s as a result of a resolution of such
          incident, YASBe ("YASBe")s shall promptly remit the amount of such funds it receives from resolution back to
          Subscriber. Any amount owing by Subscriber following communication of a reasonably detailed statement with
          respect thereto shall be set off against the amount otherwise payable by YASBe ("YASBe")s herein.
          Notwithstanding anything to the contrary and for the avoidance of doubt, Subscriber agrees that it shall be
          responsible for and liable to YASBe ("YASBe")s for all expenses associated with, and any Losses attributable
          to, End User transactions, including End User negative balances and unauthorized transactions, and all
          compromised Accounts, including any fraud losses in connection with the Accounts, payment instructions or
          payment orders, "errors" (as deﬁned by Regulation E), and all fraudulent or unauthorized transactions related
          to the Services or Accounts.
        </SubSection>

        <SubSection number="2.12.2.">
          Subscriber acknowledges and agrees that it is responsible and liable for all instructions it provides to YASBe
          ("YASBe")s, whether via the Platform or otherwise, and that YASBe ("YASBe")s may rely on such instructions.
          Subscriber is solely responsible for ensuring such instructions are accurate and complete. YASBe ("YASBe")s is
          not responsible for any errors in any such instructions from Subscriber, including any Subscriber errors
          related to transaction instructions.
        </SubSection>

        <SubSection number="2.12.3.">
          Subscriber is responsible for ensuring that each of the following is appropriate and sufficient for its
          implementation of the Platform on the Front End and such Front End complies with Applicable Law and YASBe
          ("YASBe")s' requirements (which may be provided to Subscriber from time to time). Subscriber will provide each
          item to YASBe ("YASBe")s for YASBe ("YASBe")s' prior review and approval: (i) all policies, procedures, and
          systems required by YASBe ("YASBe")s to help ensure it meets its regulatory obligations, including but not
          limited to documents and systems related to anti-money laundering, fraud, consumer protection and complaints,
          (ii) all Front End interfaces, (iii) diagram of the proposed operational funds ﬂow related to Subscriber's
          implementation of the Platform, (iv) End User documentation created or provided by Subscriber, including any
          amendments or modiﬁcations thereto, and (v) the privacy policy and terms of services for the Front End that
          relate to or are applicable to the Services. Subscriber agrees that the look and feel of the Front End will be
          designed so that the End User can readily distinguish when they are interacting with, using, or viewing their
          Account. Subscriber agrees to provide YASBe ("YASBe")s with at least sixty (60) days' prior written notice of
          any material changes to the Front End that affect or modify the presentation of any previously communicated
          presentation or display of the Services to End Users. Any failure to do so constitutes a material breach and
          YASBe ("YASBe")s shall have the right to immediately terminate this Agreement without giving effect to any
          cure period hereunder, unless cure is permitted by YASBe in writing. Subscriber agrees that YASBe ("YASBe")s
          has the right to reject, in its sole discretion, any proposed changes to the Front End. Subscriber agrees that
          YASBe ("YASBe")s has the right to audit the Front End for compliance with this Agreement and Subscriber shall
          provide YASBe ("YASBe")s with a test account to access for the Front End for the purposes of such audit.
          Subscriber agrees to promptly correct any deviations from this Agreement identiﬁed by YASBe ("YASBe")s during
          such audit. Subscriber shall be responsible for all reasonable and documented out-of-pocket expenses related
          to the review of any such materials. YASBe ("YASBe")s may provide Subscriber with policies, procedures and
          documented requirements from time to time (as amended from time to time, the "YASBe ("YASBe") Requirements")
          related to use of its services, and Subscriber shall comply with all YASBe ("YASBe") Requirements.
        </SubSection>

        <SubSection number="2.12.4.">
          Subscriber shall comply and cause each of its Affiliates and contractors to take action to enable YASBe
          ("YASBe")s, with respect to the services provided hereunder, to comply with all applicable Anti-Money
          Laundering Laws, Anti-Corruption Laws and Sanctions and shall implement customer identiﬁcation, anti-money
          laundering, transaction screening, and OFAC programs, all as approved by YASBe ("YASBe")s and designed
          speciﬁcally to address the Anti- Money Laundering Laws and associated risks with the Accounts and Platform.
          Without limiting the generality of the foregoing, Subscriber shall (a) maintain an anti-money laundering
          compliance program that is in compliance with the Anti-Money Laundering Laws, (b) conduct, in all material
          respects, the due diligence required in the Anti-Money Laundering Laws and Sanctions in connection with all
          End Users, including with respect to the legitimacy of the applicable End User, and (c) maintain sufficient
          information to identify the applicable End User for purposes of compliance, in all respects, with the
          Anti-Money Laundering Laws and Sanctions and YASBe ("YASBe")s' policies.
        </SubSection>

        <SubSection number="2.12.5.">
          If required by YASBe ("YASBe") at any time, Subscriber must establish an anti-money laundering and sanctions
          compliance program ("AML Program") that, at a minimum, includes a system of internal controls to ensure
          ongoing compliance and annual independent testing of the AML Program, including testing for compliance with
          Applicable Law, designating an anti-money laundering compliance officer responsible for managing anti-money
          laundering compliance and the AML Program, monitoring transactions for suspicious activities, and providing
          appropriate and ongoing training for Subscriber personnel. The AML Program is subject to YASBe ("YASBe")s'
          approval and any subsequent changes or modiﬁcations to the AML Program must be submitted to YASBe ("YASBe")s
          prior to the effective date of any such change or modiﬁcation, for approval. YASBe ("YASBe")s may, in its sole
          discretion, require Subscriber to modify or amend or update the AML Program, from time to time, and Subscriber
          shall effectuate such modiﬁcation, amendment or update in compliance with YASBe ("YASBe")s' instruction. Upon
          YASBe ("YASBe")s' request, Subscriber shall immediately provide copies of its AML Programs and all records
          related thereto.
        </SubSection>

        <SubSection number="2.12.6.">
          Subscriber shall adopt, implement, and maintain fraud monitoring practices consistent with customary,
          reasonable, and usual standards of fraud monitoring practices for well- managed, regulated ﬁnancial
          institutions that originates or offers accounts and services that are similar to YASBe ("YASBe")s Services,
          and, without limiting anything herein, Subscriber shall (a) monitor usage of products and services offered to
          each End User; (b) immediately report any suspicious activities in accordance with this Section 2.13.5 and
          YASBe ("YASBe")s' policies, as provided to Subscriber from time to time; (c) take appropriate steps to prevent
          or stop such fraudulent and/or suspicious activity; and (d) if required by YASBe ("YASBe")s, immediately
          terminating the End User's access to the Services. Subscriber shall identify and immediately report to YASBe
          ("YASBe") any activity that suggests or indicates potential money laundering or other potential criminal
          activity, does not appear to have a valid business purpose, is not consistent with the activities expected of
          an End User or that appears to be or is fraudulent or suspicious. YASBe ("YASBe") shall assess the information
          contained in any such report and, after performing such investigation as it considers appropriate in light of
          such information, determine whether or not to ﬁle a Suspicious Activity Report ("SAR") with the applicable
          regulatory authority. Subscriber shall assist YASBe ("YASBe") with any investigation and provide any
          information to Subscriber that YASBe ("YASBe") may request. YASBe ("YASBe") shall have sole discretion and
          responsibility as to whether to ﬁle a SAR with respect to any activity identiﬁed in an unusual activities
          report. Subscriber acknowledges that the contents of a SAR and the fact that YASBe ("YASBe") has ﬁled a SAR
          are strictly conﬁdential under Applicable Law.
        </SubSection>
        <DefinitionItem
          number="2.13."
          term="Acknowledgment."
          definition={
            'Subscriber acknowledges that the Accounts and Master Accounts shall be subject to suspension (blocking) and cancellation at any time by YASBe ("YASBe"), subject to Applicable Law. YASBe ("YASBe") acknowledges that Subscribers maintain independent customer relationships with End Users, and Subscriber may have independent reasons to suggest suspension or cancellation of an End User Account. As such, where Subscriber (a) reasonably believes in good faith that an End User may be using its Account for fraudulent, illegal purposes, or other suspicious activity; or (b) otherwise intends to suspend or terminate its independent customer relationship with such End User due to actual or suspected fraud or illegal purposes or for violation of any agreement between Subscriber and such End User, it shall promptly notify YASBe ("YASBe") in writing so that such Account be suspended or terminated, as applicable. Any such notice must be accompanied by the reason for suspension or termination, as well as any document supporting such reason. YASBe ("YASBe") may request, and Subscriber shall immediately provide, any information related to an End User and its relationship with Subscriber. Notwithstanding anything to the contrary, YASBe ("YASBe") may, without notice, restrict or terminate an End User’s or Subscriber’s ability to open or maintain an Account. Subscriber agrees that neither Subscriber nor End User may make excessive or repetitive requests for Accounts or custodial accounts.'
          }
        />
        <DefinitionItem
          number="2.14."
          term="End User Disputes and Support."
          definition={
            'As between the Parties, Subscriber agrees that it is solely responsible for resolving disputes with, and providing support to, End Users. Subscriber agrees to handle support requests in accordance with YASBe ("YASBe")’s written instructions, as may be updated from time to time, and Applicable Law. Without limiting the foregoing, Subscriber is responsible for (i) maintaining End User support channels, which must be approved by YASBe ("YASBe") (such approval not to be unreasonably withheld or delayed); (ii) authenticating the identity of End Users; (iii) investigating and resolving End User complaints and support requests; and (iv) promptly communicating to End Users the resolution of complaints and support requests within the time period required by Applicable Law. Notwithstanding the foregoing, for any complaint related to YASBe ("YASBe") or its services, including the Platform and Accounts, or any complaint and support request relating to the Platform that relate to a regulatory matter (including but not limited to “errors” under Regulation E, complaint to regulatory agencies, claim of identity theft, and any assertion that the Platform or Services are unfair, deceptive or otherwise violate Applicable Law), Subscriber will notify YASBe ("YASBe") of such complaint or request within two (2) business days of receipt of such complaint or request (notice to be delivered to cs@beeznis.com or any other contact address specifically designated by YASBe ("YASBe")) and will communicate the resolution to the End User in accordance with YASBe ("YASBe")’s instructions and promptly take steps to remediate any underlying issue in accordance with YASBe ("YASBe")’s instructions. Subscriber shall ensure all transaction disputes and complaints (including “errors” under Regulation E) are resolved in accordance with Applicable Law.'
          }
        />
        <DefinitionItem
          number="2.15."
          term="Investigations."
          definition={
            'Subscriber will notify YASBe ("YASBe") if it becomes aware of any investigation, inquiry, proceeding, claim or action commenced by any governmental authority that relates in any way to the Platform. Subscriber will provide any information related to such action reasonably requested by YASBe ("YASBe") and use good faith efforts to comply with any reasonable request by YASBe ("YASBe") related to any elements of such action that may affect YASBe ("YASBe").'
          }
        />
        <DefinitionItem
          number="2.16."
          term="Changes; Actions."
          definition={
            'Subscriber shall promptly give written notice to YASBe ("YASBe") of any material adverse change in the business, properties, assets, operations or condition, financial or otherwise, of Subscriber. Subscriber shall promptly notify YASBe ("YASBe") of any action, suit, litigation, proceeding, facts and circumstances, and of all tax deficiencies and other proceedings before governmental bodies or officials affecting Subscriber, and the threat of reasonable prospect of same, which (a) relate to the Front End, Platform or the Services, (b) might give rise to any indemnification obligation hereunder, or (c) might materially and adversely affect Subscriber’s ability to perform its obligations under this Agreement.'
          }
        />
        <SectionHeader number="2.17." title="Marketing." />

        <SubSection number="2.17.1.">
          Prior to implementation and provisioning of the Services, Subscriber shall submit to YASBe ("YASBe") each
          proposed advertisement (including without limitation print, online, social media, television, radio, or
          podcast) and any other marketing materials (including without limitation brochures, telemarketing scripts,
          electronic web pages, electronic web links, websites, in-app messages, banner messages, and any other type of
          marketing material or interactive media) to be disseminated by Subscriber or by any third party (including
          without limitation sponsored and promotional content) to market the Platform or any YASBe ("YASBe") services
          (collectively, “Marketing Materials”), for YASBe’ approval. Subscriber shall obtain YASBe ("YASBe") prior
          written approval for all marketing channels and marketing partners to be used to market the Platform, and no
          new marketing channels or marketing partners may be used without YASBe ("YASBe") written consent. YASBe
          ("YASBe") shall use commercially reasonable efforts to review and approve or provide notice of disapproval and
          feedback on such Marketing Materials or marketing channel or partner within a reasonable period of time. For
          the avoidance of doubt, Marketing Materials do not include Subscriber advertisements or other marketing
          materials that do not concern the Platform and do not refer in any way to YASBe ("YASBe")s.
        </SubSection>
        <SubSection number="2.17.2.">
          Subscriber is responsible for ensuring that Marketing Materials comply with Applicable Law and YASBe
          ("YASBe")’s marketing policies and instructions that it may provide to Subscriber from time to time. Without
          limiting the foregoing, Subscriber will ensure that all Marketing Materials include any disclosures required
          by YASBe ("YASBe"). YASBe ("YASBe") will use commercially reasonable efforts to provide Subscriber at least
          thirty (30) days’ prior notice of any changes to YASBe ("YASBe")’s marketing requirements that add material
          new limitations to Marketing Materials, unless a shorter time is necessary in YASBe ("YASBe")’s discretion,
          including to comply with Applicable Law or any governmental authority.
        </SubSection>
        <SubSection number="2.17.3.">
          Upon approval by YASBe ("YASBe"), Marketing Materials shall be deemed “Approved Marketing Materials.”
          Subscriber may use Approved Marketing Materials and need not seek further approval for use of such forms
          unless there is: (i) a substantive change in the Marketing Materials, including, without limitation, a new
          offering to be included in the Marketing Materials; or (ii) a material change in the channel being used to
          distribute the Approved Marketing Materials; in which case Subscriber shall submit such forms of Marketing
          Materials to YASBe ("YASBe") for re-review and approval. Notwithstanding the above, YASBe ("YASBe") reserves
          the right to withdraw approval for any Marketing Materials to the extent YASBe ("YASBe") determines in good
          faith is necessary or appropriate to avoid a risk of non-compliance with Applicable Law, to meet the
          instructions or expectations of a Governmental Authority, or if YASBe ("YASBe") determines that such Marketing
          Materials could otherwise give rise to risk to YASBe ("YASBe") or any third party.
        </SubSection>
        <SubSection number="2.17.4.">
          YASBe ("YASBe") may periodically request reviews of the Marketing Materials and marketing channels and
          partners then being used by Subscriber. Subscriber shall cooperate with YASBe ("YASBe") in such review.
        </SubSection>
        <SubSection number="2.17.5.">
          As between the Parties, Subscriber is responsible for ensuring that Marketing Materials, the methods to
          disseminate Marketing Materials, and the collection and use of data for marketing purposes are accurate and
          comply with Applicable Law and this Agreement, and for ensuring that Subscriber obtains necessary consents
          from and complies with any End User opt-outs.
        </SubSection>
        <DefinitionItem
          number="2.18."
          term="Third Party Sender."
          definition={
            'If Subscriber is a Third-Party Sender, as defined in the rules, guidelines, and/or bylaws of the National Automated Clearinghouse Association (“NACHA” and the rules, guidelines and bylaws, “NACHA Rules”), Subscriber agrees to the additional terms and conditions set forth in Schedule B (the “Third Party Sender Addendum”).'
          }
        />
        <DefinitionItem
          number="2.19."
          term="Security Procedures."
          definition={
            'Subscriber covenants and agrees to comply with and utilize the security procedures and protocols set forth in Schedule C (the “Security Procedures”), which may be updated or modified by YASBe ("YASBe") from time to time. Subscriber agrees that the Security Procedures, including any code, password, personal identification number, user identification technology, token, certificate, or other element, means, or method of authentication or identification used in connection with the Security Procedures, are commercially reasonable security procedures under Applicable Law, including for the initiation of ACH entries and a responsible method of providing security against unauthorized ACH entries. Subscriber acknowledges and agrees that the Security Procedures are not designed to prevent errors in the transmission or content of communications or transactions initiated by Subscriber, and that Subscriber bears sole responsibility for detecting and preventing such errors.'
          }
        />
        <DefinitionItem
          number="2.20."
          term="Nested Payments Prohibition."
          definition={
            'Subscriber covenants and agrees that neither it nor any End User will not facilitate Nested Payments in connection with any services provided by YASBe ("YASBe"). “Nested Payments” means (a) a payment or payment instruction provided by Subscriber or End User (or any party acting on behalf of any such party) (i) that relates to more than one underlying transaction or party; (ii) where, in the case of receipt of funds, the ultimate beneficiary of the transaction is not the Subscriber or End User; or (iii) where, in the case of sending of funds, the funds do not belong exclusively to the Subscriber or End User; (b) any event in which Subscriber or End User provides access to YASBe ("YASBe")’s services hereunder or under a Customer Agreement to another financial institution (including non-bank financial institution, whether licensed or unlicensed). Subscriber shall ensure that any transaction for which YASBe ("YASBe") settles or processes under this Agreement or in connection with an End User transaction must be conducted for the benefit of and by only Subscriber or End Users, unless otherwise approved in writing by YASBe ("YASBe"). Subscriber may not offer any YASBe ("YASBe")’s services to or use YASBe ("YASBe")’s services in connection with providing its services to, any financial institution (including non-bank financial institution, whether licensed or unlicensed), except as approved in writing by YASBe ("YASBe")s.'
          }
        />
        <DefinitionItem
          number="2.21."
          term="Pooled Account Prohibition."
          definition={
            'Subscriber may not use, and shall ensure no End User uses, any YASBe ("YASBe")’s services provided hereunder or under the Customer Agreement to pool funds of more than one Person. Each account provided to Subscriber or End User by YASBe ("YASBe") may only be used by such Subscriber or End User (as the case may be) and may not be used to pool funds of any other Person or used to facilitate payments on behalf of multiple customers, except as permitted, in writing, by YASBe ("YASBe")s.'
          }
        />
        <DefinitionItem
          number="2.22."
          term="Prohibited Transactions."
          definition={
            'Subscriber shall not, and shall ensure End Users do not, without YASBe ("YASBe")’s prior approval, use any YASBe ("YASBe")’s services hereunder or under the Customer Agreement to engage in a Prohibited Activity, or authorize or deliver any payment instruction related to a Prohibited Activity. “Prohibited Activity” means any activity YASBe ("YASBe") designates, from time to time and in writing, as prohibited.'
          }
        />
      </ContentSection>
      <ContentSection title="3. Professional Services">
        <DefinitionItem
          number="3.1."
          term="Statements of Work."
          definition={
            'Subscriber may elect to have YASBe ("YASBe")s provide Professional Services. All such Professional Services will be covered by one or more Statements of Work agreed on by the Parties. The work covered by a particular Statement of Work will be referred to in this Agreement as a “Project.” Each Statement of Work will be in writing, signed by an authorized representative of each Party, will reference this Agreement, and will specify for the Project covered by that Statement of Work: (i) a Project contact for each Party; (ii) a description of the Project, including any applicable speciﬁcations, milestones, and deliverables to be developed (“Deliverables”); and (iii) the applicable Professional Services Fees. For the avoidance of doubt and as set forth in Section 2.2, any Subscriber requests for services that are outside the scope of services described in Section 2.2, are subject to YASBe ("YASBe")s’ approval and execution of a Statement of Work. In the event of a conﬂict between the terms contained herein and the terms of a Statement of Work, the terms contained herein shall control unless the Statement of Work speciﬁcally states otherwise.'
          }
        />
        <DefinitionItem
          number="3.2."
          term="Ownership of Deliverables and Work Product."
          definition={
            'Unless otherwise set forth in a Statement of Work, YASBe ("YASBe")s shall own all right, title, and interest, including, without limitation, all Intellectual Property Rights, in and to all Deliverables and other work product created by YASBe ("YASBe")s in the performance of the Professional Services; provided, however, that upon the full payment of the applicable Professional Services Fees, any Deliverables shall be considered part of the Platform hereunder.'
          }
        />
      </ContentSection>
      <ContentSection title="4. Financial Terms; Audits">
        <DefinitionItem
          number="4.1."
          term="Fees."
          definition={
            'The Subscription Fees are set forth in the applicable Order Form. The Professional Services Fees are set forth in the applicable Statement of Work. All Fees are in United States Dollars.'
          }
        />

        <SectionHeader number="4.2." title="Taxes." />

        <SubSection number="4.2.1.">
          All amounts payable under this Agreement are exclusive of sales and use taxes, value added taxes, and all
          other taxes and duties (except for any taxes on YASBe ("YASBe")s’ net income, which shall be paid by YASBe
          ("YASBe")s), the costs of which such taxes and duties shall be invoiced by YASBe ("YASBe")s and paid by
          Subscriber in accordance with Section 4.3.
        </SubSection>
        <SubSection number="4.2.2.">
          If the Subscriber is required by or under any laws or regulations to make any withholding or deduction, YASBe
          ("YASBe")s agrees to take commercially reasonable steps to avoid the withholding or deduction, provide
          exemption certiﬁcates if applicable, and otherwise act to mitigate the withholding or deduction. If any
          withholding or deduction is required notwithstanding such efforts, Subscriber shall gross up its payment to
          YASBe ("YASBe")s as is necessary to ensure that YASBe ("YASBe")s receives the full amount payable under this
          Agreement as if no such withholding or deduction had been made, subject to the tax savings provision of this
          Section.
        </SubSection>
        <DefinitionItem
          number="4.3."
          term="Payments."
          definition={
            'Unless otherwise provided in an Order Form, YASBe ("YASBe")s shall invoice Subscriber for the applicable Fees monthly in arrears in United States Dollars (USD), and Subscriber authorized YASBe ("YASBe")s to debit the bank account designated by Subscriber from time to time via internal transfer or ACH within seven (7) business days after the end of the prior calendar month. In the event such transfer, or ACH does not fully cover such Fees, Subscriber will immediately pay YASBe ("YASBe")s such outstanding Fees. Except as otherwise expressly provided in this Agreement, Subscriber shall not be entitled by reason of any set-off, counterclaim, or other similar deduction to withhold payment of any amount due to YASBe ("YASBe")s. If Subscriber disputes any invoice or payments due hereunder, Subscriber shall notify YASBe ("YASBe")s within sixty (60) days of delivery of such invoice or assessment or notice of such payments. Failure to notify YASBe ("YASBe")s in writing of any dispute regarding an invoice or payment within sixty (60) days of receipt or notice thereof waives Subscriber’s right to dispute such invoice.'
          }
        />
        <DefinitionItem
          number="4.4."
          term="Late Payments."
          definition={
            'Undisputed payments that are past due shall accrue interest at the lesser of one- and one-half percent (1.5%) per month, or the maximum rate permitted by law. YASBe ("YASBe")s shall be entitled to recover all reasonable costs of collection (including reasonable attorneys’ fees, expenses, and costs) incurred in attempting to collect undisputed payments from Subscriber that are more than thirty (30) days delinquent. Undisputed payments from Subscriber that are delinquent shall constitute a material breach of this Agreement.'
          }
        />
        <DefinitionItem
          number="4.5."
          term="Reserve Account."
          definition={
            'Upon YASBe ("YASBe")s’ request, Subscriber will establish an account (the “Reserve Account”), as security for all obligations of Subscriber under this Agreement, which shall include, but is not limited to, accountholder fraud, negative balances in the FBO Account, chargebacks, and overlimit. YASBe ("YASBe")s will determine the Reserve Account structure and the minimum required Reserve Account balance to be maintained, which may be adjusted by YASBe ("YASBe")s from time to time upon written notice to Subscriber due to, among other things, unexpected or excessive changes that YASBe ("YASBe")s reasonably believes could result in a higher risk to YASBe ("YASBe")s or could reasonably be expected to affect YASBe ("YASBe")s’ ability to fulfil its obligations under this Agreement. In such case, Subscriber shall have two (2) business days from the notice time to fund the Reserve Account as adjusted by YASBe ("YASBe")s. The funds may be used by YASBe ("YASBe")s to pay for any Subscriber or End User’s obligations associated with or arising out of either this Agreement or the Customer Agreement. Absent any adjustment by YASBe ("YASBe")s, Subscriber shall replenish the Reserve Account on a monthly basis, unless mutually agreed otherwise by the Parties, for any debits pursuant to this Section to maintain the minimum Reserve Account balance. If Subscriber does not replenish the Reserve Account, YASBe ("YASBe")s may offset any funds otherwise payable to Subscriber hereunder and credit such funds to the Reserve Account until it has been replenished. All funds in the Reserve Account shall be returned to Subscriber as soon as commercially practicable after the termination of this Agreement once all Services have been terminated, and any outstanding invoices from YASBe ("YASBe")s have been paid.'
          }
        />
        <SectionHeader number="4.6." title="Audits." />

        <SubSection number="4.6.1.">
          YASBe ("YASBe")s shall have the right to conduct (or have a third-party conduct) an audit, assessment,
          examination, or review of Subscriber’s compliance with the terms of this Agreement upon at least thirty (30)
          days’ prior written request. Subscriber shall reasonably cooperate with such requests by providing reasonable
          access to knowledgeable personnel, its systems, its facilities, Documentation, and other reasonably requested
          information. Any such audit, assessment, examination or review shall be conducted during Subscriber’s normal
          business hours and in a manner designed to minimize disruption to Subscriber.
        </SubSection>
        <SubSection number="4.6.2.">
          Subscriber agrees to cooperate with any examination, inquiry, audit, information request, site visit or the
          like, which may be required or requested by YASBe ("YASBe")s or any governmental authority with audit
          examination or supervisory authority over YASBe ("YASBe")s. Subscriber will provide all information requested
          by YASBe ("YASBe")s or any governmental authority in connection with such party’s examination, inquiry, or
          audit. Subscriber will maintain complete and accurate books and records relating to its use of the Platform.
          YASBe ("YASBe")s shall have the right to conduct (or have a third-party conduct) an audit, assessment,
          examination, or review of Subscriber’s compliance with the terms of this Agreement upon reasonable prior
          written notice. Subscriber shall reasonably cooperate with such requests by providing reasonable access to
          knowledgeable personnel, its systems, and other reasonably requested information. Any such audit, assessment,
          examination or review shall be conducted during Subscriber’s normal business hours in accordance with
          Subscriber’s reasonable policies and procedures provided to YASBe ("YASBe")s in a manner designed to minimize
          disruption to Subscriber’s operations and any information learned or collected in connection therewith shall
          constitute Subscriber’s Conﬁdential Information.
        </SubSection>
        <SubSection number="4.6.3.">
          Subscriber shall maintain complete and accurate books and records relating to Subscriber’s and End Users’ use
          of the Platform and maintain copies of such books and records in accordance with industry standards and
          Applicable Law and, without limiting the generality of the foregoing, for at least ﬁve years after the last
          transaction date utilizing the Platform. 
        </SubSection>
      </ContentSection>
      <ContentSection title="5. Term & Termination">
        <DefinitionItem
          number="5.1."
          term="Term."
          definition={
            'The term of this Agreement begins on the Effective Date hereof and will continue for two (2) years after such date (the “Initial Term”), and thereafter shall renew automatically for successive annual periods (each, a “Renewal Term” and collectively with the Initial Term, the “Term”), unless terminated by either Party by giving no fewer than ninety (90) days’ written notice to the other Party.'
          }
        />
        <SectionHeader number="5.2." title="Termination; Suspension." />

        <SubSection number="5.2.1.">
          In the event of a material breach of this Agreement by a Party, the other Party may terminate this Agreement
          by giving thirty (30) days prior, written notice to the breaching Party; provided, however, that this
          Agreement shall not terminate if the breaching Party has cured the breach before the expiration of such thirty
          (30) day period.
        </SubSection>
        <SubSection number="5.2.2.">
          This Agreement is terminable immediately without notice by a Party if the other Party: (i) voluntarily
          institutes insolvency, receivership, or bankruptcy proceedings; (ii) is involuntarily made subject to any
          bankruptcy or insolvency proceeding and such proceeding is not dismissed within ninety (90) days of the ﬁling
          of such proceeding; (iii) makes an assignment for the beneﬁt of creditors; or (iv) undergoes any dissolution
          or cessation of business.
        </SubSection>
        <SubSection number="5.2.3.">
          In addition, YASBe ("YASBe")s shall have the right to suspend, modify or terminate the provision of any of its
          Services or this Agreement as YASBe ("YASBe")s reasonably determines is necessary to comply with Applicable
          Law or direction or order imposed by any Governmental Authority and may terminate this Agreement immediately
          upon notice to Subscriber in each of the foregoing circumstances. YASBe ("YASBe")s shall have the right to
          suspend, modify or terminate the provision of any of its Services or this Agreement in the event that Fortress
          terminates or suspends Subscriber’s or an End User’s right to access or use the Fortress Services or Fortress
          Account or if any Third Party Services necessary for YASBe ("YASBe")s to perform its obligations hereunder
          terminates or suspends YASBe ("YASBe")s’, Subscriber’s or an End User’s right to access or use such Third
          Party Services. 
        </SubSection>
        <SubSection number="5.2.4.">
          YASBe ("YASBe")s may suspend Subscriber’s or an End User’s right to access and use the Platform, in whole or
          in part, immediately upon notice to Subscriber if YASBe ("YASBe")s determines in its reasonable discretion
          that Subscriber’s or an End User’s use or access of the Platform (i) poses a security risk to YASBe
          ("YASBe")s, the Platform or any third party, (ii) may adversely impact the availability, functionality or
          performance of the Platform or (iii) may be fraudulent, illegal or otherwise prohibited by YASBe ("YASBe")s.
          YASBe ("YASBe")s may terminate or suspend any End User or Subscriber if such End User or Subscriber engages in
          activities YASBe ("YASBe")s considers high-risk. 
        </SubSection>
        <DefinitionItem
          number="5.3."
          term="Effect of Termination or Expiration."
          definition={
            'In the event of any termination or expiration of this Agreement: (i) Subscriber shall pay YASBe ("YASBe")s for all amounts payable hereunder as of the effective date of termination or expiration; (ii) all rights and licenses granted hereunder to Subscriber shall immediately cease, and Subscriber and its Authorized Users and End Users shall immediately cease all access to, and usage of, the Platform and the Documentation; and (iii) each Receiving Party shall either return to the Disclosing Party, or, at the Disclosing Party’ direction, destroy and provide the Disclosing Party with written certification of the destruction of, all documents, computer files, and other materials containing any Confidential Information of the Disclosing Party that are in the Receiving Party’s possession, custody, or control; provided, however, that each Receiving Party may keep a copy of such Confidential Information for legal and/or regulatory purposes and/or as part of any electronic archival back-up systems.'
          }
        />
        <DefinitionItem
          number="5.4."
          term="Transition Assistance."
          definition={
            'Upon any expiration or termination of this Agreement, subject to Subscriber’s compliance with all terms of this Agreement and Applicable Law, YASBe ("YASBe")s will use reasonable efforts to provide such information, cooperation, and assistance to Subscriber for a period not to exceed sixty (60) days from the effective date of termination, at YASBe ("YASBe")s’ then-current Professional Services rates, as Subscriber may reasonably request, to assure an orderly transition to Subscriber or a new service provider. For the avoidance of doubt, nothing in this Section shall be construed as granting Subscriber or any third party any license or right to the Platform, the Documentation, or any other materials provided by YASBe ("YASBe")s hereunder, and, notwithstanding anything to the contrary, YASBe ("YASBe")s may refuse to provide transition assistance hereunder if Subscriber or any End User owes payment to YASBe ("YASBe")s or in the event YASBe ("YASBe")s concludes such transition assistance may pose a risk to YASBe ("YASBe")s or any third party and such risk is not remediated by Subscriber to the satisfaction of YASBe ("YASBe")s.'
          }
        />
        <DefinitionItem
          number="5.5."
          term="Survival."
          definition={
            'The following provisions shall survive any termination or expiration of this Agreement: Section 1 (“Recitals and Definitions”), Section 2.5 (“Title”), Section 4 (“Financial Terms; Audits”) until all monies due have been paid in full, Section 5.3 (“Effect of Termination or Expiration”), Section 5.4 (“Transition Assistance”), Section 6 (“Confidentiality and Data”), Section 7.4 (“Disclaimer”), Section 8 (“Indemnification”), Section 9 (“Limitation of Liability”), and this Section 5.5 (“Survival”).'
          }
        />
      </ContentSection>
      <ContentSection title="6. Confidentiality and Data">
        <DefinitionItem
          number="6.1."
          term="Use and Disclosure of Conﬁdential Information."
          definition={
            'The Receiving Party shall, with respect to any Conﬁdential Information of the Disclosing Party: (i) use such Conﬁdential Information only in connection with the Receiving Party’s performance of its obligations and exercise of its rights under this Agreement; (ii) subject to Section 6.3 below, restrict disclosure of such Conﬁdential Information within the Receiving Party’s organization to only those employees and consultants of the Receiving Party who have a need to know such Conﬁdential Information in connection with the Receiving Party’s performance of its obligations and exercise of its rights under this Agreement; provided, however, that each Party may disclose the other Party’s Conﬁdential Information to Custodians as needed for Custodians to perform their obligations to Subscriber and/or YASBe ("YASBe")s (and Custodians’ agreements with such Disclosing Party shall govern Custodians’ use and disclosure of such Conﬁdential Information); and (iii) except as expressly contemplated under the preceding clause (ii), not disclose such Conﬁdential Information to any third party unless authorized in writing by the Disclosing Party to do so.'
          }
        />
        <DefinitionItem
          number="6.2."
          term="Protection of Confidential Information."
          definition={
            'The Receiving Party shall protect the confidentiality of any Confidential Information disclosed by the Disclosing Party using at least the degree of care that it uses to protect its own confidential information (but no less than a reasonable degree of care).'
          }
        />
        <DefinitionItem
          number="6.3."
          term="Compliance by Personnel."
          definition={
            'Except with respect to disclosures made to Custodians pursuant to Section 5.1(ii): (i) the Receiving Party shall, prior to providing any employee or consultant access to any Confidential Information of the Disclosing Party, inform such employee or consultant of the confidential nature of such Confidential Information and require such employee or consultant to comply with the Receiving Party’s obligations hereunder with respect to such Confidential Information; and (ii) the Receiving Party shall be responsible to the Disclosing Party for any violation of this Section 5 by any such employee or consultant.'
          }
        />
        <DefinitionItem
          number="6.4."
          term="Required Disclosures."
          definition={
            'In the event the Receiving Party becomes or may become legally compelled to disclose any Confidential Information (whether by deposition, interrogatory, request for documents, subpoena, civil investigative demand or other process or otherwise), the Receiving Party shall provide to the Disclosing Party prompt prior written notice of such requirement so that the Disclosing Party may seek a protective order or other appropriate remedy and/or waive compliance with the terms of this Section. In the event that such protective order or other remedy is not obtained, or that the Disclosing Party waives compliance with the provisions hereof, the Receiving Party shall furnish only that portion of the Confidential Information which it is advised by counsel is legally required to be disclosed, and shall use commercially reasonable efforts to insure that confidential treatment shall be afforded such disclosed portion of the Confidential Information.'
          }
        />
        <DefinitionItem
          number="6.5."
          term="Use of Data."
          definition={
            'Not with standing anything to the contrary contained in this Agreement, YASBe ("YASBe")s may either itself or through its service providers: (i) during the Term, process and use any data it receives from Subscriber, Authorized Users, and/or End Users, including, without limitation, to use all End User Data in accordance with the Privacy Policy and to perform its obligations hereunder and operate, maintain, and improve the Services; and (ii) both during and after the Term, anonymize any and all such data so that the applicable Authorized Users and End Users are not identified, merge such anonymized data with other data, and use such anonymized data for its reporting, planning, development, and promotional purposes and to improve the Services. Subscriber represents and warrants that it has all necessary rights in and to such data to provide YASBe ("YASBe")s the rights granted herein to use such data in accordance with this Agreement. Subscriber acknowledges that YASBe ("YASBe")s has a customer relationship with End Users with respect to the Platform and may collect information from or about such End Users, and such information provided to or obtained by YASBe ("YASBe")s does not constitute End User Data.'
          }
        />
        <DefinitionItem
          number="6.6."
          term="Appropriate Safeguards."
          definition={
            'Subscriber shall establish and maintain appropriate administrative, technical and physical safeguards designed to (i) protect the security, confidentiality and integrity of the End User Data; (ii) ensure against any anticipated threats or hazards to its security and integrity; (iii) protect against unauthorized access to or use of such information or associated records which could result in substantial harm or inconvenience to any End User; and (iv) ensure the proper disposal of End User Data (collectively, the “Information Security Program”). At all times during the Term, (x) Subscriber shall use at least the same degree of care in protecting the End User Data against unauthorized disclosure as it accords to its other confidential customer information, but in no event less than a reasonable standard of care; and (y) the Information Security Program shall be in compliance with all Privacy Laws. Subscriber will maintain commercially reasonable, industry standard data encryption policies and controls governing the storage and transmission of data, tapes, images, recordings, and records maintained, produced, or received by Subscriber in connection with the Platform.'
          }
        />
        <DefinitionItem
          number="6.7."
          term="Security Incident."
          definition={
            'In the event a Party suffers authorized access to End User Data, such Party will notify the other Party in writing as soon as reasonably practicable, but in no event later than forty-eight (48) hours (or such shorter timeframe if required under Applicable Law), after such incident is discovered by such Party unless prohibited by Applicable Law. Such notification will include, to the extent known at the time of such notice and unless otherwise prohibited by Applicable Law, (i) a description of the facts and circumstances surrounding such incident and the known effects thereof on the other Party; (ii) End User Data that was subject to such incident; and (iii) the corrective actions taken or to be taken by such Party in response to such incident. In the event of any such incident, the accessed Party will promptly use its best efforts to prevent a recurrence of any such incident. The access Party agrees to cooperate in good faith with the other Party in handling such incident, including assisting with any investigation and, unless prohibited by Applicable Law, making available records, logs, files, data reporting and other materials reasonably requested by the other Party or required to comply with Applicable Law. YASBe ("YASBe")s shall have final approval over any notice to End Users regarding any such incident, such approval not to be unreasonably withheld, conditioned or delayed.'
          }
        />
        <DefinitionItem
          number="6.8."
          term="Irreparable Injury."
          definition={
            'Each Party acknowledges that the other Party may be irreparably harmed by any breach of this Section, and agrees that such other Party may seek, in any court of appropriate jurisdiction, an injunction and/or any other equitable relief necessary to prevent or cure any such actual or threatened breach thereof, without the necessity of proving monetary damages or posting a bond or other security. The preceding sentence shall in no way limit any other legal or equitable remedy, including monetary damages, the non-breaching Party would otherwise have under or with regard to this Agreement.'
          }
        />
      </ContentSection>
      <ContentSection title="7. Representations and Warranties; Disclaimer">
        <DefinitionItem
          number="7.1."
          term="Mutual Representations and Warranties."
          definition={
            'Each Party represents and warrants that: (i) this Agreement constitutes its valid and binding obligation and is enforceable against it in accordance with the terms of this Agreement; and (ii) the execution and delivery of this Agreement by it and the performance of its obligations and exercise of its rights hereunder: (a) will not conﬂict with or violate any Applicable Law; or (b) are not in violation or breach of, and will not conﬂict with or constitute a default under, any contract, agreement, or commitment binding upon it, including, without limitation, any non-disclosure, conﬁdentiality, non-competition, or other similar agreement.'
          }
        />
        <DefinitionItem
          number="7.2."
          term='Representations and Warranties of YASBe ("YASBe")s.'
          definition={
            'In addition to the representations and warranties set forth in Section 7.1, YASBe ("YASBe")s represents and warrants that: (i) YASBe ("YASBe")s shall use commercially reasonable efforts to ensure that the Platform will not contain any Malicious Code; (ii) all Professional Services and Support Services shall be performed in a professional and workmanlike manner; (iii) the SaaS Services shall comply in all material respects with the Documentation; (iv) YASBe ("YASBe")s is, and shall remain during the Term, duly authorized under all Applicable Laws, and has made or obtained and shall maintain in full force and effect during the Term all licenses, permits, and registrations necessary, to provide the Services; and (v) YASBe ("YASBe")s has not received on or before the Effective Date any written notice or other communication from any governmental body regarding any alleged failure to make or obtain any license, permit, or registration necessary to provide the Services.'
          }
        />
        <DefinitionItem
          number="7.3."
          term="Representations and Warranties of Subscriber."
          definition={
            'In addition to the representations and warranties set forth in Section 7.1, Subscriber represents, warrants and covenants that: (i) Subscriber and its respective officers, directors, employees, and agents (collectively, the “Subscriber Representatives”) are in compliance with the Foreign Corrupt Practices Act of 1977, as amended, and any rules and regulations thereunder, and similar laws of foreign jurisdictions; (ii) the Subscriber Representatives are in compliance with the U.S. money laundering laws and regulations, the U.S. Bank Secrecy Act, as amended by the USA Patriot Act of 2001 (including any record keeping or reporting requirements thereunder), all applicable KYC laws and regulations, and the anti-money laundering laws and regulations of other jurisdictions; (iii) Subscriber’s products and services made available through the Front End are in compliance with Applicable Law and provide all disclosures required to comply with Applicable Law, including Regulation E issued by the Consumer Financial Protection Bureau (CFPB); (iv) none of its officers, directors, or principals has been convicted of, or have agreed to enter into a pretrial diversion or similar program in connection with the prosecution of, a criminal offense involving theft, dishonesty, breach of trust, money laundering, the illegal manufacture, sale, distribution of or trafficking in controlled substances, or substantially equivalent activity in a domestic, military, or foreign court; and (v) the Subscriber Representatives and the End Users (a) are not a Prohibited User; and (b) do not, to Subscriber’s knowledge, engage in any dealings or transactions with Prohibited Users.'
          }
        />
        <DefinitionItem
          number="7.4."
          term="Disclaimer."
          definition={
            'EXCEPT AS EXPRESSLY SET FORTH IN SECTION 6.1, SECTION 6.2, AND SECTION 7.3, THE SERVICES, THE PLATFORM, THE FRONT END, THEIR COMPONENTS, ANY UPDATES, THE DOCUMENTATION, THE DELIVERABLES, AND ANY OTHER MATERIALS PROVIDED HEREUNDER, ARE PROVIDED “AS IS” AND “AS AVAILABLE,” AND NEITHER PARTY MAKES ANY WARRANTIES IN CONNECTION WITH THIS AGREEMENT AND HEREBY DISCLAIMS ANY AND ALL IMPLIED OR STATUTORY WARRANTIES, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, ERROR-FREE OR UNINTERRUPTED OPERATION, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. To the extent that a Party may not as a matter of Applicable Law disclaim any warranty, the scope and duration of such warranty shall be the minimum permitted under such law.'
          }
        />
      </ContentSection>
      <ContentSection title="8. Indemnification">
        <DefinitionItem
          number="8.1."
          term={`Indemnification by YASBe ("YASBe")s.`}
          definition={
            'Subject to Section 8.2, YASBe ("YASBe")s shall defend, indemnify, and hold harmless Subscriber and its officers, directors, managers, and employees from any and all liabilities, losses, ﬁnes, penalties, costs, and expenses, including reasonable attorneys’ fees (collectively, “Losses”) incurred by them in connection with any third-party claim, action, or proceeding (each, a “Claim”): (i) arising from YASBe ("YASBe")s’ fraud, gross negligence, or wilful misconduct; and (ii) alleging that the use of the Platform in accordance with this Agreement infringes, violates, or misappropriate any third-party Intellectual Property Rights.'
          }
        />
        <DefinitionItem
          number="8.2."
          term={`Exceptions to YASBe ("YASBe")s Indemnification Obligations.`}
          definition={`YASBe ("YASBe")s shall not be obligated to indemnify, defend, or hold harmless the parties set forth in Section 8.1 to the extent that the Claim arises from: (i) use of the Platform in combination with modules, apparatus, hardware, software, or services not provided by YASBe ("YASBe")s; (ii) use of the Platform that violates this Agreement or any Applicable Law; (iii) the alteration or modification of the Platform by a party other than YASBe ("YASBe")s; or (iv) any action taken by YASBe ("YASBe")s or its personnel, including, without limitation, changes to the Subscriber’s data or any transaction executed on behalf of the Subscriber, as a result of instructions from Subscriber to YASBe ("YASBe")s.`}
        />
        <DefinitionItem
          number="8.3."
          term={`Infringement Claims.`}
          definition={`In the event that YASBe ("YASBe")s reasonably determines that the Platform is likely to be the subject of a Claim of infringement, violation, or misappropriation of third-party rights, YASBe ("YASBe")s shall have the right (but not the obligation), at its own expense and option, to: (i) procure for Subscriber the right to continue to use the Platform as set forth hereunder; (ii) replace the infringing components of the Platform with other components with the same or similar functionality that are reasonably acceptable to Subscriber; or (iii) suitably modify the Platform so that it is non-infringing and reasonably acceptable to Subscriber. If none of the foregoing options is available to YASBe ("YASBe")s on commercially reasonable terms, YASBe ("YASBe")s may terminate this Agreement without further liability to Subscriber. This Section 8.3, together with the indemnity provided under Section 8.1, states Subscriber’s sole and exclusive remedy, and YASBe ("YASBe")s’ sole and exclusive liability, regarding infringement, violation, or misappropriation of any Intellectual Property Rights of a third party.`}
        />
        <DefinitionItem
          number="8.4."
          term={`Indemnification by Subscriber.`}
          definition={`Subscriber shall defend, indemnify, and hold harmless YASBe ("YASBe")s and its officers, directors, managers, and employees (each, a “YASBe ("YASBe")s Indemnitee”) from any and all Losses incurred by them in connection with any Claim: (i) arising from Subscriber’s or End User’s actions or omissions; (ii) arising from Subscriber’s breach of its obligations, representations and warranties hereunder, including those applicable to End Users, or failure to comply with YASBe ("YASBe") Requirements; (iii) alleging that the use of any materials provided by Subscriber in accordance with this Agreement infringes, violates, or misappropriate any third-party Intellectual Property Rights; (iv) arising from any Authorized Users’ or End Users’ access to, and use of, the Account, Platform and/or Front End, including any transaction initiated or effectuated by or on behalf of an Authorized User or End User; (v) arising from Subscriber’s or End User’s breach of any Custodian Agreements; (vi) arising from Subscriber’s provision of End User Data to YASBe ("YASBe")s or the processing or use of the End User Data as permitted in this Agreement; (vii) alleging or arising out of any breach of any Customer Agreement with End User; or (viii) Subscriber’s products or services, except to the extent related to the SaaS Services.`}
        />
        <DefinitionItem
          number="8.5."
          term={`Procedure for Handling Indemnification Claims.`}
          definition={`In the event of any Claim for which indemnification is available, the indemniﬁed Party shall give prompt written notice of any such Claim to the indemnifying Party; provided, however, that the failure of the Party seeking indemnification to give timely notice hereunder will not affect rights to indemnification hereunder, except to the extent that the indemnifying Party demonstrates actual damage caused by such failure. The indemnifying Party shall have the right to control and direct the investigation, defense, and settlement of each such Claim; provided that YASBe ("YASBe")s shall have the right to control and direct the investigation, defense and settlement of any such Claim brought by a governmental authority. The indemniﬁed Party shall reasonably cooperate with the indemnifying Party (at the indemnifying Party’s sole cost and expense) in connection with the foregoing. The indemniﬁed Party may participate in the defense of the Claim with counsel of its own choosing, at its own cost and expense, on a strictly monitoring basis. The indemnifying Party shall not enter any settlement or resolution of any Claim that would constitute an admission of guilt or liability on the part of the indemniﬁed Party, without the indemniﬁed Party’s express prior written consent. Amounts owing to YASBe ("YASBe")s Indemnitee under this Agreement shall be paid immediately upon written demand for indemnification containing in reasonable detail the facts giving rise to such Losses.`}
        />
      </ContentSection>
      <ContentSection title="9. Limitation of Liability">
        <DefinitionItem
          number="9.1."
          term={`Liability Exclusion. `}
          definition={`
    SUBJECT TO SECTION 9.3, NEITHER PARTY WILL BE LIABLE TO THE OTHER PARTY (NOR TO ANY PERSON CLAIMING RIGHTS DERIVED FROM SUCH OTHER PARTY'S RIGHTS) FOR CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, LOST REVENUES OR PROFITS, LOSS OF USE, OR LOSS OF GOODWILL OR REPUTATION) WITH RESPECT TO ANY CLAIMS BASED ON CONTRACT, TORT, OR OTHERWISE (INCLUDING NEGLIGENCE AND STRICT LIABILITY) ARISING OUT OF THIS AGREEMENT, REGARDLESS OF WHETHER THE PARTY LIABLE OR ALLEGEDLY LIABLE WAS ADVISED, HAD OTHER REASON TO KNOW, OR IN FACT KNEW OF THE POSSIBILITY THEREOF. FROM TIME TO TIME, SUBSCRIBER MAY INSTRUCT YASBe TO TAKE CERTAIN ACTIONS, INCLUDING BUT NOT LIMITED TO, MAKING CHANGES TO SUBSCRIBER’S DATA OR EXECUTING TRANSACTIONS ON BEHALF OF THE SUBSCRIBER; IN NO EVENT WILL YASBe HAVE ANY LIABILITY WITH RESPECT TO ANY SUCH ACTION TAKEN AT SUBSCRIBER’S INSTRUCTION, UNLESS DUE TO YASBe’S GROSS NEGLIGENCE OR WILLFUL MISCONDUCT.
    `}
        />
        <DefinitionItem
          number="9.2."
          term={`Limitation of Damages.`}
          definition={`SUBJECT TO SECTION 9.3, YASBe’S MAXIMUM LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT, REGARDLESS OF THE CAUSE OF ACTION (WHETHER IN CONTRACT, TORT, BREACH OF WARRANTY, OR OTHERWISE), WILL NOT EXCEED THE AGGREGATE AMOUNT OF THE FEES PAID AND PAYABLE TO YASBe BY SUBSCRIBER DURING THE TWELVE (12) MONTH PERIOD PRECEDING THE DATE ON WHICH THE CLAIM ARISES.`}
        />
        <DefinitionItem
          number="9.3."
          term={`Exceptions.`}
          definition={`THE EXCLUSIONS AND LIMITATIONS OF LIABILITY SET FORTH IN SECTION 9.1 AND SECTION 9.2 SHALL NOT APPLY TO: (I) SUBSCRIBER’S INDEMNIFICATION OBLIGATIONS SET FORTH IN SECTION 8.4; (II) A PARTY’S FRAUD, GROSS NEGLIGENCE, OR WILLFUL MISCONDUCT; OR (III) SUBSCRIBER’S FAILURE TO PAY ANY UNDISPUTED SUMS DUE HEREUNDER OR BREACH OF SECTION 2.4.`}
        />
      </ContentSection>
      <ContentSection title="10. General Provisions">
        <DefinitionItem
          number="10.1."
          term={`Notices.`}
          definition={`Unless otherwise speciﬁed herein, all notices and other communications between the Parties (other than routine operational communications) required or permitted by this Agreement or by Applicable Law, will be deemed properly given, if given by: (i) personal service; (ii) registered or certiﬁed mail, postage prepaid, return receipt requested; or (iii) nationally or internationally recognized private courier service to the respective addresses of the Parties set forth in the Order Form or such other address as the respective Parties may designate by like notice from time to time. Notices so given shall be effective upon: (a) receipt by the Party to which notice is given; or (b) on the ﬁfth (5th) business day following mailing, whichever occurs ﬁrst.`}
        />
        <DefinitionItem
          number="10.2."
          term={`Relationship of the Parties.`}
          definition={`Each Party is an independent contractor of the other Party. Nothing herein shall constitute a partnership between or joint venture by the Parties or constitute either Party the agent of the other.`}
        />
        <DefinitionItem
          number="10.3."
          term={`Assignment.`}
          definition={`Neither Party may assign or otherwise transfer any of its rights or obligations under this Agreement without the prior, written consent of the other Party; provided, however, that YASBe ("YASBe")s may, upon written notice to Subscriber and without the consent of Subscriber, assign or otherwise transfer this Agreement: (i) to any of its Affiliates; or (ii) in connection with a change of control transaction (whether by merger, consolidation, sale of equity interests, sale of all or substantially all assets, or otherwise). Any assignment or other transfer in violation of this Section shall be null and void. Subject to the foregoing, this Agreement shall be binding upon and inure to the beneﬁt of the Parties hereto and their permitted successors and assigns.`}
        />
        <DefinitionItem
          number="10.4."
          term={`Publicity.`}
          definition={`During the Term, YASBe ("YASBe")s shall have the right, but not the obligation, to: (i) publicly announce in any and all media now known or hereafter devised that Subscriber is a customer of YASBe ("YASBe")s and a user of the Services; and (ii) use Subscriber’s trademarks, service marks, and trade names, in any and all media now known or hereafter devised, in accordance with any guidelines provided by Subscriber, to promote YASBe ("YASBe")s and/or the Services. For the avoidance of doubt, Subscriber shall be solely responsible for the marketing, advertising, and promotion of its own products and services.`}
        />
        <DefinitionItem
          number="10.5."
          term={`Force Majeure.`}
          definition={`Neither Party shall be liable for any failure or delay in the performance of its obligations under this Agreement to the extent such failure or delay or both is caused, directly or indirectly, without fault by such Party, by any reason beyond its reasonable control, including but not limited to, fire, flood, earthquake, elements of nature or acts of God, acts of state, acts of war, terrorism, riots, civil disorders, rebellions, revolutions, quarantines, epidemics, pandemics, embargoes, and other similar governmental action (each a “Force Majeure Event”). Any Party so delayed in its performance will promptly notify the other by telephone or by the most timely means otherwise available (to be confirmed in writing within two (2) business days of the inception of such delay) and describe in reasonable detail the circumstances causing such delay. In such event, the performance times shall be extended for a period of time equivalent to the time lost because of the excusable delay; provided, however, if the delay or failure continues for more than thirty (30) consecutive days, the Party not relying on the excusable delay may terminate this Agreement upon written notice to the other Party. To avail itself of the relief provided in this Section, a Party must act with due diligence to remedy the cause of, or to mitigate or overcome, such delay or failure.`}
        />
        <DefinitionItem
          number="10.6."
          term={`Governing Law, Venue.`}
          definition={`The validity, interpretation, and performance of this Agreement shall be governed by the laws of the State of Delaware without giving effect to the conflicts of law’s provisions thereof. Any disputes, controversies, or claims in connection with or arising out of this Agreement, its negotiation, breach, existence, validity, or termination, shall proceed in a federal or state court located in the State of Delaware. Each Party hereby irrevocably submits to the exclusive jurisdiction of such courts. Each Party irrevocably waives, to the fullest extent permitted by Applicable Law, any objection to the laying of venue in such courts of any legal action or proceeding arising out of or relating to this Agreement and any claim that any such action or proceeding has been brought in an inconvenient forum. Service of process shall be made in any manner allowed by Applicable Law.`}
        />
        <DefinitionItem
          number="10.7."
          term={`Modification.`}
          definition={`YASBe ("YASBe")s may modify all or any part of this Agreement from time to time, in which case YASBe ("YASBe")s will revise the “Last Updated” date at the top of this Agreement, and such updated Agreement will be effective as of the time of posting or such other date as may be specified in the updated Agreement or YASBe ("YASBe")s’ notice to Subscriber. If YASBe ("YASBe")s makes changes to the Agreement that are material, it will use reasonable efforts to notify Subscriber. Subscriber’s continued access or use of the SaaS Services after the modified Agreement has become effective will be deemed Subscriber’s acceptance of the modified Agreement. Except as set forth in this Agreement, this Agreement may not be modified except in writing and signed by authorized representatives of both Parties.`}
        />
        <DefinitionItem
          number="10.8."
          term={`No Waiver.`}
          definition={`The rights and remedies of the Parties to this Agreement are cumulative and not alternative. No waiver of any rights is to be charged against any Party unless such waiver is in writing signed by an authorized representative of the Party so charged. Neither the failure nor any delay by any Party in exercising any right, power, or privilege under this Agreement shall operate as a waiver of such right, power, or privilege, and no single or partial exercise of any such right, power, or privilege shall preclude any other or further exercise of such right, power, or privilege or the exercise of any other right, power, or privilege.`}
        />
        <DefinitionItem
          number="10.9."
          term={`Severability.`}
          definition={`If any provision of this Agreement is held invalid or unenforceable by any court of competent jurisdiction, the other provisions of this Agreement will remain in full force and effect, and, if legally permitted, such offending provision will be replaced with an enforceable provision that as nearly as possible effects the Parties’ intent.`}
        />
        <DefinitionItem
          number="10.10."
          term={`Entire Agreement.`}
          definition={`This Agreement, each Order Form and any executed Statements of Work contain the entire understanding of the Parties with respect to the subject matter hereof and supersede all prior agreements and commitments with respect thereto. There are no other oral or written understandings, terms, or conditions, and neither Party has relied upon any representation, express or implied, not contained in this Agreement or an Order Form. In the event of any conflict between any terms or conditions contained in this Agreement, an Order Form, any Statement of Work, or any Schedule to this Agreement, the following agreements and documents shall control in the following order of descending precedence: (i) the Order Form; (ii) the body of this Agreement; (iii) the applicable Statement of Work; and (iv) the applicable Schedule. Notwithstanding the foregoing, provisions of this Agreement may be modified in a Statement of Work, solely for the purposes of that Statement of Work, only by an express statement specifically identifying the Section(s) of this Agreement to be modified.`}
        />
      </ContentSection>{' '}
      <ContentSection title="Schedule A">
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Support Services
        </p>

        <DefinitionItem
          number="1."
          term="Scope."
          definition="This Schedule A is entered into in connection with the PLATFORM AGREEMENT (the “Agreement”) to which it is attached. YASBe agrees to use commercially reasonable efforts to provide the support services stated herein with respect to the production version of the Platform (the “Support Services”) to Subscriber, but not to any End Users, in connection with the Services. "
        />
        <DefinitionItem
          number="2."
          term="Definition."
          definition="Any capitalized term used but not otherwise deﬁned in this Schedule A shall have the meaning assigned thereto in the main body of the Agreement. "
        />
        <SubSection number="2.1.">
          “Actual Uptime” means the aggregate amount of time in the calendar quarter within Scheduled Uptime that is not
          Downtime. 
        </SubSection>
        <SubSection number="2.2.">
          “Availability” means the Actual Uptime of the Platform expressed as a percentage of the Scheduled Uptime for
          the Platform (i.e., Availability % = (Actual Uptime/ (Scheduled Uptime - Maintenance Downtime)) x 100)
          measured on a monthly basis in hours. 
        </SubSection>
        <SubSection number="2.3.">
          “Error” means any failure of the Platform to comply in all material respects with the Documentation and/or
          comply with the service level requirements set forth in this Schedule A. 
        </SubSection>
        <SubSection number="2.4.">
          “Error Correction” means either a modiﬁcation to the Platform that causes it to conform in all material
          respects to the Documentation, or a Workaround. 
        </SubSection>
        <SubSection number="2.5.">
          “Critical Error” shall mean an Error in the Platform that causes the Platform to be completely unavailable to
          at least ﬁfty percent (50%) of the Authorized Users and End Users and no Workaround exists.
        </SubSection>
        <SubSection number="2.6.">
          “Medium Error” shall mean an Error in the Platform that causes the performance of the Platform to be
          materially degraded for at least ﬁfty percent (50%) of the Authorized Users and End Users, and no Workaround
          exists. 
        </SubSection>
        <SubSection number="2.7.">
          “Low Error” shall mean an Error in the Platform that does not rise to the level of a Critical or a Medium
          Error. 
        </SubSection>
        <SubSection number="2.8.">
          “Downtime” means an interruption of thirty (30) minutes or more, that is not caused by any act, omission,
          system, product or service of Subscriber or any of its service providers, commencing from the time a
          Designated Contract provides YASBe notice of such Downtime pursuant to Section 4.4 below, during which ten
          percent (10%) or more of Authorized Users are unable to access and use the Platform, in each case as measured
          in Section 10 below (each, an “Interruption”). For the avoidance of doubt an interruption of fewer than thirty
          (30) minutes shall not count as an Interruption or as Downtime when calculating Availability.
        </SubSection>
        <SubSection number="2.9.">
          “Maintenance Downtime” means those time frames during which YASBe may perform scheduled routine systems
          maintenance, as set forth in Section 9 below. 
        </SubSection>
        <SubSection number="2.10.">
          “Regular Business Hours” means 8AM Eastern Time to 8PM Eastern Time, Monday through Friday, excluding local,
          state, and federal holidays observed by YASBe. 
        </SubSection>
        <SubSection number="2.11.">
          “Resolution” means the Error Correction or an answer to an inquiry has been delivered to Subscriber. 
        </SubSection>
        <SubSection number="2.12.">
          “Response Time” means the time required for YASBe personnel to respond to Subscriber conﬁrming receipt of
          Error notiﬁcation and informing Subscriber if additional information is needed to proceed with analysis. 
        </SubSection>
        <SubSection number="2.13.">
          “Scheduled Uptime” shall mean 99% of the time during any month, excluding Maintenance Windows. 
        </SubSection>
        <SubSection number="2.14.">
          “Support Ticket” means the logging of a service-impacting condition by the YASBe operations centre on behalf
          of Subscriber. 
        </SubSection>
        <SubSection number="2.15.">
          “Supported Environment” means the prescribed hardware and operating system conﬁgurations for the Platform as
          set forth in the Documentation. 
        </SubSection>
        <SubSection number="2.16.">
          “Workaround” shall mean a change in a procedure or routine that, when observed in the regular operation of the
          Platform, eliminates any material adverse effect on Subscriber of the Error without imposing additional
          expense or an unreasonable burden upon Subscriber. 
        </SubSection>
        <SubSection number="2.17.">
          “Designated Contacts” means those Subscriber employees described in Section 4.3 below and previously
          designated by Subscriber as authorized contacts to report, discuss, and resolve issues contemplated by this
          Schedule A. Subscriber may modify its list of Designated Contacts upon written notice to YASBe. 
        </SubSection>
        <DefinitionItem
          number="3."
          term="Performance Standards."
          definition="YASBe agrees to use commercially reasonable efforts to meet the performance standards set forth in this Schedule A (the “Performance Standards”). "
        />
        <DefinitionItem number="" term="Performance Standards – Services:" definition="" />
        <ServiceTable />
        <DefinitionItem number="4." term="Support and Problem Resolution" definition="" />
        <SubSection number="4.1.">Contact Methods. Contact cs@beeznis.com for errors. </SubSection>
        <SubSection number="4.2.">
          General Inquiries. Subscriber may contact YASBe support (via cs@beezins.com) during  YASBe’s Regular Business
          Hours with general inquiries (including inquiries relating to the setup, conﬁguration, and management) and for
          general tech-to-tech support.
        </SubSection>
        <SubSection number="4.3.">
          Designated Contacts. Subscriber shall be allowed up to four (4) Designated Contacts, and one of the Designated
          Contacts must be identiﬁed as the administrator for Subscriber. Subscriber may change a Designated Contact
          and/or administrator from time to time upon prior notice to YASBe.
        </SubSection>
        <SubSection number="4.4.">
          Error Reporting. If Subscriber believes that an Error has occurred, Subscriber must initiate a Support Ticket
          using the Service Desk Portal Entry. For all Support Tickets, Subscriber’s Designated Contacts must include
          for each Error: (i) a general description of the Error and the proposed severity level, which shall be
          designated by Subscriber reasonably and in good faith; and (ii) a reproducible test case or operational
          information (error message, debug log output, etc.). Subscriber shall supply YASBe with all information as is
          reasonably requested by YASBe and as is available to Subscriber that is necessary to respond to the inquiry.
          In the event Subscriber does not promptly supply the information described above after YASBe’ initial request,
          the calculation of the Response Time shall be suspended until Subscriber supplies such information and shall
          re-commence at such time as Subscriber supplies such information. 
        </SubSection>
        <SubSection number="4.5.">
          YASBe Response. YASBe’s response shall consist of: (i) an acknowledgement of receipt; and (ii) a tracking
          number. If there is a disagreement as to the severity level of a particular Error, the issue shall be
          escalated to a designated technical lead for YASBe and the designated Subscriber technical representative who
          shall discuss the business impact on Subscriber. The Parties shall undertake reasonable efforts to agree on
          the severity level of Errors, however, absent an agreement between the Parties, the ﬁnal determination of the
          severity level of Errors shall be made by YASBe at its sole, but reasonable, discretion. 
        </SubSection>
        <DefinitionItem number="5." term="Subscriber Responsibilities" definition="" />
        <p className="w-full md:ml-32 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Subscriber shall be and remain responsible for the following: 
        </p>
        <SubSection number="5.1.">Providing ﬁrst-level support to all Authorized Users and End Users; </SubSection>
        <SubSection number="5.2.">Complying with the speciﬁcations of the Supported Environment; </SubSection>
        <SubSection number="5.3.">
          Allowing YASBe access to the Subscriber environment for support purposes. Access shall be remote or on-site,
          as necessary and as reasonably requested by YASBe. Access shall be permitted under direct control of
          Subscriber during business hours; and 
        </SubSection>
        <SubSection number="5.4.">
          Providing YASBe with such information, speciﬁcations, or other information as may reasonably be requested and
          required by YASBe and as may be reasonably available to Subscriber to properly respond to the inquiry in a
          timely fashion
        </SubSection>
        <DefinitionItem number="6." term="Responsible times" definition="" />
        <p className="w-full md:ml-32 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          YASBe shall use commercially reasonable efforts to meet the following Response Times for Support Tickets
          properly submitted by Subscriber as set forth in the table below:
        </p>
        <ResponseTimeTable />
        <DefinitionItem number="7." term="Exclusions" definition="" />
        <SubSection number="7.1.">
          Response Time targets apply only to those Support Services within the scope as set forth in Section 1 of this
          Schedule A, and do not apply to the Maintenance Window, emergency maintenance, or Subscriber-requested service
          interruptions or to any use of the Platform by Subscriber, Authorized Users, or End Users not consistent with
          the Supported Environment.
        </SubSection>
        <SubSection number="7.2.">
          Measurement of outages shall be conducted only in accordance with the procedures set forth herein. Under no
          circumstances shall any tests (including, but not limited to, PING tests) performed by or on behalf of
          Subscriber, Authorized Users, or End Users be recognized by YASBe as valid measurable criteria for the
          purposes of this Schedule A.
        </SubSection>
        <SubSection number="7.3.">
          YASBe shall not be liable or responsible for Errors or other issues with the Support Services in connection
          with:
        </SubSection>
        <SubSection number="7.3.1" className="md:ml-[78px]">
          Non -production environments; 
        </SubSection>
        <SubSection number="7.3.2" className="md:ml-[78px]">
          Support Tickets erroneously opened by Subscriber;
        </SubSection>
        <SubSection number="7.3.3" className="md:ml-[78px]">
          Accounts provided to Subscriber for testing or development purposes; 
        </SubSection>
        <SubSection number="7.3.4" className="md:ml-[78px]">
          Support Tickets opened by Subscriber for service monitoring purposes only;
        </SubSection>
        <SubSection number="7.3.5" className="md:ml-[78px]">
          Support Tickets related to Subscriber maintenance or conﬁgurations or arising from the negligence, acts, or
          omissions of Subscriber, Authorized Users, or End Users; 
        </SubSection>
        <SubSection number="7.3.6" className="md:ml-[78px]">
          Errors arising from problems with technology or services provided to Subscriber by third parties, including,
          without limitation, Custodians; 
        </SubSection>
        <SubSection number="7.3.7" className="md:ml-[78px]">
          The Platform being serviced or modiﬁed by anyone other than YASBe or by a third party authorized by YASBe;
        </SubSection>
        <SubSection number="7.3.8" className="md:ml-[78px]">
          Force Majeure Events; or
        </SubSection>
        <SubSection number="7.3.9" className="md:ml-[78px]">
          Support Tickets requesting the execution of day-to-day operational processes or data investigation for which
          YASBe has provided self -serve tools through the Platform.
        </SubSection>
        <DefinitionItem
          number="8."
          term="Maintenance Downtime."
          definition="The Maintenance Downtime shall be no more than twenty-four (24) hours total in any calendar month, unless previously agreed by the Parties, and YASBe shall use commercially reasonable efforts to conduct such maintenance during off-peak hours for Subscriber. YASBe reserves the right to conduct unscheduled maintenance at any time if it believes in good faith that doing so is necessary to protect the security and/or integrity of the system or to safeguard any data. YASBe shall use commercially reasonable efforts to provide Subscriber at least twenty-four (24) hours advance written notice of any such unscheduled maintenance and will use commercially reasonable efforts to restore service as rapidly as possible in such a situation. For the avoidance of doubt, any unscheduled maintenance performed pursuant to this Section 9 shall be considered Maintenance Downtime. "
        />
        <DefinitionItem
          number="9."
          term="Measurement and Reporting."
          definition="Subscriber shall use the necessary and appropriate measuring and monitoring tools and procedures to measure the Availability and promptly report any alleged deﬁciencies to YASBe. Subscriber will be given access to statuspage.io, which will have Downtime and Availability information.  "
        />
        <DefinitionItem
          number="10."
          term="Environments."
          definition="YASBe will provide the Subscriber with access to two environments throughout the duration of the Agreement. Data initiation or migration will be the responsibility of the Subscriber.- Testing environment (non production)"
        />
        <p className="w-full md:ml-32 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          - Production
        </p>
        <p className="w-full md:ml-32 text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          - Testing environment (non production)
        </p>
      </ContentSection>
      <ContentSection title="Schedule B">
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Third Party Sender Addendum
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          The following terms and conditions apply to Subscriber’s access and use of the Services if Subscriber is a
          Third -Party Sender (as deﬁned in the NACHA Rules). 
        </p>
        <DefinitionItem
          number="1."
          term=""
          definition="Subscriber shall be bound by and comply with the NACHA Rules. "
        />
        <DefinitionItem
          number="2."
          term=""
          definition="Subscriber acknowledges that its ability to transmit ACH entries on behalf of End Users is subject to (i) the applicable bank’s initial and ongoing approval of Subscriber and its End User’s use of the applicable Services, (ii) receipt by the applicable bank of all required and properly executed addenda, forma, authorizations and such other information as the applicable bank may request from time to time; and (iii) Subscriber’s compliance with this Agreement, the NACHA Rules and all Applicable Laws."
        />
        <DefinitionItem
          number="3."
          term=""
          definition="Subscriber authorizes the applicable bank to originate ACH entries on behalf of End Users to receiver accounts."
        />
        <DefinitionItem
          number="4."
          term=""
          definition="Subscriber authorizes the applicable bank to register Subscriber with NACHA as a Third -Party  Sender and to disclose all information required by NACHA to complete and maintain such registration."
        />
        <DefinitionItem
          number="5."
          term=""
          definition="Subscriber will not use the applicable Services as a Third -Party Sender on behalf of any nested Third Party Sender without the applicable bank’s prior written approval, and, in connection with such approval, Subscriber will provide such bank with all additional information and documents requested by such bank and that bank may require Subscriber to execute additional agreements or addenda."
        />
        <DefinitionItem
          number="6."
          term=""
          definition="Subscriber will have procedures in place to identify and monitor End User transactions for activity that may be illegal, fraudulent or otherwise prohibited under this Agreement, the NACHA Rules or Applicable Law, and shall promptly notify the applicable  bank of any activity that it has reason to suspect may be a violation or attempted violation of law, including but not limited to money laundering, fraud, ﬁnancial exploitation of elderly persons or persons with a disability, the Electronic Funds Transfer Act and Regulation E, Article 4A of the UCC and unfair, deceptive or abusive acts or practices. Subscriber will cooperate with the applicable bank and provide information and documents at such Bank’s request to enable it to investigate such activity and comply with Applicable Laws. "
        />
        <DefinitionItem
          number="7."
          term=""
          definition="Subscriber will establish, implement and update, as appropriate, policies, procedures and systems regarding initiation, processing and storage of ACH entries that are designed to protect (a) the conﬁdentiality and integrity of protected information until its destruction; (b) against anticipated threats or hazards to the security or integrity of protected information until its destruction; and (c) against unauthorized use of protected information that could result in substantial harm to a natural person, in accordance with the NACHA Rules. Such policies, procedures and systems must include controls that comply with Applicable Law on access to all systems used by Subscriber to initiate, process and store ACH entries. If Subscriber’s ACH origination or transmission volume exceeds 2 million entries annually, Subscriber will protect account numbers used in the initiation of entries by rendering them unreadable at rest and in transit when stored electronically. "
        />
        <DefinitionItem
          number="8."
          term=""
          definition="Subscriber is solely responsible for determining if the titling and records of a respective settlement account are sufficient to permit the pass -through of FDIC insurance under Applicable Law.  "
        />
        <DefinitionItem
          number="9."
          term=""
          definition="For each ACH entry and ﬁle transmitted by Subscriber to the applicable bank on behalf of an End User, Subscriber represents and warrants that Subscriber: (a) will perform all of its duties as a Third Party Sender in accordance with NACHA Rules; (b) will pay the applicable bank for any credit entries it originates and for any debit entries returned by a ﬁnancial institution; (c) will establish exposure limits for its End Users, in addition to the exposure limits the applicable bank places on Subscriber;  (d) will review End User exposure limits on a periodic basis and modify them as needed; (e) will actively measure exposure limits when processing ACH entries on behalf of each End User; (g) will ensure it has established and implemented procedures for acting upon ACH entries and ﬁles that exceed exposure limits and for handling exceptions; (h) will ensure that its procedures for collecting and monitoring exposure limit information do not impede normal ﬁle processing; (i) will not submit ACH entries that violate Applicable Law; (j)shall not disclose, and will ensure that each End User does not disclose, a receiver’s account number or routing number to any third party for such third party’s use in initiating a separate entry; (k) shall not use the Service on behalf of an End User who is a “foreign shell bank” as deﬁned in 31 CFR 1010.605, as amended from time to time; (l) shall not market any new service or product to its End Users, for which the applicable bank is the originating depository ﬁnancial institution without ﬁrst entering into a separate agreement signed by both Subscriber and the applicable bank; (m) shall obtain all consents and authorizations required for ACH entries under the NACHA Rules and shall retain such consents and authorizations for  no less than two (2) years after they expire; Subscriber agrees to produce requested consents and authorizations within three (3) Business Days of the applicable bank’s request; (n) will: (i) conduct, or has conducted, an audit of its compliance with the NACHA Rules no less frequently than annually; (ii) conduct, or have conducted, an assessment of the risks of its ACH activities; (iii) monitor the origination and return activity of its End Users as originators across multiple settlement dates; (iv) enforce restrictions on the types of ACH entries that may be originated by its End Users; and (v) enforce any exposure limit set by Subscriber or the applicable bank, and warrants that it is legally able to do so; (o) is hereby jointly and severally liable with each respective End User for the retention and delivery to the applicable bank or the receiving depository ﬁnancial institution of any records, documentation or data regarding records of authorizations of ACH entries, copies of items, and copies of eligible source documents, as required by the NACHA Rules; and (p) regarding unauthorized entry, administrative or overall return rates, (i) Subscriber will provide, within ﬁve (5) calendar days, all information requested by the applicable bank in order for such bank to respond to a NACHA  inquiry regarding Subscriber’s or any End User’s unauthorized entry, administrative, or overall return rate, and (ii) if Subscriber or any End User’s unauthorized entry, administrative, or overall return rate exceeds the applicable return rate threshold, Subscriber will cooperate with the applicable bank in creating a detailed plan and timeline for reducing the applicable return rate to a rate below the threshold, and to reduce the return rate to below the threshold within thirty (30) calendar days after such bank’s receipt of NACHA’s written request for information; Subscriber and/or End User, as applicable, will maintain the applicable return rate below the threshold for at least the time required by the NACHA Rules."
        />
        <DefinitionItem
          number="10."
          term=""
          definition="Subscriber will provide the applicable bank with a list of all End Users on whose behalf it will use the applicable Services prior to submitting any ACH entry on behalf of an End User. Such list must contain the name of each End User, each End User’s principal office address and taxpayer identiﬁcation number, and such other information as requested by the applicable bank from time to time. Subscriber must update such list and submit the updated list to the applicable bank each time it adds a new End Us er, removes an End User, or changes End User information included in the list. Before Subscriber can originate ACH entries for a new End User, but not less than ten (10) Business Days prior to originating entries for a particular End User, Subscriber must notify the applicable bank of its intent to onboard a new End User and provide such bank with any information reasonably necessary to identify each End User. Failure to notify the bank of any new End Users may result in processing delays or even rejection of entries. The applicable bank shall have the right, in its sole discretion, to refuse to accept ACH entries from any such End User.  "
        />
        <DefinitionItem
          number="11."
          term=""
          definition="Subscriber shall ensure that each End User has access to a current version of the NACHA Rules."
        />
        <DefinitionItem
          number="12."
          term=""
          definition="Subscriber will provide a copy of all standard forms it uses for End User agreements to the applicable bank and shall promptly provide to such bank notice of any material change to any such forms it enters into with an End User. Such End User agreements must be approved by the applicable bank and satisfy all of the requirements of the NACHA Rules and this Agreement; provided, that such bank’s approval of the form to be used by Subscriber shall not be relied uponas conﬁrming that the End User agreement complies with Applicable Law, the NACHA Rules, and this Agreement.  "
        />
        <DefinitionItem
          number="13."
          term=""
          definition="Before permitting an End User to originate any ACH entry through Subscriber of the applicable bank, Subscriber will enter into a written agreement with such End User that includes a provision that: (a) binds the End User to and requires compliance with  the NACHA Rules and Applicable Law, and includes a right of the applicable bank and Subscriber to terminate or suspend such agreement immediately for End User’s breach of the NACHA Rules or Applicable Law; (b) requires End User to assume the obligations and make the representations and warranties of an originator under the NACHA Rules; (c) requires End User to receive and maintain proper authorization from the receiver for each ACH entry transmitted on behalf of End User; (d) requires End User to conduct an assessment of the risks of its ACH activities as required by the Nacha Rules; (e) requires End User to authorize Subscriber and the applicable bank to originate entries on its behalf to accounts of receivers; (f) prohibits End User from originating entries that violate U.S. law; (g) sets forth restrictions on the types of entries End User may originate; (h) establishes an exposure limit for End User and requires procedure s for Subscriber to review and adjust, as needed, End User exposure limit; (i) requires End User to pay the applicable bank for any credit entries it originates and for any debit Entries returned by a receiving depository ﬁnancial institution, to the extent that such bank does not receive payment from Subscriber, and makes such bank a third party beneﬁciary of such provision; (j) requires End User to comply with the same security requirements, including encryption of electronic ACH data, that Subscriber i s subject to under the NACHA Rules; (k) allows Subscriber and the applicable bank to regularly audit End User for compliance with the NACHA Rules, the terms and conditions of the Agreement with the End User, and Applicable Laws; (l) requires End User to be  responsible for the retention and delivery to the applicable bank or the receiving depository ﬁnancial institution of any records, documentation or data regarding authorizations of ACH entries, copies of items, and copies of eligible source documents, as  required by the NACHA Rules; (m) regarding unauthorized entry, administrative, or overall return rates, (i) End User will provide, within ﬁve (5) calendar days, all information requested by the applicable bank in order for such bank to respond to a NACHA  inquiry regarding End User’s unauthorized entry, administrative, or overall return rate; and (ii) if End User’s unauthorized entry, administrative, or overall return rate exceeds the applicable return rate threshold, End User will cooperate with Subscribe r and the applicable bank in creating a detailed plan and timeline for reducing the applicable return rate to a rate below the threshold, and to reduce the return rate to below the threshold within thirty (30) calendar days after such bank’s receipt of NAC HA’s written request for information; End User, will maintain the applicable return rate below the threshold for at least the time required by the NACHA Rules; (n) binds the End User to other provisions between Subscriber and the bank in this Agreement, that are applicable to End User; and (o) otherwise meets the requirements of the NACHA Rules. "
        />
        <DefinitionItem
          number="14."
          term=""
          definition="Prior to entering into an agreement with an End User, Subscriber must utilize a commercially reasonable method to verify the identity  of an End User and its principals and shall have conducted an investigation appropriate to the degree of risk associated with the End User and in accordance with the applicable bank’s due diligence requirements, including, as deemed necessary, physical inspection of the End User’s premises, its data security and customer identiﬁcation processes, and it shall have veriﬁed through such investigation that End User conducts a legal bona ﬁde business operation and has the proper facilities, equipment, and security controls, and, where necessary, licenses and permits to do business. As part of its due diligence review, Subscriber is responsible for conﬁrming that its customer not a Third -Party Sender under the NACHA Rules. Subscriber shall be responsible for providing the applicable bank with any information such bank reasonably deems necessary to identify each End User, including a End User’s beneﬁcial owners as applicable. Subscriber is obligated to provide the requested information within two (2) Business Days after receiving the applicable bank’s request."
        />
        <DefinitionItem
          number="15."
          term=""
          definition="Subscriber will maintain a separate settlement account(s) for its End Users. Subscriber will not commingle End User funds with Subscriber funds."
        />
        <DefinitionItem
          number="16."
          term=""
          definition="Subscriber will be responsible for establishing, maintaining, and implementing policies and procedures to ensure that effective due diligence is performed by Subscriber (or its designee) on each End User to minimize the credit and NACHA Rules compliance risk that may arise with each End User. Subscriber shall also conduct periodic audits of its End Users to: (a) ensure each End User’s compliance with the NACHA Rules as an originator, (b) monitor each End User’s credit worthiness as an originator, and (c) monitor Subscriber’s exposure relative to each End User and relative to Subscriber’s exposure across multiple settlement dates.  "
        />
        <DefinitionItem
          number="17."
          term=""
          definition="Subscriber shall also establish, maintain, and implement policies and procedures to ensure that effective due diligence is performed by Subscriber on each End User at onboarding and periodically thereafter to minimize the compliance and legal risk, and related reputation risk that may arise due to an End User’s failure to comply with Applicable Laws.  "
        />
        <DefinitionItem
          number="18."
          term=""
          definition="Subscriber will provide all information requested by the applicable bank to register Subscriber with NACHA, and such information shall be provided within two (2) Business Days of such bank’s request. Subscriber agrees to promptly provide such bank such information as and in the form such bank may request in connection with its ongoing underwriting and approval process. Subscriber shall provide all information requested by the applicable bank in order for it to respond to a NACHA inquiry. Subscriber shall promptly notify the bank of (i) any change in Subscriber’s name or form of business organization, (ii) any material adverse change in Subscriber’s ﬁnancial condition or operations; and (iii) any action, suit, litigation, proceeding, or written complaint or criticism directed at Subscriber relating, directly or indirectly, to the ACH entries transmitted through the Service.  "
        />
        <DefinitionItem
          number="19."
          term=""
          definition="In the event a report of possible rules violation is received by the applicable bank, Subscriber will be notiﬁed and, if fees or penalties are incurred by such bank due to the violation, Subscriber will promptly pay such fees or penalties without further demand or notice."
        />
        <DefinitionItem
          number="20."
          term=""
          definition="Subscriber shall be liable to the applicable Bank and shall indemnify and hold it and its affiliates and their respective officers, directors, employees and agents harmless from and against: (i) any and all fees, ﬁnes and/or penalties imposed on the bank by NACHA, or a court or government agency, resulting from or arising out of any act or omission of Subscriber, End User or any person or entity acting on Subscriber’s behalf, under or in connection with this Agreement; and (ii) any losses resulting from or arising directly or indirectly out of: (a) Subscriber’s failure to perform its obligations under the NACHA Rules or comply with Applicable Law, (b) any breach ofany of the warranties, representations, and agreements set forth in this Agreement and the NACHA Rules; and/or (c) any other act or omission of Subscriber, End User or any person or entity acting on the Subscriber’s behalf, under or in connection with this Agreement."
        />
      </ContentSection>
      <ContentSection title="Schedule C">
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Security Procedurs
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Subscriber is responsible to strictly establish and to maintain procedures to safeguard against unauthorized
          transactions. Subscriber warrants that no End User will be allowed to initiate transfers in the absence of
          proper supervision and safeguards and agrees to take reasonable steps to maintain the conﬁdentiality of the
          security procedures and any passwords, codes, security measures, and related instructions provided by YASBe.
          If Subscriber believes or suspects that any such information has been accessed by an unauthorized individual,
          Subscriber will verbally notify YASBe immediately, followed by written conﬁrmation. The occurrence of such
          notiﬁcation will not affect any transfers made in good faith by YASBe prior to the notiﬁcation and within a
          reasonable time period to prevent unauthorized transfers. 
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Data Security:  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Limiting access and securely storing transaction data used in the routing and settlement of transactions is a
          critical data security precaution. Subscriber’s ability to limit access to production data can be done through
          commercially available software pro ducts. Access can be limited to speciﬁc programs, user IDs, or read -only
          or read -and- edit -only access functionality. Files can also be transmitted between participants using the
          following data protection methods: encryption and authentication.  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Encryption is a process of scrambling data content through hardware or software to protect the conﬁdentiality
          of a ﬁle’s contents. This information should remain encrypted using commercially reasonable procedures and
          must be transmitted using security technology.  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Authentication is a process of ensuring that ﬁles and data content have not been altered between the
          originator and receiving points. Like encryption, this can be done using hardware or software to ensure data
          integrity.  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          Subscriber understands and agrees that the authenticity of any ACH ﬁle or entry transmitted using the Platform
          will be veriﬁed pursuant to the following security procedures:  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          YASBe’ Security Procedures:Subscriber hereby agrees to be bound by any transfer, whether or not authorized,
          issued in Subscriber’s or End User’s name in compliance with Subscriber’s selected security procedures, as
          follows:  
        </p>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
          YASBe will issue a login and password or API keys to Subscriber for an account on a secure FTP or other site
          or to access YASBe’ API. Subscriber will upload the payment ﬁles to that secure site or issue payment orders
          via API. Any ﬁle or instruction received by the Platform in the account at the site or via API may be
          conclusively accepted by YASBe as authorized by Subscriber.
        </p>
      </ContentSection>
    </main>
  );
}
