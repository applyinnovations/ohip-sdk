# BlockAllocationWashType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the block belongs to. | [optional] 
**StartDate** | Pointer to **string** | Start date for the wash operation. | [optional] 
**EndDate** | Pointer to **string** | End date for the wash operation. | [optional] 
**RoomTypes** | Pointer to **[]string** | List of room types on which wash operation should be performed. | [optional] 
**IncludedDays** | Pointer to **string** | String of length seven, each position representing various days of week from Sunday to Saturday, each character is either 0 or 1 indicating whether to apply wash for that day. | [optional] 
**ByValue** | Pointer to **bool** | A true value indicates that absolute value is being passed for occupancy, else it indicates that a percentage value is passed. | [optional] 
**BlockInventory** | Pointer to [**BlockGridInvType**](BlockGridInvType.md) |  | [optional] 
**PercentByDay** | Pointer to **bool** | A true value indicates that percentage values are being passed day-wise. | [optional] 
**OccPercentByDay** | Pointer to [**BlockAllocationWashTypeOccPercentByDay**](BlockAllocationWashTypeOccPercentByDay.md) |  | [optional] 
**GenericRoomType** | Pointer to **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | [optional] 

## Methods

### NewBlockAllocationWashType

`func NewBlockAllocationWashType() *BlockAllocationWashType`

NewBlockAllocationWashType instantiates a new BlockAllocationWashType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAllocationWashTypeWithDefaults

`func NewBlockAllocationWashTypeWithDefaults() *BlockAllocationWashType`

NewBlockAllocationWashTypeWithDefaults instantiates a new BlockAllocationWashType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BlockAllocationWashType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockAllocationWashType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockAllocationWashType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockAllocationWashType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAllocationWashType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAllocationWashType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAllocationWashType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAllocationWashType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockAllocationWashType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockAllocationWashType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockAllocationWashType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockAllocationWashType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockAllocationWashType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockAllocationWashType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockAllocationWashType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockAllocationWashType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetRoomTypes

`func (o *BlockAllocationWashType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockAllocationWashType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockAllocationWashType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockAllocationWashType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetIncludedDays

`func (o *BlockAllocationWashType) GetIncludedDays() string`

GetIncludedDays returns the IncludedDays field if non-nil, zero value otherwise.

### GetIncludedDaysOk

`func (o *BlockAllocationWashType) GetIncludedDaysOk() (*string, bool)`

GetIncludedDaysOk returns a tuple with the IncludedDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedDays

`func (o *BlockAllocationWashType) SetIncludedDays(v string)`

SetIncludedDays sets IncludedDays field to given value.

### HasIncludedDays

`func (o *BlockAllocationWashType) HasIncludedDays() bool`

HasIncludedDays returns a boolean if a field has been set.

### GetByValue

`func (o *BlockAllocationWashType) GetByValue() bool`

GetByValue returns the ByValue field if non-nil, zero value otherwise.

### GetByValueOk

`func (o *BlockAllocationWashType) GetByValueOk() (*bool, bool)`

GetByValueOk returns a tuple with the ByValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByValue

`func (o *BlockAllocationWashType) SetByValue(v bool)`

SetByValue sets ByValue field to given value.

### HasByValue

`func (o *BlockAllocationWashType) HasByValue() bool`

HasByValue returns a boolean if a field has been set.

### GetBlockInventory

`func (o *BlockAllocationWashType) GetBlockInventory() BlockGridInvType`

GetBlockInventory returns the BlockInventory field if non-nil, zero value otherwise.

### GetBlockInventoryOk

`func (o *BlockAllocationWashType) GetBlockInventoryOk() (*BlockGridInvType, bool)`

GetBlockInventoryOk returns a tuple with the BlockInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInventory

`func (o *BlockAllocationWashType) SetBlockInventory(v BlockGridInvType)`

SetBlockInventory sets BlockInventory field to given value.

### HasBlockInventory

`func (o *BlockAllocationWashType) HasBlockInventory() bool`

HasBlockInventory returns a boolean if a field has been set.

### GetPercentByDay

`func (o *BlockAllocationWashType) GetPercentByDay() bool`

GetPercentByDay returns the PercentByDay field if non-nil, zero value otherwise.

### GetPercentByDayOk

`func (o *BlockAllocationWashType) GetPercentByDayOk() (*bool, bool)`

GetPercentByDayOk returns a tuple with the PercentByDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentByDay

`func (o *BlockAllocationWashType) SetPercentByDay(v bool)`

SetPercentByDay sets PercentByDay field to given value.

### HasPercentByDay

`func (o *BlockAllocationWashType) HasPercentByDay() bool`

HasPercentByDay returns a boolean if a field has been set.

### GetOccPercentByDay

`func (o *BlockAllocationWashType) GetOccPercentByDay() BlockAllocationWashTypeOccPercentByDay`

GetOccPercentByDay returns the OccPercentByDay field if non-nil, zero value otherwise.

### GetOccPercentByDayOk

`func (o *BlockAllocationWashType) GetOccPercentByDayOk() (*BlockAllocationWashTypeOccPercentByDay, bool)`

GetOccPercentByDayOk returns a tuple with the OccPercentByDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccPercentByDay

`func (o *BlockAllocationWashType) SetOccPercentByDay(v BlockAllocationWashTypeOccPercentByDay)`

SetOccPercentByDay sets OccPercentByDay field to given value.

### HasOccPercentByDay

`func (o *BlockAllocationWashType) HasOccPercentByDay() bool`

HasOccPercentByDay returns a boolean if a field has been set.

### GetGenericRoomType

`func (o *BlockAllocationWashType) GetGenericRoomType() bool`

GetGenericRoomType returns the GenericRoomType field if non-nil, zero value otherwise.

### GetGenericRoomTypeOk

`func (o *BlockAllocationWashType) GetGenericRoomTypeOk() (*bool, bool)`

GetGenericRoomTypeOk returns a tuple with the GenericRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomType

`func (o *BlockAllocationWashType) SetGenericRoomType(v bool)`

SetGenericRoomType sets GenericRoomType field to given value.

### HasGenericRoomType

`func (o *BlockAllocationWashType) HasGenericRoomType() bool`

HasGenericRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


