# AlertCodeTemplates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertCodeTemplates** | Pointer to [**[]AlertTemplateType**](AlertTemplateType.md) | Collection of alert code templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAlertCodeTemplates

`func NewAlertCodeTemplates() *AlertCodeTemplates`

NewAlertCodeTemplates instantiates a new AlertCodeTemplates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertCodeTemplatesWithDefaults

`func NewAlertCodeTemplatesWithDefaults() *AlertCodeTemplates`

NewAlertCodeTemplatesWithDefaults instantiates a new AlertCodeTemplates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertCodeTemplates

`func (o *AlertCodeTemplates) GetAlertCodeTemplates() []AlertTemplateType`

GetAlertCodeTemplates returns the AlertCodeTemplates field if non-nil, zero value otherwise.

### GetAlertCodeTemplatesOk

`func (o *AlertCodeTemplates) GetAlertCodeTemplatesOk() (*[]AlertTemplateType, bool)`

GetAlertCodeTemplatesOk returns a tuple with the AlertCodeTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCodeTemplates

`func (o *AlertCodeTemplates) SetAlertCodeTemplates(v []AlertTemplateType)`

SetAlertCodeTemplates sets AlertCodeTemplates field to given value.

### HasAlertCodeTemplates

`func (o *AlertCodeTemplates) HasAlertCodeTemplates() bool`

HasAlertCodeTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *AlertCodeTemplates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AlertCodeTemplates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AlertCodeTemplates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AlertCodeTemplates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AlertCodeTemplates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AlertCodeTemplates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AlertCodeTemplates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AlertCodeTemplates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


