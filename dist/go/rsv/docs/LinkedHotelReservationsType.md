# LinkedHotelReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedReservation** | Pointer to [**[]LinkedHotelReservationType**](LinkedHotelReservationType.md) | A collection of Linked Reservations. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewLinkedHotelReservationsType

`func NewLinkedHotelReservationsType() *LinkedHotelReservationsType`

NewLinkedHotelReservationsType instantiates a new LinkedHotelReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedHotelReservationsTypeWithDefaults

`func NewLinkedHotelReservationsTypeWithDefaults() *LinkedHotelReservationsType`

NewLinkedHotelReservationsTypeWithDefaults instantiates a new LinkedHotelReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedReservation

`func (o *LinkedHotelReservationsType) GetLinkedReservation() []LinkedHotelReservationType`

GetLinkedReservation returns the LinkedReservation field if non-nil, zero value otherwise.

### GetLinkedReservationOk

`func (o *LinkedHotelReservationsType) GetLinkedReservationOk() (*[]LinkedHotelReservationType, bool)`

GetLinkedReservationOk returns a tuple with the LinkedReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservation

`func (o *LinkedHotelReservationsType) SetLinkedReservation(v []LinkedHotelReservationType)`

SetLinkedReservation sets LinkedReservation field to given value.

### HasLinkedReservation

`func (o *LinkedHotelReservationsType) HasLinkedReservation() bool`

HasLinkedReservation returns a boolean if a field has been set.

### GetHasMore

`func (o *LinkedHotelReservationsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *LinkedHotelReservationsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *LinkedHotelReservationsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *LinkedHotelReservationsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *LinkedHotelReservationsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *LinkedHotelReservationsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *LinkedHotelReservationsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *LinkedHotelReservationsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *LinkedHotelReservationsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *LinkedHotelReservationsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *LinkedHotelReservationsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *LinkedHotelReservationsType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


