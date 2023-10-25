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

// checks if the PreferencesCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PreferencesCopy{}

// PreferencesCopy Request object for copying template preferences to hotel(s).
type PreferencesCopy struct {
	CopyInstructions *ConfigCopyPreferencesType `json:"copyInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPreferencesCopy instantiates a new PreferencesCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPreferencesCopy() *PreferencesCopy {
	this := PreferencesCopy{}
	return &this
}

// NewPreferencesCopyWithDefaults instantiates a new PreferencesCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPreferencesCopyWithDefaults() *PreferencesCopy {
	this := PreferencesCopy{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *PreferencesCopy) GetCopyInstructions() ConfigCopyPreferencesType {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret ConfigCopyPreferencesType
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferencesCopy) GetCopyInstructionsOk() (*ConfigCopyPreferencesType, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *PreferencesCopy) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given ConfigCopyPreferencesType and assigns it to the CopyInstructions field.
func (o *PreferencesCopy) SetCopyInstructions(v ConfigCopyPreferencesType) {
	o.CopyInstructions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PreferencesCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferencesCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PreferencesCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PreferencesCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PreferencesCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferencesCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PreferencesCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PreferencesCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PreferencesCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PreferencesCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePreferencesCopy struct {
	value *PreferencesCopy
	isSet bool
}

func (v NullablePreferencesCopy) Get() *PreferencesCopy {
	return v.value
}

func (v *NullablePreferencesCopy) Set(val *PreferencesCopy) {
	v.value = val
	v.isSet = true
}

func (v NullablePreferencesCopy) IsSet() bool {
	return v.isSet
}

func (v *NullablePreferencesCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePreferencesCopy(val *PreferencesCopy) *NullablePreferencesCopy {
	return &NullablePreferencesCopy{value: val, isSet: true}
}

func (v NullablePreferencesCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePreferencesCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


