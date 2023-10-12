# RoomAllocationTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomAllocationInfo** | Pointer to [**[]RoomAllocationInfoType**](RoomAllocationInfoType.md) | Allocation objects for a block. | [optional] 
**Allocation** | Pointer to [**AllocationType**](AllocationType.md) |  | [optional] 

## Methods

### NewRoomAllocationTypeType

`func NewRoomAllocationTypeType() *RoomAllocationTypeType`

NewRoomAllocationTypeType instantiates a new RoomAllocationTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomAllocationTypeTypeWithDefaults

`func NewRoomAllocationTypeTypeWithDefaults() *RoomAllocationTypeType`

NewRoomAllocationTypeTypeWithDefaults instantiates a new RoomAllocationTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomAllocationInfo

`func (o *RoomAllocationTypeType) GetRoomAllocationInfo() []RoomAllocationInfoType`

GetRoomAllocationInfo returns the RoomAllocationInfo field if non-nil, zero value otherwise.

### GetRoomAllocationInfoOk

`func (o *RoomAllocationTypeType) GetRoomAllocationInfoOk() (*[]RoomAllocationInfoType, bool)`

GetRoomAllocationInfoOk returns a tuple with the RoomAllocationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocationInfo

`func (o *RoomAllocationTypeType) SetRoomAllocationInfo(v []RoomAllocationInfoType)`

SetRoomAllocationInfo sets RoomAllocationInfo field to given value.

### HasRoomAllocationInfo

`func (o *RoomAllocationTypeType) HasRoomAllocationInfo() bool`

HasRoomAllocationInfo returns a boolean if a field has been set.

### GetAllocation

`func (o *RoomAllocationTypeType) GetAllocation() AllocationType`

GetAllocation returns the Allocation field if non-nil, zero value otherwise.

### GetAllocationOk

`func (o *RoomAllocationTypeType) GetAllocationOk() (*AllocationType, bool)`

GetAllocationOk returns a tuple with the Allocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocation

`func (o *RoomAllocationTypeType) SetAllocation(v AllocationType)`

SetAllocation sets Allocation field to given value.

### HasAllocation

`func (o *RoomAllocationTypeType) HasAllocation() bool`

HasAllocation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


