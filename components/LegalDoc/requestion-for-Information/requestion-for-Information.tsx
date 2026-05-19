'use client';
import React from 'react';
import { PolicySection, PolicyText, BulletPoint } from '../cookies-policy/PolicySection';
import { PolicyHeader } from '../cookies-policy/PolicyHeader';

export const RequestionForInformation: React.FC = () => {
  return (
    <main className="max-w-full flex w-[847px] flex-col items-start gap-12 relative box-border mx-auto my-0 px-5 py-0 max-md:max-w-[991px] max-md:w-full max-md:gap-10 max-md:px-6 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-8 max-sm:px-4 max-sm:py-0">
      <header className="flex flex-col items-start gap-6 self-stretch relative">
        <PolicyHeader>Requestion for Information (RFI)</PolicyHeader>
        <PolicyText>
          In order to combat global terrorism, money laundering, and fraud, banks and payment institutions are required
          to adhere to strict regulations and laws established by local and international governing bodies.
          Consequently, there may be instances where YASBe needs to request additional information regarding a Payee or
          a Supplier, including invoice documentation, purchase agreements, or commercial contracts, to support a
          transaction or series of transactions. Unfortunately, during this process, banks and payment institutions
          often have legal constraints that prevent them from providing any information. 
          <br />
          We understand that such situations can lead to confusion and frustration, and occasionally result in delays in
          payment delivery. To assist our customers in these circumstances, we have compiled this Requests for
          Information (RFI) reference.
        </PolicyText>
      </header>

      <PolicySection title="Why is my payment on hold or why am I being asked for further information? ">
        <PolicyText>
          There are various reasons why a payment may be held by our banking partners or us. However, there are common
          triggers, including:
        </PolicyText>
        <BulletPoint>
          The name of the Payee or Supplier closely matches an individual or entity listed on the US Treasury's Office
          of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) list or a similar list issued by another
          jurisdiction's financial sanction agency.
        </BulletPoint>
        <BulletPoint>
          The bank or financial institution used by the Payee or Supplier is sanctioned by OFAC or another
          jurisdiction's financial sanction agency.
        </BulletPoint>
        <BulletPoint>
          YASBe conducts real-time risk assessments to ensure there is no connection to the Crimea Region of Ukraine,
          Donetsk People's Republic (DNR), Luhansk People's Republic (LNR), Kherson, and Zaporizhzhia.
        </BulletPoint>
        <BulletPoint>
          The location of the Payee or Supplier, or their bank or financial institution, is considered higher risk
          (though not explicitly prohibited) according to YASBe's geographic risk scoring methodology. The determination
          of high-risk jurisdictions by YASBe is based on industry’s best practices, external data sources (including
          the Financial Action Task Force's List of Jurisdictions Under Increased Monitoring and the EU Commission's
          List of High-Risk 3rd Countries), and internal assessments. However, not all payments require further
          information based on YASBe's real-time risk assessment. Please refer to the table below for a list of
          high-risk countries.
        </BulletPoint>
        <BulletPoint>
          Potential fraudulent indicators are detected in the transaction. This could be a high-value payment to a
          first-time Payee or Supplier or a discrepancy between the Payee name provided in the transaction record and
          the name recorded by the Payee bank. In such cases, YASBe may request confirmation of the correct Payee bank
          details to mitigate the risk of business email compromise (BEC).
        </BulletPoint>
        <BulletPoint>
          The use of initials, titles, abbreviations, or acronyms in the beneficiary's name can trigger an RFI to rule
          out potential matches with associated terrorist or militant groups.
        </BulletPoint>
      </PolicySection>
      <PolicySection title="How can I ensure the release of my payment? ">
        <PolicyText>
          If YASBe or one of its global banking partners places a payment on hold, our Operations team will contact your
          Account Admin. To ensure timely delivery of funds, it is crucial that you promptly respond to any requests for
          additional information to prevent further delays or disruptions in payment processing. Typically, a response
          time of 10 business days is permitted, although it may be shorter in certain cases. Please take note of the
          expected response date.
        </PolicyText>
      </PolicySection>

      <PolicySection title="What type of information may be requested? ">
        <PolicyText>
          The nature of information requests depends on various factors, including the entity requesting the information
          (YASBe, global banking partner, or receiving financial institution) and the inherent risk scenario. Here are
          some examples of commonly requested information for different triggering points:
        </PolicyText>
        <BulletPoint className="md:-ml-[388px]">Complete (legal) name of the Payee or Supplier</BulletPoint>
        <BulletPoint className="md:-ml-[173px]">
          Clarification of abbreviations or acronyms used in the Payment Details field
        </BulletPoint>
        <BulletPoint className="md:-ml-[-3px]">
          Other personally identifiable information such as addresses or date of birth for natural person Payees
        </BulletPoint>
        <BulletPoint className="md:-ml-[33px]">
          Detailed explanation for the payment or a copy of the specific invoice related to the payment
        </BulletPoint>
        <BulletPoint>
          Additional details about the Payee or Supplier, such as their website, or in rare cases, the names of
          individuals with beneficial ownership of the Payee or Supplier
        </BulletPoint>
      </PolicySection>

      <PolicySection title="Why am I asked to verbally confirm Payee bank information or validate it through another means? ">
        <PolicyText>
          Verifying Payee bank information verbally or through alternative methods is becoming increasingly necessary
          due to the rise of cybercriminals employing Business Email Compromise (BEC) tactics to commit payments fraud.
          In this scheme, criminals may:
        </PolicyText>
        <BulletPoint>
          Impersonate an employee or executive, requesting payments to be made to an illegitimate vendor or bank
          account.
        </BulletPoint>
        <BulletPoint>
          Pose as an existing vendor via email to provide fraudulent bank account information for future payments.
        </BulletPoint>
        <PolicyText>
          If you receive payment instructions from an employee or executive of a supplier via email or receive updates
          to bank account numbers through other means, it is essential to follow up with them or a trusted contact by
          phone to verify the instructions. Relying solely on email communication is not advisable, as it may have been
          compromised. Other best practices include obtaining evidence, such as a bank statement from the Supplier, to
          validate any new bank details provided.
        </PolicyText>
        <PolicyText>
          If you require additional guidance on preventing fraud, please reach out to our Customer Service team.
        </PolicyText>
      </PolicySection>

      <PolicySection title="What happens if I don't respond to the request for further information? ">
        <PolicyText>
          As a general rule, if YASBe does not receive a response within 14 calendar days, the payment may be canceled,
          and the funds returned to you. 
        </PolicyText>
        <PolicyText>
          If the information request was triggered by a potential match with OFAC or a similar financial sanction
          agency, the failure to provide the requested information may result in the funds being held by YASBe or our
          banking partner.
        </PolicyText>
      </PolicySection>

      <PolicySection title="How can I prevent my payments from being held? ">
        <PolicyText>
          To minimize the likelihood of your payments being held or delayed, it is crucial to take the following
          measures:
        </PolicyText>
        <BulletPoint className="md:ml-[-105px]">
          Avoid sending payments to individuals, entities, or jurisdictions subject to sanctions.
        </BulletPoint>
        <BulletPoint>
          If you intend to send payments to higher risk countries, contact our Customer Service team for guidance to
          reduce the risk of delays.
        </BulletPoint>
        <BulletPoint>
          Always ensure that the names and addresses of payees or suppliers are complete and accurate. For individuals,
          include at least their full first name and surname, while corporate suppliers should be identified by their
          full legal name as stated on the invoice.
        </BulletPoint>
      </PolicySection>
    </main>
  );
};
