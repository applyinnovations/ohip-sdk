# RoomingListReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Reservation** | Pointer to [**[]RoomingListReservationType**](RoomingListReservationType.md) | A collection of Block Rooming List Reservations. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewRoomingListReservationsType

`func NewRoomingListReservationsType() *RoomingListReservationsType`

NewRoomingListReservationsType instantiates a new RoomingListReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListReservationsTypeWithDefaults

`func NewRoomingListReservationsTypeWithDefaults() *RoomingListReservationsType`

NewRoomingListReservationsTypeWithDefaults instantiates a new RoomingListReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RoomingListReservationsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoomingListReservationsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoomingListReservationsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoomingListReservationsType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomingListReservationsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomingListReservationsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomingListReservationsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomingListReservationsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetReservation

`func (o *RoomingListReservationsType) GetReservation() []RoomingListReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *RoomingListReservationsType) GetReservationOk() (*[]RoomingListReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *RoomingListReservationsType) SetReservation(v []RoomingListReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *RoomingListReservationsType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomingListReservationsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomingListReservationsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomingListReservationsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomingListReservationsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


