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

// checks if the FeeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FeeType{}

// FeeType Applicable service charges or fees.
type FeeType struct {
	// A monetary amount.
	Amount *float32 `json:"amount,omitempty"`
	// Code identifying the fee (e.g.,agency fee, municipality fee).
	Code *string `json:"code,omitempty"`
	// Provides a currency code to reflect the currency in which an amount may be expressed.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Description *string `json:"description,omitempty"`
	Type *AmountDeterminationType `json:"type,omitempty"`
}

// NewFeeType instantiates a new FeeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFeeType() *FeeType {
	this := FeeType{}
	return &this
}

// NewFeeTypeWithDefaults instantiates a new FeeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFeeTypeWithDefaults() *FeeType {
	this := FeeType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *FeeType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FeeType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *FeeType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *FeeType) SetAmount(v float32) {
	o.Amount = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *FeeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FeeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *FeeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *FeeType) SetCode(v string) {
	o.Code = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *FeeType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FeeType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *FeeType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *FeeType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *FeeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FeeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *FeeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *FeeType) SetDescription(v string) {
	o.Description = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *FeeType) GetType() AmountDeterminationType {
	if o == nil || IsNil(o.Type) {
		var ret AmountDeterminationType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FeeType) GetTypeOk() (*AmountDeterminationType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *FeeType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given AmountDeterminationType and assigns it to the Type field.
func (o *FeeType) SetType(v AmountDeterminationType) {
	o.Type = &v
}

func (o FeeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FeeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableFeeType struct {
	value *FeeType
	isSet bool
}

func (v NullableFeeType) Get() *FeeType {
	return v.value
}

func (v *NullableFeeType) Set(val *FeeType) {
	v.value = val
	v.isSet = true
}

func (v NullableFeeType) IsSet() bool {
	return v.isSet
}

func (v *NullableFeeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFeeType(val *FeeType) *NullableFeeType {
	return &NullableFeeType{value: val, isSet: true}
}

func (v NullableFeeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFeeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


