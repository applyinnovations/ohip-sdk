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
__exportStar(require("./AddtionalCodeInfoType"), exports);
__exportStar(require("./AddtionalCodeInfoTypeInner"), exports);
__exportStar(require("./AdvancedDiscountCalculationType"), exports);
__exportStar(require("./AdvancedDiscountRuleType"), exports);
__exportStar(require("./AlertCodeTemplates"), exports);
__exportStar(require("./AlertCodeType"), exports);
__exportStar(require("./AlertCodes"), exports);
__exportStar(require("./AlertCodesType"), exports);
__exportStar(require("./AlertTemplateType"), exports);
__exportStar(require("./AlertTemplates"), exports);
__exportStar(require("./AlertTemplatesType"), exports);
__exportStar(require("./ArticleInfoType"), exports);
__exportStar(require("./ArticlePostItType"), exports);
__exportStar(require("./AttachElementsType"), exports);
__exportStar(require("./AttachPreferenceType"), exports);
__exportStar(require("./AttachTraceType"), exports);
__exportStar(require("./AutoAttachElements"), exports);
__exportStar(require("./AutoAttachElementsConfig"), exports);
__exportStar(require("./AutoAttachElementsConfigType"), exports);
__exportStar(require("./AutoAttachElementsCopy"), exports);
__exportStar(require("./AutoAttachRuleType"), exports);
__exportStar(require("./BasedOnCondition"), exports);
__exportStar(require("./BasedOnMembershipType"), exports);
__exportStar(require("./BlockConversionType"), exports);
__exportStar(require("./BlockConversionsCriteria"), exports);
__exportStar(require("./BlockConversionsDetails"), exports);
__exportStar(require("./BlockConversionsToBeChanged"), exports);
__exportStar(require("./BlockConversionsType"), exports);
__exportStar(require("./BlockRankingType"), exports);
__exportStar(require("./BlockRankingsCriteria"), exports);
__exportStar(require("./BlockRankingsDetails"), exports);
__exportStar(require("./BlockRankingsToBeChanged"), exports);
__exportStar(require("./BlockRankingsType"), exports);
__exportStar(require("./BookingTypeType"), exports);
__exportStar(require("./BookingTypesCriteria"), exports);
__exportStar(require("./BookingTypesDetails"), exports);
__exportStar(require("./BookingTypesToBeChanged"), exports);
__exportStar(require("./BookingTypesType"), exports);
__exportStar(require("./CancellationCodeType"), exports);
__exportStar(require("./CancellationCodesCriteria"), exports);
__exportStar(require("./CancellationCodesDetails"), exports);
__exportStar(require("./CancellationCodesToBeChanged"), exports);
__exportStar(require("./CancellationCodesType"), exports);
__exportStar(require("./CancellationPolicyCriteria"), exports);
__exportStar(require("./CancellationPolicyDetails"), exports);
__exportStar(require("./CancellationPolicyDetailsCancelPenalties"), exports);
__exportStar(require("./CancellationPolicyToBeChanged"), exports);
__exportStar(require("./CodeDescriptionType"), exports);
__exportStar(require("./CodeInfoType"), exports);
__exportStar(require("./CodeListType"), exports);
__exportStar(require("./ColorType"), exports);
__exportStar(require("./ConditionGroupType"), exports);
__exportStar(require("./ConditionType"), exports);
__exportStar(require("./ConfigCancelPenaltyType"), exports);
__exportStar(require("./ConfigDepositPolicyType"), exports);
__exportStar(require("./ConfigOccupancyLevelType"), exports);
__exportStar(require("./ConfigOccupancyLevelsType"), exports);
__exportStar(require("./ConfigTestUpsellRuleSearchType"), exports);
__exportStar(require("./ConfigTestUpsellRuleType"), exports);
__exportStar(require("./ConfigTestUpsellRulesType"), exports);
__exportStar(require("./ConfigUpsellRuleType"), exports);
__exportStar(require("./ConfigUpsellRulesType"), exports);
__exportStar(require("./CopyConfigurationCodeType"), exports);
__exportStar(require("./CopyGlobalAlertType"), exports);
__exportStar(require("./CopyGuaranteeCodeSchedules"), exports);
__exportStar(require("./CopyPolicySchedules"), exports);
__exportStar(require("./CopyScheduleType"), exports);
__exportStar(require("./CopySchedulesCriteriaType"), exports);
__exportStar(require("./CopySchedulesType"), exports);
__exportStar(require("./CopyServiceRequestCodes"), exports);
__exportStar(require("./CopyTraceTextsCriteriaType"), exports);
__exportStar(require("./CreateGuaranteeCodeScheduleDetailType"), exports);
__exportStar(require("./CreateGuaranteeCodeScheduleType"), exports);
__exportStar(require("./CreatePolicyApplicableCodesType"), exports);
__exportStar(require("./CurrencyAmountType"), exports);
__exportStar(require("./DepositCancelRevenueType"), exports);
__exportStar(require("./DepositPolicyCriteria"), exports);
__exportStar(require("./DepositPolicyDetails"), exports);
__exportStar(require("./DepositPolicyDetailsDepositPolicies"), exports);
__exportStar(require("./DepositPolicyToBeChanged"), exports);
__exportStar(require("./DiscountReasonType"), exports);
__exportStar(require("./DiscountReasonsCriteria"), exports);
__exportStar(require("./DiscountReasonsDetails"), exports);
__exportStar(require("./DiscountReasonsToBeChanged"), exports);
__exportStar(require("./DiscountReasonsType"), exports);
__exportStar(require("./ECouponCodeType"), exports);
__exportStar(require("./ECouponCodes"), exports);
__exportStar(require("./ECouponCodesCopy"), exports);
__exportStar(require("./ECouponCodesType"), exports);
__exportStar(require("./ECouponCopyType"), exports);
__exportStar(require("./EntryPointType"), exports);
__exportStar(require("./EntryPointsCriteria"), exports);
__exportStar(require("./EntryPointsDetails"), exports);
__exportStar(require("./EntryPointsToBeChanged"), exports);
__exportStar(require("./EntryPointsType"), exports);
__exportStar(require("./ErrorInstance"), exports);
__exportStar(require("./ExceptionDetailType"), exports);
__exportStar(require("./ExpressionFieldType"), exports);
__exportStar(require("./ExpressionOperatorType"), exports);
__exportStar(require("./ExpressionParameterType"), exports);
__exportStar(require("./FormulaType"), exports);
__exportStar(require("./GlobalActionCodeType"), exports);
__exportStar(require("./GlobalActionCodesCriteria"), exports);
__exportStar(require("./GlobalActionCodesDetails"), exports);
__exportStar(require("./GlobalActionCodesToBeChanged"), exports);
__exportStar(require("./GlobalActionCodesType"), exports);
__exportStar(require("./GlobalAlertType"), exports);
__exportStar(require("./GlobalAlerts"), exports);
__exportStar(require("./GlobalAlertsCopy"), exports);
__exportStar(require("./GlobalAlertsInfo"), exports);
__exportStar(require("./GlobalAlertsType"), exports);
__exportStar(require("./GuaranteeCodeCriteria"), exports);
__exportStar(require("./GuaranteeCodeScheduleCriteria"), exports);
__exportStar(require("./GuaranteeCodeScheduleDetailType"), exports);
__exportStar(require("./GuaranteeCodeScheduleToBeChanged"), exports);
__exportStar(require("./GuaranteeCodeScheduleType"), exports);
__exportStar(require("./GuaranteeCodeSchedulesDetails"), exports);
__exportStar(require("./GuaranteeCodeSchedulesType"), exports);
__exportStar(require("./GuaranteeCodeToBeChanged"), exports);
__exportStar(require("./GuaranteeCodesDetails"), exports);
__exportStar(require("./GuaranteeCodesType"), exports);
__exportStar(require("./GuaranteeConfigType"), exports);
__exportStar(require("./GuaranteeConfigTypeMassCancellation"), exports);
__exportStar(require("./GuaranteeRequirementsType"), exports);
__exportStar(require("./GuestMessageCodeType"), exports);
__exportStar(require("./GuestMessageCodesType"), exports);
__exportStar(require("./GuestMessageTemplateType"), exports);
__exportStar(require("./GuestMessageTemplates"), exports);
__exportStar(require("./GuestMessageTemplatesType"), exports);
__exportStar(require("./GuestMessages"), exports);
__exportStar(require("./HotelCodeListType"), exports);
__exportStar(require("./HotelConfigCancelPenaltiesType"), exports);
__exportStar(require("./HotelConfigDepositPoliciesType"), exports);
__exportStar(require("./HotelTurnAwayCodeType"), exports);
__exportStar(require("./HotelTurnAwayCodes"), exports);
__exportStar(require("./HotelTurnAwayCodesType"), exports);
__exportStar(require("./InstanceLink"), exports);
__exportStar(require("./Links"), exports);
__exportStar(require("./LocatorCodeTemplateType"), exports);
__exportStar(require("./LocatorCodeType"), exports);
__exportStar(require("./LocatorCodes"), exports);
__exportStar(require("./LocatorCodesInfo"), exports);
__exportStar(require("./LocatorCodesTemplate"), exports);
__exportStar(require("./LocatorCodesTemplateInfo"), exports);
__exportStar(require("./LocatorCodesTemplateType"), exports);
__exportStar(require("./LocatorCodesType"), exports);
__exportStar(require("./LogicalOperatorType"), exports);
__exportStar(require("./MarketCodeColorsType"), exports);
__exportStar(require("./MarketCodeCriteria"), exports);
__exportStar(require("./MarketCodePrintGroupType"), exports);
__exportStar(require("./MarketCodeToBeChanged"), exports);
__exportStar(require("./MarketCodeType"), exports);
__exportStar(require("./MarketCodesDetails"), exports);
__exportStar(require("./MarketCodesType"), exports);
__exportStar(require("./MarketGroupCriteria"), exports);
__exportStar(require("./MarketGroupToBeChanged"), exports);
__exportStar(require("./MarketGroupType"), exports);
__exportStar(require("./MarketGroupsDetails"), exports);
__exportStar(require("./MasterInfoCodeDetailType"), exports);
__exportStar(require("./MasterInfoType"), exports);
__exportStar(require("./MasterType"), exports);
__exportStar(require("./MembershipLevelRatingInfoType"), exports);
__exportStar(require("./MembershipLevelRatings"), exports);
__exportStar(require("./MembershipLevelRatingsInfo"), exports);
__exportStar(require("./MembershipLevelRatingsInfoType"), exports);
__exportStar(require("./MembershipTypeLevelListType"), exports);
__exportStar(require("./MembershipTypeLevelType"), exports);
__exportStar(require("./MergeCodeType"), exports);
__exportStar(require("./MergeCodesType"), exports);
__exportStar(require("./MoveReasonCodeType"), exports);
__exportStar(require("./MoveReasonCodesCriteria"), exports);
__exportStar(require("./MoveReasonCodesDetails"), exports);
__exportStar(require("./MoveReasonCodesToBeChanged"), exports);
__exportStar(require("./MoveReasonCodesType"), exports);
__exportStar(require("./NotificationType"), exports);
__exportStar(require("./OffsetUnitType"), exports);
__exportStar(require("./OriginCodeType"), exports);
__exportStar(require("./OriginCodesCriteria"), exports);
__exportStar(require("./OriginCodesDetails"), exports);
__exportStar(require("./OriginCodesToBeChanged"), exports);
__exportStar(require("./OriginCodesType"), exports);
__exportStar(require("./PaymentTypesType"), exports);
__exportStar(require("./PolicyAmountPercentType"), exports);
__exportStar(require("./PolicyApplicableCodesType"), exports);
__exportStar(require("./PolicyBasisTypeType"), exports);
__exportStar(require("./PolicyDeadlineType"), exports);
__exportStar(require("./PolicyScheduleCriteria"), exports);
__exportStar(require("./PolicyScheduleDetailType"), exports);
__exportStar(require("./PolicyScheduleToBeChanged"), exports);
__exportStar(require("./PolicyScheduleType"), exports);
__exportStar(require("./PolicySchedulesDetails"), exports);
__exportStar(require("./PolicySchedulesType"), exports);
__exportStar(require("./PolicyTypeType"), exports);
__exportStar(require("./PreCheckInRuleType"), exports);
__exportStar(require("./PreCheckInRuleTypeType"), exports);
__exportStar(require("./PreCheckInRulesCriteria"), exports);
__exportStar(require("./PreCheckInRulesDetails"), exports);
__exportStar(require("./PreCheckInRulesToBeChanged"), exports);
__exportStar(require("./PreCheckInRulesType"), exports);
__exportStar(require("./PreCheckInTimeRuleTypes"), exports);
__exportStar(require("./PurposeOfStayType"), exports);
__exportStar(require("./PurposeOfStaysCriteria"), exports);
__exportStar(require("./PurposeOfStaysDetails"), exports);
__exportStar(require("./PurposeOfStaysToBeChanged"), exports);
__exportStar(require("./PurposeOfStaysType"), exports);
__exportStar(require("./RatePlanRatingInfoType"), exports);
__exportStar(require("./RatePlanRatingType"), exports);
__exportStar(require("./RatePlanRatings"), exports);
__exportStar(require("./RatePlanRatingsInfo"), exports);
__exportStar(require("./RatePlanRatingsInfoType"), exports);
__exportStar(require("./ReservationColorType"), exports);
__exportStar(require("./ReservationColorsResponse"), exports);
__exportStar(require("./ReservationColorsToChange"), exports);
__exportStar(require("./ReservationColorsType"), exports);
__exportStar(require("./ResvAutoAttchBasedOn"), exports);
__exportStar(require("./ResvAutoAttchBasedOnCode"), exports);
__exportStar(require("./ResvAutoAttchTypeCode"), exports);
__exportStar(require("./RetrievedGuestMessages"), exports);
__exportStar(require("./RoomFeatureRatingInfoType"), exports);
__exportStar(require("./RoomFeatureRatingType"), exports);
__exportStar(require("./RoomFeatureRatings"), exports);
__exportStar(require("./RoomFeatureRatingsInfo"), exports);
__exportStar(require("./RoomFeatureRatingsInfoType"), exports);
__exportStar(require("./RoomRatingInfoType"), exports);
__exportStar(require("./RoomRatingType"), exports);
__exportStar(require("./RoomRatings"), exports);
__exportStar(require("./RoomRatingsInfo"), exports);
__exportStar(require("./RoomRatingsInfoType"), exports);
__exportStar(require("./RoomSpecialRatingInfoType"), exports);
__exportStar(require("./RoomSpecialRatingType"), exports);
__exportStar(require("./RoomSpecialRatings"), exports);
__exportStar(require("./RoomSpecialRatingsInfo"), exports);
__exportStar(require("./RoomSpecialRatingsInfoType"), exports);
__exportStar(require("./RoundingRuleType"), exports);
__exportStar(require("./ScriptLocationType"), exports);
__exportStar(require("./ScriptLocationsType"), exports);
__exportStar(require("./ScriptType"), exports);
__exportStar(require("./ScriptTypeType"), exports);
__exportStar(require("./ScriptsCriteria"), exports);
__exportStar(require("./ScriptsDetails"), exports);
__exportStar(require("./ScriptsToBeChanged"), exports);
__exportStar(require("./ScriptsType"), exports);
__exportStar(require("./ServiceRequestCodePrioritiesCriteria"), exports);
__exportStar(require("./ServiceRequestCodePrioritiesDetails"), exports);
__exportStar(require("./ServiceRequestCodePrioritiesToBeChanged"), exports);
__exportStar(require("./ServiceRequestCodePrioritiesType"), exports);
__exportStar(require("./ServiceRequestCodePriorityType"), exports);
__exportStar(require("./ServiceRequestCodeType"), exports);
__exportStar(require("./ServiceRequestCodesCriteria"), exports);
__exportStar(require("./ServiceRequestCodesDetails"), exports);
__exportStar(require("./ServiceRequestCodesToBeChanged"), exports);
__exportStar(require("./ServiceRequestCodesType"), exports);
__exportStar(require("./SourceCodeCriteria"), exports);
__exportStar(require("./SourceCodeToBeChanged"), exports);
__exportStar(require("./SourceCodeType"), exports);
__exportStar(require("./SourceCodesDetails"), exports);
__exportStar(require("./SourceCodesType"), exports);
__exportStar(require("./SourceGroupCriteria"), exports);
__exportStar(require("./SourceGroupToBeChanged"), exports);
__exportStar(require("./SourceGroupType"), exports);
__exportStar(require("./SourceGroupsDetails"), exports);
__exportStar(require("./Status"), exports);
__exportStar(require("./TemplateCancellationPolicyCriteria"), exports);
__exportStar(require("./TemplateCancellationPolicyDetails"), exports);
__exportStar(require("./TemplateCancellationPolicyToBeChanged"), exports);
__exportStar(require("./TemplateDepositPolicyCriteria"), exports);
__exportStar(require("./TemplateDepositPolicyDetails"), exports);
__exportStar(require("./TemplateDepositPolicyToBeChanged"), exports);
__exportStar(require("./TemplateGuaranteeCodeCriteria"), exports);
__exportStar(require("./TemplateGuaranteeCodeToBeChanged"), exports);
__exportStar(require("./TemplateGuaranteeCodesDetails"), exports);
__exportStar(require("./TemplateGuaranteeCodesType"), exports);
__exportStar(require("./TemplateMarketCodeCriteria"), exports);
__exportStar(require("./TemplateMarketCodeToBeChanged"), exports);
__exportStar(require("./TemplateMarketCodeType"), exports);
__exportStar(require("./TemplateMarketCodesDetails"), exports);
__exportStar(require("./TemplateMarketGroupCriteria"), exports);
__exportStar(require("./TemplateMarketGroupToBeChanged"), exports);
__exportStar(require("./TemplateMarketGroupType"), exports);
__exportStar(require("./TemplateMarketGroupsDetails"), exports);
__exportStar(require("./TemplateSourceCodeCriteria"), exports);
__exportStar(require("./TemplateSourceCodeToBeChanged"), exports);
__exportStar(require("./TemplateSourceCodeType"), exports);
__exportStar(require("./TemplateSourceCodesDetails"), exports);
__exportStar(require("./TemplateSourceGroupCriteria"), exports);
__exportStar(require("./TemplateSourceGroupToBeChanged"), exports);
__exportStar(require("./TemplateSourceGroupType"), exports);
__exportStar(require("./TemplateSourceGroupsDetails"), exports);
__exportStar(require("./TemplateTurnAwayCodeType"), exports);
__exportStar(require("./TemplateTurnAwayCodes"), exports);
__exportStar(require("./TemplateTurnAwayCodesType"), exports);
__exportStar(require("./TimeSpanType"), exports);
__exportStar(require("./TraceTextChangeType"), exports);
__exportStar(require("./TraceTextChanges"), exports);
__exportStar(require("./TraceTextChangesType"), exports);
__exportStar(require("./TraceTextType"), exports);
__exportStar(require("./TraceTextsCopy"), exports);
__exportStar(require("./TraceTextsToBeCreated"), exports);
__exportStar(require("./TraceTextsToBeFetched"), exports);
__exportStar(require("./TraceTextsType"), exports);
__exportStar(require("./TranslationTextType2000"), exports);
__exportStar(require("./TranslationTextType50"), exports);
__exportStar(require("./TranslationTextType80"), exports);
__exportStar(require("./TranslationsTextType"), exports);
__exportStar(require("./TranslationsTextTypeInner"), exports);
__exportStar(require("./TrxInfoType"), exports);
__exportStar(require("./TurnAwayTypeType"), exports);
__exportStar(require("./UniqueIDListType"), exports);
__exportStar(require("./UniqueIDType"), exports);
__exportStar(require("./UpsellRules"), exports);
__exportStar(require("./UpsellRulesCopy"), exports);
__exportStar(require("./UpsellRulesToTest"), exports);
__exportStar(require("./UpsellRulesToTestDetails"), exports);
__exportStar(require("./WaitlistCodeType"), exports);
__exportStar(require("./WaitlistCodesCriteria"), exports);
__exportStar(require("./WaitlistCodesDetails"), exports);
__exportStar(require("./WaitlistCodesToBeChanged"), exports);
__exportStar(require("./WaitlistCodesType"), exports);
__exportStar(require("./WaitlistPrioritiesCriteria"), exports);
__exportStar(require("./WaitlistPrioritiesDetails"), exports);
__exportStar(require("./WaitlistPrioritiesToBeChanged"), exports);
__exportStar(require("./WaitlistPrioritiesType"), exports);
__exportStar(require("./WaitlistPriorityType"), exports);
__exportStar(require("./WarningType"), exports);
__exportStar(require("./WarningsType"), exports);