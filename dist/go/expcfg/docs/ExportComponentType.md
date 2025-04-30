# ExportComponentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportFileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**FileType** | Pointer to **string** | The file type of the export. | [optional] 
**Description** | Pointer to **string** | The description of the export. | [optional] 
**ParameterForm** | Pointer to **string** | The name of the parameter form used to collect runtime information. | [optional] 
**ExportSequence** | Pointer to **int32** | Component export sequence | [optional] 
**ContainsSensitiveData** | Pointer to **bool** | Indicates if the export has sensitive data | [optional] 

## Methods

### NewExportComponentType

`func NewExportComponentType() *ExportComponentType`

NewExportComponentType instantiates a new ExportComponentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportComponentTypeWithDefaults

`func NewExportComponentTypeWithDefaults() *ExportComponentType`

NewExportComponentTypeWithDefaults instantiates a new ExportComponentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportFileId

`func (o *ExportComponentType) GetExportFileId() UniqueIDType`

GetExportFileId returns the ExportFileId field if non-nil, zero value otherwise.

### GetExportFileIdOk

`func (o *ExportComponentType) GetExportFileIdOk() (*UniqueIDType, bool)`

GetExportFileIdOk returns a tuple with the ExportFileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportFileId

`func (o *ExportComponentType) SetExportFileId(v UniqueIDType)`

SetExportFileId sets ExportFileId field to given value.

### HasExportFileId

`func (o *ExportComponentType) HasExportFileId() bool`

HasExportFileId returns a boolean if a field has been set.

### GetFileType

`func (o *ExportComponentType) GetFileType() string`

GetFileType returns the FileType field if non-nil, zero value otherwise.

### GetFileTypeOk

`func (o *ExportComponentType) GetFileTypeOk() (*string, bool)`

GetFileTypeOk returns a tuple with the FileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileType

`func (o *ExportComponentType) SetFileType(v string)`

SetFileType sets FileType field to given value.

### HasFileType

`func (o *ExportComponentType) HasFileType() bool`

HasFileType returns a boolean if a field has been set.

### GetDescription

`func (o *ExportComponentType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExportComponentType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExportComponentType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExportComponentType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParameterForm

`func (o *ExportComponentType) GetParameterForm() string`

GetParameterForm returns the ParameterForm field if non-nil, zero value otherwise.

### GetParameterFormOk

`func (o *ExportComponentType) GetParameterFormOk() (*string, bool)`

GetParameterFormOk returns a tuple with the ParameterForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterForm

`func (o *ExportComponentType) SetParameterForm(v string)`

SetParameterForm sets ParameterForm field to given value.

### HasParameterForm

`func (o *ExportComponentType) HasParameterForm() bool`

HasParameterForm returns a boolean if a field has been set.

### GetExportSequence

`func (o *ExportComponentType) GetExportSequence() int32`

GetExportSequence returns the ExportSequence field if non-nil, zero value otherwise.

### GetExportSequenceOk

`func (o *ExportComponentType) GetExportSequenceOk() (*int32, bool)`

GetExportSequenceOk returns a tuple with the ExportSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportSequence

`func (o *ExportComponentType) SetExportSequence(v int32)`

SetExportSequence sets ExportSequence field to given value.

### HasExportSequence

`func (o *ExportComponentType) HasExportSequence() bool`

HasExportSequence returns a boolean if a field has been set.

### GetContainsSensitiveData

`func (o *ExportComponentType) GetContainsSensitiveData() bool`

GetContainsSensitiveData returns the ContainsSensitiveData field if non-nil, zero value otherwise.

### GetContainsSensitiveDataOk

`func (o *ExportComponentType) GetContainsSensitiveDataOk() (*bool, bool)`

GetContainsSensitiveDataOk returns a tuple with the ContainsSensitiveData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsSensitiveData

`func (o *ExportComponentType) SetContainsSensitiveData(v bool)`

SetContainsSensitiveData sets ContainsSensitiveData field to given value.

### HasContainsSensitiveData

`func (o *ExportComponentType) HasContainsSensitiveData() bool`

HasContainsSensitiveData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


