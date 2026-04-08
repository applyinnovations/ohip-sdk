# BlockRangeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**BlockRangeInfoTypeBlockInfo**](BlockRangeInfoTypeBlockInfo.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** | List of all room types for the hotel. | [optional] 

## Methods

### NewBlockRangeInfoType

`func NewBlockRangeInfoType() *BlockRangeInfoType`

NewBlockRangeInfoType instantiates a new BlockRangeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRangeInfoTypeWithDefaults

`func NewBlockRangeInfoTypeWithDefaults() *BlockRangeInfoType`

NewBlockRangeInfoTypeWithDefaults instantiates a new BlockRangeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *BlockRangeInfoType) GetBlockInfo() BlockRangeInfoTypeBlockInfo`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *BlockRangeInfoType) GetBlockInfoOk() (*BlockRangeInfoTypeBlockInfo, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *BlockRangeInfoType) SetBlockInfo(v BlockRangeInfoTypeBlockInfo)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *BlockRangeInfoType) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetRoomTypes

`func (o *BlockRangeInfoType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockRangeInfoType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockRangeInfoType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockRangeInfoType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


