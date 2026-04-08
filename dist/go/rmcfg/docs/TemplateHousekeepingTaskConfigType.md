# TemplateHousekeepingTaskConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for template housekeeping task. | [optional] 
**Description** | Pointer to **string** | Description for template housekeeping task. | [optional] 
**Instructions** | Pointer to **string** | Instructions of template housekeeping task for the housekeeping to follow. | [optional] 
**Sequence** | Pointer to **float32** | Display sequence for template housekeeping task. | [optional] 
**Color** | Pointer to [**ColorType**](ColorType.md) |  | [optional] 
**LinenChange** | Pointer to **bool** | Signifies whether template housekeeping task requires linen change. | [optional] 
**GuestRequested** | Pointer to **bool** | Signifies whether template housekeeping task is a guest requested task. | [optional] 
**DefaultDepartureTask** | Pointer to **bool** | Signifies that template task is a default task for the checked out room. | [optional] 
**Protected** | Pointer to **bool** | Flag that determines whether this record is protected from removing or not | [optional] 
**AppliedCreditsPercentage** | Pointer to **float32** | Percentage of Credits that will be used for this task. Used when the Housekeeping Credits functionality is set to use ROOM_TASK_RULE. The default value is 100. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the template task is inactive. | [optional] 

## Methods

### NewTemplateHousekeepingTaskConfigType

`func NewTemplateHousekeepingTaskConfigType() *TemplateHousekeepingTaskConfigType`

NewTemplateHousekeepingTaskConfigType instantiates a new TemplateHousekeepingTaskConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHousekeepingTaskConfigTypeWithDefaults

`func NewTemplateHousekeepingTaskConfigTypeWithDefaults() *TemplateHousekeepingTaskConfigType`

NewTemplateHousekeepingTaskConfigTypeWithDefaults instantiates a new TemplateHousekeepingTaskConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TemplateHousekeepingTaskConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateHousekeepingTaskConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateHousekeepingTaskConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateHousekeepingTaskConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateHousekeepingTaskConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateHousekeepingTaskConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateHousekeepingTaskConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateHousekeepingTaskConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInstructions

`func (o *TemplateHousekeepingTaskConfigType) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *TemplateHousekeepingTaskConfigType) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *TemplateHousekeepingTaskConfigType) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *TemplateHousekeepingTaskConfigType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateHousekeepingTaskConfigType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateHousekeepingTaskConfigType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateHousekeepingTaskConfigType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateHousekeepingTaskConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetColor

`func (o *TemplateHousekeepingTaskConfigType) GetColor() ColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *TemplateHousekeepingTaskConfigType) GetColorOk() (*ColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *TemplateHousekeepingTaskConfigType) SetColor(v ColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *TemplateHousekeepingTaskConfigType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetLinenChange

`func (o *TemplateHousekeepingTaskConfigType) GetLinenChange() bool`

GetLinenChange returns the LinenChange field if non-nil, zero value otherwise.

### GetLinenChangeOk

`func (o *TemplateHousekeepingTaskConfigType) GetLinenChangeOk() (*bool, bool)`

GetLinenChangeOk returns a tuple with the LinenChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinenChange

`func (o *TemplateHousekeepingTaskConfigType) SetLinenChange(v bool)`

SetLinenChange sets LinenChange field to given value.

### HasLinenChange

`func (o *TemplateHousekeepingTaskConfigType) HasLinenChange() bool`

HasLinenChange returns a boolean if a field has been set.

### GetGuestRequested

`func (o *TemplateHousekeepingTaskConfigType) GetGuestRequested() bool`

GetGuestRequested returns the GuestRequested field if non-nil, zero value otherwise.

### GetGuestRequestedOk

`func (o *TemplateHousekeepingTaskConfigType) GetGuestRequestedOk() (*bool, bool)`

GetGuestRequestedOk returns a tuple with the GuestRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRequested

`func (o *TemplateHousekeepingTaskConfigType) SetGuestRequested(v bool)`

SetGuestRequested sets GuestRequested field to given value.

### HasGuestRequested

`func (o *TemplateHousekeepingTaskConfigType) HasGuestRequested() bool`

HasGuestRequested returns a boolean if a field has been set.

### GetDefaultDepartureTask

`func (o *TemplateHousekeepingTaskConfigType) GetDefaultDepartureTask() bool`

GetDefaultDepartureTask returns the DefaultDepartureTask field if non-nil, zero value otherwise.

### GetDefaultDepartureTaskOk

`func (o *TemplateHousekeepingTaskConfigType) GetDefaultDepartureTaskOk() (*bool, bool)`

GetDefaultDepartureTaskOk returns a tuple with the DefaultDepartureTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDepartureTask

`func (o *TemplateHousekeepingTaskConfigType) SetDefaultDepartureTask(v bool)`

SetDefaultDepartureTask sets DefaultDepartureTask field to given value.

### HasDefaultDepartureTask

`func (o *TemplateHousekeepingTaskConfigType) HasDefaultDepartureTask() bool`

HasDefaultDepartureTask returns a boolean if a field has been set.

### GetProtected

`func (o *TemplateHousekeepingTaskConfigType) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *TemplateHousekeepingTaskConfigType) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *TemplateHousekeepingTaskConfigType) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *TemplateHousekeepingTaskConfigType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetAppliedCreditsPercentage

`func (o *TemplateHousekeepingTaskConfigType) GetAppliedCreditsPercentage() float32`

GetAppliedCreditsPercentage returns the AppliedCreditsPercentage field if non-nil, zero value otherwise.

### GetAppliedCreditsPercentageOk

`func (o *TemplateHousekeepingTaskConfigType) GetAppliedCreditsPercentageOk() (*float32, bool)`

GetAppliedCreditsPercentageOk returns a tuple with the AppliedCreditsPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedCreditsPercentage

`func (o *TemplateHousekeepingTaskConfigType) SetAppliedCreditsPercentage(v float32)`

SetAppliedCreditsPercentage sets AppliedCreditsPercentage field to given value.

### HasAppliedCreditsPercentage

`func (o *TemplateHousekeepingTaskConfigType) HasAppliedCreditsPercentage() bool`

HasAppliedCreditsPercentage returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateHousekeepingTaskConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateHousekeepingTaskConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateHousekeepingTaskConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateHousekeepingTaskConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


