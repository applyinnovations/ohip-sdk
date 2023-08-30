# RoomAllocationDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllocationDate** | Pointer to **time.Time** | The block date for which the allocation details are listed. | [optional] 
**Allocations** | Pointer to [**[]RoomAllocationDetailsType**](RoomAllocationDetailsType.md) |  | [optional] 

## Methods

### NewRoomAllocationDateType

`func NewRoomAllocationDateType() *RoomAllocationDateType`

NewRoomAllocationDateType instantiates a new RoomAllocationDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomAllocationDateTypeWithDefaults

`func NewRoomAllocationDateTypeWithDefaults() *RoomAllocationDateType`

NewRoomAllocationDateTypeWithDefaults instantiates a new RoomAllocationDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllocationDate

`func (o *RoomAllocationDateType) GetAllocationDate() time.Time`

GetAllocationDate returns the AllocationDate field if non-nil, zero value otherwise.

### GetAllocationDateOk

`func (o *RoomAllocationDateType) GetAllocationDateOk() (*time.Time, bool)`

GetAllocationDateOk returns a tuple with the AllocationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationDate

`func (o *RoomAllocationDateType) SetAllocationDate(v time.Time)`

SetAllocationDate sets AllocationDate field to given value.

### HasAllocationDate

`func (o *RoomAllocationDateType) HasAllocationDate() bool`

HasAllocationDate returns a boolean if a field has been set.

### GetAllocations

`func (o *RoomAllocationDateType) GetAllocations() []RoomAllocationDetailsType`

GetAllocations returns the Allocations field if non-nil, zero value otherwise.

### GetAllocationsOk

`func (o *RoomAllocationDateType) GetAllocationsOk() (*[]RoomAllocationDetailsType, bool)`

GetAllocationsOk returns a tuple with the Allocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocations

`func (o *RoomAllocationDateType) SetAllocations(v []RoomAllocationDetailsType)`

SetAllocations sets Allocations field to given value.

### HasAllocations

`func (o *RoomAllocationDateType) HasAllocations() bool`

HasAllocations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


