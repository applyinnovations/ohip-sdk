/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ARBalanceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARBalanceType{}

// ARBalanceType Balance information for AR.
type ARBalanceType struct {
	Credit *CurrencyAmountType `json:"credit,omitempty"`
	Debit *CurrencyAmountType `json:"debit,omitempty"`
	Total *CurrencyAmountType `json:"total,omitempty"`
}

// NewARBalanceType instantiates a new ARBalanceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARBalanceType() *ARBalanceType {
	this := ARBalanceType{}
	return &this
}

// NewARBalanceTypeWithDefaults instantiates a new ARBalanceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARBalanceTypeWithDefaults() *ARBalanceType {
	this := ARBalanceType{}
	return &this
}

// GetCredit returns the Credit field value if set, zero value otherwise.
func (o *ARBalanceType) GetCredit() CurrencyAmountType {
	if o == nil || IsNil(o.Credit) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Credit
}

// GetCreditOk returns a tuple with the Credit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARBalanceType) GetCreditOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Credit) {
		return nil, false
	}
	return o.Credit, true
}

// HasCredit returns a boolean if a field has been set.
func (o *ARBalanceType) HasCredit() bool {
	if o != nil && !IsNil(o.Credit) {
		return true
	}

	return false
}

// SetCredit gets a reference to the given CurrencyAmountType and assigns it to the Credit field.
func (o *ARBalanceType) SetCredit(v CurrencyAmountType) {
	o.Credit = &v
}

// GetDebit returns the Debit field value if set, zero value otherwise.
func (o *ARBalanceType) GetDebit() CurrencyAmountType {
	if o == nil || IsNil(o.Debit) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Debit
}

// GetDebitOk returns a tuple with the Debit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARBalanceType) GetDebitOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Debit) {
		return nil, false
	}
	return o.Debit, true
}

// HasDebit returns a boolean if a field has been set.
func (o *ARBalanceType) HasDebit() bool {
	if o != nil && !IsNil(o.Debit) {
		return true
	}

	return false
}

// SetDebit gets a reference to the given CurrencyAmountType and assigns it to the Debit field.
func (o *ARBalanceType) SetDebit(v CurrencyAmountType) {
	o.Debit = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *ARBalanceType) GetTotal() CurrencyAmountType {
	if o == nil || IsNil(o.Total) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARBalanceType) GetTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *ARBalanceType) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given CurrencyAmountType and assigns it to the Total field.
func (o *ARBalanceType) SetTotal(v CurrencyAmountType) {
	o.Total = &v
}

func (o ARBalanceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARBalanceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Credit) {
		toSerialize["credit"] = o.Credit
	}
	if !IsNil(o.Debit) {
		toSerialize["debit"] = o.Debit
	}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	return toSerialize, nil
}

type NullableARBalanceType struct {
	value *ARBalanceType
	isSet bool
}

func (v NullableARBalanceType) Get() *ARBalanceType {
	return v.value
}

func (v *NullableARBalanceType) Set(val *ARBalanceType) {
	v.value = val
	v.isSet = true
}

func (v NullableARBalanceType) IsSet() bool {
	return v.isSet
}

func (v *NullableARBalanceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARBalanceType(val *ARBalanceType) *NullableARBalanceType {
	return &NullableARBalanceType{value: val, isSet: true}
}

func (v NullableARBalanceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARBalanceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


