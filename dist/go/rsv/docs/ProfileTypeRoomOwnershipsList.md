# ProfileTypeRoomOwnershipsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**RoomOwnershipInfo** | Pointer to [**[]RoomOwnershipType**](RoomOwnershipType.md) | Collection of Detailed information on Room Ownership records. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeRoomOwnershipsList

`func NewProfileTypeRoomOwnershipsList() *ProfileTypeRoomOwnershipsList`

NewProfileTypeRoomOwnershipsList instantiates a new ProfileTypeRoomOwnershipsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeRoomOwnershipsListWithDefaults

`func NewProfileTypeRoomOwnershipsListWithDefaults() *ProfileTypeRoomOwnershipsList`

NewProfileTypeRoomOwnershipsListWithDefaults instantiates a new ProfileTypeRoomOwnershipsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ProfileTypeRoomOwnershipsList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeRoomOwnershipsList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeRoomOwnershipsList) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeRoomOwnershipsList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeRoomOwnershipsList) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeRoomOwnershipsList) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeRoomOwnershipsList) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeRoomOwnershipsList) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetRoomOwnershipInfo

`func (o *ProfileTypeRoomOwnershipsList) GetRoomOwnershipInfo() []RoomOwnershipType`

GetRoomOwnershipInfo returns the RoomOwnershipInfo field if non-nil, zero value otherwise.

### GetRoomOwnershipInfoOk

`func (o *ProfileTypeRoomOwnershipsList) GetRoomOwnershipInfoOk() (*[]RoomOwnershipType, bool)`

GetRoomOwnershipInfoOk returns a tuple with the RoomOwnershipInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipInfo

`func (o *ProfileTypeRoomOwnershipsList) SetRoomOwnershipInfo(v []RoomOwnershipType)`

SetRoomOwnershipInfo sets RoomOwnershipInfo field to given value.

### HasRoomOwnershipInfo

`func (o *ProfileTypeRoomOwnershipsList) HasRoomOwnershipInfo() bool`

HasRoomOwnershipInfo returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeRoomOwnershipsList) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeRoomOwnershipsList) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeRoomOwnershipsList) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeRoomOwnershipsList) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


