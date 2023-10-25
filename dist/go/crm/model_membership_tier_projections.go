/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MembershipTierProjections type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTierProjections{}

// MembershipTierProjections Response object for fetching Membership Tier Process Text.
type MembershipTierProjections struct {
	Links []InstanceLink `json:"links,omitempty"`
	MembershipTierProjection *MembershipTierProjectionType `json:"membershipTierProjection,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipTierProjections instantiates a new MembershipTierProjections object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTierProjections() *MembershipTierProjections {
	this := MembershipTierProjections{}
	return &this
}

// NewMembershipTierProjectionsWithDefaults instantiates a new MembershipTierProjections object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTierProjectionsWithDefaults() *MembershipTierProjections {
	this := MembershipTierProjections{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipTierProjections) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTierProjections) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipTierProjections) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipTierProjections) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipTierProjection returns the MembershipTierProjection field value if set, zero value otherwise.
func (o *MembershipTierProjections) GetMembershipTierProjection() MembershipTierProjectionType {
	if o == nil || IsNil(o.MembershipTierProjection) {
		var ret MembershipTierProjectionType
		return ret
	}
	return *o.MembershipTierProjection
}

// GetMembershipTierProjectionOk returns a tuple with the MembershipTierProjection field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTierProjections) GetMembershipTierProjectionOk() (*MembershipTierProjectionType, bool) {
	if o == nil || IsNil(o.MembershipTierProjection) {
		return nil, false
	}
	return o.MembershipTierProjection, true
}

// HasMembershipTierProjection returns a boolean if a field has been set.
func (o *MembershipTierProjections) HasMembershipTierProjection() bool {
	if o != nil && !IsNil(o.MembershipTierProjection) {
		return true
	}

	return false
}

// SetMembershipTierProjection gets a reference to the given MembershipTierProjectionType and assigns it to the MembershipTierProjection field.
func (o *MembershipTierProjections) SetMembershipTierProjection(v MembershipTierProjectionType) {
	o.MembershipTierProjection = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipTierProjections) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTierProjections) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipTierProjections) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipTierProjections) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipTierProjections) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTierProjections) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipTierProjection) {
		toSerialize["membershipTierProjection"] = o.MembershipTierProjection
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipTierProjections struct {
	value *MembershipTierProjections
	isSet bool
}

func (v NullableMembershipTierProjections) Get() *MembershipTierProjections {
	return v.value
}

func (v *NullableMembershipTierProjections) Set(val *MembershipTierProjections) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTierProjections) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTierProjections) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTierProjections(val *MembershipTierProjections) *NullableMembershipTierProjections {
	return &NullableMembershipTierProjections{value: val, isSet: true}
}

func (v NullableMembershipTierProjections) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTierProjections) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


