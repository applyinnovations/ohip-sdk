# ExportColumnDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColumnAlignment** | Pointer to **string** | Column Alignment. | [optional] 
**ColumnDataType** | Pointer to [**ExportColumnInfoType**](ExportColumnInfoType.md) |  | [optional] 
**ColumnFormat** | Pointer to **string** | Column format. | [optional] 
**ColumnLength** | Pointer to **int32** | Length of the column. | [optional] 
**ColumnName** | Pointer to **string** | Name of the column to Export. | [optional] 
**ColumnOrderBy** | Pointer to **int32** | Order by column. | [optional] 
**ColumnType** | Pointer to **string** | Type of the column. | [optional] 
**DatabaseColumn** | Pointer to **bool** |  | [optional] 
**DefaultValue** | Pointer to **string** | Default value of the column. | [optional] 
**ExportDataId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Filter** | Pointer to **string** | Filter on the Additional Source View for XML Complex Elements. | [optional] 
**Formula** | Pointer to **string** | Formula for the Formula Column. | [optional] 
**IgnoreLength** | Pointer to **bool** |  | [optional] 
**ParentColumnId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SourceViewName** | Pointer to **string** | Name of an additional database view that the column, and its descendants, may be derived from. This column, and its descendants, may also be derived from the export header&#39;s source view, as well as any ancestor&#39;s source view. | [optional] 
**TagRequired** | Pointer to **bool** |  | [optional] 
**XMLAttribute** | Pointer to **bool** |  | [optional] 
**XMLColumnType** | Pointer to [**ExportColumnXMLType**](ExportColumnXMLType.md) |  | [optional] 

## Methods

### NewExportColumnDetailType

`func NewExportColumnDetailType() *ExportColumnDetailType`

NewExportColumnDetailType instantiates a new ExportColumnDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportColumnDetailTypeWithDefaults

`func NewExportColumnDetailTypeWithDefaults() *ExportColumnDetailType`

NewExportColumnDetailTypeWithDefaults instantiates a new ExportColumnDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumnAlignment

`func (o *ExportColumnDetailType) GetColumnAlignment() string`

GetColumnAlignment returns the ColumnAlignment field if non-nil, zero value otherwise.

### GetColumnAlignmentOk

`func (o *ExportColumnDetailType) GetColumnAlignmentOk() (*string, bool)`

GetColumnAlignmentOk returns a tuple with the ColumnAlignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnAlignment

`func (o *ExportColumnDetailType) SetColumnAlignment(v string)`

SetColumnAlignment sets ColumnAlignment field to given value.

### HasColumnAlignment

`func (o *ExportColumnDetailType) HasColumnAlignment() bool`

HasColumnAlignment returns a boolean if a field has been set.

### GetColumnDataType

`func (o *ExportColumnDetailType) GetColumnDataType() ExportColumnInfoType`

GetColumnDataType returns the ColumnDataType field if non-nil, zero value otherwise.

### GetColumnDataTypeOk

`func (o *ExportColumnDetailType) GetColumnDataTypeOk() (*ExportColumnInfoType, bool)`

GetColumnDataTypeOk returns a tuple with the ColumnDataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnDataType

`func (o *ExportColumnDetailType) SetColumnDataType(v ExportColumnInfoType)`

SetColumnDataType sets ColumnDataType field to given value.

### HasColumnDataType

`func (o *ExportColumnDetailType) HasColumnDataType() bool`

HasColumnDataType returns a boolean if a field has been set.

### GetColumnFormat

`func (o *ExportColumnDetailType) GetColumnFormat() string`

GetColumnFormat returns the ColumnFormat field if non-nil, zero value otherwise.

### GetColumnFormatOk

`func (o *ExportColumnDetailType) GetColumnFormatOk() (*string, bool)`

GetColumnFormatOk returns a tuple with the ColumnFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnFormat

`func (o *ExportColumnDetailType) SetColumnFormat(v string)`

SetColumnFormat sets ColumnFormat field to given value.

### HasColumnFormat

`func (o *ExportColumnDetailType) HasColumnFormat() bool`

HasColumnFormat returns a boolean if a field has been set.

### GetColumnLength

`func (o *ExportColumnDetailType) GetColumnLength() int32`

GetColumnLength returns the ColumnLength field if non-nil, zero value otherwise.

### GetColumnLengthOk

`func (o *ExportColumnDetailType) GetColumnLengthOk() (*int32, bool)`

GetColumnLengthOk returns a tuple with the ColumnLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnLength

`func (o *ExportColumnDetailType) SetColumnLength(v int32)`

SetColumnLength sets ColumnLength field to given value.

### HasColumnLength

`func (o *ExportColumnDetailType) HasColumnLength() bool`

HasColumnLength returns a boolean if a field has been set.

### GetColumnName

`func (o *ExportColumnDetailType) GetColumnName() string`

GetColumnName returns the ColumnName field if non-nil, zero value otherwise.

### GetColumnNameOk

`func (o *ExportColumnDetailType) GetColumnNameOk() (*string, bool)`

GetColumnNameOk returns a tuple with the ColumnName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnName

`func (o *ExportColumnDetailType) SetColumnName(v string)`

SetColumnName sets ColumnName field to given value.

### HasColumnName

`func (o *ExportColumnDetailType) HasColumnName() bool`

HasColumnName returns a boolean if a field has been set.

### GetColumnOrderBy

`func (o *ExportColumnDetailType) GetColumnOrderBy() int32`

GetColumnOrderBy returns the ColumnOrderBy field if non-nil, zero value otherwise.

### GetColumnOrderByOk

`func (o *ExportColumnDetailType) GetColumnOrderByOk() (*int32, bool)`

GetColumnOrderByOk returns a tuple with the ColumnOrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnOrderBy

`func (o *ExportColumnDetailType) SetColumnOrderBy(v int32)`

SetColumnOrderBy sets ColumnOrderBy field to given value.

### HasColumnOrderBy

`func (o *ExportColumnDetailType) HasColumnOrderBy() bool`

HasColumnOrderBy returns a boolean if a field has been set.

### GetColumnType

`func (o *ExportColumnDetailType) GetColumnType() string`

GetColumnType returns the ColumnType field if non-nil, zero value otherwise.

### GetColumnTypeOk

`func (o *ExportColumnDetailType) GetColumnTypeOk() (*string, bool)`

GetColumnTypeOk returns a tuple with the ColumnType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnType

`func (o *ExportColumnDetailType) SetColumnType(v string)`

SetColumnType sets ColumnType field to given value.

### HasColumnType

`func (o *ExportColumnDetailType) HasColumnType() bool`

HasColumnType returns a boolean if a field has been set.

### GetDatabaseColumn

`func (o *ExportColumnDetailType) GetDatabaseColumn() bool`

GetDatabaseColumn returns the DatabaseColumn field if non-nil, zero value otherwise.

### GetDatabaseColumnOk

`func (o *ExportColumnDetailType) GetDatabaseColumnOk() (*bool, bool)`

GetDatabaseColumnOk returns a tuple with the DatabaseColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseColumn

`func (o *ExportColumnDetailType) SetDatabaseColumn(v bool)`

SetDatabaseColumn sets DatabaseColumn field to given value.

### HasDatabaseColumn

`func (o *ExportColumnDetailType) HasDatabaseColumn() bool`

HasDatabaseColumn returns a boolean if a field has been set.

### GetDefaultValue

`func (o *ExportColumnDetailType) GetDefaultValue() string`

GetDefaultValue returns the DefaultValue field if non-nil, zero value otherwise.

### GetDefaultValueOk

`func (o *ExportColumnDetailType) GetDefaultValueOk() (*string, bool)`

GetDefaultValueOk returns a tuple with the DefaultValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValue

`func (o *ExportColumnDetailType) SetDefaultValue(v string)`

SetDefaultValue sets DefaultValue field to given value.

### HasDefaultValue

`func (o *ExportColumnDetailType) HasDefaultValue() bool`

HasDefaultValue returns a boolean if a field has been set.

### GetExportDataId

`func (o *ExportColumnDetailType) GetExportDataId() UniqueIDType`

GetExportDataId returns the ExportDataId field if non-nil, zero value otherwise.

### GetExportDataIdOk

`func (o *ExportColumnDetailType) GetExportDataIdOk() (*UniqueIDType, bool)`

GetExportDataIdOk returns a tuple with the ExportDataId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataId

`func (o *ExportColumnDetailType) SetExportDataId(v UniqueIDType)`

SetExportDataId sets ExportDataId field to given value.

### HasExportDataId

`func (o *ExportColumnDetailType) HasExportDataId() bool`

HasExportDataId returns a boolean if a field has been set.

### GetFilter

`func (o *ExportColumnDetailType) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *ExportColumnDetailType) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *ExportColumnDetailType) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *ExportColumnDetailType) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetFormula

`func (o *ExportColumnDetailType) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *ExportColumnDetailType) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *ExportColumnDetailType) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *ExportColumnDetailType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetIgnoreLength

`func (o *ExportColumnDetailType) GetIgnoreLength() bool`

GetIgnoreLength returns the IgnoreLength field if non-nil, zero value otherwise.

### GetIgnoreLengthOk

`func (o *ExportColumnDetailType) GetIgnoreLengthOk() (*bool, bool)`

GetIgnoreLengthOk returns a tuple with the IgnoreLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreLength

`func (o *ExportColumnDetailType) SetIgnoreLength(v bool)`

SetIgnoreLength sets IgnoreLength field to given value.

### HasIgnoreLength

`func (o *ExportColumnDetailType) HasIgnoreLength() bool`

HasIgnoreLength returns a boolean if a field has been set.

### GetParentColumnId

`func (o *ExportColumnDetailType) GetParentColumnId() UniqueIDType`

GetParentColumnId returns the ParentColumnId field if non-nil, zero value otherwise.

### GetParentColumnIdOk

`func (o *ExportColumnDetailType) GetParentColumnIdOk() (*UniqueIDType, bool)`

GetParentColumnIdOk returns a tuple with the ParentColumnId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentColumnId

`func (o *ExportColumnDetailType) SetParentColumnId(v UniqueIDType)`

SetParentColumnId sets ParentColumnId field to given value.

### HasParentColumnId

`func (o *ExportColumnDetailType) HasParentColumnId() bool`

HasParentColumnId returns a boolean if a field has been set.

### GetSourceViewName

`func (o *ExportColumnDetailType) GetSourceViewName() string`

GetSourceViewName returns the SourceViewName field if non-nil, zero value otherwise.

### GetSourceViewNameOk

`func (o *ExportColumnDetailType) GetSourceViewNameOk() (*string, bool)`

GetSourceViewNameOk returns a tuple with the SourceViewName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceViewName

`func (o *ExportColumnDetailType) SetSourceViewName(v string)`

SetSourceViewName sets SourceViewName field to given value.

### HasSourceViewName

`func (o *ExportColumnDetailType) HasSourceViewName() bool`

HasSourceViewName returns a boolean if a field has been set.

### GetTagRequired

`func (o *ExportColumnDetailType) GetTagRequired() bool`

GetTagRequired returns the TagRequired field if non-nil, zero value otherwise.

### GetTagRequiredOk

`func (o *ExportColumnDetailType) GetTagRequiredOk() (*bool, bool)`

GetTagRequiredOk returns a tuple with the TagRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagRequired

`func (o *ExportColumnDetailType) SetTagRequired(v bool)`

SetTagRequired sets TagRequired field to given value.

### HasTagRequired

`func (o *ExportColumnDetailType) HasTagRequired() bool`

HasTagRequired returns a boolean if a field has been set.

### GetXMLAttribute

`func (o *ExportColumnDetailType) GetXMLAttribute() bool`

GetXMLAttribute returns the XMLAttribute field if non-nil, zero value otherwise.

### GetXMLAttributeOk

`func (o *ExportColumnDetailType) GetXMLAttributeOk() (*bool, bool)`

GetXMLAttributeOk returns a tuple with the XMLAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLAttribute

`func (o *ExportColumnDetailType) SetXMLAttribute(v bool)`

SetXMLAttribute sets XMLAttribute field to given value.

### HasXMLAttribute

`func (o *ExportColumnDetailType) HasXMLAttribute() bool`

HasXMLAttribute returns a boolean if a field has been set.

### GetXMLColumnType

`func (o *ExportColumnDetailType) GetXMLColumnType() ExportColumnXMLType`

GetXMLColumnType returns the XMLColumnType field if non-nil, zero value otherwise.

### GetXMLColumnTypeOk

`func (o *ExportColumnDetailType) GetXMLColumnTypeOk() (*ExportColumnXMLType, bool)`

GetXMLColumnTypeOk returns a tuple with the XMLColumnType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLColumnType

`func (o *ExportColumnDetailType) SetXMLColumnType(v ExportColumnXMLType)`

SetXMLColumnType sets XMLColumnType field to given value.

### HasXMLColumnType

`func (o *ExportColumnDetailType) HasXMLColumnType() bool`

HasXMLColumnType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


