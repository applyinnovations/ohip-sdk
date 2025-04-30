# ReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModuleId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReportName** | Pointer to **string** | Report name. | [optional] 
**ModuleType** | Pointer to [**ReportModuleTypeType**](ReportModuleTypeType.md) |  | [optional] 
**ReportDescription** | Pointer to [**TranslationTextType1000**](TranslationTextType1000.md) |  | [optional] 
**ReportGroupId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReportGroup** | Pointer to **string** | Report group. | [optional] 
**AttachedReports** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReportGroupDescription** | Pointer to **string** |  | [optional] 
**TranslatableReportGroupDescription** | Pointer to [**TranslationTextType1000**](TranslationTextType1000.md) |  | [optional] 
**Hotel** | Pointer to **string** | The hotel code that the report is associated with. | [optional] 
**FormToRun** | Pointer to **string** | Form which is run to collect parameter information to generate the report. | [optional] 
**LanguageCode** | Pointer to **string** | Report language code. | [optional] 
**HasParameters** | Pointer to **bool** | Flag which indicates whether the report requires parameters. | [optional] 
**Sample** | Pointer to **bool** | Flag which indicates whether the report is a sample provided in the application. | [optional] 
**Customized** | Pointer to **bool** | Flag which indicates whether the report is customized by the user. | [optional] 
**CustomizedRtfAttachId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CanRunSeperate** | Pointer to **bool** | Flag which indicates if the report can be run separately. | [optional] 
**MultiPropertyReport** | Pointer to **bool** | Flag which indicates if the report can be run for multiple properties. | [optional] 
**ProcedureRequired** | Pointer to **bool** | Flag which indicates whether the report requires a procedure. | [optional] 
**UserDefinedReport** | Pointer to **bool** | Flag which indicates whether the report is user defined. | [optional] 
**ProtectedReport** | Pointer to **bool** | Flag which indicates whether the report is protected. | [optional] 
**SystemReport** | Pointer to **bool** | Flag to indicate whether this is a system report. | [optional] 
**Destination** | Pointer to **string** | Report default destination. | [optional] 
**DefaultPrinterName** | Pointer to **string** | Default printer name. | [optional] 
**Copies** | Pointer to **int32** | Number of copies configured for report. | [optional] 
**ShiftReport** | Pointer to **bool** | Flag to indicate whether this is a shift report. | [optional] 
**DataSourceType** | Pointer to **string** | Set to ODT for BI Publisher reports. | [optional] 
**DataSource** | Pointer to **string** | Data source for BI Publisher reports. | [optional] 
**UsedInApp** | Pointer to **string** | A comma separated list of Opera V5 application indicators for which the report is enabled. | [optional] 
**Opera9Certified** | Pointer to **bool** | A flag indicating that the report has been certified for use with Opera 9. | [optional] 
**WatermarkDetails** | Pointer to [**WatermarkType**](WatermarkType.md) |  | [optional] 
**ExternalReportUrl** | Pointer to [**ExternalUrlInfoType**](ExternalUrlInfoType.md) |  | [optional] 
**RowsPerPage** | Pointer to **int32** | Rows for Key Packet report group. | [optional] 
**ColumnsPerPage** | Pointer to **int32** | Columns for Key Packet report group. | [optional] 
**ExcelOutput** | Pointer to **bool** | Flag to indicate whether the report can be exported to Excel. | [optional] 

## Methods

### NewReportType

`func NewReportType() *ReportType`

NewReportType instantiates a new ReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportTypeWithDefaults

`func NewReportTypeWithDefaults() *ReportType`

NewReportTypeWithDefaults instantiates a new ReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModuleId

`func (o *ReportType) GetModuleId() UniqueIDType`

GetModuleId returns the ModuleId field if non-nil, zero value otherwise.

### GetModuleIdOk

`func (o *ReportType) GetModuleIdOk() (*UniqueIDType, bool)`

GetModuleIdOk returns a tuple with the ModuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleId

`func (o *ReportType) SetModuleId(v UniqueIDType)`

SetModuleId sets ModuleId field to given value.

### HasModuleId

`func (o *ReportType) HasModuleId() bool`

HasModuleId returns a boolean if a field has been set.

### GetReportName

`func (o *ReportType) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *ReportType) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *ReportType) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *ReportType) HasReportName() bool`

HasReportName returns a boolean if a field has been set.

### GetModuleType

`func (o *ReportType) GetModuleType() ReportModuleTypeType`

GetModuleType returns the ModuleType field if non-nil, zero value otherwise.

### GetModuleTypeOk

`func (o *ReportType) GetModuleTypeOk() (*ReportModuleTypeType, bool)`

GetModuleTypeOk returns a tuple with the ModuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleType

`func (o *ReportType) SetModuleType(v ReportModuleTypeType)`

SetModuleType sets ModuleType field to given value.

### HasModuleType

`func (o *ReportType) HasModuleType() bool`

HasModuleType returns a boolean if a field has been set.

### GetReportDescription

`func (o *ReportType) GetReportDescription() TranslationTextType1000`

GetReportDescription returns the ReportDescription field if non-nil, zero value otherwise.

### GetReportDescriptionOk

`func (o *ReportType) GetReportDescriptionOk() (*TranslationTextType1000, bool)`

GetReportDescriptionOk returns a tuple with the ReportDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDescription

`func (o *ReportType) SetReportDescription(v TranslationTextType1000)`

SetReportDescription sets ReportDescription field to given value.

### HasReportDescription

`func (o *ReportType) HasReportDescription() bool`

HasReportDescription returns a boolean if a field has been set.

### GetReportGroupId

`func (o *ReportType) GetReportGroupId() UniqueIDType`

GetReportGroupId returns the ReportGroupId field if non-nil, zero value otherwise.

### GetReportGroupIdOk

`func (o *ReportType) GetReportGroupIdOk() (*UniqueIDType, bool)`

GetReportGroupIdOk returns a tuple with the ReportGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportGroupId

`func (o *ReportType) SetReportGroupId(v UniqueIDType)`

SetReportGroupId sets ReportGroupId field to given value.

### HasReportGroupId

`func (o *ReportType) HasReportGroupId() bool`

HasReportGroupId returns a boolean if a field has been set.

### GetReportGroup

`func (o *ReportType) GetReportGroup() string`

GetReportGroup returns the ReportGroup field if non-nil, zero value otherwise.

### GetReportGroupOk

`func (o *ReportType) GetReportGroupOk() (*string, bool)`

GetReportGroupOk returns a tuple with the ReportGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportGroup

`func (o *ReportType) SetReportGroup(v string)`

SetReportGroup sets ReportGroup field to given value.

### HasReportGroup

`func (o *ReportType) HasReportGroup() bool`

HasReportGroup returns a boolean if a field has been set.

### GetAttachedReports

`func (o *ReportType) GetAttachedReports() []UniqueIDType`

GetAttachedReports returns the AttachedReports field if non-nil, zero value otherwise.

### GetAttachedReportsOk

`func (o *ReportType) GetAttachedReportsOk() (*[]UniqueIDType, bool)`

GetAttachedReportsOk returns a tuple with the AttachedReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedReports

`func (o *ReportType) SetAttachedReports(v []UniqueIDType)`

SetAttachedReports sets AttachedReports field to given value.

### HasAttachedReports

`func (o *ReportType) HasAttachedReports() bool`

HasAttachedReports returns a boolean if a field has been set.

### GetReportGroupDescription

`func (o *ReportType) GetReportGroupDescription() string`

GetReportGroupDescription returns the ReportGroupDescription field if non-nil, zero value otherwise.

### GetReportGroupDescriptionOk

`func (o *ReportType) GetReportGroupDescriptionOk() (*string, bool)`

GetReportGroupDescriptionOk returns a tuple with the ReportGroupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportGroupDescription

`func (o *ReportType) SetReportGroupDescription(v string)`

SetReportGroupDescription sets ReportGroupDescription field to given value.

### HasReportGroupDescription

`func (o *ReportType) HasReportGroupDescription() bool`

HasReportGroupDescription returns a boolean if a field has been set.

### GetTranslatableReportGroupDescription

`func (o *ReportType) GetTranslatableReportGroupDescription() TranslationTextType1000`

GetTranslatableReportGroupDescription returns the TranslatableReportGroupDescription field if non-nil, zero value otherwise.

### GetTranslatableReportGroupDescriptionOk

`func (o *ReportType) GetTranslatableReportGroupDescriptionOk() (*TranslationTextType1000, bool)`

GetTranslatableReportGroupDescriptionOk returns a tuple with the TranslatableReportGroupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableReportGroupDescription

`func (o *ReportType) SetTranslatableReportGroupDescription(v TranslationTextType1000)`

SetTranslatableReportGroupDescription sets TranslatableReportGroupDescription field to given value.

### HasTranslatableReportGroupDescription

`func (o *ReportType) HasTranslatableReportGroupDescription() bool`

HasTranslatableReportGroupDescription returns a boolean if a field has been set.

### GetHotel

`func (o *ReportType) GetHotel() string`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ReportType) GetHotelOk() (*string, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ReportType) SetHotel(v string)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ReportType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetFormToRun

`func (o *ReportType) GetFormToRun() string`

GetFormToRun returns the FormToRun field if non-nil, zero value otherwise.

### GetFormToRunOk

`func (o *ReportType) GetFormToRunOk() (*string, bool)`

GetFormToRunOk returns a tuple with the FormToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormToRun

`func (o *ReportType) SetFormToRun(v string)`

SetFormToRun sets FormToRun field to given value.

### HasFormToRun

`func (o *ReportType) HasFormToRun() bool`

HasFormToRun returns a boolean if a field has been set.

### GetLanguageCode

`func (o *ReportType) GetLanguageCode() string`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *ReportType) GetLanguageCodeOk() (*string, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *ReportType) SetLanguageCode(v string)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *ReportType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetHasParameters

`func (o *ReportType) GetHasParameters() bool`

GetHasParameters returns the HasParameters field if non-nil, zero value otherwise.

### GetHasParametersOk

`func (o *ReportType) GetHasParametersOk() (*bool, bool)`

GetHasParametersOk returns a tuple with the HasParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasParameters

`func (o *ReportType) SetHasParameters(v bool)`

SetHasParameters sets HasParameters field to given value.

### HasHasParameters

`func (o *ReportType) HasHasParameters() bool`

HasHasParameters returns a boolean if a field has been set.

### GetSample

`func (o *ReportType) GetSample() bool`

GetSample returns the Sample field if non-nil, zero value otherwise.

### GetSampleOk

`func (o *ReportType) GetSampleOk() (*bool, bool)`

GetSampleOk returns a tuple with the Sample field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSample

`func (o *ReportType) SetSample(v bool)`

SetSample sets Sample field to given value.

### HasSample

`func (o *ReportType) HasSample() bool`

HasSample returns a boolean if a field has been set.

### GetCustomized

`func (o *ReportType) GetCustomized() bool`

GetCustomized returns the Customized field if non-nil, zero value otherwise.

### GetCustomizedOk

`func (o *ReportType) GetCustomizedOk() (*bool, bool)`

GetCustomizedOk returns a tuple with the Customized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomized

`func (o *ReportType) SetCustomized(v bool)`

SetCustomized sets Customized field to given value.

### HasCustomized

`func (o *ReportType) HasCustomized() bool`

HasCustomized returns a boolean if a field has been set.

### GetCustomizedRtfAttachId

`func (o *ReportType) GetCustomizedRtfAttachId() UniqueIDType`

GetCustomizedRtfAttachId returns the CustomizedRtfAttachId field if non-nil, zero value otherwise.

### GetCustomizedRtfAttachIdOk

`func (o *ReportType) GetCustomizedRtfAttachIdOk() (*UniqueIDType, bool)`

GetCustomizedRtfAttachIdOk returns a tuple with the CustomizedRtfAttachId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizedRtfAttachId

`func (o *ReportType) SetCustomizedRtfAttachId(v UniqueIDType)`

SetCustomizedRtfAttachId sets CustomizedRtfAttachId field to given value.

### HasCustomizedRtfAttachId

`func (o *ReportType) HasCustomizedRtfAttachId() bool`

HasCustomizedRtfAttachId returns a boolean if a field has been set.

### GetCanRunSeperate

`func (o *ReportType) GetCanRunSeperate() bool`

GetCanRunSeperate returns the CanRunSeperate field if non-nil, zero value otherwise.

### GetCanRunSeperateOk

`func (o *ReportType) GetCanRunSeperateOk() (*bool, bool)`

GetCanRunSeperateOk returns a tuple with the CanRunSeperate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanRunSeperate

`func (o *ReportType) SetCanRunSeperate(v bool)`

SetCanRunSeperate sets CanRunSeperate field to given value.

### HasCanRunSeperate

`func (o *ReportType) HasCanRunSeperate() bool`

HasCanRunSeperate returns a boolean if a field has been set.

### GetMultiPropertyReport

`func (o *ReportType) GetMultiPropertyReport() bool`

GetMultiPropertyReport returns the MultiPropertyReport field if non-nil, zero value otherwise.

### GetMultiPropertyReportOk

`func (o *ReportType) GetMultiPropertyReportOk() (*bool, bool)`

GetMultiPropertyReportOk returns a tuple with the MultiPropertyReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiPropertyReport

`func (o *ReportType) SetMultiPropertyReport(v bool)`

SetMultiPropertyReport sets MultiPropertyReport field to given value.

### HasMultiPropertyReport

`func (o *ReportType) HasMultiPropertyReport() bool`

HasMultiPropertyReport returns a boolean if a field has been set.

### GetProcedureRequired

`func (o *ReportType) GetProcedureRequired() bool`

GetProcedureRequired returns the ProcedureRequired field if non-nil, zero value otherwise.

### GetProcedureRequiredOk

`func (o *ReportType) GetProcedureRequiredOk() (*bool, bool)`

GetProcedureRequiredOk returns a tuple with the ProcedureRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcedureRequired

`func (o *ReportType) SetProcedureRequired(v bool)`

SetProcedureRequired sets ProcedureRequired field to given value.

### HasProcedureRequired

`func (o *ReportType) HasProcedureRequired() bool`

HasProcedureRequired returns a boolean if a field has been set.

### GetUserDefinedReport

`func (o *ReportType) GetUserDefinedReport() bool`

GetUserDefinedReport returns the UserDefinedReport field if non-nil, zero value otherwise.

### GetUserDefinedReportOk

`func (o *ReportType) GetUserDefinedReportOk() (*bool, bool)`

GetUserDefinedReportOk returns a tuple with the UserDefinedReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedReport

`func (o *ReportType) SetUserDefinedReport(v bool)`

SetUserDefinedReport sets UserDefinedReport field to given value.

### HasUserDefinedReport

`func (o *ReportType) HasUserDefinedReport() bool`

HasUserDefinedReport returns a boolean if a field has been set.

### GetProtectedReport

`func (o *ReportType) GetProtectedReport() bool`

GetProtectedReport returns the ProtectedReport field if non-nil, zero value otherwise.

### GetProtectedReportOk

`func (o *ReportType) GetProtectedReportOk() (*bool, bool)`

GetProtectedReportOk returns a tuple with the ProtectedReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedReport

`func (o *ReportType) SetProtectedReport(v bool)`

SetProtectedReport sets ProtectedReport field to given value.

### HasProtectedReport

`func (o *ReportType) HasProtectedReport() bool`

HasProtectedReport returns a boolean if a field has been set.

### GetSystemReport

`func (o *ReportType) GetSystemReport() bool`

GetSystemReport returns the SystemReport field if non-nil, zero value otherwise.

### GetSystemReportOk

`func (o *ReportType) GetSystemReportOk() (*bool, bool)`

GetSystemReportOk returns a tuple with the SystemReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemReport

`func (o *ReportType) SetSystemReport(v bool)`

SetSystemReport sets SystemReport field to given value.

### HasSystemReport

`func (o *ReportType) HasSystemReport() bool`

HasSystemReport returns a boolean if a field has been set.

### GetDestination

`func (o *ReportType) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *ReportType) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *ReportType) SetDestination(v string)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *ReportType) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetDefaultPrinterName

`func (o *ReportType) GetDefaultPrinterName() string`

GetDefaultPrinterName returns the DefaultPrinterName field if non-nil, zero value otherwise.

### GetDefaultPrinterNameOk

`func (o *ReportType) GetDefaultPrinterNameOk() (*string, bool)`

GetDefaultPrinterNameOk returns a tuple with the DefaultPrinterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPrinterName

`func (o *ReportType) SetDefaultPrinterName(v string)`

SetDefaultPrinterName sets DefaultPrinterName field to given value.

### HasDefaultPrinterName

`func (o *ReportType) HasDefaultPrinterName() bool`

HasDefaultPrinterName returns a boolean if a field has been set.

### GetCopies

`func (o *ReportType) GetCopies() int32`

GetCopies returns the Copies field if non-nil, zero value otherwise.

### GetCopiesOk

`func (o *ReportType) GetCopiesOk() (*int32, bool)`

GetCopiesOk returns a tuple with the Copies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopies

`func (o *ReportType) SetCopies(v int32)`

SetCopies sets Copies field to given value.

### HasCopies

`func (o *ReportType) HasCopies() bool`

HasCopies returns a boolean if a field has been set.

### GetShiftReport

`func (o *ReportType) GetShiftReport() bool`

GetShiftReport returns the ShiftReport field if non-nil, zero value otherwise.

### GetShiftReportOk

`func (o *ReportType) GetShiftReportOk() (*bool, bool)`

GetShiftReportOk returns a tuple with the ShiftReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShiftReport

`func (o *ReportType) SetShiftReport(v bool)`

SetShiftReport sets ShiftReport field to given value.

### HasShiftReport

`func (o *ReportType) HasShiftReport() bool`

HasShiftReport returns a boolean if a field has been set.

### GetDataSourceType

`func (o *ReportType) GetDataSourceType() string`

GetDataSourceType returns the DataSourceType field if non-nil, zero value otherwise.

### GetDataSourceTypeOk

`func (o *ReportType) GetDataSourceTypeOk() (*string, bool)`

GetDataSourceTypeOk returns a tuple with the DataSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceType

`func (o *ReportType) SetDataSourceType(v string)`

SetDataSourceType sets DataSourceType field to given value.

### HasDataSourceType

`func (o *ReportType) HasDataSourceType() bool`

HasDataSourceType returns a boolean if a field has been set.

### GetDataSource

`func (o *ReportType) GetDataSource() string`

GetDataSource returns the DataSource field if non-nil, zero value otherwise.

### GetDataSourceOk

`func (o *ReportType) GetDataSourceOk() (*string, bool)`

GetDataSourceOk returns a tuple with the DataSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSource

`func (o *ReportType) SetDataSource(v string)`

SetDataSource sets DataSource field to given value.

### HasDataSource

`func (o *ReportType) HasDataSource() bool`

HasDataSource returns a boolean if a field has been set.

### GetUsedInApp

`func (o *ReportType) GetUsedInApp() string`

GetUsedInApp returns the UsedInApp field if non-nil, zero value otherwise.

### GetUsedInAppOk

`func (o *ReportType) GetUsedInAppOk() (*string, bool)`

GetUsedInAppOk returns a tuple with the UsedInApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedInApp

`func (o *ReportType) SetUsedInApp(v string)`

SetUsedInApp sets UsedInApp field to given value.

### HasUsedInApp

`func (o *ReportType) HasUsedInApp() bool`

HasUsedInApp returns a boolean if a field has been set.

### GetOpera9Certified

`func (o *ReportType) GetOpera9Certified() bool`

GetOpera9Certified returns the Opera9Certified field if non-nil, zero value otherwise.

### GetOpera9CertifiedOk

`func (o *ReportType) GetOpera9CertifiedOk() (*bool, bool)`

GetOpera9CertifiedOk returns a tuple with the Opera9Certified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpera9Certified

`func (o *ReportType) SetOpera9Certified(v bool)`

SetOpera9Certified sets Opera9Certified field to given value.

### HasOpera9Certified

`func (o *ReportType) HasOpera9Certified() bool`

HasOpera9Certified returns a boolean if a field has been set.

### GetWatermarkDetails

`func (o *ReportType) GetWatermarkDetails() WatermarkType`

GetWatermarkDetails returns the WatermarkDetails field if non-nil, zero value otherwise.

### GetWatermarkDetailsOk

`func (o *ReportType) GetWatermarkDetailsOk() (*WatermarkType, bool)`

GetWatermarkDetailsOk returns a tuple with the WatermarkDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWatermarkDetails

`func (o *ReportType) SetWatermarkDetails(v WatermarkType)`

SetWatermarkDetails sets WatermarkDetails field to given value.

### HasWatermarkDetails

`func (o *ReportType) HasWatermarkDetails() bool`

HasWatermarkDetails returns a boolean if a field has been set.

### GetExternalReportUrl

`func (o *ReportType) GetExternalReportUrl() ExternalUrlInfoType`

GetExternalReportUrl returns the ExternalReportUrl field if non-nil, zero value otherwise.

### GetExternalReportUrlOk

`func (o *ReportType) GetExternalReportUrlOk() (*ExternalUrlInfoType, bool)`

GetExternalReportUrlOk returns a tuple with the ExternalReportUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReportUrl

`func (o *ReportType) SetExternalReportUrl(v ExternalUrlInfoType)`

SetExternalReportUrl sets ExternalReportUrl field to given value.

### HasExternalReportUrl

`func (o *ReportType) HasExternalReportUrl() bool`

HasExternalReportUrl returns a boolean if a field has been set.

### GetRowsPerPage

`func (o *ReportType) GetRowsPerPage() int32`

GetRowsPerPage returns the RowsPerPage field if non-nil, zero value otherwise.

### GetRowsPerPageOk

`func (o *ReportType) GetRowsPerPageOk() (*int32, bool)`

GetRowsPerPageOk returns a tuple with the RowsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowsPerPage

`func (o *ReportType) SetRowsPerPage(v int32)`

SetRowsPerPage sets RowsPerPage field to given value.

### HasRowsPerPage

`func (o *ReportType) HasRowsPerPage() bool`

HasRowsPerPage returns a boolean if a field has been set.

### GetColumnsPerPage

`func (o *ReportType) GetColumnsPerPage() int32`

GetColumnsPerPage returns the ColumnsPerPage field if non-nil, zero value otherwise.

### GetColumnsPerPageOk

`func (o *ReportType) GetColumnsPerPageOk() (*int32, bool)`

GetColumnsPerPageOk returns a tuple with the ColumnsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnsPerPage

`func (o *ReportType) SetColumnsPerPage(v int32)`

SetColumnsPerPage sets ColumnsPerPage field to given value.

### HasColumnsPerPage

`func (o *ReportType) HasColumnsPerPage() bool`

HasColumnsPerPage returns a boolean if a field has been set.

### GetExcelOutput

`func (o *ReportType) GetExcelOutput() bool`

GetExcelOutput returns the ExcelOutput field if non-nil, zero value otherwise.

### GetExcelOutputOk

`func (o *ReportType) GetExcelOutputOk() (*bool, bool)`

GetExcelOutputOk returns a tuple with the ExcelOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcelOutput

`func (o *ReportType) SetExcelOutput(v bool)`

SetExcelOutput sets ExcelOutput field to given value.

### HasExcelOutput

`func (o *ReportType) HasExcelOutput() bool`

HasExcelOutput returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


