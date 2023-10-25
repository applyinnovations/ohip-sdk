/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the GuestMessageTemplates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestMessageTemplates{}

// GuestMessageTemplates Response object for information regarding guest message templates.
type GuestMessageTemplates struct {
	// Collection of guest messages templates.
	GuestMessageTemplates []GuestMessageTemplateType `json:"guestMessageTemplates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuestMessageTemplates instantiates a new GuestMessageTemplates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestMessageTemplates() *GuestMessageTemplates {
	this := GuestMessageTemplates{}
	return &this
}

// NewGuestMessageTemplatesWithDefaults instantiates a new GuestMessageTemplates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestMessageTemplatesWithDefaults() *GuestMessageTemplates {
	this := GuestMessageTemplates{}
	return &this
}

// GetGuestMessageTemplates returns the GuestMessageTemplates field value if set, zero value otherwise.
func (o *GuestMessageTemplates) GetGuestMessageTemplates() []GuestMessageTemplateType {
	if o == nil || IsNil(o.GuestMessageTemplates) {
		var ret []GuestMessageTemplateType
		return ret
	}
	return o.GuestMessageTemplates
}

// GetGuestMessageTemplatesOk returns a tuple with the GuestMessageTemplates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageTemplates) GetGuestMessageTemplatesOk() ([]GuestMessageTemplateType, bool) {
	if o == nil || IsNil(o.GuestMessageTemplates) {
		return nil, false
	}
	return o.GuestMessageTemplates, true
}

// HasGuestMessageTemplates returns a boolean if a field has been set.
func (o *GuestMessageTemplates) HasGuestMessageTemplates() bool {
	if o != nil && !IsNil(o.GuestMessageTemplates) {
		return true
	}

	return false
}

// SetGuestMessageTemplates gets a reference to the given []GuestMessageTemplateType and assigns it to the GuestMessageTemplates field.
func (o *GuestMessageTemplates) SetGuestMessageTemplates(v []GuestMessageTemplateType) {
	o.GuestMessageTemplates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuestMessageTemplates) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageTemplates) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuestMessageTemplates) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuestMessageTemplates) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuestMessageTemplates) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestMessageTemplates) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuestMessageTemplates) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuestMessageTemplates) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuestMessageTemplates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestMessageTemplates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestMessageTemplates) {
		toSerialize["guestMessageTemplates"] = o.GuestMessageTemplates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuestMessageTemplates struct {
	value *GuestMessageTemplates
	isSet bool
}

func (v NullableGuestMessageTemplates) Get() *GuestMessageTemplates {
	return v.value
}

func (v *NullableGuestMessageTemplates) Set(val *GuestMessageTemplates) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestMessageTemplates) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestMessageTemplates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestMessageTemplates(val *GuestMessageTemplates) *NullableGuestMessageTemplates {
	return &NullableGuestMessageTemplates{value: val, isSet: true}
}

func (v NullableGuestMessageTemplates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestMessageTemplates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


