# BlockAvailabilityRatePlanInfoRatePlanInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelMappings** | Pointer to [**[]BookingChannelMappingType**](BookingChannelMappingType.md) | Booking Channel mapping for the Rate Plan Code. | [optional] 
**CancelPenalty** | Pointer to [**CancelPenaltyType**](CancelPenaltyType.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code of the rate code. | [optional] 
**Description** | Pointer to **string** | Description of the Rate Code. | [optional] 
**Guarantee** | Pointer to [**GuaranteeType**](GuaranteeType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**LongInfo** | Pointer to **string** | Detail Information of the Rate Code. | [optional] 
**MealPlans** | Pointer to [**MealPlansType**](MealPlansType.md) |  | [optional] 
**NegotiatedBy** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**RateCommission** | Pointer to [**RatePlanCommissionType**](RatePlanCommissionType.md) |  | [optional] 
**RatePlanCategory** | Pointer to **string** |  | [optional] 
**RatePlanChannelInfo** | Pointer to [**RatePlanChannelInfoType**](RatePlanChannelInfoType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**RatePlanLevel** | Pointer to **string** | All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level. | [optional] 
**ServiceFeeInclusive** | Pointer to **bool** | Indicates if service fee is included in the rate code amount. | [optional] 
**ShortInfo** | Pointer to **string** | Brief Information of the Rate Code. | [optional] 
**TaxInclusive** | Pointer to **bool** | Indicates if tax is included in the rate code amount. | [optional] 
**WebPage** | Pointer to **string** | URL providing more information about the Rate Code. | [optional] 

## Methods

### NewBlockAvailabilityRatePlanInfoRatePlanInfo

`func NewBlockAvailabilityRatePlanInfoRatePlanInfo() *BlockAvailabilityRatePlanInfoRatePlanInfo`

NewBlockAvailabilityRatePlanInfoRatePlanInfo instantiates a new BlockAvailabilityRatePlanInfoRatePlanInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityRatePlanInfoRatePlanInfoWithDefaults

`func NewBlockAvailabilityRatePlanInfoRatePlanInfoWithDefaults() *BlockAvailabilityRatePlanInfoRatePlanInfo`

NewBlockAvailabilityRatePlanInfoRatePlanInfoWithDefaults instantiates a new BlockAvailabilityRatePlanInfoRatePlanInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelMappings

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetBookingChannelMappings() []BookingChannelMappingType`

GetBookingChannelMappings returns the BookingChannelMappings field if non-nil, zero value otherwise.

### GetBookingChannelMappingsOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetBookingChannelMappingsOk() (*[]BookingChannelMappingType, bool)`

GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelMappings

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetBookingChannelMappings(v []BookingChannelMappingType)`

SetBookingChannelMappings sets BookingChannelMappings field to given value.

### HasBookingChannelMappings

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasBookingChannelMappings() bool`

HasBookingChannelMappings returns a boolean if a field has been set.

### GetCancelPenalty

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetCancelPenalty() CancelPenaltyType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetCancelPenaltyOk() (*CancelPenaltyType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetCancelPenalty(v CancelPenaltyType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDescription

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGuarantee

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetGuarantee() GuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetGuaranteeOk() (*GuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetGuarantee(v GuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLongInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetLongInfo() string`

GetLongInfo returns the LongInfo field if non-nil, zero value otherwise.

### GetLongInfoOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetLongInfoOk() (*string, bool)`

GetLongInfoOk returns a tuple with the LongInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetLongInfo(v string)`

SetLongInfo sets LongInfo field to given value.

### HasLongInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasLongInfo() bool`

HasLongInfo returns a boolean if a field has been set.

### GetMealPlans

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetMealPlans() MealPlansType`

GetMealPlans returns the MealPlans field if non-nil, zero value otherwise.

### GetMealPlansOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetMealPlansOk() (*MealPlansType, bool)`

GetMealPlansOk returns a tuple with the MealPlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealPlans

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetMealPlans(v MealPlansType)`

SetMealPlans sets MealPlans field to given value.

### HasMealPlans

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasMealPlans() bool`

HasMealPlans returns a boolean if a field has been set.

### GetNegotiatedBy

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetNegotiatedBy() ProfileTypeType`

GetNegotiatedBy returns the NegotiatedBy field if non-nil, zero value otherwise.

### GetNegotiatedByOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetNegotiatedByOk() (*ProfileTypeType, bool)`

GetNegotiatedByOk returns a tuple with the NegotiatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedBy

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetNegotiatedBy(v ProfileTypeType)`

SetNegotiatedBy sets NegotiatedBy field to given value.

### HasNegotiatedBy

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasNegotiatedBy() bool`

HasNegotiatedBy returns a boolean if a field has been set.

### GetRateCommission

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRateCommission() RatePlanCommissionType`

GetRateCommission returns the RateCommission field if non-nil, zero value otherwise.

### GetRateCommissionOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRateCommissionOk() (*RatePlanCommissionType, bool)`

GetRateCommissionOk returns a tuple with the RateCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCommission

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetRateCommission(v RatePlanCommissionType)`

SetRateCommission sets RateCommission field to given value.

### HasRateCommission

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasRateCommission() bool`

HasRateCommission returns a boolean if a field has been set.

### GetRatePlanCategory

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanCategory() string`

GetRatePlanCategory returns the RatePlanCategory field if non-nil, zero value otherwise.

### GetRatePlanCategoryOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanCategoryOk() (*string, bool)`

GetRatePlanCategoryOk returns a tuple with the RatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCategory

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetRatePlanCategory(v string)`

SetRatePlanCategory sets RatePlanCategory field to given value.

### HasRatePlanCategory

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasRatePlanCategory() bool`

HasRatePlanCategory returns a boolean if a field has been set.

### GetRatePlanChannelInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanChannelInfo() RatePlanChannelInfoType`

GetRatePlanChannelInfo returns the RatePlanChannelInfo field if non-nil, zero value otherwise.

### GetRatePlanChannelInfoOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanChannelInfoOk() (*RatePlanChannelInfoType, bool)`

GetRatePlanChannelInfoOk returns a tuple with the RatePlanChannelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanChannelInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetRatePlanChannelInfo(v RatePlanChannelInfoType)`

SetRatePlanChannelInfo sets RatePlanChannelInfo field to given value.

### HasRatePlanChannelInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasRatePlanChannelInfo() bool`

HasRatePlanChannelInfo returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanLevel

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanLevel() string`

GetRatePlanLevel returns the RatePlanLevel field if non-nil, zero value otherwise.

### GetRatePlanLevelOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetRatePlanLevelOk() (*string, bool)`

GetRatePlanLevelOk returns a tuple with the RatePlanLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanLevel

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetRatePlanLevel(v string)`

SetRatePlanLevel sets RatePlanLevel field to given value.

### HasRatePlanLevel

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasRatePlanLevel() bool`

HasRatePlanLevel returns a boolean if a field has been set.

### GetServiceFeeInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetServiceFeeInclusive() bool`

GetServiceFeeInclusive returns the ServiceFeeInclusive field if non-nil, zero value otherwise.

### GetServiceFeeInclusiveOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetServiceFeeInclusiveOk() (*bool, bool)`

GetServiceFeeInclusiveOk returns a tuple with the ServiceFeeInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetServiceFeeInclusive(v bool)`

SetServiceFeeInclusive sets ServiceFeeInclusive field to given value.

### HasServiceFeeInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasServiceFeeInclusive() bool`

HasServiceFeeInclusive returns a boolean if a field has been set.

### GetShortInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetShortInfo() string`

GetShortInfo returns the ShortInfo field if non-nil, zero value otherwise.

### GetShortInfoOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetShortInfoOk() (*string, bool)`

GetShortInfoOk returns a tuple with the ShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetShortInfo(v string)`

SetShortInfo sets ShortInfo field to given value.

### HasShortInfo

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasShortInfo() bool`

HasShortInfo returns a boolean if a field has been set.

### GetTaxInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetTaxInclusive() bool`

GetTaxInclusive returns the TaxInclusive field if non-nil, zero value otherwise.

### GetTaxInclusiveOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetTaxInclusiveOk() (*bool, bool)`

GetTaxInclusiveOk returns a tuple with the TaxInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetTaxInclusive(v bool)`

SetTaxInclusive sets TaxInclusive field to given value.

### HasTaxInclusive

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasTaxInclusive() bool`

HasTaxInclusive returns a boolean if a field has been set.

### GetWebPage

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *BlockAvailabilityRatePlanInfoRatePlanInfo) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


