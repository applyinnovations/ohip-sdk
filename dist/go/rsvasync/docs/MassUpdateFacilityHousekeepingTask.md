# MassUpdateFacilityHousekeepingTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FacilityTask** | Pointer to **string** | Code of facility task. | [optional] 
**TaskStartDate** | Pointer to **string** | Date on which the task needs to start being performed. | [optional] 
**TaskEndDate** | Pointer to **string** | Date on which task will stop being performed. | [optional] 
**StayPeriod** | Pointer to [**MassUpdateHousekeepingTaskStayPeriod**](MassUpdateHousekeepingTaskStayPeriod.md) |  | [optional] 
**Frequency** | Pointer to **int32** | Signifies frequency(i.e. every 2 days) with which task is to be performed. | [optional] 
**CycleStartDay** | Pointer to **int32** | Signifies offset(in days) i.e. start on 3rd day from arrival. | [optional] 
**ReplaceExistingTasks** | Pointer to **bool** | Remove existing task(s) scheduled for the selected date(s) for the selected reservations before adding new one. | [optional] [default to false]
**FacilityCodes** | Pointer to [**[]MassUpdateFacilityCode**](MassUpdateFacilityCode.md) | List of the facility codes. | [optional] 

## Methods

### NewMassUpdateFacilityHousekeepingTask

`func NewMassUpdateFacilityHousekeepingTask() *MassUpdateFacilityHousekeepingTask`

NewMassUpdateFacilityHousekeepingTask instantiates a new MassUpdateFacilityHousekeepingTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateFacilityHousekeepingTaskWithDefaults

`func NewMassUpdateFacilityHousekeepingTaskWithDefaults() *MassUpdateFacilityHousekeepingTask`

NewMassUpdateFacilityHousekeepingTaskWithDefaults instantiates a new MassUpdateFacilityHousekeepingTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFacilityTask

`func (o *MassUpdateFacilityHousekeepingTask) GetFacilityTask() string`

GetFacilityTask returns the FacilityTask field if non-nil, zero value otherwise.

### GetFacilityTaskOk

`func (o *MassUpdateFacilityHousekeepingTask) GetFacilityTaskOk() (*string, bool)`

GetFacilityTaskOk returns a tuple with the FacilityTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityTask

`func (o *MassUpdateFacilityHousekeepingTask) SetFacilityTask(v string)`

SetFacilityTask sets FacilityTask field to given value.

### HasFacilityTask

`func (o *MassUpdateFacilityHousekeepingTask) HasFacilityTask() bool`

HasFacilityTask returns a boolean if a field has been set.

### GetTaskStartDate

`func (o *MassUpdateFacilityHousekeepingTask) GetTaskStartDate() string`

GetTaskStartDate returns the TaskStartDate field if non-nil, zero value otherwise.

### GetTaskStartDateOk

`func (o *MassUpdateFacilityHousekeepingTask) GetTaskStartDateOk() (*string, bool)`

GetTaskStartDateOk returns a tuple with the TaskStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStartDate

`func (o *MassUpdateFacilityHousekeepingTask) SetTaskStartDate(v string)`

SetTaskStartDate sets TaskStartDate field to given value.

### HasTaskStartDate

`func (o *MassUpdateFacilityHousekeepingTask) HasTaskStartDate() bool`

HasTaskStartDate returns a boolean if a field has been set.

### GetTaskEndDate

`func (o *MassUpdateFacilityHousekeepingTask) GetTaskEndDate() string`

GetTaskEndDate returns the TaskEndDate field if non-nil, zero value otherwise.

### GetTaskEndDateOk

`func (o *MassUpdateFacilityHousekeepingTask) GetTaskEndDateOk() (*string, bool)`

GetTaskEndDateOk returns a tuple with the TaskEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskEndDate

`func (o *MassUpdateFacilityHousekeepingTask) SetTaskEndDate(v string)`

SetTaskEndDate sets TaskEndDate field to given value.

### HasTaskEndDate

`func (o *MassUpdateFacilityHousekeepingTask) HasTaskEndDate() bool`

HasTaskEndDate returns a boolean if a field has been set.

### GetStayPeriod

`func (o *MassUpdateFacilityHousekeepingTask) GetStayPeriod() MassUpdateHousekeepingTaskStayPeriod`

GetStayPeriod returns the StayPeriod field if non-nil, zero value otherwise.

### GetStayPeriodOk

`func (o *MassUpdateFacilityHousekeepingTask) GetStayPeriodOk() (*MassUpdateHousekeepingTaskStayPeriod, bool)`

GetStayPeriodOk returns a tuple with the StayPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayPeriod

`func (o *MassUpdateFacilityHousekeepingTask) SetStayPeriod(v MassUpdateHousekeepingTaskStayPeriod)`

SetStayPeriod sets StayPeriod field to given value.

### HasStayPeriod

`func (o *MassUpdateFacilityHousekeepingTask) HasStayPeriod() bool`

HasStayPeriod returns a boolean if a field has been set.

### GetFrequency

`func (o *MassUpdateFacilityHousekeepingTask) GetFrequency() int32`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *MassUpdateFacilityHousekeepingTask) GetFrequencyOk() (*int32, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *MassUpdateFacilityHousekeepingTask) SetFrequency(v int32)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *MassUpdateFacilityHousekeepingTask) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetCycleStartDay

`func (o *MassUpdateFacilityHousekeepingTask) GetCycleStartDay() int32`

GetCycleStartDay returns the CycleStartDay field if non-nil, zero value otherwise.

### GetCycleStartDayOk

`func (o *MassUpdateFacilityHousekeepingTask) GetCycleStartDayOk() (*int32, bool)`

GetCycleStartDayOk returns a tuple with the CycleStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleStartDay

`func (o *MassUpdateFacilityHousekeepingTask) SetCycleStartDay(v int32)`

SetCycleStartDay sets CycleStartDay field to given value.

### HasCycleStartDay

`func (o *MassUpdateFacilityHousekeepingTask) HasCycleStartDay() bool`

HasCycleStartDay returns a boolean if a field has been set.

### GetReplaceExistingTasks

`func (o *MassUpdateFacilityHousekeepingTask) GetReplaceExistingTasks() bool`

GetReplaceExistingTasks returns the ReplaceExistingTasks field if non-nil, zero value otherwise.

### GetReplaceExistingTasksOk

`func (o *MassUpdateFacilityHousekeepingTask) GetReplaceExistingTasksOk() (*bool, bool)`

GetReplaceExistingTasksOk returns a tuple with the ReplaceExistingTasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceExistingTasks

`func (o *MassUpdateFacilityHousekeepingTask) SetReplaceExistingTasks(v bool)`

SetReplaceExistingTasks sets ReplaceExistingTasks field to given value.

### HasReplaceExistingTasks

`func (o *MassUpdateFacilityHousekeepingTask) HasReplaceExistingTasks() bool`

HasReplaceExistingTasks returns a boolean if a field has been set.

### GetFacilityCodes

`func (o *MassUpdateFacilityHousekeepingTask) GetFacilityCodes() []MassUpdateFacilityCode`

GetFacilityCodes returns the FacilityCodes field if non-nil, zero value otherwise.

### GetFacilityCodesOk

`func (o *MassUpdateFacilityHousekeepingTask) GetFacilityCodesOk() (*[]MassUpdateFacilityCode, bool)`

GetFacilityCodesOk returns a tuple with the FacilityCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityCodes

`func (o *MassUpdateFacilityHousekeepingTask) SetFacilityCodes(v []MassUpdateFacilityCode)`

SetFacilityCodes sets FacilityCodes field to given value.

### HasFacilityCodes

`func (o *MassUpdateFacilityHousekeepingTask) HasFacilityCodes() bool`

HasFacilityCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


