# ExportDataSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddNewLine** | Pointer to **bool** | A flag to add new line character after every row of data generated. | [optional] 
**AppendToFile** | Pointer to **bool** | A flag to indicate if the data should be appended to an existing file. | [optional] 
**ColumnSeparator** | Pointer to **string** | Column separator of the export file. | [optional] 
**ComponentExport** | Pointer to **bool** | A flag to indicate if this export contains export components. | [optional] 
**CompressData** | Pointer to **bool** | A flag to indicate if the export is compressed. | [optional] 
**CreateHeaderFooter** | Pointer to **bool** | A flag to indicate if Export header and footer should always be created even if no data is generated. | [optional] 
**DataSourceName** | Pointer to **string** | The source view code. | [optional] 
**FilterCondition** | Pointer to **string** | Where clause for the file to select data form the Source View. | [optional] 
**PostExportProcedure** | Pointer to **string** | The code to execute after running the export, usually to clean up data. | [optional] 
**PreExportProcedure** | Pointer to **string** | The code to execute prior to running the export in order to prepare the data. | [optional] 
**XMLDocumentTypeName** | Pointer to **string** | For XML exports this defines the optional document type name | [optional] 
**XMLDocumentTypePublicId** | Pointer to **string** | For XML exports this defines the optional public id in doc type tag | [optional] 
**XMLDocumentTypeSystemId** | Pointer to **string** | For XML exports this defines the optional system id in doc type tag | [optional] 
**XMLEncoding** | Pointer to **string** | For XML exports this allows to add the encoding attribute to the xml file header. | [optional] 
**XMLProcessingInstructions** | Pointer to **string** | For XML exports this allows to add the additional processing instructions to the XML file header if needed. | [optional] 
**XMLRootTag** | Pointer to **string** | Main tag for the xml document | [optional] 

## Methods

### NewExportDataSetupType

`func NewExportDataSetupType() *ExportDataSetupType`

NewExportDataSetupType instantiates a new ExportDataSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportDataSetupTypeWithDefaults

`func NewExportDataSetupTypeWithDefaults() *ExportDataSetupType`

NewExportDataSetupTypeWithDefaults instantiates a new ExportDataSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddNewLine

`func (o *ExportDataSetupType) GetAddNewLine() bool`

GetAddNewLine returns the AddNewLine field if non-nil, zero value otherwise.

### GetAddNewLineOk

`func (o *ExportDataSetupType) GetAddNewLineOk() (*bool, bool)`

GetAddNewLineOk returns a tuple with the AddNewLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddNewLine

`func (o *ExportDataSetupType) SetAddNewLine(v bool)`

SetAddNewLine sets AddNewLine field to given value.

### HasAddNewLine

`func (o *ExportDataSetupType) HasAddNewLine() bool`

HasAddNewLine returns a boolean if a field has been set.

### GetAppendToFile

`func (o *ExportDataSetupType) GetAppendToFile() bool`

GetAppendToFile returns the AppendToFile field if non-nil, zero value otherwise.

### GetAppendToFileOk

`func (o *ExportDataSetupType) GetAppendToFileOk() (*bool, bool)`

GetAppendToFileOk returns a tuple with the AppendToFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppendToFile

`func (o *ExportDataSetupType) SetAppendToFile(v bool)`

SetAppendToFile sets AppendToFile field to given value.

### HasAppendToFile

`func (o *ExportDataSetupType) HasAppendToFile() bool`

HasAppendToFile returns a boolean if a field has been set.

### GetColumnSeparator

`func (o *ExportDataSetupType) GetColumnSeparator() string`

GetColumnSeparator returns the ColumnSeparator field if non-nil, zero value otherwise.

### GetColumnSeparatorOk

`func (o *ExportDataSetupType) GetColumnSeparatorOk() (*string, bool)`

GetColumnSeparatorOk returns a tuple with the ColumnSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnSeparator

`func (o *ExportDataSetupType) SetColumnSeparator(v string)`

SetColumnSeparator sets ColumnSeparator field to given value.

### HasColumnSeparator

`func (o *ExportDataSetupType) HasColumnSeparator() bool`

HasColumnSeparator returns a boolean if a field has been set.

### GetComponentExport

`func (o *ExportDataSetupType) GetComponentExport() bool`

GetComponentExport returns the ComponentExport field if non-nil, zero value otherwise.

### GetComponentExportOk

`func (o *ExportDataSetupType) GetComponentExportOk() (*bool, bool)`

GetComponentExportOk returns a tuple with the ComponentExport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentExport

`func (o *ExportDataSetupType) SetComponentExport(v bool)`

SetComponentExport sets ComponentExport field to given value.

### HasComponentExport

`func (o *ExportDataSetupType) HasComponentExport() bool`

HasComponentExport returns a boolean if a field has been set.

### GetCompressData

`func (o *ExportDataSetupType) GetCompressData() bool`

GetCompressData returns the CompressData field if non-nil, zero value otherwise.

### GetCompressDataOk

`func (o *ExportDataSetupType) GetCompressDataOk() (*bool, bool)`

GetCompressDataOk returns a tuple with the CompressData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressData

`func (o *ExportDataSetupType) SetCompressData(v bool)`

SetCompressData sets CompressData field to given value.

### HasCompressData

`func (o *ExportDataSetupType) HasCompressData() bool`

HasCompressData returns a boolean if a field has been set.

### GetCreateHeaderFooter

`func (o *ExportDataSetupType) GetCreateHeaderFooter() bool`

GetCreateHeaderFooter returns the CreateHeaderFooter field if non-nil, zero value otherwise.

### GetCreateHeaderFooterOk

`func (o *ExportDataSetupType) GetCreateHeaderFooterOk() (*bool, bool)`

GetCreateHeaderFooterOk returns a tuple with the CreateHeaderFooter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateHeaderFooter

`func (o *ExportDataSetupType) SetCreateHeaderFooter(v bool)`

SetCreateHeaderFooter sets CreateHeaderFooter field to given value.

### HasCreateHeaderFooter

`func (o *ExportDataSetupType) HasCreateHeaderFooter() bool`

HasCreateHeaderFooter returns a boolean if a field has been set.

### GetDataSourceName

`func (o *ExportDataSetupType) GetDataSourceName() string`

GetDataSourceName returns the DataSourceName field if non-nil, zero value otherwise.

### GetDataSourceNameOk

`func (o *ExportDataSetupType) GetDataSourceNameOk() (*string, bool)`

GetDataSourceNameOk returns a tuple with the DataSourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceName

`func (o *ExportDataSetupType) SetDataSourceName(v string)`

SetDataSourceName sets DataSourceName field to given value.

### HasDataSourceName

`func (o *ExportDataSetupType) HasDataSourceName() bool`

HasDataSourceName returns a boolean if a field has been set.

### GetFilterCondition

`func (o *ExportDataSetupType) GetFilterCondition() string`

GetFilterCondition returns the FilterCondition field if non-nil, zero value otherwise.

### GetFilterConditionOk

`func (o *ExportDataSetupType) GetFilterConditionOk() (*string, bool)`

GetFilterConditionOk returns a tuple with the FilterCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCondition

`func (o *ExportDataSetupType) SetFilterCondition(v string)`

SetFilterCondition sets FilterCondition field to given value.

### HasFilterCondition

`func (o *ExportDataSetupType) HasFilterCondition() bool`

HasFilterCondition returns a boolean if a field has been set.

### GetPostExportProcedure

`func (o *ExportDataSetupType) GetPostExportProcedure() string`

GetPostExportProcedure returns the PostExportProcedure field if non-nil, zero value otherwise.

### GetPostExportProcedureOk

`func (o *ExportDataSetupType) GetPostExportProcedureOk() (*string, bool)`

GetPostExportProcedureOk returns a tuple with the PostExportProcedure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostExportProcedure

`func (o *ExportDataSetupType) SetPostExportProcedure(v string)`

SetPostExportProcedure sets PostExportProcedure field to given value.

### HasPostExportProcedure

`func (o *ExportDataSetupType) HasPostExportProcedure() bool`

HasPostExportProcedure returns a boolean if a field has been set.

### GetPreExportProcedure

`func (o *ExportDataSetupType) GetPreExportProcedure() string`

GetPreExportProcedure returns the PreExportProcedure field if non-nil, zero value otherwise.

### GetPreExportProcedureOk

`func (o *ExportDataSetupType) GetPreExportProcedureOk() (*string, bool)`

GetPreExportProcedureOk returns a tuple with the PreExportProcedure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreExportProcedure

`func (o *ExportDataSetupType) SetPreExportProcedure(v string)`

SetPreExportProcedure sets PreExportProcedure field to given value.

### HasPreExportProcedure

`func (o *ExportDataSetupType) HasPreExportProcedure() bool`

HasPreExportProcedure returns a boolean if a field has been set.

### GetXMLDocumentTypeName

`func (o *ExportDataSetupType) GetXMLDocumentTypeName() string`

GetXMLDocumentTypeName returns the XMLDocumentTypeName field if non-nil, zero value otherwise.

### GetXMLDocumentTypeNameOk

`func (o *ExportDataSetupType) GetXMLDocumentTypeNameOk() (*string, bool)`

GetXMLDocumentTypeNameOk returns a tuple with the XMLDocumentTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLDocumentTypeName

`func (o *ExportDataSetupType) SetXMLDocumentTypeName(v string)`

SetXMLDocumentTypeName sets XMLDocumentTypeName field to given value.

### HasXMLDocumentTypeName

`func (o *ExportDataSetupType) HasXMLDocumentTypeName() bool`

HasXMLDocumentTypeName returns a boolean if a field has been set.

### GetXMLDocumentTypePublicId

`func (o *ExportDataSetupType) GetXMLDocumentTypePublicId() string`

GetXMLDocumentTypePublicId returns the XMLDocumentTypePublicId field if non-nil, zero value otherwise.

### GetXMLDocumentTypePublicIdOk

`func (o *ExportDataSetupType) GetXMLDocumentTypePublicIdOk() (*string, bool)`

GetXMLDocumentTypePublicIdOk returns a tuple with the XMLDocumentTypePublicId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLDocumentTypePublicId

`func (o *ExportDataSetupType) SetXMLDocumentTypePublicId(v string)`

SetXMLDocumentTypePublicId sets XMLDocumentTypePublicId field to given value.

### HasXMLDocumentTypePublicId

`func (o *ExportDataSetupType) HasXMLDocumentTypePublicId() bool`

HasXMLDocumentTypePublicId returns a boolean if a field has been set.

### GetXMLDocumentTypeSystemId

`func (o *ExportDataSetupType) GetXMLDocumentTypeSystemId() string`

GetXMLDocumentTypeSystemId returns the XMLDocumentTypeSystemId field if non-nil, zero value otherwise.

### GetXMLDocumentTypeSystemIdOk

`func (o *ExportDataSetupType) GetXMLDocumentTypeSystemIdOk() (*string, bool)`

GetXMLDocumentTypeSystemIdOk returns a tuple with the XMLDocumentTypeSystemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLDocumentTypeSystemId

`func (o *ExportDataSetupType) SetXMLDocumentTypeSystemId(v string)`

SetXMLDocumentTypeSystemId sets XMLDocumentTypeSystemId field to given value.

### HasXMLDocumentTypeSystemId

`func (o *ExportDataSetupType) HasXMLDocumentTypeSystemId() bool`

HasXMLDocumentTypeSystemId returns a boolean if a field has been set.

### GetXMLEncoding

`func (o *ExportDataSetupType) GetXMLEncoding() string`

GetXMLEncoding returns the XMLEncoding field if non-nil, zero value otherwise.

### GetXMLEncodingOk

`func (o *ExportDataSetupType) GetXMLEncodingOk() (*string, bool)`

GetXMLEncodingOk returns a tuple with the XMLEncoding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLEncoding

`func (o *ExportDataSetupType) SetXMLEncoding(v string)`

SetXMLEncoding sets XMLEncoding field to given value.

### HasXMLEncoding

`func (o *ExportDataSetupType) HasXMLEncoding() bool`

HasXMLEncoding returns a boolean if a field has been set.

### GetXMLProcessingInstructions

`func (o *ExportDataSetupType) GetXMLProcessingInstructions() string`

GetXMLProcessingInstructions returns the XMLProcessingInstructions field if non-nil, zero value otherwise.

### GetXMLProcessingInstructionsOk

`func (o *ExportDataSetupType) GetXMLProcessingInstructionsOk() (*string, bool)`

GetXMLProcessingInstructionsOk returns a tuple with the XMLProcessingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLProcessingInstructions

`func (o *ExportDataSetupType) SetXMLProcessingInstructions(v string)`

SetXMLProcessingInstructions sets XMLProcessingInstructions field to given value.

### HasXMLProcessingInstructions

`func (o *ExportDataSetupType) HasXMLProcessingInstructions() bool`

HasXMLProcessingInstructions returns a boolean if a field has been set.

### GetXMLRootTag

`func (o *ExportDataSetupType) GetXMLRootTag() string`

GetXMLRootTag returns the XMLRootTag field if non-nil, zero value otherwise.

### GetXMLRootTagOk

`func (o *ExportDataSetupType) GetXMLRootTagOk() (*string, bool)`

GetXMLRootTagOk returns a tuple with the XMLRootTag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLRootTag

`func (o *ExportDataSetupType) SetXMLRootTag(v string)`

SetXMLRootTag sets XMLRootTag field to given value.

### HasXMLRootTag

`func (o *ExportDataSetupType) HasXMLRootTag() bool`

HasXMLRootTag returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


