/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the HSKStatType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HSKStatType{}

// HSKStatType Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units.
type HSKStatType struct {
	Category *StatUnitCategoryType `json:"category,omitempty"`
	Code *HSKStatCodeType `json:"code,omitempty"`
	// Statistical value.
	Value *float32 `json:"value,omitempty"`
}

// NewHSKStatType instantiates a new HSKStatType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHSKStatType() *HSKStatType {
	this := HSKStatType{}
	return &this
}

// NewHSKStatTypeWithDefaults instantiates a new HSKStatType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHSKStatTypeWithDefaults() *HSKStatType {
	this := HSKStatType{}
	return &this
}

// GetCategory returns the Category field value if set, zero value otherwise.
func (o *HSKStatType) GetCategory() StatUnitCategoryType {
	if o == nil || IsNil(o.Category) {
		var ret StatUnitCategoryType
		return ret
	}
	return *o.Category
}

// GetCategoryOk returns a tuple with the Category field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatType) GetCategoryOk() (*StatUnitCategoryType, bool) {
	if o == nil || IsNil(o.Category) {
		return nil, false
	}
	return o.Category, true
}

// HasCategory returns a boolean if a field has been set.
func (o *HSKStatType) HasCategory() bool {
	if o != nil && !IsNil(o.Category) {
		return true
	}

	return false
}

// SetCategory gets a reference to the given StatUnitCategoryType and assigns it to the Category field.
func (o *HSKStatType) SetCategory(v StatUnitCategoryType) {
	o.Category = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HSKStatType) GetCode() HSKStatCodeType {
	if o == nil || IsNil(o.Code) {
		var ret HSKStatCodeType
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatType) GetCodeOk() (*HSKStatCodeType, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HSKStatType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given HSKStatCodeType and assigns it to the Code field.
func (o *HSKStatType) SetCode(v HSKStatCodeType) {
	o.Code = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *HSKStatType) GetValue() float32 {
	if o == nil || IsNil(o.Value) {
		var ret float32
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatType) GetValueOk() (*float32, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *HSKStatType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given float32 and assigns it to the Value field.
func (o *HSKStatType) SetValue(v float32) {
	o.Value = &v
}

func (o HSKStatType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HSKStatType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Category) {
		toSerialize["category"] = o.Category
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableHSKStatType struct {
	value *HSKStatType
	isSet bool
}

func (v NullableHSKStatType) Get() *HSKStatType {
	return v.value
}

func (v *NullableHSKStatType) Set(val *HSKStatType) {
	v.value = val
	v.isSet = true
}

func (v NullableHSKStatType) IsSet() bool {
	return v.isSet
}

func (v *NullableHSKStatType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHSKStatType(val *HSKStatType) *NullableHSKStatType {
	return &NullableHSKStatType{value: val, isSet: true}
}

func (v NullableHSKStatType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHSKStatType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

