# BlockAccessExclusionInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAccessExclusions** | Pointer to [**BlockAccessExclusionsType**](BlockAccessExclusionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAccessExclusionInfo

`func NewBlockAccessExclusionInfo() *BlockAccessExclusionInfo`

NewBlockAccessExclusionInfo instantiates a new BlockAccessExclusionInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAccessExclusionInfoWithDefaults

`func NewBlockAccessExclusionInfoWithDefaults() *BlockAccessExclusionInfo`

NewBlockAccessExclusionInfoWithDefaults instantiates a new BlockAccessExclusionInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAccessExclusions

`func (o *BlockAccessExclusionInfo) GetBlockAccessExclusions() BlockAccessExclusionsType`

GetBlockAccessExclusions returns the BlockAccessExclusions field if non-nil, zero value otherwise.

### GetBlockAccessExclusionsOk

`func (o *BlockAccessExclusionInfo) GetBlockAccessExclusionsOk() (*BlockAccessExclusionsType, bool)`

GetBlockAccessExclusionsOk returns a tuple with the BlockAccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAccessExclusions

`func (o *BlockAccessExclusionInfo) SetBlockAccessExclusions(v BlockAccessExclusionsType)`

SetBlockAccessExclusions sets BlockAccessExclusions field to given value.

### HasBlockAccessExclusions

`func (o *BlockAccessExclusionInfo) HasBlockAccessExclusions() bool`

HasBlockAccessExclusions returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAccessExclusionInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAccessExclusionInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAccessExclusionInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAccessExclusionInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAccessExclusionInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAccessExclusionInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAccessExclusionInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAccessExclusionInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


