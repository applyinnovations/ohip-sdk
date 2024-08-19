/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the GuestTypesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestTypesDetails{}

// GuestTypesDetails Response object for fetching Guest Types.
type GuestTypesDetails struct {
	// List of Guest Types.
	GuestTypes []GuestTypeType `json:"guestTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuestTypesDetails instantiates a new GuestTypesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestTypesDetails() *GuestTypesDetails {
	this := GuestTypesDetails{}
	return &this
}

// NewGuestTypesDetailsWithDefaults instantiates a new GuestTypesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestTypesDetailsWithDefaults() *GuestTypesDetails {
	this := GuestTypesDetails{}
	return &this
}

// GetGuestTypes returns the GuestTypes field value if set, zero value otherwise.
func (o *GuestTypesDetails) GetGuestTypes() []GuestTypeType {
	if o == nil || IsNil(o.GuestTypes) {
		var ret []GuestTypeType
		return ret
	}
	return o.GuestTypes
}

// GetGuestTypesOk returns a tuple with the GuestTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestTypesDetails) GetGuestTypesOk() ([]GuestTypeType, bool) {
	if o == nil || IsNil(o.GuestTypes) {
		return nil, false
	}
	return o.GuestTypes, true
}

// HasGuestTypes returns a boolean if a field has been set.
func (o *GuestTypesDetails) HasGuestTypes() bool {
	if o != nil && !IsNil(o.GuestTypes) {
		return true
	}

	return false
}

// SetGuestTypes gets a reference to the given []GuestTypeType and assigns it to the GuestTypes field.
func (o *GuestTypesDetails) SetGuestTypes(v []GuestTypeType) {
	o.GuestTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuestTypesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestTypesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuestTypesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuestTypesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuestTypesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestTypesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuestTypesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuestTypesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuestTypesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestTypesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestTypes) {
		toSerialize["guestTypes"] = o.GuestTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuestTypesDetails struct {
	value *GuestTypesDetails
	isSet bool
}

func (v NullableGuestTypesDetails) Get() *GuestTypesDetails {
	return v.value
}

func (v *NullableGuestTypesDetails) Set(val *GuestTypesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestTypesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestTypesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestTypesDetails(val *GuestTypesDetails) *NullableGuestTypesDetails {
	return &NullableGuestTypesDetails{value: val, isSet: true}
}

func (v NullableGuestTypesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestTypesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


