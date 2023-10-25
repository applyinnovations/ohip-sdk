/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypesCriteria{}

// RoomTypesCriteria Request object for Creating a new Room Type.
type RoomTypesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	RoomType *RoomTypesCriteriaRoomType `json:"roomType,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomTypesCriteria instantiates a new RoomTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypesCriteria() *RoomTypesCriteria {
	this := RoomTypesCriteria{}
	return &this
}

// NewRoomTypesCriteriaWithDefaults instantiates a new RoomTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypesCriteriaWithDefaults() *RoomTypesCriteria {
	this := RoomTypesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypesCriteria) GetRoomType() RoomTypesCriteriaRoomType {
	if o == nil || IsNil(o.RoomType) {
		var ret RoomTypesCriteriaRoomType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypesCriteria) GetRoomTypeOk() (*RoomTypesCriteriaRoomType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypesCriteria) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given RoomTypesCriteriaRoomType and assigns it to the RoomType field.
func (o *RoomTypesCriteria) SetRoomType(v RoomTypesCriteriaRoomType) {
	o.RoomType = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomTypesCriteria struct {
	value *RoomTypesCriteria
	isSet bool
}

func (v NullableRoomTypesCriteria) Get() *RoomTypesCriteria {
	return v.value
}

func (v *NullableRoomTypesCriteria) Set(val *RoomTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypesCriteria(val *RoomTypesCriteria) *NullableRoomTypesCriteria {
	return &NullableRoomTypesCriteria{value: val, isSet: true}
}

func (v NullableRoomTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


