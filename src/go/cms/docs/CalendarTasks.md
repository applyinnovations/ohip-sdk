# CalendarTasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountSummary** | Pointer to [**CalendarTaskCountListType**](CalendarTaskCountListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaskSummary** | Pointer to [**CalendarTaskListType**](CalendarTaskListType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCalendarTasks

`func NewCalendarTasks() *CalendarTasks`

NewCalendarTasks instantiates a new CalendarTasks object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarTasksWithDefaults

`func NewCalendarTasksWithDefaults() *CalendarTasks`

NewCalendarTasksWithDefaults instantiates a new CalendarTasks object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCountSummary

`func (o *CalendarTasks) GetCountSummary() CalendarTaskCountListType`

GetCountSummary returns the CountSummary field if non-nil, zero value otherwise.

### GetCountSummaryOk

`func (o *CalendarTasks) GetCountSummaryOk() (*CalendarTaskCountListType, bool)`

GetCountSummaryOk returns a tuple with the CountSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountSummary

`func (o *CalendarTasks) SetCountSummary(v CalendarTaskCountListType)`

SetCountSummary sets CountSummary field to given value.

### HasCountSummary

`func (o *CalendarTasks) HasCountSummary() bool`

HasCountSummary returns a boolean if a field has been set.

### GetLinks

`func (o *CalendarTasks) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalendarTasks) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalendarTasks) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalendarTasks) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaskSummary

`func (o *CalendarTasks) GetTaskSummary() CalendarTaskListType`

GetTaskSummary returns the TaskSummary field if non-nil, zero value otherwise.

### GetTaskSummaryOk

`func (o *CalendarTasks) GetTaskSummaryOk() (*CalendarTaskListType, bool)`

GetTaskSummaryOk returns a tuple with the TaskSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSummary

`func (o *CalendarTasks) SetTaskSummary(v CalendarTaskListType)`

SetTaskSummary sets TaskSummary field to given value.

### HasTaskSummary

`func (o *CalendarTasks) HasTaskSummary() bool`

HasTaskSummary returns a boolean if a field has been set.

### GetWarnings

`func (o *CalendarTasks) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalendarTasks) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalendarTasks) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalendarTasks) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


