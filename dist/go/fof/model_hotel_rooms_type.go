/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the HotelRoomsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRoomsType{}

// HotelRoomsType Collection of Room record that contain Housekeeping and Out Of Order information.
type HotelRoomsType struct {
	HotelId *string `json:"hotelId,omitempty"`
	Room []RoomType `json:"room,omitempty"`
}

// NewHotelRoomsType instantiates a new HotelRoomsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRoomsType() *HotelRoomsType {
	this := HotelRoomsType{}
	return &this
}

// NewHotelRoomsTypeWithDefaults instantiates a new HotelRoomsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRoomsTypeWithDefaults() *HotelRoomsType {
	this := HotelRoomsType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelRoomsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelRoomsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelRoomsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *HotelRoomsType) GetRoom() []RoomType {
	if o == nil || IsNil(o.Room) {
		var ret []RoomType
		return ret
	}
	return o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomsType) GetRoomOk() ([]RoomType, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *HotelRoomsType) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given []RoomType and assigns it to the Room field.
func (o *HotelRoomsType) SetRoom(v []RoomType) {
	o.Room = v
}

func (o HotelRoomsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRoomsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	return toSerialize, nil
}

type NullableHotelRoomsType struct {
	value *HotelRoomsType
	isSet bool
}

func (v NullableHotelRoomsType) Get() *HotelRoomsType {
	return v.value
}

func (v *NullableHotelRoomsType) Set(val *HotelRoomsType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRoomsType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRoomsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRoomsType(val *HotelRoomsType) *NullableHotelRoomsType {
	return &NullableHotelRoomsType{value: val, isSet: true}
}

func (v NullableHotelRoomsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRoomsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


