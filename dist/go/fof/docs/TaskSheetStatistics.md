# TaskSheetStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskStatisticsInfo** | Pointer to [**HSKTaskSheetStatisticsInfoType**](HSKTaskSheetStatisticsInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaskSheetStatistics

`func NewTaskSheetStatistics() *TaskSheetStatistics`

NewTaskSheetStatistics instantiates a new TaskSheetStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetStatisticsWithDefaults

`func NewTaskSheetStatisticsWithDefaults() *TaskSheetStatistics`

NewTaskSheetStatisticsWithDefaults instantiates a new TaskSheetStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskStatisticsInfo

`func (o *TaskSheetStatistics) GetTaskStatisticsInfo() HSKTaskSheetStatisticsInfoType`

GetTaskStatisticsInfo returns the TaskStatisticsInfo field if non-nil, zero value otherwise.

### GetTaskStatisticsInfoOk

`func (o *TaskSheetStatistics) GetTaskStatisticsInfoOk() (*HSKTaskSheetStatisticsInfoType, bool)`

GetTaskStatisticsInfoOk returns a tuple with the TaskStatisticsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStatisticsInfo

`func (o *TaskSheetStatistics) SetTaskStatisticsInfo(v HSKTaskSheetStatisticsInfoType)`

SetTaskStatisticsInfo sets TaskStatisticsInfo field to given value.

### HasTaskStatisticsInfo

`func (o *TaskSheetStatistics) HasTaskStatisticsInfo() bool`

HasTaskStatisticsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *TaskSheetStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaskSheetStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaskSheetStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaskSheetStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaskSheetStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaskSheetStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaskSheetStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaskSheetStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


