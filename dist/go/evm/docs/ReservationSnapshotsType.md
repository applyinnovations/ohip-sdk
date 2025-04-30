# ReservationSnapshotsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**[]ReservationSnapshotType**](ReservationSnapshotType.md) | A reservation snapshot object. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewReservationSnapshotsType

`func NewReservationSnapshotsType() *ReservationSnapshotsType`

NewReservationSnapshotsType instantiates a new ReservationSnapshotsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationSnapshotsTypeWithDefaults

`func NewReservationSnapshotsTypeWithDefaults() *ReservationSnapshotsType`

NewReservationSnapshotsTypeWithDefaults instantiates a new ReservationSnapshotsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *ReservationSnapshotsType) GetReservation() []ReservationSnapshotType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ReservationSnapshotsType) GetReservationOk() (*[]ReservationSnapshotType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ReservationSnapshotsType) SetReservation(v []ReservationSnapshotType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ReservationSnapshotsType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetHasMore

`func (o *ReservationSnapshotsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ReservationSnapshotsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ReservationSnapshotsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ReservationSnapshotsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ReservationSnapshotsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ReservationSnapshotsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ReservationSnapshotsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ReservationSnapshotsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ReservationSnapshotsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ReservationSnapshotsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ReservationSnapshotsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ReservationSnapshotsType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


