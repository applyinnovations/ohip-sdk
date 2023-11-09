# CancelReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelInstructions** | Pointer to [**CancelReservationsInstructionsType**](CancelReservationsInstructionsType.md) |  | [optional] 
**HotelId** | Pointer to **string** | The hotel code for the reservations that are being cancelled. | [optional] 
**Reason** | Pointer to [**CancellationReasonType**](CancellationReasonType.md) |  | [optional] 
**Reservations** | Pointer to [**Reservations**](Reservations.md) |  | [optional] 

## Methods

### NewCancelReservationsType

`func NewCancelReservationsType() *CancelReservationsType`

NewCancelReservationsType instantiates a new CancelReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationsTypeWithDefaults

`func NewCancelReservationsTypeWithDefaults() *CancelReservationsType`

NewCancelReservationsTypeWithDefaults instantiates a new CancelReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelInstructions

`func (o *CancelReservationsType) GetCancelInstructions() CancelReservationsInstructionsType`

GetCancelInstructions returns the CancelInstructions field if non-nil, zero value otherwise.

### GetCancelInstructionsOk

`func (o *CancelReservationsType) GetCancelInstructionsOk() (*CancelReservationsInstructionsType, bool)`

GetCancelInstructionsOk returns a tuple with the CancelInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelInstructions

`func (o *CancelReservationsType) SetCancelInstructions(v CancelReservationsInstructionsType)`

SetCancelInstructions sets CancelInstructions field to given value.

### HasCancelInstructions

`func (o *CancelReservationsType) HasCancelInstructions() bool`

HasCancelInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *CancelReservationsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CancelReservationsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CancelReservationsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CancelReservationsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReason

`func (o *CancelReservationsType) GetReason() CancellationReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CancelReservationsType) GetReasonOk() (*CancellationReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CancelReservationsType) SetReason(v CancellationReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CancelReservationsType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReservations

`func (o *CancelReservationsType) GetReservations() Reservations`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CancelReservationsType) GetReservationsOk() (*Reservations, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CancelReservationsType) SetReservations(v Reservations)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CancelReservationsType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


