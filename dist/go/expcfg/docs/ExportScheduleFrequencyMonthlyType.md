# ExportScheduleFrequencyMonthlyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interval** | Pointer to **int32** | Interval at which export needs to be scheduled | [optional] 
**WeekToRepeat** | Pointer to [**ExportScheduleWeekToRepeatType**](ExportScheduleWeekToRepeatType.md) |  | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 

## Methods

### NewExportScheduleFrequencyMonthlyType

`func NewExportScheduleFrequencyMonthlyType() *ExportScheduleFrequencyMonthlyType`

NewExportScheduleFrequencyMonthlyType instantiates a new ExportScheduleFrequencyMonthlyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportScheduleFrequencyMonthlyTypeWithDefaults

`func NewExportScheduleFrequencyMonthlyTypeWithDefaults() *ExportScheduleFrequencyMonthlyType`

NewExportScheduleFrequencyMonthlyTypeWithDefaults instantiates a new ExportScheduleFrequencyMonthlyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterval

`func (o *ExportScheduleFrequencyMonthlyType) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ExportScheduleFrequencyMonthlyType) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ExportScheduleFrequencyMonthlyType) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ExportScheduleFrequencyMonthlyType) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetWeekToRepeat

`func (o *ExportScheduleFrequencyMonthlyType) GetWeekToRepeat() ExportScheduleWeekToRepeatType`

GetWeekToRepeat returns the WeekToRepeat field if non-nil, zero value otherwise.

### GetWeekToRepeatOk

`func (o *ExportScheduleFrequencyMonthlyType) GetWeekToRepeatOk() (*ExportScheduleWeekToRepeatType, bool)`

GetWeekToRepeatOk returns a tuple with the WeekToRepeat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekToRepeat

`func (o *ExportScheduleFrequencyMonthlyType) SetWeekToRepeat(v ExportScheduleWeekToRepeatType)`

SetWeekToRepeat sets WeekToRepeat field to given value.

### HasWeekToRepeat

`func (o *ExportScheduleFrequencyMonthlyType) HasWeekToRepeat() bool`

HasWeekToRepeat returns a boolean if a field has been set.

### GetSunday

`func (o *ExportScheduleFrequencyMonthlyType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *ExportScheduleFrequencyMonthlyType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *ExportScheduleFrequencyMonthlyType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *ExportScheduleFrequencyMonthlyType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *ExportScheduleFrequencyMonthlyType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *ExportScheduleFrequencyMonthlyType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *ExportScheduleFrequencyMonthlyType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *ExportScheduleFrequencyMonthlyType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *ExportScheduleFrequencyMonthlyType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *ExportScheduleFrequencyMonthlyType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *ExportScheduleFrequencyMonthlyType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *ExportScheduleFrequencyMonthlyType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *ExportScheduleFrequencyMonthlyType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *ExportScheduleFrequencyMonthlyType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *ExportScheduleFrequencyMonthlyType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *ExportScheduleFrequencyMonthlyType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *ExportScheduleFrequencyMonthlyType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *ExportScheduleFrequencyMonthlyType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *ExportScheduleFrequencyMonthlyType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *ExportScheduleFrequencyMonthlyType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *ExportScheduleFrequencyMonthlyType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *ExportScheduleFrequencyMonthlyType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


