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

// checks if the MemberInformation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MemberInformation{}

// MemberInformation Response object for member info.
type MemberInformation struct {
	Links []InstanceLink `json:"links,omitempty"`
	MemberInfo *MemberInfoRSType `json:"memberInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMemberInformation instantiates a new MemberInformation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMemberInformation() *MemberInformation {
	this := MemberInformation{}
	return &this
}

// NewMemberInformationWithDefaults instantiates a new MemberInformation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMemberInformationWithDefaults() *MemberInformation {
	this := MemberInformation{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MemberInformation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInformation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MemberInformation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MemberInformation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMemberInfo returns the MemberInfo field value if set, zero value otherwise.
func (o *MemberInformation) GetMemberInfo() MemberInfoRSType {
	if o == nil || IsNil(o.MemberInfo) {
		var ret MemberInfoRSType
		return ret
	}
	return *o.MemberInfo
}

// GetMemberInfoOk returns a tuple with the MemberInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInformation) GetMemberInfoOk() (*MemberInfoRSType, bool) {
	if o == nil || IsNil(o.MemberInfo) {
		return nil, false
	}
	return o.MemberInfo, true
}

// HasMemberInfo returns a boolean if a field has been set.
func (o *MemberInformation) HasMemberInfo() bool {
	if o != nil && !IsNil(o.MemberInfo) {
		return true
	}

	return false
}

// SetMemberInfo gets a reference to the given MemberInfoRSType and assigns it to the MemberInfo field.
func (o *MemberInformation) SetMemberInfo(v MemberInfoRSType) {
	o.MemberInfo = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MemberInformation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInformation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MemberInformation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MemberInformation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MemberInformation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MemberInformation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MemberInfo) {
		toSerialize["memberInfo"] = o.MemberInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMemberInformation struct {
	value *MemberInformation
	isSet bool
}

func (v NullableMemberInformation) Get() *MemberInformation {
	return v.value
}

func (v *NullableMemberInformation) Set(val *MemberInformation) {
	v.value = val
	v.isSet = true
}

func (v NullableMemberInformation) IsSet() bool {
	return v.isSet
}

func (v *NullableMemberInformation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMemberInformation(val *MemberInformation) *NullableMemberInformation {
	return &NullableMemberInformation{value: val, isSet: true}
}

func (v NullableMemberInformation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMemberInformation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


