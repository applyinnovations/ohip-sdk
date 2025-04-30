# TrxCodeAmountsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultPrice** | Pointer to **float32** | Default price of the Transaction Code. | [optional] 
**MinAmount** | Pointer to **float32** | Minimum amount to be posted on this Transaction Code. | [optional] 
**MaxAmount** | Pointer to **float32** | Maximum Amount to be posted on this Transaction Code. | [optional] 
**Currency** | Pointer to **string** | Default currency code for the amounts. | [optional] 

## Methods

### NewTrxCodeAmountsType

`func NewTrxCodeAmountsType() *TrxCodeAmountsType`

NewTrxCodeAmountsType instantiates a new TrxCodeAmountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxCodeAmountsTypeWithDefaults

`func NewTrxCodeAmountsTypeWithDefaults() *TrxCodeAmountsType`

NewTrxCodeAmountsTypeWithDefaults instantiates a new TrxCodeAmountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultPrice

`func (o *TrxCodeAmountsType) GetDefaultPrice() float32`

GetDefaultPrice returns the DefaultPrice field if non-nil, zero value otherwise.

### GetDefaultPriceOk

`func (o *TrxCodeAmountsType) GetDefaultPriceOk() (*float32, bool)`

GetDefaultPriceOk returns a tuple with the DefaultPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPrice

`func (o *TrxCodeAmountsType) SetDefaultPrice(v float32)`

SetDefaultPrice sets DefaultPrice field to given value.

### HasDefaultPrice

`func (o *TrxCodeAmountsType) HasDefaultPrice() bool`

HasDefaultPrice returns a boolean if a field has been set.

### GetMinAmount

`func (o *TrxCodeAmountsType) GetMinAmount() float32`

GetMinAmount returns the MinAmount field if non-nil, zero value otherwise.

### GetMinAmountOk

`func (o *TrxCodeAmountsType) GetMinAmountOk() (*float32, bool)`

GetMinAmountOk returns a tuple with the MinAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinAmount

`func (o *TrxCodeAmountsType) SetMinAmount(v float32)`

SetMinAmount sets MinAmount field to given value.

### HasMinAmount

`func (o *TrxCodeAmountsType) HasMinAmount() bool`

HasMinAmount returns a boolean if a field has been set.

### GetMaxAmount

`func (o *TrxCodeAmountsType) GetMaxAmount() float32`

GetMaxAmount returns the MaxAmount field if non-nil, zero value otherwise.

### GetMaxAmountOk

`func (o *TrxCodeAmountsType) GetMaxAmountOk() (*float32, bool)`

GetMaxAmountOk returns a tuple with the MaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAmount

`func (o *TrxCodeAmountsType) SetMaxAmount(v float32)`

SetMaxAmount sets MaxAmount field to given value.

### HasMaxAmount

`func (o *TrxCodeAmountsType) HasMaxAmount() bool`

HasMaxAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *TrxCodeAmountsType) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TrxCodeAmountsType) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TrxCodeAmountsType) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TrxCodeAmountsType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


