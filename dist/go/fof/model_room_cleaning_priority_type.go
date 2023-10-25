/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the RoomCleaningPriorityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomCleaningPriorityType{}

// RoomCleaningPriorityType Type to indicate the cleaning priority for a room.
type RoomCleaningPriorityType struct {
	// Priority sequence of the room for cleaning.
	PrioritySequence *int32 `json:"prioritySequence,omitempty"`
}

// NewRoomCleaningPriorityType instantiates a new RoomCleaningPriorityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomCleaningPriorityType() *RoomCleaningPriorityType {
	this := RoomCleaningPriorityType{}
	return &this
}

// NewRoomCleaningPriorityTypeWithDefaults instantiates a new RoomCleaningPriorityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomCleaningPriorityTypeWithDefaults() *RoomCleaningPriorityType {
	this := RoomCleaningPriorityType{}
	return &this
}

// GetPrioritySequence returns the PrioritySequence field value if set, zero value otherwise.
func (o *RoomCleaningPriorityType) GetPrioritySequence() int32 {
	if o == nil || IsNil(o.PrioritySequence) {
		var ret int32
		return ret
	}
	return *o.PrioritySequence
}

// GetPrioritySequenceOk returns a tuple with the PrioritySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomCleaningPriorityType) GetPrioritySequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.PrioritySequence) {
		return nil, false
	}
	return o.PrioritySequence, true
}

// HasPrioritySequence returns a boolean if a field has been set.
func (o *RoomCleaningPriorityType) HasPrioritySequence() bool {
	if o != nil && !IsNil(o.PrioritySequence) {
		return true
	}

	return false
}

// SetPrioritySequence gets a reference to the given int32 and assigns it to the PrioritySequence field.
func (o *RoomCleaningPriorityType) SetPrioritySequence(v int32) {
	o.PrioritySequence = &v
}

func (o RoomCleaningPriorityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomCleaningPriorityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PrioritySequence) {
		toSerialize["prioritySequence"] = o.PrioritySequence
	}
	return toSerialize, nil
}

type NullableRoomCleaningPriorityType struct {
	value *RoomCleaningPriorityType
	isSet bool
}

func (v NullableRoomCleaningPriorityType) Get() *RoomCleaningPriorityType {
	return v.value
}

func (v *NullableRoomCleaningPriorityType) Set(val *RoomCleaningPriorityType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomCleaningPriorityType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomCleaningPriorityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomCleaningPriorityType(val *RoomCleaningPriorityType) *NullableRoomCleaningPriorityType {
	return &NullableRoomCleaningPriorityType{value: val, isSet: true}
}

func (v NullableRoomCleaningPriorityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomCleaningPriorityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


