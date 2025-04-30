# ProfileEnrollmentTypeRoomOwnershipsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwnershipInfo** | Pointer to [**[]RoomOwnershipType**](RoomOwnershipType.md) | Collection of Detailed information on Room Ownership records. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewProfileEnrollmentTypeRoomOwnershipsList

`func NewProfileEnrollmentTypeRoomOwnershipsList() *ProfileEnrollmentTypeRoomOwnershipsList`

NewProfileEnrollmentTypeRoomOwnershipsList instantiates a new ProfileEnrollmentTypeRoomOwnershipsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeRoomOwnershipsListWithDefaults

`func NewProfileEnrollmentTypeRoomOwnershipsListWithDefaults() *ProfileEnrollmentTypeRoomOwnershipsList`

NewProfileEnrollmentTypeRoomOwnershipsListWithDefaults instantiates a new ProfileEnrollmentTypeRoomOwnershipsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwnershipInfo

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetRoomOwnershipInfo() []RoomOwnershipType`

GetRoomOwnershipInfo returns the RoomOwnershipInfo field if non-nil, zero value otherwise.

### GetRoomOwnershipInfoOk

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetRoomOwnershipInfoOk() (*[]RoomOwnershipType, bool)`

GetRoomOwnershipInfoOk returns a tuple with the RoomOwnershipInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipInfo

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) SetRoomOwnershipInfo(v []RoomOwnershipType)`

SetRoomOwnershipInfo sets RoomOwnershipInfo field to given value.

### HasRoomOwnershipInfo

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) HasRoomOwnershipInfo() bool`

HasRoomOwnershipInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileEnrollmentTypeRoomOwnershipsList) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


