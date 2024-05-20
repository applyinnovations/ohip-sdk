# BlockValidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateCodeDetails** | Pointer to [**BlockRateCodeValidationType**](BlockRateCodeValidationType.md) |  | [optional] 
**Blocks** | Pointer to [**BlocksType**](BlocksType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockValidate

`func NewBlockValidate() *BlockValidate`

NewBlockValidate instantiates a new BlockValidate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockValidateWithDefaults

`func NewBlockValidateWithDefaults() *BlockValidate`

NewBlockValidateWithDefaults instantiates a new BlockValidate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateCodeDetails

`func (o *BlockValidate) GetBlockRateCodeDetails() BlockRateCodeValidationType`

GetBlockRateCodeDetails returns the BlockRateCodeDetails field if non-nil, zero value otherwise.

### GetBlockRateCodeDetailsOk

`func (o *BlockValidate) GetBlockRateCodeDetailsOk() (*BlockRateCodeValidationType, bool)`

GetBlockRateCodeDetailsOk returns a tuple with the BlockRateCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateCodeDetails

`func (o *BlockValidate) SetBlockRateCodeDetails(v BlockRateCodeValidationType)`

SetBlockRateCodeDetails sets BlockRateCodeDetails field to given value.

### HasBlockRateCodeDetails

`func (o *BlockValidate) HasBlockRateCodeDetails() bool`

HasBlockRateCodeDetails returns a boolean if a field has been set.

### GetBlocks

`func (o *BlockValidate) GetBlocks() BlocksType`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *BlockValidate) GetBlocksOk() (*BlocksType, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *BlockValidate) SetBlocks(v BlocksType)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *BlockValidate) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### GetLinks

`func (o *BlockValidate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockValidate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockValidate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockValidate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockValidate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockValidate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockValidate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockValidate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


