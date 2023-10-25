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

// checks if the RoomClassCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomClassCriteria{}

// RoomClassCriteria Request object for creating a new hotel level room class.
type RoomClassCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	RoomClass *RoomClassType `json:"roomClass,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomClassCriteria instantiates a new RoomClassCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomClassCriteria() *RoomClassCriteria {
	this := RoomClassCriteria{}
	return &this
}

// NewRoomClassCriteriaWithDefaults instantiates a new RoomClassCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomClassCriteriaWithDefaults() *RoomClassCriteria {
	this := RoomClassCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomClassCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomClassCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomClassCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RoomClassCriteria) GetRoomClass() RoomClassType {
	if o == nil || IsNil(o.RoomClass) {
		var ret RoomClassType
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCriteria) GetRoomClassOk() (*RoomClassType, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RoomClassCriteria) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given RoomClassType and assigns it to the RoomClass field.
func (o *RoomClassCriteria) SetRoomClass(v RoomClassType) {
	o.RoomClass = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomClassCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomClassCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomClassCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomClassCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomClassCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomClassCriteria struct {
	value *RoomClassCriteria
	isSet bool
}

func (v NullableRoomClassCriteria) Get() *RoomClassCriteria {
	return v.value
}

func (v *NullableRoomClassCriteria) Set(val *RoomClassCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomClassCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomClassCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomClassCriteria(val *RoomClassCriteria) *NullableRoomClassCriteria {
	return &NullableRoomClassCriteria{value: val, isSet: true}
}

func (v NullableRoomClassCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomClassCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


