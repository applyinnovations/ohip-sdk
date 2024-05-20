# BorrowCandidateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BorrowDate** | Pointer to **string** | The date on which rooms need to be borrowed for the block. | [optional] 
**BorrowableInventoryList** | Pointer to [**[]BorrowableInventoryType**](BorrowableInventoryType.md) | Holds the information about a borrowable room type and available rooms for each borrow date. | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel that the block belongs to. | [optional] 
**RequiredRooms** | Pointer to **int32** | The number of rooms that need to be borrowed. | [optional] 

## Methods

### NewBorrowCandidateType

`func NewBorrowCandidateType() *BorrowCandidateType`

NewBorrowCandidateType instantiates a new BorrowCandidateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBorrowCandidateTypeWithDefaults

`func NewBorrowCandidateTypeWithDefaults() *BorrowCandidateType`

NewBorrowCandidateTypeWithDefaults instantiates a new BorrowCandidateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BorrowCandidateType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BorrowCandidateType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BorrowCandidateType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BorrowCandidateType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBorrowDate

`func (o *BorrowCandidateType) GetBorrowDate() string`

GetBorrowDate returns the BorrowDate field if non-nil, zero value otherwise.

### GetBorrowDateOk

`func (o *BorrowCandidateType) GetBorrowDateOk() (*string, bool)`

GetBorrowDateOk returns a tuple with the BorrowDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowDate

`func (o *BorrowCandidateType) SetBorrowDate(v string)`

SetBorrowDate sets BorrowDate field to given value.

### HasBorrowDate

`func (o *BorrowCandidateType) HasBorrowDate() bool`

HasBorrowDate returns a boolean if a field has been set.

### GetBorrowableInventoryList

`func (o *BorrowCandidateType) GetBorrowableInventoryList() []BorrowableInventoryType`

GetBorrowableInventoryList returns the BorrowableInventoryList field if non-nil, zero value otherwise.

### GetBorrowableInventoryListOk

`func (o *BorrowCandidateType) GetBorrowableInventoryListOk() (*[]BorrowableInventoryType, bool)`

GetBorrowableInventoryListOk returns a tuple with the BorrowableInventoryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowableInventoryList

`func (o *BorrowCandidateType) SetBorrowableInventoryList(v []BorrowableInventoryType)`

SetBorrowableInventoryList sets BorrowableInventoryList field to given value.

### HasBorrowableInventoryList

`func (o *BorrowCandidateType) HasBorrowableInventoryList() bool`

HasBorrowableInventoryList returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *BorrowCandidateType) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *BorrowCandidateType) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *BorrowCandidateType) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *BorrowCandidateType) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *BorrowCandidateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BorrowCandidateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BorrowCandidateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BorrowCandidateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRequiredRooms

`func (o *BorrowCandidateType) GetRequiredRooms() int32`

GetRequiredRooms returns the RequiredRooms field if non-nil, zero value otherwise.

### GetRequiredRoomsOk

`func (o *BorrowCandidateType) GetRequiredRoomsOk() (*int32, bool)`

GetRequiredRoomsOk returns a tuple with the RequiredRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredRooms

`func (o *BorrowCandidateType) SetRequiredRooms(v int32)`

SetRequiredRooms sets RequiredRooms field to given value.

### HasRequiredRooms

`func (o *BorrowCandidateType) HasRequiredRooms() bool`

HasRequiredRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


