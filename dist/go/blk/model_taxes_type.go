/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the TaxesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TaxesType{}

// TaxesType A collection of taxes.
type TaxesType struct {
	// A monetary amount.
	Amount *float32 `json:"amount,omitempty"`
	// Provides a currency code to reflect the currency in which an amount may be expressed.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// An individual tax.
	Tax []TaxType `json:"tax,omitempty"`
}

// NewTaxesType instantiates a new TaxesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTaxesType() *TaxesType {
	this := TaxesType{}
	return &this
}

// NewTaxesTypeWithDefaults instantiates a new TaxesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTaxesTypeWithDefaults() *TaxesType {
	this := TaxesType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *TaxesType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxesType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *TaxesType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *TaxesType) SetAmount(v float32) {
	o.Amount = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *TaxesType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxesType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *TaxesType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *TaxesType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetTax returns the Tax field value if set, zero value otherwise.
func (o *TaxesType) GetTax() []TaxType {
	if o == nil || IsNil(o.Tax) {
		var ret []TaxType
		return ret
	}
	return o.Tax
}

// GetTaxOk returns a tuple with the Tax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TaxesType) GetTaxOk() ([]TaxType, bool) {
	if o == nil || IsNil(o.Tax) {
		return nil, false
	}
	return o.Tax, true
}

// HasTax returns a boolean if a field has been set.
func (o *TaxesType) HasTax() bool {
	if o != nil && !IsNil(o.Tax) {
		return true
	}

	return false
}

// SetTax gets a reference to the given []TaxType and assigns it to the Tax field.
func (o *TaxesType) SetTax(v []TaxType) {
	o.Tax = v
}

func (o TaxesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TaxesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Tax) {
		toSerialize["tax"] = o.Tax
	}
	return toSerialize, nil
}

type NullableTaxesType struct {
	value *TaxesType
	isSet bool
}

func (v NullableTaxesType) Get() *TaxesType {
	return v.value
}

func (v *NullableTaxesType) Set(val *TaxesType) {
	v.value = val
	v.isSet = true
}

func (v NullableTaxesType) IsSet() bool {
	return v.isSet
}

func (v *NullableTaxesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTaxesType(val *TaxesType) *NullableTaxesType {
	return &NullableTaxesType{value: val, isSet: true}
}

func (v NullableTaxesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTaxesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


