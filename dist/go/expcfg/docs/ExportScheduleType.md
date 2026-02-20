# ExportScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobName** | Pointer to **string** | Unique name that identifies export schedule | [optional] 
**ExportFileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ExportName** | Pointer to **string** | Name of the export | [optional] 
**ExportDescription** | Pointer to **string** | Export Description | [optional] 
**ExportGroup** | Pointer to [**ScheduleExportGroupType**](ScheduleExportGroupType.md) |  | [optional] 
**CreatedBy** | Pointer to **string** | User who created the export schedule | [optional] 
**Runcount** | Pointer to **int32** | Number of time export generated | [optional] 
**NextScheduledRun** | Pointer to **string** | Export is expected to run at time specified by this element. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z | [optional] 
**StartDate** | Pointer to **string** | Export scheduled started at this time. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z | [optional] 
**EndDate** | Pointer to **string** | Export schedule is expected to end around this time. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z | [optional] 
**Status** | Pointer to **string** | Export schedule status | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether schedule export is active or not | [optional] 
**Frequency** | Pointer to [**ExportScheduleFrequencyType**](ExportScheduleFrequencyType.md) |  | [optional] 

## Methods

### NewExportScheduleType

`func NewExportScheduleType() *ExportScheduleType`

NewExportScheduleType instantiates a new ExportScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportScheduleTypeWithDefaults

`func NewExportScheduleTypeWithDefaults() *ExportScheduleType`

NewExportScheduleTypeWithDefaults instantiates a new ExportScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobName

`func (o *ExportScheduleType) GetJobName() string`

GetJobName returns the JobName field if non-nil, zero value otherwise.

### GetJobNameOk

`func (o *ExportScheduleType) GetJobNameOk() (*string, bool)`

GetJobNameOk returns a tuple with the JobName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobName

`func (o *ExportScheduleType) SetJobName(v string)`

SetJobName sets JobName field to given value.

### HasJobName

`func (o *ExportScheduleType) HasJobName() bool`

HasJobName returns a boolean if a field has been set.

### GetExportFileId

`func (o *ExportScheduleType) GetExportFileId() UniqueIDType`

GetExportFileId returns the ExportFileId field if non-nil, zero value otherwise.

### GetExportFileIdOk

`func (o *ExportScheduleType) GetExportFileIdOk() (*UniqueIDType, bool)`

GetExportFileIdOk returns a tuple with the ExportFileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportFileId

`func (o *ExportScheduleType) SetExportFileId(v UniqueIDType)`

SetExportFileId sets ExportFileId field to given value.

### HasExportFileId

`func (o *ExportScheduleType) HasExportFileId() bool`

HasExportFileId returns a boolean if a field has been set.

### GetExportName

`func (o *ExportScheduleType) GetExportName() string`

GetExportName returns the ExportName field if non-nil, zero value otherwise.

### GetExportNameOk

`func (o *ExportScheduleType) GetExportNameOk() (*string, bool)`

GetExportNameOk returns a tuple with the ExportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportName

`func (o *ExportScheduleType) SetExportName(v string)`

SetExportName sets ExportName field to given value.

### HasExportName

`func (o *ExportScheduleType) HasExportName() bool`

HasExportName returns a boolean if a field has been set.

### GetExportDescription

`func (o *ExportScheduleType) GetExportDescription() string`

GetExportDescription returns the ExportDescription field if non-nil, zero value otherwise.

### GetExportDescriptionOk

`func (o *ExportScheduleType) GetExportDescriptionOk() (*string, bool)`

GetExportDescriptionOk returns a tuple with the ExportDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDescription

`func (o *ExportScheduleType) SetExportDescription(v string)`

SetExportDescription sets ExportDescription field to given value.

### HasExportDescription

`func (o *ExportScheduleType) HasExportDescription() bool`

HasExportDescription returns a boolean if a field has been set.

### GetExportGroup

`func (o *ExportScheduleType) GetExportGroup() ScheduleExportGroupType`

GetExportGroup returns the ExportGroup field if non-nil, zero value otherwise.

### GetExportGroupOk

`func (o *ExportScheduleType) GetExportGroupOk() (*ScheduleExportGroupType, bool)`

GetExportGroupOk returns a tuple with the ExportGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportGroup

`func (o *ExportScheduleType) SetExportGroup(v ScheduleExportGroupType)`

SetExportGroup sets ExportGroup field to given value.

### HasExportGroup

`func (o *ExportScheduleType) HasExportGroup() bool`

HasExportGroup returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ExportScheduleType) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ExportScheduleType) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ExportScheduleType) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *ExportScheduleType) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetRuncount

`func (o *ExportScheduleType) GetRuncount() int32`

GetRuncount returns the Runcount field if non-nil, zero value otherwise.

### GetRuncountOk

`func (o *ExportScheduleType) GetRuncountOk() (*int32, bool)`

GetRuncountOk returns a tuple with the Runcount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuncount

`func (o *ExportScheduleType) SetRuncount(v int32)`

SetRuncount sets Runcount field to given value.

### HasRuncount

`func (o *ExportScheduleType) HasRuncount() bool`

HasRuncount returns a boolean if a field has been set.

### GetNextScheduledRun

`func (o *ExportScheduleType) GetNextScheduledRun() string`

GetNextScheduledRun returns the NextScheduledRun field if non-nil, zero value otherwise.

### GetNextScheduledRunOk

`func (o *ExportScheduleType) GetNextScheduledRunOk() (*string, bool)`

GetNextScheduledRunOk returns a tuple with the NextScheduledRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextScheduledRun

`func (o *ExportScheduleType) SetNextScheduledRun(v string)`

SetNextScheduledRun sets NextScheduledRun field to given value.

### HasNextScheduledRun

`func (o *ExportScheduleType) HasNextScheduledRun() bool`

HasNextScheduledRun returns a boolean if a field has been set.

### GetStartDate

`func (o *ExportScheduleType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ExportScheduleType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ExportScheduleType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ExportScheduleType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ExportScheduleType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ExportScheduleType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ExportScheduleType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ExportScheduleType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetStatus

`func (o *ExportScheduleType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ExportScheduleType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ExportScheduleType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ExportScheduleType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetInactive

`func (o *ExportScheduleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ExportScheduleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ExportScheduleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ExportScheduleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetFrequency

`func (o *ExportScheduleType) GetFrequency() ExportScheduleFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ExportScheduleType) GetFrequencyOk() (*ExportScheduleFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ExportScheduleType) SetFrequency(v ExportScheduleFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ExportScheduleType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


