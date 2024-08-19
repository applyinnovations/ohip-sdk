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

// checks if the RoomKeyInterfaceDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomKeyInterfaceDetails{}

// RoomKeyInterfaceDetails Response with the configuration details of active room key interfaces including the available key encoders.
type RoomKeyInterfaceDetails struct {
	// Configuration details of room key interface.
	KeyInterfaceDetails []RoomKeyInterfaceDetailType `json:"keyInterfaceDetails,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomKeyInterfaceDetails instantiates a new RoomKeyInterfaceDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomKeyInterfaceDetails() *RoomKeyInterfaceDetails {
	this := RoomKeyInterfaceDetails{}
	return &this
}

// NewRoomKeyInterfaceDetailsWithDefaults instantiates a new RoomKeyInterfaceDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomKeyInterfaceDetailsWithDefaults() *RoomKeyInterfaceDetails {
	this := RoomKeyInterfaceDetails{}
	return &this
}

// GetKeyInterfaceDetails returns the KeyInterfaceDetails field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetails) GetKeyInterfaceDetails() []RoomKeyInterfaceDetailType {
	if o == nil || IsNil(o.KeyInterfaceDetails) {
		var ret []RoomKeyInterfaceDetailType
		return ret
	}
	return o.KeyInterfaceDetails
}

// GetKeyInterfaceDetailsOk returns a tuple with the KeyInterfaceDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetails) GetKeyInterfaceDetailsOk() ([]RoomKeyInterfaceDetailType, bool) {
	if o == nil || IsNil(o.KeyInterfaceDetails) {
		return nil, false
	}
	return o.KeyInterfaceDetails, true
}

// HasKeyInterfaceDetails returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetails) HasKeyInterfaceDetails() bool {
	if o != nil && !IsNil(o.KeyInterfaceDetails) {
		return true
	}

	return false
}

// SetKeyInterfaceDetails gets a reference to the given []RoomKeyInterfaceDetailType and assigns it to the KeyInterfaceDetails field.
func (o *RoomKeyInterfaceDetails) SetKeyInterfaceDetails(v []RoomKeyInterfaceDetailType) {
	o.KeyInterfaceDetails = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomKeyInterfaceDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomKeyInterfaceDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInterfaceDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomKeyInterfaceDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomKeyInterfaceDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomKeyInterfaceDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomKeyInterfaceDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.KeyInterfaceDetails) {
		toSerialize["keyInterfaceDetails"] = o.KeyInterfaceDetails
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomKeyInterfaceDetails struct {
	value *RoomKeyInterfaceDetails
	isSet bool
}

func (v NullableRoomKeyInterfaceDetails) Get() *RoomKeyInterfaceDetails {
	return v.value
}

func (v *NullableRoomKeyInterfaceDetails) Set(val *RoomKeyInterfaceDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomKeyInterfaceDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomKeyInterfaceDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomKeyInterfaceDetails(val *RoomKeyInterfaceDetails) *NullableRoomKeyInterfaceDetails {
	return &NullableRoomKeyInterfaceDetails{value: val, isSet: true}
}

func (v NullableRoomKeyInterfaceDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomKeyInterfaceDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


