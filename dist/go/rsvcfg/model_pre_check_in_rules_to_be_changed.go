/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the PreCheckInRulesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PreCheckInRulesToBeChanged{}

// PreCheckInRulesToBeChanged Request object for modifying an existing Pre Check-In Rule
type PreCheckInRulesToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Pre Check-In Rules List
	PreCheckInRules []PreCheckInRuleType `json:"preCheckInRules,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPreCheckInRulesToBeChanged instantiates a new PreCheckInRulesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPreCheckInRulesToBeChanged() *PreCheckInRulesToBeChanged {
	this := PreCheckInRulesToBeChanged{}
	return &this
}

// NewPreCheckInRulesToBeChangedWithDefaults instantiates a new PreCheckInRulesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPreCheckInRulesToBeChangedWithDefaults() *PreCheckInRulesToBeChanged {
	this := PreCheckInRulesToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PreCheckInRulesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PreCheckInRulesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PreCheckInRulesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPreCheckInRules returns the PreCheckInRules field value if set, zero value otherwise.
func (o *PreCheckInRulesToBeChanged) GetPreCheckInRules() []PreCheckInRuleType {
	if o == nil || IsNil(o.PreCheckInRules) {
		var ret []PreCheckInRuleType
		return ret
	}
	return o.PreCheckInRules
}

// GetPreCheckInRulesOk returns a tuple with the PreCheckInRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesToBeChanged) GetPreCheckInRulesOk() ([]PreCheckInRuleType, bool) {
	if o == nil || IsNil(o.PreCheckInRules) {
		return nil, false
	}
	return o.PreCheckInRules, true
}

// HasPreCheckInRules returns a boolean if a field has been set.
func (o *PreCheckInRulesToBeChanged) HasPreCheckInRules() bool {
	if o != nil && !IsNil(o.PreCheckInRules) {
		return true
	}

	return false
}

// SetPreCheckInRules gets a reference to the given []PreCheckInRuleType and assigns it to the PreCheckInRules field.
func (o *PreCheckInRulesToBeChanged) SetPreCheckInRules(v []PreCheckInRuleType) {
	o.PreCheckInRules = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PreCheckInRulesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PreCheckInRulesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PreCheckInRulesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PreCheckInRulesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PreCheckInRulesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PreCheckInRules) {
		toSerialize["preCheckInRules"] = o.PreCheckInRules
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePreCheckInRulesToBeChanged struct {
	value *PreCheckInRulesToBeChanged
	isSet bool
}

func (v NullablePreCheckInRulesToBeChanged) Get() *PreCheckInRulesToBeChanged {
	return v.value
}

func (v *NullablePreCheckInRulesToBeChanged) Set(val *PreCheckInRulesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullablePreCheckInRulesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullablePreCheckInRulesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePreCheckInRulesToBeChanged(val *PreCheckInRulesToBeChanged) *NullablePreCheckInRulesToBeChanged {
	return &NullablePreCheckInRulesToBeChanged{value: val, isSet: true}
}

func (v NullablePreCheckInRulesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePreCheckInRulesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

