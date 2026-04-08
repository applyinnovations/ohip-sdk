# RoomFeatureRatingsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomFeatureRatingsInfo** | Pointer to [**[]RoomFeatureRatingInfoType**](RoomFeatureRatingInfoType.md) | Collection of rooms features and their ratings. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomFeatureRatingsInfo

`func NewRoomFeatureRatingsInfo() *RoomFeatureRatingsInfo`

NewRoomFeatureRatingsInfo instantiates a new RoomFeatureRatingsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeatureRatingsInfoWithDefaults

`func NewRoomFeatureRatingsInfoWithDefaults() *RoomFeatureRatingsInfo`

NewRoomFeatureRatingsInfoWithDefaults instantiates a new RoomFeatureRatingsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomFeatureRatingsInfo

`func (o *RoomFeatureRatingsInfo) GetRoomFeatureRatingsInfo() []RoomFeatureRatingInfoType`

GetRoomFeatureRatingsInfo returns the RoomFeatureRatingsInfo field if non-nil, zero value otherwise.

### GetRoomFeatureRatingsInfoOk

`func (o *RoomFeatureRatingsInfo) GetRoomFeatureRatingsInfoOk() (*[]RoomFeatureRatingInfoType, bool)`

GetRoomFeatureRatingsInfoOk returns a tuple with the RoomFeatureRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatureRatingsInfo

`func (o *RoomFeatureRatingsInfo) SetRoomFeatureRatingsInfo(v []RoomFeatureRatingInfoType)`

SetRoomFeatureRatingsInfo sets RoomFeatureRatingsInfo field to given value.

### HasRoomFeatureRatingsInfo

`func (o *RoomFeatureRatingsInfo) HasRoomFeatureRatingsInfo() bool`

HasRoomFeatureRatingsInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RoomFeatureRatingsInfo) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RoomFeatureRatingsInfo) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RoomFeatureRatingsInfo) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RoomFeatureRatingsInfo) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *RoomFeatureRatingsInfo) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomFeatureRatingsInfo) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomFeatureRatingsInfo) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomFeatureRatingsInfo) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *RoomFeatureRatingsInfo) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomFeatureRatingsInfo) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomFeatureRatingsInfo) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomFeatureRatingsInfo) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomFeatureRatingsInfo) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomFeatureRatingsInfo) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomFeatureRatingsInfo) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomFeatureRatingsInfo) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomFeatureRatingsInfo) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomFeatureRatingsInfo) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomFeatureRatingsInfo) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomFeatureRatingsInfo) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *RoomFeatureRatingsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomFeatureRatingsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomFeatureRatingsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomFeatureRatingsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomFeatureRatingsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomFeatureRatingsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomFeatureRatingsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomFeatureRatingsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


