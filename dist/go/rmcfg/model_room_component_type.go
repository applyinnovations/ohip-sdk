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

// checks if the RoomComponentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomComponentType{}

// RoomComponentType Room component and its quantity for the component room type.
type RoomComponentType struct {
	// Description of room component.
	Description *string `json:"description,omitempty"`
	// Quantity of room component for the component room type.
	Qty *int32 `json:"qty,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
	// Collection of rooms.
	Rooms []RoomRoomType `json:"rooms,omitempty"`
}

// NewRoomComponentType instantiates a new RoomComponentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomComponentType() *RoomComponentType {
	this := RoomComponentType{}
	return &this
}

// NewRoomComponentTypeWithDefaults instantiates a new RoomComponentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomComponentTypeWithDefaults() *RoomComponentType {
	this := RoomComponentType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomComponentType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomComponentType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomComponentType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RoomComponentType) SetDescription(v string) {
	o.Description = &v
}

// GetQty returns the Qty field value if set, zero value otherwise.
func (o *RoomComponentType) GetQty() int32 {
	if o == nil || IsNil(o.Qty) {
		var ret int32
		return ret
	}
	return *o.Qty
}

// GetQtyOk returns a tuple with the Qty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomComponentType) GetQtyOk() (*int32, bool) {
	if o == nil || IsNil(o.Qty) {
		return nil, false
	}
	return o.Qty, true
}

// HasQty returns a boolean if a field has been set.
func (o *RoomComponentType) HasQty() bool {
	if o != nil && !IsNil(o.Qty) {
		return true
	}

	return false
}

// SetQty gets a reference to the given int32 and assigns it to the Qty field.
func (o *RoomComponentType) SetQty(v int32) {
	o.Qty = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomComponentType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomComponentType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomComponentType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RoomComponentType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRooms returns the Rooms field value if set, zero value otherwise.
func (o *RoomComponentType) GetRooms() []RoomRoomType {
	if o == nil || IsNil(o.Rooms) {
		var ret []RoomRoomType
		return ret
	}
	return o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomComponentType) GetRoomsOk() ([]RoomRoomType, bool) {
	if o == nil || IsNil(o.Rooms) {
		return nil, false
	}
	return o.Rooms, true
}

// HasRooms returns a boolean if a field has been set.
func (o *RoomComponentType) HasRooms() bool {
	if o != nil && !IsNil(o.Rooms) {
		return true
	}

	return false
}

// SetRooms gets a reference to the given []RoomRoomType and assigns it to the Rooms field.
func (o *RoomComponentType) SetRooms(v []RoomRoomType) {
	o.Rooms = v
}

func (o RoomComponentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomComponentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Qty) {
		toSerialize["qty"] = o.Qty
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Rooms) {
		toSerialize["rooms"] = o.Rooms
	}
	return toSerialize, nil
}

type NullableRoomComponentType struct {
	value *RoomComponentType
	isSet bool
}

func (v NullableRoomComponentType) Get() *RoomComponentType {
	return v.value
}

func (v *NullableRoomComponentType) Set(val *RoomComponentType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomComponentType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomComponentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomComponentType(val *RoomComponentType) *NullableRoomComponentType {
	return &NullableRoomComponentType{value: val, isSet: true}
}

func (v NullableRoomComponentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomComponentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


