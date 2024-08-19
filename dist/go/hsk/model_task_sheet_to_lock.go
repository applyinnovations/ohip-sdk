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

// checks if the TaskSheetToLock type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaskSheetToLock{}

// TaskSheetToLock Request for locking a task sheet.
type TaskSheetToLock struct {
	Criteria *TaskSheetLockCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTaskSheetToLock instantiates a new TaskSheetToLock object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaskSheetToLock() *TaskSheetToLock {
	this := TaskSheetToLock{}
	return &this
}

// NewTaskSheetToLockWithDefaults instantiates a new TaskSheetToLock object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaskSheetToLockWithDefaults() *TaskSheetToLock {
	this := TaskSheetToLock{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *TaskSheetToLock) GetCriteria() TaskSheetLockCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret TaskSheetLockCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetToLock) GetCriteriaOk() (*TaskSheetLockCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *TaskSheetToLock) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given TaskSheetLockCriteriaType and assigns it to the Criteria field.
func (o *TaskSheetToLock) SetCriteria(v TaskSheetLockCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TaskSheetToLock) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetToLock) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TaskSheetToLock) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TaskSheetToLock) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TaskSheetToLock) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheetToLock) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TaskSheetToLock) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TaskSheetToLock) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TaskSheetToLock) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaskSheetToLock) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTaskSheetToLock struct {
	value *TaskSheetToLock
	isSet bool
}

func (v NullableTaskSheetToLock) Get() *TaskSheetToLock {
	return v.value
}

func (v *NullableTaskSheetToLock) Set(val *TaskSheetToLock) {
	v.value = val
	v.isSet = true
}

func (v NullableTaskSheetToLock) IsSet() bool {
	return v.isSet
}

func (v *NullableTaskSheetToLock) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaskSheetToLock(val *TaskSheetToLock) *NullableTaskSheetToLock {
	return &NullableTaskSheetToLock{value: val, isSet: true}
}

func (v NullableTaskSheetToLock) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaskSheetToLock) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


