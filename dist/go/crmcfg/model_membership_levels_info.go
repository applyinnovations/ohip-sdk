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

// checks if the MembershipLevelsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipLevelsInfo{}

// MembershipLevelsInfo Response object for fetching membership levels.
type MembershipLevelsInfo struct {
	// Collection of membership levels
	MembershipLevels []MembershipLevelType `json:"membershipLevels,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipLevelsInfo instantiates a new MembershipLevelsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipLevelsInfo() *MembershipLevelsInfo {
	this := MembershipLevelsInfo{}
	return &this
}

// NewMembershipLevelsInfoWithDefaults instantiates a new MembershipLevelsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipLevelsInfoWithDefaults() *MembershipLevelsInfo {
	this := MembershipLevelsInfo{}
	return &this
}

// GetMembershipLevels returns the MembershipLevels field value if set, zero value otherwise.
func (o *MembershipLevelsInfo) GetMembershipLevels() []MembershipLevelType {
	if o == nil || IsNil(o.MembershipLevels) {
		var ret []MembershipLevelType
		return ret
	}
	return o.MembershipLevels
}

// GetMembershipLevelsOk returns a tuple with the MembershipLevels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelsInfo) GetMembershipLevelsOk() ([]MembershipLevelType, bool) {
	if o == nil || IsNil(o.MembershipLevels) {
		return nil, false
	}
	return o.MembershipLevels, true
}

// HasMembershipLevels returns a boolean if a field has been set.
func (o *MembershipLevelsInfo) HasMembershipLevels() bool {
	if o != nil && !IsNil(o.MembershipLevels) {
		return true
	}

	return false
}

// SetMembershipLevels gets a reference to the given []MembershipLevelType and assigns it to the MembershipLevels field.
func (o *MembershipLevelsInfo) SetMembershipLevels(v []MembershipLevelType) {
	o.MembershipLevels = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipLevelsInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelsInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipLevelsInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipLevelsInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipLevelsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipLevelsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipLevelsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipLevelsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipLevelsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipLevelsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipLevels) {
		toSerialize["membershipLevels"] = o.MembershipLevels
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipLevelsInfo struct {
	value *MembershipLevelsInfo
	isSet bool
}

func (v NullableMembershipLevelsInfo) Get() *MembershipLevelsInfo {
	return v.value
}

func (v *NullableMembershipLevelsInfo) Set(val *MembershipLevelsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipLevelsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipLevelsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipLevelsInfo(val *MembershipLevelsInfo) *NullableMembershipLevelsInfo {
	return &NullableMembershipLevelsInfo{value: val, isSet: true}
}

func (v NullableMembershipLevelsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipLevelsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

