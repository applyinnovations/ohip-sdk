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

// checks if the RoomMoveReasonsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomMoveReasonsDetails{}

// RoomMoveReasonsDetails Response object for fetching Room Move Reasons.
type RoomMoveReasonsDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Room Move Reasons.
	RoomMoveReasons []RoomMoveReasonType `json:"roomMoveReasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomMoveReasonsDetails instantiates a new RoomMoveReasonsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomMoveReasonsDetails() *RoomMoveReasonsDetails {
	this := RoomMoveReasonsDetails{}
	return &this
}

// NewRoomMoveReasonsDetailsWithDefaults instantiates a new RoomMoveReasonsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomMoveReasonsDetailsWithDefaults() *RoomMoveReasonsDetails {
	this := RoomMoveReasonsDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomMoveReasonsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveReasonsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomMoveReasonsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomMoveReasonsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomMoveReasons returns the RoomMoveReasons field value if set, zero value otherwise.
func (o *RoomMoveReasonsDetails) GetRoomMoveReasons() []RoomMoveReasonType {
	if o == nil || IsNil(o.RoomMoveReasons) {
		var ret []RoomMoveReasonType
		return ret
	}
	return o.RoomMoveReasons
}

// GetRoomMoveReasonsOk returns a tuple with the RoomMoveReasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveReasonsDetails) GetRoomMoveReasonsOk() ([]RoomMoveReasonType, bool) {
	if o == nil || IsNil(o.RoomMoveReasons) {
		return nil, false
	}
	return o.RoomMoveReasons, true
}

// HasRoomMoveReasons returns a boolean if a field has been set.
func (o *RoomMoveReasonsDetails) HasRoomMoveReasons() bool {
	if o != nil && !IsNil(o.RoomMoveReasons) {
		return true
	}

	return false
}

// SetRoomMoveReasons gets a reference to the given []RoomMoveReasonType and assigns it to the RoomMoveReasons field.
func (o *RoomMoveReasonsDetails) SetRoomMoveReasons(v []RoomMoveReasonType) {
	o.RoomMoveReasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomMoveReasonsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveReasonsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomMoveReasonsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomMoveReasonsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomMoveReasonsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomMoveReasonsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomMoveReasons) {
		toSerialize["roomMoveReasons"] = o.RoomMoveReasons
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomMoveReasonsDetails struct {
	value *RoomMoveReasonsDetails
	isSet bool
}

func (v NullableRoomMoveReasonsDetails) Get() *RoomMoveReasonsDetails {
	return v.value
}

func (v *NullableRoomMoveReasonsDetails) Set(val *RoomMoveReasonsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomMoveReasonsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomMoveReasonsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomMoveReasonsDetails(val *RoomMoveReasonsDetails) *NullableRoomMoveReasonsDetails {
	return &NullableRoomMoveReasonsDetails{value: val, isSet: true}
}

func (v NullableRoomMoveReasonsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomMoveReasonsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


