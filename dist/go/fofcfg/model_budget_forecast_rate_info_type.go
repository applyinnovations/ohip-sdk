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

// checks if the BudgetForecastRateInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastRateInfoType{}

// BudgetForecastRateInfoType Budget Forecast information for budget segment codes.
type BudgetForecastRateInfoType struct {
	// Budget Forecast totals information for Rate segment.
	RateCodeInformation []RateCodeInformationType `json:"rateCodeInformation,omitempty"`
	RateCodeTotalInformation *RateCodeTotalInformationType `json:"rateCodeTotalInformation,omitempty"`
}

// NewBudgetForecastRateInfoType instantiates a new BudgetForecastRateInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastRateInfoType() *BudgetForecastRateInfoType {
	this := BudgetForecastRateInfoType{}
	return &this
}

// NewBudgetForecastRateInfoTypeWithDefaults instantiates a new BudgetForecastRateInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastRateInfoTypeWithDefaults() *BudgetForecastRateInfoType {
	this := BudgetForecastRateInfoType{}
	return &this
}

// GetRateCodeInformation returns the RateCodeInformation field value if set, zero value otherwise.
func (o *BudgetForecastRateInfoType) GetRateCodeInformation() []RateCodeInformationType {
	if o == nil || IsNil(o.RateCodeInformation) {
		var ret []RateCodeInformationType
		return ret
	}
	return o.RateCodeInformation
}

// GetRateCodeInformationOk returns a tuple with the RateCodeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastRateInfoType) GetRateCodeInformationOk() ([]RateCodeInformationType, bool) {
	if o == nil || IsNil(o.RateCodeInformation) {
		return nil, false
	}
	return o.RateCodeInformation, true
}

// HasRateCodeInformation returns a boolean if a field has been set.
func (o *BudgetForecastRateInfoType) HasRateCodeInformation() bool {
	if o != nil && !IsNil(o.RateCodeInformation) {
		return true
	}

	return false
}

// SetRateCodeInformation gets a reference to the given []RateCodeInformationType and assigns it to the RateCodeInformation field.
func (o *BudgetForecastRateInfoType) SetRateCodeInformation(v []RateCodeInformationType) {
	o.RateCodeInformation = v
}

// GetRateCodeTotalInformation returns the RateCodeTotalInformation field value if set, zero value otherwise.
func (o *BudgetForecastRateInfoType) GetRateCodeTotalInformation() RateCodeTotalInformationType {
	if o == nil || IsNil(o.RateCodeTotalInformation) {
		var ret RateCodeTotalInformationType
		return ret
	}
	return *o.RateCodeTotalInformation
}

// GetRateCodeTotalInformationOk returns a tuple with the RateCodeTotalInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastRateInfoType) GetRateCodeTotalInformationOk() (*RateCodeTotalInformationType, bool) {
	if o == nil || IsNil(o.RateCodeTotalInformation) {
		return nil, false
	}
	return o.RateCodeTotalInformation, true
}

// HasRateCodeTotalInformation returns a boolean if a field has been set.
func (o *BudgetForecastRateInfoType) HasRateCodeTotalInformation() bool {
	if o != nil && !IsNil(o.RateCodeTotalInformation) {
		return true
	}

	return false
}

// SetRateCodeTotalInformation gets a reference to the given RateCodeTotalInformationType and assigns it to the RateCodeTotalInformation field.
func (o *BudgetForecastRateInfoType) SetRateCodeTotalInformation(v RateCodeTotalInformationType) {
	o.RateCodeTotalInformation = &v
}

func (o BudgetForecastRateInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastRateInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RateCodeInformation) {
		toSerialize["rateCodeInformation"] = o.RateCodeInformation
	}
	if !IsNil(o.RateCodeTotalInformation) {
		toSerialize["rateCodeTotalInformation"] = o.RateCodeTotalInformation
	}
	return toSerialize, nil
}

type NullableBudgetForecastRateInfoType struct {
	value *BudgetForecastRateInfoType
	isSet bool
}

func (v NullableBudgetForecastRateInfoType) Get() *BudgetForecastRateInfoType {
	return v.value
}

func (v *NullableBudgetForecastRateInfoType) Set(val *BudgetForecastRateInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastRateInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastRateInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastRateInfoType(val *BudgetForecastRateInfoType) *NullableBudgetForecastRateInfoType {
	return &NullableBudgetForecastRateInfoType{value: val, isSet: true}
}

func (v NullableBudgetForecastRateInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastRateInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


