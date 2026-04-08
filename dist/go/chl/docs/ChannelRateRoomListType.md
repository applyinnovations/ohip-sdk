# ChannelRateRoomListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRateRoom** | Pointer to [**[]ChannelRateRoomType**](ChannelRateRoomType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewChannelRateRoomListType

`func NewChannelRateRoomListType() *ChannelRateRoomListType`

NewChannelRateRoomListType instantiates a new ChannelRateRoomListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateRoomListTypeWithDefaults

`func NewChannelRateRoomListTypeWithDefaults() *ChannelRateRoomListType`

NewChannelRateRoomListTypeWithDefaults instantiates a new ChannelRateRoomListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRateRoom

`func (o *ChannelRateRoomListType) GetChannelRateRoom() []ChannelRateRoomType`

GetChannelRateRoom returns the ChannelRateRoom field if non-nil, zero value otherwise.

### GetChannelRateRoomOk

`func (o *ChannelRateRoomListType) GetChannelRateRoomOk() (*[]ChannelRateRoomType, bool)`

GetChannelRateRoomOk returns a tuple with the ChannelRateRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateRoom

`func (o *ChannelRateRoomListType) SetChannelRateRoom(v []ChannelRateRoomType)`

SetChannelRateRoom sets ChannelRateRoom field to given value.

### HasChannelRateRoom

`func (o *ChannelRateRoomListType) HasChannelRateRoom() bool`

HasChannelRateRoom returns a boolean if a field has been set.

### GetHasMore

`func (o *ChannelRateRoomListType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ChannelRateRoomListType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ChannelRateRoomListType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ChannelRateRoomListType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ChannelRateRoomListType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ChannelRateRoomListType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ChannelRateRoomListType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ChannelRateRoomListType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ChannelRateRoomListType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ChannelRateRoomListType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ChannelRateRoomListType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ChannelRateRoomListType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


