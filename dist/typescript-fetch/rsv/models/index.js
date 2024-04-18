"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./ActionStatusType"), exports);
__exportStar(require("./ActivityListInner"), exports);
__exportStar(require("./ActivityListInnerDeposit"), exports);
__exportStar(require("./ActivityLog"), exports);
__exportStar(require("./ActivityLogListType"), exports);
__exportStar(require("./ActivityLogType"), exports);
__exportStar(require("./AddressInfoType"), exports);
__exportStar(require("./AddressSearchType"), exports);
__exportStar(require("./AddressType"), exports);
__exportStar(require("./AdvanceCheckInType"), exports);
__exportStar(require("./AlertAreaType"), exports);
__exportStar(require("./AlertGuestInfoType"), exports);
__exportStar(require("./AlertType"), exports);
__exportStar(require("./Alerts"), exports);
__exportStar(require("./AmountDeterminationType"), exports);
__exportStar(require("./AmountPointsType"), exports);
__exportStar(require("./AmountType"), exports);
__exportStar(require("./AnonymizationStatusType"), exports);
__exportStar(require("./AnonymizationType"), exports);
__exportStar(require("./ApplicationUserType"), exports);
__exportStar(require("./AttachCertificate"), exports);
__exportStar(require("./AttachmentType"), exports);
__exportStar(require("./AttendantType"), exports);
__exportStar(require("./AuthorizationRuleType"), exports);
__exportStar(require("./AuthorizerInfoType"), exports);
__exportStar(require("./AwardKindType"), exports);
__exportStar(require("./AwardStatusType"), exports);
__exportStar(require("./AwardType"), exports);
__exportStar(require("./AwardUpgradeDetailType"), exports);
__exportStar(require("./AwardUpgradeInfoType"), exports);
__exportStar(require("./AwardUpgradeSummaryType"), exports);
__exportStar(require("./AwardUpgrades"), exports);
__exportStar(require("./BedTaxReportingType"), exports);
__exportStar(require("./BedTypeInfoType"), exports);
__exportStar(require("./BenefitType"), exports);
__exportStar(require("./BillingInstructionType"), exports);
__exportStar(require("./BillingPrivilegesType"), exports);
__exportStar(require("./BlockId"), exports);
__exportStar(require("./BlockReservationStatistics"), exports);
__exportStar(require("./BlockReservationStatisticsByDateAndRoomPoolType"), exports);
__exportStar(require("./BlockStatType"), exports);
__exportStar(require("./BookingChannelMappingType"), exports);
__exportStar(require("./BookingChannelType"), exports);
__exportStar(require("./BreakShareValidations"), exports);
__exportStar(require("./BreakShareValidationsDetails"), exports);
__exportStar(require("./CallHistory"), exports);
__exportStar(require("./CallStatistics"), exports);
__exportStar(require("./CallStatisticsType"), exports);
__exportStar(require("./CallType"), exports);
__exportStar(require("./CallTypeReservation"), exports);
__exportStar(require("./CallerType"), exports);
__exportStar(require("./CancelReservation"), exports);
__exportStar(require("./CancelReservationDetails"), exports);
__exportStar(require("./CancelReservationType"), exports);
__exportStar(require("./CancelReservationTypeCancellationInfo"), exports);
__exportStar(require("./CancelReservations"), exports);
__exportStar(require("./CancelReservationsInstructionsType"), exports);
__exportStar(require("./CancelReservationsType"), exports);
__exportStar(require("./CancellationActivityType"), exports);
__exportStar(require("./CancellationHistory"), exports);
__exportStar(require("./CancellationInstructionsType"), exports);
__exportStar(require("./CancellationReasonType"), exports);
__exportStar(require("./CardNumberTypeType"), exports);
__exportStar(require("./CardProcessingType"), exports);
__exportStar(require("./CardReIssueType"), exports);
__exportStar(require("./CardTypeType"), exports);
__exportStar(require("./CateringResInfoType"), exports);
__exportStar(require("./ChangeDepositPolicyDetails"), exports);
__exportStar(require("./ChangeGuestMessages"), exports);
__exportStar(require("./ChangeInstructionType"), exports);
__exportStar(require("./ChangeReservation"), exports);
__exportStar(require("./ChangeReservationDetails"), exports);
__exportStar(require("./ChangeResvGuestMessages"), exports);
__exportStar(require("./ChangeShareRateAmount"), exports);
__exportStar(require("./ChangeShareRateAmountType"), exports);
__exportStar(require("./ChangeShareRateAmountTypeChangeShareRateInstructions"), exports);
__exportStar(require("./ChangeSharingGuests"), exports);
__exportStar(require("./ChannelMarketingInfoTypeInner"), exports);
__exportStar(require("./ChannelResvActionType"), exports);
__exportStar(require("./ChannelResvRQInfoType"), exports);
__exportStar(require("./ChannelResvRSInfoType"), exports);
__exportStar(require("./ChannelResvStatusType"), exports);
__exportStar(require("./ChannelSummaryInfoType"), exports);
__exportStar(require("./CharacterUDFType"), exports);
__exportStar(require("./CheckInstructionType"), exports);
__exportStar(require("./CheckReservationType"), exports);
__exportStar(require("./CheckReservationsDetails"), exports);
__exportStar(require("./CheckResultType"), exports);
__exportStar(require("./ChildAgeType"), exports);
__exportStar(require("./ChildBucketsType"), exports);
__exportStar(require("./CodeDescriptionType"), exports);
__exportStar(require("./CodeInfoType"), exports);
__exportStar(require("./ColorDefinitionType"), exports);
__exportStar(require("./ColorType"), exports);
__exportStar(require("./CombineShareFromProfileType"), exports);
__exportStar(require("./CombineShareInstructionType"), exports);
__exportStar(require("./CombineShareReservations"), exports);
__exportStar(require("./CombineShareReservationsDetails"), exports);
__exportStar(require("./CombineShareReservationsType"), exports);
__exportStar(require("./CombineShareReservationsTypeFetchInstructions"), exports);
__exportStar(require("./CombineShareReservationsTypeShareToReservation"), exports);
__exportStar(require("./CombineShareValidations"), exports);
__exportStar(require("./CombineShareValidationsDetails"), exports);
__exportStar(require("./CommentInfoType"), exports);
__exportStar(require("./CommentType"), exports);
__exportStar(require("./CommissionPaymentMethods"), exports);
__exportStar(require("./CommissionPayoutToType"), exports);
__exportStar(require("./CommunicationStatusType"), exports);
__exportStar(require("./CompAccountingType"), exports);
__exportStar(require("./CompAuthorizerInfoType"), exports);
__exportStar(require("./CompRoutingRequestType"), exports);
__exportStar(require("./CompRoutingStatusType"), exports);
__exportStar(require("./CompanyDetails"), exports);
__exportStar(require("./CompanyType"), exports);
__exportStar(require("./ComponentBlockOutDates"), exports);
__exportStar(require("./ComputeCancellationPolicies"), exports);
__exportStar(require("./ComputeCancellationPoliciesCriteria"), exports);
__exportStar(require("./ComputeCancellationPoliciesDetails"), exports);
__exportStar(require("./ComputeDepositPolicies"), exports);
__exportStar(require("./ComputeDepositPoliciesDetails"), exports);
__exportStar(require("./ConfDeliveryInfoType"), exports);
__exportStar(require("./ConfDeliveryMethod"), exports);
__exportStar(require("./ConfRecipientInfoType"), exports);
__exportStar(require("./ConfigPackagePrimaryDetailsType"), exports);
__exportStar(require("./ConfigPackageTransactionType"), exports);
__exportStar(require("./ConfigPostingAttributesType"), exports);
__exportStar(require("./ConfirmationLetters"), exports);
__exportStar(require("./ConfirmationLettersDetails"), exports);
__exportStar(require("./ConfirmationStyle"), exports);
__exportStar(require("./ConfirmationType"), exports);
__exportStar(require("./CopyReservation"), exports);
__exportStar(require("./CopyReservationPaymentMethodsType"), exports);
__exportStar(require("./CopyReservationType"), exports);
__exportStar(require("./CopyReservationTypeInstructions"), exports);
__exportStar(require("./CountryNameType"), exports);
__exportStar(require("./CreateGuestMessages"), exports);
__exportStar(require("./CreateReservation"), exports);
__exportStar(require("./CreateReservationType"), exports);
__exportStar(require("./CurrencyAmountType"), exports);
__exportStar(require("./CurrentRoomInfoType"), exports);
__exportStar(require("./CustomChargeExemptionDateType"), exports);
__exportStar(require("./CustomChargeExemptionType"), exports);
__exportStar(require("./CustomChargeGuestInfoType"), exports);
__exportStar(require("./CustomChargeQuantityType"), exports);
__exportStar(require("./CustomerType"), exports);
__exportStar(require("./CustomerTypeIdentifications"), exports);
__exportStar(require("./DailyPaceStatType"), exports);
__exportStar(require("./DailyRateDetailType"), exports);
__exportStar(require("./DailyRateType"), exports);
__exportStar(require("./DailyStatType"), exports);
__exportStar(require("./DateRangeType"), exports);
__exportStar(require("./DateTimeSpanType"), exports);
__exportStar(require("./DateTimeStampGroupType"), exports);
__exportStar(require("./DateUDFType"), exports);
__exportStar(require("./DeliveryHistoryLog"), exports);
__exportStar(require("./DeliveryHistoryType"), exports);
__exportStar(require("./DeliveryMethodType"), exports);
__exportStar(require("./DepositCancelConfigCriteriaType"), exports);
__exportStar(require("./DepositCancelRevenueType"), exports);
__exportStar(require("./DepositPolicyType"), exports);
__exportStar(require("./DiscountType"), exports);
__exportStar(require("./DistinctIDType"), exports);
__exportStar(require("./DowngradeType"), exports);
__exportStar(require("./ECertificateClassficationType"), exports);
__exportStar(require("./ECertificateConsumeSourceType"), exports);
__exportStar(require("./ECertificateConsumptionType"), exports);
__exportStar(require("./ECertificateInfoType"), exports);
__exportStar(require("./ECertificateInfoTypeHotels"), exports);
__exportStar(require("./ECertificateIssueSourceType"), exports);
__exportStar(require("./ECertificateScopeType"), exports);
__exportStar(require("./ECertificateStatusType"), exports);
__exportStar(require("./ECertificateType"), exports);
__exportStar(require("./ECouponType"), exports);
__exportStar(require("./ECoupons"), exports);
__exportStar(require("./ECouponsInfo"), exports);
__exportStar(require("./EffectiveRateType"), exports);
__exportStar(require("./EmailInfoType"), exports);
__exportStar(require("./EmailType"), exports);
__exportStar(require("./EmployeeInfoType"), exports);
__exportStar(require("./EntityType"), exports);
__exportStar(require("./ErrorInstance"), exports);
__exportStar(require("./EventId"), exports);
__exportStar(require("./ExceptionDetailType"), exports);
__exportStar(require("./ExcludedDateType"), exports);
__exportStar(require("./ExcludedPreferenceType"), exports);
__exportStar(require("./ExclusionReasonType"), exports);
__exportStar(require("./ExtendReservationLock"), exports);
__exportStar(require("./ExtendReservationLockDetails"), exports);
__exportStar(require("./ExternalReferenceType"), exports);
__exportStar(require("./FacilitySchedulerOptionType"), exports);
__exportStar(require("./FetchActivityBookingsType"), exports);
__exportStar(require("./FetchReservations"), exports);
__exportStar(require("./FetchReservationsReservationInfoList"), exports);
__exportStar(require("./FetchSellMessageConfig"), exports);
__exportStar(require("./FetchSellMessageConfigSellMessageConfigs"), exports);
__exportStar(require("./FiscalInfoType"), exports);
__exportStar(require("./FixedChargeDetailType"), exports);
__exportStar(require("./FixedChargeFrequencyType"), exports);
__exportStar(require("./FixedChargeScheduleType"), exports);
__exportStar(require("./FixedChargeType"), exports);
__exportStar(require("./FolioShortInfoType"), exports);
__exportStar(require("./FolioTextsTypeInner"), exports);
__exportStar(require("./FormattedTextTextType"), exports);
__exportStar(require("./FrontOfficeRoomStatusType"), exports);
__exportStar(require("./FutureListType"), exports);
__exportStar(require("./FutureReservationsOrBlocksDetails"), exports);
__exportStar(require("./GroupDetails"), exports);
__exportStar(require("./GuaranteePolicyType"), exports);
__exportStar(require("./GuaranteePolicyTypeCancelPenalty"), exports);
__exportStar(require("./GuaranteePolicyTypeDepositPolicy"), exports);
__exportStar(require("./GuaranteeRequirementsType"), exports);
__exportStar(require("./GuestCountsType"), exports);
__exportStar(require("./GuestDetails"), exports);
__exportStar(require("./GuestHousekeepingServiceRequestType"), exports);
__exportStar(require("./GuestLastStayInfoType"), exports);
__exportStar(require("./GuestMessageType"), exports);
__exportStar(require("./GuestMessages"), exports);
__exportStar(require("./GuestMessagesDetails"), exports);
__exportStar(require("./HistoryListType"), exports);
__exportStar(require("./HotelInterfaceStatusType"), exports);
__exportStar(require("./HotelInterfaceType"), exports);
__exportStar(require("./HotelInterfaceTypeType"), exports);
__exportStar(require("./HotelReservationInstructionType"), exports);
__exportStar(require("./HotelReservationInstructionTypeCancellation"), exports);
__exportStar(require("./HotelReservationInstructionTypeReservationProfiles"), exports);
__exportStar(require("./HotelReservationInstructionTypeResponseInstructions"), exports);
__exportStar(require("./HotelReservationInstructionTypeTransactionDiversions"), exports);
__exportStar(require("./HotelReservationTraceType"), exports);
__exportStar(require("./HotelReservationType"), exports);
__exportStar(require("./HotelReservationsType"), exports);
__exportStar(require("./HousekeepingRoomStatusType"), exports);
__exportStar(require("./IdentificationInfoType"), exports);
__exportStar(require("./IdentificationType"), exports);
__exportStar(require("./ImageSetType"), exports);
__exportStar(require("./ImageStyleType"), exports);
__exportStar(require("./IndicatorType"), exports);
__exportStar(require("./InstanceLink"), exports);
__exportStar(require("./InterfaceRightsStatusType"), exports);
__exportStar(require("./InventoryItems"), exports);
__exportStar(require("./ItemInfoType"), exports);
__exportStar(require("./LastStayInfoType"), exports);
__exportStar(require("./LinkReservationInstructionType"), exports);
__exportStar(require("./LinkReservationsCriteria"), exports);
__exportStar(require("./LinkReservationsCriteriaResponseInstruction"), exports);
__exportStar(require("./LinkedHotelReservationType"), exports);
__exportStar(require("./LinkedHotelReservations"), exports);
__exportStar(require("./LinkedHotelReservationsType"), exports);
__exportStar(require("./LinkedReservationInfoType"), exports);
__exportStar(require("./LinkedReservationType"), exports);
__exportStar(require("./LinkedReservationsInfo"), exports);
__exportStar(require("./LinkedReservationsInfoType"), exports);
__exportStar(require("./MarketingPolicyType"), exports);
__exportStar(require("./MasterAccount"), exports);
__exportStar(require("./MasterAccountSummary"), exports);
__exportStar(require("./MasterAccountSummaryType"), exports);
__exportStar(require("./MasterAccountType"), exports);
__exportStar(require("./MasterAccountTypeReservationBlock"), exports);
__exportStar(require("./MasterAccountTypeRoomRate"), exports);
__exportStar(require("./MasterInfoType"), exports);
__exportStar(require("./MasterType"), exports);
__exportStar(require("./MembershipDetails"), exports);
__exportStar(require("./MembershipEarningPreferenceType"), exports);
__exportStar(require("./MembershipInfoType"), exports);
__exportStar(require("./MembershipType"), exports);
__exportStar(require("./MembershipTypeLevelType"), exports);
__exportStar(require("./MergeReservationsStatus"), exports);
__exportStar(require("./MessageDeliveryType"), exports);
__exportStar(require("./MessageStatusType"), exports);
__exportStar(require("./MessageType"), exports);
__exportStar(require("./MoveReservationHotel"), exports);
__exportStar(require("./MoveReservationHotelCriteriaType"), exports);
__exportStar(require("./MoveReservationHotelDetails"), exports);
__exportStar(require("./NameTypeType"), exports);
__exportStar(require("./NameValueDataTypeType"), exports);
__exportStar(require("./NameValueDetailType"), exports);
__exportStar(require("./NameValueModuleType"), exports);
__exportStar(require("./NameValueOriginType"), exports);
__exportStar(require("./NameValueType"), exports);
__exportStar(require("./NumericCategorySummaryType"), exports);
__exportStar(require("./NumericUDFType"), exports);
__exportStar(require("./OffsetUnitType"), exports);
__exportStar(require("./OperaLockRecordType"), exports);
__exportStar(require("./OperaRecordLock"), exports);
__exportStar(require("./OverlappingStay"), exports);
__exportStar(require("./OverlappingStayDetails"), exports);
__exportStar(require("./OverlappingStayInfoType"), exports);
__exportStar(require("./OverrideInstructionType"), exports);
__exportStar(require("./OwnerType"), exports);
__exportStar(require("./PMSResStatusType"), exports);
__exportStar(require("./PackageCalculationRuleType"), exports);
__exportStar(require("./PackageCodeHeaderType"), exports);
__exportStar(require("./PackageConsumptionType"), exports);
__exportStar(require("./PackageElementType"), exports);
__exportStar(require("./PackagePostingRhythmType"), exports);
__exportStar(require("./PackagePostingRhythmTypeCertainNightsOfTheWeek"), exports);
__exportStar(require("./PackagePostingRhythmTypeCustomNightSchedule"), exports);
__exportStar(require("./PackagePostingRhythmTypeCustomStaySchedule"), exports);
__exportStar(require("./PackagePostingRhythmTypeEveryXNightsStartingNightY"), exports);
__exportStar(require("./Packages"), exports);
__exportStar(require("./PackagesReservationPackages"), exports);
__exportStar(require("./ParagraphType"), exports);
__exportStar(require("./ParameterType"), exports);
__exportStar(require("./PayeeInfoType"), exports);
__exportStar(require("./PayloadType"), exports);
__exportStar(require("./PersonNameType"), exports);
__exportStar(require("./PersonNameTypeType"), exports);
__exportStar(require("./PkgInventoryItemType"), exports);
__exportStar(require("./PointsType"), exports);
__exportStar(require("./PolicyAmountPercentType"), exports);
__exportStar(require("./PolicyBasisTypeType"), exports);
__exportStar(require("./PolicyDeadlineType"), exports);
__exportStar(require("./PostCancelReservationRequest"), exports);
__exportStar(require("./PostPreCheckInReservationRequest"), exports);
__exportStar(require("./PostReservationByBlockRequest"), exports);
__exportStar(require("./PostReservationLinksRequest"), exports);
__exportStar(require("./PostReservationRequest"), exports);
__exportStar(require("./PostUpsellReservationRequest"), exports);
__exportStar(require("./PostingRhythmType"), exports);
__exportStar(require("./PreArrivalMemberReservationType"), exports);
__exportStar(require("./PreArrivalMemberReservationsDetails"), exports);
__exportStar(require("./PreCheckInDetailsType"), exports);
__exportStar(require("./PreCheckInReservation"), exports);
__exportStar(require("./PreConfiguredRoutingInstrType"), exports);
__exportStar(require("./PreConfiguredRoutingInstructions"), exports);
__exportStar(require("./PreferenceType"), exports);
__exportStar(require("./PreferenceTypeType"), exports);
__exportStar(require("./PrepaidCardType"), exports);
__exportStar(require("./PrimaryShareTypeType"), exports);
__exportStar(require("./ProductSourceType"), exports);
__exportStar(require("./ProfileCashieringDetailType"), exports);
__exportStar(require("./ProfileCashieringType"), exports);
__exportStar(require("./ProfileCommissionType"), exports);
__exportStar(require("./ProfileDeliveryMethod"), exports);
__exportStar(require("./ProfileDeliveryModuleType"), exports);
__exportStar(require("./ProfileId"), exports);
__exportStar(require("./ProfileMembershipType"), exports);
__exportStar(require("./ProfileNameType"), exports);
__exportStar(require("./ProfileRestrictions"), exports);
__exportStar(require("./ProfileRoutingInstructionsType"), exports);
__exportStar(require("./ProfileStatusType"), exports);
__exportStar(require("./ProfileType"), exports);
__exportStar(require("./ProfileTypeAddresses"), exports);
__exportStar(require("./ProfileTypeComments"), exports);
__exportStar(require("./ProfileTypeEmails"), exports);
__exportStar(require("./ProfileTypePreferenceCollection"), exports);
__exportStar(require("./ProfileTypeProfileDeliveryMethods"), exports);
__exportStar(require("./ProfileTypeProfileMemberships"), exports);
__exportStar(require("./ProfileTypeRelationships"), exports);
__exportStar(require("./ProfileTypeRelationshipsSummary"), exports);
__exportStar(require("./ProfileTypeRoomOwnershipsList"), exports);
__exportStar(require("./ProfileTypeTelephones"), exports);
__exportStar(require("./ProfileTypeType"), exports);
__exportStar(require("./ProfileTypeURLs"), exports);
__exportStar(require("./PromoCodeCompRoutingType"), exports);
__exportStar(require("./PromoCodeCompRoutingTypeDuration"), exports);
__exportStar(require("./PromotionType"), exports);
__exportStar(require("./PutReservationRequest"), exports);
__exportStar(require("./PutValidateReservationChangesRequest"), exports);
__exportStar(require("./QueueTextInfoType"), exports);
__exportStar(require("./RateByAgeBucketType"), exports);
__exportStar(require("./RateChangeInstructionType"), exports);
__exportStar(require("./RateChangeType"), exports);
__exportStar(require("./RateInfo"), exports);
__exportStar(require("./RateInfoDetail"), exports);
__exportStar(require("./RatesType"), exports);
__exportStar(require("./RecentlyAccessedReservationType"), exports);
__exportStar(require("./RecentlyAccessedReservations"), exports);
__exportStar(require("./RegisterCall"), exports);
__exportStar(require("./RegisterTurnaway"), exports);
__exportStar(require("./ReinstateReservation"), exports);
__exportStar(require("./ReinstateReservationDetails"), exports);
__exportStar(require("./RelationshipAddressType"), exports);
__exportStar(require("./RelationshipInfoSummaryType"), exports);
__exportStar(require("./RelationshipInfoType"), exports);
__exportStar(require("./RelationshipProfileSummaryType"), exports);
__exportStar(require("./RelationshipProfileType"), exports);
__exportStar(require("./RequestActionType"), exports);
__exportStar(require("./ResAccessRestrictionType"), exports);
__exportStar(require("./ResAccompanyGuestInfoType"), exports);
__exportStar(require("./ResAttachedProfileType"), exports);
__exportStar(require("./ResAwardsType"), exports);
__exportStar(require("./ResCancelPenaltyType"), exports);
__exportStar(require("./ResCancellationPolicyType"), exports);
__exportStar(require("./ResCashieringType"), exports);
__exportStar(require("./ResCommunicationType"), exports);
__exportStar(require("./ResCommunicationTypeEmails"), exports);
__exportStar(require("./ResCommunicationTypeTelephones"), exports);
__exportStar(require("./ResCompAccountingType"), exports);
__exportStar(require("./ResDepositPolicyType"), exports);
__exportStar(require("./ResExpectedTimesType"), exports);
__exportStar(require("./ResGuaranteeType"), exports);
__exportStar(require("./ResGuestAdditionalInfoType"), exports);
__exportStar(require("./ResGuestInfoType"), exports);
__exportStar(require("./ResGuestType"), exports);
__exportStar(require("./ResGuestTypeProfileInfo"), exports);
__exportStar(require("./ResHousekeepingType"), exports);
__exportStar(require("./ResInventoryItemSourceType"), exports);
__exportStar(require("./ResInventoryItemType"), exports);
__exportStar(require("./ResInventoryItemsType"), exports);
__exportStar(require("./ResMobileNotificationsType"), exports);
__exportStar(require("./ResPaymentCardType"), exports);
__exportStar(require("./ResPreConfiguredRoutingInstrType"), exports);
__exportStar(require("./ResProfileTypeType"), exports);
__exportStar(require("./ResRevenueBalanceType"), exports);
__exportStar(require("./ResSharedGuestInfoType"), exports);
__exportStar(require("./ResStatClassificationType"), exports);
__exportStar(require("./Reservation"), exports);
__exportStar(require("./ReservationAlerts"), exports);
__exportStar(require("./ReservationAlertsType"), exports);
__exportStar(require("./ReservationAllowedActionType"), exports);
__exportStar(require("./ReservationArrivalInfoType"), exports);
__exportStar(require("./ReservationAttachments"), exports);
__exportStar(require("./ReservationAwards"), exports);
__exportStar(require("./ReservationBlockType"), exports);
__exportStar(require("./ReservationCancellationPolicyCriteria"), exports);
__exportStar(require("./ReservationCancellationPolicyCriteriaType"), exports);
__exportStar(require("./ReservationCertificateType"), exports);
__exportStar(require("./ReservationChannelInfoType"), exports);
__exportStar(require("./ReservationCommissionInfoType"), exports);
__exportStar(require("./ReservationConfLettersType"), exports);
__exportStar(require("./ReservationConfirmationLetters"), exports);
__exportStar(require("./ReservationDailyRateDetail"), exports);
__exportStar(require("./ReservationDailyRateDetailDetails"), exports);
__exportStar(require("./ReservationDates"), exports);
__exportStar(require("./ReservationDepositPolicyCriteria"), exports);
__exportStar(require("./ReservationDepositPolicyCriteriaType"), exports);
__exportStar(require("./ReservationDepositType"), exports);
__exportStar(require("./ReservationDisplayColorInfoType"), exports);
__exportStar(require("./ReservationECertificateType"), exports);
__exportStar(require("./ReservationExcludedPreferences"), exports);
__exportStar(require("./ReservationFolioWindowType"), exports);
__exportStar(require("./ReservationHistoryFutureInfoType"), exports);
__exportStar(require("./ReservationId"), exports);
__exportStar(require("./ReservationInfoType"), exports);
__exportStar(require("./ReservationInstructionType"), exports);
__exportStar(require("./ReservationInterfaceStatusType"), exports);
__exportStar(require("./ReservationLocatorType"), exports);
__exportStar(require("./ReservationLocators"), exports);
__exportStar(require("./ReservationLocatorsDetails"), exports);
__exportStar(require("./ReservationLocatorsDetailsInfo"), exports);
__exportStar(require("./ReservationLocatorsInfo"), exports);
__exportStar(require("./ReservationLocatorsStatus"), exports);
__exportStar(require("./ReservationLock"), exports);
__exportStar(require("./ReservationLockDetails"), exports);
__exportStar(require("./ReservationMembership"), exports);
__exportStar(require("./ReservationMembershipAwardType"), exports);
__exportStar(require("./ReservationMembershipType"), exports);
__exportStar(require("./ReservationPace"), exports);
__exportStar(require("./ReservationPaceRSType"), exports);
__exportStar(require("./ReservationPackageScheduleType"), exports);
__exportStar(require("./ReservationPackageType"), exports);
__exportStar(require("./ReservationPackagesInfo"), exports);
__exportStar(require("./ReservationPaymentMethodType"), exports);
__exportStar(require("./ReservationPaymentMethodTypeEmailFolioInfo"), exports);
__exportStar(require("./ReservationPaymentMethods"), exports);
__exportStar(require("./ReservationPolicies"), exports);
__exportStar(require("./ReservationPoliciesType"), exports);
__exportStar(require("./ReservationPreCheckInDetailsType"), exports);
__exportStar(require("./ReservationPreference"), exports);
__exportStar(require("./ReservationPreferenceDetails"), exports);
__exportStar(require("./ReservationPreferenceInfo"), exports);
__exportStar(require("./ReservationProfileType"), exports);
__exportStar(require("./ReservationQueueInformationType"), exports);
__exportStar(require("./ReservationQueueInformationTypeTimeSpan"), exports);
__exportStar(require("./ReservationRateSummaryDetailType"), exports);
__exportStar(require("./ReservationRateSummaryType"), exports);
__exportStar(require("./ReservationReversePolicyCriteriaType"), exports);
__exportStar(require("./ReservationRoomOwnershipType"), exports);
__exportStar(require("./ReservationRoutingCriteria"), exports);
__exportStar(require("./ReservationStatistics"), exports);
__exportStar(require("./ReservationStayHistoryFutureInfoType"), exports);
__exportStar(require("./ReservationSummaryType"), exports);
__exportStar(require("./ReservationTaxTypeInfo"), exports);
__exportStar(require("./ReservationTransactionDiversionType"), exports);
__exportStar(require("./ReservationTurndownInfoType"), exports);
__exportStar(require("./ReservationUpsellInfo"), exports);
__exportStar(require("./ReservationValidationInstructionType"), exports);
__exportStar(require("./ReservationsDetails"), exports);
__exportStar(require("./ReservationsDetailsReservations"), exports);
__exportStar(require("./ReservationsInformationType"), exports);
__exportStar(require("./ReservationsInstructionsType"), exports);
__exportStar(require("./ReservationsSummary"), exports);
__exportStar(require("./ReservationsSummaryInformationType"), exports);
__exportStar(require("./ReservationsToMerge"), exports);
__exportStar(require("./ReservationsUpgradeEligibility"), exports);
__exportStar(require("./ReservationsUpgradeEligibilityDetails"), exports);
__exportStar(require("./ReserveInventoryItems"), exports);
__exportStar(require("./ReservedInventoryItemsInfo"), exports);
__exportStar(require("./ResponseInstructionsType"), exports);
__exportStar(require("./ResvGuestMessageType"), exports);
__exportStar(require("./ResvMessageType"), exports);
__exportStar(require("./ResvRoutingCriteriaType"), exports);
__exportStar(require("./ResvRoutingCriteriaTypeComp"), exports);
__exportStar(require("./ResvRoutingCriteriaTypeFolio"), exports);
__exportStar(require("./ResvRoutingCriteriaTypeFolioGuestInfo"), exports);
__exportStar(require("./ResvRoutingCriteriaTypeRequest"), exports);
__exportStar(require("./ResvRoutingCriteriaTypeRoom"), exports);
__exportStar(require("./RevenueCategorySummaryType"), exports);
__exportStar(require("./ReverseDepositPolicy"), exports);
__exportStar(require("./RewardCertificateType"), exports);
__exportStar(require("./RoomCalendar"), exports);
__exportStar(require("./RoomCalendarDisplayType"), exports);
__exportStar(require("./RoomCalendarInfoType"), exports);
__exportStar(require("./RoomCalendarResType"), exports);
__exportStar(require("./RoomCalendarType"), exports);
__exportStar(require("./RoomFeatureType"), exports);
__exportStar(require("./RoomInfo"), exports);
__exportStar(require("./RoomMoveDetailType"), exports);
__exportStar(require("./RoomOwnershipType"), exports);
__exportStar(require("./RoomPoolStatType"), exports);
__exportStar(require("./RoomRateType"), exports);
__exportStar(require("./RoomScheduleCategoryType"), exports);
__exportStar(require("./RoomScheduleType"), exports);
__exportStar(require("./RoomStayType"), exports);
__exportStar(require("./RoomTypeAttributesType"), exports);
__exportStar(require("./RoomTypeInfoType"), exports);
__exportStar(require("./RoutingInfoType"), exports);
__exportStar(require("./RoutingInstructionType"), exports);
__exportStar(require("./RoutingInstructionTypeDuration"), exports);
__exportStar(require("./RoutingInstructions"), exports);
__exportStar(require("./RoutingInstructionsInfo"), exports);
__exportStar(require("./RoutingInstructionsInfoCriteria"), exports);
__exportStar(require("./RoutingInstructionsInfoCriteriaComp"), exports);
__exportStar(require("./RoutingInstructionsInfoCriteriaFolio"), exports);
__exportStar(require("./RoutingInstructionsInfoCriteriaRequest"), exports);
__exportStar(require("./RoutingInstructionsInfoCriteriaRoom"), exports);
__exportStar(require("./ScopeType"), exports);
__exportStar(require("./Script"), exports);
__exportStar(require("./SearchMatchType"), exports);
__exportStar(require("./SellMessageConfig"), exports);
__exportStar(require("./SellMessageConfigType"), exports);
__exportStar(require("./SellMessageConfigsType"), exports);
__exportStar(require("./SellMessageType"), exports);
__exportStar(require("./SellMessages"), exports);
__exportStar(require("./SellMessagesType"), exports);
__exportStar(require("./SentConfirmationStatus"), exports);
__exportStar(require("./ServiceRequest"), exports);
__exportStar(require("./ServiceRequestStatusType"), exports);
__exportStar(require("./ShareDistributionCriteria"), exports);
__exportStar(require("./ShareDistributionInstructionType"), exports);
__exportStar(require("./ShareReservationInstructionType"), exports);
__exportStar(require("./ShareReservationType"), exports);
__exportStar(require("./ShareReservations"), exports);
__exportStar(require("./ShareTypeType"), exports);
__exportStar(require("./SharingGuestType"), exports);
__exportStar(require("./SourceOfSaleType"), exports);
__exportStar(require("./SplitMultiRoomReservation"), exports);
__exportStar(require("./SplitMultiRoomReservationDetails"), exports);
__exportStar(require("./SplitMultiRoomReservationResponseInstructions"), exports);
__exportStar(require("./StatisticCodeType"), exports);
__exportStar(require("./StatisticSetType"), exports);
__exportStar(require("./StatisticType"), exports);
__exportStar(require("./Status"), exports);
__exportStar(require("./StatusType"), exports);
__exportStar(require("./StayFutureListType"), exports);
__exportStar(require("./StayHistoryListType"), exports);
__exportStar(require("./StayInfoType"), exports);
__exportStar(require("./StayReservationInfoType"), exports);
__exportStar(require("./TaxType"), exports);
__exportStar(require("./TaxTypeType"), exports);
__exportStar(require("./TaxesType"), exports);
__exportStar(require("./TelephoneInfoType"), exports);
__exportStar(require("./TelephoneType"), exports);
__exportStar(require("./ThresholdDetailsType"), exports);
__exportStar(require("./TicketType"), exports);
__exportStar(require("./Tickets"), exports);
__exportStar(require("./TicketsInfo"), exports);
__exportStar(require("./TierAdministrationType"), exports);
__exportStar(require("./TimeSpanType"), exports);
__exportStar(require("./TimeWindowType"), exports);
__exportStar(require("./TotalType"), exports);
__exportStar(require("./TraceResolveType"), exports);
__exportStar(require("./TraceTimeInfoType"), exports);
__exportStar(require("./Traces"), exports);
__exportStar(require("./TrackItActionType"), exports);
__exportStar(require("./TrackItGroup"), exports);
__exportStar(require("./TrackItId"), exports);
__exportStar(require("./TrackItItemType"), exports);
__exportStar(require("./TrackItLogType"), exports);
__exportStar(require("./TrackItReservationInfoType"), exports);
__exportStar(require("./TrackItType"), exports);
__exportStar(require("./TransactionDiversionDailyDetailType"), exports);
__exportStar(require("./TransactionDiversionRuleLevelType"), exports);
__exportStar(require("./TransactionDiversionRuleTypeType"), exports);
__exportStar(require("./TransactionDiversions"), exports);
__exportStar(require("./TransactionDiversionsDetails"), exports);
__exportStar(require("./TransactionDiversionsInfo"), exports);
__exportStar(require("./TranslationTextType2000"), exports);
__exportStar(require("./TranslationTextType80"), exports);
__exportStar(require("./TranslationsTextTypeInner"), exports);
__exportStar(require("./TransportInfoType"), exports);
__exportStar(require("./TravelAgentDetails"), exports);
__exportStar(require("./TrxInfoType"), exports);
__exportStar(require("./TurnawayDetailsType"), exports);
__exportStar(require("./TurnawayType"), exports);
__exportStar(require("./TurndownStatusType"), exports);
__exportStar(require("./TypeOfMessageType"), exports);
__exportStar(require("./URLInfoType"), exports);
__exportStar(require("./URLType"), exports);
__exportStar(require("./UniqueIDType"), exports);
__exportStar(require("./UpgradeElgibilityStatusType"), exports);
__exportStar(require("./UpgradeEligibilityReservations"), exports);
__exportStar(require("./UpgradeEligibilityType"), exports);
__exportStar(require("./UpsellDailyRateType"), exports);
__exportStar(require("./UpsellInfoType"), exports);
__exportStar(require("./UpsellInfoTypeOriginalInfo"), exports);
__exportStar(require("./UpsellInfoTypeUpsellInfo"), exports);
__exportStar(require("./UpsellRateInstructionType"), exports);
__exportStar(require("./UpsellReservation"), exports);
__exportStar(require("./UpsellType"), exports);
__exportStar(require("./UsedInModuleType"), exports);
__exportStar(require("./UserDefinedFieldsType"), exports);
__exportStar(require("./UserInfoType"), exports);
__exportStar(require("./UserSessionDefaultsType"), exports);
__exportStar(require("./UserSessionInfoType"), exports);
__exportStar(require("./VIPStatusType"), exports);
__exportStar(require("./VIPType"), exports);
__exportStar(require("./ValidateRateInfo"), exports);
__exportStar(require("./ValidateRateInfoCriteria"), exports);
__exportStar(require("./ValidateReservationChanges"), exports);
__exportStar(require("./ValidateReservationChangesDetails"), exports);
__exportStar(require("./ValidateReservationChangesInstructions"), exports);
__exportStar(require("./ValidationActionType"), exports);
__exportStar(require("./ValidationReturnType"), exports);
__exportStar(require("./VisaInfoType"), exports);
__exportStar(require("./WaitlistResType"), exports);
__exportStar(require("./WarningType"), exports);
__exportStar(require("./WelcomeOfferOptionsType"), exports);
__exportStar(require("./WelcomeOfferType"), exports);