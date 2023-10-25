/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the PreCheckInRulesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PreCheckInRulesCriteria{}

// PreCheckInRulesCriteria Request object for creating a Pre Check-In Rule
type PreCheckInRulesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Pre Check-In Rules List
	PreCheckInRules []PreCheckInRuleType `json:"preCheckInRules,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPreCheckInRulesCriteria instantiates a new PreCheckInRulesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPreCheckInRulesCriteria() *PreCheckInRulesCriteria {
	this := PreCheckInRulesCriteria{}
	return &this
}

// NewPreCheckInRulesCriteriaWithDefaults instantiates a new PreCheckInRulesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPreCheckInRulesCriteriaWithDefaults() *PreCheckInRulesCriteria {
	this := PreCheckInRulesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PreCheckInRulesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PreCheckInRulesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PreCheckInRulesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPreCheckInRules returns the PreCheckInRules field value if set, zero value otherwise.
func (o *PreCheckInRulesCriteria) GetPreCheckInRules() []PreCheckInRuleType {
	if o == nil || IsNil(o.PreCheckInRules) {
		var ret []PreCheckInRuleType
		return ret
	}
	return o.PreCheckInRules
}

// GetPreCheckInRulesOk returns a tuple with the PreCheckInRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesCriteria) GetPreCheckInRulesOk() ([]PreCheckInRuleType, bool) {
	if o == nil || IsNil(o.PreCheckInRules) {
		return nil, false
	}
	return o.PreCheckInRules, true
}

// HasPreCheckInRules returns a boolean if a field has been set.
func (o *PreCheckInRulesCriteria) HasPreCheckInRules() bool {
	if o != nil && !IsNil(o.PreCheckInRules) {
		return true
	}

	return false
}

// SetPreCheckInRules gets a reference to the given []PreCheckInRuleType and assigns it to the PreCheckInRules field.
func (o *PreCheckInRulesCriteria) SetPreCheckInRules(v []PreCheckInRuleType) {
	o.PreCheckInRules = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PreCheckInRulesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreCheckInRulesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PreCheckInRulesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PreCheckInRulesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PreCheckInRulesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PreCheckInRulesCriteria) ToMap() (map[string]interface{}, error) {
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

type NullablePreCheckInRulesCriteria struct {
	value *PreCheckInRulesCriteria
	isSet bool
}

func (v NullablePreCheckInRulesCriteria) Get() *PreCheckInRulesCriteria {
	return v.value
}

func (v *NullablePreCheckInRulesCriteria) Set(val *PreCheckInRulesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullablePreCheckInRulesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullablePreCheckInRulesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePreCheckInRulesCriteria(val *PreCheckInRulesCriteria) *NullablePreCheckInRulesCriteria {
	return &NullablePreCheckInRulesCriteria{value: val, isSet: true}
}

func (v NullablePreCheckInRulesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePreCheckInRulesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


