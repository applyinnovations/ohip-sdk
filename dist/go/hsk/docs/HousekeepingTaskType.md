# HousekeepingTaskType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppUserOnBreak** | Pointer to [**AppUserOnBreakType**](AppUserOnBreakType.md) |  | [optional] 
**Attendant** | Pointer to [**HousekeepingTaskTypeAttendant**](HousekeepingTaskTypeAttendant.md) |  | [optional] 
**AttendantStatus** | Pointer to [**ServicingAttendantStatusType**](ServicingAttendantStatusType.md) |  | [optional] 
**AutoGenerated** | Pointer to **bool** | Indicates if the task sheet was automatically generated. | [optional] 
**BreakOutId** | Pointer to **int32** | Break out id of the task sheet. | [optional] 
**CompletedDate** | Pointer to **string** | Date the task was completed. | [optional] 
**Credits** | Pointer to [**[]HousekeepingCreditsType**](HousekeepingCreditsType.md) | Credits information for this Task Sheet. This could have the Total Credit information and the Travelling credits if required. | [optional] 
**Date** | Pointer to **string** | The date for which the task sheet applies. | [optional] 
**DepartureTaskInfo** | Pointer to [**DepartureTaskInfoType**](DepartureTaskInfoType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**LinenChangeCount** | Pointer to **int32** | The total number of linen changes included in this task sheet. | [optional] 
**LockTaskSheet** | Pointer to **bool** | Indicates if the task sheet was locked or not. | [optional] 
**NextDay** | Pointer to **bool** | Indicates the task sheet applies to Next Business Day. | [optional] 
**RoomCount** | Pointer to **int32** | The total number of rooms included in this task sheet. | [optional] 
**RoomCounts** | Pointer to [**[]HousekeepingTaskTypeRoomCountsInner**](HousekeepingTaskTypeRoomCountsInner.md) |  | [optional] 
**Rooms** | Pointer to [**[]HousekeepingTaskTypeRoomsInner**](HousekeepingTaskTypeRoomsInner.md) | Details of the room which is part of the Task Sheet. The room details will be returned when the request for IncludeTaskSheetDetails(flag in the search type) is true. | [optional] 
**SheetNumber** | Pointer to **int32** | The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code. | [optional] 
**SheetType** | Pointer to [**TaskSheetType**](TaskSheetType.md) |  | [optional] 
**TaskCodes** | Pointer to [**[]HousekeepingTaskCodeType**](HousekeepingTaskCodeType.md) | The Task Code(s) used for this Task Sheet. | [optional] 
**TaskInstructions** | Pointer to **string** | Task Sheet level instructions. These instructions are applicable to this task sheet only. | [optional] 
**TaskSeqNo** | Pointer to **int32** | The sequence no of the task sheet. | [optional] 
**TotalSupplies** | Pointer to [**[]FacilityCodeType**](FacilityCodeType.md) | List of the facility codes. | [optional] 

## Methods

### NewHousekeepingTaskType

`func NewHousekeepingTaskType() *HousekeepingTaskType`

NewHousekeepingTaskType instantiates a new HousekeepingTaskType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskTypeWithDefaults

`func NewHousekeepingTaskTypeWithDefaults() *HousekeepingTaskType`

NewHousekeepingTaskTypeWithDefaults instantiates a new HousekeepingTaskType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppUserOnBreak

`func (o *HousekeepingTaskType) GetAppUserOnBreak() AppUserOnBreakType`

GetAppUserOnBreak returns the AppUserOnBreak field if non-nil, zero value otherwise.

### GetAppUserOnBreakOk

`func (o *HousekeepingTaskType) GetAppUserOnBreakOk() (*AppUserOnBreakType, bool)`

GetAppUserOnBreakOk returns a tuple with the AppUserOnBreak field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUserOnBreak

`func (o *HousekeepingTaskType) SetAppUserOnBreak(v AppUserOnBreakType)`

SetAppUserOnBreak sets AppUserOnBreak field to given value.

### HasAppUserOnBreak

`func (o *HousekeepingTaskType) HasAppUserOnBreak() bool`

HasAppUserOnBreak returns a boolean if a field has been set.

### GetAttendant

`func (o *HousekeepingTaskType) GetAttendant() HousekeepingTaskTypeAttendant`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *HousekeepingTaskType) GetAttendantOk() (*HousekeepingTaskTypeAttendant, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *HousekeepingTaskType) SetAttendant(v HousekeepingTaskTypeAttendant)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *HousekeepingTaskType) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetAttendantStatus

`func (o *HousekeepingTaskType) GetAttendantStatus() ServicingAttendantStatusType`

GetAttendantStatus returns the AttendantStatus field if non-nil, zero value otherwise.

### GetAttendantStatusOk

`func (o *HousekeepingTaskType) GetAttendantStatusOk() (*ServicingAttendantStatusType, bool)`

GetAttendantStatusOk returns a tuple with the AttendantStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantStatus

`func (o *HousekeepingTaskType) SetAttendantStatus(v ServicingAttendantStatusType)`

SetAttendantStatus sets AttendantStatus field to given value.

### HasAttendantStatus

`func (o *HousekeepingTaskType) HasAttendantStatus() bool`

HasAttendantStatus returns a boolean if a field has been set.

### GetAutoGenerated

`func (o *HousekeepingTaskType) GetAutoGenerated() bool`

GetAutoGenerated returns the AutoGenerated field if non-nil, zero value otherwise.

### GetAutoGeneratedOk

`func (o *HousekeepingTaskType) GetAutoGeneratedOk() (*bool, bool)`

GetAutoGeneratedOk returns a tuple with the AutoGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoGenerated

`func (o *HousekeepingTaskType) SetAutoGenerated(v bool)`

SetAutoGenerated sets AutoGenerated field to given value.

### HasAutoGenerated

`func (o *HousekeepingTaskType) HasAutoGenerated() bool`

HasAutoGenerated returns a boolean if a field has been set.

### GetBreakOutId

`func (o *HousekeepingTaskType) GetBreakOutId() int32`

GetBreakOutId returns the BreakOutId field if non-nil, zero value otherwise.

### GetBreakOutIdOk

`func (o *HousekeepingTaskType) GetBreakOutIdOk() (*int32, bool)`

GetBreakOutIdOk returns a tuple with the BreakOutId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakOutId

`func (o *HousekeepingTaskType) SetBreakOutId(v int32)`

SetBreakOutId sets BreakOutId field to given value.

### HasBreakOutId

`func (o *HousekeepingTaskType) HasBreakOutId() bool`

HasBreakOutId returns a boolean if a field has been set.

### GetCompletedDate

`func (o *HousekeepingTaskType) GetCompletedDate() string`

GetCompletedDate returns the CompletedDate field if non-nil, zero value otherwise.

### GetCompletedDateOk

`func (o *HousekeepingTaskType) GetCompletedDateOk() (*string, bool)`

GetCompletedDateOk returns a tuple with the CompletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedDate

`func (o *HousekeepingTaskType) SetCompletedDate(v string)`

SetCompletedDate sets CompletedDate field to given value.

### HasCompletedDate

`func (o *HousekeepingTaskType) HasCompletedDate() bool`

HasCompletedDate returns a boolean if a field has been set.

### GetCredits

`func (o *HousekeepingTaskType) GetCredits() []HousekeepingCreditsType`

GetCredits returns the Credits field if non-nil, zero value otherwise.

### GetCreditsOk

`func (o *HousekeepingTaskType) GetCreditsOk() (*[]HousekeepingCreditsType, bool)`

GetCreditsOk returns a tuple with the Credits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredits

`func (o *HousekeepingTaskType) SetCredits(v []HousekeepingCreditsType)`

SetCredits sets Credits field to given value.

### HasCredits

`func (o *HousekeepingTaskType) HasCredits() bool`

HasCredits returns a boolean if a field has been set.

### GetDate

`func (o *HousekeepingTaskType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *HousekeepingTaskType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *HousekeepingTaskType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *HousekeepingTaskType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDepartureTaskInfo

`func (o *HousekeepingTaskType) GetDepartureTaskInfo() DepartureTaskInfoType`

GetDepartureTaskInfo returns the DepartureTaskInfo field if non-nil, zero value otherwise.

### GetDepartureTaskInfoOk

`func (o *HousekeepingTaskType) GetDepartureTaskInfoOk() (*DepartureTaskInfoType, bool)`

GetDepartureTaskInfoOk returns a tuple with the DepartureTaskInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTaskInfo

`func (o *HousekeepingTaskType) SetDepartureTaskInfo(v DepartureTaskInfoType)`

SetDepartureTaskInfo sets DepartureTaskInfo field to given value.

### HasDepartureTaskInfo

`func (o *HousekeepingTaskType) HasDepartureTaskInfo() bool`

HasDepartureTaskInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *HousekeepingTaskType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingTaskType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingTaskType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingTaskType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinenChangeCount

`func (o *HousekeepingTaskType) GetLinenChangeCount() int32`

GetLinenChangeCount returns the LinenChangeCount field if non-nil, zero value otherwise.

### GetLinenChangeCountOk

`func (o *HousekeepingTaskType) GetLinenChangeCountOk() (*int32, bool)`

GetLinenChangeCountOk returns a tuple with the LinenChangeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinenChangeCount

`func (o *HousekeepingTaskType) SetLinenChangeCount(v int32)`

SetLinenChangeCount sets LinenChangeCount field to given value.

### HasLinenChangeCount

`func (o *HousekeepingTaskType) HasLinenChangeCount() bool`

HasLinenChangeCount returns a boolean if a field has been set.

### GetLockTaskSheet

`func (o *HousekeepingTaskType) GetLockTaskSheet() bool`

GetLockTaskSheet returns the LockTaskSheet field if non-nil, zero value otherwise.

### GetLockTaskSheetOk

`func (o *HousekeepingTaskType) GetLockTaskSheetOk() (*bool, bool)`

GetLockTaskSheetOk returns a tuple with the LockTaskSheet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockTaskSheet

`func (o *HousekeepingTaskType) SetLockTaskSheet(v bool)`

SetLockTaskSheet sets LockTaskSheet field to given value.

### HasLockTaskSheet

`func (o *HousekeepingTaskType) HasLockTaskSheet() bool`

HasLockTaskSheet returns a boolean if a field has been set.

### GetNextDay

`func (o *HousekeepingTaskType) GetNextDay() bool`

GetNextDay returns the NextDay field if non-nil, zero value otherwise.

### GetNextDayOk

`func (o *HousekeepingTaskType) GetNextDayOk() (*bool, bool)`

GetNextDayOk returns a tuple with the NextDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextDay

`func (o *HousekeepingTaskType) SetNextDay(v bool)`

SetNextDay sets NextDay field to given value.

### HasNextDay

`func (o *HousekeepingTaskType) HasNextDay() bool`

HasNextDay returns a boolean if a field has been set.

### GetRoomCount

`func (o *HousekeepingTaskType) GetRoomCount() int32`

GetRoomCount returns the RoomCount field if non-nil, zero value otherwise.

### GetRoomCountOk

`func (o *HousekeepingTaskType) GetRoomCountOk() (*int32, bool)`

GetRoomCountOk returns a tuple with the RoomCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCount

`func (o *HousekeepingTaskType) SetRoomCount(v int32)`

SetRoomCount sets RoomCount field to given value.

### HasRoomCount

`func (o *HousekeepingTaskType) HasRoomCount() bool`

HasRoomCount returns a boolean if a field has been set.

### GetRoomCounts

`func (o *HousekeepingTaskType) GetRoomCounts() []HousekeepingTaskTypeRoomCountsInner`

GetRoomCounts returns the RoomCounts field if non-nil, zero value otherwise.

### GetRoomCountsOk

`func (o *HousekeepingTaskType) GetRoomCountsOk() (*[]HousekeepingTaskTypeRoomCountsInner, bool)`

GetRoomCountsOk returns a tuple with the RoomCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCounts

`func (o *HousekeepingTaskType) SetRoomCounts(v []HousekeepingTaskTypeRoomCountsInner)`

SetRoomCounts sets RoomCounts field to given value.

### HasRoomCounts

`func (o *HousekeepingTaskType) HasRoomCounts() bool`

HasRoomCounts returns a boolean if a field has been set.

### GetRooms

`func (o *HousekeepingTaskType) GetRooms() []HousekeepingTaskTypeRoomsInner`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *HousekeepingTaskType) GetRoomsOk() (*[]HousekeepingTaskTypeRoomsInner, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *HousekeepingTaskType) SetRooms(v []HousekeepingTaskTypeRoomsInner)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *HousekeepingTaskType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetSheetNumber

`func (o *HousekeepingTaskType) GetSheetNumber() int32`

GetSheetNumber returns the SheetNumber field if non-nil, zero value otherwise.

### GetSheetNumberOk

`func (o *HousekeepingTaskType) GetSheetNumberOk() (*int32, bool)`

GetSheetNumberOk returns a tuple with the SheetNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSheetNumber

`func (o *HousekeepingTaskType) SetSheetNumber(v int32)`

SetSheetNumber sets SheetNumber field to given value.

### HasSheetNumber

`func (o *HousekeepingTaskType) HasSheetNumber() bool`

HasSheetNumber returns a boolean if a field has been set.

### GetSheetType

`func (o *HousekeepingTaskType) GetSheetType() TaskSheetType`

GetSheetType returns the SheetType field if non-nil, zero value otherwise.

### GetSheetTypeOk

`func (o *HousekeepingTaskType) GetSheetTypeOk() (*TaskSheetType, bool)`

GetSheetTypeOk returns a tuple with the SheetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSheetType

`func (o *HousekeepingTaskType) SetSheetType(v TaskSheetType)`

SetSheetType sets SheetType field to given value.

### HasSheetType

`func (o *HousekeepingTaskType) HasSheetType() bool`

HasSheetType returns a boolean if a field has been set.

### GetTaskCodes

`func (o *HousekeepingTaskType) GetTaskCodes() []HousekeepingTaskCodeType`

GetTaskCodes returns the TaskCodes field if non-nil, zero value otherwise.

### GetTaskCodesOk

`func (o *HousekeepingTaskType) GetTaskCodesOk() (*[]HousekeepingTaskCodeType, bool)`

GetTaskCodesOk returns a tuple with the TaskCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCodes

`func (o *HousekeepingTaskType) SetTaskCodes(v []HousekeepingTaskCodeType)`

SetTaskCodes sets TaskCodes field to given value.

### HasTaskCodes

`func (o *HousekeepingTaskType) HasTaskCodes() bool`

HasTaskCodes returns a boolean if a field has been set.

### GetTaskInstructions

`func (o *HousekeepingTaskType) GetTaskInstructions() string`

GetTaskInstructions returns the TaskInstructions field if non-nil, zero value otherwise.

### GetTaskInstructionsOk

`func (o *HousekeepingTaskType) GetTaskInstructionsOk() (*string, bool)`

GetTaskInstructionsOk returns a tuple with the TaskInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskInstructions

`func (o *HousekeepingTaskType) SetTaskInstructions(v string)`

SetTaskInstructions sets TaskInstructions field to given value.

### HasTaskInstructions

`func (o *HousekeepingTaskType) HasTaskInstructions() bool`

HasTaskInstructions returns a boolean if a field has been set.

### GetTaskSeqNo

`func (o *HousekeepingTaskType) GetTaskSeqNo() int32`

GetTaskSeqNo returns the TaskSeqNo field if non-nil, zero value otherwise.

### GetTaskSeqNoOk

`func (o *HousekeepingTaskType) GetTaskSeqNoOk() (*int32, bool)`

GetTaskSeqNoOk returns a tuple with the TaskSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSeqNo

`func (o *HousekeepingTaskType) SetTaskSeqNo(v int32)`

SetTaskSeqNo sets TaskSeqNo field to given value.

### HasTaskSeqNo

`func (o *HousekeepingTaskType) HasTaskSeqNo() bool`

HasTaskSeqNo returns a boolean if a field has been set.

### GetTotalSupplies

`func (o *HousekeepingTaskType) GetTotalSupplies() []FacilityCodeType`

GetTotalSupplies returns the TotalSupplies field if non-nil, zero value otherwise.

### GetTotalSuppliesOk

`func (o *HousekeepingTaskType) GetTotalSuppliesOk() (*[]FacilityCodeType, bool)`

GetTotalSuppliesOk returns a tuple with the TotalSupplies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSupplies

`func (o *HousekeepingTaskType) SetTotalSupplies(v []FacilityCodeType)`

SetTotalSupplies sets TotalSupplies field to given value.

### HasTotalSupplies

`func (o *HousekeepingTaskType) HasTotalSupplies() bool`

HasTotalSupplies returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

