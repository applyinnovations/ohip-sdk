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

// checks if the RoomHierarchySearchType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomHierarchySearchType{}

// RoomHierarchySearchType Room hierarchy search type to fetch room hierarchies
type RoomHierarchySearchType struct {
	// From code to process
	FromCode *string `json:"fromCode,omitempty"`
	HotelCodes []string `json:"hotelCodes,omitempty"`
	RoomHierarchyType *RoomHierarchyTypeType `json:"roomHierarchyType,omitempty"`
	// To code to process
	ToCode *string `json:"toCode,omitempty"`
}

// NewRoomHierarchySearchType instantiates a new RoomHierarchySearchType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomHierarchySearchType() *RoomHierarchySearchType {
	this := RoomHierarchySearchType{}
	return &this
}

// NewRoomHierarchySearchTypeWithDefaults instantiates a new RoomHierarchySearchType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomHierarchySearchTypeWithDefaults() *RoomHierarchySearchType {
	this := RoomHierarchySearchType{}
	return &this
}

// GetFromCode returns the FromCode field value if set, zero value otherwise.
func (o *RoomHierarchySearchType) GetFromCode() string {
	if o == nil || IsNil(o.FromCode) {
		var ret string
		return ret
	}
	return *o.FromCode
}

// GetFromCodeOk returns a tuple with the FromCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchySearchType) GetFromCodeOk() (*string, bool) {
	if o == nil || IsNil(o.FromCode) {
		return nil, false
	}
	return o.FromCode, true
}

// HasFromCode returns a boolean if a field has been set.
func (o *RoomHierarchySearchType) HasFromCode() bool {
	if o != nil && !IsNil(o.FromCode) {
		return true
	}

	return false
}

// SetFromCode gets a reference to the given string and assigns it to the FromCode field.
func (o *RoomHierarchySearchType) SetFromCode(v string) {
	o.FromCode = &v
}

// GetHotelCodes returns the HotelCodes field value if set, zero value otherwise.
func (o *RoomHierarchySearchType) GetHotelCodes() []string {
	if o == nil || IsNil(o.HotelCodes) {
		var ret []string
		return ret
	}
	return o.HotelCodes
}

// GetHotelCodesOk returns a tuple with the HotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchySearchType) GetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.HotelCodes) {
		return nil, false
	}
	return o.HotelCodes, true
}

// HasHotelCodes returns a boolean if a field has been set.
func (o *RoomHierarchySearchType) HasHotelCodes() bool {
	if o != nil && !IsNil(o.HotelCodes) {
		return true
	}

	return false
}

// SetHotelCodes gets a reference to the given []string and assigns it to the HotelCodes field.
func (o *RoomHierarchySearchType) SetHotelCodes(v []string) {
	o.HotelCodes = v
}

// GetRoomHierarchyType returns the RoomHierarchyType field value if set, zero value otherwise.
func (o *RoomHierarchySearchType) GetRoomHierarchyType() RoomHierarchyTypeType {
	if o == nil || IsNil(o.RoomHierarchyType) {
		var ret RoomHierarchyTypeType
		return ret
	}
	return *o.RoomHierarchyType
}

// GetRoomHierarchyTypeOk returns a tuple with the RoomHierarchyType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchySearchType) GetRoomHierarchyTypeOk() (*RoomHierarchyTypeType, bool) {
	if o == nil || IsNil(o.RoomHierarchyType) {
		return nil, false
	}
	return o.RoomHierarchyType, true
}

// HasRoomHierarchyType returns a boolean if a field has been set.
func (o *RoomHierarchySearchType) HasRoomHierarchyType() bool {
	if o != nil && !IsNil(o.RoomHierarchyType) {
		return true
	}

	return false
}

// SetRoomHierarchyType gets a reference to the given RoomHierarchyTypeType and assigns it to the RoomHierarchyType field.
func (o *RoomHierarchySearchType) SetRoomHierarchyType(v RoomHierarchyTypeType) {
	o.RoomHierarchyType = &v
}

// GetToCode returns the ToCode field value if set, zero value otherwise.
func (o *RoomHierarchySearchType) GetToCode() string {
	if o == nil || IsNil(o.ToCode) {
		var ret string
		return ret
	}
	return *o.ToCode
}

// GetToCodeOk returns a tuple with the ToCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomHierarchySearchType) GetToCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ToCode) {
		return nil, false
	}
	return o.ToCode, true
}

// HasToCode returns a boolean if a field has been set.
func (o *RoomHierarchySearchType) HasToCode() bool {
	if o != nil && !IsNil(o.ToCode) {
		return true
	}

	return false
}

// SetToCode gets a reference to the given string and assigns it to the ToCode field.
func (o *RoomHierarchySearchType) SetToCode(v string) {
	o.ToCode = &v
}

func (o RoomHierarchySearchType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomHierarchySearchType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FromCode) {
		toSerialize["fromCode"] = o.FromCode
	}
	if !IsNil(o.HotelCodes) {
		toSerialize["hotelCodes"] = o.HotelCodes
	}
	if !IsNil(o.RoomHierarchyType) {
		toSerialize["roomHierarchyType"] = o.RoomHierarchyType
	}
	if !IsNil(o.ToCode) {
		toSerialize["toCode"] = o.ToCode
	}
	return toSerialize, nil
}

type NullableRoomHierarchySearchType struct {
	value *RoomHierarchySearchType
	isSet bool
}

func (v NullableRoomHierarchySearchType) Get() *RoomHierarchySearchType {
	return v.value
}

func (v *NullableRoomHierarchySearchType) Set(val *RoomHierarchySearchType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomHierarchySearchType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomHierarchySearchType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomHierarchySearchType(val *RoomHierarchySearchType) *NullableRoomHierarchySearchType {
	return &NullableRoomHierarchySearchType{value: val, isSet: true}
}

func (v NullableRoomHierarchySearchType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomHierarchySearchType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


