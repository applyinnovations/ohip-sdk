# BlockRateOverrideReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateOverrideReasons** | Pointer to [**[]BlockRateOverrideReasonType**](BlockRateOverrideReasonType.md) | List of Block Rate Override Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRateOverrideReasonsCriteria

`func NewBlockRateOverrideReasonsCriteria() *BlockRateOverrideReasonsCriteria`

NewBlockRateOverrideReasonsCriteria instantiates a new BlockRateOverrideReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRateOverrideReasonsCriteriaWithDefaults

`func NewBlockRateOverrideReasonsCriteriaWithDefaults() *BlockRateOverrideReasonsCriteria`

NewBlockRateOverrideReasonsCriteriaWithDefaults instantiates a new BlockRateOverrideReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsCriteria) GetBlockRateOverrideReasons() []BlockRateOverrideReasonType`

GetBlockRateOverrideReasons returns the BlockRateOverrideReasons field if non-nil, zero value otherwise.

### GetBlockRateOverrideReasonsOk

`func (o *BlockRateOverrideReasonsCriteria) GetBlockRateOverrideReasonsOk() (*[]BlockRateOverrideReasonType, bool)`

GetBlockRateOverrideReasonsOk returns a tuple with the BlockRateOverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsCriteria) SetBlockRateOverrideReasons(v []BlockRateOverrideReasonType)`

SetBlockRateOverrideReasons sets BlockRateOverrideReasons field to given value.

### HasBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsCriteria) HasBlockRateOverrideReasons() bool`

HasBlockRateOverrideReasons returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRateOverrideReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRateOverrideReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRateOverrideReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRateOverrideReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRateOverrideReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRateOverrideReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRateOverrideReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRateOverrideReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


