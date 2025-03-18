# ExportXMLSimpleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | XML Tag name | [optional] 
**Value** | Pointer to **string** | Value for XML tag | [optional] 
**Length** | Pointer to [**ExportColumnLengthType**](ExportColumnLengthType.md) |  | [optional] 
**Required** | Pointer to **bool** | Determines if the tag need to be present in the data even if there is no value available | [optional] 
**ExportDataId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ParentDataID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewExportXMLSimpleType

`func NewExportXMLSimpleType() *ExportXMLSimpleType`

NewExportXMLSimpleType instantiates a new ExportXMLSimpleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportXMLSimpleTypeWithDefaults

`func NewExportXMLSimpleTypeWithDefaults() *ExportXMLSimpleType`

NewExportXMLSimpleTypeWithDefaults instantiates a new ExportXMLSimpleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExportXMLSimpleType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExportXMLSimpleType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExportXMLSimpleType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExportXMLSimpleType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *ExportXMLSimpleType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ExportXMLSimpleType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ExportXMLSimpleType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ExportXMLSimpleType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLength

`func (o *ExportXMLSimpleType) GetLength() ExportColumnLengthType`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *ExportXMLSimpleType) GetLengthOk() (*ExportColumnLengthType, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *ExportXMLSimpleType) SetLength(v ExportColumnLengthType)`

SetLength sets Length field to given value.

### HasLength

`func (o *ExportXMLSimpleType) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetRequired

`func (o *ExportXMLSimpleType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ExportXMLSimpleType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ExportXMLSimpleType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ExportXMLSimpleType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetExportDataId

`func (o *ExportXMLSimpleType) GetExportDataId() UniqueIDType`

GetExportDataId returns the ExportDataId field if non-nil, zero value otherwise.

### GetExportDataIdOk

`func (o *ExportXMLSimpleType) GetExportDataIdOk() (*UniqueIDType, bool)`

GetExportDataIdOk returns a tuple with the ExportDataId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataId

`func (o *ExportXMLSimpleType) SetExportDataId(v UniqueIDType)`

SetExportDataId sets ExportDataId field to given value.

### HasExportDataId

`func (o *ExportXMLSimpleType) HasExportDataId() bool`

HasExportDataId returns a boolean if a field has been set.

### GetParentDataID

`func (o *ExportXMLSimpleType) GetParentDataID() UniqueIDType`

GetParentDataID returns the ParentDataID field if non-nil, zero value otherwise.

### GetParentDataIDOk

`func (o *ExportXMLSimpleType) GetParentDataIDOk() (*UniqueIDType, bool)`

GetParentDataIDOk returns a tuple with the ParentDataID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentDataID

`func (o *ExportXMLSimpleType) SetParentDataID(v UniqueIDType)`

SetParentDataID sets ParentDataID field to given value.

### HasParentDataID

`func (o *ExportXMLSimpleType) HasParentDataID() bool`

HasParentDataID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


