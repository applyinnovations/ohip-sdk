/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomTypeInfoDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeInfoDetails{}

// RoomTypeInfoDetails Response object for fetching room type information.
type RoomTypeInfoDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	RoomTypeMasterInfoType *RoomTypeMasterInfoType `json:"roomTypeMasterInfoType,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomTypeInfoDetails instantiates a new RoomTypeInfoDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeInfoDetails() *RoomTypeInfoDetails {
	this := RoomTypeInfoDetails{}
	return &this
}

// NewRoomTypeInfoDetailsWithDefaults instantiates a new RoomTypeInfoDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeInfoDetailsWithDefaults() *RoomTypeInfoDetails {
	this := RoomTypeInfoDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomTypeInfoDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomTypeInfoDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomTypeInfoDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomTypeMasterInfoType returns the RoomTypeMasterInfoType field value if set, zero value otherwise.
func (o *RoomTypeInfoDetails) GetRoomTypeMasterInfoType() RoomTypeMasterInfoType {
	if o == nil || IsNil(o.RoomTypeMasterInfoType) {
		var ret RoomTypeMasterInfoType
		return ret
	}
	return *o.RoomTypeMasterInfoType
}

// GetRoomTypeMasterInfoTypeOk returns a tuple with the RoomTypeMasterInfoType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoDetails) GetRoomTypeMasterInfoTypeOk() (*RoomTypeMasterInfoType, bool) {
	if o == nil || IsNil(o.RoomTypeMasterInfoType) {
		return nil, false
	}
	return o.RoomTypeMasterInfoType, true
}

// HasRoomTypeMasterInfoType returns a boolean if a field has been set.
func (o *RoomTypeInfoDetails) HasRoomTypeMasterInfoType() bool {
	if o != nil && !IsNil(o.RoomTypeMasterInfoType) {
		return true
	}

	return false
}

// SetRoomTypeMasterInfoType gets a reference to the given RoomTypeMasterInfoType and assigns it to the RoomTypeMasterInfoType field.
func (o *RoomTypeInfoDetails) SetRoomTypeMasterInfoType(v RoomTypeMasterInfoType) {
	o.RoomTypeMasterInfoType = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomTypeInfoDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomTypeInfoDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomTypeInfoDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomTypeInfoDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeInfoDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomTypeMasterInfoType) {
		toSerialize["roomTypeMasterInfoType"] = o.RoomTypeMasterInfoType
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomTypeInfoDetails struct {
	value *RoomTypeInfoDetails
	isSet bool
}

func (v NullableRoomTypeInfoDetails) Get() *RoomTypeInfoDetails {
	return v.value
}

func (v *NullableRoomTypeInfoDetails) Set(val *RoomTypeInfoDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeInfoDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeInfoDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeInfoDetails(val *RoomTypeInfoDetails) *NullableRoomTypeInfoDetails {
	return &NullableRoomTypeInfoDetails{value: val, isSet: true}
}

func (v NullableRoomTypeInfoDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeInfoDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


