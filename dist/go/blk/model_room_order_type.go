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

// checks if the RoomOrderType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomOrderType{}

// RoomOrderType struct for RoomOrderType
type RoomOrderType struct {
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	// Room Type.
	GenericRoomTypes []string `json:"genericRoomTypes,omitempty"`
	// Hotel Code to which the block belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Room Type.
	RoomTypes []string `json:"roomTypes,omitempty"`
}

// NewRoomOrderType instantiates a new RoomOrderType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomOrderType() *RoomOrderType {
	this := RoomOrderType{}
	return &this
}

// NewRoomOrderTypeWithDefaults instantiates a new RoomOrderType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomOrderTypeWithDefaults() *RoomOrderType {
	this := RoomOrderType{}
	return &this
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *RoomOrderType) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOrderType) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *RoomOrderType) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *RoomOrderType) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetGenericRoomTypes returns the GenericRoomTypes field value if set, zero value otherwise.
func (o *RoomOrderType) GetGenericRoomTypes() []string {
	if o == nil || IsNil(o.GenericRoomTypes) {
		var ret []string
		return ret
	}
	return o.GenericRoomTypes
}

// GetGenericRoomTypesOk returns a tuple with the GenericRoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOrderType) GetGenericRoomTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.GenericRoomTypes) {
		return nil, false
	}
	return o.GenericRoomTypes, true
}

// HasGenericRoomTypes returns a boolean if a field has been set.
func (o *RoomOrderType) HasGenericRoomTypes() bool {
	if o != nil && !IsNil(o.GenericRoomTypes) {
		return true
	}

	return false
}

// SetGenericRoomTypes gets a reference to the given []string and assigns it to the GenericRoomTypes field.
func (o *RoomOrderType) SetGenericRoomTypes(v []string) {
	o.GenericRoomTypes = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomOrderType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOrderType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomOrderType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomOrderType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *RoomOrderType) GetRoomTypes() []string {
	if o == nil || IsNil(o.RoomTypes) {
		var ret []string
		return ret
	}
	return o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOrderType) GetRoomTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *RoomOrderType) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given []string and assigns it to the RoomTypes field.
func (o *RoomOrderType) SetRoomTypes(v []string) {
	o.RoomTypes = v
}

func (o RoomOrderType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomOrderType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.GenericRoomTypes) {
		toSerialize["genericRoomTypes"] = o.GenericRoomTypes
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	return toSerialize, nil
}

type NullableRoomOrderType struct {
	value *RoomOrderType
	isSet bool
}

func (v NullableRoomOrderType) Get() *RoomOrderType {
	return v.value
}

func (v *NullableRoomOrderType) Set(val *RoomOrderType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomOrderType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomOrderType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomOrderType(val *RoomOrderType) *NullableRoomOrderType {
	return &NullableRoomOrderType{value: val, isSet: true}
}

func (v NullableRoomOrderType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomOrderType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


