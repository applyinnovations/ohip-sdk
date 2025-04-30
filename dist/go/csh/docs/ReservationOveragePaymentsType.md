# ReservationOveragePaymentsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationOveragePayment** | Pointer to [**[]ReservationOveragePaymentType**](ReservationOveragePaymentType.md) | Reservation details to initiate the Credit Limit Overage process | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewReservationOveragePaymentsType

`func NewReservationOveragePaymentsType() *ReservationOveragePaymentsType`

NewReservationOveragePaymentsType instantiates a new ReservationOveragePaymentsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationOveragePaymentsTypeWithDefaults

`func NewReservationOveragePaymentsTypeWithDefaults() *ReservationOveragePaymentsType`

NewReservationOveragePaymentsTypeWithDefaults instantiates a new ReservationOveragePaymentsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationOveragePayment

`func (o *ReservationOveragePaymentsType) GetReservationOveragePayment() []ReservationOveragePaymentType`

GetReservationOveragePayment returns the ReservationOveragePayment field if non-nil, zero value otherwise.

### GetReservationOveragePaymentOk

`func (o *ReservationOveragePaymentsType) GetReservationOveragePaymentOk() (*[]ReservationOveragePaymentType, bool)`

GetReservationOveragePaymentOk returns a tuple with the ReservationOveragePayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationOveragePayment

`func (o *ReservationOveragePaymentsType) SetReservationOveragePayment(v []ReservationOveragePaymentType)`

SetReservationOveragePayment sets ReservationOveragePayment field to given value.

### HasReservationOveragePayment

`func (o *ReservationOveragePaymentsType) HasReservationOveragePayment() bool`

HasReservationOveragePayment returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationOveragePaymentsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationOveragePaymentsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationOveragePaymentsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationOveragePaymentsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCashierId

`func (o *ReservationOveragePaymentsType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReservationOveragePaymentsType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReservationOveragePaymentsType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReservationOveragePaymentsType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


