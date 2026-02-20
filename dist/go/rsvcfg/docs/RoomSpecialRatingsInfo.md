# RoomSpecialRatingsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomSpecialRatingsInfo** | Pointer to [**[]RoomSpecialRatingInfoType**](RoomSpecialRatingInfoType.md) | Collection of rooms specials and their ratings. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomSpecialRatingsInfo

`func NewRoomSpecialRatingsInfo() *RoomSpecialRatingsInfo`

NewRoomSpecialRatingsInfo instantiates a new RoomSpecialRatingsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomSpecialRatingsInfoWithDefaults

`func NewRoomSpecialRatingsInfoWithDefaults() *RoomSpecialRatingsInfo`

NewRoomSpecialRatingsInfoWithDefaults instantiates a new RoomSpecialRatingsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomSpecialRatingsInfo

`func (o *RoomSpecialRatingsInfo) GetRoomSpecialRatingsInfo() []RoomSpecialRatingInfoType`

GetRoomSpecialRatingsInfo returns the RoomSpecialRatingsInfo field if non-nil, zero value otherwise.

### GetRoomSpecialRatingsInfoOk

`func (o *RoomSpecialRatingsInfo) GetRoomSpecialRatingsInfoOk() (*[]RoomSpecialRatingInfoType, bool)`

GetRoomSpecialRatingsInfoOk returns a tuple with the RoomSpecialRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSpecialRatingsInfo

`func (o *RoomSpecialRatingsInfo) SetRoomSpecialRatingsInfo(v []RoomSpecialRatingInfoType)`

SetRoomSpecialRatingsInfo sets RoomSpecialRatingsInfo field to given value.

### HasRoomSpecialRatingsInfo

`func (o *RoomSpecialRatingsInfo) HasRoomSpecialRatingsInfo() bool`

HasRoomSpecialRatingsInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RoomSpecialRatingsInfo) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RoomSpecialRatingsInfo) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RoomSpecialRatingsInfo) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RoomSpecialRatingsInfo) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *RoomSpecialRatingsInfo) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomSpecialRatingsInfo) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomSpecialRatingsInfo) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomSpecialRatingsInfo) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *RoomSpecialRatingsInfo) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomSpecialRatingsInfo) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomSpecialRatingsInfo) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomSpecialRatingsInfo) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomSpecialRatingsInfo) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomSpecialRatingsInfo) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomSpecialRatingsInfo) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomSpecialRatingsInfo) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomSpecialRatingsInfo) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomSpecialRatingsInfo) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomSpecialRatingsInfo) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomSpecialRatingsInfo) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *RoomSpecialRatingsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomSpecialRatingsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomSpecialRatingsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomSpecialRatingsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomSpecialRatingsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomSpecialRatingsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomSpecialRatingsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomSpecialRatingsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


