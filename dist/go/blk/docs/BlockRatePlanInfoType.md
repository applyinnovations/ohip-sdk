# BlockRatePlanInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShortInfo** | Pointer to **string** | Brief Information of the Rate Code. | [optional] 
**LongInfo** | Pointer to **string** | Detail Information of the Rate Code. | [optional] 
**WebPage** | Pointer to **string** | URL providing more information about the Rate Code. | [optional] 
**Description** | Pointer to **string** | Description of the Rate Code. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code of the rate code. | [optional] 
**RatePlanLevel** | Pointer to **string** | All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level. | [optional] 
**Guarantee** | Pointer to [**GuaranteeType**](GuaranteeType.md) |  | [optional] 
**CancelPenalty** | Pointer to [**CancelPenaltyType**](CancelPenaltyType.md) |  | [optional] 
**MealPlans** | Pointer to [**[]MealPlanCodeType**](MealPlanCodeType.md) | Meal plan codes associated with the rate codes. | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**RatePlanCategory** | Pointer to **string** |  | [optional] 
**TaxInclusive** | Pointer to **bool** | Indicates if tax is included in the rate code amount. | [optional] 
**ServiceFeeInclusive** | Pointer to **bool** | Indicates if service fee is included in the rate code amount. | [optional] 
**Primary** | Pointer to **bool** | Is it a primary rate plan? | [optional] 
**ShowRateAmount** | Pointer to **bool** | Is the rate amount to be shown? | [optional] 
**MarketCode** | Pointer to **string** | Market Code associated with the RatePlanCode. | [optional] 
**SourceCode** | Pointer to **string** | Source Code associated with the RatePlanCode. | [optional] 
**Negotiated** | Pointer to **bool** | Indicates if the rate code is a negotiated rate code | [optional] 

## Methods

### NewBlockRatePlanInfoType

`func NewBlockRatePlanInfoType() *BlockRatePlanInfoType`

NewBlockRatePlanInfoType instantiates a new BlockRatePlanInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRatePlanInfoTypeWithDefaults

`func NewBlockRatePlanInfoTypeWithDefaults() *BlockRatePlanInfoType`

NewBlockRatePlanInfoTypeWithDefaults instantiates a new BlockRatePlanInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShortInfo

`func (o *BlockRatePlanInfoType) GetShortInfo() string`

GetShortInfo returns the ShortInfo field if non-nil, zero value otherwise.

### GetShortInfoOk

`func (o *BlockRatePlanInfoType) GetShortInfoOk() (*string, bool)`

GetShortInfoOk returns a tuple with the ShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortInfo

`func (o *BlockRatePlanInfoType) SetShortInfo(v string)`

SetShortInfo sets ShortInfo field to given value.

### HasShortInfo

`func (o *BlockRatePlanInfoType) HasShortInfo() bool`

HasShortInfo returns a boolean if a field has been set.

### GetLongInfo

`func (o *BlockRatePlanInfoType) GetLongInfo() string`

GetLongInfo returns the LongInfo field if non-nil, zero value otherwise.

### GetLongInfoOk

`func (o *BlockRatePlanInfoType) GetLongInfoOk() (*string, bool)`

GetLongInfoOk returns a tuple with the LongInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongInfo

`func (o *BlockRatePlanInfoType) SetLongInfo(v string)`

SetLongInfo sets LongInfo field to given value.

### HasLongInfo

`func (o *BlockRatePlanInfoType) HasLongInfo() bool`

HasLongInfo returns a boolean if a field has been set.

### GetWebPage

`func (o *BlockRatePlanInfoType) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *BlockRatePlanInfoType) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *BlockRatePlanInfoType) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *BlockRatePlanInfoType) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.

### GetDescription

`func (o *BlockRatePlanInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockRatePlanInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockRatePlanInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockRatePlanInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *BlockRatePlanInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockRatePlanInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockRatePlanInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockRatePlanInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRatePlanLevel

`func (o *BlockRatePlanInfoType) GetRatePlanLevel() string`

GetRatePlanLevel returns the RatePlanLevel field if non-nil, zero value otherwise.

### GetRatePlanLevelOk

`func (o *BlockRatePlanInfoType) GetRatePlanLevelOk() (*string, bool)`

GetRatePlanLevelOk returns a tuple with the RatePlanLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanLevel

`func (o *BlockRatePlanInfoType) SetRatePlanLevel(v string)`

SetRatePlanLevel sets RatePlanLevel field to given value.

### HasRatePlanLevel

`func (o *BlockRatePlanInfoType) HasRatePlanLevel() bool`

HasRatePlanLevel returns a boolean if a field has been set.

### GetGuarantee

`func (o *BlockRatePlanInfoType) GetGuarantee() GuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *BlockRatePlanInfoType) GetGuaranteeOk() (*GuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *BlockRatePlanInfoType) SetGuarantee(v GuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *BlockRatePlanInfoType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetCancelPenalty

`func (o *BlockRatePlanInfoType) GetCancelPenalty() CancelPenaltyType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *BlockRatePlanInfoType) GetCancelPenaltyOk() (*CancelPenaltyType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *BlockRatePlanInfoType) SetCancelPenalty(v CancelPenaltyType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *BlockRatePlanInfoType) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetMealPlans

`func (o *BlockRatePlanInfoType) GetMealPlans() []MealPlanCodeType`

GetMealPlans returns the MealPlans field if non-nil, zero value otherwise.

### GetMealPlansOk

`func (o *BlockRatePlanInfoType) GetMealPlansOk() (*[]MealPlanCodeType, bool)`

GetMealPlansOk returns a tuple with the MealPlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealPlans

`func (o *BlockRatePlanInfoType) SetMealPlans(v []MealPlanCodeType)`

SetMealPlans sets MealPlans field to given value.

### HasMealPlans

`func (o *BlockRatePlanInfoType) HasMealPlans() bool`

HasMealPlans returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *BlockRatePlanInfoType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockRatePlanInfoType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockRatePlanInfoType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockRatePlanInfoType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockRatePlanInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockRatePlanInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockRatePlanInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockRatePlanInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCategory

`func (o *BlockRatePlanInfoType) GetRatePlanCategory() string`

GetRatePlanCategory returns the RatePlanCategory field if non-nil, zero value otherwise.

### GetRatePlanCategoryOk

`func (o *BlockRatePlanInfoType) GetRatePlanCategoryOk() (*string, bool)`

GetRatePlanCategoryOk returns a tuple with the RatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCategory

`func (o *BlockRatePlanInfoType) SetRatePlanCategory(v string)`

SetRatePlanCategory sets RatePlanCategory field to given value.

### HasRatePlanCategory

`func (o *BlockRatePlanInfoType) HasRatePlanCategory() bool`

HasRatePlanCategory returns a boolean if a field has been set.

### GetTaxInclusive

`func (o *BlockRatePlanInfoType) GetTaxInclusive() bool`

GetTaxInclusive returns the TaxInclusive field if non-nil, zero value otherwise.

### GetTaxInclusiveOk

`func (o *BlockRatePlanInfoType) GetTaxInclusiveOk() (*bool, bool)`

GetTaxInclusiveOk returns a tuple with the TaxInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInclusive

`func (o *BlockRatePlanInfoType) SetTaxInclusive(v bool)`

SetTaxInclusive sets TaxInclusive field to given value.

### HasTaxInclusive

`func (o *BlockRatePlanInfoType) HasTaxInclusive() bool`

HasTaxInclusive returns a boolean if a field has been set.

### GetServiceFeeInclusive

`func (o *BlockRatePlanInfoType) GetServiceFeeInclusive() bool`

GetServiceFeeInclusive returns the ServiceFeeInclusive field if non-nil, zero value otherwise.

### GetServiceFeeInclusiveOk

`func (o *BlockRatePlanInfoType) GetServiceFeeInclusiveOk() (*bool, bool)`

GetServiceFeeInclusiveOk returns a tuple with the ServiceFeeInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeInclusive

`func (o *BlockRatePlanInfoType) SetServiceFeeInclusive(v bool)`

SetServiceFeeInclusive sets ServiceFeeInclusive field to given value.

### HasServiceFeeInclusive

`func (o *BlockRatePlanInfoType) HasServiceFeeInclusive() bool`

HasServiceFeeInclusive returns a boolean if a field has been set.

### GetPrimary

`func (o *BlockRatePlanInfoType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *BlockRatePlanInfoType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *BlockRatePlanInfoType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *BlockRatePlanInfoType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetShowRateAmount

`func (o *BlockRatePlanInfoType) GetShowRateAmount() bool`

GetShowRateAmount returns the ShowRateAmount field if non-nil, zero value otherwise.

### GetShowRateAmountOk

`func (o *BlockRatePlanInfoType) GetShowRateAmountOk() (*bool, bool)`

GetShowRateAmountOk returns a tuple with the ShowRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowRateAmount

`func (o *BlockRatePlanInfoType) SetShowRateAmount(v bool)`

SetShowRateAmount sets ShowRateAmount field to given value.

### HasShowRateAmount

`func (o *BlockRatePlanInfoType) HasShowRateAmount() bool`

HasShowRateAmount returns a boolean if a field has been set.

### GetMarketCode

`func (o *BlockRatePlanInfoType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *BlockRatePlanInfoType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *BlockRatePlanInfoType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *BlockRatePlanInfoType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceCode

`func (o *BlockRatePlanInfoType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *BlockRatePlanInfoType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *BlockRatePlanInfoType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *BlockRatePlanInfoType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetNegotiated

`func (o *BlockRatePlanInfoType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *BlockRatePlanInfoType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *BlockRatePlanInfoType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *BlockRatePlanInfoType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


