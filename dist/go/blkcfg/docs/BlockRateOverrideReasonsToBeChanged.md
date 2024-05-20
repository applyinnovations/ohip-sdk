# BlockRateOverrideReasonsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateOverrideReasons** | Pointer to [**[]BlockRateOverrideReasonType**](BlockRateOverrideReasonType.md) | List of Block Rate Override Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRateOverrideReasonsToBeChanged

`func NewBlockRateOverrideReasonsToBeChanged() *BlockRateOverrideReasonsToBeChanged`

NewBlockRateOverrideReasonsToBeChanged instantiates a new BlockRateOverrideReasonsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRateOverrideReasonsToBeChangedWithDefaults

`func NewBlockRateOverrideReasonsToBeChangedWithDefaults() *BlockRateOverrideReasonsToBeChanged`

NewBlockRateOverrideReasonsToBeChangedWithDefaults instantiates a new BlockRateOverrideReasonsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsToBeChanged) GetBlockRateOverrideReasons() []BlockRateOverrideReasonType`

GetBlockRateOverrideReasons returns the BlockRateOverrideReasons field if non-nil, zero value otherwise.

### GetBlockRateOverrideReasonsOk

`func (o *BlockRateOverrideReasonsToBeChanged) GetBlockRateOverrideReasonsOk() (*[]BlockRateOverrideReasonType, bool)`

GetBlockRateOverrideReasonsOk returns a tuple with the BlockRateOverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsToBeChanged) SetBlockRateOverrideReasons(v []BlockRateOverrideReasonType)`

SetBlockRateOverrideReasons sets BlockRateOverrideReasons field to given value.

### HasBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsToBeChanged) HasBlockRateOverrideReasons() bool`

HasBlockRateOverrideReasons returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRateOverrideReasonsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRateOverrideReasonsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRateOverrideReasonsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRateOverrideReasonsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRateOverrideReasonsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRateOverrideReasonsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRateOverrideReasonsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRateOverrideReasonsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


