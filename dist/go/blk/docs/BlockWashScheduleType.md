# BlockWashScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypes** | Pointer to **[]string** | A single room type on which wash operation should be performed. | [optional] 
**WashByPercent** | Pointer to **float32** | When using the Wash by % option, indicate a wash percentage that will be applied it to the whole block. | [optional] 
**WashByRooms** | Pointer to [**BlockGridInvType**](BlockGridInvType.md) |  | [optional] 
**WashDate** | Pointer to **string** | Date on which the block wash operation will be performed. | [optional] 

## Methods

### NewBlockWashScheduleType

`func NewBlockWashScheduleType() *BlockWashScheduleType`

NewBlockWashScheduleType instantiates a new BlockWashScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashScheduleTypeWithDefaults

`func NewBlockWashScheduleTypeWithDefaults() *BlockWashScheduleType`

NewBlockWashScheduleTypeWithDefaults instantiates a new BlockWashScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypes

`func (o *BlockWashScheduleType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockWashScheduleType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockWashScheduleType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockWashScheduleType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetWashByPercent

`func (o *BlockWashScheduleType) GetWashByPercent() float32`

GetWashByPercent returns the WashByPercent field if non-nil, zero value otherwise.

### GetWashByPercentOk

`func (o *BlockWashScheduleType) GetWashByPercentOk() (*float32, bool)`

GetWashByPercentOk returns a tuple with the WashByPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashByPercent

`func (o *BlockWashScheduleType) SetWashByPercent(v float32)`

SetWashByPercent sets WashByPercent field to given value.

### HasWashByPercent

`func (o *BlockWashScheduleType) HasWashByPercent() bool`

HasWashByPercent returns a boolean if a field has been set.

### GetWashByRooms

`func (o *BlockWashScheduleType) GetWashByRooms() BlockGridInvType`

GetWashByRooms returns the WashByRooms field if non-nil, zero value otherwise.

### GetWashByRoomsOk

`func (o *BlockWashScheduleType) GetWashByRoomsOk() (*BlockGridInvType, bool)`

GetWashByRoomsOk returns a tuple with the WashByRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashByRooms

`func (o *BlockWashScheduleType) SetWashByRooms(v BlockGridInvType)`

SetWashByRooms sets WashByRooms field to given value.

### HasWashByRooms

`func (o *BlockWashScheduleType) HasWashByRooms() bool`

HasWashByRooms returns a boolean if a field has been set.

### GetWashDate

`func (o *BlockWashScheduleType) GetWashDate() string`

GetWashDate returns the WashDate field if non-nil, zero value otherwise.

### GetWashDateOk

`func (o *BlockWashScheduleType) GetWashDateOk() (*string, bool)`

GetWashDateOk returns a tuple with the WashDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashDate

`func (o *BlockWashScheduleType) SetWashDate(v string)`

SetWashDate sets WashDate field to given value.

### HasWashDate

`func (o *BlockWashScheduleType) HasWashDate() bool`

HasWashDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


