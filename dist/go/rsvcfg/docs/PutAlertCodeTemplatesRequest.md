# PutAlertCodeTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertTemplates** | Pointer to [**[]AlertTemplateType**](AlertTemplateType.md) | Collection of alert code templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAlertCodeTemplatesRequest

`func NewPutAlertCodeTemplatesRequest() *PutAlertCodeTemplatesRequest`

NewPutAlertCodeTemplatesRequest instantiates a new PutAlertCodeTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAlertCodeTemplatesRequestWithDefaults

`func NewPutAlertCodeTemplatesRequestWithDefaults() *PutAlertCodeTemplatesRequest`

NewPutAlertCodeTemplatesRequestWithDefaults instantiates a new PutAlertCodeTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) GetAlertTemplates() []AlertTemplateType`

GetAlertTemplates returns the AlertTemplates field if non-nil, zero value otherwise.

### GetAlertTemplatesOk

`func (o *PutAlertCodeTemplatesRequest) GetAlertTemplatesOk() (*[]AlertTemplateType, bool)`

GetAlertTemplatesOk returns a tuple with the AlertTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) SetAlertTemplates(v []AlertTemplateType)`

SetAlertTemplates sets AlertTemplates field to given value.

### HasAlertTemplates

`func (o *PutAlertCodeTemplatesRequest) HasAlertTemplates() bool`

HasAlertTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *PutAlertCodeTemplatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAlertCodeTemplatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAlertCodeTemplatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAlertCodeTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAlertCodeTemplatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAlertCodeTemplatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAlertCodeTemplatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAlertCodeTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


