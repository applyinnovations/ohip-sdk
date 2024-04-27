# ReservationHousekeepingScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customized** | Pointer to **bool** | Signifies whether task has been customized or not. | [optional] 
**CycleStartDay** | Pointer to **int32** | Signifies the shift of the housekeeping schedule. | [optional] 
**End** | Pointer to **string** | Date at which facility tasks stopped being retrieved. | [optional] 
**FacilityHousekeepingTasks** | Pointer to [**[]FacilityHousekeepingTaskType**](FacilityHousekeepingTaskType.md) | List of the facility tasks. | [optional] 
**Start** | Pointer to **string** | Date at which facility tasks started being retrieved. | [optional] 

## Methods

### NewReservationHousekeepingScheduleType

`func NewReservationHousekeepingScheduleType() *ReservationHousekeepingScheduleType`

NewReservationHousekeepingScheduleType instantiates a new ReservationHousekeepingScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationHousekeepingScheduleTypeWithDefaults

`func NewReservationHousekeepingScheduleTypeWithDefaults() *ReservationHousekeepingScheduleType`

NewReservationHousekeepingScheduleTypeWithDefaults instantiates a new ReservationHousekeepingScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomized

`func (o *ReservationHousekeepingScheduleType) GetCustomized() bool`

GetCustomized returns the Customized field if non-nil, zero value otherwise.

### GetCustomizedOk

`func (o *ReservationHousekeepingScheduleType) GetCustomizedOk() (*bool, bool)`

GetCustomizedOk returns a tuple with the Customized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomized

`func (o *ReservationHousekeepingScheduleType) SetCustomized(v bool)`

SetCustomized sets Customized field to given value.

### HasCustomized

`func (o *ReservationHousekeepingScheduleType) HasCustomized() bool`

HasCustomized returns a boolean if a field has been set.

### GetCycleStartDay

`func (o *ReservationHousekeepingScheduleType) GetCycleStartDay() int32`

GetCycleStartDay returns the CycleStartDay field if non-nil, zero value otherwise.

### GetCycleStartDayOk

`func (o *ReservationHousekeepingScheduleType) GetCycleStartDayOk() (*int32, bool)`

GetCycleStartDayOk returns a tuple with the CycleStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleStartDay

`func (o *ReservationHousekeepingScheduleType) SetCycleStartDay(v int32)`

SetCycleStartDay sets CycleStartDay field to given value.

### HasCycleStartDay

`func (o *ReservationHousekeepingScheduleType) HasCycleStartDay() bool`

HasCycleStartDay returns a boolean if a field has been set.

### GetEnd

`func (o *ReservationHousekeepingScheduleType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ReservationHousekeepingScheduleType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ReservationHousekeepingScheduleType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ReservationHousekeepingScheduleType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFacilityHousekeepingTasks

`func (o *ReservationHousekeepingScheduleType) GetFacilityHousekeepingTasks() []FacilityHousekeepingTaskType`

GetFacilityHousekeepingTasks returns the FacilityHousekeepingTasks field if non-nil, zero value otherwise.

### GetFacilityHousekeepingTasksOk

`func (o *ReservationHousekeepingScheduleType) GetFacilityHousekeepingTasksOk() (*[]FacilityHousekeepingTaskType, bool)`

GetFacilityHousekeepingTasksOk returns a tuple with the FacilityHousekeepingTasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityHousekeepingTasks

`func (o *ReservationHousekeepingScheduleType) SetFacilityHousekeepingTasks(v []FacilityHousekeepingTaskType)`

SetFacilityHousekeepingTasks sets FacilityHousekeepingTasks field to given value.

### HasFacilityHousekeepingTasks

`func (o *ReservationHousekeepingScheduleType) HasFacilityHousekeepingTasks() bool`

HasFacilityHousekeepingTasks returns a boolean if a field has been set.

### GetStart

`func (o *ReservationHousekeepingScheduleType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ReservationHousekeepingScheduleType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ReservationHousekeepingScheduleType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ReservationHousekeepingScheduleType) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


