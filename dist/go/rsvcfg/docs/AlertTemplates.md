# AlertTemplates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertTemplates** | Pointer to [**[]AlertTemplateType**](AlertTemplateType.md) | Collection of alert code templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAlertTemplates

`func NewAlertTemplates() *AlertTemplates`

NewAlertTemplates instantiates a new AlertTemplates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertTemplatesWithDefaults

`func NewAlertTemplatesWithDefaults() *AlertTemplates`

NewAlertTemplatesWithDefaults instantiates a new AlertTemplates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertTemplates

`func (o *AlertTemplates) GetAlertTemplates() []AlertTemplateType`

GetAlertTemplates returns the AlertTemplates field if non-nil, zero value otherwise.

### GetAlertTemplatesOk

`func (o *AlertTemplates) GetAlertTemplatesOk() (*[]AlertTemplateType, bool)`

GetAlertTemplatesOk returns a tuple with the AlertTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertTemplates

`func (o *AlertTemplates) SetAlertTemplates(v []AlertTemplateType)`

SetAlertTemplates sets AlertTemplates field to given value.

### HasAlertTemplates

`func (o *AlertTemplates) HasAlertTemplates() bool`

HasAlertTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *AlertTemplates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AlertTemplates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AlertTemplates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AlertTemplates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AlertTemplates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AlertTemplates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AlertTemplates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AlertTemplates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


