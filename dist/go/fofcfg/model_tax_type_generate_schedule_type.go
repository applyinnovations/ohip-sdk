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

// checks if the TaxTypeGenerateScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaxTypeGenerateScheduleType{}

// TaxTypeGenerateScheduleType Defines the Calculation Rule for the Tax Type for a specific date schedule
type TaxTypeGenerateScheduleType struct {
	Rule *TaxTypeCalcRuleType `json:"rule,omitempty"`
	// Date when this schedule will be effective.
	StartDate *string `json:"startDate,omitempty"`
}

// NewTaxTypeGenerateScheduleType instantiates a new TaxTypeGenerateScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaxTypeGenerateScheduleType() *TaxTypeGenerateScheduleType {
	this := TaxTypeGenerateScheduleType{}
	return &this
}

// NewTaxTypeGenerateScheduleTypeWithDefaults instantiates a new TaxTypeGenerateScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaxTypeGenerateScheduleTypeWithDefaults() *TaxTypeGenerateScheduleType {
	this := TaxTypeGenerateScheduleType{}
	return &this
}

// GetRule returns the Rule field value if set, zero value otherwise.
func (o *TaxTypeGenerateScheduleType) GetRule() TaxTypeCalcRuleType {
	if o == nil || IsNil(o.Rule) {
		var ret TaxTypeCalcRuleType
		return ret
	}
	return *o.Rule
}

// GetRuleOk returns a tuple with the Rule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxTypeGenerateScheduleType) GetRuleOk() (*TaxTypeCalcRuleType, bool) {
	if o == nil || IsNil(o.Rule) {
		return nil, false
	}
	return o.Rule, true
}

// HasRule returns a boolean if a field has been set.
func (o *TaxTypeGenerateScheduleType) HasRule() bool {
	if o != nil && !IsNil(o.Rule) {
		return true
	}

	return false
}

// SetRule gets a reference to the given TaxTypeCalcRuleType and assigns it to the Rule field.
func (o *TaxTypeGenerateScheduleType) SetRule(v TaxTypeCalcRuleType) {
	o.Rule = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *TaxTypeGenerateScheduleType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxTypeGenerateScheduleType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *TaxTypeGenerateScheduleType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *TaxTypeGenerateScheduleType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o TaxTypeGenerateScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaxTypeGenerateScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Rule) {
		toSerialize["rule"] = o.Rule
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableTaxTypeGenerateScheduleType struct {
	value *TaxTypeGenerateScheduleType
	isSet bool
}

func (v NullableTaxTypeGenerateScheduleType) Get() *TaxTypeGenerateScheduleType {
	return v.value
}

func (v *NullableTaxTypeGenerateScheduleType) Set(val *TaxTypeGenerateScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableTaxTypeGenerateScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableTaxTypeGenerateScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaxTypeGenerateScheduleType(val *TaxTypeGenerateScheduleType) *NullableTaxTypeGenerateScheduleType {
	return &NullableTaxTypeGenerateScheduleType{value: val, isSet: true}
}

func (v NullableTaxTypeGenerateScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaxTypeGenerateScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

