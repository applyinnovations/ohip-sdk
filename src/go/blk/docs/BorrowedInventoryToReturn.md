# BorrowedInventoryToReturn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdultCount** | Pointer to **int32** | The number of adults that are expected to stay in a room. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**InventoryToReturnList** | Pointer to [**[]InventoryToReturnType**](InventoryToReturnType.md) | The date and number of rooms to return to either a room type or House. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBorrowedInventoryToReturn

`func NewBorrowedInventoryToReturn() *BorrowedInventoryToReturn`

NewBorrowedInventoryToReturn instantiates a new BorrowedInventoryToReturn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBorrowedInventoryToReturnWithDefaults

`func NewBorrowedInventoryToReturnWithDefaults() *BorrowedInventoryToReturn`

NewBorrowedInventoryToReturnWithDefaults instantiates a new BorrowedInventoryToReturn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdultCount

`func (o *BorrowedInventoryToReturn) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *BorrowedInventoryToReturn) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *BorrowedInventoryToReturn) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *BorrowedInventoryToReturn) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetBlockId

`func (o *BorrowedInventoryToReturn) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BorrowedInventoryToReturn) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BorrowedInventoryToReturn) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BorrowedInventoryToReturn) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *BorrowedInventoryToReturn) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *BorrowedInventoryToReturn) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *BorrowedInventoryToReturn) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *BorrowedInventoryToReturn) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *BorrowedInventoryToReturn) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BorrowedInventoryToReturn) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BorrowedInventoryToReturn) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BorrowedInventoryToReturn) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryToReturnList

`func (o *BorrowedInventoryToReturn) GetInventoryToReturnList() []InventoryToReturnType`

GetInventoryToReturnList returns the InventoryToReturnList field if non-nil, zero value otherwise.

### GetInventoryToReturnListOk

`func (o *BorrowedInventoryToReturn) GetInventoryToReturnListOk() (*[]InventoryToReturnType, bool)`

GetInventoryToReturnListOk returns a tuple with the InventoryToReturnList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryToReturnList

`func (o *BorrowedInventoryToReturn) SetInventoryToReturnList(v []InventoryToReturnType)`

SetInventoryToReturnList sets InventoryToReturnList field to given value.

### HasInventoryToReturnList

`func (o *BorrowedInventoryToReturn) HasInventoryToReturnList() bool`

HasInventoryToReturnList returns a boolean if a field has been set.

### GetLinks

`func (o *BorrowedInventoryToReturn) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BorrowedInventoryToReturn) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BorrowedInventoryToReturn) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BorrowedInventoryToReturn) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomType

`func (o *BorrowedInventoryToReturn) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BorrowedInventoryToReturn) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BorrowedInventoryToReturn) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BorrowedInventoryToReturn) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarnings

`func (o *BorrowedInventoryToReturn) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BorrowedInventoryToReturn) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BorrowedInventoryToReturn) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BorrowedInventoryToReturn) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


