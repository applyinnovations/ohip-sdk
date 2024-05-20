# ExportXMLColumnsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]ExportXMLAttributeType**](ExportXMLAttributeType.md) | XML attribute type that holds all the information related to attribute tag | [optional] 
**Elements** | Pointer to [**[]ExportXMLElementType**](ExportXMLElementType.md) | XML element type that holds all the information related to element tag | [optional] 

## Methods

### NewExportXMLColumnsType

`func NewExportXMLColumnsType() *ExportXMLColumnsType`

NewExportXMLColumnsType instantiates a new ExportXMLColumnsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportXMLColumnsTypeWithDefaults

`func NewExportXMLColumnsTypeWithDefaults() *ExportXMLColumnsType`

NewExportXMLColumnsTypeWithDefaults instantiates a new ExportXMLColumnsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *ExportXMLColumnsType) GetAttributes() []ExportXMLAttributeType`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ExportXMLColumnsType) GetAttributesOk() (*[]ExportXMLAttributeType, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ExportXMLColumnsType) SetAttributes(v []ExportXMLAttributeType)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ExportXMLColumnsType) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetElements

`func (o *ExportXMLColumnsType) GetElements() []ExportXMLElementType`

GetElements returns the Elements field if non-nil, zero value otherwise.

### GetElementsOk

`func (o *ExportXMLColumnsType) GetElementsOk() (*[]ExportXMLElementType, bool)`

GetElementsOk returns a tuple with the Elements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElements

`func (o *ExportXMLColumnsType) SetElements(v []ExportXMLElementType)`

SetElements sets Elements field to given value.

### HasElements

`func (o *ExportXMLColumnsType) HasElements() bool`

HasElements returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


