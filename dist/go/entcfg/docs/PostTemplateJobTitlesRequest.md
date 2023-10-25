# PostTemplateJobTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateJobTitles** | Pointer to [**[]TemplateJobTitleType**](TemplateJobTitleType.md) | Template job title details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateJobTitlesRequest

`func NewPostTemplateJobTitlesRequest() *PostTemplateJobTitlesRequest`

NewPostTemplateJobTitlesRequest instantiates a new PostTemplateJobTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateJobTitlesRequestWithDefaults

`func NewPostTemplateJobTitlesRequestWithDefaults() *PostTemplateJobTitlesRequest`

NewPostTemplateJobTitlesRequestWithDefaults instantiates a new PostTemplateJobTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateJobTitlesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateJobTitlesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateJobTitlesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateJobTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateJobTitles

`func (o *PostTemplateJobTitlesRequest) GetTemplateJobTitles() []TemplateJobTitleType`

GetTemplateJobTitles returns the TemplateJobTitles field if non-nil, zero value otherwise.

### GetTemplateJobTitlesOk

`func (o *PostTemplateJobTitlesRequest) GetTemplateJobTitlesOk() (*[]TemplateJobTitleType, bool)`

GetTemplateJobTitlesOk returns a tuple with the TemplateJobTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateJobTitles

`func (o *PostTemplateJobTitlesRequest) SetTemplateJobTitles(v []TemplateJobTitleType)`

SetTemplateJobTitles sets TemplateJobTitles field to given value.

### HasTemplateJobTitles

`func (o *PostTemplateJobTitlesRequest) HasTemplateJobTitles() bool`

HasTemplateJobTitles returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateJobTitlesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateJobTitlesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateJobTitlesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateJobTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


