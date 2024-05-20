# TemplateCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateCodes** | Pointer to [**[]TemplateCodeType**](TemplateCodeType.md) | List of Template Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCodesToBeChanged

`func NewTemplateCodesToBeChanged() *TemplateCodesToBeChanged`

NewTemplateCodesToBeChanged instantiates a new TemplateCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCodesToBeChangedWithDefaults

`func NewTemplateCodesToBeChangedWithDefaults() *TemplateCodesToBeChanged`

NewTemplateCodesToBeChangedWithDefaults instantiates a new TemplateCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateCodes

`func (o *TemplateCodesToBeChanged) GetTemplateCodes() []TemplateCodeType`

GetTemplateCodes returns the TemplateCodes field if non-nil, zero value otherwise.

### GetTemplateCodesOk

`func (o *TemplateCodesToBeChanged) GetTemplateCodesOk() (*[]TemplateCodeType, bool)`

GetTemplateCodesOk returns a tuple with the TemplateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCodes

`func (o *TemplateCodesToBeChanged) SetTemplateCodes(v []TemplateCodeType)`

SetTemplateCodes sets TemplateCodes field to given value.

### HasTemplateCodes

`func (o *TemplateCodesToBeChanged) HasTemplateCodes() bool`

HasTemplateCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


