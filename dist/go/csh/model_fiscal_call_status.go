/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the FiscalCallStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalCallStatus{}

// FiscalCallStatus Check if it will call fiscal or not.
type FiscalCallStatus struct {
	// Flag which contains if its valid or not.
	IsValid *bool `json:"isValid,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFiscalCallStatus instantiates a new FiscalCallStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalCallStatus() *FiscalCallStatus {
	this := FiscalCallStatus{}
	return &this
}

// NewFiscalCallStatusWithDefaults instantiates a new FiscalCallStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalCallStatusWithDefaults() *FiscalCallStatus {
	this := FiscalCallStatus{}
	return &this
}

// GetIsValid returns the IsValid field value if set, zero value otherwise.
func (o *FiscalCallStatus) GetIsValid() bool {
	if o == nil || IsNil(o.IsValid) {
		var ret bool
		return ret
	}
	return *o.IsValid
}

// GetIsValidOk returns a tuple with the IsValid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalCallStatus) GetIsValidOk() (*bool, bool) {
	if o == nil || IsNil(o.IsValid) {
		return nil, false
	}
	return o.IsValid, true
}

// HasIsValid returns a boolean if a field has been set.
func (o *FiscalCallStatus) HasIsValid() bool {
	if o != nil && !IsNil(o.IsValid) {
		return true
	}

	return false
}

// SetIsValid gets a reference to the given bool and assigns it to the IsValid field.
func (o *FiscalCallStatus) SetIsValid(v bool) {
	o.IsValid = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FiscalCallStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalCallStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FiscalCallStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FiscalCallStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FiscalCallStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalCallStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FiscalCallStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FiscalCallStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FiscalCallStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalCallStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.IsValid) {
		toSerialize["isValid"] = o.IsValid
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFiscalCallStatus struct {
	value *FiscalCallStatus
	isSet bool
}

func (v NullableFiscalCallStatus) Get() *FiscalCallStatus {
	return v.value
}

func (v *NullableFiscalCallStatus) Set(val *FiscalCallStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalCallStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalCallStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalCallStatus(val *FiscalCallStatus) *NullableFiscalCallStatus {
	return &NullableFiscalCallStatus{value: val, isSet: true}
}

func (v NullableFiscalCallStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalCallStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

