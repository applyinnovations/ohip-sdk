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

// checks if the TaxBrackets type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaxBrackets{}

// TaxBrackets struct for TaxBrackets
type TaxBrackets struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Details used for storing information about a tax bracket.
	TaxBrackets []TaxBracketType `json:"taxBrackets,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTaxBrackets instantiates a new TaxBrackets object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaxBrackets() *TaxBrackets {
	this := TaxBrackets{}
	return &this
}

// NewTaxBracketsWithDefaults instantiates a new TaxBrackets object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaxBracketsWithDefaults() *TaxBrackets {
	this := TaxBrackets{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TaxBrackets) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxBrackets) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TaxBrackets) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TaxBrackets) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTaxBrackets returns the TaxBrackets field value if set, zero value otherwise.
func (o *TaxBrackets) GetTaxBrackets() []TaxBracketType {
	if o == nil || IsNil(o.TaxBrackets) {
		var ret []TaxBracketType
		return ret
	}
	return o.TaxBrackets
}

// GetTaxBracketsOk returns a tuple with the TaxBrackets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxBrackets) GetTaxBracketsOk() ([]TaxBracketType, bool) {
	if o == nil || IsNil(o.TaxBrackets) {
		return nil, false
	}
	return o.TaxBrackets, true
}

// HasTaxBrackets returns a boolean if a field has been set.
func (o *TaxBrackets) HasTaxBrackets() bool {
	if o != nil && !IsNil(o.TaxBrackets) {
		return true
	}

	return false
}

// SetTaxBrackets gets a reference to the given []TaxBracketType and assigns it to the TaxBrackets field.
func (o *TaxBrackets) SetTaxBrackets(v []TaxBracketType) {
	o.TaxBrackets = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TaxBrackets) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxBrackets) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TaxBrackets) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TaxBrackets) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TaxBrackets) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaxBrackets) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TaxBrackets) {
		toSerialize["taxBrackets"] = o.TaxBrackets
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTaxBrackets struct {
	value *TaxBrackets
	isSet bool
}

func (v NullableTaxBrackets) Get() *TaxBrackets {
	return v.value
}

func (v *NullableTaxBrackets) Set(val *TaxBrackets) {
	v.value = val
	v.isSet = true
}

func (v NullableTaxBrackets) IsSet() bool {
	return v.isSet
}

func (v *NullableTaxBrackets) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaxBrackets(val *TaxBrackets) *NullableTaxBrackets {
	return &NullableTaxBrackets{value: val, isSet: true}
}

func (v NullableTaxBrackets) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaxBrackets) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

