# TemplateHousekeepingTaskToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Task** | Pointer to [**TemplateHousekeepingTaskConfigType**](TemplateHousekeepingTaskConfigType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateHousekeepingTaskToBeChanged

`func NewTemplateHousekeepingTaskToBeChanged() *TemplateHousekeepingTaskToBeChanged`

NewTemplateHousekeepingTaskToBeChanged instantiates a new TemplateHousekeepingTaskToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHousekeepingTaskToBeChangedWithDefaults

`func NewTemplateHousekeepingTaskToBeChangedWithDefaults() *TemplateHousekeepingTaskToBeChanged`

NewTemplateHousekeepingTaskToBeChangedWithDefaults instantiates a new TemplateHousekeepingTaskToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateHousekeepingTaskToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateHousekeepingTaskToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateHousekeepingTaskToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateHousekeepingTaskToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTask

`func (o *TemplateHousekeepingTaskToBeChanged) GetTask() TemplateHousekeepingTaskConfigType`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *TemplateHousekeepingTaskToBeChanged) GetTaskOk() (*TemplateHousekeepingTaskConfigType, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *TemplateHousekeepingTaskToBeChanged) SetTask(v TemplateHousekeepingTaskConfigType)`

SetTask sets Task field to given value.

### HasTask

`func (o *TemplateHousekeepingTaskToBeChanged) HasTask() bool`

HasTask returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateHousekeepingTaskToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateHousekeepingTaskToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateHousekeepingTaskToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateHousekeepingTaskToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


