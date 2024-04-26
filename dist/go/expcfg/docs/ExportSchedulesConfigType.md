# ExportSchedulesConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportSchedules** | Pointer to [**[]ExportScheduleType**](ExportScheduleType.md) | Export Schedule | [optional] 
**TimeZone** | Pointer to **string** | Time zone hour and minute specified in the format TZH:TZM example:-05:00 | [optional] 

## Methods

### NewExportSchedulesConfigType

`func NewExportSchedulesConfigType() *ExportSchedulesConfigType`

NewExportSchedulesConfigType instantiates a new ExportSchedulesConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportSchedulesConfigTypeWithDefaults

`func NewExportSchedulesConfigTypeWithDefaults() *ExportSchedulesConfigType`

NewExportSchedulesConfigTypeWithDefaults instantiates a new ExportSchedulesConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportSchedules

`func (o *ExportSchedulesConfigType) GetExportSchedules() []ExportScheduleType`

GetExportSchedules returns the ExportSchedules field if non-nil, zero value otherwise.

### GetExportSchedulesOk

`func (o *ExportSchedulesConfigType) GetExportSchedulesOk() (*[]ExportScheduleType, bool)`

GetExportSchedulesOk returns a tuple with the ExportSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportSchedules

`func (o *ExportSchedulesConfigType) SetExportSchedules(v []ExportScheduleType)`

SetExportSchedules sets ExportSchedules field to given value.

### HasExportSchedules

`func (o *ExportSchedulesConfigType) HasExportSchedules() bool`

HasExportSchedules returns a boolean if a field has been set.

### GetTimeZone

`func (o *ExportSchedulesConfigType) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *ExportSchedulesConfigType) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *ExportSchedulesConfigType) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *ExportSchedulesConfigType) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


