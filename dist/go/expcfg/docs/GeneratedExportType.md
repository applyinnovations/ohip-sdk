# GeneratedExportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChecksumEnabled** | Pointer to **bool** | A flag that shows whether the checksum functionality is enabled. | [optional] 
**DataFromDate** | Pointer to **string** | The beginning date for the export. | [optional] 
**DataHeader** | Pointer to [**ExportHeaderSummaryType**](ExportHeaderSummaryType.md) |  | [optional] 
**DataToDate** | Pointer to **string** | The ending date for the export. | [optional] 
**ExportDataId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GeneratedDate** | Pointer to **string** | The date that the export was generated. | [optional] 
**GeneratedErrors** | Pointer to **string** | The errors generated during the export. | [optional] 
**GeneratedFileExtension** | Pointer to **string** | The generated file extension. | [optional] 
**GeneratedFileLocation** | Pointer to **string** | The generated file location. | [optional] 
**GeneratedFileName** | Pointer to **string** | The generated file name. | [optional] 
**GeneratedFilePath** | Pointer to **string** | The generated file path. | [optional] 
**HTTPUpload** | Pointer to **bool** | A flag to indicate if export file has to be uploaded automatically by IAS to HTTP site | [optional] 
**HasCreditCardData** | Pointer to **bool** | A flag that shows whether the there is credit card information in the export. Certain restrictions apply when this is detected. | [optional] 
**JobCompleted** | Pointer to **bool** | A Flag that indicates whether job completed succesfully or not. | [optional] 
**Status** | Pointer to [**GeneratedExportStatusType**](GeneratedExportStatusType.md) |  | [optional] 
**TotalRecords** | Pointer to **int32** | The total number of records generated. | [optional] 
**ZipFileName** | Pointer to **string** | The zip file name based on the formula used in the setup. | [optional] 

## Methods

### NewGeneratedExportType

`func NewGeneratedExportType() *GeneratedExportType`

NewGeneratedExportType instantiates a new GeneratedExportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratedExportTypeWithDefaults

`func NewGeneratedExportTypeWithDefaults() *GeneratedExportType`

NewGeneratedExportTypeWithDefaults instantiates a new GeneratedExportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChecksumEnabled

`func (o *GeneratedExportType) GetChecksumEnabled() bool`

GetChecksumEnabled returns the ChecksumEnabled field if non-nil, zero value otherwise.

### GetChecksumEnabledOk

`func (o *GeneratedExportType) GetChecksumEnabledOk() (*bool, bool)`

GetChecksumEnabledOk returns a tuple with the ChecksumEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecksumEnabled

`func (o *GeneratedExportType) SetChecksumEnabled(v bool)`

SetChecksumEnabled sets ChecksumEnabled field to given value.

### HasChecksumEnabled

`func (o *GeneratedExportType) HasChecksumEnabled() bool`

HasChecksumEnabled returns a boolean if a field has been set.

### GetDataFromDate

`func (o *GeneratedExportType) GetDataFromDate() string`

GetDataFromDate returns the DataFromDate field if non-nil, zero value otherwise.

### GetDataFromDateOk

`func (o *GeneratedExportType) GetDataFromDateOk() (*string, bool)`

GetDataFromDateOk returns a tuple with the DataFromDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataFromDate

`func (o *GeneratedExportType) SetDataFromDate(v string)`

SetDataFromDate sets DataFromDate field to given value.

### HasDataFromDate

`func (o *GeneratedExportType) HasDataFromDate() bool`

HasDataFromDate returns a boolean if a field has been set.

### GetDataHeader

`func (o *GeneratedExportType) GetDataHeader() ExportHeaderSummaryType`

GetDataHeader returns the DataHeader field if non-nil, zero value otherwise.

### GetDataHeaderOk

`func (o *GeneratedExportType) GetDataHeaderOk() (*ExportHeaderSummaryType, bool)`

GetDataHeaderOk returns a tuple with the DataHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataHeader

`func (o *GeneratedExportType) SetDataHeader(v ExportHeaderSummaryType)`

SetDataHeader sets DataHeader field to given value.

### HasDataHeader

`func (o *GeneratedExportType) HasDataHeader() bool`

HasDataHeader returns a boolean if a field has been set.

### GetDataToDate

`func (o *GeneratedExportType) GetDataToDate() string`

GetDataToDate returns the DataToDate field if non-nil, zero value otherwise.

### GetDataToDateOk

`func (o *GeneratedExportType) GetDataToDateOk() (*string, bool)`

GetDataToDateOk returns a tuple with the DataToDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataToDate

`func (o *GeneratedExportType) SetDataToDate(v string)`

SetDataToDate sets DataToDate field to given value.

### HasDataToDate

`func (o *GeneratedExportType) HasDataToDate() bool`

HasDataToDate returns a boolean if a field has been set.

### GetExportDataId

`func (o *GeneratedExportType) GetExportDataId() UniqueIDType`

GetExportDataId returns the ExportDataId field if non-nil, zero value otherwise.

### GetExportDataIdOk

`func (o *GeneratedExportType) GetExportDataIdOk() (*UniqueIDType, bool)`

GetExportDataIdOk returns a tuple with the ExportDataId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataId

`func (o *GeneratedExportType) SetExportDataId(v UniqueIDType)`

SetExportDataId sets ExportDataId field to given value.

### HasExportDataId

`func (o *GeneratedExportType) HasExportDataId() bool`

HasExportDataId returns a boolean if a field has been set.

### GetGeneratedDate

`func (o *GeneratedExportType) GetGeneratedDate() string`

GetGeneratedDate returns the GeneratedDate field if non-nil, zero value otherwise.

### GetGeneratedDateOk

`func (o *GeneratedExportType) GetGeneratedDateOk() (*string, bool)`

GetGeneratedDateOk returns a tuple with the GeneratedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDate

`func (o *GeneratedExportType) SetGeneratedDate(v string)`

SetGeneratedDate sets GeneratedDate field to given value.

### HasGeneratedDate

`func (o *GeneratedExportType) HasGeneratedDate() bool`

HasGeneratedDate returns a boolean if a field has been set.

### GetGeneratedErrors

`func (o *GeneratedExportType) GetGeneratedErrors() string`

GetGeneratedErrors returns the GeneratedErrors field if non-nil, zero value otherwise.

### GetGeneratedErrorsOk

`func (o *GeneratedExportType) GetGeneratedErrorsOk() (*string, bool)`

GetGeneratedErrorsOk returns a tuple with the GeneratedErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedErrors

`func (o *GeneratedExportType) SetGeneratedErrors(v string)`

SetGeneratedErrors sets GeneratedErrors field to given value.

### HasGeneratedErrors

`func (o *GeneratedExportType) HasGeneratedErrors() bool`

HasGeneratedErrors returns a boolean if a field has been set.

### GetGeneratedFileExtension

`func (o *GeneratedExportType) GetGeneratedFileExtension() string`

GetGeneratedFileExtension returns the GeneratedFileExtension field if non-nil, zero value otherwise.

### GetGeneratedFileExtensionOk

`func (o *GeneratedExportType) GetGeneratedFileExtensionOk() (*string, bool)`

GetGeneratedFileExtensionOk returns a tuple with the GeneratedFileExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedFileExtension

`func (o *GeneratedExportType) SetGeneratedFileExtension(v string)`

SetGeneratedFileExtension sets GeneratedFileExtension field to given value.

### HasGeneratedFileExtension

`func (o *GeneratedExportType) HasGeneratedFileExtension() bool`

HasGeneratedFileExtension returns a boolean if a field has been set.

### GetGeneratedFileLocation

`func (o *GeneratedExportType) GetGeneratedFileLocation() string`

GetGeneratedFileLocation returns the GeneratedFileLocation field if non-nil, zero value otherwise.

### GetGeneratedFileLocationOk

`func (o *GeneratedExportType) GetGeneratedFileLocationOk() (*string, bool)`

GetGeneratedFileLocationOk returns a tuple with the GeneratedFileLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedFileLocation

`func (o *GeneratedExportType) SetGeneratedFileLocation(v string)`

SetGeneratedFileLocation sets GeneratedFileLocation field to given value.

### HasGeneratedFileLocation

`func (o *GeneratedExportType) HasGeneratedFileLocation() bool`

HasGeneratedFileLocation returns a boolean if a field has been set.

### GetGeneratedFileName

`func (o *GeneratedExportType) GetGeneratedFileName() string`

GetGeneratedFileName returns the GeneratedFileName field if non-nil, zero value otherwise.

### GetGeneratedFileNameOk

`func (o *GeneratedExportType) GetGeneratedFileNameOk() (*string, bool)`

GetGeneratedFileNameOk returns a tuple with the GeneratedFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedFileName

`func (o *GeneratedExportType) SetGeneratedFileName(v string)`

SetGeneratedFileName sets GeneratedFileName field to given value.

### HasGeneratedFileName

`func (o *GeneratedExportType) HasGeneratedFileName() bool`

HasGeneratedFileName returns a boolean if a field has been set.

### GetGeneratedFilePath

`func (o *GeneratedExportType) GetGeneratedFilePath() string`

GetGeneratedFilePath returns the GeneratedFilePath field if non-nil, zero value otherwise.

### GetGeneratedFilePathOk

`func (o *GeneratedExportType) GetGeneratedFilePathOk() (*string, bool)`

GetGeneratedFilePathOk returns a tuple with the GeneratedFilePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedFilePath

`func (o *GeneratedExportType) SetGeneratedFilePath(v string)`

SetGeneratedFilePath sets GeneratedFilePath field to given value.

### HasGeneratedFilePath

`func (o *GeneratedExportType) HasGeneratedFilePath() bool`

HasGeneratedFilePath returns a boolean if a field has been set.

### GetHTTPUpload

`func (o *GeneratedExportType) GetHTTPUpload() bool`

GetHTTPUpload returns the HTTPUpload field if non-nil, zero value otherwise.

### GetHTTPUploadOk

`func (o *GeneratedExportType) GetHTTPUploadOk() (*bool, bool)`

GetHTTPUploadOk returns a tuple with the HTTPUpload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHTTPUpload

`func (o *GeneratedExportType) SetHTTPUpload(v bool)`

SetHTTPUpload sets HTTPUpload field to given value.

### HasHTTPUpload

`func (o *GeneratedExportType) HasHTTPUpload() bool`

HasHTTPUpload returns a boolean if a field has been set.

### GetHasCreditCardData

`func (o *GeneratedExportType) GetHasCreditCardData() bool`

GetHasCreditCardData returns the HasCreditCardData field if non-nil, zero value otherwise.

### GetHasCreditCardDataOk

`func (o *GeneratedExportType) GetHasCreditCardDataOk() (*bool, bool)`

GetHasCreditCardDataOk returns a tuple with the HasCreditCardData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCreditCardData

`func (o *GeneratedExportType) SetHasCreditCardData(v bool)`

SetHasCreditCardData sets HasCreditCardData field to given value.

### HasHasCreditCardData

`func (o *GeneratedExportType) HasHasCreditCardData() bool`

HasHasCreditCardData returns a boolean if a field has been set.

### GetJobCompleted

`func (o *GeneratedExportType) GetJobCompleted() bool`

GetJobCompleted returns the JobCompleted field if non-nil, zero value otherwise.

### GetJobCompletedOk

`func (o *GeneratedExportType) GetJobCompletedOk() (*bool, bool)`

GetJobCompletedOk returns a tuple with the JobCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobCompleted

`func (o *GeneratedExportType) SetJobCompleted(v bool)`

SetJobCompleted sets JobCompleted field to given value.

### HasJobCompleted

`func (o *GeneratedExportType) HasJobCompleted() bool`

HasJobCompleted returns a boolean if a field has been set.

### GetStatus

`func (o *GeneratedExportType) GetStatus() GeneratedExportStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GeneratedExportType) GetStatusOk() (*GeneratedExportStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GeneratedExportType) SetStatus(v GeneratedExportStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GeneratedExportType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalRecords

`func (o *GeneratedExportType) GetTotalRecords() int32`

GetTotalRecords returns the TotalRecords field if non-nil, zero value otherwise.

### GetTotalRecordsOk

`func (o *GeneratedExportType) GetTotalRecordsOk() (*int32, bool)`

GetTotalRecordsOk returns a tuple with the TotalRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRecords

`func (o *GeneratedExportType) SetTotalRecords(v int32)`

SetTotalRecords sets TotalRecords field to given value.

### HasTotalRecords

`func (o *GeneratedExportType) HasTotalRecords() bool`

HasTotalRecords returns a boolean if a field has been set.

### GetZipFileName

`func (o *GeneratedExportType) GetZipFileName() string`

GetZipFileName returns the ZipFileName field if non-nil, zero value otherwise.

### GetZipFileNameOk

`func (o *GeneratedExportType) GetZipFileNameOk() (*string, bool)`

GetZipFileNameOk returns a tuple with the ZipFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipFileName

`func (o *GeneratedExportType) SetZipFileName(v string)`

SetZipFileName sets ZipFileName field to given value.

### HasZipFileName

`func (o *GeneratedExportType) HasZipFileName() bool`

HasZipFileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


