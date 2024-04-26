# ExportGenerateConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoExport** | Pointer to **bool** | A flag to set export to generate automatically. | [optional] 
**NightAudit** | Pointer to [**ExportGenerateConfigurationTypeNightAudit**](ExportGenerateConfigurationTypeNightAudit.md) |  | [optional] 

## Methods

### NewExportGenerateConfigurationType

`func NewExportGenerateConfigurationType() *ExportGenerateConfigurationType`

NewExportGenerateConfigurationType instantiates a new ExportGenerateConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportGenerateConfigurationTypeWithDefaults

`func NewExportGenerateConfigurationTypeWithDefaults() *ExportGenerateConfigurationType`

NewExportGenerateConfigurationTypeWithDefaults instantiates a new ExportGenerateConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoExport

`func (o *ExportGenerateConfigurationType) GetAutoExport() bool`

GetAutoExport returns the AutoExport field if non-nil, zero value otherwise.

### GetAutoExportOk

`func (o *ExportGenerateConfigurationType) GetAutoExportOk() (*bool, bool)`

GetAutoExportOk returns a tuple with the AutoExport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoExport

`func (o *ExportGenerateConfigurationType) SetAutoExport(v bool)`

SetAutoExport sets AutoExport field to given value.

### HasAutoExport

`func (o *ExportGenerateConfigurationType) HasAutoExport() bool`

HasAutoExport returns a boolean if a field has been set.

### GetNightAudit

`func (o *ExportGenerateConfigurationType) GetNightAudit() ExportGenerateConfigurationTypeNightAudit`

GetNightAudit returns the NightAudit field if non-nil, zero value otherwise.

### GetNightAuditOk

`func (o *ExportGenerateConfigurationType) GetNightAuditOk() (*ExportGenerateConfigurationTypeNightAudit, bool)`

GetNightAuditOk returns a tuple with the NightAudit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNightAudit

`func (o *ExportGenerateConfigurationType) SetNightAudit(v ExportGenerateConfigurationTypeNightAudit)`

SetNightAudit sets NightAudit field to given value.

### HasNightAudit

`func (o *ExportGenerateConfigurationType) HasNightAudit() bool`

HasNightAudit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


