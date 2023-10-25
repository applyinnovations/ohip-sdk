/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PolicyAmountPercentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PolicyAmountPercentType{}

// PolicyAmountPercentType Defines the percentage basis for calculating the fee amount or the amount.
type PolicyAmountPercentType struct {
	// A monetary amount.
	Amount *float32 `json:"amount,omitempty"`
	BasisType *PolicyBasisTypeType `json:"basisType,omitempty"`
	// Provides a currency code to reflect the currency in which an amount may be expressed.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The number of nights of the hotel stay that are used to calculate the fee amount.
	Nights *int32 `json:"nights,omitempty"`
	// The percentage used to calculate the amount.
	Percent *float32 `json:"percent,omitempty"`
}

// NewPolicyAmountPercentType instantiates a new PolicyAmountPercentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPolicyAmountPercentType() *PolicyAmountPercentType {
	this := PolicyAmountPercentType{}
	return &this
}

// NewPolicyAmountPercentTypeWithDefaults instantiates a new PolicyAmountPercentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPolicyAmountPercentTypeWithDefaults() *PolicyAmountPercentType {
	this := PolicyAmountPercentType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *PolicyAmountPercentType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyAmountPercentType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *PolicyAmountPercentType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *PolicyAmountPercentType) SetAmount(v float32) {
	o.Amount = &v
}

// GetBasisType returns the BasisType field value if set, zero value otherwise.
func (o *PolicyAmountPercentType) GetBasisType() PolicyBasisTypeType {
	if o == nil || IsNil(o.BasisType) {
		var ret PolicyBasisTypeType
		return ret
	}
	return *o.BasisType
}

// GetBasisTypeOk returns a tuple with the BasisType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyAmountPercentType) GetBasisTypeOk() (*PolicyBasisTypeType, bool) {
	if o == nil || IsNil(o.BasisType) {
		return nil, false
	}
	return o.BasisType, true
}

// HasBasisType returns a boolean if a field has been set.
func (o *PolicyAmountPercentType) HasBasisType() bool {
	if o != nil && !IsNil(o.BasisType) {
		return true
	}

	return false
}

// SetBasisType gets a reference to the given PolicyBasisTypeType and assigns it to the BasisType field.
func (o *PolicyAmountPercentType) SetBasisType(v PolicyBasisTypeType) {
	o.BasisType = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *PolicyAmountPercentType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyAmountPercentType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *PolicyAmountPercentType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *PolicyAmountPercentType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetNights returns the Nights field value if set, zero value otherwise.
func (o *PolicyAmountPercentType) GetNights() int32 {
	if o == nil || IsNil(o.Nights) {
		var ret int32
		return ret
	}
	return *o.Nights
}

// GetNightsOk returns a tuple with the Nights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyAmountPercentType) GetNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.Nights) {
		return nil, false
	}
	return o.Nights, true
}

// HasNights returns a boolean if a field has been set.
func (o *PolicyAmountPercentType) HasNights() bool {
	if o != nil && !IsNil(o.Nights) {
		return true
	}

	return false
}

// SetNights gets a reference to the given int32 and assigns it to the Nights field.
func (o *PolicyAmountPercentType) SetNights(v int32) {
	o.Nights = &v
}

// GetPercent returns the Percent field value if set, zero value otherwise.
func (o *PolicyAmountPercentType) GetPercent() float32 {
	if o == nil || IsNil(o.Percent) {
		var ret float32
		return ret
	}
	return *o.Percent
}

// GetPercentOk returns a tuple with the Percent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyAmountPercentType) GetPercentOk() (*float32, bool) {
	if o == nil || IsNil(o.Percent) {
		return nil, false
	}
	return o.Percent, true
}

// HasPercent returns a boolean if a field has been set.
func (o *PolicyAmountPercentType) HasPercent() bool {
	if o != nil && !IsNil(o.Percent) {
		return true
	}

	return false
}

// SetPercent gets a reference to the given float32 and assigns it to the Percent field.
func (o *PolicyAmountPercentType) SetPercent(v float32) {
	o.Percent = &v
}

func (o PolicyAmountPercentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PolicyAmountPercentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.BasisType) {
		toSerialize["basisType"] = o.BasisType
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Nights) {
		toSerialize["nights"] = o.Nights
	}
	if !IsNil(o.Percent) {
		toSerialize["percent"] = o.Percent
	}
	return toSerialize, nil
}

type NullablePolicyAmountPercentType struct {
	value *PolicyAmountPercentType
	isSet bool
}

func (v NullablePolicyAmountPercentType) Get() *PolicyAmountPercentType {
	return v.value
}

func (v *NullablePolicyAmountPercentType) Set(val *PolicyAmountPercentType) {
	v.value = val
	v.isSet = true
}

func (v NullablePolicyAmountPercentType) IsSet() bool {
	return v.isSet
}

func (v *NullablePolicyAmountPercentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePolicyAmountPercentType(val *PolicyAmountPercentType) *NullablePolicyAmountPercentType {
	return &NullablePolicyAmountPercentType{value: val, isSet: true}
}

func (v NullablePolicyAmountPercentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePolicyAmountPercentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


