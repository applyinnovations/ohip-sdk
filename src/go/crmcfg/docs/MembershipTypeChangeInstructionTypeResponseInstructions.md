# MembershipTypeChangeInstructionTypeResponseInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmationOnly** | Pointer to **bool** | If this value is set to TRUE, then the operation will only return for a Success or Failed flag. | [optional] 
**ResponseInstruction** | Pointer to [**[]MembershipTypeInstructionType**](MembershipTypeInstructionType.md) |  | [optional] 

## Methods

### NewMembershipTypeChangeInstructionTypeResponseInstructions

`func NewMembershipTypeChangeInstructionTypeResponseInstructions() *MembershipTypeChangeInstructionTypeResponseInstructions`

NewMembershipTypeChangeInstructionTypeResponseInstructions instantiates a new MembershipTypeChangeInstructionTypeResponseInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeChangeInstructionTypeResponseInstructionsWithDefaults

`func NewMembershipTypeChangeInstructionTypeResponseInstructionsWithDefaults() *MembershipTypeChangeInstructionTypeResponseInstructions`

NewMembershipTypeChangeInstructionTypeResponseInstructionsWithDefaults instantiates a new MembershipTypeChangeInstructionTypeResponseInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmationOnly

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) GetConfirmationOnly() bool`

GetConfirmationOnly returns the ConfirmationOnly field if non-nil, zero value otherwise.

### GetConfirmationOnlyOk

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) GetConfirmationOnlyOk() (*bool, bool)`

GetConfirmationOnlyOk returns a tuple with the ConfirmationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationOnly

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) SetConfirmationOnly(v bool)`

SetConfirmationOnly sets ConfirmationOnly field to given value.

### HasConfirmationOnly

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) HasConfirmationOnly() bool`

HasConfirmationOnly returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) GetResponseInstruction() []MembershipTypeInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) GetResponseInstructionOk() (*[]MembershipTypeInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) SetResponseInstruction(v []MembershipTypeInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *MembershipTypeChangeInstructionTypeResponseInstructions) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


