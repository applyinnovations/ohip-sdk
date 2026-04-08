# ValidateReservationChangesInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instruction** | Pointer to [**[]ReservationValidationInstructionType**](ReservationValidationInstructionType.md) | Reservation validation instruction. | [optional] 
**UpsellRateInstruction** | Pointer to [**UpsellRateInstructionType**](UpsellRateInstructionType.md) |  | [optional] 
**CopyOperation** | Pointer to **bool** | Whether the current operation is copy reservation or not. | [optional] 

## Methods

### NewValidateReservationChangesInstructions

`func NewValidateReservationChangesInstructions() *ValidateReservationChangesInstructions`

NewValidateReservationChangesInstructions instantiates a new ValidateReservationChangesInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateReservationChangesInstructionsWithDefaults

`func NewValidateReservationChangesInstructionsWithDefaults() *ValidateReservationChangesInstructions`

NewValidateReservationChangesInstructionsWithDefaults instantiates a new ValidateReservationChangesInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstruction

`func (o *ValidateReservationChangesInstructions) GetInstruction() []ReservationValidationInstructionType`

GetInstruction returns the Instruction field if non-nil, zero value otherwise.

### GetInstructionOk

`func (o *ValidateReservationChangesInstructions) GetInstructionOk() (*[]ReservationValidationInstructionType, bool)`

GetInstructionOk returns a tuple with the Instruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstruction

`func (o *ValidateReservationChangesInstructions) SetInstruction(v []ReservationValidationInstructionType)`

SetInstruction sets Instruction field to given value.

### HasInstruction

`func (o *ValidateReservationChangesInstructions) HasInstruction() bool`

HasInstruction returns a boolean if a field has been set.

### GetUpsellRateInstruction

`func (o *ValidateReservationChangesInstructions) GetUpsellRateInstruction() UpsellRateInstructionType`

GetUpsellRateInstruction returns the UpsellRateInstruction field if non-nil, zero value otherwise.

### GetUpsellRateInstructionOk

`func (o *ValidateReservationChangesInstructions) GetUpsellRateInstructionOk() (*UpsellRateInstructionType, bool)`

GetUpsellRateInstructionOk returns a tuple with the UpsellRateInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRateInstruction

`func (o *ValidateReservationChangesInstructions) SetUpsellRateInstruction(v UpsellRateInstructionType)`

SetUpsellRateInstruction sets UpsellRateInstruction field to given value.

### HasUpsellRateInstruction

`func (o *ValidateReservationChangesInstructions) HasUpsellRateInstruction() bool`

HasUpsellRateInstruction returns a boolean if a field has been set.

### GetCopyOperation

`func (o *ValidateReservationChangesInstructions) GetCopyOperation() bool`

GetCopyOperation returns the CopyOperation field if non-nil, zero value otherwise.

### GetCopyOperationOk

`func (o *ValidateReservationChangesInstructions) GetCopyOperationOk() (*bool, bool)`

GetCopyOperationOk returns a tuple with the CopyOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyOperation

`func (o *ValidateReservationChangesInstructions) SetCopyOperation(v bool)`

SetCopyOperation sets CopyOperation field to given value.

### HasCopyOperation

`func (o *ValidateReservationChangesInstructions) HasCopyOperation() bool`

HasCopyOperation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


