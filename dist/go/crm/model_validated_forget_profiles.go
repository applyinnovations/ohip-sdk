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

// checks if the ValidatedForgetProfiles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ValidatedForgetProfiles{}

// ValidatedForgetProfiles Response object for validating profiles for forgetting.
type ValidatedForgetProfiles struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Result of processing/validation for forgetting a profile.
	ValidateForgetProfilesResults []ForgetProfileResultType `json:"validateForgetProfilesResults,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewValidatedForgetProfiles instantiates a new ValidatedForgetProfiles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewValidatedForgetProfiles() *ValidatedForgetProfiles {
	this := ValidatedForgetProfiles{}
	return &this
}

// NewValidatedForgetProfilesWithDefaults instantiates a new ValidatedForgetProfiles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewValidatedForgetProfilesWithDefaults() *ValidatedForgetProfiles {
	this := ValidatedForgetProfiles{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ValidatedForgetProfiles) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidatedForgetProfiles) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ValidatedForgetProfiles) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ValidatedForgetProfiles) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetValidateForgetProfilesResults returns the ValidateForgetProfilesResults field value if set, zero value otherwise.
func (o *ValidatedForgetProfiles) GetValidateForgetProfilesResults() []ForgetProfileResultType {
	if o == nil || IsNil(o.ValidateForgetProfilesResults) {
		var ret []ForgetProfileResultType
		return ret
	}
	return o.ValidateForgetProfilesResults
}

// GetValidateForgetProfilesResultsOk returns a tuple with the ValidateForgetProfilesResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidatedForgetProfiles) GetValidateForgetProfilesResultsOk() ([]ForgetProfileResultType, bool) {
	if o == nil || IsNil(o.ValidateForgetProfilesResults) {
		return nil, false
	}
	return o.ValidateForgetProfilesResults, true
}

// HasValidateForgetProfilesResults returns a boolean if a field has been set.
func (o *ValidatedForgetProfiles) HasValidateForgetProfilesResults() bool {
	if o != nil && !IsNil(o.ValidateForgetProfilesResults) {
		return true
	}

	return false
}

// SetValidateForgetProfilesResults gets a reference to the given []ForgetProfileResultType and assigns it to the ValidateForgetProfilesResults field.
func (o *ValidatedForgetProfiles) SetValidateForgetProfilesResults(v []ForgetProfileResultType) {
	o.ValidateForgetProfilesResults = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ValidatedForgetProfiles) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidatedForgetProfiles) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ValidatedForgetProfiles) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ValidatedForgetProfiles) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ValidatedForgetProfiles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ValidatedForgetProfiles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ValidateForgetProfilesResults) {
		toSerialize["validateForgetProfilesResults"] = o.ValidateForgetProfilesResults
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableValidatedForgetProfiles struct {
	value *ValidatedForgetProfiles
	isSet bool
}

func (v NullableValidatedForgetProfiles) Get() *ValidatedForgetProfiles {
	return v.value
}

func (v *NullableValidatedForgetProfiles) Set(val *ValidatedForgetProfiles) {
	v.value = val
	v.isSet = true
}

func (v NullableValidatedForgetProfiles) IsSet() bool {
	return v.isSet
}

func (v *NullableValidatedForgetProfiles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableValidatedForgetProfiles(val *ValidatedForgetProfiles) *NullableValidatedForgetProfiles {
	return &NullableValidatedForgetProfiles{value: val, isSet: true}
}

func (v NullableValidatedForgetProfiles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableValidatedForgetProfiles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


