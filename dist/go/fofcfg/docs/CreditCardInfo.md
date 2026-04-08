# CreditCardInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditCardInfo

`func NewCreditCardInfo() *CreditCardInfo`

NewCreditCardInfo instantiates a new CreditCardInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardInfoWithDefaults

`func NewCreditCardInfoWithDefaults() *CreditCardInfo`

NewCreditCardInfoWithDefaults instantiates a new CreditCardInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCard

`func (o *CreditCardInfo) GetCreditCard() ResPaymentCardType`

GetCreditCard returns the CreditCard field if non-nil, zero value otherwise.

### GetCreditCardOk

`func (o *CreditCardInfo) GetCreditCardOk() (*ResPaymentCardType, bool)`

GetCreditCardOk returns a tuple with the CreditCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCard

`func (o *CreditCardInfo) SetCreditCard(v ResPaymentCardType)`

SetCreditCard sets CreditCard field to given value.

### HasCreditCard

`func (o *CreditCardInfo) HasCreditCard() bool`

HasCreditCard returns a boolean if a field has been set.

### GetLinks

`func (o *CreditCardInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditCardInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditCardInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditCardInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditCardInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditCardInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditCardInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditCardInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


