# ExportScheduleFrequencyDailyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hour** | Pointer to **int32** | Specifies the hour on which the job is to run. Valid values are 0 to 23. | [optional] 
**Interval** | Pointer to **int32** | Interval at which export needs to be scheduled | [optional] 

## Methods

### NewExportScheduleFrequencyDailyType

`func NewExportScheduleFrequencyDailyType() *ExportScheduleFrequencyDailyType`

NewExportScheduleFrequencyDailyType instantiates a new ExportScheduleFrequencyDailyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportScheduleFrequencyDailyTypeWithDefaults

`func NewExportScheduleFrequencyDailyTypeWithDefaults() *ExportScheduleFrequencyDailyType`

NewExportScheduleFrequencyDailyTypeWithDefaults instantiates a new ExportScheduleFrequencyDailyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHour

`func (o *ExportScheduleFrequencyDailyType) GetHour() int32`

GetHour returns the Hour field if non-nil, zero value otherwise.

### GetHourOk

`func (o *ExportScheduleFrequencyDailyType) GetHourOk() (*int32, bool)`

GetHourOk returns a tuple with the Hour field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHour

`func (o *ExportScheduleFrequencyDailyType) SetHour(v int32)`

SetHour sets Hour field to given value.

### HasHour

`func (o *ExportScheduleFrequencyDailyType) HasHour() bool`

HasHour returns a boolean if a field has been set.

### GetInterval

`func (o *ExportScheduleFrequencyDailyType) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *ExportScheduleFrequencyDailyType) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *ExportScheduleFrequencyDailyType) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *ExportScheduleFrequencyDailyType) HasInterval() bool`

HasInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


