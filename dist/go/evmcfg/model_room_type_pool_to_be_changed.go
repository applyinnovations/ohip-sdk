/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the RoomTypePoolToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypePoolToBeChanged{}

// RoomTypePoolToBeChanged Request object for changing existing room pool.
type RoomTypePoolToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of room type pool and associated room type(s).
	RoomPoolTypes []RoomTypePoolType `json:"roomPoolTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomTypePoolToBeChanged instantiates a new RoomTypePoolToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypePoolToBeChanged() *RoomTypePoolToBeChanged {
	this := RoomTypePoolToBeChanged{}
	return &this
}

// NewRoomTypePoolToBeChangedWithDefaults instantiates a new RoomTypePoolToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypePoolToBeChangedWithDefaults() *RoomTypePoolToBeChanged {
	this := RoomTypePoolToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomTypePoolToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomTypePoolToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomTypePoolToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomPoolTypes returns the RoomPoolTypes field value if set, zero value otherwise.
func (o *RoomTypePoolToBeChanged) GetRoomPoolTypes() []RoomTypePoolType {
	if o == nil || IsNil(o.RoomPoolTypes) {
		var ret []RoomTypePoolType
		return ret
	}
	return o.RoomPoolTypes
}

// GetRoomPoolTypesOk returns a tuple with the RoomPoolTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolToBeChanged) GetRoomPoolTypesOk() ([]RoomTypePoolType, bool) {
	if o == nil || IsNil(o.RoomPoolTypes) {
		return nil, false
	}
	return o.RoomPoolTypes, true
}

// HasRoomPoolTypes returns a boolean if a field has been set.
func (o *RoomTypePoolToBeChanged) HasRoomPoolTypes() bool {
	if o != nil && !IsNil(o.RoomPoolTypes) {
		return true
	}

	return false
}

// SetRoomPoolTypes gets a reference to the given []RoomTypePoolType and assigns it to the RoomPoolTypes field.
func (o *RoomTypePoolToBeChanged) SetRoomPoolTypes(v []RoomTypePoolType) {
	o.RoomPoolTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomTypePoolToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomTypePoolToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomTypePoolToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomTypePoolToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypePoolToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomPoolTypes) {
		toSerialize["roomPoolTypes"] = o.RoomPoolTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomTypePoolToBeChanged struct {
	value *RoomTypePoolToBeChanged
	isSet bool
}

func (v NullableRoomTypePoolToBeChanged) Get() *RoomTypePoolToBeChanged {
	return v.value
}

func (v *NullableRoomTypePoolToBeChanged) Set(val *RoomTypePoolToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypePoolToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypePoolToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypePoolToBeChanged(val *RoomTypePoolToBeChanged) *NullableRoomTypePoolToBeChanged {
	return &NullableRoomTypePoolToBeChanged{value: val, isSet: true}
}

func (v NullableRoomTypePoolToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypePoolToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

