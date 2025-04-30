# HousekeepingTaskAssignmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskCodes** | Pointer to [**[]HousekeepingTaskCodeType**](HousekeepingTaskCodeType.md) | The Task Code(s) for which the Task Sheets were generated. | [optional] 
**TaskSheets** | Pointer to [**[]HousekeepingTaskType**](HousekeepingTaskType.md) | List of Task Sheets generated for this assignment. | [optional] 
**HotelId** | Pointer to **string** | Property where the Task Assignment is done. | [optional] 
**TaskDate** | Pointer to **string** | The date for which the Task Assignment is done. Date should be the current business date in most cases. Date cannot be in the past. | [optional] 
**TaskSheetsCount** | Pointer to **int32** |  | [optional] 

## Methods

### NewHousekeepingTaskAssignmentType

`func NewHousekeepingTaskAssignmentType() *HousekeepingTaskAssignmentType`

NewHousekeepingTaskAssignmentType instantiates a new HousekeepingTaskAssignmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskAssignmentTypeWithDefaults

`func NewHousekeepingTaskAssignmentTypeWithDefaults() *HousekeepingTaskAssignmentType`

NewHousekeepingTaskAssignmentTypeWithDefaults instantiates a new HousekeepingTaskAssignmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskCodes

`func (o *HousekeepingTaskAssignmentType) GetTaskCodes() []HousekeepingTaskCodeType`

GetTaskCodes returns the TaskCodes field if non-nil, zero value otherwise.

### GetTaskCodesOk

`func (o *HousekeepingTaskAssignmentType) GetTaskCodesOk() (*[]HousekeepingTaskCodeType, bool)`

GetTaskCodesOk returns a tuple with the TaskCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCodes

`func (o *HousekeepingTaskAssignmentType) SetTaskCodes(v []HousekeepingTaskCodeType)`

SetTaskCodes sets TaskCodes field to given value.

### HasTaskCodes

`func (o *HousekeepingTaskAssignmentType) HasTaskCodes() bool`

HasTaskCodes returns a boolean if a field has been set.

### GetTaskSheets

`func (o *HousekeepingTaskAssignmentType) GetTaskSheets() []HousekeepingTaskType`

GetTaskSheets returns the TaskSheets field if non-nil, zero value otherwise.

### GetTaskSheetsOk

`func (o *HousekeepingTaskAssignmentType) GetTaskSheetsOk() (*[]HousekeepingTaskType, bool)`

GetTaskSheetsOk returns a tuple with the TaskSheets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheets

`func (o *HousekeepingTaskAssignmentType) SetTaskSheets(v []HousekeepingTaskType)`

SetTaskSheets sets TaskSheets field to given value.

### HasTaskSheets

`func (o *HousekeepingTaskAssignmentType) HasTaskSheets() bool`

HasTaskSheets returns a boolean if a field has been set.

### GetHotelId

`func (o *HousekeepingTaskAssignmentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingTaskAssignmentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingTaskAssignmentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingTaskAssignmentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTaskDate

`func (o *HousekeepingTaskAssignmentType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *HousekeepingTaskAssignmentType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *HousekeepingTaskAssignmentType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *HousekeepingTaskAssignmentType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.

### GetTaskSheetsCount

`func (o *HousekeepingTaskAssignmentType) GetTaskSheetsCount() int32`

GetTaskSheetsCount returns the TaskSheetsCount field if non-nil, zero value otherwise.

### GetTaskSheetsCountOk

`func (o *HousekeepingTaskAssignmentType) GetTaskSheetsCountOk() (*int32, bool)`

GetTaskSheetsCountOk returns a tuple with the TaskSheetsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetsCount

`func (o *HousekeepingTaskAssignmentType) SetTaskSheetsCount(v int32)`

SetTaskSheetsCount sets TaskSheetsCount field to given value.

### HasTaskSheetsCount

`func (o *HousekeepingTaskAssignmentType) HasTaskSheetsCount() bool`

HasTaskSheetsCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


