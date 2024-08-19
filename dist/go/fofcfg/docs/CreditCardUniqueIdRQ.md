# CreditCardUniqueIdRQ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardUniqueId** | Pointer to [**CreditCardUniqueIdType**](CreditCardUniqueIdType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditCardUniqueIdRQ

`func NewCreditCardUniqueIdRQ() *CreditCardUniqueIdRQ`

NewCreditCardUniqueIdRQ instantiates a new CreditCardUniqueIdRQ object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardUniqueIdRQWithDefaults

`func NewCreditCardUniqueIdRQWithDefaults() *CreditCardUniqueIdRQ`

NewCreditCardUniqueIdRQWithDefaults instantiates a new CreditCardUniqueIdRQ object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardUniqueId

`func (o *CreditCardUniqueIdRQ) GetCreditCardUniqueId() CreditCardUniqueIdType`

GetCreditCardUniqueId returns the CreditCardUniqueId field if non-nil, zero value otherwise.

### GetCreditCardUniqueIdOk

`func (o *CreditCardUniqueIdRQ) GetCreditCardUniqueIdOk() (*CreditCardUniqueIdType, bool)`

GetCreditCardUniqueIdOk returns a tuple with the CreditCardUniqueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardUniqueId

`func (o *CreditCardUniqueIdRQ) SetCreditCardUniqueId(v CreditCardUniqueIdType)`

SetCreditCardUniqueId sets CreditCardUniqueId field to given value.

### HasCreditCardUniqueId

`func (o *CreditCardUniqueIdRQ) HasCreditCardUniqueId() bool`

HasCreditCardUniqueId returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditCardUniqueIdRQ) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditCardUniqueIdRQ) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditCardUniqueIdRQ) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditCardUniqueIdRQ) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


