# TaskAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaskAssignmentInfo** | Pointer to [**HousekeepingTaskAssignmentsType**](HousekeepingTaskAssignmentsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTaskAssignment

`func NewTaskAssignment() *TaskAssignment`

NewTaskAssignment instantiates a new TaskAssignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskAssignmentWithDefaults

`func NewTaskAssignmentWithDefaults() *TaskAssignment`

NewTaskAssignmentWithDefaults instantiates a new TaskAssignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TaskAssignment) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaskAssignment) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaskAssignment) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaskAssignment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaskAssignmentInfo

`func (o *TaskAssignment) GetTaskAssignmentInfo() HousekeepingTaskAssignmentsType`

GetTaskAssignmentInfo returns the TaskAssignmentInfo field if non-nil, zero value otherwise.

### GetTaskAssignmentInfoOk

`func (o *TaskAssignment) GetTaskAssignmentInfoOk() (*HousekeepingTaskAssignmentsType, bool)`

GetTaskAssignmentInfoOk returns a tuple with the TaskAssignmentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskAssignmentInfo

`func (o *TaskAssignment) SetTaskAssignmentInfo(v HousekeepingTaskAssignmentsType)`

SetTaskAssignmentInfo sets TaskAssignmentInfo field to given value.

### HasTaskAssignmentInfo

`func (o *TaskAssignment) HasTaskAssignmentInfo() bool`

HasTaskAssignmentInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *TaskAssignment) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaskAssignment) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaskAssignment) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaskAssignment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


