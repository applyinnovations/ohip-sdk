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

// checks if the HousekeepingRoomSchedulesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingRoomSchedulesDetails{}

// HousekeepingRoomSchedulesDetails Response object for fetching housekeeping tasks and housekeeping codes associated to a room type.
type HousekeepingRoomSchedulesDetails struct {
	// This type holds a collection of housekeeping tasks attached to a room type.
	HousekeepingRoomSchedules []ConfigHousekeepingRoomScheduleType `json:"housekeepingRoomSchedules,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHousekeepingRoomSchedulesDetails instantiates a new HousekeepingRoomSchedulesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingRoomSchedulesDetails() *HousekeepingRoomSchedulesDetails {
	this := HousekeepingRoomSchedulesDetails{}
	return &this
}

// NewHousekeepingRoomSchedulesDetailsWithDefaults instantiates a new HousekeepingRoomSchedulesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingRoomSchedulesDetailsWithDefaults() *HousekeepingRoomSchedulesDetails {
	this := HousekeepingRoomSchedulesDetails{}
	return &this
}

// GetHousekeepingRoomSchedules returns the HousekeepingRoomSchedules field value if set, zero value otherwise.
func (o *HousekeepingRoomSchedulesDetails) GetHousekeepingRoomSchedules() []ConfigHousekeepingRoomScheduleType {
	if o == nil || IsNil(o.HousekeepingRoomSchedules) {
		var ret []ConfigHousekeepingRoomScheduleType
		return ret
	}
	return o.HousekeepingRoomSchedules
}

// GetHousekeepingRoomSchedulesOk returns a tuple with the HousekeepingRoomSchedules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomSchedulesDetails) GetHousekeepingRoomSchedulesOk() ([]ConfigHousekeepingRoomScheduleType, bool) {
	if o == nil || IsNil(o.HousekeepingRoomSchedules) {
		return nil, false
	}
	return o.HousekeepingRoomSchedules, true
}

// HasHousekeepingRoomSchedules returns a boolean if a field has been set.
func (o *HousekeepingRoomSchedulesDetails) HasHousekeepingRoomSchedules() bool {
	if o != nil && !IsNil(o.HousekeepingRoomSchedules) {
		return true
	}

	return false
}

// SetHousekeepingRoomSchedules gets a reference to the given []ConfigHousekeepingRoomScheduleType and assigns it to the HousekeepingRoomSchedules field.
func (o *HousekeepingRoomSchedulesDetails) SetHousekeepingRoomSchedules(v []ConfigHousekeepingRoomScheduleType) {
	o.HousekeepingRoomSchedules = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HousekeepingRoomSchedulesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomSchedulesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HousekeepingRoomSchedulesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HousekeepingRoomSchedulesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HousekeepingRoomSchedulesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingRoomSchedulesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HousekeepingRoomSchedulesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HousekeepingRoomSchedulesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HousekeepingRoomSchedulesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingRoomSchedulesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HousekeepingRoomSchedules) {
		toSerialize["housekeepingRoomSchedules"] = o.HousekeepingRoomSchedules
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHousekeepingRoomSchedulesDetails struct {
	value *HousekeepingRoomSchedulesDetails
	isSet bool
}

func (v NullableHousekeepingRoomSchedulesDetails) Get() *HousekeepingRoomSchedulesDetails {
	return v.value
}

func (v *NullableHousekeepingRoomSchedulesDetails) Set(val *HousekeepingRoomSchedulesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingRoomSchedulesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingRoomSchedulesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingRoomSchedulesDetails(val *HousekeepingRoomSchedulesDetails) *NullableHousekeepingRoomSchedulesDetails {
	return &NullableHousekeepingRoomSchedulesDetails{value: val, isSet: true}
}

func (v NullableHousekeepingRoomSchedulesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingRoomSchedulesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

