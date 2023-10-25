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

// checks if the UpsellRulesToTestDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpsellRulesToTestDetails{}

// UpsellRulesToTestDetails Response object for testing upsell rules.
type UpsellRulesToTestDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// This type holds a collection of upsell rules which are returned on testing a reservation.
	UpsellRules []ConfigTestUpsellRuleType `json:"upsellRules,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewUpsellRulesToTestDetails instantiates a new UpsellRulesToTestDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpsellRulesToTestDetails() *UpsellRulesToTestDetails {
	this := UpsellRulesToTestDetails{}
	return &this
}

// NewUpsellRulesToTestDetailsWithDefaults instantiates a new UpsellRulesToTestDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpsellRulesToTestDetailsWithDefaults() *UpsellRulesToTestDetails {
	this := UpsellRulesToTestDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *UpsellRulesToTestDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellRulesToTestDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *UpsellRulesToTestDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *UpsellRulesToTestDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetUpsellRules returns the UpsellRules field value if set, zero value otherwise.
func (o *UpsellRulesToTestDetails) GetUpsellRules() []ConfigTestUpsellRuleType {
	if o == nil || IsNil(o.UpsellRules) {
		var ret []ConfigTestUpsellRuleType
		return ret
	}
	return o.UpsellRules
}

// GetUpsellRulesOk returns a tuple with the UpsellRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellRulesToTestDetails) GetUpsellRulesOk() ([]ConfigTestUpsellRuleType, bool) {
	if o == nil || IsNil(o.UpsellRules) {
		return nil, false
	}
	return o.UpsellRules, true
}

// HasUpsellRules returns a boolean if a field has been set.
func (o *UpsellRulesToTestDetails) HasUpsellRules() bool {
	if o != nil && !IsNil(o.UpsellRules) {
		return true
	}

	return false
}

// SetUpsellRules gets a reference to the given []ConfigTestUpsellRuleType and assigns it to the UpsellRules field.
func (o *UpsellRulesToTestDetails) SetUpsellRules(v []ConfigTestUpsellRuleType) {
	o.UpsellRules = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *UpsellRulesToTestDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellRulesToTestDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *UpsellRulesToTestDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *UpsellRulesToTestDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o UpsellRulesToTestDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpsellRulesToTestDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.UpsellRules) {
		toSerialize["upsellRules"] = o.UpsellRules
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableUpsellRulesToTestDetails struct {
	value *UpsellRulesToTestDetails
	isSet bool
}

func (v NullableUpsellRulesToTestDetails) Get() *UpsellRulesToTestDetails {
	return v.value
}

func (v *NullableUpsellRulesToTestDetails) Set(val *UpsellRulesToTestDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableUpsellRulesToTestDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableUpsellRulesToTestDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpsellRulesToTestDetails(val *UpsellRulesToTestDetails) *NullableUpsellRulesToTestDetails {
	return &NullableUpsellRulesToTestDetails{value: val, isSet: true}
}

func (v NullableUpsellRulesToTestDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpsellRulesToTestDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


