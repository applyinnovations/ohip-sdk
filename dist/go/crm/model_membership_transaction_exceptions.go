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

// checks if the MembershipTransactionExceptions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTransactionExceptions{}

// MembershipTransactionExceptions Response object for fetching membership transaction exceptions.
type MembershipTransactionExceptions struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Contains Membership transaction exception information.
	MemberTransactionExceptions []MembershipTransactionExceptionType `json:"memberTransactionExceptions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipTransactionExceptions instantiates a new MembershipTransactionExceptions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTransactionExceptions() *MembershipTransactionExceptions {
	this := MembershipTransactionExceptions{}
	return &this
}

// NewMembershipTransactionExceptionsWithDefaults instantiates a new MembershipTransactionExceptions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTransactionExceptionsWithDefaults() *MembershipTransactionExceptions {
	this := MembershipTransactionExceptions{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipTransactionExceptions) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionExceptions) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipTransactionExceptions) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipTransactionExceptions) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMemberTransactionExceptions returns the MemberTransactionExceptions field value if set, zero value otherwise.
func (o *MembershipTransactionExceptions) GetMemberTransactionExceptions() []MembershipTransactionExceptionType {
	if o == nil || IsNil(o.MemberTransactionExceptions) {
		var ret []MembershipTransactionExceptionType
		return ret
	}
	return o.MemberTransactionExceptions
}

// GetMemberTransactionExceptionsOk returns a tuple with the MemberTransactionExceptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionExceptions) GetMemberTransactionExceptionsOk() ([]MembershipTransactionExceptionType, bool) {
	if o == nil || IsNil(o.MemberTransactionExceptions) {
		return nil, false
	}
	return o.MemberTransactionExceptions, true
}

// HasMemberTransactionExceptions returns a boolean if a field has been set.
func (o *MembershipTransactionExceptions) HasMemberTransactionExceptions() bool {
	if o != nil && !IsNil(o.MemberTransactionExceptions) {
		return true
	}

	return false
}

// SetMemberTransactionExceptions gets a reference to the given []MembershipTransactionExceptionType and assigns it to the MemberTransactionExceptions field.
func (o *MembershipTransactionExceptions) SetMemberTransactionExceptions(v []MembershipTransactionExceptionType) {
	o.MemberTransactionExceptions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipTransactionExceptions) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionExceptions) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipTransactionExceptions) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipTransactionExceptions) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipTransactionExceptions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTransactionExceptions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MemberTransactionExceptions) {
		toSerialize["memberTransactionExceptions"] = o.MemberTransactionExceptions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipTransactionExceptions struct {
	value *MembershipTransactionExceptions
	isSet bool
}

func (v NullableMembershipTransactionExceptions) Get() *MembershipTransactionExceptions {
	return v.value
}

func (v *NullableMembershipTransactionExceptions) Set(val *MembershipTransactionExceptions) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTransactionExceptions) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTransactionExceptions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTransactionExceptions(val *MembershipTransactionExceptions) *NullableMembershipTransactionExceptions {
	return &NullableMembershipTransactionExceptions{value: val, isSet: true}
}

func (v NullableMembershipTransactionExceptions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTransactionExceptions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


