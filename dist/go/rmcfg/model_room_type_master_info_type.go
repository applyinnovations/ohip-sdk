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

// checks if the RoomTypeMasterInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeMasterInfoType{}

// RoomTypeMasterInfoType The RoomType element is used to contain all the room type information for a single room type.
type RoomTypeMasterInfoType struct {
	HotelId *string `json:"hotelId,omitempty"`
	// Room type information
	RoomType []RoomTypeInfoType `json:"roomType,omitempty"`
}

// NewRoomTypeMasterInfoType instantiates a new RoomTypeMasterInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeMasterInfoType() *RoomTypeMasterInfoType {
	this := RoomTypeMasterInfoType{}
	return &this
}

// NewRoomTypeMasterInfoTypeWithDefaults instantiates a new RoomTypeMasterInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeMasterInfoTypeWithDefaults() *RoomTypeMasterInfoType {
	this := RoomTypeMasterInfoType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomTypeMasterInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeMasterInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomTypeMasterInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomTypeMasterInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypeMasterInfoType) GetRoomType() []RoomTypeInfoType {
	if o == nil || IsNil(o.RoomType) {
		var ret []RoomTypeInfoType
		return ret
	}
	return o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeMasterInfoType) GetRoomTypeOk() ([]RoomTypeInfoType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypeMasterInfoType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given []RoomTypeInfoType and assigns it to the RoomType field.
func (o *RoomTypeMasterInfoType) SetRoomType(v []RoomTypeInfoType) {
	o.RoomType = v
}

func (o RoomTypeMasterInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeMasterInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableRoomTypeMasterInfoType struct {
	value *RoomTypeMasterInfoType
	isSet bool
}

func (v NullableRoomTypeMasterInfoType) Get() *RoomTypeMasterInfoType {
	return v.value
}

func (v *NullableRoomTypeMasterInfoType) Set(val *RoomTypeMasterInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeMasterInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeMasterInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeMasterInfoType(val *RoomTypeMasterInfoType) *NullableRoomTypeMasterInfoType {
	return &NullableRoomTypeMasterInfoType{value: val, isSet: true}
}

func (v NullableRoomTypeMasterInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeMasterInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


