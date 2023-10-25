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

// checks if the ForgetProfilesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ForgetProfilesCriteria{}

// ForgetProfilesCriteria Operation to validate profiles for forgetting.
type ForgetProfilesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	ValidateForgetProfilesCriteria *ForgetProfilesCriteriaType `json:"validateForgetProfilesCriteria,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewForgetProfilesCriteria instantiates a new ForgetProfilesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewForgetProfilesCriteria() *ForgetProfilesCriteria {
	this := ForgetProfilesCriteria{}
	return &this
}

// NewForgetProfilesCriteriaWithDefaults instantiates a new ForgetProfilesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewForgetProfilesCriteriaWithDefaults() *ForgetProfilesCriteria {
	this := ForgetProfilesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ForgetProfilesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForgetProfilesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ForgetProfilesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ForgetProfilesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetValidateForgetProfilesCriteria returns the ValidateForgetProfilesCriteria field value if set, zero value otherwise.
func (o *ForgetProfilesCriteria) GetValidateForgetProfilesCriteria() ForgetProfilesCriteriaType {
	if o == nil || IsNil(o.ValidateForgetProfilesCriteria) {
		var ret ForgetProfilesCriteriaType
		return ret
	}
	return *o.ValidateForgetProfilesCriteria
}

// GetValidateForgetProfilesCriteriaOk returns a tuple with the ValidateForgetProfilesCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForgetProfilesCriteria) GetValidateForgetProfilesCriteriaOk() (*ForgetProfilesCriteriaType, bool) {
	if o == nil || IsNil(o.ValidateForgetProfilesCriteria) {
		return nil, false
	}
	return o.ValidateForgetProfilesCriteria, true
}

// HasValidateForgetProfilesCriteria returns a boolean if a field has been set.
func (o *ForgetProfilesCriteria) HasValidateForgetProfilesCriteria() bool {
	if o != nil && !IsNil(o.ValidateForgetProfilesCriteria) {
		return true
	}

	return false
}

// SetValidateForgetProfilesCriteria gets a reference to the given ForgetProfilesCriteriaType and assigns it to the ValidateForgetProfilesCriteria field.
func (o *ForgetProfilesCriteria) SetValidateForgetProfilesCriteria(v ForgetProfilesCriteriaType) {
	o.ValidateForgetProfilesCriteria = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ForgetProfilesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForgetProfilesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ForgetProfilesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ForgetProfilesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ForgetProfilesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ForgetProfilesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ValidateForgetProfilesCriteria) {
		toSerialize["validateForgetProfilesCriteria"] = o.ValidateForgetProfilesCriteria
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableForgetProfilesCriteria struct {
	value *ForgetProfilesCriteria
	isSet bool
}

func (v NullableForgetProfilesCriteria) Get() *ForgetProfilesCriteria {
	return v.value
}

func (v *NullableForgetProfilesCriteria) Set(val *ForgetProfilesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableForgetProfilesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableForgetProfilesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableForgetProfilesCriteria(val *ForgetProfilesCriteria) *NullableForgetProfilesCriteria {
	return &NullableForgetProfilesCriteria{value: val, isSet: true}
}

func (v NullableForgetProfilesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableForgetProfilesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


