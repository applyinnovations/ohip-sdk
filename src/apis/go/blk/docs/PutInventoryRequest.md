# PutInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**AdultCount** | Pointer to **int32** | The number of adults that are expected to stay in a room. | [optional] 
**OverbookSalesAllowance** | Pointer to **bool** | Indicates whether to overbook the Sales Allowance in case there are no rooms left at the Generic Sales Allowance level. | [optional] 
**BorrowInventoryList** | Pointer to [**[]BorrowInventoryType**](BorrowInventoryType.md) | The date and number of rooms to borrow from either room type or House. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutInventoryRequest

`func NewPutInventoryRequest() *PutInventoryRequest`

NewPutInventoryRequest instantiates a new PutInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutInventoryRequestWithDefaults

`func NewPutInventoryRequestWithDefaults() *PutInventoryRequest`

NewPutInventoryRequestWithDefaults instantiates a new PutInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutInventoryRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutInventoryRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutInventoryRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutInventoryRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *PutInventoryRequest) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *PutInventoryRequest) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *PutInventoryRequest) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *PutInventoryRequest) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *PutInventoryRequest) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *PutInventoryRequest) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *PutInventoryRequest) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *PutInventoryRequest) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetRoomType

`func (o *PutInventoryRequest) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *PutInventoryRequest) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *PutInventoryRequest) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *PutInventoryRequest) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetAdultCount

`func (o *PutInventoryRequest) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *PutInventoryRequest) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *PutInventoryRequest) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *PutInventoryRequest) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetOverbookSalesAllowance

`func (o *PutInventoryRequest) GetOverbookSalesAllowance() bool`

GetOverbookSalesAllowance returns the OverbookSalesAllowance field if non-nil, zero value otherwise.

### GetOverbookSalesAllowanceOk

`func (o *PutInventoryRequest) GetOverbookSalesAllowanceOk() (*bool, bool)`

GetOverbookSalesAllowanceOk returns a tuple with the OverbookSalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookSalesAllowance

`func (o *PutInventoryRequest) SetOverbookSalesAllowance(v bool)`

SetOverbookSalesAllowance sets OverbookSalesAllowance field to given value.

### HasOverbookSalesAllowance

`func (o *PutInventoryRequest) HasOverbookSalesAllowance() bool`

HasOverbookSalesAllowance returns a boolean if a field has been set.

### GetBorrowInventoryList

`func (o *PutInventoryRequest) GetBorrowInventoryList() []BorrowInventoryType`

GetBorrowInventoryList returns the BorrowInventoryList field if non-nil, zero value otherwise.

### GetBorrowInventoryListOk

`func (o *PutInventoryRequest) GetBorrowInventoryListOk() (*[]BorrowInventoryType, bool)`

GetBorrowInventoryListOk returns a tuple with the BorrowInventoryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowInventoryList

`func (o *PutInventoryRequest) SetBorrowInventoryList(v []BorrowInventoryType)`

SetBorrowInventoryList sets BorrowInventoryList field to given value.

### HasBorrowInventoryList

`func (o *PutInventoryRequest) HasBorrowInventoryList() bool`

HasBorrowInventoryList returns a boolean if a field has been set.

### GetLinks

`func (o *PutInventoryRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutInventoryRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutInventoryRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutInventoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutInventoryRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutInventoryRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutInventoryRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutInventoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


