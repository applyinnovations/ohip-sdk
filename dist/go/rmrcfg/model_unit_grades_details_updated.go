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

// checks if the UnitGradesDetailsUpdated type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UnitGradesDetailsUpdated{}

// UnitGradesDetailsUpdated Existing Operations Responses will eventually be modified to be extended from this type.
type UnitGradesDetailsUpdated struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewUnitGradesDetailsUpdated instantiates a new UnitGradesDetailsUpdated object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUnitGradesDetailsUpdated() *UnitGradesDetailsUpdated {
	this := UnitGradesDetailsUpdated{}
	return &this
}

// NewUnitGradesDetailsUpdatedWithDefaults instantiates a new UnitGradesDetailsUpdated object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUnitGradesDetailsUpdatedWithDefaults() *UnitGradesDetailsUpdated {
	this := UnitGradesDetailsUpdated{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *UnitGradesDetailsUpdated) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnitGradesDetailsUpdated) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *UnitGradesDetailsUpdated) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *UnitGradesDetailsUpdated) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *UnitGradesDetailsUpdated) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UnitGradesDetailsUpdated) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *UnitGradesDetailsUpdated) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *UnitGradesDetailsUpdated) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o UnitGradesDetailsUpdated) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UnitGradesDetailsUpdated) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableUnitGradesDetailsUpdated struct {
	value *UnitGradesDetailsUpdated
	isSet bool
}

func (v NullableUnitGradesDetailsUpdated) Get() *UnitGradesDetailsUpdated {
	return v.value
}

func (v *NullableUnitGradesDetailsUpdated) Set(val *UnitGradesDetailsUpdated) {
	v.value = val
	v.isSet = true
}

func (v NullableUnitGradesDetailsUpdated) IsSet() bool {
	return v.isSet
}

func (v *NullableUnitGradesDetailsUpdated) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUnitGradesDetailsUpdated(val *UnitGradesDetailsUpdated) *NullableUnitGradesDetailsUpdated {
	return &NullableUnitGradesDetailsUpdated{value: val, isSet: true}
}

func (v NullableUnitGradesDetailsUpdated) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUnitGradesDetailsUpdated) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


