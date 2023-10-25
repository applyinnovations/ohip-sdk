# PutTemplateHousekeepingTaskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Task** | Pointer to [**TemplateHousekeepingTaskConfigType**](TemplateHousekeepingTaskConfigType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTemplateHousekeepingTaskRequest

`func NewPutTemplateHousekeepingTaskRequest() *PutTemplateHousekeepingTaskRequest`

NewPutTemplateHousekeepingTaskRequest instantiates a new PutTemplateHousekeepingTaskRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTemplateHousekeepingTaskRequestWithDefaults

`func NewPutTemplateHousekeepingTaskRequestWithDefaults() *PutTemplateHousekeepingTaskRequest`

NewPutTemplateHousekeepingTaskRequestWithDefaults instantiates a new PutTemplateHousekeepingTaskRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTemplateHousekeepingTaskRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTemplateHousekeepingTaskRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTemplateHousekeepingTaskRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTemplateHousekeepingTaskRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTask

`func (o *PutTemplateHousekeepingTaskRequest) GetTask() TemplateHousekeepingTaskConfigType`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *PutTemplateHousekeepingTaskRequest) GetTaskOk() (*TemplateHousekeepingTaskConfigType, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *PutTemplateHousekeepingTaskRequest) SetTask(v TemplateHousekeepingTaskConfigType)`

SetTask sets Task field to given value.

### HasTask

`func (o *PutTemplateHousekeepingTaskRequest) HasTask() bool`

HasTask returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTemplateHousekeepingTaskRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTemplateHousekeepingTaskRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTemplateHousekeepingTaskRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTemplateHousekeepingTaskRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


