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

// checks if the RoomGroupsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomGroupsDetails{}

// RoomGroupsDetails Response object for fetching Room Groups.
type RoomGroupsDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Room Pools.
	RoomGroups []RoomGroupType `json:"roomGroups,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomGroupsDetails instantiates a new RoomGroupsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomGroupsDetails() *RoomGroupsDetails {
	this := RoomGroupsDetails{}
	return &this
}

// NewRoomGroupsDetailsWithDefaults instantiates a new RoomGroupsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomGroupsDetailsWithDefaults() *RoomGroupsDetails {
	this := RoomGroupsDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomGroupsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomGroupsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomGroupsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomGroupsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomGroups returns the RoomGroups field value if set, zero value otherwise.
func (o *RoomGroupsDetails) GetRoomGroups() []RoomGroupType {
	if o == nil || IsNil(o.RoomGroups) {
		var ret []RoomGroupType
		return ret
	}
	return o.RoomGroups
}

// GetRoomGroupsOk returns a tuple with the RoomGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomGroupsDetails) GetRoomGroupsOk() ([]RoomGroupType, bool) {
	if o == nil || IsNil(o.RoomGroups) {
		return nil, false
	}
	return o.RoomGroups, true
}

// HasRoomGroups returns a boolean if a field has been set.
func (o *RoomGroupsDetails) HasRoomGroups() bool {
	if o != nil && !IsNil(o.RoomGroups) {
		return true
	}

	return false
}

// SetRoomGroups gets a reference to the given []RoomGroupType and assigns it to the RoomGroups field.
func (o *RoomGroupsDetails) SetRoomGroups(v []RoomGroupType) {
	o.RoomGroups = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomGroupsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomGroupsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomGroupsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomGroupsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomGroupsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomGroupsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomGroups) {
		toSerialize["roomGroups"] = o.RoomGroups
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomGroupsDetails struct {
	value *RoomGroupsDetails
	isSet bool
}

func (v NullableRoomGroupsDetails) Get() *RoomGroupsDetails {
	return v.value
}

func (v *NullableRoomGroupsDetails) Set(val *RoomGroupsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomGroupsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomGroupsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomGroupsDetails(val *RoomGroupsDetails) *NullableRoomGroupsDetails {
	return &NullableRoomGroupsDetails{value: val, isSet: true}
}

func (v NullableRoomGroupsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomGroupsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

