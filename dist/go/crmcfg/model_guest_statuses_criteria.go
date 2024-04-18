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

// checks if the GuestStatusesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestStatusesCriteria{}

// GuestStatusesCriteria Request object for creating Guest Statuses.
type GuestStatusesCriteria struct {
	// List of Guest Statuses.
	GuestStatuses []GuestStatusType `json:"guestStatuses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuestStatusesCriteria instantiates a new GuestStatusesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestStatusesCriteria() *GuestStatusesCriteria {
	this := GuestStatusesCriteria{}
	return &this
}

// NewGuestStatusesCriteriaWithDefaults instantiates a new GuestStatusesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestStatusesCriteriaWithDefaults() *GuestStatusesCriteria {
	this := GuestStatusesCriteria{}
	return &this
}

// GetGuestStatuses returns the GuestStatuses field value if set, zero value otherwise.
func (o *GuestStatusesCriteria) GetGuestStatuses() []GuestStatusType {
	if o == nil || IsNil(o.GuestStatuses) {
		var ret []GuestStatusType
		return ret
	}
	return o.GuestStatuses
}

// GetGuestStatusesOk returns a tuple with the GuestStatuses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestStatusesCriteria) GetGuestStatusesOk() ([]GuestStatusType, bool) {
	if o == nil || IsNil(o.GuestStatuses) {
		return nil, false
	}
	return o.GuestStatuses, true
}

// HasGuestStatuses returns a boolean if a field has been set.
func (o *GuestStatusesCriteria) HasGuestStatuses() bool {
	if o != nil && !IsNil(o.GuestStatuses) {
		return true
	}

	return false
}

// SetGuestStatuses gets a reference to the given []GuestStatusType and assigns it to the GuestStatuses field.
func (o *GuestStatusesCriteria) SetGuestStatuses(v []GuestStatusType) {
	o.GuestStatuses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuestStatusesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestStatusesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuestStatusesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuestStatusesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuestStatusesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestStatusesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuestStatusesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuestStatusesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuestStatusesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestStatusesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestStatuses) {
		toSerialize["guestStatuses"] = o.GuestStatuses
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuestStatusesCriteria struct {
	value *GuestStatusesCriteria
	isSet bool
}

func (v NullableGuestStatusesCriteria) Get() *GuestStatusesCriteria {
	return v.value
}

func (v *NullableGuestStatusesCriteria) Set(val *GuestStatusesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestStatusesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestStatusesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestStatusesCriteria(val *GuestStatusesCriteria) *NullableGuestStatusesCriteria {
	return &NullableGuestStatusesCriteria{value: val, isSet: true}
}

func (v NullableGuestStatusesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestStatusesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

