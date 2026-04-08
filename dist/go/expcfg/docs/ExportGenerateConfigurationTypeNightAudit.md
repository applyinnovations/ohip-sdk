# ExportGenerateConfigurationTypeNightAudit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RunInNightAudit** | Pointer to **bool** | A flag to set export to be run in Night Audit. | [optional] 
**NightAuditFrequency** | Pointer to **string** | The frequency at which export should be generated. Eg. Nightly, End of Month or End of Year. | [optional] 
**NightAuditExportDetail** | Pointer to **string** | Day of the week, when the export routine is run in the night audit and the NA_FREQUENCY is set to &#39;Day of Week&#39;. | [optional] 

## Methods

### NewExportGenerateConfigurationTypeNightAudit

`func NewExportGenerateConfigurationTypeNightAudit() *ExportGenerateConfigurationTypeNightAudit`

NewExportGenerateConfigurationTypeNightAudit instantiates a new ExportGenerateConfigurationTypeNightAudit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportGenerateConfigurationTypeNightAuditWithDefaults

`func NewExportGenerateConfigurationTypeNightAuditWithDefaults() *ExportGenerateConfigurationTypeNightAudit`

NewExportGenerateConfigurationTypeNightAuditWithDefaults instantiates a new ExportGenerateConfigurationTypeNightAudit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRunInNightAudit

`func (o *ExportGenerateConfigurationTypeNightAudit) GetRunInNightAudit() bool`

GetRunInNightAudit returns the RunInNightAudit field if non-nil, zero value otherwise.

### GetRunInNightAuditOk

`func (o *ExportGenerateConfigurationTypeNightAudit) GetRunInNightAuditOk() (*bool, bool)`

GetRunInNightAuditOk returns a tuple with the RunInNightAudit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunInNightAudit

`func (o *ExportGenerateConfigurationTypeNightAudit) SetRunInNightAudit(v bool)`

SetRunInNightAudit sets RunInNightAudit field to given value.

### HasRunInNightAudit

`func (o *ExportGenerateConfigurationTypeNightAudit) HasRunInNightAudit() bool`

HasRunInNightAudit returns a boolean if a field has been set.

### GetNightAuditFrequency

`func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditFrequency() string`

GetNightAuditFrequency returns the NightAuditFrequency field if non-nil, zero value otherwise.

### GetNightAuditFrequencyOk

`func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditFrequencyOk() (*string, bool)`

GetNightAuditFrequencyOk returns a tuple with the NightAuditFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNightAuditFrequency

`func (o *ExportGenerateConfigurationTypeNightAudit) SetNightAuditFrequency(v string)`

SetNightAuditFrequency sets NightAuditFrequency field to given value.

### HasNightAuditFrequency

`func (o *ExportGenerateConfigurationTypeNightAudit) HasNightAuditFrequency() bool`

HasNightAuditFrequency returns a boolean if a field has been set.

### GetNightAuditExportDetail

`func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditExportDetail() string`

GetNightAuditExportDetail returns the NightAuditExportDetail field if non-nil, zero value otherwise.

### GetNightAuditExportDetailOk

`func (o *ExportGenerateConfigurationTypeNightAudit) GetNightAuditExportDetailOk() (*string, bool)`

GetNightAuditExportDetailOk returns a tuple with the NightAuditExportDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNightAuditExportDetail

`func (o *ExportGenerateConfigurationTypeNightAudit) SetNightAuditExportDetail(v string)`

SetNightAuditExportDetail sets NightAuditExportDetail field to given value.

### HasNightAuditExportDetail

`func (o *ExportGenerateConfigurationTypeNightAudit) HasNightAuditExportDetail() bool`

HasNightAuditExportDetail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


