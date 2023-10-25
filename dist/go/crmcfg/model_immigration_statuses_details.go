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

// checks if the ImmigrationStatusesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ImmigrationStatusesDetails{}

// ImmigrationStatusesDetails Response object for fetching Immigration Statuses.
type ImmigrationStatusesDetails struct {
	// List of Immigration Statuses.
	ImmigrationStatuses []ImmigrationStatusType `json:"immigrationStatuses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewImmigrationStatusesDetails instantiates a new ImmigrationStatusesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImmigrationStatusesDetails() *ImmigrationStatusesDetails {
	this := ImmigrationStatusesDetails{}
	return &this
}

// NewImmigrationStatusesDetailsWithDefaults instantiates a new ImmigrationStatusesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImmigrationStatusesDetailsWithDefaults() *ImmigrationStatusesDetails {
	this := ImmigrationStatusesDetails{}
	return &this
}

// GetImmigrationStatuses returns the ImmigrationStatuses field value if set, zero value otherwise.
func (o *ImmigrationStatusesDetails) GetImmigrationStatuses() []ImmigrationStatusType {
	if o == nil || IsNil(o.ImmigrationStatuses) {
		var ret []ImmigrationStatusType
		return ret
	}
	return o.ImmigrationStatuses
}

// GetImmigrationStatusesOk returns a tuple with the ImmigrationStatuses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesDetails) GetImmigrationStatusesOk() ([]ImmigrationStatusType, bool) {
	if o == nil || IsNil(o.ImmigrationStatuses) {
		return nil, false
	}
	return o.ImmigrationStatuses, true
}

// HasImmigrationStatuses returns a boolean if a field has been set.
func (o *ImmigrationStatusesDetails) HasImmigrationStatuses() bool {
	if o != nil && !IsNil(o.ImmigrationStatuses) {
		return true
	}

	return false
}

// SetImmigrationStatuses gets a reference to the given []ImmigrationStatusType and assigns it to the ImmigrationStatuses field.
func (o *ImmigrationStatusesDetails) SetImmigrationStatuses(v []ImmigrationStatusType) {
	o.ImmigrationStatuses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ImmigrationStatusesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ImmigrationStatusesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ImmigrationStatusesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ImmigrationStatusesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImmigrationStatusesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ImmigrationStatusesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ImmigrationStatusesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ImmigrationStatusesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ImmigrationStatusesDetails) ToMap() (map[string]interface{}, error) {
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

type NullableImmigrationStatusesDetails struct {
	value *ImmigrationStatusesDetails
	isSet bool
}

func (v NullableImmigrationStatusesDetails) Get() *ImmigrationStatusesDetails {
	return v.value
}

func (v *NullableImmigrationStatusesDetails) Set(val *ImmigrationStatusesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableImmigrationStatusesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableImmigrationStatusesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImmigrationStatusesDetails(val *ImmigrationStatusesDetails) *NullableImmigrationStatusesDetails {
	return &NullableImmigrationStatusesDetails{value: val, isSet: true}
}

func (v NullableImmigrationStatusesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImmigrationStatusesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


