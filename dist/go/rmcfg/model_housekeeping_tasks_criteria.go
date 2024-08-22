/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingTasksCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTasksCriteria{}

// HousekeepingTasksCriteria Add housekeeping tasks configurations for resort.
type HousekeepingTasksCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of the housekeeping tasks to be configured
	Tasks []HousekeepingTaskConfigType `json:"tasks,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHousekeepingTasksCriteria instantiates a new HousekeepingTasksCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTasksCriteria() *HousekeepingTasksCriteria {
	this := HousekeepingTasksCriteria{}
	return &this
}

// NewHousekeepingTasksCriteriaWithDefaults instantiates a new HousekeepingTasksCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTasksCriteriaWithDefaults() *HousekeepingTasksCriteria {
	this := HousekeepingTasksCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HousekeepingTasksCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTasksCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HousekeepingTasksCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HousekeepingTasksCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTasks returns the Tasks field value if set, zero value otherwise.
func (o *HousekeepingTasksCriteria) GetTasks() []HousekeepingTaskConfigType {
	if o == nil || IsNil(o.Tasks) {
		var ret []HousekeepingTaskConfigType
		return ret
	}
	return o.Tasks
}

// GetTasksOk returns a tuple with the Tasks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTasksCriteria) GetTasksOk() ([]HousekeepingTaskConfigType, bool) {
	if o == nil || IsNil(o.Tasks) {
		return nil, false
	}
	return o.Tasks, true
}

// HasTasks returns a boolean if a field has been set.
func (o *HousekeepingTasksCriteria) HasTasks() bool {
	if o != nil && !IsNil(o.Tasks) {
		return true
	}

	return false
}

// SetTasks gets a reference to the given []HousekeepingTaskConfigType and assigns it to the Tasks field.
func (o *HousekeepingTasksCriteria) SetTasks(v []HousekeepingTaskConfigType) {
	o.Tasks = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HousekeepingTasksCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTasksCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HousekeepingTasksCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HousekeepingTasksCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HousekeepingTasksCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTasksCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Tasks) {
		toSerialize["tasks"] = o.Tasks
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHousekeepingTasksCriteria struct {
	value *HousekeepingTasksCriteria
	isSet bool
}

func (v NullableHousekeepingTasksCriteria) Get() *HousekeepingTasksCriteria {
	return v.value
}

func (v *NullableHousekeepingTasksCriteria) Set(val *HousekeepingTasksCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTasksCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTasksCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTasksCriteria(val *HousekeepingTasksCriteria) *NullableHousekeepingTasksCriteria {
	return &NullableHousekeepingTasksCriteria{value: val, isSet: true}
}

func (v NullableHousekeepingTasksCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTasksCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


