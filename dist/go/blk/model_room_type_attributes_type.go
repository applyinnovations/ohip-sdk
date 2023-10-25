/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the RoomTypeAttributesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeAttributesType{}

// RoomTypeAttributesType Attributes of property room type.
type RoomTypeAttributesType struct {
	// Default occupancy of property room type.
	DefaultOccupancy *int32 `json:"defaultOccupancy,omitempty"`
	// Max occupancy of property room type.
	MaximumOccupancy *int32 `json:"maximumOccupancy,omitempty"`
	// Number of physical rooms of property room type.
	NoOfPhysicalRooms *int32 `json:"noOfPhysicalRooms,omitempty"`
}

// NewRoomTypeAttributesType instantiates a new RoomTypeAttributesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeAttributesType() *RoomTypeAttributesType {
	this := RoomTypeAttributesType{}
	return &this
}

// NewRoomTypeAttributesTypeWithDefaults instantiates a new RoomTypeAttributesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeAttributesTypeWithDefaults() *RoomTypeAttributesType {
	this := RoomTypeAttributesType{}
	return &this
}

// GetDefaultOccupancy returns the DefaultOccupancy field value if set, zero value otherwise.
func (o *RoomTypeAttributesType) GetDefaultOccupancy() int32 {
	if o == nil || IsNil(o.DefaultOccupancy) {
		var ret int32
		return ret
	}
	return *o.DefaultOccupancy
}

// GetDefaultOccupancyOk returns a tuple with the DefaultOccupancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeAttributesType) GetDefaultOccupancyOk() (*int32, bool) {
	if o == nil || IsNil(o.DefaultOccupancy) {
		return nil, false
	}
	return o.DefaultOccupancy, true
}

// HasDefaultOccupancy returns a boolean if a field has been set.
func (o *RoomTypeAttributesType) HasDefaultOccupancy() bool {
	if o != nil && !IsNil(o.DefaultOccupancy) {
		return true
	}

	return false
}

// SetDefaultOccupancy gets a reference to the given int32 and assigns it to the DefaultOccupancy field.
func (o *RoomTypeAttributesType) SetDefaultOccupancy(v int32) {
	o.DefaultOccupancy = &v
}

// GetMaximumOccupancy returns the MaximumOccupancy field value if set, zero value otherwise.
func (o *RoomTypeAttributesType) GetMaximumOccupancy() int32 {
	if o == nil || IsNil(o.MaximumOccupancy) {
		var ret int32
		return ret
	}
	return *o.MaximumOccupancy
}

// GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeAttributesType) GetMaximumOccupancyOk() (*int32, bool) {
	if o == nil || IsNil(o.MaximumOccupancy) {
		return nil, false
	}
	return o.MaximumOccupancy, true
}

// HasMaximumOccupancy returns a boolean if a field has been set.
func (o *RoomTypeAttributesType) HasMaximumOccupancy() bool {
	if o != nil && !IsNil(o.MaximumOccupancy) {
		return true
	}

	return false
}

// SetMaximumOccupancy gets a reference to the given int32 and assigns it to the MaximumOccupancy field.
func (o *RoomTypeAttributesType) SetMaximumOccupancy(v int32) {
	o.MaximumOccupancy = &v
}

// GetNoOfPhysicalRooms returns the NoOfPhysicalRooms field value if set, zero value otherwise.
func (o *RoomTypeAttributesType) GetNoOfPhysicalRooms() int32 {
	if o == nil || IsNil(o.NoOfPhysicalRooms) {
		var ret int32
		return ret
	}
	return *o.NoOfPhysicalRooms
}

// GetNoOfPhysicalRoomsOk returns a tuple with the NoOfPhysicalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeAttributesType) GetNoOfPhysicalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NoOfPhysicalRooms) {
		return nil, false
	}
	return o.NoOfPhysicalRooms, true
}

// HasNoOfPhysicalRooms returns a boolean if a field has been set.
func (o *RoomTypeAttributesType) HasNoOfPhysicalRooms() bool {
	if o != nil && !IsNil(o.NoOfPhysicalRooms) {
		return true
	}

	return false
}

// SetNoOfPhysicalRooms gets a reference to the given int32 and assigns it to the NoOfPhysicalRooms field.
func (o *RoomTypeAttributesType) SetNoOfPhysicalRooms(v int32) {
	o.NoOfPhysicalRooms = &v
}

func (o RoomTypeAttributesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeAttributesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultOccupancy) {
		toSerialize["defaultOccupancy"] = o.DefaultOccupancy
	}
	if !IsNil(o.MaximumOccupancy) {
		toSerialize["maximumOccupancy"] = o.MaximumOccupancy
	}
	if !IsNil(o.NoOfPhysicalRooms) {
		toSerialize["noOfPhysicalRooms"] = o.NoOfPhysicalRooms
	}
	return toSerialize, nil
}

type NullableRoomTypeAttributesType struct {
	value *RoomTypeAttributesType
	isSet bool
}

func (v NullableRoomTypeAttributesType) Get() *RoomTypeAttributesType {
	return v.value
}

func (v *NullableRoomTypeAttributesType) Set(val *RoomTypeAttributesType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeAttributesType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeAttributesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeAttributesType(val *RoomTypeAttributesType) *NullableRoomTypeAttributesType {
	return &NullableRoomTypeAttributesType{value: val, isSet: true}
}

func (v NullableRoomTypeAttributesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeAttributesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


