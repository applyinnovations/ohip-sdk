# CreditCardTypeValidationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Valid** | Pointer to **bool** | A flag indicating whether the credit card number meets its vendor&#39;s format requirements | [optional] 
**ValidatedPaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditCardTypeValidationStatus

`func NewCreditCardTypeValidationStatus() *CreditCardTypeValidationStatus`

NewCreditCardTypeValidationStatus instantiates a new CreditCardTypeValidationStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardTypeValidationStatusWithDefaults

`func NewCreditCardTypeValidationStatusWithDefaults() *CreditCardTypeValidationStatus`

NewCreditCardTypeValidationStatusWithDefaults instantiates a new CreditCardTypeValidationStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CreditCardTypeValidationStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditCardTypeValidationStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditCardTypeValidationStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditCardTypeValidationStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetValid

`func (o *CreditCardTypeValidationStatus) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *CreditCardTypeValidationStatus) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *CreditCardTypeValidationStatus) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *CreditCardTypeValidationStatus) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetValidatedPaymentMethod

`func (o *CreditCardTypeValidationStatus) GetValidatedPaymentMethod() ReservationPaymentMethodType`

GetValidatedPaymentMethod returns the ValidatedPaymentMethod field if non-nil, zero value otherwise.

### GetValidatedPaymentMethodOk

`func (o *CreditCardTypeValidationStatus) GetValidatedPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetValidatedPaymentMethodOk returns a tuple with the ValidatedPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidatedPaymentMethod

`func (o *CreditCardTypeValidationStatus) SetValidatedPaymentMethod(v ReservationPaymentMethodType)`

SetValidatedPaymentMethod sets ValidatedPaymentMethod field to given value.

### HasValidatedPaymentMethod

`func (o *CreditCardTypeValidationStatus) HasValidatedPaymentMethod() bool`

HasValidatedPaymentMethod returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditCardTypeValidationStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditCardTypeValidationStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditCardTypeValidationStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditCardTypeValidationStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


