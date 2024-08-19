# AllocationGridByRoomTypesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllocationRoomTypes** | Pointer to [**[]AllocationGridByRoomTypeType**](AllocationGridByRoomTypeType.md) | Allocation objects of a block grouped by room types. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**GenericRoomType** | Pointer to **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel code for the Set Allocation Grid request. | [optional] 

## Methods

### NewAllocationGridByRoomTypesType

`func NewAllocationGridByRoomTypesType() *AllocationGridByRoomTypesType`

NewAllocationGridByRoomTypesType instantiates a new AllocationGridByRoomTypesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationGridByRoomTypesTypeWithDefaults

`func NewAllocationGridByRoomTypesTypeWithDefaults() *AllocationGridByRoomTypesType`

NewAllocationGridByRoomTypesTypeWithDefaults instantiates a new AllocationGridByRoomTypesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllocationRoomTypes

`func (o *AllocationGridByRoomTypesType) GetAllocationRoomTypes() []AllocationGridByRoomTypeType`

GetAllocationRoomTypes returns the AllocationRoomTypes field if non-nil, zero value otherwise.

### GetAllocationRoomTypesOk

`func (o *AllocationGridByRoomTypesType) GetAllocationRoomTypesOk() (*[]AllocationGridByRoomTypeType, bool)`

GetAllocationRoomTypesOk returns a tuple with the AllocationRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationRoomTypes

`func (o *AllocationGridByRoomTypesType) SetAllocationRoomTypes(v []AllocationGridByRoomTypeType)`

SetAllocationRoomTypes sets AllocationRoomTypes field to given value.

### HasAllocationRoomTypes

`func (o *AllocationGridByRoomTypesType) HasAllocationRoomTypes() bool`

HasAllocationRoomTypes returns a boolean if a field has been set.

### GetBlockId

`func (o *AllocationGridByRoomTypesType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *AllocationGridByRoomTypesType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *AllocationGridByRoomTypesType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *AllocationGridByRoomTypesType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetGenericRoomType

`func (o *AllocationGridByRoomTypesType) GetGenericRoomType() bool`

GetGenericRoomType returns the GenericRoomType field if non-nil, zero value otherwise.

### GetGenericRoomTypeOk

`func (o *AllocationGridByRoomTypesType) GetGenericRoomTypeOk() (*bool, bool)`

GetGenericRoomTypeOk returns a tuple with the GenericRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomType

`func (o *AllocationGridByRoomTypesType) SetGenericRoomType(v bool)`

SetGenericRoomType sets GenericRoomType field to given value.

### HasGenericRoomType

`func (o *AllocationGridByRoomTypesType) HasGenericRoomType() bool`

HasGenericRoomType returns a boolean if a field has been set.

### GetHotelId

`func (o *AllocationGridByRoomTypesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AllocationGridByRoomTypesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AllocationGridByRoomTypesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AllocationGridByRoomTypesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


