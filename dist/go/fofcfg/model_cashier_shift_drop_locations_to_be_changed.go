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

// checks if the CashierShiftDropLocationsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierShiftDropLocationsToBeChanged{}

// CashierShiftDropLocationsToBeChanged Request object for changing Cashier Shift Drop Locations.
type CashierShiftDropLocationsToBeChanged struct {
	// List of Cashier Shift Drop Locations.
	CashierShiftDropLocations []CashierShiftDropLocationType `json:"cashierShiftDropLocations,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCashierShiftDropLocationsToBeChanged instantiates a new CashierShiftDropLocationsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierShiftDropLocationsToBeChanged() *CashierShiftDropLocationsToBeChanged {
	this := CashierShiftDropLocationsToBeChanged{}
	return &this
}

// NewCashierShiftDropLocationsToBeChangedWithDefaults instantiates a new CashierShiftDropLocationsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierShiftDropLocationsToBeChangedWithDefaults() *CashierShiftDropLocationsToBeChanged {
	this := CashierShiftDropLocationsToBeChanged{}
	return &this
}

// GetCashierShiftDropLocations returns the CashierShiftDropLocations field value if set, zero value otherwise.
func (o *CashierShiftDropLocationsToBeChanged) GetCashierShiftDropLocations() []CashierShiftDropLocationType {
	if o == nil || IsNil(o.CashierShiftDropLocations) {
		var ret []CashierShiftDropLocationType
		return ret
	}
	return o.CashierShiftDropLocations
}

// GetCashierShiftDropLocationsOk returns a tuple with the CashierShiftDropLocations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierShiftDropLocationsToBeChanged) GetCashierShiftDropLocationsOk() ([]CashierShiftDropLocationType, bool) {
	if o == nil || IsNil(o.CashierShiftDropLocations) {
		return nil, false
	}
	return o.CashierShiftDropLocations, true
}

// HasCashierShiftDropLocations returns a boolean if a field has been set.
func (o *CashierShiftDropLocationsToBeChanged) HasCashierShiftDropLocations() bool {
	if o != nil && !IsNil(o.CashierShiftDropLocations) {
		return true
	}

	return false
}

// SetCashierShiftDropLocations gets a reference to the given []CashierShiftDropLocationType and assigns it to the CashierShiftDropLocations field.
func (o *CashierShiftDropLocationsToBeChanged) SetCashierShiftDropLocations(v []CashierShiftDropLocationType) {
	o.CashierShiftDropLocations = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CashierShiftDropLocationsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierShiftDropLocationsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CashierShiftDropLocationsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CashierShiftDropLocationsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CashierShiftDropLocationsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierShiftDropLocationsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CashierShiftDropLocationsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CashierShiftDropLocationsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CashierShiftDropLocationsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierShiftDropLocationsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierShiftDropLocations) {
		toSerialize["cashierShiftDropLocations"] = o.CashierShiftDropLocations
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCashierShiftDropLocationsToBeChanged struct {
	value *CashierShiftDropLocationsToBeChanged
	isSet bool
}

func (v NullableCashierShiftDropLocationsToBeChanged) Get() *CashierShiftDropLocationsToBeChanged {
	return v.value
}

func (v *NullableCashierShiftDropLocationsToBeChanged) Set(val *CashierShiftDropLocationsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierShiftDropLocationsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierShiftDropLocationsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierShiftDropLocationsToBeChanged(val *CashierShiftDropLocationsToBeChanged) *NullableCashierShiftDropLocationsToBeChanged {
	return &NullableCashierShiftDropLocationsToBeChanged{value: val, isSet: true}
}

func (v NullableCashierShiftDropLocationsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierShiftDropLocationsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


