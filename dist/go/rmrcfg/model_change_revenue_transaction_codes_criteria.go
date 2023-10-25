/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the ChangeRevenueTransactionCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeRevenueTransactionCodesCriteria{}

// ChangeRevenueTransactionCodesCriteria Request object for updating the rotation revenue status of a transaction code for a given property.
type ChangeRevenueTransactionCodesCriteria struct {
	RevenueTransactionCodes *RotationRevenueTransactionCodesChangeType `json:"revenueTransactionCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeRevenueTransactionCodesCriteria instantiates a new ChangeRevenueTransactionCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeRevenueTransactionCodesCriteria() *ChangeRevenueTransactionCodesCriteria {
	this := ChangeRevenueTransactionCodesCriteria{}
	return &this
}

// NewChangeRevenueTransactionCodesCriteriaWithDefaults instantiates a new ChangeRevenueTransactionCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeRevenueTransactionCodesCriteriaWithDefaults() *ChangeRevenueTransactionCodesCriteria {
	this := ChangeRevenueTransactionCodesCriteria{}
	return &this
}

// GetRevenueTransactionCodes returns the RevenueTransactionCodes field value if set, zero value otherwise.
func (o *ChangeRevenueTransactionCodesCriteria) GetRevenueTransactionCodes() RotationRevenueTransactionCodesChangeType {
	if o == nil || IsNil(o.RevenueTransactionCodes) {
		var ret RotationRevenueTransactionCodesChangeType
		return ret
	}
	return *o.RevenueTransactionCodes
}

// GetRevenueTransactionCodesOk returns a tuple with the RevenueTransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRevenueTransactionCodesCriteria) GetRevenueTransactionCodesOk() (*RotationRevenueTransactionCodesChangeType, bool) {
	if o == nil || IsNil(o.RevenueTransactionCodes) {
		return nil, false
	}
	return o.RevenueTransactionCodes, true
}

// HasRevenueTransactionCodes returns a boolean if a field has been set.
func (o *ChangeRevenueTransactionCodesCriteria) HasRevenueTransactionCodes() bool {
	if o != nil && !IsNil(o.RevenueTransactionCodes) {
		return true
	}

	return false
}

// SetRevenueTransactionCodes gets a reference to the given RotationRevenueTransactionCodesChangeType and assigns it to the RevenueTransactionCodes field.
func (o *ChangeRevenueTransactionCodesCriteria) SetRevenueTransactionCodes(v RotationRevenueTransactionCodesChangeType) {
	o.RevenueTransactionCodes = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeRevenueTransactionCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRevenueTransactionCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeRevenueTransactionCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeRevenueTransactionCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeRevenueTransactionCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeRevenueTransactionCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RevenueTransactionCodes) {
		toSerialize["revenueTransactionCodes"] = o.RevenueTransactionCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeRevenueTransactionCodesCriteria struct {
	value *ChangeRevenueTransactionCodesCriteria
	isSet bool
}

func (v NullableChangeRevenueTransactionCodesCriteria) Get() *ChangeRevenueTransactionCodesCriteria {
	return v.value
}

func (v *NullableChangeRevenueTransactionCodesCriteria) Set(val *ChangeRevenueTransactionCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeRevenueTransactionCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeRevenueTransactionCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeRevenueTransactionCodesCriteria(val *ChangeRevenueTransactionCodesCriteria) *NullableChangeRevenueTransactionCodesCriteria {
	return &NullableChangeRevenueTransactionCodesCriteria{value: val, isSet: true}
}

func (v NullableChangeRevenueTransactionCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeRevenueTransactionCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


