# BlockRatePlanType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | Currency of the rate code. | [optional] 
**Description** | Pointer to **string** | Description of the rate code. | [optional] 
**EndSellDate** | Pointer to **string** | End sell date of the rate code. | [optional] 
**MarketCode** | Pointer to **string** | Market code associated with the rate code. | [optional] 
**Negotiated** | Pointer to **bool** | True if the rate plan code, is a negotiated code otherwise false. | [optional] 
**RateCode** | Pointer to **string** | Rate code | [optional] 
**SellSequence** | Pointer to **float32** | SellSequence for the rate code. | [optional] 
**ShowRateAmount** | Pointer to **bool** | True if the rate amount for the rate plan code will be visible, otherwise false. | [optional] 
**SourceCode** | Pointer to **string** | Source code associated with the rate code. | [optional] 
**StartSellDate** | Pointer to **string** | Start sell date of the rate code. | [optional] 

## Methods

### NewBlockRatePlanType

`func NewBlockRatePlanType() *BlockRatePlanType`

NewBlockRatePlanType instantiates a new BlockRatePlanType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRatePlanTypeWithDefaults

`func NewBlockRatePlanTypeWithDefaults() *BlockRatePlanType`

NewBlockRatePlanTypeWithDefaults instantiates a new BlockRatePlanType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *BlockRatePlanType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockRatePlanType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockRatePlanType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockRatePlanType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDescription

`func (o *BlockRatePlanType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockRatePlanType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockRatePlanType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockRatePlanType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEndSellDate

`func (o *BlockRatePlanType) GetEndSellDate() string`

GetEndSellDate returns the EndSellDate field if non-nil, zero value otherwise.

### GetEndSellDateOk

`func (o *BlockRatePlanType) GetEndSellDateOk() (*string, bool)`

GetEndSellDateOk returns a tuple with the EndSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndSellDate

`func (o *BlockRatePlanType) SetEndSellDate(v string)`

SetEndSellDate sets EndSellDate field to given value.

### HasEndSellDate

`func (o *BlockRatePlanType) HasEndSellDate() bool`

HasEndSellDate returns a boolean if a field has been set.

### GetMarketCode

`func (o *BlockRatePlanType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *BlockRatePlanType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *BlockRatePlanType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *BlockRatePlanType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetNegotiated

`func (o *BlockRatePlanType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *BlockRatePlanType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *BlockRatePlanType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *BlockRatePlanType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetRateCode

`func (o *BlockRatePlanType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *BlockRatePlanType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *BlockRatePlanType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *BlockRatePlanType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetSellSequence

`func (o *BlockRatePlanType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *BlockRatePlanType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *BlockRatePlanType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *BlockRatePlanType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetShowRateAmount

`func (o *BlockRatePlanType) GetShowRateAmount() bool`

GetShowRateAmount returns the ShowRateAmount field if non-nil, zero value otherwise.

### GetShowRateAmountOk

`func (o *BlockRatePlanType) GetShowRateAmountOk() (*bool, bool)`

GetShowRateAmountOk returns a tuple with the ShowRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowRateAmount

`func (o *BlockRatePlanType) SetShowRateAmount(v bool)`

SetShowRateAmount sets ShowRateAmount field to given value.

### HasShowRateAmount

`func (o *BlockRatePlanType) HasShowRateAmount() bool`

HasShowRateAmount returns a boolean if a field has been set.

### GetSourceCode

`func (o *BlockRatePlanType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *BlockRatePlanType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *BlockRatePlanType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *BlockRatePlanType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetStartSellDate

`func (o *BlockRatePlanType) GetStartSellDate() string`

GetStartSellDate returns the StartSellDate field if non-nil, zero value otherwise.

### GetStartSellDateOk

`func (o *BlockRatePlanType) GetStartSellDateOk() (*string, bool)`

GetStartSellDateOk returns a tuple with the StartSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartSellDate

`func (o *BlockRatePlanType) SetStartSellDate(v string)`

SetStartSellDate sets StartSellDate field to given value.

### HasStartSellDate

`func (o *BlockRatePlanType) HasStartSellDate() bool`

HasStartSellDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


