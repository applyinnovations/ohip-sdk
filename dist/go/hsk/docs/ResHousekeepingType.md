# ResHousekeepingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instructions** | Pointer to **string** | Turndown instructions for the room. | [optional] 
**FacilityTaskInfo** | Pointer to [**FacilityTaskType**](FacilityTaskType.md) |  | [optional] 
**LinenChange** | Pointer to **bool** | Indicates if a linen change is necessary. | [optional] 
**Status** | Pointer to [**GuestHousekeepingServiceRequestType**](GuestHousekeepingServiceRequestType.md) |  | [optional] 
**CleaningPriority** | Pointer to **bool** | This will set/fetch cleaning priority for room. | [optional] 
**TurndownRequested** | Pointer to **bool** | Indicates whether guest wants turndown facility or not. | [optional] 
**ServiceTime** | Pointer to **string** | This is the Turndown room service time. | [optional] 
**ExpectedServiceTime** | Pointer to **string** | Expected Start Time for housekeeping task(s). | [optional] 
**HousekeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 

## Methods

### NewResHousekeepingType

`func NewResHousekeepingType() *ResHousekeepingType`

NewResHousekeepingType instantiates a new ResHousekeepingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResHousekeepingTypeWithDefaults

`func NewResHousekeepingTypeWithDefaults() *ResHousekeepingType`

NewResHousekeepingTypeWithDefaults instantiates a new ResHousekeepingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstructions

`func (o *ResHousekeepingType) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ResHousekeepingType) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ResHousekeepingType) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ResHousekeepingType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetFacilityTaskInfo

`func (o *ResHousekeepingType) GetFacilityTaskInfo() FacilityTaskType`

GetFacilityTaskInfo returns the FacilityTaskInfo field if non-nil, zero value otherwise.

### GetFacilityTaskInfoOk

`func (o *ResHousekeepingType) GetFacilityTaskInfoOk() (*FacilityTaskType, bool)`

GetFacilityTaskInfoOk returns a tuple with the FacilityTaskInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityTaskInfo

`func (o *ResHousekeepingType) SetFacilityTaskInfo(v FacilityTaskType)`

SetFacilityTaskInfo sets FacilityTaskInfo field to given value.

### HasFacilityTaskInfo

`func (o *ResHousekeepingType) HasFacilityTaskInfo() bool`

HasFacilityTaskInfo returns a boolean if a field has been set.

### GetLinenChange

`func (o *ResHousekeepingType) GetLinenChange() bool`

GetLinenChange returns the LinenChange field if non-nil, zero value otherwise.

### GetLinenChangeOk

`func (o *ResHousekeepingType) GetLinenChangeOk() (*bool, bool)`

GetLinenChangeOk returns a tuple with the LinenChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinenChange

`func (o *ResHousekeepingType) SetLinenChange(v bool)`

SetLinenChange sets LinenChange field to given value.

### HasLinenChange

`func (o *ResHousekeepingType) HasLinenChange() bool`

HasLinenChange returns a boolean if a field has been set.

### GetStatus

`func (o *ResHousekeepingType) GetStatus() GuestHousekeepingServiceRequestType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ResHousekeepingType) GetStatusOk() (*GuestHousekeepingServiceRequestType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ResHousekeepingType) SetStatus(v GuestHousekeepingServiceRequestType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ResHousekeepingType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCleaningPriority

`func (o *ResHousekeepingType) GetCleaningPriority() bool`

GetCleaningPriority returns the CleaningPriority field if non-nil, zero value otherwise.

### GetCleaningPriorityOk

`func (o *ResHousekeepingType) GetCleaningPriorityOk() (*bool, bool)`

GetCleaningPriorityOk returns a tuple with the CleaningPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningPriority

`func (o *ResHousekeepingType) SetCleaningPriority(v bool)`

SetCleaningPriority sets CleaningPriority field to given value.

### HasCleaningPriority

`func (o *ResHousekeepingType) HasCleaningPriority() bool`

HasCleaningPriority returns a boolean if a field has been set.

### GetTurndownRequested

`func (o *ResHousekeepingType) GetTurndownRequested() bool`

GetTurndownRequested returns the TurndownRequested field if non-nil, zero value otherwise.

### GetTurndownRequestedOk

`func (o *ResHousekeepingType) GetTurndownRequestedOk() (*bool, bool)`

GetTurndownRequestedOk returns a tuple with the TurndownRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownRequested

`func (o *ResHousekeepingType) SetTurndownRequested(v bool)`

SetTurndownRequested sets TurndownRequested field to given value.

### HasTurndownRequested

`func (o *ResHousekeepingType) HasTurndownRequested() bool`

HasTurndownRequested returns a boolean if a field has been set.

### GetServiceTime

`func (o *ResHousekeepingType) GetServiceTime() string`

GetServiceTime returns the ServiceTime field if non-nil, zero value otherwise.

### GetServiceTimeOk

`func (o *ResHousekeepingType) GetServiceTimeOk() (*string, bool)`

GetServiceTimeOk returns a tuple with the ServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceTime

`func (o *ResHousekeepingType) SetServiceTime(v string)`

SetServiceTime sets ServiceTime field to given value.

### HasServiceTime

`func (o *ResHousekeepingType) HasServiceTime() bool`

HasServiceTime returns a boolean if a field has been set.

### GetExpectedServiceTime

`func (o *ResHousekeepingType) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *ResHousekeepingType) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *ResHousekeepingType) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *ResHousekeepingType) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetHousekeepingRoomStatus

`func (o *ResHousekeepingType) GetHousekeepingRoomStatus() HousekeepingRoomStatusType`

GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusOk

`func (o *ResHousekeepingType) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatus

`func (o *ResHousekeepingType) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHousekeepingRoomStatus sets HousekeepingRoomStatus field to given value.

### HasHousekeepingRoomStatus

`func (o *ResHousekeepingType) HasHousekeepingRoomStatus() bool`

HasHousekeepingRoomStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


