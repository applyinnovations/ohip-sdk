/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the HotelCashierClosureCurrencyAmountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelCashierClosureCurrencyAmountType{}

// HotelCashierClosureCurrencyAmountType Cashier Shift amounts for each Hotel group by currency code
type HotelCashierClosureCurrencyAmountType struct {
	// Hotel Cash and Check Balances group by Currency Code.
	CurrencyAmounts []CashierClosureCurrencyAmountType `json:"currencyAmounts,omitempty"`
	// Hotel local currency code.
	HotelCurrencyCode *string `json:"hotelCurrencyCode,omitempty"`
	// Hotel Code.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewHotelCashierClosureCurrencyAmountType instantiates a new HotelCashierClosureCurrencyAmountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelCashierClosureCurrencyAmountType() *HotelCashierClosureCurrencyAmountType {
	this := HotelCashierClosureCurrencyAmountType{}
	return &this
}

// NewHotelCashierClosureCurrencyAmountTypeWithDefaults instantiates a new HotelCashierClosureCurrencyAmountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelCashierClosureCurrencyAmountTypeWithDefaults() *HotelCashierClosureCurrencyAmountType {
	this := HotelCashierClosureCurrencyAmountType{}
	return &this
}

// GetCurrencyAmounts returns the CurrencyAmounts field value if set, zero value otherwise.
func (o *HotelCashierClosureCurrencyAmountType) GetCurrencyAmounts() []CashierClosureCurrencyAmountType {
	if o == nil || IsNil(o.CurrencyAmounts) {
		var ret []CashierClosureCurrencyAmountType
		return ret
	}
	return o.CurrencyAmounts
}

// GetCurrencyAmountsOk returns a tuple with the CurrencyAmounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCashierClosureCurrencyAmountType) GetCurrencyAmountsOk() ([]CashierClosureCurrencyAmountType, bool) {
	if o == nil || IsNil(o.CurrencyAmounts) {
		return nil, false
	}
	return o.CurrencyAmounts, true
}

// HasCurrencyAmounts returns a boolean if a field has been set.
func (o *HotelCashierClosureCurrencyAmountType) HasCurrencyAmounts() bool {
	if o != nil && !IsNil(o.CurrencyAmounts) {
		return true
	}

	return false
}

// SetCurrencyAmounts gets a reference to the given []CashierClosureCurrencyAmountType and assigns it to the CurrencyAmounts field.
func (o *HotelCashierClosureCurrencyAmountType) SetCurrencyAmounts(v []CashierClosureCurrencyAmountType) {
	o.CurrencyAmounts = v
}

// GetHotelCurrencyCode returns the HotelCurrencyCode field value if set, zero value otherwise.
func (o *HotelCashierClosureCurrencyAmountType) GetHotelCurrencyCode() string {
	if o == nil || IsNil(o.HotelCurrencyCode) {
		var ret string
		return ret
	}
	return *o.HotelCurrencyCode
}

// GetHotelCurrencyCodeOk returns a tuple with the HotelCurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCashierClosureCurrencyAmountType) GetHotelCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCurrencyCode) {
		return nil, false
	}
	return o.HotelCurrencyCode, true
}

// HasHotelCurrencyCode returns a boolean if a field has been set.
func (o *HotelCashierClosureCurrencyAmountType) HasHotelCurrencyCode() bool {
	if o != nil && !IsNil(o.HotelCurrencyCode) {
		return true
	}

	return false
}

// SetHotelCurrencyCode gets a reference to the given string and assigns it to the HotelCurrencyCode field.
func (o *HotelCashierClosureCurrencyAmountType) SetHotelCurrencyCode(v string) {
	o.HotelCurrencyCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelCashierClosureCurrencyAmountType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCashierClosureCurrencyAmountType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelCashierClosureCurrencyAmountType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelCashierClosureCurrencyAmountType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o HotelCashierClosureCurrencyAmountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelCashierClosureCurrencyAmountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyAmounts) {
		toSerialize["currencyAmounts"] = o.CurrencyAmounts
	}
	if !IsNil(o.HotelCurrencyCode) {
		toSerialize["hotelCurrencyCode"] = o.HotelCurrencyCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableHotelCashierClosureCurrencyAmountType struct {
	value *HotelCashierClosureCurrencyAmountType
	isSet bool
}

func (v NullableHotelCashierClosureCurrencyAmountType) Get() *HotelCashierClosureCurrencyAmountType {
	return v.value
}

func (v *NullableHotelCashierClosureCurrencyAmountType) Set(val *HotelCashierClosureCurrencyAmountType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelCashierClosureCurrencyAmountType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelCashierClosureCurrencyAmountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelCashierClosureCurrencyAmountType(val *HotelCashierClosureCurrencyAmountType) *NullableHotelCashierClosureCurrencyAmountType {
	return &NullableHotelCashierClosureCurrencyAmountType{value: val, isSet: true}
}

func (v NullableHotelCashierClosureCurrencyAmountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelCashierClosureCurrencyAmountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


