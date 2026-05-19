import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

export const JobCardContent: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'careers');
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('aboutYASBe')}
        </h3>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          • {t('yasbeIsACanadaBasedPaymentFintechForSmallAndMediumBusinessesSMBs')}
          <br />
          <br />• {t('ourGoalIsToConnectSmallAndMediumBusinessesWithTheWorldEconomy')}
        </p>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('aboutTheRole')}
        </h3>
        <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          •{' '}
          {t(
            'theComplianceDepartmentPlaysACrucialRoleInEnsuringThatApusProductsAndProcessesAlignWithRegulatoryStandards',
          )}
          <br />
          <br />•{' '}
          {t(
            'weAreLookingForAPaymentsComplianceManagerWhoPossessesAClearUnderstandingOfTheMeasuresRequiredToEnsureOurConsumerProtectionPracticeRemainsInCompliance',
          )}
        </p>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('yourRoles')} &amp; {t('responsibilities')}
        </h3>
        <div className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          •{' '}
          {t(
            'developImplementAndExecuteAMLCTFPoliciesAndRulebooksHandbooksToEnsureThatTheCompanyConductsItsBusinessInARegulatoryCompliantEnvironment',
          )}
          <br />
          <br />•{' '}
          {t(
            'ensureEffectiveImplementationOfNewOrChangingComplianceAMLCTFRequirementsInitiatedByTheRegulatoryFINTRACBankOfCanadaOrAsRequiredByLegislationOrRegulatorsByLiaisingAndCoordinatingEffortsWithInternalDepartments',
          )}
          <br />
          <br />•{' '}
          {t(
            'maintainAndMonitorTheEffectivenessOfTheCompanyComplianceAMLProgramsAndStandardsByDevelopingAndImplementingComplianceTestingProgramsReviewingInternalControlsToDetermineAreasOfImprovementIdentifyingGapsAndEnsuringThatTheseAreProperlyAddressed',
          )}
          <br />
          <br />•{' '}
          {t(
            'manageTheOperationOfAMLRegulatoryComplianceManagementFrameworkRCMAndMaintainTheRegulatoryGuidanceInventoryUpToDateIdentifyingMaintainingUpToDateReferenceAndSourceMaterialsForAMLLegislationAndEnsuringAccessToRelevantLinesOfBusiness',
          )}
          <br />
          <br />• {t('manageDayToDayAMLCTFRelatedOperationsIncludingCustomerScreeningAndOnboarding')}
          <br />
          <br />•{' '}
          {t(
            'advisingBusinessOnComplianceRequirementsByExtendingGuidanceAndSupportToSalesAndOperationsToHelpThemMeetRegulatoryRequirementsAndFollowingInternalPoliciesAndProcedures',
          )}
          <br />
          <br />•{' '}
          {t(
            'developAndMaintainAMLATFTrainingMaterialAndResourcesWorkingWithTheHRDepartmentToDevelopEffectiveComplianceTrainingProgramsIncludingAppropriateComplianceTrainingMaterialForNewEmployeesAndOngoingTrainingForAllEmployeesManagersAndTheBoardOfDirectors',
          )}
          <br />
          <br />•{' '}
          {t(
            'provideConstructiveInputRegardingNewProductsAndInitiativesFromARegulatoryPerspectiveIncludingChangesToTheAMLLegislationRegulationsAndGuidelinesAndMakeAmendmentsToPoliciesProcessesAndProgramsAsRequired',
          )}
          <br />
          <br />•{' '}
          {t(
            'ensureReportingObligationsIncludingAuditRequirementsToRegulatorsEGFINTRACAreAccuratelyCompletedAndInATimelyMannerAsWellAsAssistRegulatorsInMakingAvailableKeyInformationToThemAsRequired',
          )}
          <br />
          <br />•{' '}
          {t(
            'providePeriodicUpdatesToTheSeniorManagementRegardingTheOperationOfAMLCTFProgramsRegulatoryComplianceReportsEGAreasForImprovementOnAQuarterlyBasis',
          )}
          <br />
          <br />• {t('planAndExecuteTheCompanyComplianceRoadmapWithSeniorManagement')}
        </div>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('qualifications')} &amp; {t('requirements')}
        </h3>
        <div className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          •{' '}
          {t(
            '5YearsOfRegulatoryComplianceExperienceInAHeavilyRegulatedFinancialServicesIndustryRegulatorGovernmentDepartmentInvolvingInternalExternalAuditAndRiskManagement',
          )}
          <br />
          <br />• {t('priorExperienceAsAHeadOfComplianceComplianceOfficerMLROOrASimilarRole')}
          <br />
          <br />• {t('recognizedProfessionalACAMSCertifications')}
          <br />
          <br />•{' '}
          {t('deepKnowledgeAndUnderstandingOfComplianceAMLCTFMethodologiesAndProgramsAsWellAsRegulatoryRiskManagement')}
          <br />
          <br />•{' '}
          {t(
            'deepKnowledgeOfFederalAndProvincialLegislationInRelationToCrossBorderPaymentsAndRemittancesCreditPrepaidCardsConsumerLendingConsumerProtectionEG',
          )}
          <br />
          <br />• {t('experienceDealingWithRegulatorsSuchAsFINTRACBankOfCanadaOrASimilarRole')}
          <br />
          <br />• {t('strongAttentionToDetailAndDocumentationSkills')}
          <br />
          <br />• {t('advancedAnalyticalResearchAndInvestigativeSkillsEGResearchingLawsRegulations')}
          <br />
          <br />• {t('effectiveLeadershipQualitiesAndMotivatedSelfStarter')}
        </div>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('niceToHave')}
        </h3>
        <div className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          •{' '}
          {t(
            'knowledgeUnderstandingAndExperienceOfPaymentNetworksSuchAsSWIFTCorrespondentBankingAMEXMasterCardVisaInteracCanadaEG',
          )}
          <br />
          <br />• {t('knowledgeOfTheRetailPaymentsActivityActRegulations')}
          <br />
          <br />•{' '}
          {t(
            'knowledgeInPaymentsInnovationIncludingFutureTechnologiesSuchAsRealTimePaymentsRailsBlockchainTechnologyOpenBankingEG',
          )}
        </div>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('workingWithUs')}
        </h3>
        <div className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          • {t('fastTrackCareerDevelopmentInAFintechStartup')}
          <br />
          <br />• {t('competitiveSalaryWeAreWillingToPayAboveTheMarketRateForTheRightPeople')}
          <br />
          <br />• {t('stockOptionsUponJoining')}
          <br />
          <br />• {t('fullyRemoteFreedomToWorkAnywhereYouWant')}
        </div>
        <p className="w-full text-[#777] text-lg italic font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          * {t('finalCompensationWillBeDeterminedBasedOnTheCandidatesQualificationsSkillsAndPreviousWorkExperience')}
        </p>
      </section>

      <section className="flex flex-col items-start gap-4 w-full">
        <h3 className="w-full text-[#777] text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('howToApply')}
        </h3>
        <div className="w-full text-[#777] text-lg italic font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('forThoseWhoAreInterestedPleaseSendYourCVTo')}:
          <div className="underline">
            <a href="mailto:sales@apustechs.com" className="hover:text-[#1C1C1C] transition-colors">
              careers@beeznis.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
