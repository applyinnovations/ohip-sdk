# HSKTaskSheetInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedTasks** | Pointer to [**[]AssignedTaskType**](AssignedTaskType.md) | Holds the assigned task codes for a tasksheet. | [optional] 
**Attendant** | Pointer to **string** |  | [optional] 
**TaskSeqNo** | Pointer to **int32** |  | [optional] 
**TaskSheetType** | Pointer to [**TaskSheetType**](TaskSheetType.md) |  | [optional] 
**TaskSheetNo** | Pointer to **int32** |  | [optional] 
**TaskDate** | Pointer to **string** |  | [optional] 
**TotalTaskCredits** | Pointer to **int32** |  | [optional] 
**TotalCompletedCredits** | Pointer to **int32** |  | [optional] 
**AverageActualTimeInSecs** | Pointer to **int32** |  | [optional] 
**TaskSheetDetails** | Pointer to [**HSKTaskSheetDetailsInfoType**](HSKTaskSheetDetailsInfoType.md) |  | [optional] 
**RoomSummary** | Pointer to [**[]HSKTaskSheetInfoTypeRoomSummaryInner**](HSKTaskSheetInfoTypeRoomSummaryInner.md) |  | [optional] 

## Methods

### NewHSKTaskSheetInfoType

`func NewHSKTaskSheetInfoType() *HSKTaskSheetInfoType`

NewHSKTaskSheetInfoType instantiates a new HSKTaskSheetInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHSKTaskSheetInfoTypeWithDefaults

`func NewHSKTaskSheetInfoTypeWithDefaults() *HSKTaskSheetInfoType`

NewHSKTaskSheetInfoTypeWithDefaults instantiates a new HSKTaskSheetInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignedTasks

`func (o *HSKTaskSheetInfoType) GetAssignedTasks() []AssignedTaskType`

GetAssignedTasks returns the AssignedTasks field if non-nil, zero value otherwise.

### GetAssignedTasksOk

`func (o *HSKTaskSheetInfoType) GetAssignedTasksOk() (*[]AssignedTaskType, bool)`

GetAssignedTasksOk returns a tuple with the AssignedTasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTasks

`func (o *HSKTaskSheetInfoType) SetAssignedTasks(v []AssignedTaskType)`

SetAssignedTasks sets AssignedTasks field to given value.

### HasAssignedTasks

`func (o *HSKTaskSheetInfoType) HasAssignedTasks() bool`

HasAssignedTasks returns a boolean if a field has been set.

### GetAttendant

`func (o *HSKTaskSheetInfoType) GetAttendant() string`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *HSKTaskSheetInfoType) GetAttendantOk() (*string, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *HSKTaskSheetInfoType) SetAttendant(v string)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *HSKTaskSheetInfoType) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetTaskSeqNo

`func (o *HSKTaskSheetInfoType) GetTaskSeqNo() int32`

GetTaskSeqNo returns the TaskSeqNo field if non-nil, zero value otherwise.

### GetTaskSeqNoOk

`func (o *HSKTaskSheetInfoType) GetTaskSeqNoOk() (*int32, bool)`

GetTaskSeqNoOk returns a tuple with the TaskSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSeqNo

`func (o *HSKTaskSheetInfoType) SetTaskSeqNo(v int32)`

SetTaskSeqNo sets TaskSeqNo field to given value.

### HasTaskSeqNo

`func (o *HSKTaskSheetInfoType) HasTaskSeqNo() bool`

HasTaskSeqNo returns a boolean if a field has been set.

### GetTaskSheetType

`func (o *HSKTaskSheetInfoType) GetTaskSheetType() TaskSheetType`

GetTaskSheetType returns the TaskSheetType field if non-nil, zero value otherwise.

### GetTaskSheetTypeOk

`func (o *HSKTaskSheetInfoType) GetTaskSheetTypeOk() (*TaskSheetType, bool)`

GetTaskSheetTypeOk returns a tuple with the TaskSheetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetType

`func (o *HSKTaskSheetInfoType) SetTaskSheetType(v TaskSheetType)`

SetTaskSheetType sets TaskSheetType field to given value.

### HasTaskSheetType

`func (o *HSKTaskSheetInfoType) HasTaskSheetType() bool`

HasTaskSheetType returns a boolean if a field has been set.

### GetTaskSheetNo

`func (o *HSKTaskSheetInfoType) GetTaskSheetNo() int32`

GetTaskSheetNo returns the TaskSheetNo field if non-nil, zero value otherwise.

### GetTaskSheetNoOk

`func (o *HSKTaskSheetInfoType) GetTaskSheetNoOk() (*int32, bool)`

GetTaskSheetNoOk returns a tuple with the TaskSheetNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetNo

`func (o *HSKTaskSheetInfoType) SetTaskSheetNo(v int32)`

SetTaskSheetNo sets TaskSheetNo field to given value.

### HasTaskSheetNo

`func (o *HSKTaskSheetInfoType) HasTaskSheetNo() bool`

HasTaskSheetNo returns a boolean if a field has been set.

### GetTaskDate

`func (o *HSKTaskSheetInfoType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *HSKTaskSheetInfoType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *HSKTaskSheetInfoType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *HSKTaskSheetInfoType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.

### GetTotalTaskCredits

`func (o *HSKTaskSheetInfoType) GetTotalTaskCredits() int32`

GetTotalTaskCredits returns the TotalTaskCredits field if non-nil, zero value otherwise.

### GetTotalTaskCreditsOk

`func (o *HSKTaskSheetInfoType) GetTotalTaskCreditsOk() (*int32, bool)`

GetTotalTaskCreditsOk returns a tuple with the TotalTaskCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTaskCredits

`func (o *HSKTaskSheetInfoType) SetTotalTaskCredits(v int32)`

SetTotalTaskCredits sets TotalTaskCredits field to given value.

### HasTotalTaskCredits

`func (o *HSKTaskSheetInfoType) HasTotalTaskCredits() bool`

HasTotalTaskCredits returns a boolean if a field has been set.

### GetTotalCompletedCredits

`func (o *HSKTaskSheetInfoType) GetTotalCompletedCredits() int32`

GetTotalCompletedCredits returns the TotalCompletedCredits field if non-nil, zero value otherwise.

### GetTotalCompletedCreditsOk

`func (o *HSKTaskSheetInfoType) GetTotalCompletedCreditsOk() (*int32, bool)`

GetTotalCompletedCreditsOk returns a tuple with the TotalCompletedCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCompletedCredits

`func (o *HSKTaskSheetInfoType) SetTotalCompletedCredits(v int32)`

SetTotalCompletedCredits sets TotalCompletedCredits field to given value.

### HasTotalCompletedCredits

`func (o *HSKTaskSheetInfoType) HasTotalCompletedCredits() bool`

HasTotalCompletedCredits returns a boolean if a field has been set.

### GetAverageActualTimeInSecs

`func (o *HSKTaskSheetInfoType) GetAverageActualTimeInSecs() int32`

GetAverageActualTimeInSecs returns the AverageActualTimeInSecs field if non-nil, zero value otherwise.

### GetAverageActualTimeInSecsOk

`func (o *HSKTaskSheetInfoType) GetAverageActualTimeInSecsOk() (*int32, bool)`

GetAverageActualTimeInSecsOk returns a tuple with the AverageActualTimeInSecs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageActualTimeInSecs

`func (o *HSKTaskSheetInfoType) SetAverageActualTimeInSecs(v int32)`

SetAverageActualTimeInSecs sets AverageActualTimeInSecs field to given value.

### HasAverageActualTimeInSecs

`func (o *HSKTaskSheetInfoType) HasAverageActualTimeInSecs() bool`

HasAverageActualTimeInSecs returns a boolean if a field has been set.

### GetTaskSheetDetails

`func (o *HSKTaskSheetInfoType) GetTaskSheetDetails() HSKTaskSheetDetailsInfoType`

GetTaskSheetDetails returns the TaskSheetDetails field if non-nil, zero value otherwise.

### GetTaskSheetDetailsOk

`func (o *HSKTaskSheetInfoType) GetTaskSheetDetailsOk() (*HSKTaskSheetDetailsInfoType, bool)`

GetTaskSheetDetailsOk returns a tuple with the TaskSheetDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetDetails

`func (o *HSKTaskSheetInfoType) SetTaskSheetDetails(v HSKTaskSheetDetailsInfoType)`

SetTaskSheetDetails sets TaskSheetDetails field to given value.

### HasTaskSheetDetails

`func (o *HSKTaskSheetInfoType) HasTaskSheetDetails() bool`

HasTaskSheetDetails returns a boolean if a field has been set.

### GetRoomSummary

`func (o *HSKTaskSheetInfoType) GetRoomSummary() []HSKTaskSheetInfoTypeRoomSummaryInner`

GetRoomSummary returns the RoomSummary field if non-nil, zero value otherwise.

### GetRoomSummaryOk

`func (o *HSKTaskSheetInfoType) GetRoomSummaryOk() (*[]HSKTaskSheetInfoTypeRoomSummaryInner, bool)`

GetRoomSummaryOk returns a tuple with the RoomSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSummary

`func (o *HSKTaskSheetInfoType) SetRoomSummary(v []HSKTaskSheetInfoTypeRoomSummaryInner)`

SetRoomSummary sets RoomSummary field to given value.

### HasRoomSummary

`func (o *HSKTaskSheetInfoType) HasRoomSummary() bool`

HasRoomSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


