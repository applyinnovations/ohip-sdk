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

// checks if the RoomsSummaryDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomsSummaryDetails{}

// RoomsSummaryDetails Response object for fetching summary information of existing rooms.
type RoomsSummaryDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	Rooms *RoomsSummaryDetailsRooms `json:"rooms,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomsSummaryDetails instantiates a new RoomsSummaryDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomsSummaryDetails() *RoomsSummaryDetails {
	this := RoomsSummaryDetails{}
	return &this
}

// NewRoomsSummaryDetailsWithDefaults instantiates a new RoomsSummaryDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomsSummaryDetailsWithDefaults() *RoomsSummaryDetails {
	this := RoomsSummaryDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomsSummaryDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomsSummaryDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomsSummaryDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomsSummaryDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRooms returns the Rooms field value if set, zero value otherwise.
func (o *RoomsSummaryDetails) GetRooms() RoomsSummaryDetailsRooms {
	if o == nil || IsNil(o.Rooms) {
		var ret RoomsSummaryDetailsRooms
		return ret
	}
	return *o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomsSummaryDetails) GetRoomsOk() (*RoomsSummaryDetailsRooms, bool) {
	if o == nil || IsNil(o.Rooms) {
		return nil, false
	}
	return o.Rooms, true
}

// HasRooms returns a boolean if a field has been set.
func (o *RoomsSummaryDetails) HasRooms() bool {
	if o != nil && !IsNil(o.Rooms) {
		return true
	}

	return false
}

// SetRooms gets a reference to the given RoomsSummaryDetailsRooms and assigns it to the Rooms field.
func (o *RoomsSummaryDetails) SetRooms(v RoomsSummaryDetailsRooms) {
	o.Rooms = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomsSummaryDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomsSummaryDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomsSummaryDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomsSummaryDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomsSummaryDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomsSummaryDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Rooms) {
		toSerialize["rooms"] = o.Rooms
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomsSummaryDetails struct {
	value *RoomsSummaryDetails
	isSet bool
}

func (v NullableRoomsSummaryDetails) Get() *RoomsSummaryDetails {
	return v.value
}

func (v *NullableRoomsSummaryDetails) Set(val *RoomsSummaryDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomsSummaryDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomsSummaryDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomsSummaryDetails(val *RoomsSummaryDetails) *NullableRoomsSummaryDetails {
	return &NullableRoomsSummaryDetails{value: val, isSet: true}
}

func (v NullableRoomsSummaryDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomsSummaryDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


