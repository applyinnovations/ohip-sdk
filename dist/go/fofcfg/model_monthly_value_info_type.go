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

// checks if the MonthlyValueInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MonthlyValueInfoType{}

// MonthlyValueInfoType Holds monthly value summary information
type MonthlyValueInfoType struct {
	// Month number
	Month *int32 `json:"month,omitempty"`
	// Value information for a month.
	Value *float32 `json:"value,omitempty"`
}

// NewMonthlyValueInfoType instantiates a new MonthlyValueInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMonthlyValueInfoType() *MonthlyValueInfoType {
	this := MonthlyValueInfoType{}
	return &this
}

// NewMonthlyValueInfoTypeWithDefaults instantiates a new MonthlyValueInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMonthlyValueInfoTypeWithDefaults() *MonthlyValueInfoType {
	this := MonthlyValueInfoType{}
	return &this
}

// GetMonth returns the Month field value if set, zero value otherwise.
func (o *MonthlyValueInfoType) GetMonth() int32 {
	if o == nil || IsNil(o.Month) {
		var ret int32
		return ret
	}
	return *o.Month
}

// GetMonthOk returns a tuple with the Month field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonthlyValueInfoType) GetMonthOk() (*int32, bool) {
	if o == nil || IsNil(o.Month) {
		return nil, false
	}
	return o.Month, true
}

// HasMonth returns a boolean if a field has been set.
func (o *MonthlyValueInfoType) HasMonth() bool {
	if o != nil && !IsNil(o.Month) {
		return true
	}

	return false
}

// SetMonth gets a reference to the given int32 and assigns it to the Month field.
func (o *MonthlyValueInfoType) SetMonth(v int32) {
	o.Month = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *MonthlyValueInfoType) GetValue() float32 {
	if o == nil || IsNil(o.Value) {
		var ret float32
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonthlyValueInfoType) GetValueOk() (*float32, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *MonthlyValueInfoType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given float32 and assigns it to the Value field.
func (o *MonthlyValueInfoType) SetValue(v float32) {
	o.Value = &v
}

func (o MonthlyValueInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MonthlyValueInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Month) {
		toSerialize["month"] = o.Month
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableMonthlyValueInfoType struct {
	value *MonthlyValueInfoType
	isSet bool
}

func (v NullableMonthlyValueInfoType) Get() *MonthlyValueInfoType {
	return v.value
}

func (v *NullableMonthlyValueInfoType) Set(val *MonthlyValueInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMonthlyValueInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMonthlyValueInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonthlyValueInfoType(val *MonthlyValueInfoType) *NullableMonthlyValueInfoType {
	return &NullableMonthlyValueInfoType{value: val, isSet: true}
}

func (v NullableMonthlyValueInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonthlyValueInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


