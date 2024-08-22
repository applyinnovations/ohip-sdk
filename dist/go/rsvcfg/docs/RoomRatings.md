# RoomRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RoomRatingsInfo** | Pointer to [**[]RoomRatingInfoType**](RoomRatingInfoType.md) | Collection of rooms and their ratings. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomRatings

`func NewRoomRatings() *RoomRatings`

NewRoomRatings instantiates a new RoomRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRatingsWithDefaults

`func NewRoomRatingsWithDefaults() *RoomRatings`

NewRoomRatingsWithDefaults instantiates a new RoomRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasMore

`func (o *RoomRatings) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomRatings) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomRatings) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomRatings) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RoomRatings) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomRatings) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomRatings) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomRatings) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *RoomRatings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomRatings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomRatings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *RoomRatings) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomRatings) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomRatings) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomRatings) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRoomRatingsInfo

`func (o *RoomRatings) GetRoomRatingsInfo() []RoomRatingInfoType`

GetRoomRatingsInfo returns the RoomRatingsInfo field if non-nil, zero value otherwise.

### GetRoomRatingsInfoOk

`func (o *RoomRatings) GetRoomRatingsInfoOk() (*[]RoomRatingInfoType, bool)`

GetRoomRatingsInfoOk returns a tuple with the RoomRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRatingsInfo

`func (o *RoomRatings) SetRoomRatingsInfo(v []RoomRatingInfoType)`

SetRoomRatingsInfo sets RoomRatingsInfo field to given value.

### HasRoomRatingsInfo

`func (o *RoomRatings) HasRoomRatingsInfo() bool`

HasRoomRatingsInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RoomRatings) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RoomRatings) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RoomRatings) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RoomRatings) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomRatings) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomRatings) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomRatings) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomRatings) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomRatings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomRatings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomRatings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


