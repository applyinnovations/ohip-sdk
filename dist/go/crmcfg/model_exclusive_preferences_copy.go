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

// checks if the ExclusivePreferencesCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExclusivePreferencesCopy{}

// ExclusivePreferencesCopy Request object for copying template Exclusive preferences to hotel(s).
type ExclusivePreferencesCopy struct {
	CopyInstructions *ConfigCopyExclusivePreferencesType `json:"copyInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewExclusivePreferencesCopy instantiates a new ExclusivePreferencesCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExclusivePreferencesCopy() *ExclusivePreferencesCopy {
	this := ExclusivePreferencesCopy{}
	return &this
}

// NewExclusivePreferencesCopyWithDefaults instantiates a new ExclusivePreferencesCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExclusivePreferencesCopyWithDefaults() *ExclusivePreferencesCopy {
	this := ExclusivePreferencesCopy{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *ExclusivePreferencesCopy) GetCopyInstructions() ConfigCopyExclusivePreferencesType {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret ConfigCopyExclusivePreferencesType
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExclusivePreferencesCopy) GetCopyInstructionsOk() (*ConfigCopyExclusivePreferencesType, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *ExclusivePreferencesCopy) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given ConfigCopyExclusivePreferencesType and assigns it to the CopyInstructions field.
func (o *ExclusivePreferencesCopy) SetCopyInstructions(v ConfigCopyExclusivePreferencesType) {
	o.CopyInstructions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ExclusivePreferencesCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExclusivePreferencesCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ExclusivePreferencesCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ExclusivePreferencesCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ExclusivePreferencesCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExclusivePreferencesCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ExclusivePreferencesCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ExclusivePreferencesCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ExclusivePreferencesCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExclusivePreferencesCopy) ToMap() (map[string]interface{}, error) {
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

type NullableExclusivePreferencesCopy struct {
	value *ExclusivePreferencesCopy
	isSet bool
}

func (v NullableExclusivePreferencesCopy) Get() *ExclusivePreferencesCopy {
	return v.value
}

func (v *NullableExclusivePreferencesCopy) Set(val *ExclusivePreferencesCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableExclusivePreferencesCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableExclusivePreferencesCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExclusivePreferencesCopy(val *ExclusivePreferencesCopy) *NullableExclusivePreferencesCopy {
	return &NullableExclusivePreferencesCopy{value: val, isSet: true}
}

func (v NullableExclusivePreferencesCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExclusivePreferencesCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


