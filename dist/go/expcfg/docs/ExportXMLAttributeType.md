# ExportXMLAttributeType

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

### NewExportXMLAttributeType

`func NewExportXMLAttributeType() *ExportXMLAttributeType`

NewExportXMLAttributeType instantiates a new ExportXMLAttributeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportXMLAttributeTypeWithDefaults

`func NewExportXMLAttributeTypeWithDefaults() *ExportXMLAttributeType`

NewExportXMLAttributeTypeWithDefaults instantiates a new ExportXMLAttributeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExportXMLAttributeType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExportXMLAttributeType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExportXMLAttributeType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExportXMLAttributeType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *ExportXMLAttributeType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ExportXMLAttributeType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ExportXMLAttributeType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ExportXMLAttributeType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLength

`func (o *ExportXMLAttributeType) GetLength() ExportColumnLengthType`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *ExportXMLAttributeType) GetLengthOk() (*ExportColumnLengthType, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *ExportXMLAttributeType) SetLength(v ExportColumnLengthType)`

SetLength sets Length field to given value.

### HasLength

`func (o *ExportXMLAttributeType) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetRequired

`func (o *ExportXMLAttributeType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ExportXMLAttributeType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ExportXMLAttributeType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ExportXMLAttributeType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetExportDataId

`func (o *ExportXMLAttributeType) GetExportDataId() UniqueIDType`

GetExportDataId returns the ExportDataId field if non-nil, zero value otherwise.

### GetExportDataIdOk

`func (o *ExportXMLAttributeType) GetExportDataIdOk() (*UniqueIDType, bool)`

GetExportDataIdOk returns a tuple with the ExportDataId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataId

`func (o *ExportXMLAttributeType) SetExportDataId(v UniqueIDType)`

SetExportDataId sets ExportDataId field to given value.

### HasExportDataId

`func (o *ExportXMLAttributeType) HasExportDataId() bool`

HasExportDataId returns a boolean if a field has been set.

### GetParentDataID

`func (o *ExportXMLAttributeType) GetParentDataID() UniqueIDType`

GetParentDataID returns the ParentDataID field if non-nil, zero value otherwise.

### GetParentDataIDOk

`func (o *ExportXMLAttributeType) GetParentDataIDOk() (*UniqueIDType, bool)`

GetParentDataIDOk returns a tuple with the ParentDataID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentDataID

`func (o *ExportXMLAttributeType) SetParentDataID(v UniqueIDType)`

SetParentDataID sets ParentDataID field to given value.

### HasParentDataID

`func (o *ExportXMLAttributeType) HasParentDataID() bool`

HasParentDataID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


