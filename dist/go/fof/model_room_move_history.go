/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the RoomMoveHistory type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomMoveHistory{}

// RoomMoveHistory Response for the fetch room move history of a reservation.
type RoomMoveHistory struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of room move details
	RoomMoveHistoryDetails []RoomMoveDetailType `json:"roomMoveHistoryDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomMoveHistory instantiates a new RoomMoveHistory object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomMoveHistory() *RoomMoveHistory {
	this := RoomMoveHistory{}
	return &this
}

// NewRoomMoveHistoryWithDefaults instantiates a new RoomMoveHistory object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomMoveHistoryWithDefaults() *RoomMoveHistory {
	this := RoomMoveHistory{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomMoveHistory) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveHistory) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomMoveHistory) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomMoveHistory) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomMoveHistoryDetails returns the RoomMoveHistoryDetails field value if set, zero value otherwise.
func (o *RoomMoveHistory) GetRoomMoveHistoryDetails() []RoomMoveDetailType {
	if o == nil || IsNil(o.RoomMoveHistoryDetails) {
		var ret []RoomMoveDetailType
		return ret
	}
	return o.RoomMoveHistoryDetails
}

// GetRoomMoveHistoryDetailsOk returns a tuple with the RoomMoveHistoryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveHistory) GetRoomMoveHistoryDetailsOk() ([]RoomMoveDetailType, bool) {
	if o == nil || IsNil(o.RoomMoveHistoryDetails) {
		return nil, false
	}
	return o.RoomMoveHistoryDetails, true
}

// HasRoomMoveHistoryDetails returns a boolean if a field has been set.
func (o *RoomMoveHistory) HasRoomMoveHistoryDetails() bool {
	if o != nil && !IsNil(o.RoomMoveHistoryDetails) {
		return true
	}

	return false
}

// SetRoomMoveHistoryDetails gets a reference to the given []RoomMoveDetailType and assigns it to the RoomMoveHistoryDetails field.
func (o *RoomMoveHistory) SetRoomMoveHistoryDetails(v []RoomMoveDetailType) {
	o.RoomMoveHistoryDetails = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomMoveHistory) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomMoveHistory) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomMoveHistory) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomMoveHistory) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomMoveHistory) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomMoveHistory) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomMoveHistoryDetails) {
		toSerialize["roomMoveHistoryDetails"] = o.RoomMoveHistoryDetails
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomMoveHistory struct {
	value *RoomMoveHistory
	isSet bool
}

func (v NullableRoomMoveHistory) Get() *RoomMoveHistory {
	return v.value
}

func (v *NullableRoomMoveHistory) Set(val *RoomMoveHistory) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomMoveHistory) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomMoveHistory) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomMoveHistory(val *RoomMoveHistory) *NullableRoomMoveHistory {
	return &NullableRoomMoveHistory{value: val, isSet: true}
}

func (v NullableRoomMoveHistory) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomMoveHistory) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


