/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the RoomFeatureRatings type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomFeatureRatings{}

// RoomFeatureRatings Request object for modifying room features rating details.
type RoomFeatureRatings struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of rooms features and their ratings.
	RoomFeatureRatingsInfo []RoomFeatureRatingInfoType `json:"roomFeatureRatingsInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomFeatureRatings instantiates a new RoomFeatureRatings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomFeatureRatings() *RoomFeatureRatings {
	this := RoomFeatureRatings{}
	return &this
}

// NewRoomFeatureRatingsWithDefaults instantiates a new RoomFeatureRatings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomFeatureRatingsWithDefaults() *RoomFeatureRatings {
	this := RoomFeatureRatings{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomFeatureRatings) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeatureRatings) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomFeatureRatings) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomFeatureRatings) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomFeatureRatingsInfo returns the RoomFeatureRatingsInfo field value if set, zero value otherwise.
func (o *RoomFeatureRatings) GetRoomFeatureRatingsInfo() []RoomFeatureRatingInfoType {
	if o == nil || IsNil(o.RoomFeatureRatingsInfo) {
		var ret []RoomFeatureRatingInfoType
		return ret
	}
	return o.RoomFeatureRatingsInfo
}

// GetRoomFeatureRatingsInfoOk returns a tuple with the RoomFeatureRatingsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeatureRatings) GetRoomFeatureRatingsInfoOk() ([]RoomFeatureRatingInfoType, bool) {
	if o == nil || IsNil(o.RoomFeatureRatingsInfo) {
		return nil, false
	}
	return o.RoomFeatureRatingsInfo, true
}

// HasRoomFeatureRatingsInfo returns a boolean if a field has been set.
func (o *RoomFeatureRatings) HasRoomFeatureRatingsInfo() bool {
	if o != nil && !IsNil(o.RoomFeatureRatingsInfo) {
		return true
	}

	return false
}

// SetRoomFeatureRatingsInfo gets a reference to the given []RoomFeatureRatingInfoType and assigns it to the RoomFeatureRatingsInfo field.
func (o *RoomFeatureRatings) SetRoomFeatureRatingsInfo(v []RoomFeatureRatingInfoType) {
	o.RoomFeatureRatingsInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomFeatureRatings) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomFeatureRatings) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomFeatureRatings) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomFeatureRatings) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomFeatureRatings) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomFeatureRatings) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomFeatureRatingsInfo) {
		toSerialize["roomFeatureRatingsInfo"] = o.RoomFeatureRatingsInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomFeatureRatings struct {
	value *RoomFeatureRatings
	isSet bool
}

func (v NullableRoomFeatureRatings) Get() *RoomFeatureRatings {
	return v.value
}

func (v *NullableRoomFeatureRatings) Set(val *RoomFeatureRatings) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomFeatureRatings) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomFeatureRatings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomFeatureRatings(val *RoomFeatureRatings) *NullableRoomFeatureRatings {
	return &NullableRoomFeatureRatings{value: val, isSet: true}
}

func (v NullableRoomFeatureRatings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomFeatureRatings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

