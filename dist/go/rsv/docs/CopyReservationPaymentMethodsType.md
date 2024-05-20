# CopyReservationPaymentMethodsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyCreditCards** | Pointer to **bool** | Indicates copying of credit card payment methods. This flag will only be applied to payment method windows not sent in the collection. | [optional] 
**CopyOthers** | Pointer to **bool** | Indicates copying of other payment methods. This flag will only be applied to payment method windows not sent in the collection. | [optional] 
**ReservationPaymentMethod** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) | Defines reservation payment methods. | [optional] 

## Methods

### NewCopyReservationPaymentMethodsType

`func NewCopyReservationPaymentMethodsType() *CopyReservationPaymentMethodsType`

NewCopyReservationPaymentMethodsType instantiates a new CopyReservationPaymentMethodsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyReservationPaymentMethodsTypeWithDefaults

`func NewCopyReservationPaymentMethodsTypeWithDefaults() *CopyReservationPaymentMethodsType`

NewCopyReservationPaymentMethodsTypeWithDefaults instantiates a new CopyReservationPaymentMethodsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyCreditCards

`func (o *CopyReservationPaymentMethodsType) GetCopyCreditCards() bool`

GetCopyCreditCards returns the CopyCreditCards field if non-nil, zero value otherwise.

### GetCopyCreditCardsOk

`func (o *CopyReservationPaymentMethodsType) GetCopyCreditCardsOk() (*bool, bool)`

GetCopyCreditCardsOk returns a tuple with the CopyCreditCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyCreditCards

`func (o *CopyReservationPaymentMethodsType) SetCopyCreditCards(v bool)`

SetCopyCreditCards sets CopyCreditCards field to given value.

### HasCopyCreditCards

`func (o *CopyReservationPaymentMethodsType) HasCopyCreditCards() bool`

HasCopyCreditCards returns a boolean if a field has been set.

### GetCopyOthers

`func (o *CopyReservationPaymentMethodsType) GetCopyOthers() bool`

GetCopyOthers returns the CopyOthers field if non-nil, zero value otherwise.

### GetCopyOthersOk

`func (o *CopyReservationPaymentMethodsType) GetCopyOthersOk() (*bool, bool)`

GetCopyOthersOk returns a tuple with the CopyOthers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyOthers

`func (o *CopyReservationPaymentMethodsType) SetCopyOthers(v bool)`

SetCopyOthers sets CopyOthers field to given value.

### HasCopyOthers

`func (o *CopyReservationPaymentMethodsType) HasCopyOthers() bool`

HasCopyOthers returns a boolean if a field has been set.

### GetReservationPaymentMethod

`func (o *CopyReservationPaymentMethodsType) GetReservationPaymentMethod() []ReservationPaymentMethodType`

GetReservationPaymentMethod returns the ReservationPaymentMethod field if non-nil, zero value otherwise.

### GetReservationPaymentMethodOk

`func (o *CopyReservationPaymentMethodsType) GetReservationPaymentMethodOk() (*[]ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodOk returns a tuple with the ReservationPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethod

`func (o *CopyReservationPaymentMethodsType) SetReservationPaymentMethod(v []ReservationPaymentMethodType)`

SetReservationPaymentMethod sets ReservationPaymentMethod field to given value.

### HasReservationPaymentMethod

`func (o *CopyReservationPaymentMethodsType) HasReservationPaymentMethod() bool`

HasReservationPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


