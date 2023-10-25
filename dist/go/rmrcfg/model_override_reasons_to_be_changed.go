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

// checks if the OverrideReasonsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OverrideReasonsToBeChanged{}

// OverrideReasonsToBeChanged Request object for changing an existing Room Rotation Override Reason.
type OverrideReasonsToBeChanged struct {
	// Room Rotation Override Reason Enumeration element.
	OverrideReasons []RoomRotationOverrideReasonType `json:"overrideReasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewOverrideReasonsToBeChanged instantiates a new OverrideReasonsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOverrideReasonsToBeChanged() *OverrideReasonsToBeChanged {
	this := OverrideReasonsToBeChanged{}
	return &this
}

// NewOverrideReasonsToBeChangedWithDefaults instantiates a new OverrideReasonsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOverrideReasonsToBeChangedWithDefaults() *OverrideReasonsToBeChanged {
	this := OverrideReasonsToBeChanged{}
	return &this
}

// GetOverrideReasons returns the OverrideReasons field value if set, zero value otherwise.
func (o *OverrideReasonsToBeChanged) GetOverrideReasons() []RoomRotationOverrideReasonType {
	if o == nil || IsNil(o.OverrideReasons) {
		var ret []RoomRotationOverrideReasonType
		return ret
	}
	return o.OverrideReasons
}

// GetOverrideReasonsOk returns a tuple with the OverrideReasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OverrideReasonsToBeChanged) GetOverrideReasonsOk() ([]RoomRotationOverrideReasonType, bool) {
	if o == nil || IsNil(o.OverrideReasons) {
		return nil, false
	}
	return o.OverrideReasons, true
}

// HasOverrideReasons returns a boolean if a field has been set.
func (o *OverrideReasonsToBeChanged) HasOverrideReasons() bool {
	if o != nil && !IsNil(o.OverrideReasons) {
		return true
	}

	return false
}

// SetOverrideReasons gets a reference to the given []RoomRotationOverrideReasonType and assigns it to the OverrideReasons field.
func (o *OverrideReasonsToBeChanged) SetOverrideReasons(v []RoomRotationOverrideReasonType) {
	o.OverrideReasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *OverrideReasonsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OverrideReasonsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *OverrideReasonsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *OverrideReasonsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o OverrideReasonsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OverrideReasonsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OverrideReasons) {
		toSerialize["overrideReasons"] = o.OverrideReasons
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableOverrideReasonsToBeChanged struct {
	value *OverrideReasonsToBeChanged
	isSet bool
}

func (v NullableOverrideReasonsToBeChanged) Get() *OverrideReasonsToBeChanged {
	return v.value
}

func (v *NullableOverrideReasonsToBeChanged) Set(val *OverrideReasonsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableOverrideReasonsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableOverrideReasonsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOverrideReasonsToBeChanged(val *OverrideReasonsToBeChanged) *NullableOverrideReasonsToBeChanged {
	return &NullableOverrideReasonsToBeChanged{value: val, isSet: true}
}

func (v NullableOverrideReasonsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOverrideReasonsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


