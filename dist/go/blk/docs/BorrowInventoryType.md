# BorrowInventoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BorrowDate** | Pointer to **string** | The date on which rooms need to be borrowed for the block either from another room type in the block or from House if the block is elastic. | [optional] 
**BorrowRooms** | Pointer to [**[]BorrowRoomType**](BorrowRoomType.md) | Specifies the number of rooms to be borrowed from the room type or House. | [optional] 

## Methods

### NewBorrowInventoryType

`func NewBorrowInventoryType() *BorrowInventoryType`

NewBorrowInventoryType instantiates a new BorrowInventoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBorrowInventoryTypeWithDefaults

`func NewBorrowInventoryTypeWithDefaults() *BorrowInventoryType`

NewBorrowInventoryTypeWithDefaults instantiates a new BorrowInventoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BorrowInventoryType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BorrowInventoryType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BorrowInventoryType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BorrowInventoryType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBorrowDate

`func (o *BorrowInventoryType) GetBorrowDate() string`

GetBorrowDate returns the BorrowDate field if non-nil, zero value otherwise.

### GetBorrowDateOk

`func (o *BorrowInventoryType) GetBorrowDateOk() (*string, bool)`

GetBorrowDateOk returns a tuple with the BorrowDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowDate

`func (o *BorrowInventoryType) SetBorrowDate(v string)`

SetBorrowDate sets BorrowDate field to given value.

### HasBorrowDate

`func (o *BorrowInventoryType) HasBorrowDate() bool`

HasBorrowDate returns a boolean if a field has been set.

### GetBorrowRooms

`func (o *BorrowInventoryType) GetBorrowRooms() []BorrowRoomType`

GetBorrowRooms returns the BorrowRooms field if non-nil, zero value otherwise.

### GetBorrowRoomsOk

`func (o *BorrowInventoryType) GetBorrowRoomsOk() (*[]BorrowRoomType, bool)`

GetBorrowRoomsOk returns a tuple with the BorrowRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowRooms

`func (o *BorrowInventoryType) SetBorrowRooms(v []BorrowRoomType)`

SetBorrowRooms sets BorrowRooms field to given value.

### HasBorrowRooms

`func (o *BorrowInventoryType) HasBorrowRooms() bool`

HasBorrowRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


