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

// checks if the RoomTypePoolCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypePoolCriteria{}

// RoomTypePoolCriteria Request object for creating new room pool.
type RoomTypePoolCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of room type pool and associated room type(s).
	RoomPoolTypes []RoomTypePoolType `json:"roomPoolTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomTypePoolCriteria instantiates a new RoomTypePoolCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypePoolCriteria() *RoomTypePoolCriteria {
	this := RoomTypePoolCriteria{}
	return &this
}

// NewRoomTypePoolCriteriaWithDefaults instantiates a new RoomTypePoolCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypePoolCriteriaWithDefaults() *RoomTypePoolCriteria {
	this := RoomTypePoolCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomTypePoolCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomTypePoolCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomTypePoolCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomPoolTypes returns the RoomPoolTypes field value if set, zero value otherwise.
func (o *RoomTypePoolCriteria) GetRoomPoolTypes() []RoomTypePoolType {
	if o == nil || IsNil(o.RoomPoolTypes) {
		var ret []RoomTypePoolType
		return ret
	}
	return o.RoomPoolTypes
}

// GetRoomPoolTypesOk returns a tuple with the RoomPoolTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolCriteria) GetRoomPoolTypesOk() ([]RoomTypePoolType, bool) {
	if o == nil || IsNil(o.RoomPoolTypes) {
		return nil, false
	}
	return o.RoomPoolTypes, true
}

// HasRoomPoolTypes returns a boolean if a field has been set.
func (o *RoomTypePoolCriteria) HasRoomPoolTypes() bool {
	if o != nil && !IsNil(o.RoomPoolTypes) {
		return true
	}

	return false
}

// SetRoomPoolTypes gets a reference to the given []RoomTypePoolType and assigns it to the RoomPoolTypes field.
func (o *RoomTypePoolCriteria) SetRoomPoolTypes(v []RoomTypePoolType) {
	o.RoomPoolTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomTypePoolCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypePoolCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomTypePoolCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomTypePoolCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomTypePoolCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypePoolCriteria) ToMap() (map[string]interface{}, error) {
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

type NullableRoomTypePoolCriteria struct {
	value *RoomTypePoolCriteria
	isSet bool
}

func (v NullableRoomTypePoolCriteria) Get() *RoomTypePoolCriteria {
	return v.value
}

func (v *NullableRoomTypePoolCriteria) Set(val *RoomTypePoolCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypePoolCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypePoolCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypePoolCriteria(val *RoomTypePoolCriteria) *NullableRoomTypePoolCriteria {
	return &NullableRoomTypePoolCriteria{value: val, isSet: true}
}

func (v NullableRoomTypePoolCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypePoolCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

