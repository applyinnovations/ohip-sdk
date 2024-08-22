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

// checks if the AutoSettleCompFoliosStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoSettleCompFoliosStatus{}

// AutoSettleCompFoliosStatus Response for auto settle comp folios. This includes collection of auto settled comp folios.
type AutoSettleCompFoliosStatus struct {
	// Information about comp folio that was auto settled.
	Folios []AutoSettleCompFolioType `json:"folios,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAutoSettleCompFoliosStatus instantiates a new AutoSettleCompFoliosStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoSettleCompFoliosStatus() *AutoSettleCompFoliosStatus {
	this := AutoSettleCompFoliosStatus{}
	return &this
}

// NewAutoSettleCompFoliosStatusWithDefaults instantiates a new AutoSettleCompFoliosStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoSettleCompFoliosStatusWithDefaults() *AutoSettleCompFoliosStatus {
	this := AutoSettleCompFoliosStatus{}
	return &this
}

// GetFolios returns the Folios field value if set, zero value otherwise.
func (o *AutoSettleCompFoliosStatus) GetFolios() []AutoSettleCompFolioType {
	if o == nil || IsNil(o.Folios) {
		var ret []AutoSettleCompFolioType
		return ret
	}
	return o.Folios
}

// GetFoliosOk returns a tuple with the Folios field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettleCompFoliosStatus) GetFoliosOk() ([]AutoSettleCompFolioType, bool) {
	if o == nil || IsNil(o.Folios) {
		return nil, false
	}
	return o.Folios, true
}

// HasFolios returns a boolean if a field has been set.
func (o *AutoSettleCompFoliosStatus) HasFolios() bool {
	if o != nil && !IsNil(o.Folios) {
		return true
	}

	return false
}

// SetFolios gets a reference to the given []AutoSettleCompFolioType and assigns it to the Folios field.
func (o *AutoSettleCompFoliosStatus) SetFolios(v []AutoSettleCompFolioType) {
	o.Folios = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AutoSettleCompFoliosStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettleCompFoliosStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AutoSettleCompFoliosStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AutoSettleCompFoliosStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AutoSettleCompFoliosStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoSettleCompFoliosStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Folios) {
		toSerialize["folios"] = o.Folios
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAutoSettleCompFoliosStatus struct {
	value *AutoSettleCompFoliosStatus
	isSet bool
}

func (v NullableAutoSettleCompFoliosStatus) Get() *AutoSettleCompFoliosStatus {
	return v.value
}

func (v *NullableAutoSettleCompFoliosStatus) Set(val *AutoSettleCompFoliosStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoSettleCompFoliosStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoSettleCompFoliosStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoSettleCompFoliosStatus(val *AutoSettleCompFoliosStatus) *NullableAutoSettleCompFoliosStatus {
	return &NullableAutoSettleCompFoliosStatus{value: val, isSet: true}
}

func (v NullableAutoSettleCompFoliosStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoSettleCompFoliosStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


