/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the GUINumberRulesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GUINumberRulesDetails{}

// GUINumberRulesDetails struct for GUINumberRulesDetails
type GUINumberRulesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of GUI number rules
	Rules []GUINumberRule `json:"rules,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGUINumberRulesDetails instantiates a new GUINumberRulesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGUINumberRulesDetails() *GUINumberRulesDetails {
	this := GUINumberRulesDetails{}
	return &this
}

// NewGUINumberRulesDetailsWithDefaults instantiates a new GUINumberRulesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGUINumberRulesDetailsWithDefaults() *GUINumberRulesDetails {
	this := GUINumberRulesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GUINumberRulesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GUINumberRulesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GUINumberRulesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GUINumberRulesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRules returns the Rules field value if set, zero value otherwise.
func (o *GUINumberRulesDetails) GetRules() []GUINumberRule {
	if o == nil || IsNil(o.Rules) {
		var ret []GUINumberRule
		return ret
	}
	return o.Rules
}

// GetRulesOk returns a tuple with the Rules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GUINumberRulesDetails) GetRulesOk() ([]GUINumberRule, bool) {
	if o == nil || IsNil(o.Rules) {
		return nil, false
	}
	return o.Rules, true
}

// HasRules returns a boolean if a field has been set.
func (o *GUINumberRulesDetails) HasRules() bool {
	if o != nil && !IsNil(o.Rules) {
		return true
	}

	return false
}

// SetRules gets a reference to the given []GUINumberRule and assigns it to the Rules field.
func (o *GUINumberRulesDetails) SetRules(v []GUINumberRule) {
	o.Rules = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GUINumberRulesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GUINumberRulesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GUINumberRulesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GUINumberRulesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GUINumberRulesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GUINumberRulesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Rules) {
		toSerialize["rules"] = o.Rules
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGUINumberRulesDetails struct {
	value *GUINumberRulesDetails
	isSet bool
}

func (v NullableGUINumberRulesDetails) Get() *GUINumberRulesDetails {
	return v.value
}

func (v *NullableGUINumberRulesDetails) Set(val *GUINumberRulesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGUINumberRulesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGUINumberRulesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGUINumberRulesDetails(val *GUINumberRulesDetails) *NullableGUINumberRulesDetails {
	return &NullableGUINumberRulesDetails{value: val, isSet: true}
}

func (v NullableGUINumberRulesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGUINumberRulesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

