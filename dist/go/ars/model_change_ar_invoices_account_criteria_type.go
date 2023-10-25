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

// checks if the ChangeARInvoicesAccountCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeARInvoicesAccountCriteriaType{}

// ChangeARInvoicesAccountCriteriaType Criteria for changing AR invoice(s) account.
type ChangeARInvoicesAccountCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// AR Invoice(s) to be changed.
	Invoices []ARInvoiceType `json:"invoices,omitempty"`
	ToAccount *ARAccountCriteriaType `json:"toAccount,omitempty"`
}

// NewChangeARInvoicesAccountCriteriaType instantiates a new ChangeARInvoicesAccountCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeARInvoicesAccountCriteriaType() *ChangeARInvoicesAccountCriteriaType {
	this := ChangeARInvoicesAccountCriteriaType{}
	return &this
}

// NewChangeARInvoicesAccountCriteriaTypeWithDefaults instantiates a new ChangeARInvoicesAccountCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeARInvoicesAccountCriteriaTypeWithDefaults() *ChangeARInvoicesAccountCriteriaType {
	this := ChangeARInvoicesAccountCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ChangeARInvoicesAccountCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeARInvoicesAccountCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ChangeARInvoicesAccountCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ChangeARInvoicesAccountCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetInvoices returns the Invoices field value if set, zero value otherwise.
func (o *ChangeARInvoicesAccountCriteriaType) GetInvoices() []ARInvoiceType {
	if o == nil || IsNil(o.Invoices) {
		var ret []ARInvoiceType
		return ret
	}
	return o.Invoices
}

// GetInvoicesOk returns a tuple with the Invoices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeARInvoicesAccountCriteriaType) GetInvoicesOk() ([]ARInvoiceType, bool) {
	if o == nil || IsNil(o.Invoices) {
		return nil, false
	}
	return o.Invoices, true
}

// HasInvoices returns a boolean if a field has been set.
func (o *ChangeARInvoicesAccountCriteriaType) HasInvoices() bool {
	if o != nil && !IsNil(o.Invoices) {
		return true
	}

	return false
}

// SetInvoices gets a reference to the given []ARInvoiceType and assigns it to the Invoices field.
func (o *ChangeARInvoicesAccountCriteriaType) SetInvoices(v []ARInvoiceType) {
	o.Invoices = v
}

// GetToAccount returns the ToAccount field value if set, zero value otherwise.
func (o *ChangeARInvoicesAccountCriteriaType) GetToAccount() ARAccountCriteriaType {
	if o == nil || IsNil(o.ToAccount) {
		var ret ARAccountCriteriaType
		return ret
	}
	return *o.ToAccount
}

// GetToAccountOk returns a tuple with the ToAccount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeARInvoicesAccountCriteriaType) GetToAccountOk() (*ARAccountCriteriaType, bool) {
	if o == nil || IsNil(o.ToAccount) {
		return nil, false
	}
	return o.ToAccount, true
}

// HasToAccount returns a boolean if a field has been set.
func (o *ChangeARInvoicesAccountCriteriaType) HasToAccount() bool {
	if o != nil && !IsNil(o.ToAccount) {
		return true
	}

	return false
}

// SetToAccount gets a reference to the given ARAccountCriteriaType and assigns it to the ToAccount field.
func (o *ChangeARInvoicesAccountCriteriaType) SetToAccount(v ARAccountCriteriaType) {
	o.ToAccount = &v
}

func (o ChangeARInvoicesAccountCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeARInvoicesAccountCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.Invoices) {
		toSerialize["invoices"] = o.Invoices
	}
	if !IsNil(o.ToAccount) {
		toSerialize["toAccount"] = o.ToAccount
	}
	return toSerialize, nil
}

type NullableChangeARInvoicesAccountCriteriaType struct {
	value *ChangeARInvoicesAccountCriteriaType
	isSet bool
}

func (v NullableChangeARInvoicesAccountCriteriaType) Get() *ChangeARInvoicesAccountCriteriaType {
	return v.value
}

func (v *NullableChangeARInvoicesAccountCriteriaType) Set(val *ChangeARInvoicesAccountCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeARInvoicesAccountCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeARInvoicesAccountCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeARInvoicesAccountCriteriaType(val *ChangeARInvoicesAccountCriteriaType) *NullableChangeARInvoicesAccountCriteriaType {
	return &NullableChangeARInvoicesAccountCriteriaType{value: val, isSet: true}
}

func (v NullableChangeARInvoicesAccountCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeARInvoicesAccountCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


