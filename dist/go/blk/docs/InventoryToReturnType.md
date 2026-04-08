# InventoryToReturnType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ReturnDate** | Pointer to **string** | The date on which rooms need to be returned for the block either to another room type in the block or to House if the borrowed room was from House. | [optional] 
**ReturnRooms** | Pointer to [**[]ReturnRoomType**](ReturnRoomType.md) | Specifies the collection of number of rooms to be returned to room types or House. | [optional] 

## Methods

### NewInventoryToReturnType

`func NewInventoryToReturnType() *InventoryToReturnType`

NewInventoryToReturnType instantiates a new InventoryToReturnType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryToReturnTypeWithDefaults

`func NewInventoryToReturnTypeWithDefaults() *InventoryToReturnType`

NewInventoryToReturnTypeWithDefaults instantiates a new InventoryToReturnType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *InventoryToReturnType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *InventoryToReturnType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *InventoryToReturnType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *InventoryToReturnType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetReturnDate

`func (o *InventoryToReturnType) GetReturnDate() string`

GetReturnDate returns the ReturnDate field if non-nil, zero value otherwise.

### GetReturnDateOk

`func (o *InventoryToReturnType) GetReturnDateOk() (*string, bool)`

GetReturnDateOk returns a tuple with the ReturnDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnDate

`func (o *InventoryToReturnType) SetReturnDate(v string)`

SetReturnDate sets ReturnDate field to given value.

### HasReturnDate

`func (o *InventoryToReturnType) HasReturnDate() bool`

HasReturnDate returns a boolean if a field has been set.

### GetReturnRooms

`func (o *InventoryToReturnType) GetReturnRooms() []ReturnRoomType`

GetReturnRooms returns the ReturnRooms field if non-nil, zero value otherwise.

### GetReturnRoomsOk

`func (o *InventoryToReturnType) GetReturnRoomsOk() (*[]ReturnRoomType, bool)`

GetReturnRoomsOk returns a tuple with the ReturnRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnRooms

`func (o *InventoryToReturnType) SetReturnRooms(v []ReturnRoomType)`

SetReturnRooms sets ReturnRooms field to given value.

### HasReturnRooms

`func (o *InventoryToReturnType) HasReturnRooms() bool`

HasReturnRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


