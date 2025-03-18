# HousekeepingTasksToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tasks** | Pointer to [**[]HousekeepingTaskConfigType**](HousekeepingTaskConfigType.md) | List of the housekeeping tasks to be configured | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingTasksToBeChanged

`func NewHousekeepingTasksToBeChanged() *HousekeepingTasksToBeChanged`

NewHousekeepingTasksToBeChanged instantiates a new HousekeepingTasksToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTasksToBeChangedWithDefaults

`func NewHousekeepingTasksToBeChangedWithDefaults() *HousekeepingTasksToBeChanged`

NewHousekeepingTasksToBeChangedWithDefaults instantiates a new HousekeepingTasksToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTasks

`func (o *HousekeepingTasksToBeChanged) GetTasks() []HousekeepingTaskConfigType`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *HousekeepingTasksToBeChanged) GetTasksOk() (*[]HousekeepingTaskConfigType, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *HousekeepingTasksToBeChanged) SetTasks(v []HousekeepingTaskConfigType)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *HousekeepingTasksToBeChanged) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingTasksToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingTasksToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingTasksToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingTasksToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingTasksToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingTasksToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingTasksToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingTasksToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


