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

// checks if the SurchargeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SurchargeType{}

// SurchargeType Surcharge information regarding the payment configuration.
type SurchargeType struct {
	Minimum *CurrencyAmountType `json:"minimum,omitempty"`
	// Indicates the percentage amount for a credit card transaction.
	Percentage *float32 `json:"percentage,omitempty"`
}

// NewSurchargeType instantiates a new SurchargeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSurchargeType() *SurchargeType {
	this := SurchargeType{}
	return &this
}

// NewSurchargeTypeWithDefaults instantiates a new SurchargeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSurchargeTypeWithDefaults() *SurchargeType {
	this := SurchargeType{}
	return &this
}

// GetMinimum returns the Minimum field value if set, zero value otherwise.
func (o *SurchargeType) GetMinimum() CurrencyAmountType {
	if o == nil || IsNil(o.Minimum) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Minimum
}

// GetMinimumOk returns a tuple with the Minimum field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SurchargeType) GetMinimumOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Minimum) {
		return nil, false
	}
	return o.Minimum, true
}

// HasMinimum returns a boolean if a field has been set.
func (o *SurchargeType) HasMinimum() bool {
	if o != nil && !IsNil(o.Minimum) {
		return true
	}

	return false
}

// SetMinimum gets a reference to the given CurrencyAmountType and assigns it to the Minimum field.
func (o *SurchargeType) SetMinimum(v CurrencyAmountType) {
	o.Minimum = &v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *SurchargeType) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SurchargeType) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *SurchargeType) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *SurchargeType) SetPercentage(v float32) {
	o.Percentage = &v
}

func (o SurchargeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SurchargeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Minimum) {
		toSerialize["minimum"] = o.Minimum
	}
	if !IsNil(o.Percentage) {
		toSerialize["percentage"] = o.Percentage
	}
	return toSerialize, nil
}

type NullableSurchargeType struct {
	value *SurchargeType
	isSet bool
}

func (v NullableSurchargeType) Get() *SurchargeType {
	return v.value
}

func (v *NullableSurchargeType) Set(val *SurchargeType) {
	v.value = val
	v.isSet = true
}

func (v NullableSurchargeType) IsSet() bool {
	return v.isSet
}

func (v *NullableSurchargeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSurchargeType(val *SurchargeType) *NullableSurchargeType {
	return &NullableSurchargeType{value: val, isSet: true}
}

func (v NullableSurchargeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSurchargeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


