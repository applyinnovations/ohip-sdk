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

// checks if the RoomFeaturesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomFeaturesToBeChanged{}

// RoomFeaturesToBeChanged Request object for changing room features of hotel.
type RoomFeaturesToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Room feature details.
	RoomFeatures []RoomFeatureConfigType `json:"roomFeatures,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomFeaturesToBeChanged instantiates a new RoomFeaturesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomFeaturesToBeChanged() *RoomFeaturesToBeChanged {
	this := RoomFeaturesToBeChanged{}
	return &this
}

// NewRoomFeaturesToBeChangedWithDefaults instantiates a new RoomFeaturesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomFeaturesToBeChangedWithDefaults() *RoomFeaturesToBeChanged {
	this := RoomFeaturesToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomFeaturesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeaturesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomFeaturesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomFeaturesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomFeatures returns the RoomFeatures field value if set, zero value otherwise.
func (o *RoomFeaturesToBeChanged) GetRoomFeatures() []RoomFeatureConfigType {
	if o == nil || IsNil(o.RoomFeatures) {
		var ret []RoomFeatureConfigType
		return ret
	}
	return o.RoomFeatures
}

// GetRoomFeaturesOk returns a tuple with the RoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeaturesToBeChanged) GetRoomFeaturesOk() ([]RoomFeatureConfigType, bool) {
	if o == nil || IsNil(o.RoomFeatures) {
		return nil, false
	}
	return o.RoomFeatures, true
}

// HasRoomFeatures returns a boolean if a field has been set.
func (o *RoomFeaturesToBeChanged) HasRoomFeatures() bool {
	if o != nil && !IsNil(o.RoomFeatures) {
		return true
	}

	return false
}

// SetRoomFeatures gets a reference to the given []RoomFeatureConfigType and assigns it to the RoomFeatures field.
func (o *RoomFeaturesToBeChanged) SetRoomFeatures(v []RoomFeatureConfigType) {
	o.RoomFeatures = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomFeaturesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeaturesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomFeaturesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomFeaturesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomFeaturesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomFeaturesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomFeatures) {
		toSerialize["roomFeatures"] = o.RoomFeatures
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomFeaturesToBeChanged struct {
	value *RoomFeaturesToBeChanged
	isSet bool
}

func (v NullableRoomFeaturesToBeChanged) Get() *RoomFeaturesToBeChanged {
	return v.value
}

func (v *NullableRoomFeaturesToBeChanged) Set(val *RoomFeaturesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomFeaturesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomFeaturesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomFeaturesToBeChanged(val *RoomFeaturesToBeChanged) *NullableRoomFeaturesToBeChanged {
	return &NullableRoomFeaturesToBeChanged{value: val, isSet: true}
}

func (v NullableRoomFeaturesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomFeaturesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


