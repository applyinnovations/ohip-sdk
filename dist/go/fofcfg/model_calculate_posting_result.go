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

// checks if the CalculatePostingResult type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CalculatePostingResult{}

// CalculatePostingResult List of charges that will be posted against the transaction code based from the test criteria.
type CalculatePostingResult struct {
	// Charges that will be posted based from the criteria defined.
	Charges []CalculatePostingCharge `json:"charges,omitempty"`
	// The full amount that would be posted.
	TotalAmount *float32 `json:"totalAmount,omitempty"`
}

// NewCalculatePostingResult instantiates a new CalculatePostingResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCalculatePostingResult() *CalculatePostingResult {
	this := CalculatePostingResult{}
	return &this
}

// NewCalculatePostingResultWithDefaults instantiates a new CalculatePostingResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCalculatePostingResultWithDefaults() *CalculatePostingResult {
	this := CalculatePostingResult{}
	return &this
}

// GetCharges returns the Charges field value if set, zero value otherwise.
func (o *CalculatePostingResult) GetCharges() []CalculatePostingCharge {
	if o == nil || IsNil(o.Charges) {
		var ret []CalculatePostingCharge
		return ret
	}
	return o.Charges
}

// GetChargesOk returns a tuple with the Charges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalculatePostingResult) GetChargesOk() ([]CalculatePostingCharge, bool) {
	if o == nil || IsNil(o.Charges) {
		return nil, false
	}
	return o.Charges, true
}

// HasCharges returns a boolean if a field has been set.
func (o *CalculatePostingResult) HasCharges() bool {
	if o != nil && !IsNil(o.Charges) {
		return true
	}

	return false
}

// SetCharges gets a reference to the given []CalculatePostingCharge and assigns it to the Charges field.
func (o *CalculatePostingResult) SetCharges(v []CalculatePostingCharge) {
	o.Charges = v
}

// GetTotalAmount returns the TotalAmount field value if set, zero value otherwise.
func (o *CalculatePostingResult) GetTotalAmount() float32 {
	if o == nil || IsNil(o.TotalAmount) {
		var ret float32
		return ret
	}
	return *o.TotalAmount
}

// GetTotalAmountOk returns a tuple with the TotalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalculatePostingResult) GetTotalAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalAmount) {
		return nil, false
	}
	return o.TotalAmount, true
}

// HasTotalAmount returns a boolean if a field has been set.
func (o *CalculatePostingResult) HasTotalAmount() bool {
	if o != nil && !IsNil(o.TotalAmount) {
		return true
	}

	return false
}

// SetTotalAmount gets a reference to the given float32 and assigns it to the TotalAmount field.
func (o *CalculatePostingResult) SetTotalAmount(v float32) {
	o.TotalAmount = &v
}

func (o CalculatePostingResult) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CalculatePostingResult) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Charges) {
		toSerialize["charges"] = o.Charges
	}
	if !IsNil(o.TotalAmount) {
		toSerialize["totalAmount"] = o.TotalAmount
	}
	return toSerialize, nil
}

type NullableCalculatePostingResult struct {
	value *CalculatePostingResult
	isSet bool
}

func (v NullableCalculatePostingResult) Get() *CalculatePostingResult {
	return v.value
}

func (v *NullableCalculatePostingResult) Set(val *CalculatePostingResult) {
	v.value = val
	v.isSet = true
}

func (v NullableCalculatePostingResult) IsSet() bool {
	return v.isSet
}

func (v *NullableCalculatePostingResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCalculatePostingResult(val *CalculatePostingResult) *NullableCalculatePostingResult {
	return &NullableCalculatePostingResult{value: val, isSet: true}
}

func (v NullableCalculatePostingResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCalculatePostingResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

