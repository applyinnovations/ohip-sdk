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

// checks if the RoomHierarchiesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomHierarchiesToBeChanged{}

// RoomHierarchiesToBeChanged Request to change room hierarchies
type RoomHierarchiesToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Holds collection of room hierarchies
	RoomHierarchies []RoomHierarchyType `json:"roomHierarchies,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomHierarchiesToBeChanged instantiates a new RoomHierarchiesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomHierarchiesToBeChanged() *RoomHierarchiesToBeChanged {
	this := RoomHierarchiesToBeChanged{}
	return &this
}

// NewRoomHierarchiesToBeChangedWithDefaults instantiates a new RoomHierarchiesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomHierarchiesToBeChangedWithDefaults() *RoomHierarchiesToBeChanged {
	this := RoomHierarchiesToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomHierarchiesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchiesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomHierarchiesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomHierarchiesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomHierarchies returns the RoomHierarchies field value if set, zero value otherwise.
func (o *RoomHierarchiesToBeChanged) GetRoomHierarchies() []RoomHierarchyType {
	if o == nil || IsNil(o.RoomHierarchies) {
		var ret []RoomHierarchyType
		return ret
	}
	return o.RoomHierarchies
}

// GetRoomHierarchiesOk returns a tuple with the RoomHierarchies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchiesToBeChanged) GetRoomHierarchiesOk() ([]RoomHierarchyType, bool) {
	if o == nil || IsNil(o.RoomHierarchies) {
		return nil, false
	}
	return o.RoomHierarchies, true
}

// HasRoomHierarchies returns a boolean if a field has been set.
func (o *RoomHierarchiesToBeChanged) HasRoomHierarchies() bool {
	if o != nil && !IsNil(o.RoomHierarchies) {
		return true
	}

	return false
}

// SetRoomHierarchies gets a reference to the given []RoomHierarchyType and assigns it to the RoomHierarchies field.
func (o *RoomHierarchiesToBeChanged) SetRoomHierarchies(v []RoomHierarchyType) {
	o.RoomHierarchies = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomHierarchiesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchiesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomHierarchiesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomHierarchiesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomHierarchiesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomHierarchiesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomHierarchies) {
		toSerialize["roomHierarchies"] = o.RoomHierarchies
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomHierarchiesToBeChanged struct {
	value *RoomHierarchiesToBeChanged
	isSet bool
}

func (v NullableRoomHierarchiesToBeChanged) Get() *RoomHierarchiesToBeChanged {
	return v.value
}

func (v *NullableRoomHierarchiesToBeChanged) Set(val *RoomHierarchiesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomHierarchiesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomHierarchiesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomHierarchiesToBeChanged(val *RoomHierarchiesToBeChanged) *NullableRoomHierarchiesToBeChanged {
	return &NullableRoomHierarchiesToBeChanged{value: val, isSet: true}
}

func (v NullableRoomHierarchiesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomHierarchiesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

