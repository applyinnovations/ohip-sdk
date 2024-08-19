/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the RoomAmenitiesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomAmenitiesDetails{}

// RoomAmenitiesDetails Response object for fetching Room Amenities.
type RoomAmenitiesDetails struct {
	// List of Room Amenities.
	RoomAmenities []RoomAmenityType `json:"roomAmenities,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomAmenitiesDetails instantiates a new RoomAmenitiesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomAmenitiesDetails() *RoomAmenitiesDetails {
	this := RoomAmenitiesDetails{}
	return &this
}

// NewRoomAmenitiesDetailsWithDefaults instantiates a new RoomAmenitiesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomAmenitiesDetailsWithDefaults() *RoomAmenitiesDetails {
	this := RoomAmenitiesDetails{}
	return &this
}

// GetRoomAmenities returns the RoomAmenities field value if set, zero value otherwise.
func (o *RoomAmenitiesDetails) GetRoomAmenities() []RoomAmenityType {
	if o == nil || IsNil(o.RoomAmenities) {
		var ret []RoomAmenityType
		return ret
	}
	return o.RoomAmenities
}

// GetRoomAmenitiesOk returns a tuple with the RoomAmenities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAmenitiesDetails) GetRoomAmenitiesOk() ([]RoomAmenityType, bool) {
	if o == nil || IsNil(o.RoomAmenities) {
		return nil, false
	}
	return o.RoomAmenities, true
}

// HasRoomAmenities returns a boolean if a field has been set.
func (o *RoomAmenitiesDetails) HasRoomAmenities() bool {
	if o != nil && !IsNil(o.RoomAmenities) {
		return true
	}

	return false
}

// SetRoomAmenities gets a reference to the given []RoomAmenityType and assigns it to the RoomAmenities field.
func (o *RoomAmenitiesDetails) SetRoomAmenities(v []RoomAmenityType) {
	o.RoomAmenities = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomAmenitiesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAmenitiesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomAmenitiesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomAmenitiesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomAmenitiesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomAmenitiesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomAmenitiesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomAmenitiesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomAmenitiesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomAmenitiesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RoomAmenities) {
		toSerialize["roomAmenities"] = o.RoomAmenities
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomAmenitiesDetails struct {
	value *RoomAmenitiesDetails
	isSet bool
}

func (v NullableRoomAmenitiesDetails) Get() *RoomAmenitiesDetails {
	return v.value
}

func (v *NullableRoomAmenitiesDetails) Set(val *RoomAmenitiesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomAmenitiesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomAmenitiesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomAmenitiesDetails(val *RoomAmenitiesDetails) *NullableRoomAmenitiesDetails {
	return &NullableRoomAmenitiesDetails{value: val, isSet: true}
}

func (v NullableRoomAmenitiesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomAmenitiesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


