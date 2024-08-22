# TemplateJobTitlesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateJobTitles** | Pointer to [**[]TemplateJobTitleType**](TemplateJobTitleType.md) | Template job title details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateJobTitlesDetails

`func NewTemplateJobTitlesDetails() *TemplateJobTitlesDetails`

NewTemplateJobTitlesDetails instantiates a new TemplateJobTitlesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateJobTitlesDetailsWithDefaults

`func NewTemplateJobTitlesDetailsWithDefaults() *TemplateJobTitlesDetails`

NewTemplateJobTitlesDetailsWithDefaults instantiates a new TemplateJobTitlesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateJobTitles

`func (o *TemplateJobTitlesDetails) GetTemplateJobTitles() []TemplateJobTitleType`

GetTemplateJobTitles returns the TemplateJobTitles field if non-nil, zero value otherwise.

### GetTemplateJobTitlesOk

`func (o *TemplateJobTitlesDetails) GetTemplateJobTitlesOk() (*[]TemplateJobTitleType, bool)`

GetTemplateJobTitlesOk returns a tuple with the TemplateJobTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateJobTitles

`func (o *TemplateJobTitlesDetails) SetTemplateJobTitles(v []TemplateJobTitleType)`

SetTemplateJobTitles sets TemplateJobTitles field to given value.

### HasTemplateJobTitles

`func (o *TemplateJobTitlesDetails) HasTemplateJobTitles() bool`

HasTemplateJobTitles returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateJobTitlesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateJobTitlesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateJobTitlesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateJobTitlesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateJobTitlesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateJobTitlesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateJobTitlesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateJobTitlesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


