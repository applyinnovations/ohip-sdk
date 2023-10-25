/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the RoomRotationPointsAdjustmentInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRotationPointsAdjustmentInfoType{}

// RoomRotationPointsAdjustmentInfoType Room Rotation Points Update Information
type RoomRotationPointsAdjustmentInfoType struct {
	// Balance forward points to update
	BalanceForwardPoints *float32 `json:"balanceForwardPoints,omitempty"`
	// Room adjusted points to update
	RoomAdjustedPoints *float32 `json:"roomAdjustedPoints,omitempty"`
	// Room Number
	RoomId *string `json:"roomId,omitempty"`
}

// NewRoomRotationPointsAdjustmentInfoType instantiates a new RoomRotationPointsAdjustmentInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRotationPointsAdjustmentInfoType() *RoomRotationPointsAdjustmentInfoType {
	this := RoomRotationPointsAdjustmentInfoType{}
	return &this
}

// NewRoomRotationPointsAdjustmentInfoTypeWithDefaults instantiates a new RoomRotationPointsAdjustmentInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRotationPointsAdjustmentInfoTypeWithDefaults() *RoomRotationPointsAdjustmentInfoType {
	this := RoomRotationPointsAdjustmentInfoType{}
	return &this
}

// GetBalanceForwardPoints returns the BalanceForwardPoints field value if set, zero value otherwise.
func (o *RoomRotationPointsAdjustmentInfoType) GetBalanceForwardPoints() float32 {
	if o == nil || IsNil(o.BalanceForwardPoints) {
		var ret float32
		return ret
	}
	return *o.BalanceForwardPoints
}

// GetBalanceForwardPointsOk returns a tuple with the BalanceForwardPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationPointsAdjustmentInfoType) GetBalanceForwardPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.BalanceForwardPoints) {
		return nil, false
	}
	return o.BalanceForwardPoints, true
}

// HasBalanceForwardPoints returns a boolean if a field has been set.
func (o *RoomRotationPointsAdjustmentInfoType) HasBalanceForwardPoints() bool {
	if o != nil && !IsNil(o.BalanceForwardPoints) {
		return true
	}

	return false
}

// SetBalanceForwardPoints gets a reference to the given float32 and assigns it to the BalanceForwardPoints field.
func (o *RoomRotationPointsAdjustmentInfoType) SetBalanceForwardPoints(v float32) {
	o.BalanceForwardPoints = &v
}

// GetRoomAdjustedPoints returns the RoomAdjustedPoints field value if set, zero value otherwise.
func (o *RoomRotationPointsAdjustmentInfoType) GetRoomAdjustedPoints() float32 {
	if o == nil || IsNil(o.RoomAdjustedPoints) {
		var ret float32
		return ret
	}
	return *o.RoomAdjustedPoints
}

// GetRoomAdjustedPointsOk returns a tuple with the RoomAdjustedPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationPointsAdjustmentInfoType) GetRoomAdjustedPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomAdjustedPoints) {
		return nil, false
	}
	return o.RoomAdjustedPoints, true
}

// HasRoomAdjustedPoints returns a boolean if a field has been set.
func (o *RoomRotationPointsAdjustmentInfoType) HasRoomAdjustedPoints() bool {
	if o != nil && !IsNil(o.RoomAdjustedPoints) {
		return true
	}

	return false
}

// SetRoomAdjustedPoints gets a reference to the given float32 and assigns it to the RoomAdjustedPoints field.
func (o *RoomRotationPointsAdjustmentInfoType) SetRoomAdjustedPoints(v float32) {
	o.RoomAdjustedPoints = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *RoomRotationPointsAdjustmentInfoType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRotationPointsAdjustmentInfoType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *RoomRotationPointsAdjustmentInfoType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *RoomRotationPointsAdjustmentInfoType) SetRoomId(v string) {
	o.RoomId = &v
}

func (o RoomRotationPointsAdjustmentInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRotationPointsAdjustmentInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BalanceForwardPoints) {
		toSerialize["balanceForwardPoints"] = o.BalanceForwardPoints
	}
	if !IsNil(o.RoomAdjustedPoints) {
		toSerialize["roomAdjustedPoints"] = o.RoomAdjustedPoints
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	return toSerialize, nil
}

type NullableRoomRotationPointsAdjustmentInfoType struct {
	value *RoomRotationPointsAdjustmentInfoType
	isSet bool
}

func (v NullableRoomRotationPointsAdjustmentInfoType) Get() *RoomRotationPointsAdjustmentInfoType {
	return v.value
}

func (v *NullableRoomRotationPointsAdjustmentInfoType) Set(val *RoomRotationPointsAdjustmentInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRotationPointsAdjustmentInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRotationPointsAdjustmentInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRotationPointsAdjustmentInfoType(val *RoomRotationPointsAdjustmentInfoType) *NullableRoomRotationPointsAdjustmentInfoType {
	return &NullableRoomRotationPointsAdjustmentInfoType{value: val, isSet: true}
}

func (v NullableRoomRotationPointsAdjustmentInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRotationPointsAdjustmentInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


