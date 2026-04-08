# FeeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**AmountDeterminationType**](AmountDeterminationType.md) |  | [optional] 
**Code** | Pointer to **string** | Code identifying the fee (e.g.,agency fee, municipality fee). | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 

## Methods

### NewFeeType

`func NewFeeType() *FeeType`

NewFeeType instantiates a new FeeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeeTypeWithDefaults

`func NewFeeTypeWithDefaults() *FeeType`

NewFeeTypeWithDefaults instantiates a new FeeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *FeeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FeeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FeeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FeeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *FeeType) GetType() AmountDeterminationType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FeeType) GetTypeOk() (*AmountDeterminationType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FeeType) SetType(v AmountDeterminationType)`

SetType sets Type field to given value.

### HasType

`func (o *FeeType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCode

`func (o *FeeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FeeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FeeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FeeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetAmount

`func (o *FeeType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *FeeType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *FeeType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *FeeType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *FeeType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *FeeType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *FeeType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *FeeType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


