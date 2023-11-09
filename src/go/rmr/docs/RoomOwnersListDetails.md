# RoomOwnersListDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomOwnerInfoTypeList** | Pointer to [**[]RoomOwnerInfoType**](RoomOwnerInfoType.md) | Collection of Room Owners with Room Ownership details. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewRoomOwnersListDetails

`func NewRoomOwnersListDetails() *RoomOwnersListDetails`

NewRoomOwnersListDetails instantiates a new RoomOwnersListDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnersListDetailsWithDefaults

`func NewRoomOwnersListDetailsWithDefaults() *RoomOwnersListDetails`

NewRoomOwnersListDetailsWithDefaults instantiates a new RoomOwnersListDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomOwnersListDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomOwnersListDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomOwnersListDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomOwnersListDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomOwnerInfoTypeList

`func (o *RoomOwnersListDetails) GetRoomOwnerInfoTypeList() []RoomOwnerInfoType`

GetRoomOwnerInfoTypeList returns the RoomOwnerInfoTypeList field if non-nil, zero value otherwise.

### GetRoomOwnerInfoTypeListOk

`func (o *RoomOwnersListDetails) GetRoomOwnerInfoTypeListOk() (*[]RoomOwnerInfoType, bool)`

GetRoomOwnerInfoTypeListOk returns a tuple with the RoomOwnerInfoTypeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerInfoTypeList

`func (o *RoomOwnersListDetails) SetRoomOwnerInfoTypeList(v []RoomOwnerInfoType)`

SetRoomOwnerInfoTypeList sets RoomOwnerInfoTypeList field to given value.

### HasRoomOwnerInfoTypeList

`func (o *RoomOwnersListDetails) HasRoomOwnerInfoTypeList() bool`

HasRoomOwnerInfoTypeList returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomOwnersListDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomOwnersListDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomOwnersListDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomOwnersListDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetCount

`func (o *RoomOwnersListDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoomOwnersListDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoomOwnersListDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoomOwnersListDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomOwnersListDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomOwnersListDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomOwnersListDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomOwnersListDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RoomOwnersListDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomOwnersListDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomOwnersListDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomOwnersListDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *RoomOwnersListDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomOwnersListDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomOwnersListDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomOwnersListDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomOwnersListDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomOwnersListDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomOwnersListDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomOwnersListDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


