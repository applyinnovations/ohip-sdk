# ExportXMLComplexType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | XML simple tag name | [optional] 
**Attributes** | Pointer to [**[]ExportXMLAttributeType**](ExportXMLAttributeType.md) | XML attribute type that holds all the information related to attribute tag | [optional] 
**Elements** | Pointer to [**[]ExportXMLElementType**](ExportXMLElementType.md) | XML element type that holds all the information related to element tag | [optional] 
**Required** | Pointer to **bool** | Determines if the tag need to be present in the data even if there is no value available | [optional] 

## Methods

### NewExportXMLComplexType

`func NewExportXMLComplexType() *ExportXMLComplexType`

NewExportXMLComplexType instantiates a new ExportXMLComplexType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportXMLComplexTypeWithDefaults

`func NewExportXMLComplexTypeWithDefaults() *ExportXMLComplexType`

NewExportXMLComplexTypeWithDefaults instantiates a new ExportXMLComplexType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExportXMLComplexType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExportXMLComplexType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExportXMLComplexType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExportXMLComplexType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributes

`func (o *ExportXMLComplexType) GetAttributes() []ExportXMLAttributeType`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ExportXMLComplexType) GetAttributesOk() (*[]ExportXMLAttributeType, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ExportXMLComplexType) SetAttributes(v []ExportXMLAttributeType)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ExportXMLComplexType) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetElements

`func (o *ExportXMLComplexType) GetElements() []ExportXMLElementType`

GetElements returns the Elements field if non-nil, zero value otherwise.

### GetElementsOk

`func (o *ExportXMLComplexType) GetElementsOk() (*[]ExportXMLElementType, bool)`

GetElementsOk returns a tuple with the Elements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElements

`func (o *ExportXMLComplexType) SetElements(v []ExportXMLElementType)`

SetElements sets Elements field to given value.

### HasElements

`func (o *ExportXMLComplexType) HasElements() bool`

HasElements returns a boolean if a field has been set.

### GetRequired

`func (o *ExportXMLComplexType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ExportXMLComplexType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ExportXMLComplexType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ExportXMLComplexType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


