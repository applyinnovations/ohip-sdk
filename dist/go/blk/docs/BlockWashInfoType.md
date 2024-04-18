# BlockWashInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**BlockWashInfoTypeBlockInfo**](BlockWashInfoTypeBlockInfo.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** | List of allocated room types for the block. | [optional] 

## Methods

### NewBlockWashInfoType

`func NewBlockWashInfoType() *BlockWashInfoType`

NewBlockWashInfoType instantiates a new BlockWashInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashInfoTypeWithDefaults

`func NewBlockWashInfoTypeWithDefaults() *BlockWashInfoType`

NewBlockWashInfoTypeWithDefaults instantiates a new BlockWashInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *BlockWashInfoType) GetBlockInfo() BlockWashInfoTypeBlockInfo`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *BlockWashInfoType) GetBlockInfoOk() (*BlockWashInfoTypeBlockInfo, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *BlockWashInfoType) SetBlockInfo(v BlockWashInfoTypeBlockInfo)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *BlockWashInfoType) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetRoomTypes

`func (o *BlockWashInfoType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockWashInfoType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockWashInfoType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockWashInfoType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


