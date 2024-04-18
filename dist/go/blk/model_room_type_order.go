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

// checks if the RoomTypeOrder type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeOrder{}

// RoomTypeOrder Request object for SetRoomTypeOrder operation.
type RoomTypeOrder struct {
	Links []InstanceLink `json:"links,omitempty"`
	RoomTypes *RoomOrderType `json:"roomTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomTypeOrder instantiates a new RoomTypeOrder object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeOrder() *RoomTypeOrder {
	this := RoomTypeOrder{}
	return &this
}

// NewRoomTypeOrderWithDefaults instantiates a new RoomTypeOrder object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeOrderWithDefaults() *RoomTypeOrder {
	this := RoomTypeOrder{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomTypeOrder) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeOrder) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomTypeOrder) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomTypeOrder) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *RoomTypeOrder) GetRoomTypes() RoomOrderType {
	if o == nil || IsNil(o.RoomTypes) {
		var ret RoomOrderType
		return ret
	}
	return *o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeOrder) GetRoomTypesOk() (*RoomOrderType, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *RoomTypeOrder) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given RoomOrderType and assigns it to the RoomTypes field.
func (o *RoomTypeOrder) SetRoomTypes(v RoomOrderType) {
	o.RoomTypes = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomTypeOrder) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeOrder) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomTypeOrder) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomTypeOrder) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomTypeOrder) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeOrder) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomTypeOrder struct {
	value *RoomTypeOrder
	isSet bool
}

func (v NullableRoomTypeOrder) Get() *RoomTypeOrder {
	return v.value
}

func (v *NullableRoomTypeOrder) Set(val *RoomTypeOrder) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeOrder) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeOrder) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeOrder(val *RoomTypeOrder) *NullableRoomTypeOrder {
	return &NullableRoomTypeOrder{value: val, isSet: true}
}

func (v NullableRoomTypeOrder) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeOrder) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

