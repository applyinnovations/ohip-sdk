# HotelReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Reservation** | Pointer to [**[]HotelReservationType**](HotelReservationType.md) | A collection of Reservations. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewHotelReservationsType

`func NewHotelReservationsType() *HotelReservationsType`

NewHotelReservationsType instantiates a new HotelReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationsTypeWithDefaults

`func NewHotelReservationsTypeWithDefaults() *HotelReservationsType`

NewHotelReservationsTypeWithDefaults instantiates a new HotelReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *HotelReservationsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *HotelReservationsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *HotelReservationsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *HotelReservationsType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *HotelReservationsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *HotelReservationsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *HotelReservationsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *HotelReservationsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetReservation

`func (o *HotelReservationsType) GetReservation() []HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *HotelReservationsType) GetReservationOk() (*[]HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *HotelReservationsType) SetReservation(v []HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *HotelReservationsType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetTotalResults

`func (o *HotelReservationsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *HotelReservationsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *HotelReservationsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *HotelReservationsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


