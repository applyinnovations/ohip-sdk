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

// checks if the RoomToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomToBeChanged{}

// RoomToBeChanged Request object for changing details of an existing room.
type RoomToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	Room *RoomToBeChangedRoom `json:"room,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomToBeChanged instantiates a new RoomToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomToBeChanged() *RoomToBeChanged {
	this := RoomToBeChanged{}
	return &this
}

// NewRoomToBeChangedWithDefaults instantiates a new RoomToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomToBeChangedWithDefaults() *RoomToBeChanged {
	this := RoomToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *RoomToBeChanged) GetRoom() RoomToBeChangedRoom {
	if o == nil || IsNil(o.Room) {
		var ret RoomToBeChangedRoom
		return ret
	}
	return *o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomToBeChanged) GetRoomOk() (*RoomToBeChangedRoom, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *RoomToBeChanged) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given RoomToBeChangedRoom and assigns it to the Room field.
func (o *RoomToBeChanged) SetRoom(v RoomToBeChangedRoom) {
	o.Room = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomToBeChanged struct {
	value *RoomToBeChanged
	isSet bool
}

func (v NullableRoomToBeChanged) Get() *RoomToBeChanged {
	return v.value
}

func (v *NullableRoomToBeChanged) Set(val *RoomToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomToBeChanged(val *RoomToBeChanged) *NullableRoomToBeChanged {
	return &NullableRoomToBeChanged{value: val, isSet: true}
}

func (v NullableRoomToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


