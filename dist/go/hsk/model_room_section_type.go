/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomSectionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomSectionType{}

// RoomSectionType struct for RoomSectionType
type RoomSectionType struct {
	DaySectionCode *string `json:"daySectionCode,omitempty"`
	EveningSectionCode *string `json:"eveningSectionCode,omitempty"`
}

// NewRoomSectionType instantiates a new RoomSectionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomSectionType() *RoomSectionType {
	this := RoomSectionType{}
	return &this
}

// NewRoomSectionTypeWithDefaults instantiates a new RoomSectionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomSectionTypeWithDefaults() *RoomSectionType {
	this := RoomSectionType{}
	return &this
}

// GetDaySectionCode returns the DaySectionCode field value if set, zero value otherwise.
func (o *RoomSectionType) GetDaySectionCode() string {
	if o == nil || IsNil(o.DaySectionCode) {
		var ret string
		return ret
	}
	return *o.DaySectionCode
}

// GetDaySectionCodeOk returns a tuple with the DaySectionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomSectionType) GetDaySectionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DaySectionCode) {
		return nil, false
	}
	return o.DaySectionCode, true
}

// HasDaySectionCode returns a boolean if a field has been set.
func (o *RoomSectionType) HasDaySectionCode() bool {
	if o != nil && !IsNil(o.DaySectionCode) {
		return true
	}

	return false
}

// SetDaySectionCode gets a reference to the given string and assigns it to the DaySectionCode field.
func (o *RoomSectionType) SetDaySectionCode(v string) {
	o.DaySectionCode = &v
}

// GetEveningSectionCode returns the EveningSectionCode field value if set, zero value otherwise.
func (o *RoomSectionType) GetEveningSectionCode() string {
	if o == nil || IsNil(o.EveningSectionCode) {
		var ret string
		return ret
	}
	return *o.EveningSectionCode
}

// GetEveningSectionCodeOk returns a tuple with the EveningSectionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomSectionType) GetEveningSectionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.EveningSectionCode) {
		return nil, false
	}
	return o.EveningSectionCode, true
}

// HasEveningSectionCode returns a boolean if a field has been set.
func (o *RoomSectionType) HasEveningSectionCode() bool {
	if o != nil && !IsNil(o.EveningSectionCode) {
		return true
	}

	return false
}

// SetEveningSectionCode gets a reference to the given string and assigns it to the EveningSectionCode field.
func (o *RoomSectionType) SetEveningSectionCode(v string) {
	o.EveningSectionCode = &v
}

func (o RoomSectionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomSectionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DaySectionCode) {
		toSerialize["daySectionCode"] = o.DaySectionCode
	}
	if !IsNil(o.EveningSectionCode) {
		toSerialize["eveningSectionCode"] = o.EveningSectionCode
	}
	return toSerialize, nil
}

type NullableRoomSectionType struct {
	value *RoomSectionType
	isSet bool
}

func (v NullableRoomSectionType) Get() *RoomSectionType {
	return v.value
}

func (v *NullableRoomSectionType) Set(val *RoomSectionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomSectionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomSectionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomSectionType(val *RoomSectionType) *NullableRoomSectionType {
	return &NullableRoomSectionType{value: val, isSet: true}
}

func (v NullableRoomSectionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomSectionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


