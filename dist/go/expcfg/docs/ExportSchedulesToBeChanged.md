# ExportSchedulesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportScheduleConfig** | Pointer to [**ExportSchedulesConfigType**](ExportSchedulesConfigType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExportSchedulesToBeChanged

`func NewExportSchedulesToBeChanged() *ExportSchedulesToBeChanged`

NewExportSchedulesToBeChanged instantiates a new ExportSchedulesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportSchedulesToBeChangedWithDefaults

`func NewExportSchedulesToBeChangedWithDefaults() *ExportSchedulesToBeChanged`

NewExportSchedulesToBeChangedWithDefaults instantiates a new ExportSchedulesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportScheduleConfig

`func (o *ExportSchedulesToBeChanged) GetExportScheduleConfig() ExportSchedulesConfigType`

GetExportScheduleConfig returns the ExportScheduleConfig field if non-nil, zero value otherwise.

### GetExportScheduleConfigOk

`func (o *ExportSchedulesToBeChanged) GetExportScheduleConfigOk() (*ExportSchedulesConfigType, bool)`

GetExportScheduleConfigOk returns a tuple with the ExportScheduleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportScheduleConfig

`func (o *ExportSchedulesToBeChanged) SetExportScheduleConfig(v ExportSchedulesConfigType)`

SetExportScheduleConfig sets ExportScheduleConfig field to given value.

### HasExportScheduleConfig

`func (o *ExportSchedulesToBeChanged) HasExportScheduleConfig() bool`

HasExportScheduleConfig returns a boolean if a field has been set.

### GetLinks

`func (o *ExportSchedulesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportSchedulesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportSchedulesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportSchedulesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportSchedulesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportSchedulesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportSchedulesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportSchedulesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

