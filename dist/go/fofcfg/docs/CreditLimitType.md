# CreditLimitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditLimit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Percentage** | Pointer to **float32** |  | [optional] 

## Methods

### NewCreditLimitType

`func NewCreditLimitType() *CreditLimitType`

NewCreditLimitType instantiates a new CreditLimitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditLimitTypeWithDefaults

`func NewCreditLimitTypeWithDefaults() *CreditLimitType`

NewCreditLimitTypeWithDefaults instantiates a new CreditLimitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditLimit

`func (o *CreditLimitType) GetCreditLimit() CurrencyAmountType`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *CreditLimitType) GetCreditLimitOk() (*CurrencyAmountType, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *CreditLimitType) SetCreditLimit(v CurrencyAmountType)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *CreditLimitType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetPercentage

`func (o *CreditLimitType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CreditLimitType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CreditLimitType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CreditLimitType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


