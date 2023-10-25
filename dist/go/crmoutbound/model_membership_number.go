/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the MembershipNumber type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipNumber{}

// MembershipNumber Request object for generating membership number.
type MembershipNumber struct {
	GenerateMembershipNumberCriteria *GenerateMembershipNumberCriteriaType `json:"generateMembershipNumberCriteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipNumber instantiates a new MembershipNumber object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipNumber() *MembershipNumber {
	this := MembershipNumber{}
	return &this
}

// NewMembershipNumberWithDefaults instantiates a new MembershipNumber object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipNumberWithDefaults() *MembershipNumber {
	this := MembershipNumber{}
	return &this
}

// GetGenerateMembershipNumberCriteria returns the GenerateMembershipNumberCriteria field value if set, zero value otherwise.
func (o *MembershipNumber) GetGenerateMembershipNumberCriteria() GenerateMembershipNumberCriteriaType {
	if o == nil || IsNil(o.GenerateMembershipNumberCriteria) {
		var ret GenerateMembershipNumberCriteriaType
		return ret
	}
	return *o.GenerateMembershipNumberCriteria
}

// GetGenerateMembershipNumberCriteriaOk returns a tuple with the GenerateMembershipNumberCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipNumber) GetGenerateMembershipNumberCriteriaOk() (*GenerateMembershipNumberCriteriaType, bool) {
	if o == nil || IsNil(o.GenerateMembershipNumberCriteria) {
		return nil, false
	}
	return o.GenerateMembershipNumberCriteria, true
}

// HasGenerateMembershipNumberCriteria returns a boolean if a field has been set.
func (o *MembershipNumber) HasGenerateMembershipNumberCriteria() bool {
	if o != nil && !IsNil(o.GenerateMembershipNumberCriteria) {
		return true
	}

	return false
}

// SetGenerateMembershipNumberCriteria gets a reference to the given GenerateMembershipNumberCriteriaType and assigns it to the GenerateMembershipNumberCriteria field.
func (o *MembershipNumber) SetGenerateMembershipNumberCriteria(v GenerateMembershipNumberCriteriaType) {
	o.GenerateMembershipNumberCriteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipNumber) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipNumber) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipNumber) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipNumber) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipNumber) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipNumber) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipNumber) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipNumber) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipNumber) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipNumber) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GenerateMembershipNumberCriteria) {
		toSerialize["generateMembershipNumberCriteria"] = o.GenerateMembershipNumberCriteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipNumber struct {
	value *MembershipNumber
	isSet bool
}

func (v NullableMembershipNumber) Get() *MembershipNumber {
	return v.value
}

func (v *NullableMembershipNumber) Set(val *MembershipNumber) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipNumber) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipNumber) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipNumber(val *MembershipNumber) *NullableMembershipNumber {
	return &NullableMembershipNumber{value: val, isSet: true}
}

func (v NullableMembershipNumber) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipNumber) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


