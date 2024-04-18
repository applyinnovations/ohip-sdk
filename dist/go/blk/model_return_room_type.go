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

// checks if the ReturnRoomType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReturnRoomType{}

// ReturnRoomType Specifies the number of rooms to be returned to a room type or House.
type ReturnRoomType struct {
	// Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House.
	House map[string]interface{} `json:"house,omitempty"`
	// Indicates the room type to which the rooms will be returned.
	RoomType *string `json:"roomType,omitempty"`
	// The number of rooms that need to be returned.
	RoomsToReturn *int32 `json:"roomsToReturn,omitempty"`
}

// NewReturnRoomType instantiates a new ReturnRoomType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReturnRoomType() *ReturnRoomType {
	this := ReturnRoomType{}
	return &this
}

// NewReturnRoomTypeWithDefaults instantiates a new ReturnRoomType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReturnRoomTypeWithDefaults() *ReturnRoomType {
	this := ReturnRoomType{}
	return &this
}

// GetHouse returns the House field value if set, zero value otherwise.
func (o *ReturnRoomType) GetHouse() map[string]interface{} {
	if o == nil || IsNil(o.House) {
		var ret map[string]interface{}
		return ret
	}
	return o.House
}

// GetHouseOk returns a tuple with the House field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReturnRoomType) GetHouseOk() (map[string]interface{}, bool) {
	if o == nil || IsNil(o.House) {
		return map[string]interface{}{}, false
	}
	return o.House, true
}

// HasHouse returns a boolean if a field has been set.
func (o *ReturnRoomType) HasHouse() bool {
	if o != nil && !IsNil(o.House) {
		return true
	}

	return false
}

// SetHouse gets a reference to the given map[string]interface{} and assigns it to the House field.
func (o *ReturnRoomType) SetHouse(v map[string]interface{}) {
	o.House = v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ReturnRoomType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReturnRoomType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ReturnRoomType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *ReturnRoomType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRoomsToReturn returns the RoomsToReturn field value if set, zero value otherwise.
func (o *ReturnRoomType) GetRoomsToReturn() int32 {
	if o == nil || IsNil(o.RoomsToReturn) {
		var ret int32
		return ret
	}
	return *o.RoomsToReturn
}

// GetRoomsToReturnOk returns a tuple with the RoomsToReturn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReturnRoomType) GetRoomsToReturnOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomsToReturn) {
		return nil, false
	}
	return o.RoomsToReturn, true
}

// HasRoomsToReturn returns a boolean if a field has been set.
func (o *ReturnRoomType) HasRoomsToReturn() bool {
	if o != nil && !IsNil(o.RoomsToReturn) {
		return true
	}

	return false
}

// SetRoomsToReturn gets a reference to the given int32 and assigns it to the RoomsToReturn field.
func (o *ReturnRoomType) SetRoomsToReturn(v int32) {
	o.RoomsToReturn = &v
}

func (o ReturnRoomType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReturnRoomType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.House) {
		toSerialize["house"] = o.House
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RoomsToReturn) {
		toSerialize["roomsToReturn"] = o.RoomsToReturn
	}
	return toSerialize, nil
}

type NullableReturnRoomType struct {
	value *ReturnRoomType
	isSet bool
}

func (v NullableReturnRoomType) Get() *ReturnRoomType {
	return v.value
}

func (v *NullableReturnRoomType) Set(val *ReturnRoomType) {
	v.value = val
	v.isSet = true
}

func (v NullableReturnRoomType) IsSet() bool {
	return v.isSet
}

func (v *NullableReturnRoomType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReturnRoomType(val *ReturnRoomType) *NullableReturnRoomType {
	return &NullableReturnRoomType{value: val, isSet: true}
}

func (v NullableReturnRoomType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReturnRoomType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

