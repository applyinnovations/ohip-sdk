# CalendarTaskTypeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Completed** | Pointer to **bool** | Whether the task is completed or not. | [optional] 
**CompletedBy** | Pointer to **string** | Name of person who completed the task. Ignored when task is not marked as completed. | [optional] 
**CompletedOn** | Pointer to **string** | Date on which the task was completed. Ignored when task is not marked as completed. | [optional] 

## Methods

### NewCalendarTaskTypeStatus

`func NewCalendarTaskTypeStatus() *CalendarTaskTypeStatus`

NewCalendarTaskTypeStatus instantiates a new CalendarTaskTypeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarTaskTypeStatusWithDefaults

`func NewCalendarTaskTypeStatusWithDefaults() *CalendarTaskTypeStatus`

NewCalendarTaskTypeStatusWithDefaults instantiates a new CalendarTaskTypeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompleted

`func (o *CalendarTaskTypeStatus) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *CalendarTaskTypeStatus) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *CalendarTaskTypeStatus) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *CalendarTaskTypeStatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetCompletedBy

`func (o *CalendarTaskTypeStatus) GetCompletedBy() string`

GetCompletedBy returns the CompletedBy field if non-nil, zero value otherwise.

### GetCompletedByOk

`func (o *CalendarTaskTypeStatus) GetCompletedByOk() (*string, bool)`

GetCompletedByOk returns a tuple with the CompletedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedBy

`func (o *CalendarTaskTypeStatus) SetCompletedBy(v string)`

SetCompletedBy sets CompletedBy field to given value.

### HasCompletedBy

`func (o *CalendarTaskTypeStatus) HasCompletedBy() bool`

HasCompletedBy returns a boolean if a field has been set.

### GetCompletedOn

`func (o *CalendarTaskTypeStatus) GetCompletedOn() string`

GetCompletedOn returns the CompletedOn field if non-nil, zero value otherwise.

### GetCompletedOnOk

`func (o *CalendarTaskTypeStatus) GetCompletedOnOk() (*string, bool)`

GetCompletedOnOk returns a tuple with the CompletedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedOn

`func (o *CalendarTaskTypeStatus) SetCompletedOn(v string)`

SetCompletedOn sets CompletedOn field to given value.

### HasCompletedOn

`func (o *CalendarTaskTypeStatus) HasCompletedOn() bool`

HasCompletedOn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


