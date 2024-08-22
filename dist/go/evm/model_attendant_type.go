/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the AttendantType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AttendantType{}

// AttendantType struct for AttendantType
type AttendantType struct {
	AttendantId *string `json:"attendantId,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
}

// NewAttendantType instantiates a new AttendantType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAttendantType() *AttendantType {
	this := AttendantType{}
	return &this
}

// NewAttendantTypeWithDefaults instantiates a new AttendantType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAttendantTypeWithDefaults() *AttendantType {
	this := AttendantType{}
	return &this
}

// GetAttendantId returns the AttendantId field value if set, zero value otherwise.
func (o *AttendantType) GetAttendantId() string {
	if o == nil || IsNil(o.AttendantId) {
		var ret string
		return ret
	}
	return *o.AttendantId
}

// GetAttendantIdOk returns a tuple with the AttendantId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttendantType) GetAttendantIdOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantId) {
		return nil, false
	}
	return o.AttendantId, true
}

// HasAttendantId returns a boolean if a field has been set.
func (o *AttendantType) HasAttendantId() bool {
	if o != nil && !IsNil(o.AttendantId) {
		return true
	}

	return false
}

// SetAttendantId gets a reference to the given string and assigns it to the AttendantId field.
func (o *AttendantType) SetAttendantId(v string) {
	o.AttendantId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AttendantType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttendantType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AttendantType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AttendantType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o AttendantType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AttendantType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AttendantId) {
		toSerialize["attendantId"] = o.AttendantId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableAttendantType struct {
	value *AttendantType
	isSet bool
}

func (v NullableAttendantType) Get() *AttendantType {
	return v.value
}

func (v *NullableAttendantType) Set(val *AttendantType) {
	v.value = val
	v.isSet = true
}

func (v NullableAttendantType) IsSet() bool {
	return v.isSet
}

func (v *NullableAttendantType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAttendantType(val *AttendantType) *NullableAttendantType {
	return &NullableAttendantType{value: val, isSet: true}
}

func (v NullableAttendantType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAttendantType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


