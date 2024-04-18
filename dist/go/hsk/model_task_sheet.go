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

// checks if the TaskSheet type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaskSheet{}

// TaskSheet Request of Changing a Task Sheet. The task instructions, total credits, attendant information and room information can be changed on a task sheet. Task Instructions , Total Credits and Attendants will be replaced with what is sent in this request. Example: If the task instructions is null in the request, the task instructions on the task sheet will be updated to null. If rooms are sent as part of this request, this will replace the existing rooms on the task sheet. If rooms are not sent, then the original rooms will remain. The task date, hotel code, task sheet number and task code is required to search for the task sheet which has to be changed
type TaskSheet struct {
	Links []InstanceLink `json:"links,omitempty"`
	TaskSheetDetails *HousekeepingTaskType `json:"taskSheetDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTaskSheet instantiates a new TaskSheet object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaskSheet() *TaskSheet {
	this := TaskSheet{}
	return &this
}

// NewTaskSheetWithDefaults instantiates a new TaskSheet object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaskSheetWithDefaults() *TaskSheet {
	this := TaskSheet{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TaskSheet) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheet) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TaskSheet) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TaskSheet) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTaskSheetDetails returns the TaskSheetDetails field value if set, zero value otherwise.
func (o *TaskSheet) GetTaskSheetDetails() HousekeepingTaskType {
	if o == nil || IsNil(o.TaskSheetDetails) {
		var ret HousekeepingTaskType
		return ret
	}
	return *o.TaskSheetDetails
}

// GetTaskSheetDetailsOk returns a tuple with the TaskSheetDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheet) GetTaskSheetDetailsOk() (*HousekeepingTaskType, bool) {
	if o == nil || IsNil(o.TaskSheetDetails) {
		return nil, false
	}
	return o.TaskSheetDetails, true
}

// HasTaskSheetDetails returns a boolean if a field has been set.
func (o *TaskSheet) HasTaskSheetDetails() bool {
	if o != nil && !IsNil(o.TaskSheetDetails) {
		return true
	}

	return false
}

// SetTaskSheetDetails gets a reference to the given HousekeepingTaskType and assigns it to the TaskSheetDetails field.
func (o *TaskSheet) SetTaskSheetDetails(v HousekeepingTaskType) {
	o.TaskSheetDetails = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TaskSheet) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaskSheet) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TaskSheet) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TaskSheet) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TaskSheet) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaskSheet) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TaskSheetDetails) {
		toSerialize["taskSheetDetails"] = o.TaskSheetDetails
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTaskSheet struct {
	value *TaskSheet
	isSet bool
}

func (v NullableTaskSheet) Get() *TaskSheet {
	return v.value
}

func (v *NullableTaskSheet) Set(val *TaskSheet) {
	v.value = val
	v.isSet = true
}

func (v NullableTaskSheet) IsSet() bool {
	return v.isSet
}

func (v *NullableTaskSheet) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaskSheet(val *TaskSheet) *NullableTaskSheet {
	return &NullableTaskSheet{value: val, isSet: true}
}

func (v NullableTaskSheet) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaskSheet) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

