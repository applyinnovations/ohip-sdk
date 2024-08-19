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

// checks if the ARApplyPaymentCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARApplyPaymentCriteriaType{}

// ARApplyPaymentCriteriaType Criteria type for apply credits to Invoices. Requires a list of invoices to apply the credit.
type ARApplyPaymentCriteriaType struct {
	Account *ARAccountCriteriaType `json:"account,omitempty"`
	ApplyType *ARApplyType `json:"applyType,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// AR Invoice to which the payment will be applied.
	Invoices []ARPaymentInvoicesTypeInner `json:"invoices,omitempty"`
	// A collection of AR Payments.
	Payments []ARPaymentType `json:"payments,omitempty"`
}

// NewARApplyPaymentCriteriaType instantiates a new ARApplyPaymentCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARApplyPaymentCriteriaType() *ARApplyPaymentCriteriaType {
	this := ARApplyPaymentCriteriaType{}
	return &this
}

// NewARApplyPaymentCriteriaTypeWithDefaults instantiates a new ARApplyPaymentCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARApplyPaymentCriteriaTypeWithDefaults() *ARApplyPaymentCriteriaType {
	this := ARApplyPaymentCriteriaType{}
	return &this
}

// GetAccount returns the Account field value if set, zero value otherwise.
func (o *ARApplyPaymentCriteriaType) GetAccount() ARAccountCriteriaType {
	if o == nil || IsNil(o.Account) {
		var ret ARAccountCriteriaType
		return ret
	}
	return *o.Account
}

// GetAccountOk returns a tuple with the Account field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARApplyPaymentCriteriaType) GetAccountOk() (*ARAccountCriteriaType, bool) {
	if o == nil || IsNil(o.Account) {
		return nil, false
	}
	return o.Account, true
}

// HasAccount returns a boolean if a field has been set.
func (o *ARApplyPaymentCriteriaType) HasAccount() bool {
	if o != nil && !IsNil(o.Account) {
		return true
	}

	return false
}

// SetAccount gets a reference to the given ARAccountCriteriaType and assigns it to the Account field.
func (o *ARApplyPaymentCriteriaType) SetAccount(v ARAccountCriteriaType) {
	o.Account = &v
}

// GetApplyType returns the ApplyType field value if set, zero value otherwise.
func (o *ARApplyPaymentCriteriaType) GetApplyType() ARApplyType {
	if o == nil || IsNil(o.ApplyType) {
		var ret ARApplyType
		return ret
	}
	return *o.ApplyType
}

// GetApplyTypeOk returns a tuple with the ApplyType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARApplyPaymentCriteriaType) GetApplyTypeOk() (*ARApplyType, bool) {
	if o == nil || IsNil(o.ApplyType) {
		return nil, false
	}
	return o.ApplyType, true
}

// HasApplyType returns a boolean if a field has been set.
func (o *ARApplyPaymentCriteriaType) HasApplyType() bool {
	if o != nil && !IsNil(o.ApplyType) {
		return true
	}

	return false
}

// SetApplyType gets a reference to the given ARApplyType and assigns it to the ApplyType field.
func (o *ARApplyPaymentCriteriaType) SetApplyType(v ARApplyType) {
	o.ApplyType = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ARApplyPaymentCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARApplyPaymentCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ARApplyPaymentCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ARApplyPaymentCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetInvoices returns the Invoices field value if set, zero value otherwise.
func (o *ARApplyPaymentCriteriaType) GetInvoices() []ARPaymentInvoicesTypeInner {
	if o == nil || IsNil(o.Invoices) {
		var ret []ARPaymentInvoicesTypeInner
		return ret
	}
	return o.Invoices
}

// GetInvoicesOk returns a tuple with the Invoices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARApplyPaymentCriteriaType) GetInvoicesOk() ([]ARPaymentInvoicesTypeInner, bool) {
	if o == nil || IsNil(o.Invoices) {
		return nil, false
	}
	return o.Invoices, true
}

// HasInvoices returns a boolean if a field has been set.
func (o *ARApplyPaymentCriteriaType) HasInvoices() bool {
	if o != nil && !IsNil(o.Invoices) {
		return true
	}

	return false
}

// SetInvoices gets a reference to the given []ARPaymentInvoicesTypeInner and assigns it to the Invoices field.
func (o *ARApplyPaymentCriteriaType) SetInvoices(v []ARPaymentInvoicesTypeInner) {
	o.Invoices = v
}

// GetPayments returns the Payments field value if set, zero value otherwise.
func (o *ARApplyPaymentCriteriaType) GetPayments() []ARPaymentType {
	if o == nil || IsNil(o.Payments) {
		var ret []ARPaymentType
		return ret
	}
	return o.Payments
}

// GetPaymentsOk returns a tuple with the Payments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARApplyPaymentCriteriaType) GetPaymentsOk() ([]ARPaymentType, bool) {
	if o == nil || IsNil(o.Payments) {
		return nil, false
	}
	return o.Payments, true
}

// HasPayments returns a boolean if a field has been set.
func (o *ARApplyPaymentCriteriaType) HasPayments() bool {
	if o != nil && !IsNil(o.Payments) {
		return true
	}

	return false
}

// SetPayments gets a reference to the given []ARPaymentType and assigns it to the Payments field.
func (o *ARApplyPaymentCriteriaType) SetPayments(v []ARPaymentType) {
	o.Payments = v
}

func (o ARApplyPaymentCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARApplyPaymentCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Account) {
		toSerialize["account"] = o.Account
	}
	if !IsNil(o.ApplyType) {
		toSerialize["applyType"] = o.ApplyType
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.Invoices) {
		toSerialize["invoices"] = o.Invoices
	}
	if !IsNil(o.Payments) {
		toSerialize["payments"] = o.Payments
	}
	return toSerialize, nil
}

type NullableARApplyPaymentCriteriaType struct {
	value *ARApplyPaymentCriteriaType
	isSet bool
}

func (v NullableARApplyPaymentCriteriaType) Get() *ARApplyPaymentCriteriaType {
	return v.value
}

func (v *NullableARApplyPaymentCriteriaType) Set(val *ARApplyPaymentCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableARApplyPaymentCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableARApplyPaymentCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARApplyPaymentCriteriaType(val *ARApplyPaymentCriteriaType) *NullableARApplyPaymentCriteriaType {
	return &NullableARApplyPaymentCriteriaType{value: val, isSet: true}
}

func (v NullableARApplyPaymentCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARApplyPaymentCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


