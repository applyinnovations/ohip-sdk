# ConfigGenericReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to [**TranslationTextType1000**](TranslationTextType1000.md) |  | [optional] 
**ReportName** | Pointer to **string** | Name of the .REP or .RTF file. .REP or .RTF extension is not needed. | [optional] 
**UserDefinedReport** | Pointer to **bool** | Flag which indicates whether the report is user defined. | [optional] 
**ModuleType** | Pointer to [**ReportModuleTypeType**](ReportModuleTypeType.md) |  | [optional] 
**UsedInApp** | Pointer to [**[]ReportRunnableApps**](ReportRunnableApps.md) | Report can be run in these applications - Global level, property level or in the Sales &amp; Event Management. | [optional] 
**DataSourceType** | Pointer to **string** | Set to ODT for BI Publisher reports. | [optional] 
**DataSource** | Pointer to **string** | Data source for BI Publisher reports. | [optional] 
**Mandatory** | Pointer to **bool** | Flag indicating whether procedure or report is mandatory or not. | [optional] 
**FormToRun** | Pointer to **string** | Form which is run to collect parameter information to generate the report. | [optional] 
**ReportLanguage** | Pointer to **string** | The language in which the report is configured. This language code will be used when running a report for guests like registration cards, folio etc when GUEST LANGUAGE functionality is turned on. | [optional] 
**Active** | Pointer to **bool** | Flag indicating whether procedure or report is active to run. | [optional] 
**Protected** | Pointer to **bool** | Flag indicating whether report is protected or not. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence of procedure or report. | [optional] 
**ReportGroup** | Pointer to **string** | Report group to which the report is being added. | [optional] 
**MultiPropertyReport** | Pointer to **bool** | Flag which indicates if the report can be run for multiple properties. | [optional] 
**ExcelOutput** | Pointer to **bool** | Flag to indicate whether the report can be exported to Excel. | [optional] 
**AttachedReports** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**WatermarkDetails** | Pointer to [**WatermarkType**](WatermarkType.md) |  | [optional] 
**Parameters** | Pointer to [**[]ConfigReportParameterType**](ConfigReportParameterType.md) | A report parameter. | [optional] 
**RowsPerPage** | Pointer to **int32** | Rows to be entered for Key Packet report group. | [optional] 
**ColumnsPerPage** | Pointer to **int32** | Columns to be entered for Key Packet report group. | [optional] 
**ModuleId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ExternalReportUrl** | Pointer to [**ExternalUrlInfoType**](ExternalUrlInfoType.md) |  | [optional] 
**PrintReport** | Pointer to [**PrintReportType**](PrintReportType.md) |  | [optional] 

## Methods

### NewConfigGenericReportType

`func NewConfigGenericReportType() *ConfigGenericReportType`

NewConfigGenericReportType instantiates a new ConfigGenericReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigGenericReportTypeWithDefaults

`func NewConfigGenericReportTypeWithDefaults() *ConfigGenericReportType`

NewConfigGenericReportTypeWithDefaults instantiates a new ConfigGenericReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConfigGenericReportType) GetName() TranslationTextType1000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConfigGenericReportType) GetNameOk() (*TranslationTextType1000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConfigGenericReportType) SetName(v TranslationTextType1000)`

SetName sets Name field to given value.

### HasName

`func (o *ConfigGenericReportType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetReportName

`func (o *ConfigGenericReportType) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *ConfigGenericReportType) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *ConfigGenericReportType) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *ConfigGenericReportType) HasReportName() bool`

HasReportName returns a boolean if a field has been set.

### GetUserDefinedReport

`func (o *ConfigGenericReportType) GetUserDefinedReport() bool`

GetUserDefinedReport returns the UserDefinedReport field if non-nil, zero value otherwise.

### GetUserDefinedReportOk

`func (o *ConfigGenericReportType) GetUserDefinedReportOk() (*bool, bool)`

GetUserDefinedReportOk returns a tuple with the UserDefinedReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedReport

`func (o *ConfigGenericReportType) SetUserDefinedReport(v bool)`

SetUserDefinedReport sets UserDefinedReport field to given value.

### HasUserDefinedReport

`func (o *ConfigGenericReportType) HasUserDefinedReport() bool`

HasUserDefinedReport returns a boolean if a field has been set.

### GetModuleType

`func (o *ConfigGenericReportType) GetModuleType() ReportModuleTypeType`

GetModuleType returns the ModuleType field if non-nil, zero value otherwise.

### GetModuleTypeOk

`func (o *ConfigGenericReportType) GetModuleTypeOk() (*ReportModuleTypeType, bool)`

GetModuleTypeOk returns a tuple with the ModuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleType

`func (o *ConfigGenericReportType) SetModuleType(v ReportModuleTypeType)`

SetModuleType sets ModuleType field to given value.

### HasModuleType

`func (o *ConfigGenericReportType) HasModuleType() bool`

HasModuleType returns a boolean if a field has been set.

### GetUsedInApp

`func (o *ConfigGenericReportType) GetUsedInApp() []ReportRunnableApps`

GetUsedInApp returns the UsedInApp field if non-nil, zero value otherwise.

### GetUsedInAppOk

`func (o *ConfigGenericReportType) GetUsedInAppOk() (*[]ReportRunnableApps, bool)`

GetUsedInAppOk returns a tuple with the UsedInApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedInApp

`func (o *ConfigGenericReportType) SetUsedInApp(v []ReportRunnableApps)`

SetUsedInApp sets UsedInApp field to given value.

### HasUsedInApp

`func (o *ConfigGenericReportType) HasUsedInApp() bool`

HasUsedInApp returns a boolean if a field has been set.

### GetDataSourceType

`func (o *ConfigGenericReportType) GetDataSourceType() string`

GetDataSourceType returns the DataSourceType field if non-nil, zero value otherwise.

### GetDataSourceTypeOk

`func (o *ConfigGenericReportType) GetDataSourceTypeOk() (*string, bool)`

GetDataSourceTypeOk returns a tuple with the DataSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceType

`func (o *ConfigGenericReportType) SetDataSourceType(v string)`

SetDataSourceType sets DataSourceType field to given value.

### HasDataSourceType

`func (o *ConfigGenericReportType) HasDataSourceType() bool`

HasDataSourceType returns a boolean if a field has been set.

### GetDataSource

`func (o *ConfigGenericReportType) GetDataSource() string`

GetDataSource returns the DataSource field if non-nil, zero value otherwise.

### GetDataSourceOk

`func (o *ConfigGenericReportType) GetDataSourceOk() (*string, bool)`

GetDataSourceOk returns a tuple with the DataSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSource

`func (o *ConfigGenericReportType) SetDataSource(v string)`

SetDataSource sets DataSource field to given value.

### HasDataSource

`func (o *ConfigGenericReportType) HasDataSource() bool`

HasDataSource returns a boolean if a field has been set.

### GetMandatory

`func (o *ConfigGenericReportType) GetMandatory() bool`

GetMandatory returns the Mandatory field if non-nil, zero value otherwise.

### GetMandatoryOk

`func (o *ConfigGenericReportType) GetMandatoryOk() (*bool, bool)`

GetMandatoryOk returns a tuple with the Mandatory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatory

`func (o *ConfigGenericReportType) SetMandatory(v bool)`

SetMandatory sets Mandatory field to given value.

### HasMandatory

`func (o *ConfigGenericReportType) HasMandatory() bool`

HasMandatory returns a boolean if a field has been set.

### GetFormToRun

`func (o *ConfigGenericReportType) GetFormToRun() string`

GetFormToRun returns the FormToRun field if non-nil, zero value otherwise.

### GetFormToRunOk

`func (o *ConfigGenericReportType) GetFormToRunOk() (*string, bool)`

GetFormToRunOk returns a tuple with the FormToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormToRun

`func (o *ConfigGenericReportType) SetFormToRun(v string)`

SetFormToRun sets FormToRun field to given value.

### HasFormToRun

`func (o *ConfigGenericReportType) HasFormToRun() bool`

HasFormToRun returns a boolean if a field has been set.

### GetReportLanguage

`func (o *ConfigGenericReportType) GetReportLanguage() string`

GetReportLanguage returns the ReportLanguage field if non-nil, zero value otherwise.

### GetReportLanguageOk

`func (o *ConfigGenericReportType) GetReportLanguageOk() (*string, bool)`

GetReportLanguageOk returns a tuple with the ReportLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportLanguage

`func (o *ConfigGenericReportType) SetReportLanguage(v string)`

SetReportLanguage sets ReportLanguage field to given value.

### HasReportLanguage

`func (o *ConfigGenericReportType) HasReportLanguage() bool`

HasReportLanguage returns a boolean if a field has been set.

### GetActive

`func (o *ConfigGenericReportType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConfigGenericReportType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConfigGenericReportType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConfigGenericReportType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProtected

`func (o *ConfigGenericReportType) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *ConfigGenericReportType) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *ConfigGenericReportType) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *ConfigGenericReportType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigGenericReportType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigGenericReportType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigGenericReportType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigGenericReportType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetReportGroup

`func (o *ConfigGenericReportType) GetReportGroup() string`

GetReportGroup returns the ReportGroup field if non-nil, zero value otherwise.

### GetReportGroupOk

`func (o *ConfigGenericReportType) GetReportGroupOk() (*string, bool)`

GetReportGroupOk returns a tuple with the ReportGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportGroup

`func (o *ConfigGenericReportType) SetReportGroup(v string)`

SetReportGroup sets ReportGroup field to given value.

### HasReportGroup

`func (o *ConfigGenericReportType) HasReportGroup() bool`

HasReportGroup returns a boolean if a field has been set.

### GetMultiPropertyReport

`func (o *ConfigGenericReportType) GetMultiPropertyReport() bool`

GetMultiPropertyReport returns the MultiPropertyReport field if non-nil, zero value otherwise.

### GetMultiPropertyReportOk

`func (o *ConfigGenericReportType) GetMultiPropertyReportOk() (*bool, bool)`

GetMultiPropertyReportOk returns a tuple with the MultiPropertyReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiPropertyReport

`func (o *ConfigGenericReportType) SetMultiPropertyReport(v bool)`

SetMultiPropertyReport sets MultiPropertyReport field to given value.

### HasMultiPropertyReport

`func (o *ConfigGenericReportType) HasMultiPropertyReport() bool`

HasMultiPropertyReport returns a boolean if a field has been set.

### GetExcelOutput

`func (o *ConfigGenericReportType) GetExcelOutput() bool`

GetExcelOutput returns the ExcelOutput field if non-nil, zero value otherwise.

### GetExcelOutputOk

`func (o *ConfigGenericReportType) GetExcelOutputOk() (*bool, bool)`

GetExcelOutputOk returns a tuple with the ExcelOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcelOutput

`func (o *ConfigGenericReportType) SetExcelOutput(v bool)`

SetExcelOutput sets ExcelOutput field to given value.

### HasExcelOutput

`func (o *ConfigGenericReportType) HasExcelOutput() bool`

HasExcelOutput returns a boolean if a field has been set.

### GetAttachedReports

`func (o *ConfigGenericReportType) GetAttachedReports() []UniqueIDType`

GetAttachedReports returns the AttachedReports field if non-nil, zero value otherwise.

### GetAttachedReportsOk

`func (o *ConfigGenericReportType) GetAttachedReportsOk() (*[]UniqueIDType, bool)`

GetAttachedReportsOk returns a tuple with the AttachedReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedReports

`func (o *ConfigGenericReportType) SetAttachedReports(v []UniqueIDType)`

SetAttachedReports sets AttachedReports field to given value.

### HasAttachedReports

`func (o *ConfigGenericReportType) HasAttachedReports() bool`

HasAttachedReports returns a boolean if a field has been set.

### GetWatermarkDetails

`func (o *ConfigGenericReportType) GetWatermarkDetails() WatermarkType`

GetWatermarkDetails returns the WatermarkDetails field if non-nil, zero value otherwise.

### GetWatermarkDetailsOk

`func (o *ConfigGenericReportType) GetWatermarkDetailsOk() (*WatermarkType, bool)`

GetWatermarkDetailsOk returns a tuple with the WatermarkDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWatermarkDetails

`func (o *ConfigGenericReportType) SetWatermarkDetails(v WatermarkType)`

SetWatermarkDetails sets WatermarkDetails field to given value.

### HasWatermarkDetails

`func (o *ConfigGenericReportType) HasWatermarkDetails() bool`

HasWatermarkDetails returns a boolean if a field has been set.

### GetParameters

`func (o *ConfigGenericReportType) GetParameters() []ConfigReportParameterType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ConfigGenericReportType) GetParametersOk() (*[]ConfigReportParameterType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ConfigGenericReportType) SetParameters(v []ConfigReportParameterType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ConfigGenericReportType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetRowsPerPage

`func (o *ConfigGenericReportType) GetRowsPerPage() int32`

GetRowsPerPage returns the RowsPerPage field if non-nil, zero value otherwise.

### GetRowsPerPageOk

`func (o *ConfigGenericReportType) GetRowsPerPageOk() (*int32, bool)`

GetRowsPerPageOk returns a tuple with the RowsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowsPerPage

`func (o *ConfigGenericReportType) SetRowsPerPage(v int32)`

SetRowsPerPage sets RowsPerPage field to given value.

### HasRowsPerPage

`func (o *ConfigGenericReportType) HasRowsPerPage() bool`

HasRowsPerPage returns a boolean if a field has been set.

### GetColumnsPerPage

`func (o *ConfigGenericReportType) GetColumnsPerPage() int32`

GetColumnsPerPage returns the ColumnsPerPage field if non-nil, zero value otherwise.

### GetColumnsPerPageOk

`func (o *ConfigGenericReportType) GetColumnsPerPageOk() (*int32, bool)`

GetColumnsPerPageOk returns a tuple with the ColumnsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnsPerPage

`func (o *ConfigGenericReportType) SetColumnsPerPage(v int32)`

SetColumnsPerPage sets ColumnsPerPage field to given value.

### HasColumnsPerPage

`func (o *ConfigGenericReportType) HasColumnsPerPage() bool`

HasColumnsPerPage returns a boolean if a field has been set.

### GetModuleId

`func (o *ConfigGenericReportType) GetModuleId() UniqueIDType`

GetModuleId returns the ModuleId field if non-nil, zero value otherwise.

### GetModuleIdOk

`func (o *ConfigGenericReportType) GetModuleIdOk() (*UniqueIDType, bool)`

GetModuleIdOk returns a tuple with the ModuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleId

`func (o *ConfigGenericReportType) SetModuleId(v UniqueIDType)`

SetModuleId sets ModuleId field to given value.

### HasModuleId

`func (o *ConfigGenericReportType) HasModuleId() bool`

HasModuleId returns a boolean if a field has been set.

### GetExternalReportUrl

`func (o *ConfigGenericReportType) GetExternalReportUrl() ExternalUrlInfoType`

GetExternalReportUrl returns the ExternalReportUrl field if non-nil, zero value otherwise.

### GetExternalReportUrlOk

`func (o *ConfigGenericReportType) GetExternalReportUrlOk() (*ExternalUrlInfoType, bool)`

GetExternalReportUrlOk returns a tuple with the ExternalReportUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReportUrl

`func (o *ConfigGenericReportType) SetExternalReportUrl(v ExternalUrlInfoType)`

SetExternalReportUrl sets ExternalReportUrl field to given value.

### HasExternalReportUrl

`func (o *ConfigGenericReportType) HasExternalReportUrl() bool`

HasExternalReportUrl returns a boolean if a field has been set.

### GetPrintReport

`func (o *ConfigGenericReportType) GetPrintReport() PrintReportType`

GetPrintReport returns the PrintReport field if non-nil, zero value otherwise.

### GetPrintReportOk

`func (o *ConfigGenericReportType) GetPrintReportOk() (*PrintReportType, bool)`

GetPrintReportOk returns a tuple with the PrintReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintReport

`func (o *ConfigGenericReportType) SetPrintReport(v PrintReportType)`

SetPrintReport sets PrintReport field to given value.

### HasPrintReport

`func (o *ConfigGenericReportType) HasPrintReport() bool`

HasPrintReport returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


