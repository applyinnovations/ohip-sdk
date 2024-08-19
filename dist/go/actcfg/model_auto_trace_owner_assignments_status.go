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

// checks if the AutoTraceOwnerAssignmentsStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoTraceOwnerAssignmentsStatus{}

// AutoTraceOwnerAssignmentsStatus Existing Operations Responses will eventually be modified to be extended from this type.
type AutoTraceOwnerAssignmentsStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAutoTraceOwnerAssignmentsStatus instantiates a new AutoTraceOwnerAssignmentsStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoTraceOwnerAssignmentsStatus() *AutoTraceOwnerAssignmentsStatus {
	this := AutoTraceOwnerAssignmentsStatus{}
	return &this
}

// NewAutoTraceOwnerAssignmentsStatusWithDefaults instantiates a new AutoTraceOwnerAssignmentsStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoTraceOwnerAssignmentsStatusWithDefaults() *AutoTraceOwnerAssignmentsStatus {
	this := AutoTraceOwnerAssignmentsStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AutoTraceOwnerAssignmentsStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceOwnerAssignmentsStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AutoTraceOwnerAssignmentsStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AutoTraceOwnerAssignmentsStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AutoTraceOwnerAssignmentsStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceOwnerAssignmentsStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AutoTraceOwnerAssignmentsStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AutoTraceOwnerAssignmentsStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AutoTraceOwnerAssignmentsStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoTraceOwnerAssignmentsStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAutoTraceOwnerAssignmentsStatus struct {
	value *AutoTraceOwnerAssignmentsStatus
	isSet bool
}

func (v NullableAutoTraceOwnerAssignmentsStatus) Get() *AutoTraceOwnerAssignmentsStatus {
	return v.value
}

func (v *NullableAutoTraceOwnerAssignmentsStatus) Set(val *AutoTraceOwnerAssignmentsStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoTraceOwnerAssignmentsStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoTraceOwnerAssignmentsStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoTraceOwnerAssignmentsStatus(val *AutoTraceOwnerAssignmentsStatus) *NullableAutoTraceOwnerAssignmentsStatus {
	return &NullableAutoTraceOwnerAssignmentsStatus{value: val, isSet: true}
}

func (v NullableAutoTraceOwnerAssignmentsStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoTraceOwnerAssignmentsStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


