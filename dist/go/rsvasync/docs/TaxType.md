# TaxType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**AmountDeterminationType**](AmountDeterminationType.md) |  | [optional] 
**Code** | Pointer to **string** | Code identifying the fee (e.g.,agency fee, municipality fee). | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 

## Methods

### NewTaxType

`func NewTaxType() *TaxType`

NewTaxType instantiates a new TaxType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypeWithDefaults

`func NewTaxTypeWithDefaults() *TaxType`

NewTaxTypeWithDefaults instantiates a new TaxType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TaxType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaxType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaxType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaxType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *TaxType) GetType() AmountDeterminationType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaxType) GetTypeOk() (*AmountDeterminationType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaxType) SetType(v AmountDeterminationType)`

SetType sets Type field to given value.

### HasType

`func (o *TaxType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCode

`func (o *TaxType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TaxType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TaxType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TaxType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetAmount

`func (o *TaxType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TaxType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TaxType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *TaxType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *TaxType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *TaxType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *TaxType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *TaxType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


