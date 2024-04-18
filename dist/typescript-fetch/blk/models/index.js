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
__exportStar(require("./ARAccountShortInfoType"), exports);
__exportStar(require("./ARAccountStatusType"), exports);
__exportStar(require("./ActionStatusType"), exports);
__exportStar(require("./ActivityListInner"), exports);
__exportStar(require("./ActivityListInnerDeposit"), exports);
__exportStar(require("./ActivityLogListType"), exports);
__exportStar(require("./ActivityLogType"), exports);
__exportStar(require("./AdditionalGuestAmountType"), exports);
__exportStar(require("./AddressInfoType"), exports);
__exportStar(require("./AddressSearchType"), exports);
__exportStar(require("./AddressType"), exports);
__exportStar(require("./AddtionalCodeInfoTypeInner"), exports);
__exportStar(require("./AdvanceCheckInType"), exports);
__exportStar(require("./AlertAreaType"), exports);
__exportStar(require("./AlertGuestInfoType"), exports);
__exportStar(require("./AlertType"), exports);
__exportStar(require("./AllRestrictions"), exports);
__exportStar(require("./Allocation"), exports);
__exportStar(require("./AllocationGridByDateRangeType"), exports);
__exportStar(require("./AllocationGridByDateRangesType"), exports);
__exportStar(require("./AllocationGridByRoomTypeType"), exports);
__exportStar(require("./AllocationGridByRoomTypesType"), exports);
__exportStar(require("./AllocationRoomTypeInfoType"), exports);
__exportStar(require("./AllocationType"), exports);
__exportStar(require("./AmountDeterminationType"), exports);
__exportStar(require("./AmountType"), exports);
__exportStar(require("./AnonymizationStatusType"), exports);
__exportStar(require("./AnonymizationType"), exports);
__exportStar(require("./ApplicationUserType"), exports);
__exportStar(require("./ApplyEventAttendeesChangesToEventsType"), exports);
__exportStar(require("./ArticleInfoType"), exports);
__exportStar(require("./ArticlePostItType"), exports);
__exportStar(require("./AssociatedResType"), exports);
__exportStar(require("./AttachmentType"), exports);
__exportStar(require("./AttendantType"), exports);
__exportStar(require("./AuthorizationRuleType"), exports);
__exportStar(require("./AuthorizerInfoType"), exports);
__exportStar(require("./AwardId"), exports);
__exportStar(require("./AwardKindType"), exports);
__exportStar(require("./AwardStatusType"), exports);
__exportStar(require("./AwardType"), exports);
__exportStar(require("./AwardVouchersTypeInner"), exports);
__exportStar(require("./BedTaxReportingType"), exports);
__exportStar(require("./BenefitType"), exports);
__exportStar(require("./BillingInstructionType"), exports);
__exportStar(require("./BillingPrivilegesType"), exports);
__exportStar(require("./Block"), exports);
__exportStar(require("./BlockAccessExclusion"), exports);
__exportStar(require("./BlockAccessExclusionBlockAccessExclusions"), exports);
__exportStar(require("./BlockAccessExclusionInfo"), exports);
__exportStar(require("./BlockAccessExclusionMessageType"), exports);
__exportStar(require("./BlockAccessExclusionType"), exports);
__exportStar(require("./BlockAccessExclusionsType"), exports);
__exportStar(require("./BlockAccessRestrictionType"), exports);
__exportStar(require("./BlockActivityLog"), exports);
__exportStar(require("./BlockAllocationRange"), exports);
__exportStar(require("./BlockAllocationRangeType"), exports);
__exportStar(require("./BlockAllocationRangeTypeOverbookListInner"), exports);
__exportStar(require("./BlockAllocationWash"), exports);
__exportStar(require("./BlockAllocationWashType"), exports);
__exportStar(require("./BlockAllocationWashTypeOccPercentByDay"), exports);
__exportStar(require("./BlockAlternateDateType"), exports);
__exportStar(require("./BlockAlternateDates"), exports);
__exportStar(require("./BlockApplyChangesToType"), exports);
__exportStar(require("./BlockAttachments"), exports);
__exportStar(require("./BlockAvailability"), exports);
__exportStar(require("./BlockAvailabilityInfoType"), exports);
__exportStar(require("./BlockAvailabilityMasterInfoType"), exports);
__exportStar(require("./BlockAvailabilityRatePlanInfo"), exports);
__exportStar(require("./BlockAvailabilityRatePlanInfoRatePlanInfo"), exports);
__exportStar(require("./BlockAvailabilityRoomInfoType"), exports);
__exportStar(require("./BlockAvailabilityRoomTypeInfo"), exports);
__exportStar(require("./BlockAvailabilityType"), exports);
__exportStar(require("./BlockCancellationTypeType"), exports);
__exportStar(require("./BlockChanged"), exports);
__exportStar(require("./BlockClassificationType"), exports);
__exportStar(require("./BlockCodeToValidate"), exports);
__exportStar(require("./BlockCopy"), exports);
__exportStar(require("./BlockDailyRoomStatisticsType"), exports);
__exportStar(require("./BlockDailyStatistics"), exports);
__exportStar(require("./BlockDailyStatisticsDateType"), exports);
__exportStar(require("./BlockDailyStatisticsInfoType"), exports);
__exportStar(require("./BlockDetailInstructionType"), exports);
__exportStar(require("./BlockDetailsType"), exports);
__exportStar(require("./BlockDetailsTypePrimaryOwners"), exports);
__exportStar(require("./BlockDetailsTypePrimaryProfiles"), exports);
__exportStar(require("./BlockDetailsTypePrimaryRatePlanCodes"), exports);
__exportStar(require("./BlockDetailsTypeShoulderRatePlanCode"), exports);
__exportStar(require("./BlockGridInvType"), exports);
__exportStar(require("./BlockGridRatesType"), exports);
__exportStar(require("./BlockHeaderInfoType"), exports);
__exportStar(require("./BlockId"), exports);
__exportStar(require("./BlockInstructionType"), exports);
__exportStar(require("./BlockInstructionTypeBlockProfiles"), exports);
__exportStar(require("./BlockInstructionTypeBlockSecurity"), exports);
__exportStar(require("./BlockInstructionTypeComments"), exports);
__exportStar(require("./BlockInstructionTypeExternalAttributes"), exports);
__exportStar(require("./BlockInstructionTypeGenericRoomAllocations"), exports);
__exportStar(require("./BlockInstructionTypeResponseInstructions"), exports);
__exportStar(require("./BlockInstructionTypeRoomAllocations"), exports);
__exportStar(require("./BlockInventoryControlType"), exports);
__exportStar(require("./BlockInventoryItemSourceType"), exports);
__exportStar(require("./BlockInventoryItemType"), exports);
__exportStar(require("./BlockNonCompeteType"), exports);
__exportStar(require("./BlockOwnerType"), exports);
__exportStar(require("./BlockOwners"), exports);
__exportStar(require("./BlockOwnersToAssign"), exports);
__exportStar(require("./BlockOwnersToChange"), exports);
__exportStar(require("./BlockOwnersType"), exports);
__exportStar(require("./BlockOwnershipType"), exports);
__exportStar(require("./BlockPMReservations"), exports);
__exportStar(require("./BlockPackageType"), exports);
__exportStar(require("./BlockPostingMaster"), exports);
__exportStar(require("./BlockProfileTypeType"), exports);
__exportStar(require("./BlockProfilesType"), exports);
__exportStar(require("./BlockRangeInfo"), exports);
__exportStar(require("./BlockRangeInfoType"), exports);
__exportStar(require("./BlockRangeInfoTypeBlockInfo"), exports);
__exportStar(require("./BlockRangeModeType"), exports);
__exportStar(require("./BlockRateCodeValidationType"), exports);
__exportStar(require("./BlockRatePlanInfoType"), exports);
__exportStar(require("./BlockRateProtectionType"), exports);
__exportStar(require("./BlockReservationDetailsType"), exports);
__exportStar(require("./BlockReservationId"), exports);
__exportStar(require("./BlockReservations"), exports);
__exportStar(require("./BlockReservationsCriteriaType"), exports);
__exportStar(require("./BlockReservationsCriteriaTypeStayOn"), exports);
__exportStar(require("./BlockReservationsToChange"), exports);
__exportStar(require("./BlockReservationsType"), exports);
__exportStar(require("./BlockRestriction"), exports);
__exportStar(require("./BlockRestrictionType"), exports);
__exportStar(require("./BlockRestrictions"), exports);
__exportStar(require("./BlockRestrictionsType"), exports);
__exportStar(require("./BlockRevenueChanges"), exports);
__exportStar(require("./BlockRevenueChangesDetailType"), exports);
__exportStar(require("./BlockRoomStatisticsType"), exports);
__exportStar(require("./BlockRoomTypes"), exports);
__exportStar(require("./BlockRoomsStatus"), exports);
__exportStar(require("./BlockSourceOfSaleType"), exports);
__exportStar(require("./BlockStatReportType"), exports);
__exportStar(require("./BlockStatistics"), exports);
__exportStar(require("./BlockStatisticsAllotedRoomsType"), exports);
__exportStar(require("./BlockStatisticsDateType"), exports);
__exportStar(require("./BlockStatisticsDetailType"), exports);
__exportStar(require("./BlockStatisticsDetailsType"), exports);
__exportStar(require("./BlockStatisticsInfoType"), exports);
__exportStar(require("./BlockStatisticsInfoTypeRate"), exports);
__exportStar(require("./BlockStatisticsSummaryType"), exports);
__exportStar(require("./BlockStatisticsType"), exports);
__exportStar(require("./BlockStats"), exports);
__exportStar(require("./BlockStatus"), exports);
__exportStar(require("./BlockStatusChanges"), exports);
__exportStar(require("./BlockStatusChangesDetailType"), exports);
__exportStar(require("./BlockStatusToChange"), exports);
__exportStar(require("./BlockStatusTypeType"), exports);
__exportStar(require("./BlockSummaries"), exports);
__exportStar(require("./BlockSummariesType"), exports);
__exportStar(require("./BlockSummariesTypeBlockInfoInner"), exports);
__exportStar(require("./BlockSummaryType"), exports);
__exportStar(require("./BlockToBeChanged"), exports);
__exportStar(require("./BlockToCancel"), exports);
__exportStar(require("./BlockToShift"), exports);
__exportStar(require("./BlockTraceType"), exports);
__exportStar(require("./BlockType"), exports);
__exportStar(require("./BlockValidate"), exports);
__exportStar(require("./BlockWashInfo"), exports);
__exportStar(require("./BlockWashInfoType"), exports);
__exportStar(require("./BlockWashInfoTypeBlockInfo"), exports);
__exportStar(require("./BlockWashScheduleType"), exports);
__exportStar(require("./BlockWashSchedules"), exports);
__exportStar(require("./BlockWashSchedulesInfo"), exports);
__exportStar(require("./BlockWashSchedulesInfoType"), exports);
__exportStar(require("./BlocksDailyStatisticsTypeInner"), exports);
__exportStar(require("./BlocksType"), exports);
__exportStar(require("./BlocksTypeBlockInfoInner"), exports);
__exportStar(require("./BookingChannelMappingType"), exports);
__exportStar(require("./BookingStatusDetailType"), exports);
__exportStar(require("./BookingStatusHistoryType"), exports);
__exportStar(require("./BookingStatusType"), exports);
__exportStar(require("./BorrowCandidateType"), exports);
__exportStar(require("./BorrowInventoryType"), exports);
__exportStar(require("./BorrowRoomType"), exports);
__exportStar(require("./BorrowableInventoryType"), exports);
__exportStar(require("./BorrowedInventoryToReturn"), exports);
__exportStar(require("./BreakfastType"), exports);
__exportStar(require("./CallType"), exports);
__exportStar(require("./CallTypeReservation"), exports);
__exportStar(require("./CallerType"), exports);
__exportStar(require("./CancelBlockType"), exports);
__exportStar(require("./CancelPenaltyType"), exports);
__exportStar(require("./CancellationDetailsType"), exports);
__exportStar(require("./CardNumberTypeType"), exports);
__exportStar(require("./CardProcessingType"), exports);
__exportStar(require("./CardReIssueType"), exports);
__exportStar(require("./CardTypeType"), exports);
__exportStar(require("./CateringEventsProcessedInfoType"), exports);
__exportStar(require("./CateringResInfoType"), exports);
__exportStar(require("./CateringRevenueType"), exports);
__exportStar(require("./CateringStatusToChange"), exports);
__exportStar(require("./CateringType"), exports);
__exportStar(require("./CentralSalesLeadsType"), exports);
__exportStar(require("./ChangeBlockReservationType"), exports);
__exportStar(require("./ChangeBlockReservationsType"), exports);
__exportStar(require("./ChangeBlockReservationsTypeReferenceReservation"), exports);
__exportStar(require("./ChangeBlockResvInstructionType"), exports);
__exportStar(require("./ChangeBlockStatusType"), exports);
__exportStar(require("./ChangeCateringStatusType"), exports);
__exportStar(require("./ChangedBlockReservations"), exports);
__exportStar(require("./ChangedBlockStatus"), exports);
__exportStar(require("./ChangedCateringStatus"), exports);
__exportStar(require("./CharacterUDFType"), exports);
__exportStar(require("./ChildAgeType"), exports);
__exportStar(require("./ChildBucketsType"), exports);
__exportStar(require("./CodeDescriptionType"), exports);
__exportStar(require("./CodeInfoType"), exports);
__exportStar(require("./ColorType"), exports);
__exportStar(require("./CommentInfoType"), exports);
__exportStar(require("./CommentType"), exports);
__exportStar(require("./CommissionPaymentMethods"), exports);
__exportStar(require("./CommissionPayoutToType"), exports);
__exportStar(require("./CommunicationStatusType"), exports);
__exportStar(require("./CompAuthorizerInfoType"), exports);
__exportStar(require("./CompRoutingRequestType"), exports);
__exportStar(require("./CompRoutingStatusType"), exports);
__exportStar(require("./CompanyInfoType"), exports);
__exportStar(require("./CompanyType"), exports);
__exportStar(require("./ConfDeliveryInfoType"), exports);
__exportStar(require("./ConfDeliveryMethod"), exports);
__exportStar(require("./ConfRecipientInfoType"), exports);
__exportStar(require("./ConfigPackagePrimaryDetailsType"), exports);
__exportStar(require("./ConfigPackageTransactionType"), exports);
__exportStar(require("./ConfigPackageUsageDetailType"), exports);
__exportStar(require("./ConfigPostingAttributesType"), exports);
__exportStar(require("./ConfirmationStyle"), exports);
__exportStar(require("./ConfirmationType"), exports);
__exportStar(require("./CopyBlockType"), exports);
__exportStar(require("./CopyBlockTypeCopyInstructions"), exports);
__exportStar(require("./CountryNameType"), exports);
__exportStar(require("./CreateBlockPostingMasterCriteria"), exports);
__exportStar(require("./CreateBlockPostingMasterCriteriaResponseInstruction"), exports);
__exportStar(require("./CreateBlockRestrictionType"), exports);
__exportStar(require("./CreateSubBlockBaseInfoType"), exports);
__exportStar(require("./CurrencyAmountType"), exports);
__exportStar(require("./CurrencyExchangeRateType"), exports);
__exportStar(require("./CurrentRoomInfoType"), exports);
__exportStar(require("./CustomChargeExemptionDateType"), exports);
__exportStar(require("./CustomChargeExemptionType"), exports);
__exportStar(require("./CustomChargeQuantityType"), exports);
__exportStar(require("./CustomFieldsType"), exports);
__exportStar(require("./CustomerType"), exports);
__exportStar(require("./CustomerTypeIdentifications"), exports);
__exportStar(require("./DateRangeType"), exports);
__exportStar(require("./DateTimeSpanType"), exports);
__exportStar(require("./DateTimeStampGroupType"), exports);
__exportStar(require("./DateUDFType"), exports);
__exportStar(require("./DefaultBlockCodeDetails"), exports);
__exportStar(require("./DepositCancelRevenueType"), exports);
__exportStar(require("./DepositPolicyType"), exports);
__exportStar(require("./DirectBillingType"), exports);
__exportStar(require("./DiscountType"), exports);
__exportStar(require("./DowngradeType"), exports);
__exportStar(require("./ECertificateClassficationType"), exports);
__exportStar(require("./ECertificateConsumeSourceType"), exports);
__exportStar(require("./ECertificateConsumptionType"), exports);
__exportStar(require("./ECertificateGenerationType"), exports);
__exportStar(require("./ECertificateInfoType"), exports);
__exportStar(require("./ECertificateInfoTypeHotels"), exports);
__exportStar(require("./ECertificateIssueSourceType"), exports);
__exportStar(require("./ECertificateIssueType"), exports);
__exportStar(require("./ECertificateScopeType"), exports);
__exportStar(require("./ECertificateStatusType"), exports);
__exportStar(require("./ECertificateType"), exports);
__exportStar(require("./ECertificateUsageCriteriaType"), exports);
__exportStar(require("./ECouponType"), exports);
__exportStar(require("./EffectiveRateType"), exports);
__exportStar(require("./EmailInfoType"), exports);
__exportStar(require("./EmailType"), exports);
__exportStar(require("./EmployeeInfoType"), exports);
__exportStar(require("./EntityType"), exports);
__exportStar(require("./ErrorInstance"), exports);
__exportStar(require("./ErrorType"), exports);
__exportStar(require("./EventAttendeesType"), exports);
__exportStar(require("./EventId"), exports);
__exportStar(require("./EventOrderType"), exports);
__exportStar(require("./EventTypeType"), exports);
__exportStar(require("./ExceptionDetailType"), exports);
__exportStar(require("./ExcludedDateType"), exports);
__exportStar(require("./ExclusionReasonType"), exports);
__exportStar(require("./ExternalReferenceType"), exports);
__exportStar(require("./FBAInfoType"), exports);
__exportStar(require("./FBAStatusType"), exports);
__exportStar(require("./FacilityCodeType"), exports);
__exportStar(require("./FacilityTaskType"), exports);
__exportStar(require("./FeeType"), exports);
__exportStar(require("./FeesType"), exports);
__exportStar(require("./FetchActivityBookingsType"), exports);
__exportStar(require("./FixedChargeDetailType"), exports);
__exportStar(require("./FixedChargeFrequencyType"), exports);
__exportStar(require("./FixedChargeScheduleType"), exports);
__exportStar(require("./FixedChargeType"), exports);
__exportStar(require("./FolioTextsTypeInner"), exports);
__exportStar(require("./ForeignExchangeType"), exports);
__exportStar(require("./FormattedTextTextType"), exports);
__exportStar(require("./FunctionArgumentType"), exports);
__exportStar(require("./FutureListType"), exports);
__exportStar(require("./GuaranteeRequirementsType"), exports);
__exportStar(require("./GuaranteeType"), exports);
__exportStar(require("./GuestCountsType"), exports);
__exportStar(require("./GuestHousekeepingServiceRequestType"), exports);
__exportStar(require("./GuestLastStayInfoType"), exports);
__exportStar(require("./GuestMessageType"), exports);
__exportStar(require("./HSKStatCategoryCodeType"), exports);
__exportStar(require("./HSKStatCategoryType"), exports);
__exportStar(require("./HSKStatCodeType"), exports);
__exportStar(require("./HSKStatReportCodeType"), exports);
__exportStar(require("./HSKStatSetType"), exports);
__exportStar(require("./HSKStatType"), exports);
__exportStar(require("./HistoryListType"), exports);
__exportStar(require("./HotelInterfaceStatusType"), exports);
__exportStar(require("./HotelInterfaceType"), exports);
__exportStar(require("./HotelInterfaceTypeType"), exports);
__exportStar(require("./HotelReservationTraceType"), exports);
__exportStar(require("./HotelReservationType"), exports);
__exportStar(require("./HotelReservationTypeCancellation"), exports);
__exportStar(require("./HotelReservationTypeReservationProfiles"), exports);
__exportStar(require("./HotelReservationTypeTransactionDiversions"), exports);
__exportStar(require("./HotelReservationsType"), exports);
__exportStar(require("./HotelUseType"), exports);
__exportStar(require("./HousekeepingRoomStatusType"), exports);
__exportStar(require("./HousekeepingTaskCodeType"), exports);
__exportStar(require("./IdentificationInfoType"), exports);
__exportStar(require("./IdentificationType"), exports);
__exportStar(require("./ImageSetType"), exports);
__exportStar(require("./ImageStyleType"), exports);
__exportStar(require("./IndicatorType"), exports);
__exportStar(require("./InstanceLink"), exports);
__exportStar(require("./InterfaceRightsStatusType"), exports);
__exportStar(require("./InventoryToBorrow"), exports);
__exportStar(require("./InventoryToBorrowInfo"), exports);
__exportStar(require("./InventoryToReturnType"), exports);
__exportStar(require("./ItemInfoType"), exports);
__exportStar(require("./LastStayInfoType"), exports);
__exportStar(require("./LeadInfoType"), exports);
__exportStar(require("./LinkedReservationInfoType"), exports);
__exportStar(require("./LinkedReservationType"), exports);
__exportStar(require("./LinkedReservationsInfoType"), exports);
__exportStar(require("./LogUserInfoType"), exports);
__exportStar(require("./MarketCodeInfoType"), exports);
__exportStar(require("./MasterAccountInfoType"), exports);
__exportStar(require("./MasterBlockInfoType"), exports);
__exportStar(require("./MasterInfoCodeDetailType"), exports);
__exportStar(require("./MasterInfoType"), exports);
__exportStar(require("./MasterSubBlockBaseInfoType"), exports);
__exportStar(require("./MasterType"), exports);
__exportStar(require("./MealPlanCodeType"), exports);
__exportStar(require("./MembershipEarningPreferenceType"), exports);
__exportStar(require("./MembershipInfoType"), exports);
__exportStar(require("./MembershipType"), exports);
__exportStar(require("./MembershipTypeLevelType"), exports);
__exportStar(require("./MessageDeliveryType"), exports);
__exportStar(require("./MessageStatusType"), exports);
__exportStar(require("./MessageType"), exports);
__exportStar(require("./MiscTraceType"), exports);
__exportStar(require("./NameTypeType"), exports);
__exportStar(require("./NameValueDataTypeType"), exports);
__exportStar(require("./NameValueDetailType"), exports);
__exportStar(require("./NameValueModuleType"), exports);
__exportStar(require("./NameValueOriginType"), exports);
__exportStar(require("./NameValueType"), exports);
__exportStar(require("./NewBlockDetailsType"), exports);
__exportStar(require("./NextBlockStatus"), exports);
__exportStar(require("./NumericUDFType"), exports);
__exportStar(require("./OffsetUnitType"), exports);
__exportStar(require("./OverrideInstructionType"), exports);
__exportStar(require("./OwnerResTypeType"), exports);
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
__exportStar(require("./PackagePostingRulesType"), exports);
__exportStar(require("./PackageTransactionCodeType"), exports);
__exportStar(require("./ParagraphType"), exports);
__exportStar(require("./ParameterType"), exports);
__exportStar(require("./PayeeInfoType"), exports);
__exportStar(require("./PersonNameType"), exports);
__exportStar(require("./PersonNameTypeType"), exports);
__exportStar(require("./PkgInventoryItemType"), exports);
__exportStar(require("./PointsType"), exports);
__exportStar(require("./PolicyAmountPercentType"), exports);
__exportStar(require("./PolicyBasisTypeType"), exports);
__exportStar(require("./PolicyDeadlineType"), exports);
__exportStar(require("./PorterageType"), exports);
__exportStar(require("./PostingRhythmType"), exports);
__exportStar(require("./PreferenceType"), exports);
__exportStar(require("./PreferenceTypeType"), exports);
__exportStar(require("./PrepaidCardDetailsType"), exports);
__exportStar(require("./PrepaidCardTransactionType"), exports);
__exportStar(require("./PrepaidCardTrxTypeType"), exports);
__exportStar(require("./PrepaidCardType"), exports);
__exportStar(require("./PrimaryShareTypeType"), exports);
__exportStar(require("./PrivacyInfoType"), exports);
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
__exportStar(require("./ProfileTaxInfoType"), exports);
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
__exportStar(require("./PromotionType"), exports);
__exportStar(require("./QueueTextInfoType"), exports);
__exportStar(require("./RateByAgeBucketType"), exports);
__exportStar(require("./RateOverride"), exports);
__exportStar(require("./RateOverrideStatus"), exports);
__exportStar(require("./RatePlanChannelInfoType"), exports);
__exportStar(require("./RatePlanChannelInfoTypeRatePlanId"), exports);
__exportStar(require("./RatePlanCommissionType"), exports);
__exportStar(require("./RateProgramRateType"), exports);
__exportStar(require("./RateProgramType"), exports);
__exportStar(require("./RateProtectionType"), exports);
__exportStar(require("./RateRangeType"), exports);
__exportStar(require("./RatesType"), exports);
__exportStar(require("./RecentlyAccessedBlockType"), exports);
__exportStar(require("./RecentlyAccessedBlocks"), exports);
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
__exportStar(require("./ResCompAccountingType"), exports);
__exportStar(require("./ResDepositPolicyType"), exports);
__exportStar(require("./ResExpectedTimesType"), exports);
__exportStar(require("./ResGuaranteeType"), exports);
__exportStar(require("./ResGuestAdditionalInfoType"), exports);
__exportStar(require("./ResGuestExternalInfoType"), exports);
__exportStar(require("./ResGuestInfoType"), exports);
__exportStar(require("./ResGuestType"), exports);
__exportStar(require("./ResGuestTypeProfileInfo"), exports);
__exportStar(require("./ResHousekeepingType"), exports);
__exportStar(require("./ResInventoryItemSourceType"), exports);
__exportStar(require("./ResInventoryItemType"), exports);
__exportStar(require("./ResInventoryItemsType"), exports);
__exportStar(require("./ResMobileNotificationsType"), exports);
__exportStar(require("./ResPaymentCardType"), exports);
__exportStar(require("./ResPeriodicFolioType"), exports);
__exportStar(require("./ResPreConfiguredRoutingInstrType"), exports);
__exportStar(require("./ResProfileTypeType"), exports);
__exportStar(require("./ResRevenueBalanceType"), exports);
__exportStar(require("./ResSharedGuestInfoType"), exports);
__exportStar(require("./ResStatClassificationType"), exports);
__exportStar(require("./ReservationAllowedActionType"), exports);
__exportStar(require("./ReservationBlockType"), exports);
__exportStar(require("./ReservationCertificateType"), exports);
__exportStar(require("./ReservationDepositType"), exports);
__exportStar(require("./ReservationECertificateType"), exports);
__exportStar(require("./ReservationFolioWindowType"), exports);
__exportStar(require("./ReservationHistoryFutureInfoType"), exports);
__exportStar(require("./ReservationId"), exports);
__exportStar(require("./ReservationInfoType"), exports);
__exportStar(require("./ReservationInfoTypeCancellationInfo"), exports);
__exportStar(require("./ReservationInterfaceStatusType"), exports);
__exportStar(require("./ReservationLocatorType"), exports);
__exportStar(require("./ReservationMembershipType"), exports);
__exportStar(require("./ReservationPackageScheduleType"), exports);
__exportStar(require("./ReservationPackageType"), exports);
__exportStar(require("./ReservationPaymentMethodType"), exports);
__exportStar(require("./ReservationPaymentMethodTypeEmailFolioInfo"), exports);
__exportStar(require("./ReservationPoliciesType"), exports);
__exportStar(require("./ReservationProfileType"), exports);
__exportStar(require("./ReservationQueueInformationType"), exports);
__exportStar(require("./ReservationQueueInformationTypeTimeSpan"), exports);
__exportStar(require("./ReservationSnapshotType"), exports);
__exportStar(require("./ReservationSnapshotsType"), exports);
__exportStar(require("./ReservationStayHistoryFutureInfoType"), exports);
__exportStar(require("./ReservationTaxTypeInfo"), exports);
__exportStar(require("./ReservationTransactionDiversionType"), exports);
__exportStar(require("./ReservationTurndownInfoType"), exports);
__exportStar(require("./ReservationTypeInfoType"), exports);
__exportStar(require("./ResourceDiscountTypeType"), exports);
__exportStar(require("./ResponseInstructionType"), exports);
__exportStar(require("./RestrictionStatusType"), exports);
__exportStar(require("./RestrictionStatusesType"), exports);
__exportStar(require("./ReturnRoomType"), exports);
__exportStar(require("./RevenueSummaryType"), exports);
__exportStar(require("./RewardCertificateType"), exports);
__exportStar(require("./RoomAllocationInfoType"), exports);
__exportStar(require("./RoomAllocationMasterInfoType"), exports);
__exportStar(require("./RoomAllocationTypeType"), exports);
__exportStar(require("./RoomFeatureType"), exports);
__exportStar(require("./RoomGridDetailsType"), exports);
__exportStar(require("./RoomOrderType"), exports);
__exportStar(require("./RoomOwnershipType"), exports);
__exportStar(require("./RoomRateAvailReasonType"), exports);
__exportStar(require("./RoomRateType"), exports);
__exportStar(require("./RoomStatisticsType"), exports);
__exportStar(require("./RoomStayType"), exports);
__exportStar(require("./RoomTypeAttributesType"), exports);
__exportStar(require("./RoomTypeInfoType"), exports);
__exportStar(require("./RoomTypeOrder"), exports);
__exportStar(require("./RoomingList"), exports);
__exportStar(require("./RoomingListBlockInfoType"), exports);
__exportStar(require("./RoomingListDetails"), exports);
__exportStar(require("./RoomingListReservationType"), exports);
__exportStar(require("./RoomingListReservationsType"), exports);
__exportStar(require("./RoomingListShareReservationType"), exports);
__exportStar(require("./RoomingListShareType"), exports);
__exportStar(require("./RoomsStatusSummaryType"), exports);
__exportStar(require("./RoutingInfoType"), exports);
__exportStar(require("./RoutingInfoTypeComp"), exports);
__exportStar(require("./RoutingInfoTypeFolio"), exports);
__exportStar(require("./RoutingInfoTypeFolioGuestInfo"), exports);
__exportStar(require("./RoutingInfoTypeRequest"), exports);
__exportStar(require("./RoutingInfoTypeRoom"), exports);
__exportStar(require("./RoutingInstructionType"), exports);
__exportStar(require("./RoutingInstructionTypeDuration"), exports);
__exportStar(require("./SalesAllowanceIDType"), exports);
__exportStar(require("./SalesAllowanceType"), exports);
__exportStar(require("./SalesAllowances"), exports);
__exportStar(require("./ScopeType"), exports);
__exportStar(require("./SearchMatchType"), exports);
__exportStar(require("./SellLimitGridByDateRangeType"), exports);
__exportStar(require("./SellMessageConfigType"), exports);
__exportStar(require("./SellMessageConfigsType"), exports);
__exportStar(require("./SentConfirmationStatus"), exports);
__exportStar(require("./ServiceRequest"), exports);
__exportStar(require("./ServiceRequestStatusType"), exports);
__exportStar(require("./SetBlockGridInvType"), exports);
__exportStar(require("./SetBlockOwnersType"), exports);
__exportStar(require("./ShareDistributionInstructionType"), exports);
__exportStar(require("./ShiftBlockCriteriaType"), exports);
__exportStar(require("./ShiftedBlock"), exports);
__exportStar(require("./SourceCodeInfoType"), exports);
__exportStar(require("./SourceOfSaleType"), exports);
__exportStar(require("./StatUnitCategoryType"), exports);
__exportStar(require("./StatisticsRoomTypeInfoType"), exports);
__exportStar(require("./StatisticsSummaryType"), exports);
__exportStar(require("./StatisticsType"), exports);
__exportStar(require("./Status"), exports);
__exportStar(require("./StatusColorType"), exports);
__exportStar(require("./StayFutureListType"), exports);
__exportStar(require("./StayHistoryListType"), exports);
__exportStar(require("./StayInfoType"), exports);
__exportStar(require("./StayReservationInfoType"), exports);
__exportStar(require("./SubAllocation"), exports);
__exportStar(require("./SubAllocationType"), exports);
__exportStar(require("./SubAllocationsType"), exports);
__exportStar(require("./SubAllocationsTypeSubAllocationInfoInner"), exports);
__exportStar(require("./SubBlock"), exports);
__exportStar(require("./SubBlockCriteria"), exports);
__exportStar(require("./TaxType"), exports);
__exportStar(require("./TaxTypeType"), exports);
__exportStar(require("./TaxesType"), exports);
__exportStar(require("./TelephoneInfoType"), exports);
__exportStar(require("./TelephoneType"), exports);
__exportStar(require("./ThresholdDetailsType"), exports);
__exportStar(require("./TicketType"), exports);
__exportStar(require("./TierAdministrationType"), exports);
__exportStar(require("./TimeSpanDaysOfWeekType"), exports);
__exportStar(require("./TimeSpanType"), exports);
__exportStar(require("./TimeWindowType"), exports);
__exportStar(require("./TotalType"), exports);
__exportStar(require("./TourSeries"), exports);
__exportStar(require("./TourSeriesBlockType"), exports);
__exportStar(require("./TourSeriesType"), exports);
__exportStar(require("./TourSeriesTypeTourInstructions"), exports);
__exportStar(require("./TraceBlockInfoType"), exports);
__exportStar(require("./TraceResolveType"), exports);
__exportStar(require("./TraceResvInfoType"), exports);
__exportStar(require("./TraceTimeInfoType"), exports);
__exportStar(require("./TraceType"), exports);
__exportStar(require("./TracesByDateRange"), exports);
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
__exportStar(require("./TranslationTextType80"), exports);
__exportStar(require("./TranslationsTextTypeInner"), exports);
__exportStar(require("./TransportInfoType"), exports);
__exportStar(require("./TrxInfoType"), exports);
__exportStar(require("./TurndownStatusType"), exports);
__exportStar(require("./TypeOfMessageType"), exports);
__exportStar(require("./URLInfoType"), exports);
__exportStar(require("./URLType"), exports);
__exportStar(require("./UniqueIDType"), exports);
__exportStar(require("./UpsellInfoType"), exports);
__exportStar(require("./UpsellInfoTypeOriginalInfo"), exports);
__exportStar(require("./UpsellInfoTypeUpsellInfo"), exports);
__exportStar(require("./UsedInModuleType"), exports);
__exportStar(require("./UserDefinedFieldsType"), exports);
__exportStar(require("./UserInfoType"), exports);
__exportStar(require("./UserSessionDefaultsType"), exports);
__exportStar(require("./UserSessionInfoType"), exports);
__exportStar(require("./VIPStatusType"), exports);
__exportStar(require("./VIPType"), exports);
__exportStar(require("./VisaInfoType"), exports);
__exportStar(require("./WaitlistResType"), exports);
__exportStar(require("./WarningType"), exports);
__exportStar(require("./WelcomeOfferOptionsType"), exports);
__exportStar(require("./WelcomeOfferType"), exports);