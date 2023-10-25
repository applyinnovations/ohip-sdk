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

// checks if the MembershipEnrollmentCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipEnrollmentCodesCriteria{}

// MembershipEnrollmentCodesCriteria Request object for creating Membership Enrollment Codes.
type MembershipEnrollmentCodesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Membership Enrollment Codes.
	MembershipEnrollmentCodes []MembershipEnrollmentCodeType `json:"membershipEnrollmentCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipEnrollmentCodesCriteria instantiates a new MembershipEnrollmentCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipEnrollmentCodesCriteria() *MembershipEnrollmentCodesCriteria {
	this := MembershipEnrollmentCodesCriteria{}
	return &this
}

// NewMembershipEnrollmentCodesCriteriaWithDefaults instantiates a new MembershipEnrollmentCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipEnrollmentCodesCriteriaWithDefaults() *MembershipEnrollmentCodesCriteria {
	this := MembershipEnrollmentCodesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipEnrollmentCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipEnrollmentCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipEnrollmentCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipEnrollmentCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipEnrollmentCodes returns the MembershipEnrollmentCodes field value if set, zero value otherwise.
func (o *MembershipEnrollmentCodesCriteria) GetMembershipEnrollmentCodes() []MembershipEnrollmentCodeType {
	if o == nil || IsNil(o.MembershipEnrollmentCodes) {
		var ret []MembershipEnrollmentCodeType
		return ret
	}
	return o.MembershipEnrollmentCodes
}

// GetMembershipEnrollmentCodesOk returns a tuple with the MembershipEnrollmentCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipEnrollmentCodesCriteria) GetMembershipEnrollmentCodesOk() ([]MembershipEnrollmentCodeType, bool) {
	if o == nil || IsNil(o.MembershipEnrollmentCodes) {
		return nil, false
	}
	return o.MembershipEnrollmentCodes, true
}

// HasMembershipEnrollmentCodes returns a boolean if a field has been set.
func (o *MembershipEnrollmentCodesCriteria) HasMembershipEnrollmentCodes() bool {
	if o != nil && !IsNil(o.MembershipEnrollmentCodes) {
		return true
	}

	return false
}

// SetMembershipEnrollmentCodes gets a reference to the given []MembershipEnrollmentCodeType and assigns it to the MembershipEnrollmentCodes field.
func (o *MembershipEnrollmentCodesCriteria) SetMembershipEnrollmentCodes(v []MembershipEnrollmentCodeType) {
	o.MembershipEnrollmentCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipEnrollmentCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipEnrollmentCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipEnrollmentCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipEnrollmentCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipEnrollmentCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipEnrollmentCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipEnrollmentCodes) {
		toSerialize["membershipEnrollmentCodes"] = o.MembershipEnrollmentCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipEnrollmentCodesCriteria struct {
	value *MembershipEnrollmentCodesCriteria
	isSet bool
}

func (v NullableMembershipEnrollmentCodesCriteria) Get() *MembershipEnrollmentCodesCriteria {
	return v.value
}

func (v *NullableMembershipEnrollmentCodesCriteria) Set(val *MembershipEnrollmentCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipEnrollmentCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipEnrollmentCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipEnrollmentCodesCriteria(val *MembershipEnrollmentCodesCriteria) *NullableMembershipEnrollmentCodesCriteria {
	return &NullableMembershipEnrollmentCodesCriteria{value: val, isSet: true}
}

func (v NullableMembershipEnrollmentCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipEnrollmentCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


