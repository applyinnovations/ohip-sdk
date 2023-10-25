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

// checks if the BudgetForecastCustomInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastCustomInfoType{}

// BudgetForecastCustomInfoType Budget Forecast information for budget Custom codes.
type BudgetForecastCustomInfoType struct {
	// Budget Forecast information for Custom segment code .
	CustomCodeInformation []CustomCodeInformationType `json:"customCodeInformation,omitempty"`
	CustomCodeTotalInformation *CustomCodeTotalInformationType `json:"customCodeTotalInformation,omitempty"`
}

// NewBudgetForecastCustomInfoType instantiates a new BudgetForecastCustomInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastCustomInfoType() *BudgetForecastCustomInfoType {
	this := BudgetForecastCustomInfoType{}
	return &this
}

// NewBudgetForecastCustomInfoTypeWithDefaults instantiates a new BudgetForecastCustomInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastCustomInfoTypeWithDefaults() *BudgetForecastCustomInfoType {
	this := BudgetForecastCustomInfoType{}
	return &this
}

// GetCustomCodeInformation returns the CustomCodeInformation field value if set, zero value otherwise.
func (o *BudgetForecastCustomInfoType) GetCustomCodeInformation() []CustomCodeInformationType {
	if o == nil || IsNil(o.CustomCodeInformation) {
		var ret []CustomCodeInformationType
		return ret
	}
	return o.CustomCodeInformation
}

// GetCustomCodeInformationOk returns a tuple with the CustomCodeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastCustomInfoType) GetCustomCodeInformationOk() ([]CustomCodeInformationType, bool) {
	if o == nil || IsNil(o.CustomCodeInformation) {
		return nil, false
	}
	return o.CustomCodeInformation, true
}

// HasCustomCodeInformation returns a boolean if a field has been set.
func (o *BudgetForecastCustomInfoType) HasCustomCodeInformation() bool {
	if o != nil && !IsNil(o.CustomCodeInformation) {
		return true
	}

	return false
}

// SetCustomCodeInformation gets a reference to the given []CustomCodeInformationType and assigns it to the CustomCodeInformation field.
func (o *BudgetForecastCustomInfoType) SetCustomCodeInformation(v []CustomCodeInformationType) {
	o.CustomCodeInformation = v
}

// GetCustomCodeTotalInformation returns the CustomCodeTotalInformation field value if set, zero value otherwise.
func (o *BudgetForecastCustomInfoType) GetCustomCodeTotalInformation() CustomCodeTotalInformationType {
	if o == nil || IsNil(o.CustomCodeTotalInformation) {
		var ret CustomCodeTotalInformationType
		return ret
	}
	return *o.CustomCodeTotalInformation
}

// GetCustomCodeTotalInformationOk returns a tuple with the CustomCodeTotalInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastCustomInfoType) GetCustomCodeTotalInformationOk() (*CustomCodeTotalInformationType, bool) {
	if o == nil || IsNil(o.CustomCodeTotalInformation) {
		return nil, false
	}
	return o.CustomCodeTotalInformation, true
}

// HasCustomCodeTotalInformation returns a boolean if a field has been set.
func (o *BudgetForecastCustomInfoType) HasCustomCodeTotalInformation() bool {
	if o != nil && !IsNil(o.CustomCodeTotalInformation) {
		return true
	}

	return false
}

// SetCustomCodeTotalInformation gets a reference to the given CustomCodeTotalInformationType and assigns it to the CustomCodeTotalInformation field.
func (o *BudgetForecastCustomInfoType) SetCustomCodeTotalInformation(v CustomCodeTotalInformationType) {
	o.CustomCodeTotalInformation = &v
}

func (o BudgetForecastCustomInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastCustomInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomCodeInformation) {
		toSerialize["customCodeInformation"] = o.CustomCodeInformation
	}
	if !IsNil(o.CustomCodeTotalInformation) {
		toSerialize["customCodeTotalInformation"] = o.CustomCodeTotalInformation
	}
	return toSerialize, nil
}

type NullableBudgetForecastCustomInfoType struct {
	value *BudgetForecastCustomInfoType
	isSet bool
}

func (v NullableBudgetForecastCustomInfoType) Get() *BudgetForecastCustomInfoType {
	return v.value
}

func (v *NullableBudgetForecastCustomInfoType) Set(val *BudgetForecastCustomInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastCustomInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastCustomInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastCustomInfoType(val *BudgetForecastCustomInfoType) *NullableBudgetForecastCustomInfoType {
	return &NullableBudgetForecastCustomInfoType{value: val, isSet: true}
}

func (v NullableBudgetForecastCustomInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastCustomInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


