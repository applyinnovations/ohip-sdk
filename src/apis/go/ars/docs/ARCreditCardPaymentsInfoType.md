# ARCreditCardPaymentsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**ARCreditCardPayments** | Pointer to [**[]ARCreditCardPaymentInfoType**](ARCreditCardPaymentInfoType.md) | AR Credit Card Payments info . | [optional] 

## Methods

### NewARCreditCardPaymentsInfoType

`func NewARCreditCardPaymentsInfoType() *ARCreditCardPaymentsInfoType`

NewARCreditCardPaymentsInfoType instantiates a new ARCreditCardPaymentsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARCreditCardPaymentsInfoTypeWithDefaults

`func NewARCreditCardPaymentsInfoTypeWithDefaults() *ARCreditCardPaymentsInfoType`

NewARCreditCardPaymentsInfoTypeWithDefaults instantiates a new ARCreditCardPaymentsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ARCreditCardPaymentsInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARCreditCardPaymentsInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARCreditCardPaymentsInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARCreditCardPaymentsInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetARCreditCardPayments

`func (o *ARCreditCardPaymentsInfoType) GetARCreditCardPayments() []ARCreditCardPaymentInfoType`

GetARCreditCardPayments returns the ARCreditCardPayments field if non-nil, zero value otherwise.

### GetARCreditCardPaymentsOk

`func (o *ARCreditCardPaymentsInfoType) GetARCreditCardPaymentsOk() (*[]ARCreditCardPaymentInfoType, bool)`

GetARCreditCardPaymentsOk returns a tuple with the ARCreditCardPayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARCreditCardPayments

`func (o *ARCreditCardPaymentsInfoType) SetARCreditCardPayments(v []ARCreditCardPaymentInfoType)`

SetARCreditCardPayments sets ARCreditCardPayments field to given value.

### HasARCreditCardPayments

`func (o *ARCreditCardPaymentsInfoType) HasARCreditCardPayments() bool`

HasARCreditCardPayments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


