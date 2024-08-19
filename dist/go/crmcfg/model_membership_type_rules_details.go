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

// checks if the MembershipTypeRulesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTypeRulesDetails{}

// MembershipTypeRulesDetails Response object for creating membership type rules.
type MembershipTypeRulesDetails struct {
	// List of membership type rule ID's.
	MembershipTypeRules []MembershipTypeRuleIDType `json:"membershipTypeRules,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipTypeRulesDetails instantiates a new MembershipTypeRulesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTypeRulesDetails() *MembershipTypeRulesDetails {
	this := MembershipTypeRulesDetails{}
	return &this
}

// NewMembershipTypeRulesDetailsWithDefaults instantiates a new MembershipTypeRulesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTypeRulesDetailsWithDefaults() *MembershipTypeRulesDetails {
	this := MembershipTypeRulesDetails{}
	return &this
}

// GetMembershipTypeRules returns the MembershipTypeRules field value if set, zero value otherwise.
func (o *MembershipTypeRulesDetails) GetMembershipTypeRules() []MembershipTypeRuleIDType {
	if o == nil || IsNil(o.MembershipTypeRules) {
		var ret []MembershipTypeRuleIDType
		return ret
	}
	return o.MembershipTypeRules
}

// GetMembershipTypeRulesOk returns a tuple with the MembershipTypeRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulesDetails) GetMembershipTypeRulesOk() ([]MembershipTypeRuleIDType, bool) {
	if o == nil || IsNil(o.MembershipTypeRules) {
		return nil, false
	}
	return o.MembershipTypeRules, true
}

// HasMembershipTypeRules returns a boolean if a field has been set.
func (o *MembershipTypeRulesDetails) HasMembershipTypeRules() bool {
	if o != nil && !IsNil(o.MembershipTypeRules) {
		return true
	}

	return false
}

// SetMembershipTypeRules gets a reference to the given []MembershipTypeRuleIDType and assigns it to the MembershipTypeRules field.
func (o *MembershipTypeRulesDetails) SetMembershipTypeRules(v []MembershipTypeRuleIDType) {
	o.MembershipTypeRules = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipTypeRulesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipTypeRulesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipTypeRulesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipTypeRulesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipTypeRulesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipTypeRulesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipTypeRulesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTypeRulesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipTypeRules) {
		toSerialize["membershipTypeRules"] = o.MembershipTypeRules
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipTypeRulesDetails struct {
	value *MembershipTypeRulesDetails
	isSet bool
}

func (v NullableMembershipTypeRulesDetails) Get() *MembershipTypeRulesDetails {
	return v.value
}

func (v *NullableMembershipTypeRulesDetails) Set(val *MembershipTypeRulesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTypeRulesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTypeRulesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTypeRulesDetails(val *MembershipTypeRulesDetails) *NullableMembershipTypeRulesDetails {
	return &NullableMembershipTypeRulesDetails{value: val, isSet: true}
}

func (v NullableMembershipTypeRulesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTypeRulesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


