# BlockAccessExclusion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAccessExclusions** | Pointer to [**BlockAccessExclusionBlockAccessExclusions**](BlockAccessExclusionBlockAccessExclusions.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAccessExclusion

`func NewBlockAccessExclusion() *BlockAccessExclusion`

NewBlockAccessExclusion instantiates a new BlockAccessExclusion object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAccessExclusionWithDefaults

`func NewBlockAccessExclusionWithDefaults() *BlockAccessExclusion`

NewBlockAccessExclusionWithDefaults instantiates a new BlockAccessExclusion object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAccessExclusions

`func (o *BlockAccessExclusion) GetBlockAccessExclusions() BlockAccessExclusionBlockAccessExclusions`

GetBlockAccessExclusions returns the BlockAccessExclusions field if non-nil, zero value otherwise.

### GetBlockAccessExclusionsOk

`func (o *BlockAccessExclusion) GetBlockAccessExclusionsOk() (*BlockAccessExclusionBlockAccessExclusions, bool)`

GetBlockAccessExclusionsOk returns a tuple with the BlockAccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAccessExclusions

`func (o *BlockAccessExclusion) SetBlockAccessExclusions(v BlockAccessExclusionBlockAccessExclusions)`

SetBlockAccessExclusions sets BlockAccessExclusions field to given value.

### HasBlockAccessExclusions

`func (o *BlockAccessExclusion) HasBlockAccessExclusions() bool`

HasBlockAccessExclusions returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAccessExclusion) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAccessExclusion) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAccessExclusion) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAccessExclusion) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAccessExclusion) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAccessExclusion) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAccessExclusion) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAccessExclusion) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


