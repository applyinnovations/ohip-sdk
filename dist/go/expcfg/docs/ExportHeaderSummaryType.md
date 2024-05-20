# ExportHeaderSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainsSensitiveData** | Pointer to **bool** | Indicates if the export has sensitive data | [optional] 
**Description** | Pointer to **string** | The description of the export. | [optional] 
**ExportFileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ExportSequence** | Pointer to **int32** | Component export sequence | [optional] 
**ExportType** | Pointer to [**ExportType**](ExportType.md) |  | [optional] 
**ExportXml** | Pointer to **bool** | Indicates if the export is an XML file | [optional] 
**FileType** | Pointer to **string** | The file type of the export. | [optional] 
**HotelId** | Pointer to **string** | The hotel code for the export. | [optional] 
**Inactive** | Pointer to **bool** | An indicator which show the active status of the export. | [optional] 
**LogLevel** | Pointer to **int32** | Internal number to indicate the log level used when generating the export. | [optional] 
**MasterExportId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ParameterForm** | Pointer to **string** | The name of the parameter form used to collect runtime information. | [optional] 
**SourceDescription** | Pointer to **string** | The description of the source file of the export. | [optional] 

## Methods

### NewExportHeaderSummaryType

`func NewExportHeaderSummaryType() *ExportHeaderSummaryType`

NewExportHeaderSummaryType instantiates a new ExportHeaderSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportHeaderSummaryTypeWithDefaults

`func NewExportHeaderSummaryTypeWithDefaults() *ExportHeaderSummaryType`

NewExportHeaderSummaryTypeWithDefaults instantiates a new ExportHeaderSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainsSensitiveData

`func (o *ExportHeaderSummaryType) GetContainsSensitiveData() bool`

GetContainsSensitiveData returns the ContainsSensitiveData field if non-nil, zero value otherwise.

### GetContainsSensitiveDataOk

`func (o *ExportHeaderSummaryType) GetContainsSensitiveDataOk() (*bool, bool)`

GetContainsSensitiveDataOk returns a tuple with the ContainsSensitiveData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsSensitiveData

`func (o *ExportHeaderSummaryType) SetContainsSensitiveData(v bool)`

SetContainsSensitiveData sets ContainsSensitiveData field to given value.

### HasContainsSensitiveData

`func (o *ExportHeaderSummaryType) HasContainsSensitiveData() bool`

HasContainsSensitiveData returns a boolean if a field has been set.

### GetDescription

`func (o *ExportHeaderSummaryType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExportHeaderSummaryType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExportHeaderSummaryType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExportHeaderSummaryType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExportFileId

`func (o *ExportHeaderSummaryType) GetExportFileId() UniqueIDType`

GetExportFileId returns the ExportFileId field if non-nil, zero value otherwise.

### GetExportFileIdOk

`func (o *ExportHeaderSummaryType) GetExportFileIdOk() (*UniqueIDType, bool)`

GetExportFileIdOk returns a tuple with the ExportFileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportFileId

`func (o *ExportHeaderSummaryType) SetExportFileId(v UniqueIDType)`

SetExportFileId sets ExportFileId field to given value.

### HasExportFileId

`func (o *ExportHeaderSummaryType) HasExportFileId() bool`

HasExportFileId returns a boolean if a field has been set.

### GetExportSequence

`func (o *ExportHeaderSummaryType) GetExportSequence() int32`

GetExportSequence returns the ExportSequence field if non-nil, zero value otherwise.

### GetExportSequenceOk

`func (o *ExportHeaderSummaryType) GetExportSequenceOk() (*int32, bool)`

GetExportSequenceOk returns a tuple with the ExportSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportSequence

`func (o *ExportHeaderSummaryType) SetExportSequence(v int32)`

SetExportSequence sets ExportSequence field to given value.

### HasExportSequence

`func (o *ExportHeaderSummaryType) HasExportSequence() bool`

HasExportSequence returns a boolean if a field has been set.

### GetExportType

`func (o *ExportHeaderSummaryType) GetExportType() ExportType`

GetExportType returns the ExportType field if non-nil, zero value otherwise.

### GetExportTypeOk

`func (o *ExportHeaderSummaryType) GetExportTypeOk() (*ExportType, bool)`

GetExportTypeOk returns a tuple with the ExportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportType

`func (o *ExportHeaderSummaryType) SetExportType(v ExportType)`

SetExportType sets ExportType field to given value.

### HasExportType

`func (o *ExportHeaderSummaryType) HasExportType() bool`

HasExportType returns a boolean if a field has been set.

### GetExportXml

`func (o *ExportHeaderSummaryType) GetExportXml() bool`

GetExportXml returns the ExportXml field if non-nil, zero value otherwise.

### GetExportXmlOk

`func (o *ExportHeaderSummaryType) GetExportXmlOk() (*bool, bool)`

GetExportXmlOk returns a tuple with the ExportXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportXml

`func (o *ExportHeaderSummaryType) SetExportXml(v bool)`

SetExportXml sets ExportXml field to given value.

### HasExportXml

`func (o *ExportHeaderSummaryType) HasExportXml() bool`

HasExportXml returns a boolean if a field has been set.

### GetFileType

`func (o *ExportHeaderSummaryType) GetFileType() string`

GetFileType returns the FileType field if non-nil, zero value otherwise.

### GetFileTypeOk

`func (o *ExportHeaderSummaryType) GetFileTypeOk() (*string, bool)`

GetFileTypeOk returns a tuple with the FileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileType

`func (o *ExportHeaderSummaryType) SetFileType(v string)`

SetFileType sets FileType field to given value.

### HasFileType

`func (o *ExportHeaderSummaryType) HasFileType() bool`

HasFileType returns a boolean if a field has been set.

### GetHotelId

`func (o *ExportHeaderSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExportHeaderSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExportHeaderSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExportHeaderSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *ExportHeaderSummaryType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ExportHeaderSummaryType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ExportHeaderSummaryType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ExportHeaderSummaryType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLogLevel

`func (o *ExportHeaderSummaryType) GetLogLevel() int32`

GetLogLevel returns the LogLevel field if non-nil, zero value otherwise.

### GetLogLevelOk

`func (o *ExportHeaderSummaryType) GetLogLevelOk() (*int32, bool)`

GetLogLevelOk returns a tuple with the LogLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevel

`func (o *ExportHeaderSummaryType) SetLogLevel(v int32)`

SetLogLevel sets LogLevel field to given value.

### HasLogLevel

`func (o *ExportHeaderSummaryType) HasLogLevel() bool`

HasLogLevel returns a boolean if a field has been set.

### GetMasterExportId

`func (o *ExportHeaderSummaryType) GetMasterExportId() UniqueIDType`

GetMasterExportId returns the MasterExportId field if non-nil, zero value otherwise.

### GetMasterExportIdOk

`func (o *ExportHeaderSummaryType) GetMasterExportIdOk() (*UniqueIDType, bool)`

GetMasterExportIdOk returns a tuple with the MasterExportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterExportId

`func (o *ExportHeaderSummaryType) SetMasterExportId(v UniqueIDType)`

SetMasterExportId sets MasterExportId field to given value.

### HasMasterExportId

`func (o *ExportHeaderSummaryType) HasMasterExportId() bool`

HasMasterExportId returns a boolean if a field has been set.

### GetParameterForm

`func (o *ExportHeaderSummaryType) GetParameterForm() string`

GetParameterForm returns the ParameterForm field if non-nil, zero value otherwise.

### GetParameterFormOk

`func (o *ExportHeaderSummaryType) GetParameterFormOk() (*string, bool)`

GetParameterFormOk returns a tuple with the ParameterForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterForm

`func (o *ExportHeaderSummaryType) SetParameterForm(v string)`

SetParameterForm sets ParameterForm field to given value.

### HasParameterForm

`func (o *ExportHeaderSummaryType) HasParameterForm() bool`

HasParameterForm returns a boolean if a field has been set.

### GetSourceDescription

`func (o *ExportHeaderSummaryType) GetSourceDescription() string`

GetSourceDescription returns the SourceDescription field if non-nil, zero value otherwise.

### GetSourceDescriptionOk

`func (o *ExportHeaderSummaryType) GetSourceDescriptionOk() (*string, bool)`

GetSourceDescriptionOk returns a tuple with the SourceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDescription

`func (o *ExportHeaderSummaryType) SetSourceDescription(v string)`

SetSourceDescription sets SourceDescription field to given value.

### HasSourceDescription

`func (o *ExportHeaderSummaryType) HasSourceDescription() bool`

HasSourceDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


