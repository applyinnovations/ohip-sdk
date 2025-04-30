# BatchDepositType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property context of the reservations. | [optional] 
**Reservations** | Pointer to [**[]ReservationId**](ReservationId.md) | Unique identifier for a reservation. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewBatchDepositType

`func NewBatchDepositType() *BatchDepositType`

NewBatchDepositType instantiates a new BatchDepositType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchDepositTypeWithDefaults

`func NewBatchDepositTypeWithDefaults() *BatchDepositType`

NewBatchDepositTypeWithDefaults instantiates a new BatchDepositType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BatchDepositType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BatchDepositType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BatchDepositType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BatchDepositType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservations

`func (o *BatchDepositType) GetReservations() []ReservationId`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BatchDepositType) GetReservationsOk() (*[]ReservationId, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BatchDepositType) SetReservations(v []ReservationId)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BatchDepositType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetCashierId

`func (o *BatchDepositType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BatchDepositType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BatchDepositType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BatchDepositType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


