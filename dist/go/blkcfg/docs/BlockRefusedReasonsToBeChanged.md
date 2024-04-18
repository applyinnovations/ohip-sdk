# BlockRefusedReasonsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRefusedReasons** | Pointer to [**[]BlockRefusedReasonType**](BlockRefusedReasonType.md) | List of Block Refused Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRefusedReasonsToBeChanged

`func NewBlockRefusedReasonsToBeChanged() *BlockRefusedReasonsToBeChanged`

NewBlockRefusedReasonsToBeChanged instantiates a new BlockRefusedReasonsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRefusedReasonsToBeChangedWithDefaults

`func NewBlockRefusedReasonsToBeChangedWithDefaults() *BlockRefusedReasonsToBeChanged`

NewBlockRefusedReasonsToBeChangedWithDefaults instantiates a new BlockRefusedReasonsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRefusedReasons

`func (o *BlockRefusedReasonsToBeChanged) GetBlockRefusedReasons() []BlockRefusedReasonType`

GetBlockRefusedReasons returns the BlockRefusedReasons field if non-nil, zero value otherwise.

### GetBlockRefusedReasonsOk

`func (o *BlockRefusedReasonsToBeChanged) GetBlockRefusedReasonsOk() (*[]BlockRefusedReasonType, bool)`

GetBlockRefusedReasonsOk returns a tuple with the BlockRefusedReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRefusedReasons

`func (o *BlockRefusedReasonsToBeChanged) SetBlockRefusedReasons(v []BlockRefusedReasonType)`

SetBlockRefusedReasons sets BlockRefusedReasons field to given value.

### HasBlockRefusedReasons

`func (o *BlockRefusedReasonsToBeChanged) HasBlockRefusedReasons() bool`

HasBlockRefusedReasons returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRefusedReasonsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRefusedReasonsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRefusedReasonsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRefusedReasonsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRefusedReasonsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRefusedReasonsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRefusedReasonsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRefusedReasonsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

