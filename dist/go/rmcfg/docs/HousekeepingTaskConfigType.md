# HousekeepingTaskConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppliedCreditsPercentage** | Pointer to **float32** | Percentage of Credits that will be used for this task. Used when the Housekeeping Credits functionality is set to use ROOM_TASK_RULE. The default value is 100. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Color** | Pointer to [**ColorType**](ColorType.md) |  | [optional] 
**DefaultDepartureTask** | Pointer to **bool** | Signifies that task is a default task for the checked out room. | [optional] 
**Description** | Pointer to **string** | Description for the code type. | [optional] 
**GuestRequested** | Pointer to **bool** | Signifies whether housekeeping task is a guest requested task. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for a housekeeping task. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the task is inactive. | [optional] 
**Instructions** | Pointer to **string** | Instructions of the housekeeping task. | [optional] 
**LinenChange** | Pointer to **bool** | Signifies whether housekeeping task requires linen change. | [optional] 
**Protected** | Pointer to **bool** | Flag that determines whether this record is protected from removing or not | [optional] 
**Sequence** | Pointer to **float32** | Display sequence for the housekeeping task. | [optional] 

## Methods

### NewHousekeepingTaskConfigType

`func NewHousekeepingTaskConfigType() *HousekeepingTaskConfigType`

NewHousekeepingTaskConfigType instantiates a new HousekeepingTaskConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskConfigTypeWithDefaults

`func NewHousekeepingTaskConfigTypeWithDefaults() *HousekeepingTaskConfigType`

NewHousekeepingTaskConfigTypeWithDefaults instantiates a new HousekeepingTaskConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppliedCreditsPercentage

`func (o *HousekeepingTaskConfigType) GetAppliedCreditsPercentage() float32`

GetAppliedCreditsPercentage returns the AppliedCreditsPercentage field if non-nil, zero value otherwise.

### GetAppliedCreditsPercentageOk

`func (o *HousekeepingTaskConfigType) GetAppliedCreditsPercentageOk() (*float32, bool)`

GetAppliedCreditsPercentageOk returns a tuple with the AppliedCreditsPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedCreditsPercentage

`func (o *HousekeepingTaskConfigType) SetAppliedCreditsPercentage(v float32)`

SetAppliedCreditsPercentage sets AppliedCreditsPercentage field to given value.

### HasAppliedCreditsPercentage

`func (o *HousekeepingTaskConfigType) HasAppliedCreditsPercentage() bool`

HasAppliedCreditsPercentage returns a boolean if a field has been set.

### GetCode

`func (o *HousekeepingTaskConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HousekeepingTaskConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HousekeepingTaskConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HousekeepingTaskConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetColor

`func (o *HousekeepingTaskConfigType) GetColor() ColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *HousekeepingTaskConfigType) GetColorOk() (*ColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *HousekeepingTaskConfigType) SetColor(v ColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *HousekeepingTaskConfigType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetDefaultDepartureTask

`func (o *HousekeepingTaskConfigType) GetDefaultDepartureTask() bool`

GetDefaultDepartureTask returns the DefaultDepartureTask field if non-nil, zero value otherwise.

### GetDefaultDepartureTaskOk

`func (o *HousekeepingTaskConfigType) GetDefaultDepartureTaskOk() (*bool, bool)`

GetDefaultDepartureTaskOk returns a tuple with the DefaultDepartureTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDepartureTask

`func (o *HousekeepingTaskConfigType) SetDefaultDepartureTask(v bool)`

SetDefaultDepartureTask sets DefaultDepartureTask field to given value.

### HasDefaultDepartureTask

`func (o *HousekeepingTaskConfigType) HasDefaultDepartureTask() bool`

HasDefaultDepartureTask returns a boolean if a field has been set.

### GetDescription

`func (o *HousekeepingTaskConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HousekeepingTaskConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HousekeepingTaskConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HousekeepingTaskConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGuestRequested

`func (o *HousekeepingTaskConfigType) GetGuestRequested() bool`

GetGuestRequested returns the GuestRequested field if non-nil, zero value otherwise.

### GetGuestRequestedOk

`func (o *HousekeepingTaskConfigType) GetGuestRequestedOk() (*bool, bool)`

GetGuestRequestedOk returns a tuple with the GuestRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRequested

`func (o *HousekeepingTaskConfigType) SetGuestRequested(v bool)`

SetGuestRequested sets GuestRequested field to given value.

### HasGuestRequested

`func (o *HousekeepingTaskConfigType) HasGuestRequested() bool`

HasGuestRequested returns a boolean if a field has been set.

### GetHotelId

`func (o *HousekeepingTaskConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingTaskConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingTaskConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingTaskConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *HousekeepingTaskConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HousekeepingTaskConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HousekeepingTaskConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HousekeepingTaskConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInstructions

`func (o *HousekeepingTaskConfigType) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *HousekeepingTaskConfigType) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *HousekeepingTaskConfigType) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *HousekeepingTaskConfigType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetLinenChange

`func (o *HousekeepingTaskConfigType) GetLinenChange() bool`

GetLinenChange returns the LinenChange field if non-nil, zero value otherwise.

### GetLinenChangeOk

`func (o *HousekeepingTaskConfigType) GetLinenChangeOk() (*bool, bool)`

GetLinenChangeOk returns a tuple with the LinenChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinenChange

`func (o *HousekeepingTaskConfigType) SetLinenChange(v bool)`

SetLinenChange sets LinenChange field to given value.

### HasLinenChange

`func (o *HousekeepingTaskConfigType) HasLinenChange() bool`

HasLinenChange returns a boolean if a field has been set.

### GetProtected

`func (o *HousekeepingTaskConfigType) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *HousekeepingTaskConfigType) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *HousekeepingTaskConfigType) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *HousekeepingTaskConfigType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetSequence

`func (o *HousekeepingTaskConfigType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HousekeepingTaskConfigType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HousekeepingTaskConfigType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HousekeepingTaskConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


