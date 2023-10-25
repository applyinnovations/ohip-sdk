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

// checks if the RoomTypesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypesType{}

// RoomTypesType This type holds collection of room type.
type RoomTypesType struct {
	// Hotel Code.
	HotelId *string `json:"hotelId,omitempty"`
	RoomType []RoomTypeType `json:"roomType,omitempty"`
}

// NewRoomTypesType instantiates a new RoomTypesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypesType() *RoomTypesType {
	this := RoomTypesType{}
	return &this
}

// NewRoomTypesTypeWithDefaults instantiates a new RoomTypesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypesTypeWithDefaults() *RoomTypesType {
	this := RoomTypesType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomTypesType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypesType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomTypesType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomTypesType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypesType) GetRoomType() []RoomTypeType {
	if o == nil || IsNil(o.RoomType) {
		var ret []RoomTypeType
		return ret
	}
	return o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypesType) GetRoomTypeOk() ([]RoomTypeType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypesType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given []RoomTypeType and assigns it to the RoomType field.
func (o *RoomTypesType) SetRoomType(v []RoomTypeType) {
	o.RoomType = v
}

func (o RoomTypesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableRoomTypesType struct {
	value *RoomTypesType
	isSet bool
}

func (v NullableRoomTypesType) Get() *RoomTypesType {
	return v.value
}

func (v *NullableRoomTypesType) Set(val *RoomTypesType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypesType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypesType(val *RoomTypesType) *NullableRoomTypesType {
	return &NullableRoomTypesType{value: val, isSet: true}
}

func (v NullableRoomTypesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


