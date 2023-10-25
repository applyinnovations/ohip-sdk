/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the CountryNameType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CountryNameType{}

// CountryNameType Code for a country or a nationality.
type CountryNameType struct {
	// Code for a country or a nationality.
	Code *string `json:"code,omitempty"`
	// Used for Character Strings, length 0 to 200.
	Value *string `json:"value,omitempty"`
}

// NewCountryNameType instantiates a new CountryNameType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCountryNameType() *CountryNameType {
	this := CountryNameType{}
	return &this
}

// NewCountryNameTypeWithDefaults instantiates a new CountryNameType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCountryNameTypeWithDefaults() *CountryNameType {
	this := CountryNameType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CountryNameType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountryNameType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CountryNameType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CountryNameType) SetCode(v string) {
	o.Code = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *CountryNameType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountryNameType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *CountryNameType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *CountryNameType) SetValue(v string) {
	o.Value = &v
}

func (o CountryNameType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CountryNameType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableCountryNameType struct {
	value *CountryNameType
	isSet bool
}

func (v NullableCountryNameType) Get() *CountryNameType {
	return v.value
}

func (v *NullableCountryNameType) Set(val *CountryNameType) {
	v.value = val
	v.isSet = true
}

func (v NullableCountryNameType) IsSet() bool {
	return v.isSet
}

func (v *NullableCountryNameType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCountryNameType(val *CountryNameType) *NullableCountryNameType {
	return &NullableCountryNameType{value: val, isSet: true}
}

func (v NullableCountryNameType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCountryNameType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


