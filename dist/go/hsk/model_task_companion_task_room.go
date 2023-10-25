/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the TaskCompanionTaskRoom type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaskCompanionTaskRoom{}

// TaskCompanionTaskRoom Details of the room and the task sheet.
type TaskCompanionTaskRoom struct {
	// Indicates if all the possible rooms to be evaluated have been skipped.
	AllEvaluatedRoomsSkipped *bool `json:"allEvaluatedRoomsSkipped,omitempty"`
	AppUserOnBreak *AppUserOnBreakType `json:"appUserOnBreak,omitempty"`
	Attendant *HousekeepingTaskTypeAttendant `json:"attendant,omitempty"`
	AttendantStatus *ServicingAttendantStatusType `json:"attendantStatus,omitempty"`
	// Indicates if the task sheet was automatically generated.
	AutoGenerated *bool `json:"autoGenerated,omitempty"`
	// Break out id of the task sheet.
	BreakOutId *int32 `json:"breakOutId,omitempty"`
	// Date the task was completed.
	CompletedDate *string `json:"completedDate,omitempty"`
	// Credits information for this Task Sheet. This could have the Total Credit information and the Travelling credits if required.
	Credits []HousekeepingCreditsType `json:"credits,omitempty"`
	// The date for which the task sheet applies.
	Date *string `json:"date,omitempty"`
	DepartureTaskInfo *DepartureTaskInfoType `json:"departureTaskInfo,omitempty"`
	// Indicates if the task sheet has no rooms.
	EmptyTaskSheet *bool `json:"emptyTaskSheet,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// The total number of linen changes included in this task sheet.
	LinenChangeCount *int32 `json:"linenChangeCount,omitempty"`
	// Indicates if the task sheet was locked or not.
	LockTaskSheet *bool `json:"lockTaskSheet,omitempty"`
	// Indicates the task sheet applies to Next Business Day.
	NextDay *bool `json:"nextDay,omitempty"`
	// The total number of rooms included in this task sheet.
	RoomCount *int32 `json:"roomCount,omitempty"`
	RoomCounts []HousekeepingTaskTypeRoomCountsInner `json:"roomCounts,omitempty"`
	// This type represents the primary room attributes.
	Rooms []TaskCompanionTaskRoomRoomsInner `json:"rooms,omitempty"`
	// The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code.
	SheetNumber *int32 `json:"sheetNumber,omitempty"`
	SheetType *TaskSheetType `json:"sheetType,omitempty"`
	// The Task Code(s) used for this Task Sheet.
	TaskCodes []HousekeepingTaskCodeType `json:"taskCodes,omitempty"`
	// Task Sheet level instructions. These instructions are applicable to this task sheet only.
	TaskInstructions *string `json:"taskInstructions,omitempty"`
	// The sequence no of the task sheet.
	TaskSeqNo *int32 `json:"taskSeqNo,omitempty"`
	// Indicates if all the rooms in the task sheet are Clean/Inspected i.e they do not have the Dirty or the Pickup status.
	TaskSheetCompleted *bool `json:"taskSheetCompleted,omitempty"`
	// List of the facility codes.
	TotalSupplies []FacilityCodeType `json:"totalSupplies,omitempty"`
}

// NewTaskCompanionTaskRoom instantiates a new TaskCompanionTaskRoom object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaskCompanionTaskRoom() *TaskCompanionTaskRoom {
	this := TaskCompanionTaskRoom{}
	return &this
}

// NewTaskCompanionTaskRoomWithDefaults instantiates a new TaskCompanionTaskRoom object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaskCompanionTaskRoomWithDefaults() *TaskCompanionTaskRoom {
	this := TaskCompanionTaskRoom{}
	return &this
}

// GetAllEvaluatedRoomsSkipped returns the AllEvaluatedRoomsSkipped field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetAllEvaluatedRoomsSkipped() bool {
	if o == nil || IsNil(o.AllEvaluatedRoomsSkipped) {
		var ret bool
		return ret
	}
	return *o.AllEvaluatedRoomsSkipped
}

// GetAllEvaluatedRoomsSkippedOk returns a tuple with the AllEvaluatedRoomsSkipped field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetAllEvaluatedRoomsSkippedOk() (*bool, bool) {
	if o == nil || IsNil(o.AllEvaluatedRoomsSkipped) {
		return nil, false
	}
	return o.AllEvaluatedRoomsSkipped, true
}

// HasAllEvaluatedRoomsSkipped returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasAllEvaluatedRoomsSkipped() bool {
	if o != nil && !IsNil(o.AllEvaluatedRoomsSkipped) {
		return true
	}

	return false
}

// SetAllEvaluatedRoomsSkipped gets a reference to the given bool and assigns it to the AllEvaluatedRoomsSkipped field.
func (o *TaskCompanionTaskRoom) SetAllEvaluatedRoomsSkipped(v bool) {
	o.AllEvaluatedRoomsSkipped = &v
}

// GetAppUserOnBreak returns the AppUserOnBreak field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetAppUserOnBreak() AppUserOnBreakType {
	if o == nil || IsNil(o.AppUserOnBreak) {
		var ret AppUserOnBreakType
		return ret
	}
	return *o.AppUserOnBreak
}

// GetAppUserOnBreakOk returns a tuple with the AppUserOnBreak field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetAppUserOnBreakOk() (*AppUserOnBreakType, bool) {
	if o == nil || IsNil(o.AppUserOnBreak) {
		return nil, false
	}
	return o.AppUserOnBreak, true
}

// HasAppUserOnBreak returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasAppUserOnBreak() bool {
	if o != nil && !IsNil(o.AppUserOnBreak) {
		return true
	}

	return false
}

// SetAppUserOnBreak gets a reference to the given AppUserOnBreakType and assigns it to the AppUserOnBreak field.
func (o *TaskCompanionTaskRoom) SetAppUserOnBreak(v AppUserOnBreakType) {
	o.AppUserOnBreak = &v
}

// GetAttendant returns the Attendant field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetAttendant() HousekeepingTaskTypeAttendant {
	if o == nil || IsNil(o.Attendant) {
		var ret HousekeepingTaskTypeAttendant
		return ret
	}
	return *o.Attendant
}

// GetAttendantOk returns a tuple with the Attendant field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetAttendantOk() (*HousekeepingTaskTypeAttendant, bool) {
	if o == nil || IsNil(o.Attendant) {
		return nil, false
	}
	return o.Attendant, true
}

// HasAttendant returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasAttendant() bool {
	if o != nil && !IsNil(o.Attendant) {
		return true
	}

	return false
}

// SetAttendant gets a reference to the given HousekeepingTaskTypeAttendant and assigns it to the Attendant field.
func (o *TaskCompanionTaskRoom) SetAttendant(v HousekeepingTaskTypeAttendant) {
	o.Attendant = &v
}

// GetAttendantStatus returns the AttendantStatus field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetAttendantStatus() ServicingAttendantStatusType {
	if o == nil || IsNil(o.AttendantStatus) {
		var ret ServicingAttendantStatusType
		return ret
	}
	return *o.AttendantStatus
}

// GetAttendantStatusOk returns a tuple with the AttendantStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetAttendantStatusOk() (*ServicingAttendantStatusType, bool) {
	if o == nil || IsNil(o.AttendantStatus) {
		return nil, false
	}
	return o.AttendantStatus, true
}

// HasAttendantStatus returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasAttendantStatus() bool {
	if o != nil && !IsNil(o.AttendantStatus) {
		return true
	}

	return false
}

// SetAttendantStatus gets a reference to the given ServicingAttendantStatusType and assigns it to the AttendantStatus field.
func (o *TaskCompanionTaskRoom) SetAttendantStatus(v ServicingAttendantStatusType) {
	o.AttendantStatus = &v
}

// GetAutoGenerated returns the AutoGenerated field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetAutoGenerated() bool {
	if o == nil || IsNil(o.AutoGenerated) {
		var ret bool
		return ret
	}
	return *o.AutoGenerated
}

// GetAutoGeneratedOk returns a tuple with the AutoGenerated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetAutoGeneratedOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoGenerated) {
		return nil, false
	}
	return o.AutoGenerated, true
}

// HasAutoGenerated returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasAutoGenerated() bool {
	if o != nil && !IsNil(o.AutoGenerated) {
		return true
	}

	return false
}

// SetAutoGenerated gets a reference to the given bool and assigns it to the AutoGenerated field.
func (o *TaskCompanionTaskRoom) SetAutoGenerated(v bool) {
	o.AutoGenerated = &v
}

// GetBreakOutId returns the BreakOutId field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetBreakOutId() int32 {
	if o == nil || IsNil(o.BreakOutId) {
		var ret int32
		return ret
	}
	return *o.BreakOutId
}

// GetBreakOutIdOk returns a tuple with the BreakOutId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetBreakOutIdOk() (*int32, bool) {
	if o == nil || IsNil(o.BreakOutId) {
		return nil, false
	}
	return o.BreakOutId, true
}

// HasBreakOutId returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasBreakOutId() bool {
	if o != nil && !IsNil(o.BreakOutId) {
		return true
	}

	return false
}

// SetBreakOutId gets a reference to the given int32 and assigns it to the BreakOutId field.
func (o *TaskCompanionTaskRoom) SetBreakOutId(v int32) {
	o.BreakOutId = &v
}

// GetCompletedDate returns the CompletedDate field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetCompletedDate() string {
	if o == nil || IsNil(o.CompletedDate) {
		var ret string
		return ret
	}
	return *o.CompletedDate
}

// GetCompletedDateOk returns a tuple with the CompletedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetCompletedDateOk() (*string, bool) {
	if o == nil || IsNil(o.CompletedDate) {
		return nil, false
	}
	return o.CompletedDate, true
}

// HasCompletedDate returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasCompletedDate() bool {
	if o != nil && !IsNil(o.CompletedDate) {
		return true
	}

	return false
}

// SetCompletedDate gets a reference to the given string and assigns it to the CompletedDate field.
func (o *TaskCompanionTaskRoom) SetCompletedDate(v string) {
	o.CompletedDate = &v
}

// GetCredits returns the Credits field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetCredits() []HousekeepingCreditsType {
	if o == nil || IsNil(o.Credits) {
		var ret []HousekeepingCreditsType
		return ret
	}
	return o.Credits
}

// GetCreditsOk returns a tuple with the Credits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetCreditsOk() ([]HousekeepingCreditsType, bool) {
	if o == nil || IsNil(o.Credits) {
		return nil, false
	}
	return o.Credits, true
}

// HasCredits returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasCredits() bool {
	if o != nil && !IsNil(o.Credits) {
		return true
	}

	return false
}

// SetCredits gets a reference to the given []HousekeepingCreditsType and assigns it to the Credits field.
func (o *TaskCompanionTaskRoom) SetCredits(v []HousekeepingCreditsType) {
	o.Credits = v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *TaskCompanionTaskRoom) SetDate(v string) {
	o.Date = &v
}

// GetDepartureTaskInfo returns the DepartureTaskInfo field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetDepartureTaskInfo() DepartureTaskInfoType {
	if o == nil || IsNil(o.DepartureTaskInfo) {
		var ret DepartureTaskInfoType
		return ret
	}
	return *o.DepartureTaskInfo
}

// GetDepartureTaskInfoOk returns a tuple with the DepartureTaskInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetDepartureTaskInfoOk() (*DepartureTaskInfoType, bool) {
	if o == nil || IsNil(o.DepartureTaskInfo) {
		return nil, false
	}
	return o.DepartureTaskInfo, true
}

// HasDepartureTaskInfo returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasDepartureTaskInfo() bool {
	if o != nil && !IsNil(o.DepartureTaskInfo) {
		return true
	}

	return false
}

// SetDepartureTaskInfo gets a reference to the given DepartureTaskInfoType and assigns it to the DepartureTaskInfo field.
func (o *TaskCompanionTaskRoom) SetDepartureTaskInfo(v DepartureTaskInfoType) {
	o.DepartureTaskInfo = &v
}

// GetEmptyTaskSheet returns the EmptyTaskSheet field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetEmptyTaskSheet() bool {
	if o == nil || IsNil(o.EmptyTaskSheet) {
		var ret bool
		return ret
	}
	return *o.EmptyTaskSheet
}

// GetEmptyTaskSheetOk returns a tuple with the EmptyTaskSheet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetEmptyTaskSheetOk() (*bool, bool) {
	if o == nil || IsNil(o.EmptyTaskSheet) {
		return nil, false
	}
	return o.EmptyTaskSheet, true
}

// HasEmptyTaskSheet returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasEmptyTaskSheet() bool {
	if o != nil && !IsNil(o.EmptyTaskSheet) {
		return true
	}

	return false
}

// SetEmptyTaskSheet gets a reference to the given bool and assigns it to the EmptyTaskSheet field.
func (o *TaskCompanionTaskRoom) SetEmptyTaskSheet(v bool) {
	o.EmptyTaskSheet = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TaskCompanionTaskRoom) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinenChangeCount returns the LinenChangeCount field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetLinenChangeCount() int32 {
	if o == nil || IsNil(o.LinenChangeCount) {
		var ret int32
		return ret
	}
	return *o.LinenChangeCount
}

// GetLinenChangeCountOk returns a tuple with the LinenChangeCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetLinenChangeCountOk() (*int32, bool) {
	if o == nil || IsNil(o.LinenChangeCount) {
		return nil, false
	}
	return o.LinenChangeCount, true
}

// HasLinenChangeCount returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasLinenChangeCount() bool {
	if o != nil && !IsNil(o.LinenChangeCount) {
		return true
	}

	return false
}

// SetLinenChangeCount gets a reference to the given int32 and assigns it to the LinenChangeCount field.
func (o *TaskCompanionTaskRoom) SetLinenChangeCount(v int32) {
	o.LinenChangeCount = &v
}

// GetLockTaskSheet returns the LockTaskSheet field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetLockTaskSheet() bool {
	if o == nil || IsNil(o.LockTaskSheet) {
		var ret bool
		return ret
	}
	return *o.LockTaskSheet
}

// GetLockTaskSheetOk returns a tuple with the LockTaskSheet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetLockTaskSheetOk() (*bool, bool) {
	if o == nil || IsNil(o.LockTaskSheet) {
		return nil, false
	}
	return o.LockTaskSheet, true
}

// HasLockTaskSheet returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasLockTaskSheet() bool {
	if o != nil && !IsNil(o.LockTaskSheet) {
		return true
	}

	return false
}

// SetLockTaskSheet gets a reference to the given bool and assigns it to the LockTaskSheet field.
func (o *TaskCompanionTaskRoom) SetLockTaskSheet(v bool) {
	o.LockTaskSheet = &v
}

// GetNextDay returns the NextDay field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetNextDay() bool {
	if o == nil || IsNil(o.NextDay) {
		var ret bool
		return ret
	}
	return *o.NextDay
}

// GetNextDayOk returns a tuple with the NextDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetNextDayOk() (*bool, bool) {
	if o == nil || IsNil(o.NextDay) {
		return nil, false
	}
	return o.NextDay, true
}

// HasNextDay returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasNextDay() bool {
	if o != nil && !IsNil(o.NextDay) {
		return true
	}

	return false
}

// SetNextDay gets a reference to the given bool and assigns it to the NextDay field.
func (o *TaskCompanionTaskRoom) SetNextDay(v bool) {
	o.NextDay = &v
}

// GetRoomCount returns the RoomCount field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetRoomCount() int32 {
	if o == nil || IsNil(o.RoomCount) {
		var ret int32
		return ret
	}
	return *o.RoomCount
}

// GetRoomCountOk returns a tuple with the RoomCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetRoomCountOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomCount) {
		return nil, false
	}
	return o.RoomCount, true
}

// HasRoomCount returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasRoomCount() bool {
	if o != nil && !IsNil(o.RoomCount) {
		return true
	}

	return false
}

// SetRoomCount gets a reference to the given int32 and assigns it to the RoomCount field.
func (o *TaskCompanionTaskRoom) SetRoomCount(v int32) {
	o.RoomCount = &v
}

// GetRoomCounts returns the RoomCounts field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetRoomCounts() []HousekeepingTaskTypeRoomCountsInner {
	if o == nil || IsNil(o.RoomCounts) {
		var ret []HousekeepingTaskTypeRoomCountsInner
		return ret
	}
	return o.RoomCounts
}

// GetRoomCountsOk returns a tuple with the RoomCounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetRoomCountsOk() ([]HousekeepingTaskTypeRoomCountsInner, bool) {
	if o == nil || IsNil(o.RoomCounts) {
		return nil, false
	}
	return o.RoomCounts, true
}

// HasRoomCounts returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasRoomCounts() bool {
	if o != nil && !IsNil(o.RoomCounts) {
		return true
	}

	return false
}

// SetRoomCounts gets a reference to the given []HousekeepingTaskTypeRoomCountsInner and assigns it to the RoomCounts field.
func (o *TaskCompanionTaskRoom) SetRoomCounts(v []HousekeepingTaskTypeRoomCountsInner) {
	o.RoomCounts = v
}

// GetRooms returns the Rooms field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetRooms() []TaskCompanionTaskRoomRoomsInner {
	if o == nil || IsNil(o.Rooms) {
		var ret []TaskCompanionTaskRoomRoomsInner
		return ret
	}
	return o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetRoomsOk() ([]TaskCompanionTaskRoomRoomsInner, bool) {
	if o == nil || IsNil(o.Rooms) {
		return nil, false
	}
	return o.Rooms, true
}

// HasRooms returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasRooms() bool {
	if o != nil && !IsNil(o.Rooms) {
		return true
	}

	return false
}

// SetRooms gets a reference to the given []TaskCompanionTaskRoomRoomsInner and assigns it to the Rooms field.
func (o *TaskCompanionTaskRoom) SetRooms(v []TaskCompanionTaskRoomRoomsInner) {
	o.Rooms = v
}

// GetSheetNumber returns the SheetNumber field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetSheetNumber() int32 {
	if o == nil || IsNil(o.SheetNumber) {
		var ret int32
		return ret
	}
	return *o.SheetNumber
}

// GetSheetNumberOk returns a tuple with the SheetNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetSheetNumberOk() (*int32, bool) {
	if o == nil || IsNil(o.SheetNumber) {
		return nil, false
	}
	return o.SheetNumber, true
}

// HasSheetNumber returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasSheetNumber() bool {
	if o != nil && !IsNil(o.SheetNumber) {
		return true
	}

	return false
}

// SetSheetNumber gets a reference to the given int32 and assigns it to the SheetNumber field.
func (o *TaskCompanionTaskRoom) SetSheetNumber(v int32) {
	o.SheetNumber = &v
}

// GetSheetType returns the SheetType field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetSheetType() TaskSheetType {
	if o == nil || IsNil(o.SheetType) {
		var ret TaskSheetType
		return ret
	}
	return *o.SheetType
}

// GetSheetTypeOk returns a tuple with the SheetType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetSheetTypeOk() (*TaskSheetType, bool) {
	if o == nil || IsNil(o.SheetType) {
		return nil, false
	}
	return o.SheetType, true
}

// HasSheetType returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasSheetType() bool {
	if o != nil && !IsNil(o.SheetType) {
		return true
	}

	return false
}

// SetSheetType gets a reference to the given TaskSheetType and assigns it to the SheetType field.
func (o *TaskCompanionTaskRoom) SetSheetType(v TaskSheetType) {
	o.SheetType = &v
}

// GetTaskCodes returns the TaskCodes field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetTaskCodes() []HousekeepingTaskCodeType {
	if o == nil || IsNil(o.TaskCodes) {
		var ret []HousekeepingTaskCodeType
		return ret
	}
	return o.TaskCodes
}

// GetTaskCodesOk returns a tuple with the TaskCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetTaskCodesOk() ([]HousekeepingTaskCodeType, bool) {
	if o == nil || IsNil(o.TaskCodes) {
		return nil, false
	}
	return o.TaskCodes, true
}

// HasTaskCodes returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasTaskCodes() bool {
	if o != nil && !IsNil(o.TaskCodes) {
		return true
	}

	return false
}

// SetTaskCodes gets a reference to the given []HousekeepingTaskCodeType and assigns it to the TaskCodes field.
func (o *TaskCompanionTaskRoom) SetTaskCodes(v []HousekeepingTaskCodeType) {
	o.TaskCodes = v
}

// GetTaskInstructions returns the TaskInstructions field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetTaskInstructions() string {
	if o == nil || IsNil(o.TaskInstructions) {
		var ret string
		return ret
	}
	return *o.TaskInstructions
}

// GetTaskInstructionsOk returns a tuple with the TaskInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetTaskInstructionsOk() (*string, bool) {
	if o == nil || IsNil(o.TaskInstructions) {
		return nil, false
	}
	return o.TaskInstructions, true
}

// HasTaskInstructions returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasTaskInstructions() bool {
	if o != nil && !IsNil(o.TaskInstructions) {
		return true
	}

	return false
}

// SetTaskInstructions gets a reference to the given string and assigns it to the TaskInstructions field.
func (o *TaskCompanionTaskRoom) SetTaskInstructions(v string) {
	o.TaskInstructions = &v
}

// GetTaskSeqNo returns the TaskSeqNo field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetTaskSeqNo() int32 {
	if o == nil || IsNil(o.TaskSeqNo) {
		var ret int32
		return ret
	}
	return *o.TaskSeqNo
}

// GetTaskSeqNoOk returns a tuple with the TaskSeqNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetTaskSeqNoOk() (*int32, bool) {
	if o == nil || IsNil(o.TaskSeqNo) {
		return nil, false
	}
	return o.TaskSeqNo, true
}

// HasTaskSeqNo returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasTaskSeqNo() bool {
	if o != nil && !IsNil(o.TaskSeqNo) {
		return true
	}

	return false
}

// SetTaskSeqNo gets a reference to the given int32 and assigns it to the TaskSeqNo field.
func (o *TaskCompanionTaskRoom) SetTaskSeqNo(v int32) {
	o.TaskSeqNo = &v
}

// GetTaskSheetCompleted returns the TaskSheetCompleted field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetTaskSheetCompleted() bool {
	if o == nil || IsNil(o.TaskSheetCompleted) {
		var ret bool
		return ret
	}
	return *o.TaskSheetCompleted
}

// GetTaskSheetCompletedOk returns a tuple with the TaskSheetCompleted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetTaskSheetCompletedOk() (*bool, bool) {
	if o == nil || IsNil(o.TaskSheetCompleted) {
		return nil, false
	}
	return o.TaskSheetCompleted, true
}

// HasTaskSheetCompleted returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasTaskSheetCompleted() bool {
	if o != nil && !IsNil(o.TaskSheetCompleted) {
		return true
	}

	return false
}

// SetTaskSheetCompleted gets a reference to the given bool and assigns it to the TaskSheetCompleted field.
func (o *TaskCompanionTaskRoom) SetTaskSheetCompleted(v bool) {
	o.TaskSheetCompleted = &v
}

// GetTotalSupplies returns the TotalSupplies field value if set, zero value otherwise.
func (o *TaskCompanionTaskRoom) GetTotalSupplies() []FacilityCodeType {
	if o == nil || IsNil(o.TotalSupplies) {
		var ret []FacilityCodeType
		return ret
	}
	return o.TotalSupplies
}

// GetTotalSuppliesOk returns a tuple with the TotalSupplies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanionTaskRoom) GetTotalSuppliesOk() ([]FacilityCodeType, bool) {
	if o == nil || IsNil(o.TotalSupplies) {
		return nil, false
	}
	return o.TotalSupplies, true
}

// HasTotalSupplies returns a boolean if a field has been set.
func (o *TaskCompanionTaskRoom) HasTotalSupplies() bool {
	if o != nil && !IsNil(o.TotalSupplies) {
		return true
	}

	return false
}

// SetTotalSupplies gets a reference to the given []FacilityCodeType and assigns it to the TotalSupplies field.
func (o *TaskCompanionTaskRoom) SetTotalSupplies(v []FacilityCodeType) {
	o.TotalSupplies = v
}

func (o TaskCompanionTaskRoom) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaskCompanionTaskRoom) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllEvaluatedRoomsSkipped) {
		toSerialize["allEvaluatedRoomsSkipped"] = o.AllEvaluatedRoomsSkipped
	}
	if !IsNil(o.AppUserOnBreak) {
		toSerialize["appUserOnBreak"] = o.AppUserOnBreak
	}
	if !IsNil(o.Attendant) {
		toSerialize["attendant"] = o.Attendant
	}
	if !IsNil(o.AttendantStatus) {
		toSerialize["attendantStatus"] = o.AttendantStatus
	}
	if !IsNil(o.AutoGenerated) {
		toSerialize["autoGenerated"] = o.AutoGenerated
	}
	if !IsNil(o.BreakOutId) {
		toSerialize["breakOutId"] = o.BreakOutId
	}
	if !IsNil(o.CompletedDate) {
		toSerialize["completedDate"] = o.CompletedDate
	}
	if !IsNil(o.Credits) {
		toSerialize["credits"] = o.Credits
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.DepartureTaskInfo) {
		toSerialize["departureTaskInfo"] = o.DepartureTaskInfo
	}
	if !IsNil(o.EmptyTaskSheet) {
		toSerialize["emptyTaskSheet"] = o.EmptyTaskSheet
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LinenChangeCount) {
		toSerialize["linenChangeCount"] = o.LinenChangeCount
	}
	if !IsNil(o.LockTaskSheet) {
		toSerialize["lockTaskSheet"] = o.LockTaskSheet
	}
	if !IsNil(o.NextDay) {
		toSerialize["nextDay"] = o.NextDay
	}
	if !IsNil(o.RoomCount) {
		toSerialize["roomCount"] = o.RoomCount
	}
	if !IsNil(o.RoomCounts) {
		toSerialize["roomCounts"] = o.RoomCounts
	}
	if !IsNil(o.Rooms) {
		toSerialize["rooms"] = o.Rooms
	}
	if !IsNil(o.SheetNumber) {
		toSerialize["sheetNumber"] = o.SheetNumber
	}
	if !IsNil(o.SheetType) {
		toSerialize["sheetType"] = o.SheetType
	}
	if !IsNil(o.TaskCodes) {
		toSerialize["taskCodes"] = o.TaskCodes
	}
	if !IsNil(o.TaskInstructions) {
		toSerialize["taskInstructions"] = o.TaskInstructions
	}
	if !IsNil(o.TaskSeqNo) {
		toSerialize["taskSeqNo"] = o.TaskSeqNo
	}
	if !IsNil(o.TaskSheetCompleted) {
		toSerialize["taskSheetCompleted"] = o.TaskSheetCompleted
	}
	if !IsNil(o.TotalSupplies) {
		toSerialize["totalSupplies"] = o.TotalSupplies
	}
	return toSerialize, nil
}

type NullableTaskCompanionTaskRoom struct {
	value *TaskCompanionTaskRoom
	isSet bool
}

func (v NullableTaskCompanionTaskRoom) Get() *TaskCompanionTaskRoom {
	return v.value
}

func (v *NullableTaskCompanionTaskRoom) Set(val *TaskCompanionTaskRoom) {
	v.value = val
	v.isSet = true
}

func (v NullableTaskCompanionTaskRoom) IsSet() bool {
	return v.isSet
}

func (v *NullableTaskCompanionTaskRoom) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaskCompanionTaskRoom(val *TaskCompanionTaskRoom) *NullableTaskCompanionTaskRoom {
	return &NullableTaskCompanionTaskRoom{value: val, isSet: true}
}

func (v NullableTaskCompanionTaskRoom) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaskCompanionTaskRoom) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


