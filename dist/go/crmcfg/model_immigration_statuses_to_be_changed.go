/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the ImmigrationStatusesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ImmigrationStatusesToBeChanged{}

// ImmigrationStatusesToBeChanged Request object for changing Immigration Statuses.
type ImmigrationStatusesToBeChanged struct {
	// List of Immigration Statuses.
	ImmigrationStatuses []ImmigrationStatusType `json:"immigrationStatuses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewImmigrationStatusesToBeChanged instantiates a new ImmigrationStatusesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImmigrationStatusesToBeChanged() *ImmigrationStatusesToBeChanged {
	this := ImmigrationStatusesToBeChanged{}
	return &this
}

// NewImmigrationStatusesToBeChangedWithDefaults instantiates a new ImmigrationStatusesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImmigrationStatusesToBeChangedWithDefaults() *ImmigrationStatusesToBeChanged {
	this := ImmigrationStatusesToBeChanged{}
	return &this
}

// GetImmigrationStatuses returns the ImmigrationStatuses field value if set, zero value otherwise.
func (o *ImmigrationStatusesToBeChanged) GetImmigrationStatuses() []ImmigrationStatusType {
	if o == nil || IsNil(o.ImmigrationStatuses) {
		var ret []ImmigrationStatusType
		return ret
	}
	return o.ImmigrationStatuses
}

// GetImmigrationStatusesOk returns a tuple with the ImmigrationStatuses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesToBeChanged) GetImmigrationStatusesOk() ([]ImmigrationStatusType, bool) {
	if o == nil || IsNil(o.ImmigrationStatuses) {
		return nil, false
	}
	return o.ImmigrationStatuses, true
}

// HasImmigrationStatuses returns a boolean if a field has been set.
func (o *ImmigrationStatusesToBeChanged) HasImmigrationStatuses() bool {
	if o != nil && !IsNil(o.ImmigrationStatuses) {
		return true
	}

	return false
}

// SetImmigrationStatuses gets a reference to the given []ImmigrationStatusType and assigns it to the ImmigrationStatuses field.
func (o *ImmigrationStatusesToBeChanged) SetImmigrationStatuses(v []ImmigrationStatusType) {
	o.ImmigrationStatuses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ImmigrationStatusesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ImmigrationStatusesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ImmigrationStatusesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ImmigrationStatusesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ImmigrationStatusesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ImmigrationStatusesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ImmigrationStatusesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ImmigrationStatusesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ImmigrationStatuses) {
		toSerialize["immigrationStatuses"] = o.ImmigrationStatuses
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableImmigrationStatusesToBeChanged struct {
	value *ImmigrationStatusesToBeChanged
	isSet bool
}

func (v NullableImmigrationStatusesToBeChanged) Get() *ImmigrationStatusesToBeChanged {
	return v.value
}

func (v *NullableImmigrationStatusesToBeChanged) Set(val *ImmigrationStatusesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableImmigrationStatusesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableImmigrationStatusesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImmigrationStatusesToBeChanged(val *ImmigrationStatusesToBeChanged) *NullableImmigrationStatusesToBeChanged {
	return &NullableImmigrationStatusesToBeChanged{value: val, isSet: true}
}

func (v NullableImmigrationStatusesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImmigrationStatusesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


