# InventoryToBorrow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdultCount** | Pointer to **int32** | The number of adults that are expected to stay in a room. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BorrowInventoryList** | Pointer to [**[]BorrowInventoryType**](BorrowInventoryType.md) | The date and number of rooms to borrow from either room type or House. | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverbookSalesAllowance** | Pointer to **bool** | Indicates whether to overbook the Sales Allowance in case there are no rooms left at the Generic Sales Allowance level. | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInventoryToBorrow

`func NewInventoryToBorrow() *InventoryToBorrow`

NewInventoryToBorrow instantiates a new InventoryToBorrow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryToBorrowWithDefaults

`func NewInventoryToBorrowWithDefaults() *InventoryToBorrow`

NewInventoryToBorrowWithDefaults instantiates a new InventoryToBorrow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdultCount

`func (o *InventoryToBorrow) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *InventoryToBorrow) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *InventoryToBorrow) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *InventoryToBorrow) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetBlockId

`func (o *InventoryToBorrow) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *InventoryToBorrow) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *InventoryToBorrow) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *InventoryToBorrow) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBorrowInventoryList

`func (o *InventoryToBorrow) GetBorrowInventoryList() []BorrowInventoryType`

GetBorrowInventoryList returns the BorrowInventoryList field if non-nil, zero value otherwise.

### GetBorrowInventoryListOk

`func (o *InventoryToBorrow) GetBorrowInventoryListOk() (*[]BorrowInventoryType, bool)`

GetBorrowInventoryListOk returns a tuple with the BorrowInventoryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowInventoryList

`func (o *InventoryToBorrow) SetBorrowInventoryList(v []BorrowInventoryType)`

SetBorrowInventoryList sets BorrowInventoryList field to given value.

### HasBorrowInventoryList

`func (o *InventoryToBorrow) HasBorrowInventoryList() bool`

HasBorrowInventoryList returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *InventoryToBorrow) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *InventoryToBorrow) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *InventoryToBorrow) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *InventoryToBorrow) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *InventoryToBorrow) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InventoryToBorrow) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InventoryToBorrow) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InventoryToBorrow) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryToBorrow) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryToBorrow) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryToBorrow) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryToBorrow) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverbookSalesAllowance

`func (o *InventoryToBorrow) GetOverbookSalesAllowance() bool`

GetOverbookSalesAllowance returns the OverbookSalesAllowance field if non-nil, zero value otherwise.

### GetOverbookSalesAllowanceOk

`func (o *InventoryToBorrow) GetOverbookSalesAllowanceOk() (*bool, bool)`

GetOverbookSalesAllowanceOk returns a tuple with the OverbookSalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookSalesAllowance

`func (o *InventoryToBorrow) SetOverbookSalesAllowance(v bool)`

SetOverbookSalesAllowance sets OverbookSalesAllowance field to given value.

### HasOverbookSalesAllowance

`func (o *InventoryToBorrow) HasOverbookSalesAllowance() bool`

HasOverbookSalesAllowance returns a boolean if a field has been set.

### GetRoomType

`func (o *InventoryToBorrow) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *InventoryToBorrow) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *InventoryToBorrow) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *InventoryToBorrow) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarnings

`func (o *InventoryToBorrow) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InventoryToBorrow) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InventoryToBorrow) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InventoryToBorrow) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


