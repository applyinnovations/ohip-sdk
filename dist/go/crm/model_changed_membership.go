/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ChangedMembership type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangedMembership{}

// ChangedMembership Response object for change/update membership. This object contains collection of memberships,Success,Warnings and Errors related to this operation
type ChangedMembership struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Detailed information of membership related to the profile
	ProfileMemberships []ProfileMembershipType `json:"profileMemberships,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangedMembership instantiates a new ChangedMembership object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangedMembership() *ChangedMembership {
	this := ChangedMembership{}
	return &this
}

// NewChangedMembershipWithDefaults instantiates a new ChangedMembership object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangedMembershipWithDefaults() *ChangedMembership {
	this := ChangedMembership{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangedMembership) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangedMembership) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangedMembership) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangedMembership) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProfileMemberships returns the ProfileMemberships field value if set, zero value otherwise.
func (o *ChangedMembership) GetProfileMemberships() []ProfileMembershipType {
	if o == nil || IsNil(o.ProfileMemberships) {
		var ret []ProfileMembershipType
		return ret
	}
	return o.ProfileMemberships
}

// GetProfileMembershipsOk returns a tuple with the ProfileMemberships field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangedMembership) GetProfileMembershipsOk() ([]ProfileMembershipType, bool) {
	if o == nil || IsNil(o.ProfileMemberships) {
		return nil, false
	}
	return o.ProfileMemberships, true
}

// HasProfileMemberships returns a boolean if a field has been set.
func (o *ChangedMembership) HasProfileMemberships() bool {
	if o != nil && !IsNil(o.ProfileMemberships) {
		return true
	}

	return false
}

// SetProfileMemberships gets a reference to the given []ProfileMembershipType and assigns it to the ProfileMemberships field.
func (o *ChangedMembership) SetProfileMemberships(v []ProfileMembershipType) {
	o.ProfileMemberships = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangedMembership) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangedMembership) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangedMembership) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangedMembership) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangedMembership) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangedMembership) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProfileMemberships) {
		toSerialize["profileMemberships"] = o.ProfileMemberships
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangedMembership struct {
	value *ChangedMembership
	isSet bool
}

func (v NullableChangedMembership) Get() *ChangedMembership {
	return v.value
}

func (v *NullableChangedMembership) Set(val *ChangedMembership) {
	v.value = val
	v.isSet = true
}

func (v NullableChangedMembership) IsSet() bool {
	return v.isSet
}

func (v *NullableChangedMembership) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangedMembership(val *ChangedMembership) *NullableChangedMembership {
	return &NullableChangedMembership{value: val, isSet: true}
}

func (v NullableChangedMembership) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangedMembership) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


