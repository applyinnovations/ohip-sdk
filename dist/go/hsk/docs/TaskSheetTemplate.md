# TaskSheetTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskSheetTemplateDetails** | Pointer to [**AutoGenerateTaskSheetsCriteriaType**](AutoGenerateTaskSheetsCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaskSheetTemplate

`func NewTaskSheetTemplate() *TaskSheetTemplate`

NewTaskSheetTemplate instantiates a new TaskSheetTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetTemplateWithDefaults

`func NewTaskSheetTemplateWithDefaults() *TaskSheetTemplate`

NewTaskSheetTemplateWithDefaults instantiates a new TaskSheetTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskSheetTemplateDetails

`func (o *TaskSheetTemplate) GetTaskSheetTemplateDetails() AutoGenerateTaskSheetsCriteriaType`

GetTaskSheetTemplateDetails returns the TaskSheetTemplateDetails field if non-nil, zero value otherwise.

### GetTaskSheetTemplateDetailsOk

`func (o *TaskSheetTemplate) GetTaskSheetTemplateDetailsOk() (*AutoGenerateTaskSheetsCriteriaType, bool)`

GetTaskSheetTemplateDetailsOk returns a tuple with the TaskSheetTemplateDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetTemplateDetails

`func (o *TaskSheetTemplate) SetTaskSheetTemplateDetails(v AutoGenerateTaskSheetsCriteriaType)`

SetTaskSheetTemplateDetails sets TaskSheetTemplateDetails field to given value.

### HasTaskSheetTemplateDetails

`func (o *TaskSheetTemplate) HasTaskSheetTemplateDetails() bool`

HasTaskSheetTemplateDetails returns a boolean if a field has been set.

### GetLinks

`func (o *TaskSheetTemplate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaskSheetTemplate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaskSheetTemplate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaskSheetTemplate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaskSheetTemplate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaskSheetTemplate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaskSheetTemplate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaskSheetTemplate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


