# Go API client for par

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 23.2
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import par "github.com/applyinnovations/ohip-sdk/par"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `par.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), par.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `par.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), par.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `par.ContextOperationServerIndices` and `par.ContextOperationServerVariables` context maps.

```golang
ctx := context.WithValue(context.Background(), par.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), par.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to */par/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AvailabilityAPI* | [**AnalyzeRateAvailability**](docs/AvailabilityAPI.md#analyzerateavailability) | **Get** /hotels/{hotelId}/analyzeRateAvailability | Analyze Rate Availability 
*AvailabilityAPI* | [**ClearAllRestrictions**](docs/AvailabilityAPI.md#clearallrestrictions) | **Put** /hotels/{hotelId}/restrictions | Clear all restrictions
*AvailabilityAPI* | [**DeleteHurdleRates**](docs/AvailabilityAPI.md#deletehurdlerates) | **Delete** /hotels/{hotelId}/hurdles | Delete Hurdle Rates
*AvailabilityAPI* | [**DeleteRestriction**](docs/AvailabilityAPI.md#deleterestriction) | **Delete** /hotels/{hotelId}/restrictions/{restrictionId} | Delete a Restriction 
*AvailabilityAPI* | [**GetAlternateAvailability**](docs/AvailabilityAPI.md#getalternateavailability) | **Get** /hotels/{hotelId}/availability/alternate | Get alternate availability
*AvailabilityAPI* | [**GetAvailabilityRatePlanInfo**](docs/AvailabilityAPI.md#getavailabilityrateplaninfo) | **Get** /hotels/{hotelId}/rates/{ratePlanCode} | Get Rate Plan Information 
*AvailabilityAPI* | [**GetAvailabilityRatePlanInfoByMultipleRatePlans**](docs/AvailabilityAPI.md#getavailabilityrateplaninfobymultiplerateplans) | **Get** /hotels/{hotelId}/rates | Use this API to get Rate Plan information such as commission codes, market codes, and rate category. 
*AvailabilityAPI* | [**GetAvailableUpsells**](docs/AvailabilityAPI.md#getavailableupsells) | **Get** /hotels/{hotelId}/availableUpsells | Get for Available Up-sells
*AvailabilityAPI* | [**GetGuaranteeablePreferences**](docs/AvailabilityAPI.md#getguaranteeablepreferences) | **Get** /hotels/{hotelId}/guaranteeablePreferences | Get Guarantee-able Preference Codes
*AvailabilityAPI* | [**GetHotelAvailability**](docs/AvailabilityAPI.md#gethotelavailability) | **Get** /hotels/{hotelId}/availability | Get hotel availability
*AvailabilityAPI* | [**GetHotelAvailabilityCRO**](docs/AvailabilityAPI.md#gethotelavailabilitycro) | **Get** /availability | Get Hotel Availability
*AvailabilityAPI* | [**GetHotels**](docs/AvailabilityAPI.md#gethotels) | **Get** /hotels | Search hotels for the sales process
*AvailabilityAPI* | [**GetHurdleRates**](docs/AvailabilityAPI.md#gethurdlerates) | **Get** /hotels/{hotelId}/hurdles | Get Hurdle Rates
*AvailabilityAPI* | [**GetReservationGuarantees**](docs/AvailabilityAPI.md#getreservationguarantees) | **Get** /hotels/{hotelId}/guarantees | Get reservation guarantees
*AvailabilityAPI* | [**GetRestrictionsByDateRange**](docs/AvailabilityAPI.md#getrestrictionsbydaterange) | **Get** /hotels/{hotelId}/restrictions | Get hotel restrictions
*AvailabilityAPI* | [**GetRestrictionsHistory**](docs/AvailabilityAPI.md#getrestrictionshistory) | **Get** /hotels/{hotelId}/restrictionsHistory | Get the Restriction history 
*AvailabilityAPI* | [**PostHurdleRates**](docs/AvailabilityAPI.md#posthurdlerates) | **Post** /hotels/{hotelId}/hurdles | Create Hurdle Rates
*AvailabilityAPI* | [**PostRestriction**](docs/AvailabilityAPI.md#postrestriction) | **Post** /hotels/{hotelId}/restrictions | Create a restriction
*AvailabilityAPI* | [**PutHurdleRates**](docs/AvailabilityAPI.md#puthurdlerates) | **Put** /hotels/{hotelId}/hurdles | Change Hurdle Rates
*AvailabilityAPI* | [**ValidateReservationGuarantees**](docs/AvailabilityAPI.md#validatereservationguarantees) | **Put** /hotels/{hotelId}/validateGuarantees | Get Reservation Guarantee 
*AvailabilityExternalAPI* | [**GetExternalYieldMarketType**](docs/AvailabilityExternalAPI.md#getexternalyieldmarkettype) | **Get** /hotels/{hotelId}/yieldMarketType | Yield Market Type LookUp.


## Documentation For Models

 - [ARAccountShortInfoType](docs/ARAccountShortInfoType.md)
 - [ARAccountStatusType](docs/ARAccountStatusType.md)
 - [AdditionalGuestAmountType](docs/AdditionalGuestAmountType.md)
 - [AddressInfoType](docs/AddressInfoType.md)
 - [AddressSearchType](docs/AddressSearchType.md)
 - [AddressType](docs/AddressType.md)
 - [AdvanceCheckInType](docs/AdvanceCheckInType.md)
 - [AlienInfoType](docs/AlienInfoType.md)
 - [AlternateAvailDateType](docs/AlternateAvailDateType.md)
 - [AlternateAvailability](docs/AlternateAvailability.md)
 - [AlternateHotelType](docs/AlternateHotelType.md)
 - [AmountDeterminationType](docs/AmountDeterminationType.md)
 - [AmountPointsType](docs/AmountPointsType.md)
 - [AmountType](docs/AmountType.md)
 - [AnonymizationStatusType](docs/AnonymizationStatusType.md)
 - [AnonymizationType](docs/AnonymizationType.md)
 - [AuthorizationRuleType](docs/AuthorizationRuleType.md)
 - [AvailRatePlanInfoType](docs/AvailRatePlanInfoType.md)
 - [AvailRatePlanInfoTypeRatePlanInner](docs/AvailRatePlanInfoTypeRatePlanInner.md)
 - [AvailResponseMasterInfoType](docs/AvailResponseMasterInfoType.md)
 - [AvailResponseSegmentType](docs/AvailResponseSegmentType.md)
 - [AvailabilityRatePlanInfo](docs/AvailabilityRatePlanInfo.md)
 - [AvailabilityStatusType](docs/AvailabilityStatusType.md)
 - [AvailableUpsells](docs/AvailableUpsells.md)
 - [AwardId](docs/AwardId.md)
 - [AwardVouchersTypeInner](docs/AwardVouchersTypeInner.md)
 - [BedTaxReportingType](docs/BedTaxReportingType.md)
 - [BenefitType](docs/BenefitType.md)
 - [BillingPrivilegesType](docs/BillingPrivilegesType.md)
 - [BlockId](docs/BlockId.md)
 - [BookingChannelMappingType](docs/BookingChannelMappingType.md)
 - [BookingChannelType](docs/BookingChannelType.md)
 - [CancelPenaltyType](docs/CancelPenaltyType.md)
 - [CardNumberTypeType](docs/CardNumberTypeType.md)
 - [CardProcessingType](docs/CardProcessingType.md)
 - [CardReIssueType](docs/CardReIssueType.md)
 - [CardTypeType](docs/CardTypeType.md)
 - [ChangeHurdleRates](docs/ChangeHurdleRates.md)
 - [ChangeHurdleRatesDetails](docs/ChangeHurdleRatesDetails.md)
 - [ChangeRelationsType](docs/ChangeRelationsType.md)
 - [ChannelAvailRSInfoType](docs/ChannelAvailRSInfoType.md)
 - [ChannelMarketingInfoTypeInner](docs/ChannelMarketingInfoTypeInner.md)
 - [ChannelSummaryInfoType](docs/ChannelSummaryInfoType.md)
 - [CharacterUDFType](docs/CharacterUDFType.md)
 - [ChildAgeType](docs/ChildAgeType.md)
 - [ChildBucketsType](docs/ChildBucketsType.md)
 - [ClearAllRestrictions](docs/ClearAllRestrictions.md)
 - [CodeDescriptionType](docs/CodeDescriptionType.md)
 - [CommentInfoType](docs/CommentInfoType.md)
 - [CommentType](docs/CommentType.md)
 - [CommissionPaymentMethods](docs/CommissionPaymentMethods.md)
 - [CommissionPayoutToType](docs/CommissionPayoutToType.md)
 - [CommunicationStatusType](docs/CommunicationStatusType.md)
 - [CompanyInfoType](docs/CompanyInfoType.md)
 - [CompanyType](docs/CompanyType.md)
 - [ConfigPackagePrimaryDetailsType](docs/ConfigPackagePrimaryDetailsType.md)
 - [ConfigPackageTransactionType](docs/ConfigPackageTransactionType.md)
 - [ConfigPackageUsageDetailType](docs/ConfigPackageUsageDetailType.md)
 - [ConfigPostingAttributesType](docs/ConfigPostingAttributesType.md)
 - [CountryNameType](docs/CountryNameType.md)
 - [CreateHurdleRates](docs/CreateHurdleRates.md)
 - [CreateRestriction](docs/CreateRestriction.md)
 - [CreateRestrictionType](docs/CreateRestrictionType.md)
 - [CurrencyAmountType](docs/CurrencyAmountType.md)
 - [CurrencyExchangeRateType](docs/CurrencyExchangeRateType.md)
 - [CurrentRoomInfoType](docs/CurrentRoomInfoType.md)
 - [CustomerType](docs/CustomerType.md)
 - [CustomerTypeIdentifications](docs/CustomerTypeIdentifications.md)
 - [DateUDFType](docs/DateUDFType.md)
 - [DepositCancelRevenueType](docs/DepositCancelRevenueType.md)
 - [DepositPolicyType](docs/DepositPolicyType.md)
 - [DirectBillingType](docs/DirectBillingType.md)
 - [DiscountType](docs/DiscountType.md)
 - [DowngradeType](docs/DowngradeType.md)
 - [ECertificateConsumeSourceType](docs/ECertificateConsumeSourceType.md)
 - [ECertificateConsumptionType](docs/ECertificateConsumptionType.md)
 - [ECertificateGenerationType](docs/ECertificateGenerationType.md)
 - [ECertificateInfoType](docs/ECertificateInfoType.md)
 - [ECertificateInfoTypeHotels](docs/ECertificateInfoTypeHotels.md)
 - [ECertificateIssueSourceType](docs/ECertificateIssueSourceType.md)
 - [ECertificateIssueType](docs/ECertificateIssueType.md)
 - [ECertificateScopeType](docs/ECertificateScopeType.md)
 - [ECertificateStatusType](docs/ECertificateStatusType.md)
 - [ECertificateType](docs/ECertificateType.md)
 - [ECertificateUsageCriteriaType](docs/ECertificateUsageCriteriaType.md)
 - [EmailInfoType](docs/EmailInfoType.md)
 - [EmailType](docs/EmailType.md)
 - [ErrorInstance](docs/ErrorInstance.md)
 - [ExceptionDetailType](docs/ExceptionDetailType.md)
 - [FacilityCodeType](docs/FacilityCodeType.md)
 - [FacilityTaskType](docs/FacilityTaskType.md)
 - [FeeType](docs/FeeType.md)
 - [FeesType](docs/FeesType.md)
 - [FetchRestrictionsByDateRangeRSType](docs/FetchRestrictionsByDateRangeRSType.md)
 - [FetchRestrictionsHistoryRSType](docs/FetchRestrictionsHistoryRSType.md)
 - [FolioTextsTypeInner](docs/FolioTextsTypeInner.md)
 - [ForeignExchangeType](docs/ForeignExchangeType.md)
 - [FormattedTextTextType](docs/FormattedTextTextType.md)
 - [FunctionArgumentType](docs/FunctionArgumentType.md)
 - [FutureListType](docs/FutureListType.md)
 - [GdsNegotiatedInfoType](docs/GdsNegotiatedInfoType.md)
 - [GdsNegotiatedType](docs/GdsNegotiatedType.md)
 - [GuaranteePolicyType](docs/GuaranteePolicyType.md)
 - [GuaranteePolicyTypeCancelPenalty](docs/GuaranteePolicyTypeCancelPenalty.md)
 - [GuaranteePolicyTypeDepositPolicy](docs/GuaranteePolicyTypeDepositPolicy.md)
 - [GuaranteeRequirementsType](docs/GuaranteeRequirementsType.md)
 - [GuaranteeType](docs/GuaranteeType.md)
 - [GuaranteeablePreferences](docs/GuaranteeablePreferences.md)
 - [GuestCountsType](docs/GuestCountsType.md)
 - [GuestHousekeepingServiceRequestType](docs/GuestHousekeepingServiceRequestType.md)
 - [GuestLastStayInfoType](docs/GuestLastStayInfoType.md)
 - [HistoryListType](docs/HistoryListType.md)
 - [HotelAmenityType](docs/HotelAmenityType.md)
 - [HotelAttractionType](docs/HotelAttractionType.md)
 - [HotelAvailability](docs/HotelAvailability.md)
 - [HotelContactRoleType](docs/HotelContactRoleType.md)
 - [HotelContactType](docs/HotelContactType.md)
 - [HotelCorporateInformationsType](docs/HotelCorporateInformationsType.md)
 - [HotelEventSpaceDetailType](docs/HotelEventSpaceDetailType.md)
 - [HotelEventSpaceSummaryType](docs/HotelEventSpaceSummaryType.md)
 - [HotelEventSpacesType](docs/HotelEventSpacesType.md)
 - [HotelInfoType](docs/HotelInfoType.md)
 - [HotelInfoTypeAccommodationDetails](docs/HotelInfoTypeAccommodationDetails.md)
 - [HotelInfoTypeAddress](docs/HotelInfoTypeAddress.md)
 - [HotelInfoTypeCommunication](docs/HotelInfoTypeCommunication.md)
 - [HotelInfoTypeGeneralInformation](docs/HotelInfoTypeGeneralInformation.md)
 - [HotelInfoTypePrimaryDetails](docs/HotelInfoTypePrimaryDetails.md)
 - [HotelInfoTypePropertyControls](docs/HotelInfoTypePropertyControls.md)
 - [HotelInfoTypePropertyControlsApplicationMode](docs/HotelInfoTypePropertyControlsApplicationMode.md)
 - [HotelInfoTypePropertyControlsCateringCurrencyFormatting](docs/HotelInfoTypePropertyControlsCateringCurrencyFormatting.md)
 - [HotelInfoTypePropertyControlsCurrencyFormatting](docs/HotelInfoTypePropertyControlsCurrencyFormatting.md)
 - [HotelInfoTypePropertyControlsDateTimeFormatting](docs/HotelInfoTypePropertyControlsDateTimeFormatting.md)
 - [HotelInfoTypePropertyControlsSellControls](docs/HotelInfoTypePropertyControlsSellControls.md)
 - [HotelInterfaceStatusType](docs/HotelInterfaceStatusType.md)
 - [HotelInterfaceType](docs/HotelInterfaceType.md)
 - [HotelInterfaceTypeType](docs/HotelInterfaceTypeType.md)
 - [HotelRateRangeType](docs/HotelRateRangeType.md)
 - [HotelRestaurantType](docs/HotelRestaurantType.md)
 - [HotelSummaryInfoType](docs/HotelSummaryInfoType.md)
 - [HousekeepingRoomStatusType](docs/HousekeepingRoomStatusType.md)
 - [HousekeepingTaskCodeType](docs/HousekeepingTaskCodeType.md)
 - [HurdleRateEditType](docs/HurdleRateEditType.md)
 - [HurdleRateType](docs/HurdleRateType.md)
 - [HurdleRates](docs/HurdleRates.md)
 - [IATAInfoType](docs/IATAInfoType.md)
 - [IdentificationInfoType](docs/IdentificationInfoType.md)
 - [IdentificationType](docs/IdentificationType.md)
 - [ImageSetType](docs/ImageSetType.md)
 - [ImageStyleType](docs/ImageStyleType.md)
 - [IndicatorType](docs/IndicatorType.md)
 - [InstanceLink](docs/InstanceLink.md)
 - [InterfaceRightsStatusType](docs/InterfaceRightsStatusType.md)
 - [KeywordDetailType](docs/KeywordDetailType.md)
 - [KeywordType](docs/KeywordType.md)
 - [LastStayInfoType](docs/LastStayInfoType.md)
 - [MailingActionsType](docs/MailingActionsType.md)
 - [MarketingPolicyType](docs/MarketingPolicyType.md)
 - [MasterAccountInfoType](docs/MasterAccountInfoType.md)
 - [MasterRestrictionStatusesType](docs/MasterRestrictionStatusesType.md)
 - [MealPlanCodeType](docs/MealPlanCodeType.md)
 - [MeetingRoomType](docs/MeetingRoomType.md)
 - [MembershipEarningPreferenceType](docs/MembershipEarningPreferenceType.md)
 - [MembershipInfoType](docs/MembershipInfoType.md)
 - [MembershipSearchType](docs/MembershipSearchType.md)
 - [NameTypeType](docs/NameTypeType.md)
 - [NegotiatedInfoType](docs/NegotiatedInfoType.md)
 - [NegotiatedType](docs/NegotiatedType.md)
 - [NumericUDFType](docs/NumericUDFType.md)
 - [OffsetUnitType](docs/OffsetUnitType.md)
 - [OwnerResTypeType](docs/OwnerResTypeType.md)
 - [OwnerType](docs/OwnerType.md)
 - [PMSResStatusType](docs/PMSResStatusType.md)
 - [PackageCalculationRuleType](docs/PackageCalculationRuleType.md)
 - [PackageCodeHeaderType](docs/PackageCodeHeaderType.md)
 - [PackageConsumptionType](docs/PackageConsumptionType.md)
 - [PackageElementType](docs/PackageElementType.md)
 - [PackagePostingRhythmType](docs/PackagePostingRhythmType.md)
 - [PackagePostingRhythmTypeCertainNightsOfTheWeek](docs/PackagePostingRhythmTypeCertainNightsOfTheWeek.md)
 - [PackagePostingRhythmTypeCustomNightSchedule](docs/PackagePostingRhythmTypeCustomNightSchedule.md)
 - [PackagePostingRhythmTypeCustomStaySchedule](docs/PackagePostingRhythmTypeCustomStaySchedule.md)
 - [PackagePostingRhythmTypeEveryXNightsStartingNightY](docs/PackagePostingRhythmTypeEveryXNightsStartingNightY.md)
 - [PackagePostingRulesType](docs/PackagePostingRulesType.md)
 - [PackageTransactionCodeType](docs/PackageTransactionCodeType.md)
 - [ParagraphType](docs/ParagraphType.md)
 - [PayeeInfoType](docs/PayeeInfoType.md)
 - [PersonNameType](docs/PersonNameType.md)
 - [PersonNameTypeType](docs/PersonNameTypeType.md)
 - [PkgInventoryItemType](docs/PkgInventoryItemType.md)
 - [PointsType](docs/PointsType.md)
 - [PolicyAmountPercentType](docs/PolicyAmountPercentType.md)
 - [PolicyBasisTypeType](docs/PolicyBasisTypeType.md)
 - [PolicyDeadlineType](docs/PolicyDeadlineType.md)
 - [PostingRhythmType](docs/PostingRhythmType.md)
 - [PreferenceType](docs/PreferenceType.md)
 - [PreferenceTypeType](docs/PreferenceTypeType.md)
 - [PrimaryCodeType](docs/PrimaryCodeType.md)
 - [PrimaryShareTypeType](docs/PrimaryShareTypeType.md)
 - [PrivacyInfoType](docs/PrivacyInfoType.md)
 - [ProductSourceType](docs/ProductSourceType.md)
 - [ProfileAccessType](docs/ProfileAccessType.md)
 - [ProfileCashieringType](docs/ProfileCashieringType.md)
 - [ProfileCommissionType](docs/ProfileCommissionType.md)
 - [ProfileDeliveryMethod](docs/ProfileDeliveryMethod.md)
 - [ProfileDeliveryModuleType](docs/ProfileDeliveryModuleType.md)
 - [ProfileId](docs/ProfileId.md)
 - [ProfileMembershipType](docs/ProfileMembershipType.md)
 - [ProfileRestrictions](docs/ProfileRestrictions.md)
 - [ProfileSharedLevelType](docs/ProfileSharedLevelType.md)
 - [ProfileStatusType](docs/ProfileStatusType.md)
 - [ProfileSubscriptionType](docs/ProfileSubscriptionType.md)
 - [ProfileSubscriptionTypeProfileInfo](docs/ProfileSubscriptionTypeProfileInfo.md)
 - [ProfileTaxInfoType](docs/ProfileTaxInfoType.md)
 - [ProfileType](docs/ProfileType.md)
 - [ProfileTypeAddresses](docs/ProfileTypeAddresses.md)
 - [ProfileTypeComments](docs/ProfileTypeComments.md)
 - [ProfileTypeEmails](docs/ProfileTypeEmails.md)
 - [ProfileTypeGdsNegotiatedRates](docs/ProfileTypeGdsNegotiatedRates.md)
 - [ProfileTypeKeywords](docs/ProfileTypeKeywords.md)
 - [ProfileTypeNegotiatedRates](docs/ProfileTypeNegotiatedRates.md)
 - [ProfileTypePreferenceCollection](docs/ProfileTypePreferenceCollection.md)
 - [ProfileTypeProfileDeliveryMethods](docs/ProfileTypeProfileDeliveryMethods.md)
 - [ProfileTypeProfileMemberships](docs/ProfileTypeProfileMemberships.md)
 - [ProfileTypeRelationships](docs/ProfileTypeRelationships.md)
 - [ProfileTypeRelationshipsSummary](docs/ProfileTypeRelationshipsSummary.md)
 - [ProfileTypeTelephones](docs/ProfileTypeTelephones.md)
 - [ProfileTypeType](docs/ProfileTypeType.md)
 - [ProfileTypeURLs](docs/ProfileTypeURLs.md)
 - [PromotionType](docs/PromotionType.md)
 - [QueueTextInfoType](docs/QueueTextInfoType.md)
 - [RateAnalysisCodeType](docs/RateAnalysisCodeType.md)
 - [RateAnalysisDetails](docs/RateAnalysisDetails.md)
 - [RateAnalysisType](docs/RateAnalysisType.md)
 - [RateChangeTypeType](docs/RateChangeTypeType.md)
 - [RatePlanChannelInfoType](docs/RatePlanChannelInfoType.md)
 - [RatePlanChannelInfoTypeRatePlanId](docs/RatePlanChannelInfoTypeRatePlanId.md)
 - [RatePlanCommissionType](docs/RatePlanCommissionType.md)
 - [RateRangeType](docs/RateRangeType.md)
 - [RateRoomDetailsType](docs/RateRoomDetailsType.md)
 - [RatesType](docs/RatesType.md)
 - [RelationshipAddressType](docs/RelationshipAddressType.md)
 - [RelationshipInfoSummaryType](docs/RelationshipInfoSummaryType.md)
 - [RelationshipInfoType](docs/RelationshipInfoType.md)
 - [RelationshipProfileSummaryType](docs/RelationshipProfileSummaryType.md)
 - [RelationshipProfileType](docs/RelationshipProfileType.md)
 - [RelativePositionType](docs/RelativePositionType.md)
 - [RequestedAvailablePreferenceType](docs/RequestedAvailablePreferenceType.md)
 - [ResAccessRestrictionType](docs/ResAccessRestrictionType.md)
 - [ResAccompanyGuestInfoType](docs/ResAccompanyGuestInfoType.md)
 - [ResAttachedProfileType](docs/ResAttachedProfileType.md)
 - [ResAwardsType](docs/ResAwardsType.md)
 - [ResCashieringType](docs/ResCashieringType.md)
 - [ResCommunicationType](docs/ResCommunicationType.md)
 - [ResCompAccountingType](docs/ResCompAccountingType.md)
 - [ResExpectedTimesType](docs/ResExpectedTimesType.md)
 - [ResGuaranteeFetchInstructionsType](docs/ResGuaranteeFetchInstructionsType.md)
 - [ResGuaranteeSearchType](docs/ResGuaranteeSearchType.md)
 - [ResGuaranteeType](docs/ResGuaranteeType.md)
 - [ResGuestExternalInfoType](docs/ResGuestExternalInfoType.md)
 - [ResGuestInfoType](docs/ResGuestInfoType.md)
 - [ResHousekeepingType](docs/ResHousekeepingType.md)
 - [ResMobileNotificationsType](docs/ResMobileNotificationsType.md)
 - [ResPaymentCardType](docs/ResPaymentCardType.md)
 - [ResPeriodicFolioType](docs/ResPeriodicFolioType.md)
 - [ResPreConfiguredRoutingInstrType](docs/ResPreConfiguredRoutingInstrType.md)
 - [ResProfileTypeType](docs/ResProfileTypeType.md)
 - [ResRevenueBalanceType](docs/ResRevenueBalanceType.md)
 - [ResSharedGuestInfoType](docs/ResSharedGuestInfoType.md)
 - [ReservationAllowedActionType](docs/ReservationAllowedActionType.md)
 - [ReservationBlockType](docs/ReservationBlockType.md)
 - [ReservationDepositType](docs/ReservationDepositType.md)
 - [ReservationFolioWindowType](docs/ReservationFolioWindowType.md)
 - [ReservationGuaranteesPolicies](docs/ReservationGuaranteesPolicies.md)
 - [ReservationHistoryFutureInfoType](docs/ReservationHistoryFutureInfoType.md)
 - [ReservationInfoType](docs/ReservationInfoType.md)
 - [ReservationInfoTypeCancellationInfo](docs/ReservationInfoTypeCancellationInfo.md)
 - [ReservationInterfaceStatusType](docs/ReservationInterfaceStatusType.md)
 - [ReservationPackageScheduleType](docs/ReservationPackageScheduleType.md)
 - [ReservationPackageType](docs/ReservationPackageType.md)
 - [ReservationPaymentMethodType](docs/ReservationPaymentMethodType.md)
 - [ReservationPaymentMethodTypeEmailFolioInfo](docs/ReservationPaymentMethodTypeEmailFolioInfo.md)
 - [ReservationProfileType](docs/ReservationProfileType.md)
 - [ReservationQueueInformationType](docs/ReservationQueueInformationType.md)
 - [ReservationQueueInformationTypeTimeSpan](docs/ReservationQueueInformationTypeTimeSpan.md)
 - [ReservationStayHistoryFutureInfoType](docs/ReservationStayHistoryFutureInfoType.md)
 - [ReservationTaxTypeInfo](docs/ReservationTaxTypeInfo.md)
 - [ReservationTurndownInfoType](docs/ReservationTurndownInfoType.md)
 - [RestaurantCategoryType](docs/RestaurantCategoryType.md)
 - [RestrictionControlType](docs/RestrictionControlType.md)
 - [RestrictionSetHistoryType](docs/RestrictionSetHistoryType.md)
 - [RestrictionSetType](docs/RestrictionSetType.md)
 - [RestrictionStatusType](docs/RestrictionStatusType.md)
 - [RestrictionStatusesType](docs/RestrictionStatusesType.md)
 - [RestrictionsByDateRange](docs/RestrictionsByDateRange.md)
 - [RestrictionsByDateRangeType](docs/RestrictionsByDateRangeType.md)
 - [RestrictionsHistory](docs/RestrictionsHistory.md)
 - [RestrictionsHistoryType](docs/RestrictionsHistoryType.md)
 - [RoomFeatureType](docs/RoomFeatureType.md)
 - [RoomRateAvailReasonType](docs/RoomRateAvailReasonType.md)
 - [RoomRateType](docs/RoomRateType.md)
 - [RoomStaySearchType](docs/RoomStaySearchType.md)
 - [RoomStayType](docs/RoomStayType.md)
 - [RoomTypeAttributesType](docs/RoomTypeAttributesType.md)
 - [RoomTypeInfoType](docs/RoomTypeInfoType.md)
 - [RoomTypeMasterInfoType](docs/RoomTypeMasterInfoType.md)
 - [RoomTypeYieldableType](docs/RoomTypeYieldableType.md)
 - [SalesInfoType](docs/SalesInfoType.md)
 - [SearchHotelsDetails](docs/SearchHotelsDetails.md)
 - [SearchHotelsDetailsHotels](docs/SearchHotelsDetailsHotels.md)
 - [SearchMatchType](docs/SearchMatchType.md)
 - [SellMessageType](docs/SellMessageType.md)
 - [SellMessagesType](docs/SellMessagesType.md)
 - [ShareDistributionInstructionType](docs/ShareDistributionInstructionType.md)
 - [SourceOfSaleType](docs/SourceOfSaleType.md)
 - [Status](docs/Status.md)
 - [StayFutureListType](docs/StayFutureListType.md)
 - [StayHistoryListType](docs/StayHistoryListType.md)
 - [StayInfoType](docs/StayInfoType.md)
 - [StayReservationInfoType](docs/StayReservationInfoType.md)
 - [TaxType](docs/TaxType.md)
 - [TaxTypeType](docs/TaxTypeType.md)
 - [TaxesType](docs/TaxesType.md)
 - [TelephoneInfoType](docs/TelephoneInfoType.md)
 - [TelephoneType](docs/TelephoneType.md)
 - [TierAdministrationType](docs/TierAdministrationType.md)
 - [TimeSpanType](docs/TimeSpanType.md)
 - [TotalType](docs/TotalType.md)
 - [TranslationTextType2000](docs/TranslationTextType2000.md)
 - [TranslationTextType80](docs/TranslationTextType80.md)
 - [TranslationsTextTypeInner](docs/TranslationsTextTypeInner.md)
 - [TurndownStatusType](docs/TurndownStatusType.md)
 - [URLInfoType](docs/URLInfoType.md)
 - [URLType](docs/URLType.md)
 - [UniqueIDType](docs/UniqueIDType.md)
 - [UpsellDailyRateType](docs/UpsellDailyRateType.md)
 - [UpsellInfoType](docs/UpsellInfoType.md)
 - [UpsellInfoTypeOriginalInfo](docs/UpsellInfoTypeOriginalInfo.md)
 - [UpsellInfoTypeUpsellInfo](docs/UpsellInfoTypeUpsellInfo.md)
 - [UpsellType](docs/UpsellType.md)
 - [UpsellsType](docs/UpsellsType.md)
 - [UsedInModuleType](docs/UsedInModuleType.md)
 - [UserDefinedFieldsType](docs/UserDefinedFieldsType.md)
 - [VIPType](docs/VIPType.md)
 - [ValidateReservationGuarantees](docs/ValidateReservationGuarantees.md)
 - [WaitlistResType](docs/WaitlistResType.md)
 - [WarningType](docs/WarningType.md)
 - [WebUserAccountType](docs/WebUserAccountType.md)
 - [WebUserHistoryType](docs/WebUserHistoryType.md)
 - [YieldMarketInfoType](docs/YieldMarketInfoType.md)
 - [YieldMarketTypeDetails](docs/YieldMarketTypeDetails.md)


## Documentation For Authorization

Endpoints do not require authorization.


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author

hospitality-integrations_ww@oracle.com
