# FacilityHousekeepingTaskType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FacilityTask** | Pointer to [**FacilityTaskBaseType**](FacilityTaskBaseType.md) |  | [optional] 
**TaskDate** | Pointer to **string** | A reservation date on which task must occur. | [optional] 
**TaskStartDate** | Pointer to **string** | Date on which the task needs to start being performed. | [optional] 
**TaskEndDate** | Pointer to **string** | Date on which task will stop being performed. | [optional] 
**StayPeriod** | Pointer to [**HousekeepingTaskStayPeriodType**](HousekeepingTaskStayPeriodType.md) |  | [optional] 
**Frequency** | Pointer to **int32** | Signifies frequency(i.e. every 2 days) with which task is to be performed. | [optional] 
**CycleStartDay** | Pointer to **int32** | Signifies offset(in days) i.e. start on 3rd day from arrival. | [optional] 
**RoomType** | Pointer to **string** | Signifies the room type for which task is being performed . | [optional] 
**RoomId** | Pointer to **string** | Room number at which task is to be performed. | [optional] 
**FacilityCodes** | Pointer to [**[]FacilityCodeType**](FacilityCodeType.md) | List of the facility codes. | [optional] 

## Methods

### NewFacilityHousekeepingTaskType

`func NewFacilityHousekeepingTaskType() *FacilityHousekeepingTaskType`

NewFacilityHousekeepingTaskType instantiates a new FacilityHousekeepingTaskType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFacilityHousekeepingTaskTypeWithDefaults

`func NewFacilityHousekeepingTaskTypeWithDefaults() *FacilityHousekeepingTaskType`

NewFacilityHousekeepingTaskTypeWithDefaults instantiates a new FacilityHousekeepingTaskType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFacilityTask

`func (o *FacilityHousekeepingTaskType) GetFacilityTask() FacilityTaskBaseType`

GetFacilityTask returns the FacilityTask field if non-nil, zero value otherwise.

### GetFacilityTaskOk

`func (o *FacilityHousekeepingTaskType) GetFacilityTaskOk() (*FacilityTaskBaseType, bool)`

GetFacilityTaskOk returns a tuple with the FacilityTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityTask

`func (o *FacilityHousekeepingTaskType) SetFacilityTask(v FacilityTaskBaseType)`

SetFacilityTask sets FacilityTask field to given value.

### HasFacilityTask

`func (o *FacilityHousekeepingTaskType) HasFacilityTask() bool`

HasFacilityTask returns a boolean if a field has been set.

### GetTaskDate

`func (o *FacilityHousekeepingTaskType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *FacilityHousekeepingTaskType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *FacilityHousekeepingTaskType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *FacilityHousekeepingTaskType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.

### GetTaskStartDate

`func (o *FacilityHousekeepingTaskType) GetTaskStartDate() string`

GetTaskStartDate returns the TaskStartDate field if non-nil, zero value otherwise.

### GetTaskStartDateOk

`func (o *FacilityHousekeepingTaskType) GetTaskStartDateOk() (*string, bool)`

GetTaskStartDateOk returns a tuple with the TaskStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStartDate

`func (o *FacilityHousekeepingTaskType) SetTaskStartDate(v string)`

SetTaskStartDate sets TaskStartDate field to given value.

### HasTaskStartDate

`func (o *FacilityHousekeepingTaskType) HasTaskStartDate() bool`

HasTaskStartDate returns a boolean if a field has been set.

### GetTaskEndDate

`func (o *FacilityHousekeepingTaskType) GetTaskEndDate() string`

GetTaskEndDate returns the TaskEndDate field if non-nil, zero value otherwise.

### GetTaskEndDateOk

`func (o *FacilityHousekeepingTaskType) GetTaskEndDateOk() (*string, bool)`

GetTaskEndDateOk returns a tuple with the TaskEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskEndDate

`func (o *FacilityHousekeepingTaskType) SetTaskEndDate(v string)`

SetTaskEndDate sets TaskEndDate field to given value.

### HasTaskEndDate

`func (o *FacilityHousekeepingTaskType) HasTaskEndDate() bool`

HasTaskEndDate returns a boolean if a field has been set.

### GetStayPeriod

`func (o *FacilityHousekeepingTaskType) GetStayPeriod() HousekeepingTaskStayPeriodType`

GetStayPeriod returns the StayPeriod field if non-nil, zero value otherwise.

### GetStayPeriodOk

`func (o *FacilityHousekeepingTaskType) GetStayPeriodOk() (*HousekeepingTaskStayPeriodType, bool)`

GetStayPeriodOk returns a tuple with the StayPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayPeriod

`func (o *FacilityHousekeepingTaskType) SetStayPeriod(v HousekeepingTaskStayPeriodType)`

SetStayPeriod sets StayPeriod field to given value.

### HasStayPeriod

`func (o *FacilityHousekeepingTaskType) HasStayPeriod() bool`

HasStayPeriod returns a boolean if a field has been set.

### GetFrequency

`func (o *FacilityHousekeepingTaskType) GetFrequency() int32`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *FacilityHousekeepingTaskType) GetFrequencyOk() (*int32, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *FacilityHousekeepingTaskType) SetFrequency(v int32)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *FacilityHousekeepingTaskType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetCycleStartDay

`func (o *FacilityHousekeepingTaskType) GetCycleStartDay() int32`

GetCycleStartDay returns the CycleStartDay field if non-nil, zero value otherwise.

### GetCycleStartDayOk

`func (o *FacilityHousekeepingTaskType) GetCycleStartDayOk() (*int32, bool)`

GetCycleStartDayOk returns a tuple with the CycleStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleStartDay

`func (o *FacilityHousekeepingTaskType) SetCycleStartDay(v int32)`

SetCycleStartDay sets CycleStartDay field to given value.

### HasCycleStartDay

`func (o *FacilityHousekeepingTaskType) HasCycleStartDay() bool`

HasCycleStartDay returns a boolean if a field has been set.

### GetRoomType

`func (o *FacilityHousekeepingTaskType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FacilityHousekeepingTaskType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FacilityHousekeepingTaskType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FacilityHousekeepingTaskType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomId

`func (o *FacilityHousekeepingTaskType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *FacilityHousekeepingTaskType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *FacilityHousekeepingTaskType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *FacilityHousekeepingTaskType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetFacilityCodes

`func (o *FacilityHousekeepingTaskType) GetFacilityCodes() []FacilityCodeType`

GetFacilityCodes returns the FacilityCodes field if non-nil, zero value otherwise.

### GetFacilityCodesOk

`func (o *FacilityHousekeepingTaskType) GetFacilityCodesOk() (*[]FacilityCodeType, bool)`

GetFacilityCodesOk returns a tuple with the FacilityCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityCodes

`func (o *FacilityHousekeepingTaskType) SetFacilityCodes(v []FacilityCodeType)`

SetFacilityCodes sets FacilityCodes field to given value.

### HasFacilityCodes

`func (o *FacilityHousekeepingTaskType) HasFacilityCodes() bool`

HasFacilityCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


