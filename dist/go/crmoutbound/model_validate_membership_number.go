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

// checks if the ValidateMembershipNumber type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ValidateMembershipNumber{}

// ValidateMembershipNumber Response object for fetching offers from external system.
type ValidateMembershipNumber struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewValidateMembershipNumber instantiates a new ValidateMembershipNumber object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewValidateMembershipNumber() *ValidateMembershipNumber {
	this := ValidateMembershipNumber{}
	return &this
}

// NewValidateMembershipNumberWithDefaults instantiates a new ValidateMembershipNumber object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewValidateMembershipNumberWithDefaults() *ValidateMembershipNumber {
	this := ValidateMembershipNumber{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ValidateMembershipNumber) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateMembershipNumber) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ValidateMembershipNumber) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ValidateMembershipNumber) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ValidateMembershipNumber) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateMembershipNumber) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ValidateMembershipNumber) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ValidateMembershipNumber) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ValidateMembershipNumber) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ValidateMembershipNumber) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableValidateMembershipNumber struct {
	value *ValidateMembershipNumber
	isSet bool
}

func (v NullableValidateMembershipNumber) Get() *ValidateMembershipNumber {
	return v.value
}

func (v *NullableValidateMembershipNumber) Set(val *ValidateMembershipNumber) {
	v.value = val
	v.isSet = true
}

func (v NullableValidateMembershipNumber) IsSet() bool {
	return v.isSet
}

func (v *NullableValidateMembershipNumber) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableValidateMembershipNumber(val *ValidateMembershipNumber) *NullableValidateMembershipNumber {
	return &NullableValidateMembershipNumber{value: val, isSet: true}
}

func (v NullableValidateMembershipNumber) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableValidateMembershipNumber) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


