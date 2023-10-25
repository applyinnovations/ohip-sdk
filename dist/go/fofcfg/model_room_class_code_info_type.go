/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the RoomClassCodeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomClassCodeInfoType{}

// RoomClassCodeInfoType Code of the room class type.
type RoomClassCodeInfoType struct {
	Description *string `json:"description,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	RoomClassCode *string `json:"roomClassCode,omitempty"`
}

// NewRoomClassCodeInfoType instantiates a new RoomClassCodeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomClassCodeInfoType() *RoomClassCodeInfoType {
	this := RoomClassCodeInfoType{}
	return &this
}

// NewRoomClassCodeInfoTypeWithDefaults instantiates a new RoomClassCodeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomClassCodeInfoTypeWithDefaults() *RoomClassCodeInfoType {
	this := RoomClassCodeInfoType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomClassCodeInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCodeInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomClassCodeInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RoomClassCodeInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomClassCodeInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCodeInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomClassCodeInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomClassCodeInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomClassCode returns the RoomClassCode field value if set, zero value otherwise.
func (o *RoomClassCodeInfoType) GetRoomClassCode() string {
	if o == nil || IsNil(o.RoomClassCode) {
		var ret string
		return ret
	}
	return *o.RoomClassCode
}

// GetRoomClassCodeOk returns a tuple with the RoomClassCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassCodeInfoType) GetRoomClassCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClassCode) {
		return nil, false
	}
	return o.RoomClassCode, true
}

// HasRoomClassCode returns a boolean if a field has been set.
func (o *RoomClassCodeInfoType) HasRoomClassCode() bool {
	if o != nil && !IsNil(o.RoomClassCode) {
		return true
	}

	return false
}

// SetRoomClassCode gets a reference to the given string and assigns it to the RoomClassCode field.
func (o *RoomClassCodeInfoType) SetRoomClassCode(v string) {
	o.RoomClassCode = &v
}

func (o RoomClassCodeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomClassCodeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomClassCode) {
		toSerialize["roomClassCode"] = o.RoomClassCode
	}
	return toSerialize, nil
}

type NullableRoomClassCodeInfoType struct {
	value *RoomClassCodeInfoType
	isSet bool
}

func (v NullableRoomClassCodeInfoType) Get() *RoomClassCodeInfoType {
	return v.value
}

func (v *NullableRoomClassCodeInfoType) Set(val *RoomClassCodeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomClassCodeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomClassCodeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomClassCodeInfoType(val *RoomClassCodeInfoType) *NullableRoomClassCodeInfoType {
	return &NullableRoomClassCodeInfoType{value: val, isSet: true}
}

func (v NullableRoomClassCodeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomClassCodeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


