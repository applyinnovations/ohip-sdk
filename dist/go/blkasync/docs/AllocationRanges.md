# AllocationRanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllocationRanges** | Pointer to [**BlockAllocationRanges**](BlockAllocationRanges.md) |  | [optional] 
**GenericRoomType** | Pointer to **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAllocationRanges

`func NewAllocationRanges() *AllocationRanges`

NewAllocationRanges instantiates a new AllocationRanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationRangesWithDefaults

`func NewAllocationRangesWithDefaults() *AllocationRanges`

NewAllocationRangesWithDefaults instantiates a new AllocationRanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllocationRanges

`func (o *AllocationRanges) GetAllocationRanges() BlockAllocationRanges`

GetAllocationRanges returns the AllocationRanges field if non-nil, zero value otherwise.

### GetAllocationRangesOk

`func (o *AllocationRanges) GetAllocationRangesOk() (*BlockAllocationRanges, bool)`

GetAllocationRangesOk returns a tuple with the AllocationRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationRanges

`func (o *AllocationRanges) SetAllocationRanges(v BlockAllocationRanges)`

SetAllocationRanges sets AllocationRanges field to given value.

### HasAllocationRanges

`func (o *AllocationRanges) HasAllocationRanges() bool`

HasAllocationRanges returns a boolean if a field has been set.

### GetGenericRoomType

`func (o *AllocationRanges) GetGenericRoomType() bool`

GetGenericRoomType returns the GenericRoomType field if non-nil, zero value otherwise.

### GetGenericRoomTypeOk

`func (o *AllocationRanges) GetGenericRoomTypeOk() (*bool, bool)`

GetGenericRoomTypeOk returns a tuple with the GenericRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomType

`func (o *AllocationRanges) SetGenericRoomType(v bool)`

SetGenericRoomType sets GenericRoomType field to given value.

### HasGenericRoomType

`func (o *AllocationRanges) HasGenericRoomType() bool`

HasGenericRoomType returns a boolean if a field has been set.

### GetLinks

`func (o *AllocationRanges) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AllocationRanges) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AllocationRanges) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AllocationRanges) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AllocationRanges) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AllocationRanges) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AllocationRanges) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AllocationRanges) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


