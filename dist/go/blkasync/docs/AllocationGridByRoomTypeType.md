# AllocationGridByRoomTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllocationGridDates** | Pointer to [**[]AllocationGridByDateRangesType**](AllocationGridByDateRangesType.md) | Allocation objects for a block by date ranges. | [optional] 
**SellLimitGridDates** | Pointer to [**[]SellLimitGridByDateRangeType**](SellLimitGridByDateRangeType.md) | Sell limits for a block by date ranges. | [optional] 
**RoomType** | Pointer to **string** | Indicates the room type of the Allocation objects. | [optional] 

## Methods

### NewAllocationGridByRoomTypeType

`func NewAllocationGridByRoomTypeType() *AllocationGridByRoomTypeType`

NewAllocationGridByRoomTypeType instantiates a new AllocationGridByRoomTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationGridByRoomTypeTypeWithDefaults

`func NewAllocationGridByRoomTypeTypeWithDefaults() *AllocationGridByRoomTypeType`

NewAllocationGridByRoomTypeTypeWithDefaults instantiates a new AllocationGridByRoomTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllocationGridDates

`func (o *AllocationGridByRoomTypeType) GetAllocationGridDates() []AllocationGridByDateRangesType`

GetAllocationGridDates returns the AllocationGridDates field if non-nil, zero value otherwise.

### GetAllocationGridDatesOk

`func (o *AllocationGridByRoomTypeType) GetAllocationGridDatesOk() (*[]AllocationGridByDateRangesType, bool)`

GetAllocationGridDatesOk returns a tuple with the AllocationGridDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationGridDates

`func (o *AllocationGridByRoomTypeType) SetAllocationGridDates(v []AllocationGridByDateRangesType)`

SetAllocationGridDates sets AllocationGridDates field to given value.

### HasAllocationGridDates

`func (o *AllocationGridByRoomTypeType) HasAllocationGridDates() bool`

HasAllocationGridDates returns a boolean if a field has been set.

### GetSellLimitGridDates

`func (o *AllocationGridByRoomTypeType) GetSellLimitGridDates() []SellLimitGridByDateRangeType`

GetSellLimitGridDates returns the SellLimitGridDates field if non-nil, zero value otherwise.

### GetSellLimitGridDatesOk

`func (o *AllocationGridByRoomTypeType) GetSellLimitGridDatesOk() (*[]SellLimitGridByDateRangeType, bool)`

GetSellLimitGridDatesOk returns a tuple with the SellLimitGridDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitGridDates

`func (o *AllocationGridByRoomTypeType) SetSellLimitGridDates(v []SellLimitGridByDateRangeType)`

SetSellLimitGridDates sets SellLimitGridDates field to given value.

### HasSellLimitGridDates

`func (o *AllocationGridByRoomTypeType) HasSellLimitGridDates() bool`

HasSellLimitGridDates returns a boolean if a field has been set.

### GetRoomType

`func (o *AllocationGridByRoomTypeType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *AllocationGridByRoomTypeType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *AllocationGridByRoomTypeType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *AllocationGridByRoomTypeType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


