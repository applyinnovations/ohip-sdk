/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the AssignedTaskType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AssignedTaskType{}

// AssignedTaskType Holds the assigned task code for a tasksheet.
type AssignedTaskType struct {
	// The Code for the task.
	TaskCode *string `json:"taskCode,omitempty"`
}

// NewAssignedTaskType instantiates a new AssignedTaskType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssignedTaskType() *AssignedTaskType {
	this := AssignedTaskType{}
	return &this
}

// NewAssignedTaskTypeWithDefaults instantiates a new AssignedTaskType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssignedTaskTypeWithDefaults() *AssignedTaskType {
	this := AssignedTaskType{}
	return &this
}

// GetTaskCode returns the TaskCode field value if set, zero value otherwise.
func (o *AssignedTaskType) GetTaskCode() string {
	if o == nil || IsNil(o.TaskCode) {
		var ret string
		return ret
	}
	return *o.TaskCode
}

// GetTaskCodeOk returns a tuple with the TaskCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedTaskType) GetTaskCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TaskCode) {
		return nil, false
	}
	return o.TaskCode, true
}

// HasTaskCode returns a boolean if a field has been set.
func (o *AssignedTaskType) HasTaskCode() bool {
	if o != nil && !IsNil(o.TaskCode) {
		return true
	}

	return false
}

// SetTaskCode gets a reference to the given string and assigns it to the TaskCode field.
func (o *AssignedTaskType) SetTaskCode(v string) {
	o.TaskCode = &v
}

func (o AssignedTaskType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AssignedTaskType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TaskCode) {
		toSerialize["taskCode"] = o.TaskCode
	}
	return toSerialize, nil
}

type NullableAssignedTaskType struct {
	value *AssignedTaskType
	isSet bool
}

func (v NullableAssignedTaskType) Get() *AssignedTaskType {
	return v.value
}

func (v *NullableAssignedTaskType) Set(val *AssignedTaskType) {
	v.value = val
	v.isSet = true
}

func (v NullableAssignedTaskType) IsSet() bool {
	return v.isSet
}

func (v *NullableAssignedTaskType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssignedTaskType(val *AssignedTaskType) *NullableAssignedTaskType {
	return &NullableAssignedTaskType{value: val, isSet: true}
}

func (v NullableAssignedTaskType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssignedTaskType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


