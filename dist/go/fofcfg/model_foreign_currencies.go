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

// checks if the ForeignCurrencies type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ForeignCurrencies{}

// ForeignCurrencies struct for ForeignCurrencies
type ForeignCurrencies struct {
	// List of the Foreign Currencies to be configured or fetched
	ForeignCurrencies []ForeignCurrencyType `json:"foreignCurrencies,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewForeignCurrencies instantiates a new ForeignCurrencies object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewForeignCurrencies() *ForeignCurrencies {
	this := ForeignCurrencies{}
	return &this
}

// NewForeignCurrenciesWithDefaults instantiates a new ForeignCurrencies object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewForeignCurrenciesWithDefaults() *ForeignCurrencies {
	this := ForeignCurrencies{}
	return &this
}

// GetForeignCurrencies returns the ForeignCurrencies field value if set, zero value otherwise.
func (o *ForeignCurrencies) GetForeignCurrencies() []ForeignCurrencyType {
	if o == nil || IsNil(o.ForeignCurrencies) {
		var ret []ForeignCurrencyType
		return ret
	}
	return o.ForeignCurrencies
}

// GetForeignCurrenciesOk returns a tuple with the ForeignCurrencies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForeignCurrencies) GetForeignCurrenciesOk() ([]ForeignCurrencyType, bool) {
	if o == nil || IsNil(o.ForeignCurrencies) {
		return nil, false
	}
	return o.ForeignCurrencies, true
}

// HasForeignCurrencies returns a boolean if a field has been set.
func (o *ForeignCurrencies) HasForeignCurrencies() bool {
	if o != nil && !IsNil(o.ForeignCurrencies) {
		return true
	}

	return false
}

// SetForeignCurrencies gets a reference to the given []ForeignCurrencyType and assigns it to the ForeignCurrencies field.
func (o *ForeignCurrencies) SetForeignCurrencies(v []ForeignCurrencyType) {
	o.ForeignCurrencies = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ForeignCurrencies) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForeignCurrencies) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ForeignCurrencies) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ForeignCurrencies) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ForeignCurrencies) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForeignCurrencies) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ForeignCurrencies) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ForeignCurrencies) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ForeignCurrencies) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ForeignCurrencies) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ForeignCurrencies) {
		toSerialize["foreignCurrencies"] = o.ForeignCurrencies
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableForeignCurrencies struct {
	value *ForeignCurrencies
	isSet bool
}

func (v NullableForeignCurrencies) Get() *ForeignCurrencies {
	return v.value
}

func (v *NullableForeignCurrencies) Set(val *ForeignCurrencies) {
	v.value = val
	v.isSet = true
}

func (v NullableForeignCurrencies) IsSet() bool {
	return v.isSet
}

func (v *NullableForeignCurrencies) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableForeignCurrencies(val *ForeignCurrencies) *NullableForeignCurrencies {
	return &NullableForeignCurrencies{value: val, isSet: true}
}

func (v NullableForeignCurrencies) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableForeignCurrencies) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

