/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the RoomingListBlockInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomingListBlockInfoType{}

// RoomingListBlockInfoType Block Information for create rooming list operation.
type RoomingListBlockInfoType struct {
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	// Hotel code for the block
	HotelId *string `json:"hotelId,omitempty"`
}

// NewRoomingListBlockInfoType instantiates a new RoomingListBlockInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomingListBlockInfoType() *RoomingListBlockInfoType {
	this := RoomingListBlockInfoType{}
	return &this
}

// NewRoomingListBlockInfoTypeWithDefaults instantiates a new RoomingListBlockInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomingListBlockInfoTypeWithDefaults() *RoomingListBlockInfoType {
	this := RoomingListBlockInfoType{}
	return &this
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *RoomingListBlockInfoType) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListBlockInfoType) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *RoomingListBlockInfoType) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *RoomingListBlockInfoType) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomingListBlockInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListBlockInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomingListBlockInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomingListBlockInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o RoomingListBlockInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomingListBlockInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableRoomingListBlockInfoType struct {
	value *RoomingListBlockInfoType
	isSet bool
}

func (v NullableRoomingListBlockInfoType) Get() *RoomingListBlockInfoType {
	return v.value
}

func (v *NullableRoomingListBlockInfoType) Set(val *RoomingListBlockInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomingListBlockInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomingListBlockInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomingListBlockInfoType(val *RoomingListBlockInfoType) *NullableRoomingListBlockInfoType {
	return &NullableRoomingListBlockInfoType{value: val, isSet: true}
}

func (v NullableRoomingListBlockInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomingListBlockInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

