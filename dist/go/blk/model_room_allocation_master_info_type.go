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

// checks if the RoomAllocationMasterInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomAllocationMasterInfoType{}

// RoomAllocationMasterInfoType struct for RoomAllocationMasterInfoType
type RoomAllocationMasterInfoType struct {
	// Detailed information about Room Type in the Hotel.
	GenericRoomTypes []AllocationRoomTypeInfoType `json:"genericRoomTypes,omitempty"`
	// Detailed information about Room Type in the Hotel.
	RoomTypes []AllocationRoomTypeInfoType `json:"roomTypes,omitempty"`
}

// NewRoomAllocationMasterInfoType instantiates a new RoomAllocationMasterInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomAllocationMasterInfoType() *RoomAllocationMasterInfoType {
	this := RoomAllocationMasterInfoType{}
	return &this
}

// NewRoomAllocationMasterInfoTypeWithDefaults instantiates a new RoomAllocationMasterInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomAllocationMasterInfoTypeWithDefaults() *RoomAllocationMasterInfoType {
	this := RoomAllocationMasterInfoType{}
	return &this
}

// GetGenericRoomTypes returns the GenericRoomTypes field value if set, zero value otherwise.
func (o *RoomAllocationMasterInfoType) GetGenericRoomTypes() []AllocationRoomTypeInfoType {
	if o == nil || IsNil(o.GenericRoomTypes) {
		var ret []AllocationRoomTypeInfoType
		return ret
	}
	return o.GenericRoomTypes
}

// GetGenericRoomTypesOk returns a tuple with the GenericRoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationMasterInfoType) GetGenericRoomTypesOk() ([]AllocationRoomTypeInfoType, bool) {
	if o == nil || IsNil(o.GenericRoomTypes) {
		return nil, false
	}
	return o.GenericRoomTypes, true
}

// HasGenericRoomTypes returns a boolean if a field has been set.
func (o *RoomAllocationMasterInfoType) HasGenericRoomTypes() bool {
	if o != nil && !IsNil(o.GenericRoomTypes) {
		return true
	}

	return false
}

// SetGenericRoomTypes gets a reference to the given []AllocationRoomTypeInfoType and assigns it to the GenericRoomTypes field.
func (o *RoomAllocationMasterInfoType) SetGenericRoomTypes(v []AllocationRoomTypeInfoType) {
	o.GenericRoomTypes = v
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *RoomAllocationMasterInfoType) GetRoomTypes() []AllocationRoomTypeInfoType {
	if o == nil || IsNil(o.RoomTypes) {
		var ret []AllocationRoomTypeInfoType
		return ret
	}
	return o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAllocationMasterInfoType) GetRoomTypesOk() ([]AllocationRoomTypeInfoType, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *RoomAllocationMasterInfoType) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given []AllocationRoomTypeInfoType and assigns it to the RoomTypes field.
func (o *RoomAllocationMasterInfoType) SetRoomTypes(v []AllocationRoomTypeInfoType) {
	o.RoomTypes = v
}

func (o RoomAllocationMasterInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomAllocationMasterInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GenericRoomTypes) {
		toSerialize["genericRoomTypes"] = o.GenericRoomTypes
	}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	return toSerialize, nil
}

type NullableRoomAllocationMasterInfoType struct {
	value *RoomAllocationMasterInfoType
	isSet bool
}

func (v NullableRoomAllocationMasterInfoType) Get() *RoomAllocationMasterInfoType {
	return v.value
}

func (v *NullableRoomAllocationMasterInfoType) Set(val *RoomAllocationMasterInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomAllocationMasterInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomAllocationMasterInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomAllocationMasterInfoType(val *RoomAllocationMasterInfoType) *NullableRoomAllocationMasterInfoType {
	return &NullableRoomAllocationMasterInfoType{value: val, isSet: true}
}

func (v NullableRoomAllocationMasterInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomAllocationMasterInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

