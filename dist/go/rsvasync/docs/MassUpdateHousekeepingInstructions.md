# MassUpdateHousekeepingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpectedServiceTime** | Pointer to **string** | Expected start time for housekeeping task(s) in 24 hour format. | [optional] 
**ClearCurrentExpectedServiceTime** | Pointer to **bool** | Indicates if the current expected service time is to be removed for selected reservations. | [optional] [default to false]
**CleaningPriority** | Pointer to **bool** | Indicates whether cleaning priority is to be given to the reservation room. | [optional] 
**TurndownRequested** | Pointer to **bool** | Indicates whether guest wants turndown facility or not. | [optional] 
**Instructions** | Pointer to **string** | Housekeeping instructions for the room. | [optional] 

## Methods

### NewMassUpdateHousekeepingInstructions

`func NewMassUpdateHousekeepingInstructions() *MassUpdateHousekeepingInstructions`

NewMassUpdateHousekeepingInstructions instantiates a new MassUpdateHousekeepingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateHousekeepingInstructionsWithDefaults

`func NewMassUpdateHousekeepingInstructionsWithDefaults() *MassUpdateHousekeepingInstructions`

NewMassUpdateHousekeepingInstructionsWithDefaults instantiates a new MassUpdateHousekeepingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *MassUpdateHousekeepingInstructions) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetClearCurrentExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) GetClearCurrentExpectedServiceTime() bool`

GetClearCurrentExpectedServiceTime returns the ClearCurrentExpectedServiceTime field if non-nil, zero value otherwise.

### GetClearCurrentExpectedServiceTimeOk

`func (o *MassUpdateHousekeepingInstructions) GetClearCurrentExpectedServiceTimeOk() (*bool, bool)`

GetClearCurrentExpectedServiceTimeOk returns a tuple with the ClearCurrentExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClearCurrentExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) SetClearCurrentExpectedServiceTime(v bool)`

SetClearCurrentExpectedServiceTime sets ClearCurrentExpectedServiceTime field to given value.

### HasClearCurrentExpectedServiceTime

`func (o *MassUpdateHousekeepingInstructions) HasClearCurrentExpectedServiceTime() bool`

HasClearCurrentExpectedServiceTime returns a boolean if a field has been set.

### GetCleaningPriority

`func (o *MassUpdateHousekeepingInstructions) GetCleaningPriority() bool`

GetCleaningPriority returns the CleaningPriority field if non-nil, zero value otherwise.

### GetCleaningPriorityOk

`func (o *MassUpdateHousekeepingInstructions) GetCleaningPriorityOk() (*bool, bool)`

GetCleaningPriorityOk returns a tuple with the CleaningPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningPriority

`func (o *MassUpdateHousekeepingInstructions) SetCleaningPriority(v bool)`

SetCleaningPriority sets CleaningPriority field to given value.

### HasCleaningPriority

`func (o *MassUpdateHousekeepingInstructions) HasCleaningPriority() bool`

HasCleaningPriority returns a boolean if a field has been set.

### GetTurndownRequested

`func (o *MassUpdateHousekeepingInstructions) GetTurndownRequested() bool`

GetTurndownRequested returns the TurndownRequested field if non-nil, zero value otherwise.

### GetTurndownRequestedOk

`func (o *MassUpdateHousekeepingInstructions) GetTurndownRequestedOk() (*bool, bool)`

GetTurndownRequestedOk returns a tuple with the TurndownRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownRequested

`func (o *MassUpdateHousekeepingInstructions) SetTurndownRequested(v bool)`

SetTurndownRequested sets TurndownRequested field to given value.

### HasTurndownRequested

`func (o *MassUpdateHousekeepingInstructions) HasTurndownRequested() bool`

HasTurndownRequested returns a boolean if a field has been set.

### GetInstructions

`func (o *MassUpdateHousekeepingInstructions) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *MassUpdateHousekeepingInstructions) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *MassUpdateHousekeepingInstructions) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *MassUpdateHousekeepingInstructions) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


