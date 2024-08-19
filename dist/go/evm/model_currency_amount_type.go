/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CurrencyAmountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CurrencyAmountType{}

// CurrencyAmountType A monetary value expressed with a currency code.
type CurrencyAmountType struct {
	// A monetary amount.
	Amount *float32 `json:"amount,omitempty"`
	// Provides a currency code to reflect the currency in which an amount may be expressed.
	CurrencyCode *string `json:"currencyCode,omitempty"`
}

// NewCurrencyAmountType instantiates a new CurrencyAmountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrencyAmountType() *CurrencyAmountType {
	this := CurrencyAmountType{}
	return &this
}

// NewCurrencyAmountTypeWithDefaults instantiates a new CurrencyAmountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyAmountTypeWithDefaults() *CurrencyAmountType {
	this := CurrencyAmountType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *CurrencyAmountType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyAmountType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *CurrencyAmountType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *CurrencyAmountType) SetAmount(v float32) {
	o.Amount = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *CurrencyAmountType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyAmountType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *CurrencyAmountType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *CurrencyAmountType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

func (o CurrencyAmountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CurrencyAmountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	return toSerialize, nil
}

type NullableCurrencyAmountType struct {
	value *CurrencyAmountType
	isSet bool
}

func (v NullableCurrencyAmountType) Get() *CurrencyAmountType {
	return v.value
}

func (v *NullableCurrencyAmountType) Set(val *CurrencyAmountType) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrencyAmountType) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrencyAmountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrencyAmountType(val *CurrencyAmountType) *NullableCurrencyAmountType {
	return &NullableCurrencyAmountType{value: val, isSet: true}
}

func (v NullableCurrencyAmountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrencyAmountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


