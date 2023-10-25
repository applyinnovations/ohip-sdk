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

// checks if the TaskSheetLockCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaskSheetLockCriteriaType{}

// TaskSheetLockCriteriaType Criteria to lock or unlock a task sheet.
type TaskSheetLockCriteriaType struct {
	// Property code which the task sheet belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// If set to true, the task sheet will be locked.
	LockTaskSheet *bool `json:"lockTaskSheet,omitempty"`
	// Task sequence number of the task sheet.
	TaskSeqNo *int32 `json:"taskSeqNo,omitempty"`
}

// NewTaskSheetLockCriteriaType instantiates a new TaskSheetLockCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaskSheetLockCriteriaType() *TaskSheetLockCriteriaType {
	this := TaskSheetLockCriteriaType{}
	return &this
}

// NewTaskSheetLockCriteriaTypeWithDefaults instantiates a new TaskSheetLockCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaskSheetLockCriteriaTypeWithDefaults() *TaskSheetLockCriteriaType {
	this := TaskSheetLockCriteriaType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TaskSheetLockCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetLockCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TaskSheetLockCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TaskSheetLockCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLockTaskSheet returns the LockTaskSheet field value if set, zero value otherwise.
func (o *TaskSheetLockCriteriaType) GetLockTaskSheet() bool {
	if o == nil || IsNil(o.LockTaskSheet) {
		var ret bool
		return ret
	}
	return *o.LockTaskSheet
}

// GetLockTaskSheetOk returns a tuple with the LockTaskSheet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetLockCriteriaType) GetLockTaskSheetOk() (*bool, bool) {
	if o == nil || IsNil(o.LockTaskSheet) {
		return nil, false
	}
	return o.LockTaskSheet, true
}

// HasLockTaskSheet returns a boolean if a field has been set.
func (o *TaskSheetLockCriteriaType) HasLockTaskSheet() bool {
	if o != nil && !IsNil(o.LockTaskSheet) {
		return true
	}

	return false
}

// SetLockTaskSheet gets a reference to the given bool and assigns it to the LockTaskSheet field.
func (o *TaskSheetLockCriteriaType) SetLockTaskSheet(v bool) {
	o.LockTaskSheet = &v
}

// GetTaskSeqNo returns the TaskSeqNo field value if set, zero value otherwise.
func (o *TaskSheetLockCriteriaType) GetTaskSeqNo() int32 {
	if o == nil || IsNil(o.TaskSeqNo) {
		var ret int32
		return ret
	}
	return *o.TaskSeqNo
}

// GetTaskSeqNoOk returns a tuple with the TaskSeqNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetLockCriteriaType) GetTaskSeqNoOk() (*int32, bool) {
	if o == nil || IsNil(o.TaskSeqNo) {
		return nil, false
	}
	return o.TaskSeqNo, true
}

// HasTaskSeqNo returns a boolean if a field has been set.
func (o *TaskSheetLockCriteriaType) HasTaskSeqNo() bool {
	if o != nil && !IsNil(o.TaskSeqNo) {
		return true
	}

	return false
}

// SetTaskSeqNo gets a reference to the given int32 and assigns it to the TaskSeqNo field.
func (o *TaskSheetLockCriteriaType) SetTaskSeqNo(v int32) {
	o.TaskSeqNo = &v
}

func (o TaskSheetLockCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaskSheetLockCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LockTaskSheet) {
		toSerialize["lockTaskSheet"] = o.LockTaskSheet
	}
	if !IsNil(o.TaskSeqNo) {
		toSerialize["taskSeqNo"] = o.TaskSeqNo
	}
	return toSerialize, nil
}

type NullableTaskSheetLockCriteriaType struct {
	value *TaskSheetLockCriteriaType
	isSet bool
}

func (v NullableTaskSheetLockCriteriaType) Get() *TaskSheetLockCriteriaType {
	return v.value
}

func (v *NullableTaskSheetLockCriteriaType) Set(val *TaskSheetLockCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableTaskSheetLockCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableTaskSheetLockCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaskSheetLockCriteriaType(val *TaskSheetLockCriteriaType) *NullableTaskSheetLockCriteriaType {
	return &NullableTaskSheetLockCriteriaType{value: val, isSet: true}
}

func (v NullableTaskSheetLockCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaskSheetLockCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


