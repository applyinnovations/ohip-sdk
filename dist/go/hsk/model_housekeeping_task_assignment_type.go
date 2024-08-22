/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the HousekeepingTaskAssignmentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskAssignmentType{}

// HousekeepingTaskAssignmentType Contains information for all the Task Sheets generated for a particular combination of Date and Task Code.
type HousekeepingTaskAssignmentType struct {
	// Property where the Task Assignment is done.
	HotelId *string `json:"hotelId,omitempty"`
	// The Task Code(s) for which the Task Sheets were generated.
	TaskCodes []HousekeepingTaskCodeType `json:"taskCodes,omitempty"`
	// The date for which the Task Assignment is done. Date should be the current business date in most cases. Date cannot be in the past.
	TaskDate *string `json:"taskDate,omitempty"`
	// List of Task Sheets generated for this assignment.
	TaskSheets []HousekeepingTaskType `json:"taskSheets,omitempty"`
	TaskSheetsCount *int32 `json:"taskSheetsCount,omitempty"`
}

// NewHousekeepingTaskAssignmentType instantiates a new HousekeepingTaskAssignmentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskAssignmentType() *HousekeepingTaskAssignmentType {
	this := HousekeepingTaskAssignmentType{}
	return &this
}

// NewHousekeepingTaskAssignmentTypeWithDefaults instantiates a new HousekeepingTaskAssignmentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskAssignmentTypeWithDefaults() *HousekeepingTaskAssignmentType {
	this := HousekeepingTaskAssignmentType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingTaskAssignmentType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskAssignmentType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingTaskAssignmentType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingTaskAssignmentType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetTaskCodes returns the TaskCodes field value if set, zero value otherwise.
func (o *HousekeepingTaskAssignmentType) GetTaskCodes() []HousekeepingTaskCodeType {
	if o == nil || IsNil(o.TaskCodes) {
		var ret []HousekeepingTaskCodeType
		return ret
	}
	return o.TaskCodes
}

// GetTaskCodesOk returns a tuple with the TaskCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskAssignmentType) GetTaskCodesOk() ([]HousekeepingTaskCodeType, bool) {
	if o == nil || IsNil(o.TaskCodes) {
		return nil, false
	}
	return o.TaskCodes, true
}

// HasTaskCodes returns a boolean if a field has been set.
func (o *HousekeepingTaskAssignmentType) HasTaskCodes() bool {
	if o != nil && !IsNil(o.TaskCodes) {
		return true
	}

	return false
}

// SetTaskCodes gets a reference to the given []HousekeepingTaskCodeType and assigns it to the TaskCodes field.
func (o *HousekeepingTaskAssignmentType) SetTaskCodes(v []HousekeepingTaskCodeType) {
	o.TaskCodes = v
}

// GetTaskDate returns the TaskDate field value if set, zero value otherwise.
func (o *HousekeepingTaskAssignmentType) GetTaskDate() string {
	if o == nil || IsNil(o.TaskDate) {
		var ret string
		return ret
	}
	return *o.TaskDate
}

// GetTaskDateOk returns a tuple with the TaskDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskAssignmentType) GetTaskDateOk() (*string, bool) {
	if o == nil || IsNil(o.TaskDate) {
		return nil, false
	}
	return o.TaskDate, true
}

// HasTaskDate returns a boolean if a field has been set.
func (o *HousekeepingTaskAssignmentType) HasTaskDate() bool {
	if o != nil && !IsNil(o.TaskDate) {
		return true
	}

	return false
}

// SetTaskDate gets a reference to the given string and assigns it to the TaskDate field.
func (o *HousekeepingTaskAssignmentType) SetTaskDate(v string) {
	o.TaskDate = &v
}

// GetTaskSheets returns the TaskSheets field value if set, zero value otherwise.
func (o *HousekeepingTaskAssignmentType) GetTaskSheets() []HousekeepingTaskType {
	if o == nil || IsNil(o.TaskSheets) {
		var ret []HousekeepingTaskType
		return ret
	}
	return o.TaskSheets
}

// GetTaskSheetsOk returns a tuple with the TaskSheets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskAssignmentType) GetTaskSheetsOk() ([]HousekeepingTaskType, bool) {
	if o == nil || IsNil(o.TaskSheets) {
		return nil, false
	}
	return o.TaskSheets, true
}

// HasTaskSheets returns a boolean if a field has been set.
func (o *HousekeepingTaskAssignmentType) HasTaskSheets() bool {
	if o != nil && !IsNil(o.TaskSheets) {
		return true
	}

	return false
}

// SetTaskSheets gets a reference to the given []HousekeepingTaskType and assigns it to the TaskSheets field.
func (o *HousekeepingTaskAssignmentType) SetTaskSheets(v []HousekeepingTaskType) {
	o.TaskSheets = v
}

// GetTaskSheetsCount returns the TaskSheetsCount field value if set, zero value otherwise.
func (o *HousekeepingTaskAssignmentType) GetTaskSheetsCount() int32 {
	if o == nil || IsNil(o.TaskSheetsCount) {
		var ret int32
		return ret
	}
	return *o.TaskSheetsCount
}

// GetTaskSheetsCountOk returns a tuple with the TaskSheetsCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskAssignmentType) GetTaskSheetsCountOk() (*int32, bool) {
	if o == nil || IsNil(o.TaskSheetsCount) {
		return nil, false
	}
	return o.TaskSheetsCount, true
}

// HasTaskSheetsCount returns a boolean if a field has been set.
func (o *HousekeepingTaskAssignmentType) HasTaskSheetsCount() bool {
	if o != nil && !IsNil(o.TaskSheetsCount) {
		return true
	}

	return false
}

// SetTaskSheetsCount gets a reference to the given int32 and assigns it to the TaskSheetsCount field.
func (o *HousekeepingTaskAssignmentType) SetTaskSheetsCount(v int32) {
	o.TaskSheetsCount = &v
}

func (o HousekeepingTaskAssignmentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskAssignmentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.TaskCodes) {
		toSerialize["taskCodes"] = o.TaskCodes
	}
	if !IsNil(o.TaskDate) {
		toSerialize["taskDate"] = o.TaskDate
	}
	if !IsNil(o.TaskSheets) {
		toSerialize["taskSheets"] = o.TaskSheets
	}
	if !IsNil(o.TaskSheetsCount) {
		toSerialize["taskSheetsCount"] = o.TaskSheetsCount
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskAssignmentType struct {
	value *HousekeepingTaskAssignmentType
	isSet bool
}

func (v NullableHousekeepingTaskAssignmentType) Get() *HousekeepingTaskAssignmentType {
	return v.value
}

func (v *NullableHousekeepingTaskAssignmentType) Set(val *HousekeepingTaskAssignmentType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskAssignmentType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskAssignmentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskAssignmentType(val *HousekeepingTaskAssignmentType) *NullableHousekeepingTaskAssignmentType {
	return &NullableHousekeepingTaskAssignmentType{value: val, isSet: true}
}

func (v NullableHousekeepingTaskAssignmentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskAssignmentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


