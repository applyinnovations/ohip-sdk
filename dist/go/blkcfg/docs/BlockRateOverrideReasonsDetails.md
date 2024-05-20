# BlockRateOverrideReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateOverrideReasons** | Pointer to [**[]BlockRateOverrideReasonType**](BlockRateOverrideReasonType.md) | List of Block Rate Override Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRateOverrideReasonsDetails

`func NewBlockRateOverrideReasonsDetails() *BlockRateOverrideReasonsDetails`

NewBlockRateOverrideReasonsDetails instantiates a new BlockRateOverrideReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRateOverrideReasonsDetailsWithDefaults

`func NewBlockRateOverrideReasonsDetailsWithDefaults() *BlockRateOverrideReasonsDetails`

NewBlockRateOverrideReasonsDetailsWithDefaults instantiates a new BlockRateOverrideReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsDetails) GetBlockRateOverrideReasons() []BlockRateOverrideReasonType`

GetBlockRateOverrideReasons returns the BlockRateOverrideReasons field if non-nil, zero value otherwise.

### GetBlockRateOverrideReasonsOk

`func (o *BlockRateOverrideReasonsDetails) GetBlockRateOverrideReasonsOk() (*[]BlockRateOverrideReasonType, bool)`

GetBlockRateOverrideReasonsOk returns a tuple with the BlockRateOverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsDetails) SetBlockRateOverrideReasons(v []BlockRateOverrideReasonType)`

SetBlockRateOverrideReasons sets BlockRateOverrideReasons field to given value.

### HasBlockRateOverrideReasons

`func (o *BlockRateOverrideReasonsDetails) HasBlockRateOverrideReasons() bool`

HasBlockRateOverrideReasons returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRateOverrideReasonsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRateOverrideReasonsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRateOverrideReasonsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRateOverrideReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRateOverrideReasonsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRateOverrideReasonsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRateOverrideReasonsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRateOverrideReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


