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

// checks if the TaskCompanion type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaskCompanion{}

// TaskCompanion Response for the Fetch Task Room request. The room details for the room requested or for the room which was evaluated to be cleaned will be returned along with details of the rooms current status and reservations for the room, if any.
type TaskCompanion struct {
	Links []InstanceLink `json:"links,omitempty"`
	TaskRoom *TaskCompanionTaskRoom `json:"taskRoom,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTaskCompanion instantiates a new TaskCompanion object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaskCompanion() *TaskCompanion {
	this := TaskCompanion{}
	return &this
}

// NewTaskCompanionWithDefaults instantiates a new TaskCompanion object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaskCompanionWithDefaults() *TaskCompanion {
	this := TaskCompanion{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TaskCompanion) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanion) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TaskCompanion) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TaskCompanion) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTaskRoom returns the TaskRoom field value if set, zero value otherwise.
func (o *TaskCompanion) GetTaskRoom() TaskCompanionTaskRoom {
	if o == nil || IsNil(o.TaskRoom) {
		var ret TaskCompanionTaskRoom
		return ret
	}
	return *o.TaskRoom
}

// GetTaskRoomOk returns a tuple with the TaskRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanion) GetTaskRoomOk() (*TaskCompanionTaskRoom, bool) {
	if o == nil || IsNil(o.TaskRoom) {
		return nil, false
	}
	return o.TaskRoom, true
}

// HasTaskRoom returns a boolean if a field has been set.
func (o *TaskCompanion) HasTaskRoom() bool {
	if o != nil && !IsNil(o.TaskRoom) {
		return true
	}

	return false
}

// SetTaskRoom gets a reference to the given TaskCompanionTaskRoom and assigns it to the TaskRoom field.
func (o *TaskCompanion) SetTaskRoom(v TaskCompanionTaskRoom) {
	o.TaskRoom = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TaskCompanion) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskCompanion) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TaskCompanion) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TaskCompanion) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TaskCompanion) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaskCompanion) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TaskRoom) {
		toSerialize["taskRoom"] = o.TaskRoom
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTaskCompanion struct {
	value *TaskCompanion
	isSet bool
}

func (v NullableTaskCompanion) Get() *TaskCompanion {
	return v.value
}

func (v *NullableTaskCompanion) Set(val *TaskCompanion) {
	v.value = val
	v.isSet = true
}

func (v NullableTaskCompanion) IsSet() bool {
	return v.isSet
}

func (v *NullableTaskCompanion) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaskCompanion(val *TaskCompanion) *NullableTaskCompanion {
	return &NullableTaskCompanion{value: val, isSet: true}
}

func (v NullableTaskCompanion) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaskCompanion) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


