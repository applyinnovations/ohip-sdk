/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RotationRules type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RotationRules{}

// RotationRules Request object for creating room rotation setup rules.
type RotationRules struct {
	RotationRules *RotationRulesType `json:"rotationRules,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRotationRules instantiates a new RotationRules object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRotationRules() *RotationRules {
	this := RotationRules{}
	return &this
}

// NewRotationRulesWithDefaults instantiates a new RotationRules object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRotationRulesWithDefaults() *RotationRules {
	this := RotationRules{}
	return &this
}

// GetRotationRules returns the RotationRules field value if set, zero value otherwise.
func (o *RotationRules) GetRotationRules() RotationRulesType {
	if o == nil || IsNil(o.RotationRules) {
		var ret RotationRulesType
		return ret
	}
	return *o.RotationRules
}

// GetRotationRulesOk returns a tuple with the RotationRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRules) GetRotationRulesOk() (*RotationRulesType, bool) {
	if o == nil || IsNil(o.RotationRules) {
		return nil, false
	}
	return o.RotationRules, true
}

// HasRotationRules returns a boolean if a field has been set.
func (o *RotationRules) HasRotationRules() bool {
	if o != nil && !IsNil(o.RotationRules) {
		return true
	}

	return false
}

// SetRotationRules gets a reference to the given RotationRulesType and assigns it to the RotationRules field.
func (o *RotationRules) SetRotationRules(v RotationRulesType) {
	o.RotationRules = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RotationRules) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRules) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RotationRules) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RotationRules) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RotationRules) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RotationRules) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RotationRules) {
		toSerialize["rotationRules"] = o.RotationRules
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRotationRules struct {
	value *RotationRules
	isSet bool
}

func (v NullableRotationRules) Get() *RotationRules {
	return v.value
}

func (v *NullableRotationRules) Set(val *RotationRules) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationRules) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationRules) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationRules(val *RotationRules) *NullableRotationRules {
	return &NullableRotationRules{value: val, isSet: true}
}

func (v NullableRotationRules) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationRules) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


