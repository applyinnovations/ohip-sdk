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

// checks if the DefaultPaymentMethodRule type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DefaultPaymentMethodRule{}

// DefaultPaymentMethodRule struct for DefaultPaymentMethodRule
type DefaultPaymentMethodRule struct {
	Links []InstanceLink `json:"links,omitempty"`
	Rule *PaymentMethodValidationRuleType `json:"rule,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDefaultPaymentMethodRule instantiates a new DefaultPaymentMethodRule object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDefaultPaymentMethodRule() *DefaultPaymentMethodRule {
	this := DefaultPaymentMethodRule{}
	return &this
}

// NewDefaultPaymentMethodRuleWithDefaults instantiates a new DefaultPaymentMethodRule object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDefaultPaymentMethodRuleWithDefaults() *DefaultPaymentMethodRule {
	this := DefaultPaymentMethodRule{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DefaultPaymentMethodRule) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultPaymentMethodRule) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DefaultPaymentMethodRule) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DefaultPaymentMethodRule) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRule returns the Rule field value if set, zero value otherwise.
func (o *DefaultPaymentMethodRule) GetRule() PaymentMethodValidationRuleType {
	if o == nil || IsNil(o.Rule) {
		var ret PaymentMethodValidationRuleType
		return ret
	}
	return *o.Rule
}

// GetRuleOk returns a tuple with the Rule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultPaymentMethodRule) GetRuleOk() (*PaymentMethodValidationRuleType, bool) {
	if o == nil || IsNil(o.Rule) {
		return nil, false
	}
	return o.Rule, true
}

// HasRule returns a boolean if a field has been set.
func (o *DefaultPaymentMethodRule) HasRule() bool {
	if o != nil && !IsNil(o.Rule) {
		return true
	}

	return false
}

// SetRule gets a reference to the given PaymentMethodValidationRuleType and assigns it to the Rule field.
func (o *DefaultPaymentMethodRule) SetRule(v PaymentMethodValidationRuleType) {
	o.Rule = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DefaultPaymentMethodRule) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultPaymentMethodRule) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DefaultPaymentMethodRule) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DefaultPaymentMethodRule) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DefaultPaymentMethodRule) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DefaultPaymentMethodRule) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Rule) {
		toSerialize["rule"] = o.Rule
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDefaultPaymentMethodRule struct {
	value *DefaultPaymentMethodRule
	isSet bool
}

func (v NullableDefaultPaymentMethodRule) Get() *DefaultPaymentMethodRule {
	return v.value
}

func (v *NullableDefaultPaymentMethodRule) Set(val *DefaultPaymentMethodRule) {
	v.value = val
	v.isSet = true
}

func (v NullableDefaultPaymentMethodRule) IsSet() bool {
	return v.isSet
}

func (v *NullableDefaultPaymentMethodRule) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDefaultPaymentMethodRule(val *DefaultPaymentMethodRule) *NullableDefaultPaymentMethodRule {
	return &NullableDefaultPaymentMethodRule{value: val, isSet: true}
}

func (v NullableDefaultPaymentMethodRule) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDefaultPaymentMethodRule) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

