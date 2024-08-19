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

// checks if the MembershipClasses type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipClasses{}

// MembershipClasses Request object for changing Membership Class.
type MembershipClasses struct {
	// List of the Membership Class to be configured or fetched
	MembershipClasses []MembershipClassType `json:"membershipClasses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipClasses instantiates a new MembershipClasses object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipClasses() *MembershipClasses {
	this := MembershipClasses{}
	return &this
}

// NewMembershipClassesWithDefaults instantiates a new MembershipClasses object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipClassesWithDefaults() *MembershipClasses {
	this := MembershipClasses{}
	return &this
}

// GetMembershipClasses returns the MembershipClasses field value if set, zero value otherwise.
func (o *MembershipClasses) GetMembershipClasses() []MembershipClassType {
	if o == nil || IsNil(o.MembershipClasses) {
		var ret []MembershipClassType
		return ret
	}
	return o.MembershipClasses
}

// GetMembershipClassesOk returns a tuple with the MembershipClasses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipClasses) GetMembershipClassesOk() ([]MembershipClassType, bool) {
	if o == nil || IsNil(o.MembershipClasses) {
		return nil, false
	}
	return o.MembershipClasses, true
}

// HasMembershipClasses returns a boolean if a field has been set.
func (o *MembershipClasses) HasMembershipClasses() bool {
	if o != nil && !IsNil(o.MembershipClasses) {
		return true
	}

	return false
}

// SetMembershipClasses gets a reference to the given []MembershipClassType and assigns it to the MembershipClasses field.
func (o *MembershipClasses) SetMembershipClasses(v []MembershipClassType) {
	o.MembershipClasses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipClasses) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipClasses) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipClasses) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipClasses) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipClasses) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipClasses) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipClasses) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipClasses) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipClasses) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipClasses) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipClasses) {
		toSerialize["membershipClasses"] = o.MembershipClasses
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipClasses struct {
	value *MembershipClasses
	isSet bool
}

func (v NullableMembershipClasses) Get() *MembershipClasses {
	return v.value
}

func (v *NullableMembershipClasses) Set(val *MembershipClasses) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipClasses) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipClasses) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipClasses(val *MembershipClasses) *NullableMembershipClasses {
	return &NullableMembershipClasses{value: val, isSet: true}
}

func (v NullableMembershipClasses) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipClasses) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


