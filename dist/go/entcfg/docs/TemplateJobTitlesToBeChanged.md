# TemplateJobTitlesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateJobTitles** | Pointer to [**[]TemplateJobTitleType**](TemplateJobTitleType.md) | Template job title details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateJobTitlesToBeChanged

`func NewTemplateJobTitlesToBeChanged() *TemplateJobTitlesToBeChanged`

NewTemplateJobTitlesToBeChanged instantiates a new TemplateJobTitlesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateJobTitlesToBeChangedWithDefaults

`func NewTemplateJobTitlesToBeChangedWithDefaults() *TemplateJobTitlesToBeChanged`

NewTemplateJobTitlesToBeChangedWithDefaults instantiates a new TemplateJobTitlesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateJobTitles

`func (o *TemplateJobTitlesToBeChanged) GetTemplateJobTitles() []TemplateJobTitleType`

GetTemplateJobTitles returns the TemplateJobTitles field if non-nil, zero value otherwise.

### GetTemplateJobTitlesOk

`func (o *TemplateJobTitlesToBeChanged) GetTemplateJobTitlesOk() (*[]TemplateJobTitleType, bool)`

GetTemplateJobTitlesOk returns a tuple with the TemplateJobTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateJobTitles

`func (o *TemplateJobTitlesToBeChanged) SetTemplateJobTitles(v []TemplateJobTitleType)`

SetTemplateJobTitles sets TemplateJobTitles field to given value.

### HasTemplateJobTitles

`func (o *TemplateJobTitlesToBeChanged) HasTemplateJobTitles() bool`

HasTemplateJobTitles returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateJobTitlesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateJobTitlesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateJobTitlesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateJobTitlesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateJobTitlesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateJobTitlesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateJobTitlesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateJobTitlesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


