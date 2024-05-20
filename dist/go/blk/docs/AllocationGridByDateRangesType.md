# AllocationGridByDateRangesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Allocation** | Pointer to **string** | Indicates the type of the Allocation objects. | [optional] 
**RoomAllocationInfo** | Pointer to [**[]AllocationGridByDateRangeType**](AllocationGridByDateRangeType.md) | Allocation objects for a block. | [optional] 

## Methods

### NewAllocationGridByDateRangesType

`func NewAllocationGridByDateRangesType() *AllocationGridByDateRangesType`

NewAllocationGridByDateRangesType instantiates a new AllocationGridByDateRangesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationGridByDateRangesTypeWithDefaults

`func NewAllocationGridByDateRangesTypeWithDefaults() *AllocationGridByDateRangesType`

NewAllocationGridByDateRangesTypeWithDefaults instantiates a new AllocationGridByDateRangesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllocation

`func (o *AllocationGridByDateRangesType) GetAllocation() string`

GetAllocation returns the Allocation field if non-nil, zero value otherwise.

### GetAllocationOk

`func (o *AllocationGridByDateRangesType) GetAllocationOk() (*string, bool)`

GetAllocationOk returns a tuple with the Allocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocation

`func (o *AllocationGridByDateRangesType) SetAllocation(v string)`

SetAllocation sets Allocation field to given value.

### HasAllocation

`func (o *AllocationGridByDateRangesType) HasAllocation() bool`

HasAllocation returns a boolean if a field has been set.

### GetRoomAllocationInfo

`func (o *AllocationGridByDateRangesType) GetRoomAllocationInfo() []AllocationGridByDateRangeType`

GetRoomAllocationInfo returns the RoomAllocationInfo field if non-nil, zero value otherwise.

### GetRoomAllocationInfoOk

`func (o *AllocationGridByDateRangesType) GetRoomAllocationInfoOk() (*[]AllocationGridByDateRangeType, bool)`

GetRoomAllocationInfoOk returns a tuple with the RoomAllocationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocationInfo

`func (o *AllocationGridByDateRangesType) SetRoomAllocationInfo(v []AllocationGridByDateRangeType)`

SetRoomAllocationInfo sets RoomAllocationInfo field to given value.

### HasRoomAllocationInfo

`func (o *AllocationGridByDateRangesType) HasRoomAllocationInfo() bool`

HasRoomAllocationInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


