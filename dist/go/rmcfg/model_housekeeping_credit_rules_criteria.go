/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingCreditRulesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingCreditRulesCriteria{}

// HousekeepingCreditRulesCriteria Request object for creating housekeeping credit rules.
type HousekeepingCreditRulesCriteria struct {
	// The information of housekeeping credit rule for configuration.
	CreditRules []HousekeepingCreditRuleType `json:"creditRules,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHousekeepingCreditRulesCriteria instantiates a new HousekeepingCreditRulesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingCreditRulesCriteria() *HousekeepingCreditRulesCriteria {
	this := HousekeepingCreditRulesCriteria{}
	return &this
}

// NewHousekeepingCreditRulesCriteriaWithDefaults instantiates a new HousekeepingCreditRulesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingCreditRulesCriteriaWithDefaults() *HousekeepingCreditRulesCriteria {
	this := HousekeepingCreditRulesCriteria{}
	return &this
}

// GetCreditRules returns the CreditRules field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesCriteria) GetCreditRules() []HousekeepingCreditRuleType {
	if o == nil || IsNil(o.CreditRules) {
		var ret []HousekeepingCreditRuleType
		return ret
	}
	return o.CreditRules
}

// GetCreditRulesOk returns a tuple with the CreditRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesCriteria) GetCreditRulesOk() ([]HousekeepingCreditRuleType, bool) {
	if o == nil || IsNil(o.CreditRules) {
		return nil, false
	}
	return o.CreditRules, true
}

// HasCreditRules returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesCriteria) HasCreditRules() bool {
	if o != nil && !IsNil(o.CreditRules) {
		return true
	}

	return false
}

// SetCreditRules gets a reference to the given []HousekeepingCreditRuleType and assigns it to the CreditRules field.
func (o *HousekeepingCreditRulesCriteria) SetCreditRules(v []HousekeepingCreditRuleType) {
	o.CreditRules = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HousekeepingCreditRulesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HousekeepingCreditRulesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HousekeepingCreditRulesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingCreditRulesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreditRules) {
		toSerialize["creditRules"] = o.CreditRules
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHousekeepingCreditRulesCriteria struct {
	value *HousekeepingCreditRulesCriteria
	isSet bool
}

func (v NullableHousekeepingCreditRulesCriteria) Get() *HousekeepingCreditRulesCriteria {
	return v.value
}

func (v *NullableHousekeepingCreditRulesCriteria) Set(val *HousekeepingCreditRulesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingCreditRulesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingCreditRulesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingCreditRulesCriteria(val *HousekeepingCreditRulesCriteria) *NullableHousekeepingCreditRulesCriteria {
	return &NullableHousekeepingCreditRulesCriteria{value: val, isSet: true}
}

func (v NullableHousekeepingCreditRulesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingCreditRulesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


