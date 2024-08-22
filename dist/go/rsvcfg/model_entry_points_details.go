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

// checks if the EntryPointsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EntryPointsDetails{}

// EntryPointsDetails Response object for fetching Entry Points.
type EntryPointsDetails struct {
	// List of Entry Points.
	EntryPoints []EntryPointType `json:"entryPoints,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEntryPointsDetails instantiates a new EntryPointsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEntryPointsDetails() *EntryPointsDetails {
	this := EntryPointsDetails{}
	return &this
}

// NewEntryPointsDetailsWithDefaults instantiates a new EntryPointsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEntryPointsDetailsWithDefaults() *EntryPointsDetails {
	this := EntryPointsDetails{}
	return &this
}

// GetEntryPoints returns the EntryPoints field value if set, zero value otherwise.
func (o *EntryPointsDetails) GetEntryPoints() []EntryPointType {
	if o == nil || IsNil(o.EntryPoints) {
		var ret []EntryPointType
		return ret
	}
	return o.EntryPoints
}

// GetEntryPointsOk returns a tuple with the EntryPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EntryPointsDetails) GetEntryPointsOk() ([]EntryPointType, bool) {
	if o == nil || IsNil(o.EntryPoints) {
		return nil, false
	}
	return o.EntryPoints, true
}

// HasEntryPoints returns a boolean if a field has been set.
func (o *EntryPointsDetails) HasEntryPoints() bool {
	if o != nil && !IsNil(o.EntryPoints) {
		return true
	}

	return false
}

// SetEntryPoints gets a reference to the given []EntryPointType and assigns it to the EntryPoints field.
func (o *EntryPointsDetails) SetEntryPoints(v []EntryPointType) {
	o.EntryPoints = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *EntryPointsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EntryPointsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *EntryPointsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *EntryPointsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *EntryPointsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EntryPointsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *EntryPointsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *EntryPointsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o EntryPointsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EntryPointsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EntryPoints) {
		toSerialize["entryPoints"] = o.EntryPoints
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEntryPointsDetails struct {
	value *EntryPointsDetails
	isSet bool
}

func (v NullableEntryPointsDetails) Get() *EntryPointsDetails {
	return v.value
}

func (v *NullableEntryPointsDetails) Set(val *EntryPointsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableEntryPointsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableEntryPointsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEntryPointsDetails(val *EntryPointsDetails) *NullableEntryPointsDetails {
	return &NullableEntryPointsDetails{value: val, isSet: true}
}

func (v NullableEntryPointsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEntryPointsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


