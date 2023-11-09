# AvailRatePlanInfoTypeRatePlanInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelMappings** | Pointer to [**[]BookingChannelMappingType**](BookingChannelMappingType.md) | Booking Channel mapping for the Rate Plan Code. | [optional] 
**CancelPenalty** | Pointer to [**CancelPenaltyType**](CancelPenaltyType.md) |  | [optional] 
**CredentialsRequired** | Pointer to **bool** | If true, indicates that credentials is required to sell the rate code. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code of the rate code. | [optional] 
**Description** | Pointer to **string** | Description of the Rate Code. | [optional] 
**DiscountAllowed** | Pointer to **bool** | If true, indicates additional discount could be applied on the Rate. | [optional] 
**Guarantee** | Pointer to [**GuaranteeType**](GuaranteeType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**HotelUseOnly** | Pointer to **bool** | If true, indicates this rates is not allowed to be sold by CRO. For CRO this is information only. | [optional] 
**LongInfo** | Pointer to **string** | Detail Information of the Rate Code. | [optional] 
**MarketCode** | Pointer to **string** | Holds the market code. | [optional] 
**MealPlans** | Pointer to [**MealPlansType**](MealPlansType.md) |  | [optional] 
**NegotiatedBy** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**RateCommission** | Pointer to [**RatePlanCommissionType**](RatePlanCommissionType.md) |  | [optional] 
**RatePlanCategory** | Pointer to **string** |  | [optional] 
**RatePlanChannelInfo** | Pointer to [**RatePlanChannelInfoType**](RatePlanChannelInfoType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**RatePlanLevel** | Pointer to **string** | All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level. | [optional] 
**ResGuarantees** | Pointer to [**GuaranteePoliciesType**](GuaranteePoliciesType.md) |  | [optional] 
**ServiceFeeInclusive** | Pointer to **bool** | Indicates if service fee is included in the rate code amount. | [optional] 
**ShortInfo** | Pointer to **string** | Brief Information of the Rate Code. | [optional] 
**SourceCode** | Pointer to **string** | Holds the source code. | [optional] 
**TaxInclusive** | Pointer to **bool** | Indicates if tax is included in the rate code amount. | [optional] 
**WebPage** | Pointer to **string** | URL providing more information about the Rate Code. | [optional] 

## Methods

### NewAvailRatePlanInfoTypeRatePlanInner

`func NewAvailRatePlanInfoTypeRatePlanInner() *AvailRatePlanInfoTypeRatePlanInner`

NewAvailRatePlanInfoTypeRatePlanInner instantiates a new AvailRatePlanInfoTypeRatePlanInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailRatePlanInfoTypeRatePlanInnerWithDefaults

`func NewAvailRatePlanInfoTypeRatePlanInnerWithDefaults() *AvailRatePlanInfoTypeRatePlanInner`

NewAvailRatePlanInfoTypeRatePlanInnerWithDefaults instantiates a new AvailRatePlanInfoTypeRatePlanInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelMappings

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetBookingChannelMappings() []BookingChannelMappingType`

GetBookingChannelMappings returns the BookingChannelMappings field if non-nil, zero value otherwise.

### GetBookingChannelMappingsOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetBookingChannelMappingsOk() (*[]BookingChannelMappingType, bool)`

GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelMappings

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetBookingChannelMappings(v []BookingChannelMappingType)`

SetBookingChannelMappings sets BookingChannelMappings field to given value.

### HasBookingChannelMappings

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasBookingChannelMappings() bool`

HasBookingChannelMappings returns a boolean if a field has been set.

### GetCancelPenalty

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCancelPenalty() CancelPenaltyType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCancelPenaltyOk() (*CancelPenaltyType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetCancelPenalty(v CancelPenaltyType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetCredentialsRequired

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCredentialsRequired() bool`

GetCredentialsRequired returns the CredentialsRequired field if non-nil, zero value otherwise.

### GetCredentialsRequiredOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCredentialsRequiredOk() (*bool, bool)`

GetCredentialsRequiredOk returns a tuple with the CredentialsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsRequired

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetCredentialsRequired(v bool)`

SetCredentialsRequired sets CredentialsRequired field to given value.

### HasCredentialsRequired

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasCredentialsRequired() bool`

HasCredentialsRequired returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDescription

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.

### GetGuarantee

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetGuarantee() GuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetGuaranteeOk() (*GuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetGuarantee(v GuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetHotelId

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelUseOnly

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetHotelUseOnly() bool`

GetHotelUseOnly returns the HotelUseOnly field if non-nil, zero value otherwise.

### GetHotelUseOnlyOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetHotelUseOnlyOk() (*bool, bool)`

GetHotelUseOnlyOk returns a tuple with the HotelUseOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelUseOnly

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetHotelUseOnly(v bool)`

SetHotelUseOnly sets HotelUseOnly field to given value.

### HasHotelUseOnly

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasHotelUseOnly() bool`

HasHotelUseOnly returns a boolean if a field has been set.

### GetLongInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetLongInfo() string`

GetLongInfo returns the LongInfo field if non-nil, zero value otherwise.

### GetLongInfoOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetLongInfoOk() (*string, bool)`

GetLongInfoOk returns a tuple with the LongInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetLongInfo(v string)`

SetLongInfo sets LongInfo field to given value.

### HasLongInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasLongInfo() bool`

HasLongInfo returns a boolean if a field has been set.

### GetMarketCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMealPlans

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetMealPlans() MealPlansType`

GetMealPlans returns the MealPlans field if non-nil, zero value otherwise.

### GetMealPlansOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetMealPlansOk() (*MealPlansType, bool)`

GetMealPlansOk returns a tuple with the MealPlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealPlans

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetMealPlans(v MealPlansType)`

SetMealPlans sets MealPlans field to given value.

### HasMealPlans

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasMealPlans() bool`

HasMealPlans returns a boolean if a field has been set.

### GetNegotiatedBy

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetNegotiatedBy() ProfileTypeType`

GetNegotiatedBy returns the NegotiatedBy field if non-nil, zero value otherwise.

### GetNegotiatedByOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetNegotiatedByOk() (*ProfileTypeType, bool)`

GetNegotiatedByOk returns a tuple with the NegotiatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedBy

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetNegotiatedBy(v ProfileTypeType)`

SetNegotiatedBy sets NegotiatedBy field to given value.

### HasNegotiatedBy

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasNegotiatedBy() bool`

HasNegotiatedBy returns a boolean if a field has been set.

### GetRateCommission

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRateCommission() RatePlanCommissionType`

GetRateCommission returns the RateCommission field if non-nil, zero value otherwise.

### GetRateCommissionOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRateCommissionOk() (*RatePlanCommissionType, bool)`

GetRateCommissionOk returns a tuple with the RateCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCommission

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetRateCommission(v RatePlanCommissionType)`

SetRateCommission sets RateCommission field to given value.

### HasRateCommission

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasRateCommission() bool`

HasRateCommission returns a boolean if a field has been set.

### GetRatePlanCategory

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanCategory() string`

GetRatePlanCategory returns the RatePlanCategory field if non-nil, zero value otherwise.

### GetRatePlanCategoryOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanCategoryOk() (*string, bool)`

GetRatePlanCategoryOk returns a tuple with the RatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCategory

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetRatePlanCategory(v string)`

SetRatePlanCategory sets RatePlanCategory field to given value.

### HasRatePlanCategory

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasRatePlanCategory() bool`

HasRatePlanCategory returns a boolean if a field has been set.

### GetRatePlanChannelInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanChannelInfo() RatePlanChannelInfoType`

GetRatePlanChannelInfo returns the RatePlanChannelInfo field if non-nil, zero value otherwise.

### GetRatePlanChannelInfoOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanChannelInfoOk() (*RatePlanChannelInfoType, bool)`

GetRatePlanChannelInfoOk returns a tuple with the RatePlanChannelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanChannelInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetRatePlanChannelInfo(v RatePlanChannelInfoType)`

SetRatePlanChannelInfo sets RatePlanChannelInfo field to given value.

### HasRatePlanChannelInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasRatePlanChannelInfo() bool`

HasRatePlanChannelInfo returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanLevel

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanLevel() string`

GetRatePlanLevel returns the RatePlanLevel field if non-nil, zero value otherwise.

### GetRatePlanLevelOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetRatePlanLevelOk() (*string, bool)`

GetRatePlanLevelOk returns a tuple with the RatePlanLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanLevel

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetRatePlanLevel(v string)`

SetRatePlanLevel sets RatePlanLevel field to given value.

### HasRatePlanLevel

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasRatePlanLevel() bool`

HasRatePlanLevel returns a boolean if a field has been set.

### GetResGuarantees

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetResGuarantees() GuaranteePoliciesType`

GetResGuarantees returns the ResGuarantees field if non-nil, zero value otherwise.

### GetResGuaranteesOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetResGuaranteesOk() (*GuaranteePoliciesType, bool)`

GetResGuaranteesOk returns a tuple with the ResGuarantees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResGuarantees

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetResGuarantees(v GuaranteePoliciesType)`

SetResGuarantees sets ResGuarantees field to given value.

### HasResGuarantees

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasResGuarantees() bool`

HasResGuarantees returns a boolean if a field has been set.

### GetServiceFeeInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetServiceFeeInclusive() bool`

GetServiceFeeInclusive returns the ServiceFeeInclusive field if non-nil, zero value otherwise.

### GetServiceFeeInclusiveOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetServiceFeeInclusiveOk() (*bool, bool)`

GetServiceFeeInclusiveOk returns a tuple with the ServiceFeeInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetServiceFeeInclusive(v bool)`

SetServiceFeeInclusive sets ServiceFeeInclusive field to given value.

### HasServiceFeeInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasServiceFeeInclusive() bool`

HasServiceFeeInclusive returns a boolean if a field has been set.

### GetShortInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetShortInfo() string`

GetShortInfo returns the ShortInfo field if non-nil, zero value otherwise.

### GetShortInfoOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetShortInfoOk() (*string, bool)`

GetShortInfoOk returns a tuple with the ShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetShortInfo(v string)`

SetShortInfo sets ShortInfo field to given value.

### HasShortInfo

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasShortInfo() bool`

HasShortInfo returns a boolean if a field has been set.

### GetSourceCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetTaxInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetTaxInclusive() bool`

GetTaxInclusive returns the TaxInclusive field if non-nil, zero value otherwise.

### GetTaxInclusiveOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetTaxInclusiveOk() (*bool, bool)`

GetTaxInclusiveOk returns a tuple with the TaxInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetTaxInclusive(v bool)`

SetTaxInclusive sets TaxInclusive field to given value.

### HasTaxInclusive

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasTaxInclusive() bool`

HasTaxInclusive returns a boolean if a field has been set.

### GetWebPage

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *AvailRatePlanInfoTypeRatePlanInner) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *AvailRatePlanInfoTypeRatePlanInner) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *AvailRatePlanInfoTypeRatePlanInner) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


