/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
)

// checks if the AutoTraceOwnerAssignmentsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoTraceOwnerAssignmentsInfo{}

// AutoTraceOwnerAssignmentsInfo Request object for creating/changing trace owner assignments.
type AutoTraceOwnerAssignmentsInfo struct {
	// Detailed information of trace owner assignment.
	AutoTraceOwnerAssignments []AutoTraceOwnerAssignmentType `json:"autoTraceOwnerAssignments,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAutoTraceOwnerAssignmentsInfo instantiates a new AutoTraceOwnerAssignmentsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoTraceOwnerAssignmentsInfo() *AutoTraceOwnerAssignmentsInfo {
	this := AutoTraceOwnerAssignmentsInfo{}
	return &this
}

// NewAutoTraceOwnerAssignmentsInfoWithDefaults instantiates a new AutoTraceOwnerAssignmentsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoTraceOwnerAssignmentsInfoWithDefaults() *AutoTraceOwnerAssignmentsInfo {
	this := AutoTraceOwnerAssignmentsInfo{}
	return &this
}

// GetAutoTraceOwnerAssignments returns the AutoTraceOwnerAssignments field value if set, zero value otherwise.
func (o *AutoTraceOwnerAssignmentsInfo) GetAutoTraceOwnerAssignments() []AutoTraceOwnerAssignmentType {
	if o == nil || IsNil(o.AutoTraceOwnerAssignments) {
		var ret []AutoTraceOwnerAssignmentType
		return ret
	}
	return o.AutoTraceOwnerAssignments
}

// GetAutoTraceOwnerAssignmentsOk returns a tuple with the AutoTraceOwnerAssignments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceOwnerAssignmentsInfo) GetAutoTraceOwnerAssignmentsOk() ([]AutoTraceOwnerAssignmentType, bool) {
	if o == nil || IsNil(o.AutoTraceOwnerAssignments) {
		return nil, false
	}
	return o.AutoTraceOwnerAssignments, true
}

// HasAutoTraceOwnerAssignments returns a boolean if a field has been set.
func (o *AutoTraceOwnerAssignmentsInfo) HasAutoTraceOwnerAssignments() bool {
	if o != nil && !IsNil(o.AutoTraceOwnerAssignments) {
		return true
	}

	return false
}

// SetAutoTraceOwnerAssignments gets a reference to the given []AutoTraceOwnerAssignmentType and assigns it to the AutoTraceOwnerAssignments field.
func (o *AutoTraceOwnerAssignmentsInfo) SetAutoTraceOwnerAssignments(v []AutoTraceOwnerAssignmentType) {
	o.AutoTraceOwnerAssignments = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AutoTraceOwnerAssignmentsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceOwnerAssignmentsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AutoTraceOwnerAssignmentsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AutoTraceOwnerAssignmentsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AutoTraceOwnerAssignmentsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoTraceOwnerAssignmentsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoTraceOwnerAssignments) {
		toSerialize["autoTraceOwnerAssignments"] = o.AutoTraceOwnerAssignments
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAutoTraceOwnerAssignmentsInfo struct {
	value *AutoTraceOwnerAssignmentsInfo
	isSet bool
}

func (v NullableAutoTraceOwnerAssignmentsInfo) Get() *AutoTraceOwnerAssignmentsInfo {
	return v.value
}

func (v *NullableAutoTraceOwnerAssignmentsInfo) Set(val *AutoTraceOwnerAssignmentsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoTraceOwnerAssignmentsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoTraceOwnerAssignmentsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoTraceOwnerAssignmentsInfo(val *AutoTraceOwnerAssignmentsInfo) *NullableAutoTraceOwnerAssignmentsInfo {
	return &NullableAutoTraceOwnerAssignmentsInfo{value: val, isSet: true}
}

func (v NullableAutoTraceOwnerAssignmentsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoTraceOwnerAssignmentsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

