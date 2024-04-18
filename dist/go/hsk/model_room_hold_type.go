/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomHoldType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomHoldType{}

// RoomHoldType struct for RoomHoldType
type RoomHoldType struct {
	// Comments of the room hold.
	Comments *string `json:"comments,omitempty"`
	// The date and time when hold will expire.
	HoldUntil *string `json:"holdUntil,omitempty"`
	// User who placed room on hold.
	HoldUser *string `json:"holdUser,omitempty"`
}

// NewRoomHoldType instantiates a new RoomHoldType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomHoldType() *RoomHoldType {
	this := RoomHoldType{}
	return &this
}

// NewRoomHoldTypeWithDefaults instantiates a new RoomHoldType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomHoldTypeWithDefaults() *RoomHoldType {
	this := RoomHoldType{}
	return &this
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *RoomHoldType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHoldType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *RoomHoldType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *RoomHoldType) SetComments(v string) {
	o.Comments = &v
}

// GetHoldUntil returns the HoldUntil field value if set, zero value otherwise.
func (o *RoomHoldType) GetHoldUntil() string {
	if o == nil || IsNil(o.HoldUntil) {
		var ret string
		return ret
	}
	return *o.HoldUntil
}

// GetHoldUntilOk returns a tuple with the HoldUntil field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHoldType) GetHoldUntilOk() (*string, bool) {
	if o == nil || IsNil(o.HoldUntil) {
		return nil, false
	}
	return o.HoldUntil, true
}

// HasHoldUntil returns a boolean if a field has been set.
func (o *RoomHoldType) HasHoldUntil() bool {
	if o != nil && !IsNil(o.HoldUntil) {
		return true
	}

	return false
}

// SetHoldUntil gets a reference to the given string and assigns it to the HoldUntil field.
func (o *RoomHoldType) SetHoldUntil(v string) {
	o.HoldUntil = &v
}

// GetHoldUser returns the HoldUser field value if set, zero value otherwise.
func (o *RoomHoldType) GetHoldUser() string {
	if o == nil || IsNil(o.HoldUser) {
		var ret string
		return ret
	}
	return *o.HoldUser
}

// GetHoldUserOk returns a tuple with the HoldUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHoldType) GetHoldUserOk() (*string, bool) {
	if o == nil || IsNil(o.HoldUser) {
		return nil, false
	}
	return o.HoldUser, true
}

// HasHoldUser returns a boolean if a field has been set.
func (o *RoomHoldType) HasHoldUser() bool {
	if o != nil && !IsNil(o.HoldUser) {
		return true
	}

	return false
}

// SetHoldUser gets a reference to the given string and assigns it to the HoldUser field.
func (o *RoomHoldType) SetHoldUser(v string) {
	o.HoldUser = &v
}

func (o RoomHoldType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomHoldType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.HoldUntil) {
		toSerialize["holdUntil"] = o.HoldUntil
	}
	if !IsNil(o.HoldUser) {
		toSerialize["holdUser"] = o.HoldUser
	}
	return toSerialize, nil
}

type NullableRoomHoldType struct {
	value *RoomHoldType
	isSet bool
}

func (v NullableRoomHoldType) Get() *RoomHoldType {
	return v.value
}

func (v *NullableRoomHoldType) Set(val *RoomHoldType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomHoldType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomHoldType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomHoldType(val *RoomHoldType) *NullableRoomHoldType {
	return &NullableRoomHoldType{value: val, isSet: true}
}

func (v NullableRoomHoldType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomHoldType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

