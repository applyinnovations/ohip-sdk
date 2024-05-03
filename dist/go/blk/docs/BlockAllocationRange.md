# BlockAllocationRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAllocationRange** | Pointer to [**BlockAllocationRangeType**](BlockAllocationRangeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAllocationRange

`func NewBlockAllocationRange() *BlockAllocationRange`

NewBlockAllocationRange instantiates a new BlockAllocationRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAllocationRangeWithDefaults

`func NewBlockAllocationRangeWithDefaults() *BlockAllocationRange`

NewBlockAllocationRangeWithDefaults instantiates a new BlockAllocationRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAllocationRange

`func (o *BlockAllocationRange) GetBlockAllocationRange() BlockAllocationRangeType`

GetBlockAllocationRange returns the BlockAllocationRange field if non-nil, zero value otherwise.

### GetBlockAllocationRangeOk

`func (o *BlockAllocationRange) GetBlockAllocationRangeOk() (*BlockAllocationRangeType, bool)`

GetBlockAllocationRangeOk returns a tuple with the BlockAllocationRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAllocationRange

`func (o *BlockAllocationRange) SetBlockAllocationRange(v BlockAllocationRangeType)`

SetBlockAllocationRange sets BlockAllocationRange field to given value.

### HasBlockAllocationRange

`func (o *BlockAllocationRange) HasBlockAllocationRange() bool`

HasBlockAllocationRange returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAllocationRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAllocationRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAllocationRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAllocationRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAllocationRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAllocationRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAllocationRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAllocationRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


