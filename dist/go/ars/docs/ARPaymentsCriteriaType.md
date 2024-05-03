# ARPaymentsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Payment** | Pointer to [**[]ARPaymentCriteria**](ARPaymentCriteria.md) |  | [optional] 

## Methods

### NewARPaymentsCriteriaType

`func NewARPaymentsCriteriaType() *ARPaymentsCriteriaType`

NewARPaymentsCriteriaType instantiates a new ARPaymentsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARPaymentsCriteriaTypeWithDefaults

`func NewARPaymentsCriteriaTypeWithDefaults() *ARPaymentsCriteriaType`

NewARPaymentsCriteriaTypeWithDefaults instantiates a new ARPaymentsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ARPaymentsCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARPaymentsCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARPaymentsCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARPaymentsCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetPayment

`func (o *ARPaymentsCriteriaType) GetPayment() []ARPaymentCriteria`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *ARPaymentsCriteriaType) GetPaymentOk() (*[]ARPaymentCriteria, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *ARPaymentsCriteriaType) SetPayment(v []ARPaymentCriteria)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *ARPaymentsCriteriaType) HasPayment() bool`

HasPayment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


