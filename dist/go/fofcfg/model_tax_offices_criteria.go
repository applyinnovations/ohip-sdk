/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TaxOfficesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaxOfficesCriteria{}

// TaxOfficesCriteria Request object for creating Tax Offices.
type TaxOfficesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Tax Offices.
	TaxOffices []TaxOfficeType `json:"taxOffices,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTaxOfficesCriteria instantiates a new TaxOfficesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaxOfficesCriteria() *TaxOfficesCriteria {
	this := TaxOfficesCriteria{}
	return &this
}

// NewTaxOfficesCriteriaWithDefaults instantiates a new TaxOfficesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaxOfficesCriteriaWithDefaults() *TaxOfficesCriteria {
	this := TaxOfficesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TaxOfficesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxOfficesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TaxOfficesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TaxOfficesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTaxOffices returns the TaxOffices field value if set, zero value otherwise.
func (o *TaxOfficesCriteria) GetTaxOffices() []TaxOfficeType {
	if o == nil || IsNil(o.TaxOffices) {
		var ret []TaxOfficeType
		return ret
	}
	return o.TaxOffices
}

// GetTaxOfficesOk returns a tuple with the TaxOffices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxOfficesCriteria) GetTaxOfficesOk() ([]TaxOfficeType, bool) {
	if o == nil || IsNil(o.TaxOffices) {
		return nil, false
	}
	return o.TaxOffices, true
}

// HasTaxOffices returns a boolean if a field has been set.
func (o *TaxOfficesCriteria) HasTaxOffices() bool {
	if o != nil && !IsNil(o.TaxOffices) {
		return true
	}

	return false
}

// SetTaxOffices gets a reference to the given []TaxOfficeType and assigns it to the TaxOffices field.
func (o *TaxOfficesCriteria) SetTaxOffices(v []TaxOfficeType) {
	o.TaxOffices = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TaxOfficesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxOfficesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TaxOfficesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TaxOfficesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TaxOfficesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaxOfficesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TaxOffices) {
		toSerialize["taxOffices"] = o.TaxOffices
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTaxOfficesCriteria struct {
	value *TaxOfficesCriteria
	isSet bool
}

func (v NullableTaxOfficesCriteria) Get() *TaxOfficesCriteria {
	return v.value
}

func (v *NullableTaxOfficesCriteria) Set(val *TaxOfficesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTaxOfficesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTaxOfficesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaxOfficesCriteria(val *TaxOfficesCriteria) *NullableTaxOfficesCriteria {
	return &NullableTaxOfficesCriteria{value: val, isSet: true}
}

func (v NullableTaxOfficesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaxOfficesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


