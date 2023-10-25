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

// checks if the ChangeRoomOwnerDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeRoomOwnerDetails{}

// ChangeRoomOwnerDetails Request object for changing room ownership records.
type ChangeRoomOwnerDetails struct {
	// Indicate to override the Owner Exclusive flag in room ownership records with overlapping dates
	OverrideOwnerExclusive *bool `json:"overrideOwnerExclusive,omitempty"`
	RoomOwners *RoomOwnershipsList `json:"roomOwners,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeRoomOwnerDetails instantiates a new ChangeRoomOwnerDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeRoomOwnerDetails() *ChangeRoomOwnerDetails {
	this := ChangeRoomOwnerDetails{}
	var overrideOwnerExclusive bool = false
	this.OverrideOwnerExclusive = &overrideOwnerExclusive
	return &this
}

// NewChangeRoomOwnerDetailsWithDefaults instantiates a new ChangeRoomOwnerDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeRoomOwnerDetailsWithDefaults() *ChangeRoomOwnerDetails {
	this := ChangeRoomOwnerDetails{}
	var overrideOwnerExclusive bool = false
	this.OverrideOwnerExclusive = &overrideOwnerExclusive
	return &this
}

// GetOverrideOwnerExclusive returns the OverrideOwnerExclusive field value if set, zero value otherwise.
func (o *ChangeRoomOwnerDetails) GetOverrideOwnerExclusive() bool {
	if o == nil || IsNil(o.OverrideOwnerExclusive) {
		var ret bool
		return ret
	}
	return *o.OverrideOwnerExclusive
}

// GetOverrideOwnerExclusiveOk returns a tuple with the OverrideOwnerExclusive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRoomOwnerDetails) GetOverrideOwnerExclusiveOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideOwnerExclusive) {
		return nil, false
	}
	return o.OverrideOwnerExclusive, true
}

// HasOverrideOwnerExclusive returns a boolean if a field has been set.
func (o *ChangeRoomOwnerDetails) HasOverrideOwnerExclusive() bool {
	if o != nil && !IsNil(o.OverrideOwnerExclusive) {
		return true
	}

	return false
}

// SetOverrideOwnerExclusive gets a reference to the given bool and assigns it to the OverrideOwnerExclusive field.
func (o *ChangeRoomOwnerDetails) SetOverrideOwnerExclusive(v bool) {
	o.OverrideOwnerExclusive = &v
}

// GetRoomOwners returns the RoomOwners field value if set, zero value otherwise.
func (o *ChangeRoomOwnerDetails) GetRoomOwners() RoomOwnershipsList {
	if o == nil || IsNil(o.RoomOwners) {
		var ret RoomOwnershipsList
		return ret
	}
	return *o.RoomOwners
}

// GetRoomOwnersOk returns a tuple with the RoomOwners field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRoomOwnerDetails) GetRoomOwnersOk() (*RoomOwnershipsList, bool) {
	if o == nil || IsNil(o.RoomOwners) {
		return nil, false
	}
	return o.RoomOwners, true
}

// HasRoomOwners returns a boolean if a field has been set.
func (o *ChangeRoomOwnerDetails) HasRoomOwners() bool {
	if o != nil && !IsNil(o.RoomOwners) {
		return true
	}

	return false
}

// SetRoomOwners gets a reference to the given RoomOwnershipsList and assigns it to the RoomOwners field.
func (o *ChangeRoomOwnerDetails) SetRoomOwners(v RoomOwnershipsList) {
	o.RoomOwners = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeRoomOwnerDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRoomOwnerDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeRoomOwnerDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeRoomOwnerDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeRoomOwnerDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeRoomOwnerDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.OverrideOwnerExclusive) {
		toSerialize["overrideOwnerExclusive"] = o.OverrideOwnerExclusive
	}
	if !IsNil(o.RoomOwners) {
		toSerialize["roomOwners"] = o.RoomOwners
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeRoomOwnerDetails struct {
	value *ChangeRoomOwnerDetails
	isSet bool
}

func (v NullableChangeRoomOwnerDetails) Get() *ChangeRoomOwnerDetails {
	return v.value
}

func (v *NullableChangeRoomOwnerDetails) Set(val *ChangeRoomOwnerDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeRoomOwnerDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeRoomOwnerDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeRoomOwnerDetails(val *ChangeRoomOwnerDetails) *NullableChangeRoomOwnerDetails {
	return &NullableChangeRoomOwnerDetails{value: val, isSet: true}
}

func (v NullableChangeRoomOwnerDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeRoomOwnerDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


