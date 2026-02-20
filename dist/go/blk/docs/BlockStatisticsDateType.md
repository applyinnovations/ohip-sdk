# BlockStatisticsDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** |  | [optional] 
**RoomStatisticsList** | Pointer to [**[]BlockRoomStatisticsType**](BlockRoomStatisticsType.md) | Collection of room type level statistics. | [optional] 
**Date** | Pointer to **string** |  | [optional] 

## Methods

### NewBlockStatisticsDateType

`func NewBlockStatisticsDateType() *BlockStatisticsDateType`

NewBlockStatisticsDateType instantiates a new BlockStatisticsDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatisticsDateTypeWithDefaults

`func NewBlockStatisticsDateTypeWithDefaults() *BlockStatisticsDateType`

NewBlockStatisticsDateTypeWithDefaults instantiates a new BlockStatisticsDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *BlockStatisticsDateType) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *BlockStatisticsDateType) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *BlockStatisticsDateType) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *BlockStatisticsDateType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetRoomStatisticsList

`func (o *BlockStatisticsDateType) GetRoomStatisticsList() []BlockRoomStatisticsType`

GetRoomStatisticsList returns the RoomStatisticsList field if non-nil, zero value otherwise.

### GetRoomStatisticsListOk

`func (o *BlockStatisticsDateType) GetRoomStatisticsListOk() (*[]BlockRoomStatisticsType, bool)`

GetRoomStatisticsListOk returns a tuple with the RoomStatisticsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatisticsList

`func (o *BlockStatisticsDateType) SetRoomStatisticsList(v []BlockRoomStatisticsType)`

SetRoomStatisticsList sets RoomStatisticsList field to given value.

### HasRoomStatisticsList

`func (o *BlockStatisticsDateType) HasRoomStatisticsList() bool`

HasRoomStatisticsList returns a boolean if a field has been set.

### GetDate

`func (o *BlockStatisticsDateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *BlockStatisticsDateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *BlockStatisticsDateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *BlockStatisticsDateType) HasDate() bool`

HasDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


