# AttractionTemplatesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttractionTemplates** | Pointer to [**[]AttractionTemplateType**](AttractionTemplateType.md) | Collection of attraction templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAttractionTemplatesToBeChanged

`func NewAttractionTemplatesToBeChanged() *AttractionTemplatesToBeChanged`

NewAttractionTemplatesToBeChanged instantiates a new AttractionTemplatesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttractionTemplatesToBeChangedWithDefaults

`func NewAttractionTemplatesToBeChangedWithDefaults() *AttractionTemplatesToBeChanged`

NewAttractionTemplatesToBeChangedWithDefaults instantiates a new AttractionTemplatesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractionTemplates

`func (o *AttractionTemplatesToBeChanged) GetAttractionTemplates() []AttractionTemplateType`

GetAttractionTemplates returns the AttractionTemplates field if non-nil, zero value otherwise.

### GetAttractionTemplatesOk

`func (o *AttractionTemplatesToBeChanged) GetAttractionTemplatesOk() (*[]AttractionTemplateType, bool)`

GetAttractionTemplatesOk returns a tuple with the AttractionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractionTemplates

`func (o *AttractionTemplatesToBeChanged) SetAttractionTemplates(v []AttractionTemplateType)`

SetAttractionTemplates sets AttractionTemplates field to given value.

### HasAttractionTemplates

`func (o *AttractionTemplatesToBeChanged) HasAttractionTemplates() bool`

HasAttractionTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *AttractionTemplatesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AttractionTemplatesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AttractionTemplatesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AttractionTemplatesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AttractionTemplatesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AttractionTemplatesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AttractionTemplatesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AttractionTemplatesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


