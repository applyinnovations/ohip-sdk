# BatchVouchersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]ReservationId**](ReservationId.md) | Unique identifier for a reservation. | [optional] 

## Methods

### NewBatchVouchersType

`func NewBatchVouchersType() *BatchVouchersType`

NewBatchVouchersType instantiates a new BatchVouchersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchVouchersTypeWithDefaults

`func NewBatchVouchersTypeWithDefaults() *BatchVouchersType`

NewBatchVouchersTypeWithDefaults instantiates a new BatchVouchersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *BatchVouchersType) GetReservations() []ReservationId`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BatchVouchersType) GetReservationsOk() (*[]ReservationId, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BatchVouchersType) SetReservations(v []ReservationId)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BatchVouchersType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


