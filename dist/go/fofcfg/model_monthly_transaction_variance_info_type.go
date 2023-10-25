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

// checks if the MonthlyTransactionVarianceInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MonthlyTransactionVarianceInfoType{}

// MonthlyTransactionVarianceInfoType Revenue Variance information for a segment code for a month.
type MonthlyTransactionVarianceInfoType struct {
	// Month number
	Month *int32 `json:"month,omitempty"`
	// Variance for a month.
	RevenueVariance *float32 `json:"revenueVariance,omitempty"`
}

// NewMonthlyTransactionVarianceInfoType instantiates a new MonthlyTransactionVarianceInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMonthlyTransactionVarianceInfoType() *MonthlyTransactionVarianceInfoType {
	this := MonthlyTransactionVarianceInfoType{}
	return &this
}

// NewMonthlyTransactionVarianceInfoTypeWithDefaults instantiates a new MonthlyTransactionVarianceInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMonthlyTransactionVarianceInfoTypeWithDefaults() *MonthlyTransactionVarianceInfoType {
	this := MonthlyTransactionVarianceInfoType{}
	return &this
}

// GetMonth returns the Month field value if set, zero value otherwise.
func (o *MonthlyTransactionVarianceInfoType) GetMonth() int32 {
	if o == nil || IsNil(o.Month) {
		var ret int32
		return ret
	}
	return *o.Month
}

// GetMonthOk returns a tuple with the Month field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonthlyTransactionVarianceInfoType) GetMonthOk() (*int32, bool) {
	if o == nil || IsNil(o.Month) {
		return nil, false
	}
	return o.Month, true
}

// HasMonth returns a boolean if a field has been set.
func (o *MonthlyTransactionVarianceInfoType) HasMonth() bool {
	if o != nil && !IsNil(o.Month) {
		return true
	}

	return false
}

// SetMonth gets a reference to the given int32 and assigns it to the Month field.
func (o *MonthlyTransactionVarianceInfoType) SetMonth(v int32) {
	o.Month = &v
}

// GetRevenueVariance returns the RevenueVariance field value if set, zero value otherwise.
func (o *MonthlyTransactionVarianceInfoType) GetRevenueVariance() float32 {
	if o == nil || IsNil(o.RevenueVariance) {
		var ret float32
		return ret
	}
	return *o.RevenueVariance
}

// GetRevenueVarianceOk returns a tuple with the RevenueVariance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonthlyTransactionVarianceInfoType) GetRevenueVarianceOk() (*float32, bool) {
	if o == nil || IsNil(o.RevenueVariance) {
		return nil, false
	}
	return o.RevenueVariance, true
}

// HasRevenueVariance returns a boolean if a field has been set.
func (o *MonthlyTransactionVarianceInfoType) HasRevenueVariance() bool {
	if o != nil && !IsNil(o.RevenueVariance) {
		return true
	}

	return false
}

// SetRevenueVariance gets a reference to the given float32 and assigns it to the RevenueVariance field.
func (o *MonthlyTransactionVarianceInfoType) SetRevenueVariance(v float32) {
	o.RevenueVariance = &v
}

func (o MonthlyTransactionVarianceInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MonthlyTransactionVarianceInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Month) {
		toSerialize["month"] = o.Month
	}
	if !IsNil(o.RevenueVariance) {
		toSerialize["revenueVariance"] = o.RevenueVariance
	}
	return toSerialize, nil
}

type NullableMonthlyTransactionVarianceInfoType struct {
	value *MonthlyTransactionVarianceInfoType
	isSet bool
}

func (v NullableMonthlyTransactionVarianceInfoType) Get() *MonthlyTransactionVarianceInfoType {
	return v.value
}

func (v *NullableMonthlyTransactionVarianceInfoType) Set(val *MonthlyTransactionVarianceInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMonthlyTransactionVarianceInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMonthlyTransactionVarianceInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonthlyTransactionVarianceInfoType(val *MonthlyTransactionVarianceInfoType) *NullableMonthlyTransactionVarianceInfoType {
	return &NullableMonthlyTransactionVarianceInfoType{value: val, isSet: true}
}

func (v NullableMonthlyTransactionVarianceInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonthlyTransactionVarianceInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


