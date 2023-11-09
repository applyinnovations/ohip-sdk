# TaskSheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaskSheetDetails** | Pointer to [**HousekeepingTaskType**](HousekeepingTaskType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTaskSheet

`func NewTaskSheet() *TaskSheet`

NewTaskSheet instantiates a new TaskSheet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetWithDefaults

`func NewTaskSheetWithDefaults() *TaskSheet`

NewTaskSheetWithDefaults instantiates a new TaskSheet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TaskSheet) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaskSheet) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaskSheet) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaskSheet) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaskSheetDetails

`func (o *TaskSheet) GetTaskSheetDetails() HousekeepingTaskType`

GetTaskSheetDetails returns the TaskSheetDetails field if non-nil, zero value otherwise.

### GetTaskSheetDetailsOk

`func (o *TaskSheet) GetTaskSheetDetailsOk() (*HousekeepingTaskType, bool)`

GetTaskSheetDetailsOk returns a tuple with the TaskSheetDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetDetails

`func (o *TaskSheet) SetTaskSheetDetails(v HousekeepingTaskType)`

SetTaskSheetDetails sets TaskSheetDetails field to given value.

### HasTaskSheetDetails

`func (o *TaskSheet) HasTaskSheetDetails() bool`

HasTaskSheetDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *TaskSheet) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaskSheet) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaskSheet) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaskSheet) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


