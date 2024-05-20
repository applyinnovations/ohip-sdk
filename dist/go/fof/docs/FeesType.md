# FeesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**Fee** | Pointer to [**[]FeeType**](FeeType.md) | An individual fee or service charge. | [optional] 

## Methods

### NewFeesType

`func NewFeesType() *FeesType`

NewFeesType instantiates a new FeesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeesTypeWithDefaults

`func NewFeesTypeWithDefaults() *FeesType`

NewFeesTypeWithDefaults instantiates a new FeesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *FeesType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *FeesType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *FeesType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *FeesType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *FeesType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *FeesType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *FeesType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *FeesType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetFee

`func (o *FeesType) GetFee() []FeeType`

GetFee returns the Fee field if non-nil, zero value otherwise.

### GetFeeOk

`func (o *FeesType) GetFeeOk() (*[]FeeType, bool)`

GetFeeOk returns a tuple with the Fee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFee

`func (o *FeesType) SetFee(v []FeeType)`

SetFee sets Fee field to given value.

### HasFee

`func (o *FeesType) HasFee() bool`

HasFee returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


