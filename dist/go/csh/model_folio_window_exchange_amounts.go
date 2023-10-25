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

// checks if the FolioWindowExchangeAmounts type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioWindowExchangeAmounts{}

// FolioWindowExchangeAmounts Converted folio windows values for the Exchange Currency requested.
type FolioWindowExchangeAmounts struct {
	Balance *CurrencyAmountType `json:"balance,omitempty"`
	Payment *CurrencyAmountType `json:"payment,omitempty"`
	Revenue *CurrencyAmountType `json:"revenue,omitempty"`
}

// NewFolioWindowExchangeAmounts instantiates a new FolioWindowExchangeAmounts object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioWindowExchangeAmounts() *FolioWindowExchangeAmounts {
	this := FolioWindowExchangeAmounts{}
	return &this
}

// NewFolioWindowExchangeAmountsWithDefaults instantiates a new FolioWindowExchangeAmounts object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioWindowExchangeAmountsWithDefaults() *FolioWindowExchangeAmounts {
	this := FolioWindowExchangeAmounts{}
	return &this
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *FolioWindowExchangeAmounts) GetBalance() CurrencyAmountType {
	if o == nil || IsNil(o.Balance) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioWindowExchangeAmounts) GetBalanceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Balance) {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *FolioWindowExchangeAmounts) HasBalance() bool {
	if o != nil && !IsNil(o.Balance) {
		return true
	}

	return false
}

// SetBalance gets a reference to the given CurrencyAmountType and assigns it to the Balance field.
func (o *FolioWindowExchangeAmounts) SetBalance(v CurrencyAmountType) {
	o.Balance = &v
}

// GetPayment returns the Payment field value if set, zero value otherwise.
func (o *FolioWindowExchangeAmounts) GetPayment() CurrencyAmountType {
	if o == nil || IsNil(o.Payment) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Payment
}

// GetPaymentOk returns a tuple with the Payment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioWindowExchangeAmounts) GetPaymentOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Payment) {
		return nil, false
	}
	return o.Payment, true
}

// HasPayment returns a boolean if a field has been set.
func (o *FolioWindowExchangeAmounts) HasPayment() bool {
	if o != nil && !IsNil(o.Payment) {
		return true
	}

	return false
}

// SetPayment gets a reference to the given CurrencyAmountType and assigns it to the Payment field.
func (o *FolioWindowExchangeAmounts) SetPayment(v CurrencyAmountType) {
	o.Payment = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *FolioWindowExchangeAmounts) GetRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.Revenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioWindowExchangeAmounts) GetRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *FolioWindowExchangeAmounts) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given CurrencyAmountType and assigns it to the Revenue field.
func (o *FolioWindowExchangeAmounts) SetRevenue(v CurrencyAmountType) {
	o.Revenue = &v
}

func (o FolioWindowExchangeAmounts) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioWindowExchangeAmounts) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Balance) {
		toSerialize["balance"] = o.Balance
	}
	if !IsNil(o.Payment) {
		toSerialize["payment"] = o.Payment
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	return toSerialize, nil
}

type NullableFolioWindowExchangeAmounts struct {
	value *FolioWindowExchangeAmounts
	isSet bool
}

func (v NullableFolioWindowExchangeAmounts) Get() *FolioWindowExchangeAmounts {
	return v.value
}

func (v *NullableFolioWindowExchangeAmounts) Set(val *FolioWindowExchangeAmounts) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioWindowExchangeAmounts) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioWindowExchangeAmounts) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioWindowExchangeAmounts(val *FolioWindowExchangeAmounts) *NullableFolioWindowExchangeAmounts {
	return &NullableFolioWindowExchangeAmounts{value: val, isSet: true}
}

func (v NullableFolioWindowExchangeAmounts) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioWindowExchangeAmounts) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


