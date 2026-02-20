# ForeignCurrencyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | Code of the Foreign Currency | [optional] 
**Description** | Pointer to **string** | Description of the Foreign Currency Code | [optional] 
**Decimals** | Pointer to **int32** | Number of Decimal places defined for the Foreign Currency Code | [optional] 
**Symbol** | Pointer to **string** | Symbol defined for the Currency | [optional] 
**SellCurrency** | Pointer to **bool** | Indicates if the Currency is available for selling | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Foreign Currency Code is inactive | [optional] 
**DisplaySequence** | Pointer to **float32** | Display Sequence | [optional] 
**CurrencyLimits** | Pointer to [**[]CurrencyLimitType**](CurrencyLimitType.md) | Provides information about various limits on the Currency Code | [optional] 

## Methods

### NewForeignCurrencyType

`func NewForeignCurrencyType() *ForeignCurrencyType`

NewForeignCurrencyType instantiates a new ForeignCurrencyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForeignCurrencyTypeWithDefaults

`func NewForeignCurrencyTypeWithDefaults() *ForeignCurrencyType`

NewForeignCurrencyTypeWithDefaults instantiates a new ForeignCurrencyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *ForeignCurrencyType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ForeignCurrencyType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ForeignCurrencyType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ForeignCurrencyType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDescription

`func (o *ForeignCurrencyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ForeignCurrencyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ForeignCurrencyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ForeignCurrencyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDecimals

`func (o *ForeignCurrencyType) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *ForeignCurrencyType) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *ForeignCurrencyType) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.

### HasDecimals

`func (o *ForeignCurrencyType) HasDecimals() bool`

HasDecimals returns a boolean if a field has been set.

### GetSymbol

`func (o *ForeignCurrencyType) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *ForeignCurrencyType) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *ForeignCurrencyType) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.

### HasSymbol

`func (o *ForeignCurrencyType) HasSymbol() bool`

HasSymbol returns a boolean if a field has been set.

### GetSellCurrency

`func (o *ForeignCurrencyType) GetSellCurrency() bool`

GetSellCurrency returns the SellCurrency field if non-nil, zero value otherwise.

### GetSellCurrencyOk

`func (o *ForeignCurrencyType) GetSellCurrencyOk() (*bool, bool)`

GetSellCurrencyOk returns a tuple with the SellCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellCurrency

`func (o *ForeignCurrencyType) SetSellCurrency(v bool)`

SetSellCurrency sets SellCurrency field to given value.

### HasSellCurrency

`func (o *ForeignCurrencyType) HasSellCurrency() bool`

HasSellCurrency returns a boolean if a field has been set.

### GetInactive

`func (o *ForeignCurrencyType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ForeignCurrencyType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ForeignCurrencyType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ForeignCurrencyType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ForeignCurrencyType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ForeignCurrencyType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ForeignCurrencyType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ForeignCurrencyType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetCurrencyLimits

`func (o *ForeignCurrencyType) GetCurrencyLimits() []CurrencyLimitType`

GetCurrencyLimits returns the CurrencyLimits field if non-nil, zero value otherwise.

### GetCurrencyLimitsOk

`func (o *ForeignCurrencyType) GetCurrencyLimitsOk() (*[]CurrencyLimitType, bool)`

GetCurrencyLimitsOk returns a tuple with the CurrencyLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyLimits

`func (o *ForeignCurrencyType) SetCurrencyLimits(v []CurrencyLimitType)`

SetCurrencyLimits sets CurrencyLimits field to given value.

### HasCurrencyLimits

`func (o *ForeignCurrencyType) HasCurrencyLimits() bool`

HasCurrencyLimits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


