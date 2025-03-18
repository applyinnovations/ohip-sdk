# EventProcessInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideCapacity** | Pointer to **bool** | Flag to indicate if configured function space capacity can be overriden. | [optional] 
**Overbook** | Pointer to **bool** | Flag to indicate if the function space can be booked when it is occupied by another event. | [optional] 
**Shareable** | Pointer to **bool** | Flag to indicate if the function space can be booked as shareable with another event. | [optional] 
**OverrideMaxgroups** | Pointer to **bool** | Flag to indicate if maximum group configured in function space can be overriden. | [optional] 
**WaitList** | Pointer to **bool** | Flag to indicate if the event can be waitlisted when function space is not available. | [optional] 
**WarnFunctionSpace** | Pointer to **bool** | Flag to return a warning when the functionspace is being used by other catering event. | [optional] 
**ConvertToSubEvent** | Pointer to **bool** | Flag to indicate that the Event is being converted from Regular Event as a Sub Event linking to a Master Event. | [optional] 
**ConvertToRegularEvent** | Pointer to **bool** | Flag to indicate that the Event is being converted from Sub Event as a Regular Event. | [optional] 
**QuickEvent** | Pointer to **bool** | Flag to indicate that both Block and Event would be created as part of the Quick Event process. | [optional] 

## Methods

### NewEventProcessInstructionsType

`func NewEventProcessInstructionsType() *EventProcessInstructionsType`

NewEventProcessInstructionsType instantiates a new EventProcessInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventProcessInstructionsTypeWithDefaults

`func NewEventProcessInstructionsTypeWithDefaults() *EventProcessInstructionsType`

NewEventProcessInstructionsTypeWithDefaults instantiates a new EventProcessInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideCapacity

`func (o *EventProcessInstructionsType) GetOverrideCapacity() bool`

GetOverrideCapacity returns the OverrideCapacity field if non-nil, zero value otherwise.

### GetOverrideCapacityOk

`func (o *EventProcessInstructionsType) GetOverrideCapacityOk() (*bool, bool)`

GetOverrideCapacityOk returns a tuple with the OverrideCapacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCapacity

`func (o *EventProcessInstructionsType) SetOverrideCapacity(v bool)`

SetOverrideCapacity sets OverrideCapacity field to given value.

### HasOverrideCapacity

`func (o *EventProcessInstructionsType) HasOverrideCapacity() bool`

HasOverrideCapacity returns a boolean if a field has been set.

### GetOverbook

`func (o *EventProcessInstructionsType) GetOverbook() bool`

GetOverbook returns the Overbook field if non-nil, zero value otherwise.

### GetOverbookOk

`func (o *EventProcessInstructionsType) GetOverbookOk() (*bool, bool)`

GetOverbookOk returns a tuple with the Overbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbook

`func (o *EventProcessInstructionsType) SetOverbook(v bool)`

SetOverbook sets Overbook field to given value.

### HasOverbook

`func (o *EventProcessInstructionsType) HasOverbook() bool`

HasOverbook returns a boolean if a field has been set.

### GetShareable

`func (o *EventProcessInstructionsType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *EventProcessInstructionsType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *EventProcessInstructionsType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *EventProcessInstructionsType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetOverrideMaxgroups

`func (o *EventProcessInstructionsType) GetOverrideMaxgroups() bool`

GetOverrideMaxgroups returns the OverrideMaxgroups field if non-nil, zero value otherwise.

### GetOverrideMaxgroupsOk

`func (o *EventProcessInstructionsType) GetOverrideMaxgroupsOk() (*bool, bool)`

GetOverrideMaxgroupsOk returns a tuple with the OverrideMaxgroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideMaxgroups

`func (o *EventProcessInstructionsType) SetOverrideMaxgroups(v bool)`

SetOverrideMaxgroups sets OverrideMaxgroups field to given value.

### HasOverrideMaxgroups

`func (o *EventProcessInstructionsType) HasOverrideMaxgroups() bool`

HasOverrideMaxgroups returns a boolean if a field has been set.

### GetWaitList

`func (o *EventProcessInstructionsType) GetWaitList() bool`

GetWaitList returns the WaitList field if non-nil, zero value otherwise.

### GetWaitListOk

`func (o *EventProcessInstructionsType) GetWaitListOk() (*bool, bool)`

GetWaitListOk returns a tuple with the WaitList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitList

`func (o *EventProcessInstructionsType) SetWaitList(v bool)`

SetWaitList sets WaitList field to given value.

### HasWaitList

`func (o *EventProcessInstructionsType) HasWaitList() bool`

HasWaitList returns a boolean if a field has been set.

### GetWarnFunctionSpace

`func (o *EventProcessInstructionsType) GetWarnFunctionSpace() bool`

GetWarnFunctionSpace returns the WarnFunctionSpace field if non-nil, zero value otherwise.

### GetWarnFunctionSpaceOk

`func (o *EventProcessInstructionsType) GetWarnFunctionSpaceOk() (*bool, bool)`

GetWarnFunctionSpaceOk returns a tuple with the WarnFunctionSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnFunctionSpace

`func (o *EventProcessInstructionsType) SetWarnFunctionSpace(v bool)`

SetWarnFunctionSpace sets WarnFunctionSpace field to given value.

### HasWarnFunctionSpace

`func (o *EventProcessInstructionsType) HasWarnFunctionSpace() bool`

HasWarnFunctionSpace returns a boolean if a field has been set.

### GetConvertToSubEvent

`func (o *EventProcessInstructionsType) GetConvertToSubEvent() bool`

GetConvertToSubEvent returns the ConvertToSubEvent field if non-nil, zero value otherwise.

### GetConvertToSubEventOk

`func (o *EventProcessInstructionsType) GetConvertToSubEventOk() (*bool, bool)`

GetConvertToSubEventOk returns a tuple with the ConvertToSubEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConvertToSubEvent

`func (o *EventProcessInstructionsType) SetConvertToSubEvent(v bool)`

SetConvertToSubEvent sets ConvertToSubEvent field to given value.

### HasConvertToSubEvent

`func (o *EventProcessInstructionsType) HasConvertToSubEvent() bool`

HasConvertToSubEvent returns a boolean if a field has been set.

### GetConvertToRegularEvent

`func (o *EventProcessInstructionsType) GetConvertToRegularEvent() bool`

GetConvertToRegularEvent returns the ConvertToRegularEvent field if non-nil, zero value otherwise.

### GetConvertToRegularEventOk

`func (o *EventProcessInstructionsType) GetConvertToRegularEventOk() (*bool, bool)`

GetConvertToRegularEventOk returns a tuple with the ConvertToRegularEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConvertToRegularEvent

`func (o *EventProcessInstructionsType) SetConvertToRegularEvent(v bool)`

SetConvertToRegularEvent sets ConvertToRegularEvent field to given value.

### HasConvertToRegularEvent

`func (o *EventProcessInstructionsType) HasConvertToRegularEvent() bool`

HasConvertToRegularEvent returns a boolean if a field has been set.

### GetQuickEvent

`func (o *EventProcessInstructionsType) GetQuickEvent() bool`

GetQuickEvent returns the QuickEvent field if non-nil, zero value otherwise.

### GetQuickEventOk

`func (o *EventProcessInstructionsType) GetQuickEventOk() (*bool, bool)`

GetQuickEventOk returns a tuple with the QuickEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickEvent

`func (o *EventProcessInstructionsType) SetQuickEvent(v bool)`

SetQuickEvent sets QuickEvent field to given value.

### HasQuickEvent

`func (o *EventProcessInstructionsType) HasQuickEvent() bool`

HasQuickEvent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


