/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the RoomKeyInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomKeyInfo{}

// RoomKeyInfo Response of fetch room keys operation.
type RoomKeyInfo struct {
	// Incidental limit on a reservation.
	IncidentalLimit *float32 `json:"incidentalLimit,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Contains details of Room key.
	RoomKeysInfoList []RoomKeyInfoType `json:"roomKeysInfoList,omitempty"`
	// Total Authorization on a reservation.
	TotalAuthorization *float32 `json:"totalAuthorization,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoomKeyInfo instantiates a new RoomKeyInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomKeyInfo() *RoomKeyInfo {
	this := RoomKeyInfo{}
	return &this
}

// NewRoomKeyInfoWithDefaults instantiates a new RoomKeyInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomKeyInfoWithDefaults() *RoomKeyInfo {
	this := RoomKeyInfo{}
	return &this
}

// GetIncidentalLimit returns the IncidentalLimit field value if set, zero value otherwise.
func (o *RoomKeyInfo) GetIncidentalLimit() float32 {
	if o == nil || IsNil(o.IncidentalLimit) {
		var ret float32
		return ret
	}
	return *o.IncidentalLimit
}

// GetIncidentalLimitOk returns a tuple with the IncidentalLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInfo) GetIncidentalLimitOk() (*float32, bool) {
	if o == nil || IsNil(o.IncidentalLimit) {
		return nil, false
	}
	return o.IncidentalLimit, true
}

// HasIncidentalLimit returns a boolean if a field has been set.
func (o *RoomKeyInfo) HasIncidentalLimit() bool {
	if o != nil && !IsNil(o.IncidentalLimit) {
		return true
	}

	return false
}

// SetIncidentalLimit gets a reference to the given float32 and assigns it to the IncidentalLimit field.
func (o *RoomKeyInfo) SetIncidentalLimit(v float32) {
	o.IncidentalLimit = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomKeyInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomKeyInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomKeyInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomKeysInfoList returns the RoomKeysInfoList field value if set, zero value otherwise.
func (o *RoomKeyInfo) GetRoomKeysInfoList() []RoomKeyInfoType {
	if o == nil || IsNil(o.RoomKeysInfoList) {
		var ret []RoomKeyInfoType
		return ret
	}
	return o.RoomKeysInfoList
}

// GetRoomKeysInfoListOk returns a tuple with the RoomKeysInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInfo) GetRoomKeysInfoListOk() ([]RoomKeyInfoType, bool) {
	if o == nil || IsNil(o.RoomKeysInfoList) {
		return nil, false
	}
	return o.RoomKeysInfoList, true
}

// HasRoomKeysInfoList returns a boolean if a field has been set.
func (o *RoomKeyInfo) HasRoomKeysInfoList() bool {
	if o != nil && !IsNil(o.RoomKeysInfoList) {
		return true
	}

	return false
}

// SetRoomKeysInfoList gets a reference to the given []RoomKeyInfoType and assigns it to the RoomKeysInfoList field.
func (o *RoomKeyInfo) SetRoomKeysInfoList(v []RoomKeyInfoType) {
	o.RoomKeysInfoList = v
}

// GetTotalAuthorization returns the TotalAuthorization field value if set, zero value otherwise.
func (o *RoomKeyInfo) GetTotalAuthorization() float32 {
	if o == nil || IsNil(o.TotalAuthorization) {
		var ret float32
		return ret
	}
	return *o.TotalAuthorization
}

// GetTotalAuthorizationOk returns a tuple with the TotalAuthorization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInfo) GetTotalAuthorizationOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalAuthorization) {
		return nil, false
	}
	return o.TotalAuthorization, true
}

// HasTotalAuthorization returns a boolean if a field has been set.
func (o *RoomKeyInfo) HasTotalAuthorization() bool {
	if o != nil && !IsNil(o.TotalAuthorization) {
		return true
	}

	return false
}

// SetTotalAuthorization gets a reference to the given float32 and assigns it to the TotalAuthorization field.
func (o *RoomKeyInfo) SetTotalAuthorization(v float32) {
	o.TotalAuthorization = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomKeyInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomKeyInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomKeyInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoomKeyInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomKeyInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.IncidentalLimit) {
		toSerialize["incidentalLimit"] = o.IncidentalLimit
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomKeysInfoList) {
		toSerialize["roomKeysInfoList"] = o.RoomKeysInfoList
	}
	if !IsNil(o.TotalAuthorization) {
		toSerialize["totalAuthorization"] = o.TotalAuthorization
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoomKeyInfo struct {
	value *RoomKeyInfo
	isSet bool
}

func (v NullableRoomKeyInfo) Get() *RoomKeyInfo {
	return v.value
}

func (v *NullableRoomKeyInfo) Set(val *RoomKeyInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomKeyInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomKeyInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomKeyInfo(val *RoomKeyInfo) *NullableRoomKeyInfo {
	return &NullableRoomKeyInfo{value: val, isSet: true}
}

func (v NullableRoomKeyInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomKeyInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


