# BlockStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**RoomPoolStats** | Pointer to [**[]RoomPoolStatType**](RoomPoolStatType.md) | Statistics of one room pool. | [optional] 

## Methods

### NewBlockStatType

`func NewBlockStatType() *BlockStatType`

NewBlockStatType instantiates a new BlockStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatTypeWithDefaults

`func NewBlockStatTypeWithDefaults() *BlockStatType`

NewBlockStatTypeWithDefaults instantiates a new BlockStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *BlockStatType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockStatType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockStatType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockStatType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetRoomPoolStats

`func (o *BlockStatType) GetRoomPoolStats() []RoomPoolStatType`

GetRoomPoolStats returns the RoomPoolStats field if non-nil, zero value otherwise.

### GetRoomPoolStatsOk

`func (o *BlockStatType) GetRoomPoolStatsOk() (*[]RoomPoolStatType, bool)`

GetRoomPoolStatsOk returns a tuple with the RoomPoolStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPoolStats

`func (o *BlockStatType) SetRoomPoolStats(v []RoomPoolStatType)`

SetRoomPoolStats sets RoomPoolStats field to given value.

### HasRoomPoolStats

`func (o *BlockStatType) HasRoomPoolStats() bool`

HasRoomPoolStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


