# BlockCancellationReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCancellationReasons** | Pointer to [**[]BlockCancellationReasonType**](BlockCancellationReasonType.md) | List of Block Cancellation Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockCancellationReasonsCriteria

`func NewBlockCancellationReasonsCriteria() *BlockCancellationReasonsCriteria`

NewBlockCancellationReasonsCriteria instantiates a new BlockCancellationReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCancellationReasonsCriteriaWithDefaults

`func NewBlockCancellationReasonsCriteriaWithDefaults() *BlockCancellationReasonsCriteria`

NewBlockCancellationReasonsCriteriaWithDefaults instantiates a new BlockCancellationReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCancellationReasons

`func (o *BlockCancellationReasonsCriteria) GetBlockCancellationReasons() []BlockCancellationReasonType`

GetBlockCancellationReasons returns the BlockCancellationReasons field if non-nil, zero value otherwise.

### GetBlockCancellationReasonsOk

`func (o *BlockCancellationReasonsCriteria) GetBlockCancellationReasonsOk() (*[]BlockCancellationReasonType, bool)`

GetBlockCancellationReasonsOk returns a tuple with the BlockCancellationReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCancellationReasons

`func (o *BlockCancellationReasonsCriteria) SetBlockCancellationReasons(v []BlockCancellationReasonType)`

SetBlockCancellationReasons sets BlockCancellationReasons field to given value.

### HasBlockCancellationReasons

`func (o *BlockCancellationReasonsCriteria) HasBlockCancellationReasons() bool`

HasBlockCancellationReasons returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCancellationReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCancellationReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCancellationReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCancellationReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCancellationReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCancellationReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCancellationReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCancellationReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


