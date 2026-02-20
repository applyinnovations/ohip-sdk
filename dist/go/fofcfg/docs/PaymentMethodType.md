# PaymentMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the payment method. | [optional] 
**PaymentCard** | Pointer to [**PaymentCardType**](PaymentCardType.md) |  | [optional] 
**PaymentMethodTransactionInfo** | Pointer to [**PaymentMethodTransactionInfoType**](PaymentMethodTransactionInfoType.md) |  | [optional] 
**PaymentMethodUsage** | Pointer to [**PaymentMethodUsageType**](PaymentMethodUsageType.md) |  | [optional] 
**CreditLimit** | Pointer to [**CreditLimitType**](CreditLimitType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property from which the payment method belongs to. | [optional] 
**PaymentMethod** | Pointer to **string** | Defines the unique identifier for this payment method. | [optional] 
**CalculatePoints** | Pointer to [**CalculatePointsType**](CalculatePointsType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the payment method is inactive or not. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 

## Methods

### NewPaymentMethodType

`func NewPaymentMethodType() *PaymentMethodType`

NewPaymentMethodType instantiates a new PaymentMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodTypeWithDefaults

`func NewPaymentMethodTypeWithDefaults() *PaymentMethodType`

NewPaymentMethodTypeWithDefaults instantiates a new PaymentMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *PaymentMethodType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PaymentMethodType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PaymentMethodType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PaymentMethodType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPaymentCard

`func (o *PaymentMethodType) GetPaymentCard() PaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *PaymentMethodType) GetPaymentCardOk() (*PaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *PaymentMethodType) SetPaymentCard(v PaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *PaymentMethodType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPaymentMethodTransactionInfo

`func (o *PaymentMethodType) GetPaymentMethodTransactionInfo() PaymentMethodTransactionInfoType`

GetPaymentMethodTransactionInfo returns the PaymentMethodTransactionInfo field if non-nil, zero value otherwise.

### GetPaymentMethodTransactionInfoOk

`func (o *PaymentMethodType) GetPaymentMethodTransactionInfoOk() (*PaymentMethodTransactionInfoType, bool)`

GetPaymentMethodTransactionInfoOk returns a tuple with the PaymentMethodTransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodTransactionInfo

`func (o *PaymentMethodType) SetPaymentMethodTransactionInfo(v PaymentMethodTransactionInfoType)`

SetPaymentMethodTransactionInfo sets PaymentMethodTransactionInfo field to given value.

### HasPaymentMethodTransactionInfo

`func (o *PaymentMethodType) HasPaymentMethodTransactionInfo() bool`

HasPaymentMethodTransactionInfo returns a boolean if a field has been set.

### GetPaymentMethodUsage

`func (o *PaymentMethodType) GetPaymentMethodUsage() PaymentMethodUsageType`

GetPaymentMethodUsage returns the PaymentMethodUsage field if non-nil, zero value otherwise.

### GetPaymentMethodUsageOk

`func (o *PaymentMethodType) GetPaymentMethodUsageOk() (*PaymentMethodUsageType, bool)`

GetPaymentMethodUsageOk returns a tuple with the PaymentMethodUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodUsage

`func (o *PaymentMethodType) SetPaymentMethodUsage(v PaymentMethodUsageType)`

SetPaymentMethodUsage sets PaymentMethodUsage field to given value.

### HasPaymentMethodUsage

`func (o *PaymentMethodType) HasPaymentMethodUsage() bool`

HasPaymentMethodUsage returns a boolean if a field has been set.

### GetCreditLimit

`func (o *PaymentMethodType) GetCreditLimit() CreditLimitType`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *PaymentMethodType) GetCreditLimitOk() (*CreditLimitType, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *PaymentMethodType) SetCreditLimit(v CreditLimitType)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *PaymentMethodType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetHotelId

`func (o *PaymentMethodType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PaymentMethodType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PaymentMethodType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PaymentMethodType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *PaymentMethodType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *PaymentMethodType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *PaymentMethodType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *PaymentMethodType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetCalculatePoints

`func (o *PaymentMethodType) GetCalculatePoints() CalculatePointsType`

GetCalculatePoints returns the CalculatePoints field if non-nil, zero value otherwise.

### GetCalculatePointsOk

`func (o *PaymentMethodType) GetCalculatePointsOk() (*CalculatePointsType, bool)`

GetCalculatePointsOk returns a tuple with the CalculatePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatePoints

`func (o *PaymentMethodType) SetCalculatePoints(v CalculatePointsType)`

SetCalculatePoints sets CalculatePoints field to given value.

### HasCalculatePoints

`func (o *PaymentMethodType) HasCalculatePoints() bool`

HasCalculatePoints returns a boolean if a field has been set.

### GetInactive

`func (o *PaymentMethodType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *PaymentMethodType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *PaymentMethodType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *PaymentMethodType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOrderSequence

`func (o *PaymentMethodType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *PaymentMethodType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *PaymentMethodType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *PaymentMethodType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


