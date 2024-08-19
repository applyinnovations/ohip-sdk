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

// checks if the FiscalGuestTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalGuestTypesCriteria{}

// FiscalGuestTypesCriteria Request object for creating Fiscal Guest Types.
type FiscalGuestTypesCriteria struct {
	// List of Fiscal Guest Types.
	FiscalGuestTypes []FiscalGuestTypeType `json:"fiscalGuestTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFiscalGuestTypesCriteria instantiates a new FiscalGuestTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalGuestTypesCriteria() *FiscalGuestTypesCriteria {
	this := FiscalGuestTypesCriteria{}
	return &this
}

// NewFiscalGuestTypesCriteriaWithDefaults instantiates a new FiscalGuestTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalGuestTypesCriteriaWithDefaults() *FiscalGuestTypesCriteria {
	this := FiscalGuestTypesCriteria{}
	return &this
}

// GetFiscalGuestTypes returns the FiscalGuestTypes field value if set, zero value otherwise.
func (o *FiscalGuestTypesCriteria) GetFiscalGuestTypes() []FiscalGuestTypeType {
	if o == nil || IsNil(o.FiscalGuestTypes) {
		var ret []FiscalGuestTypeType
		return ret
	}
	return o.FiscalGuestTypes
}

// GetFiscalGuestTypesOk returns a tuple with the FiscalGuestTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalGuestTypesCriteria) GetFiscalGuestTypesOk() ([]FiscalGuestTypeType, bool) {
	if o == nil || IsNil(o.FiscalGuestTypes) {
		return nil, false
	}
	return o.FiscalGuestTypes, true
}

// HasFiscalGuestTypes returns a boolean if a field has been set.
func (o *FiscalGuestTypesCriteria) HasFiscalGuestTypes() bool {
	if o != nil && !IsNil(o.FiscalGuestTypes) {
		return true
	}

	return false
}

// SetFiscalGuestTypes gets a reference to the given []FiscalGuestTypeType and assigns it to the FiscalGuestTypes field.
func (o *FiscalGuestTypesCriteria) SetFiscalGuestTypes(v []FiscalGuestTypeType) {
	o.FiscalGuestTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FiscalGuestTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalGuestTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FiscalGuestTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FiscalGuestTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FiscalGuestTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalGuestTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FiscalGuestTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FiscalGuestTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FiscalGuestTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalGuestTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalGuestTypes) {
		toSerialize["fiscalGuestTypes"] = o.FiscalGuestTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFiscalGuestTypesCriteria struct {
	value *FiscalGuestTypesCriteria
	isSet bool
}

func (v NullableFiscalGuestTypesCriteria) Get() *FiscalGuestTypesCriteria {
	return v.value
}

func (v *NullableFiscalGuestTypesCriteria) Set(val *FiscalGuestTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalGuestTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalGuestTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalGuestTypesCriteria(val *FiscalGuestTypesCriteria) *NullableFiscalGuestTypesCriteria {
	return &NullableFiscalGuestTypesCriteria{value: val, isSet: true}
}

func (v NullableFiscalGuestTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalGuestTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


