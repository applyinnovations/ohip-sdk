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

// checks if the FacilityHousekeepingTaskType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FacilityHousekeepingTaskType{}

// FacilityHousekeepingTaskType A single facility task type.
type FacilityHousekeepingTaskType struct {
	// Signifies offset(in days) i.e. start on 3rd day from arrival.
	CycleStartDay *int32 `json:"cycleStartDay,omitempty"`
	// List of the facility codes.
	FacilityCodes []FacilityCodeType `json:"facilityCodes,omitempty"`
	FacilityTask *FacilityTaskBaseType `json:"facilityTask,omitempty"`
	// Signifies frequency(i.e. every 2 days) with which task is to be performed.
	Frequency *int32 `json:"frequency,omitempty"`
	// Room number at which task is to be performed.
	RoomId *string `json:"roomId,omitempty"`
	// Signifies the room type for which task is being performed .
	RoomType *string `json:"roomType,omitempty"`
	StayPeriod *HousekeepingTaskStayPeriodType `json:"stayPeriod,omitempty"`
	// A reservation date on which task must occur.
	TaskDate *string `json:"taskDate,omitempty"`
	// Date on which task will stop being performed.
	TaskEndDate *string `json:"taskEndDate,omitempty"`
	// Date on which the task needs to start being performed.
	TaskStartDate *string `json:"taskStartDate,omitempty"`
}

// NewFacilityHousekeepingTaskType instantiates a new FacilityHousekeepingTaskType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFacilityHousekeepingTaskType() *FacilityHousekeepingTaskType {
	this := FacilityHousekeepingTaskType{}
	return &this
}

// NewFacilityHousekeepingTaskTypeWithDefaults instantiates a new FacilityHousekeepingTaskType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFacilityHousekeepingTaskTypeWithDefaults() *FacilityHousekeepingTaskType {
	this := FacilityHousekeepingTaskType{}
	return &this
}

// GetCycleStartDay returns the CycleStartDay field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetCycleStartDay() int32 {
	if o == nil || IsNil(o.CycleStartDay) {
		var ret int32
		return ret
	}
	return *o.CycleStartDay
}

// GetCycleStartDayOk returns a tuple with the CycleStartDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetCycleStartDayOk() (*int32, bool) {
	if o == nil || IsNil(o.CycleStartDay) {
		return nil, false
	}
	return o.CycleStartDay, true
}

// HasCycleStartDay returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasCycleStartDay() bool {
	if o != nil && !IsNil(o.CycleStartDay) {
		return true
	}

	return false
}

// SetCycleStartDay gets a reference to the given int32 and assigns it to the CycleStartDay field.
func (o *FacilityHousekeepingTaskType) SetCycleStartDay(v int32) {
	o.CycleStartDay = &v
}

// GetFacilityCodes returns the FacilityCodes field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetFacilityCodes() []FacilityCodeType {
	if o == nil || IsNil(o.FacilityCodes) {
		var ret []FacilityCodeType
		return ret
	}
	return o.FacilityCodes
}

// GetFacilityCodesOk returns a tuple with the FacilityCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetFacilityCodesOk() ([]FacilityCodeType, bool) {
	if o == nil || IsNil(o.FacilityCodes) {
		return nil, false
	}
	return o.FacilityCodes, true
}

// HasFacilityCodes returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasFacilityCodes() bool {
	if o != nil && !IsNil(o.FacilityCodes) {
		return true
	}

	return false
}

// SetFacilityCodes gets a reference to the given []FacilityCodeType and assigns it to the FacilityCodes field.
func (o *FacilityHousekeepingTaskType) SetFacilityCodes(v []FacilityCodeType) {
	o.FacilityCodes = v
}

// GetFacilityTask returns the FacilityTask field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetFacilityTask() FacilityTaskBaseType {
	if o == nil || IsNil(o.FacilityTask) {
		var ret FacilityTaskBaseType
		return ret
	}
	return *o.FacilityTask
}

// GetFacilityTaskOk returns a tuple with the FacilityTask field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetFacilityTaskOk() (*FacilityTaskBaseType, bool) {
	if o == nil || IsNil(o.FacilityTask) {
		return nil, false
	}
	return o.FacilityTask, true
}

// HasFacilityTask returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasFacilityTask() bool {
	if o != nil && !IsNil(o.FacilityTask) {
		return true
	}

	return false
}

// SetFacilityTask gets a reference to the given FacilityTaskBaseType and assigns it to the FacilityTask field.
func (o *FacilityHousekeepingTaskType) SetFacilityTask(v FacilityTaskBaseType) {
	o.FacilityTask = &v
}

// GetFrequency returns the Frequency field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetFrequency() int32 {
	if o == nil || IsNil(o.Frequency) {
		var ret int32
		return ret
	}
	return *o.Frequency
}

// GetFrequencyOk returns a tuple with the Frequency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetFrequencyOk() (*int32, bool) {
	if o == nil || IsNil(o.Frequency) {
		return nil, false
	}
	return o.Frequency, true
}

// HasFrequency returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasFrequency() bool {
	if o != nil && !IsNil(o.Frequency) {
		return true
	}

	return false
}

// SetFrequency gets a reference to the given int32 and assigns it to the Frequency field.
func (o *FacilityHousekeepingTaskType) SetFrequency(v int32) {
	o.Frequency = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *FacilityHousekeepingTaskType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *FacilityHousekeepingTaskType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetStayPeriod returns the StayPeriod field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetStayPeriod() HousekeepingTaskStayPeriodType {
	if o == nil || IsNil(o.StayPeriod) {
		var ret HousekeepingTaskStayPeriodType
		return ret
	}
	return *o.StayPeriod
}

// GetStayPeriodOk returns a tuple with the StayPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetStayPeriodOk() (*HousekeepingTaskStayPeriodType, bool) {
	if o == nil || IsNil(o.StayPeriod) {
		return nil, false
	}
	return o.StayPeriod, true
}

// HasStayPeriod returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasStayPeriod() bool {
	if o != nil && !IsNil(o.StayPeriod) {
		return true
	}

	return false
}

// SetStayPeriod gets a reference to the given HousekeepingTaskStayPeriodType and assigns it to the StayPeriod field.
func (o *FacilityHousekeepingTaskType) SetStayPeriod(v HousekeepingTaskStayPeriodType) {
	o.StayPeriod = &v
}

// GetTaskDate returns the TaskDate field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetTaskDate() string {
	if o == nil || IsNil(o.TaskDate) {
		var ret string
		return ret
	}
	return *o.TaskDate
}

// GetTaskDateOk returns a tuple with the TaskDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetTaskDateOk() (*string, bool) {
	if o == nil || IsNil(o.TaskDate) {
		return nil, false
	}
	return o.TaskDate, true
}

// HasTaskDate returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasTaskDate() bool {
	if o != nil && !IsNil(o.TaskDate) {
		return true
	}

	return false
}

// SetTaskDate gets a reference to the given string and assigns it to the TaskDate field.
func (o *FacilityHousekeepingTaskType) SetTaskDate(v string) {
	o.TaskDate = &v
}

// GetTaskEndDate returns the TaskEndDate field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetTaskEndDate() string {
	if o == nil || IsNil(o.TaskEndDate) {
		var ret string
		return ret
	}
	return *o.TaskEndDate
}

// GetTaskEndDateOk returns a tuple with the TaskEndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetTaskEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.TaskEndDate) {
		return nil, false
	}
	return o.TaskEndDate, true
}

// HasTaskEndDate returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasTaskEndDate() bool {
	if o != nil && !IsNil(o.TaskEndDate) {
		return true
	}

	return false
}

// SetTaskEndDate gets a reference to the given string and assigns it to the TaskEndDate field.
func (o *FacilityHousekeepingTaskType) SetTaskEndDate(v string) {
	o.TaskEndDate = &v
}

// GetTaskStartDate returns the TaskStartDate field value if set, zero value otherwise.
func (o *FacilityHousekeepingTaskType) GetTaskStartDate() string {
	if o == nil || IsNil(o.TaskStartDate) {
		var ret string
		return ret
	}
	return *o.TaskStartDate
}

// GetTaskStartDateOk returns a tuple with the TaskStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityHousekeepingTaskType) GetTaskStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.TaskStartDate) {
		return nil, false
	}
	return o.TaskStartDate, true
}

// HasTaskStartDate returns a boolean if a field has been set.
func (o *FacilityHousekeepingTaskType) HasTaskStartDate() bool {
	if o != nil && !IsNil(o.TaskStartDate) {
		return true
	}

	return false
}

// SetTaskStartDate gets a reference to the given string and assigns it to the TaskStartDate field.
func (o *FacilityHousekeepingTaskType) SetTaskStartDate(v string) {
	o.TaskStartDate = &v
}

func (o FacilityHousekeepingTaskType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FacilityHousekeepingTaskType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CycleStartDay) {
		toSerialize["cycleStartDay"] = o.CycleStartDay
	}
	if !IsNil(o.FacilityCodes) {
		toSerialize["facilityCodes"] = o.FacilityCodes
	}
	if !IsNil(o.FacilityTask) {
		toSerialize["facilityTask"] = o.FacilityTask
	}
	if !IsNil(o.Frequency) {
		toSerialize["frequency"] = o.Frequency
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.StayPeriod) {
		toSerialize["stayPeriod"] = o.StayPeriod
	}
	if !IsNil(o.TaskDate) {
		toSerialize["taskDate"] = o.TaskDate
	}
	if !IsNil(o.TaskEndDate) {
		toSerialize["taskEndDate"] = o.TaskEndDate
	}
	if !IsNil(o.TaskStartDate) {
		toSerialize["taskStartDate"] = o.TaskStartDate
	}
	return toSerialize, nil
}

type NullableFacilityHousekeepingTaskType struct {
	value *FacilityHousekeepingTaskType
	isSet bool
}

func (v NullableFacilityHousekeepingTaskType) Get() *FacilityHousekeepingTaskType {
	return v.value
}

func (v *NullableFacilityHousekeepingTaskType) Set(val *FacilityHousekeepingTaskType) {
	v.value = val
	v.isSet = true
}

func (v NullableFacilityHousekeepingTaskType) IsSet() bool {
	return v.isSet
}

func (v *NullableFacilityHousekeepingTaskType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFacilityHousekeepingTaskType(val *FacilityHousekeepingTaskType) *NullableFacilityHousekeepingTaskType {
	return &NullableFacilityHousekeepingTaskType{value: val, isSet: true}
}

func (v NullableFacilityHousekeepingTaskType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFacilityHousekeepingTaskType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


