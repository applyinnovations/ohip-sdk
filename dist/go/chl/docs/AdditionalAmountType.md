# AdditionalAmountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountType** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 

## Methods

### NewAdditionalAmountType

`func NewAdditionalAmountType() *AdditionalAmountType`

NewAdditionalAmountType instantiates a new AdditionalAmountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdditionalAmountTypeWithDefaults

`func NewAdditionalAmountTypeWithDefaults() *AdditionalAmountType`

NewAdditionalAmountTypeWithDefaults instantiates a new AdditionalAmountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountType

`func (o *AdditionalAmountType) GetAmountType() string`

GetAmountType returns the AmountType field if non-nil, zero value otherwise.

### GetAmountTypeOk

`func (o *AdditionalAmountType) GetAmountTypeOk() (*string, bool)`

GetAmountTypeOk returns a tuple with the AmountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountType

`func (o *AdditionalAmountType) SetAmountType(v string)`

SetAmountType sets AmountType field to given value.

### HasAmountType

`func (o *AdditionalAmountType) HasAmountType() bool`

HasAmountType returns a boolean if a field has been set.

### GetAmount

`func (o *AdditionalAmountType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AdditionalAmountType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AdditionalAmountType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AdditionalAmountType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *AdditionalAmountType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *AdditionalAmountType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *AdditionalAmountType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *AdditionalAmountType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


