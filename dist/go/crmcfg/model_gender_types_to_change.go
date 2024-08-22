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

// checks if the GenderTypesToChange type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GenderTypesToChange{}

// GenderTypesToChange Request object for changing Gender Types.
type GenderTypesToChange struct {
	// List of Gender Type.
	GenderTypes []GenderType `json:"genderTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGenderTypesToChange instantiates a new GenderTypesToChange object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGenderTypesToChange() *GenderTypesToChange {
	this := GenderTypesToChange{}
	return &this
}

// NewGenderTypesToChangeWithDefaults instantiates a new GenderTypesToChange object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGenderTypesToChangeWithDefaults() *GenderTypesToChange {
	this := GenderTypesToChange{}
	return &this
}

// GetGenderTypes returns the GenderTypes field value if set, zero value otherwise.
func (o *GenderTypesToChange) GetGenderTypes() []GenderType {
	if o == nil || IsNil(o.GenderTypes) {
		var ret []GenderType
		return ret
	}
	return o.GenderTypes
}

// GetGenderTypesOk returns a tuple with the GenderTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenderTypesToChange) GetGenderTypesOk() ([]GenderType, bool) {
	if o == nil || IsNil(o.GenderTypes) {
		return nil, false
	}
	return o.GenderTypes, true
}

// HasGenderTypes returns a boolean if a field has been set.
func (o *GenderTypesToChange) HasGenderTypes() bool {
	if o != nil && !IsNil(o.GenderTypes) {
		return true
	}

	return false
}

// SetGenderTypes gets a reference to the given []GenderType and assigns it to the GenderTypes field.
func (o *GenderTypesToChange) SetGenderTypes(v []GenderType) {
	o.GenderTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GenderTypesToChange) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenderTypesToChange) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GenderTypesToChange) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GenderTypesToChange) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GenderTypesToChange) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenderTypesToChange) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GenderTypesToChange) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GenderTypesToChange) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GenderTypesToChange) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GenderTypesToChange) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GenderTypes) {
		toSerialize["genderTypes"] = o.GenderTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGenderTypesToChange struct {
	value *GenderTypesToChange
	isSet bool
}

func (v NullableGenderTypesToChange) Get() *GenderTypesToChange {
	return v.value
}

func (v *NullableGenderTypesToChange) Set(val *GenderTypesToChange) {
	v.value = val
	v.isSet = true
}

func (v NullableGenderTypesToChange) IsSet() bool {
	return v.isSet
}

func (v *NullableGenderTypesToChange) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenderTypesToChange(val *GenderTypesToChange) *NullableGenderTypesToChange {
	return &NullableGenderTypesToChange{value: val, isSet: true}
}

func (v NullableGenderTypesToChange) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenderTypesToChange) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


