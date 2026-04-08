# BlockInstructionTypeResponseInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResponseInstruction** | Pointer to [**[]BlockDetailInstructionType**](BlockDetailInstructionType.md) |  | [optional] 
**ConfirmationOnly** | Pointer to **bool** | If this value is set to TRUE, then the operation will only return for a Success or Failed flag. | [optional] 

## Methods

### NewBlockInstructionTypeResponseInstructions

`func NewBlockInstructionTypeResponseInstructions() *BlockInstructionTypeResponseInstructions`

NewBlockInstructionTypeResponseInstructions instantiates a new BlockInstructionTypeResponseInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInstructionTypeResponseInstructionsWithDefaults

`func NewBlockInstructionTypeResponseInstructionsWithDefaults() *BlockInstructionTypeResponseInstructions`

NewBlockInstructionTypeResponseInstructionsWithDefaults instantiates a new BlockInstructionTypeResponseInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResponseInstruction

`func (o *BlockInstructionTypeResponseInstructions) GetResponseInstruction() []BlockDetailInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *BlockInstructionTypeResponseInstructions) GetResponseInstructionOk() (*[]BlockDetailInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *BlockInstructionTypeResponseInstructions) SetResponseInstruction(v []BlockDetailInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *BlockInstructionTypeResponseInstructions) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetConfirmationOnly

`func (o *BlockInstructionTypeResponseInstructions) GetConfirmationOnly() bool`

GetConfirmationOnly returns the ConfirmationOnly field if non-nil, zero value otherwise.

### GetConfirmationOnlyOk

`func (o *BlockInstructionTypeResponseInstructions) GetConfirmationOnlyOk() (*bool, bool)`

GetConfirmationOnlyOk returns a tuple with the ConfirmationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationOnly

`func (o *BlockInstructionTypeResponseInstructions) SetConfirmationOnly(v bool)`

SetConfirmationOnly sets ConfirmationOnly field to given value.

### HasConfirmationOnly

`func (o *BlockInstructionTypeResponseInstructions) HasConfirmationOnly() bool`

HasConfirmationOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


