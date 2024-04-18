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

// checks if the TransferCompTransactionsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransferCompTransactionsCriteria{}

// TransferCompTransactionsCriteria Comp transactions transfer criteria.
type TransferCompTransactionsCriteria struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Folio window number to where transactions will be transfered.
	TargetFolioNo *int32 `json:"targetFolioNo,omitempty"`
	// List of transactions to be transfered.
	TransactionList []float32 `json:"transactionList,omitempty"`
}

// NewTransferCompTransactionsCriteria instantiates a new TransferCompTransactionsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferCompTransactionsCriteria() *TransferCompTransactionsCriteria {
	this := TransferCompTransactionsCriteria{}
	return &this
}

// NewTransferCompTransactionsCriteriaWithDefaults instantiates a new TransferCompTransactionsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferCompTransactionsCriteriaWithDefaults() *TransferCompTransactionsCriteria {
	this := TransferCompTransactionsCriteria{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *TransferCompTransactionsCriteria) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferCompTransactionsCriteria) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *TransferCompTransactionsCriteria) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *TransferCompTransactionsCriteria) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetTargetFolioNo returns the TargetFolioNo field value if set, zero value otherwise.
func (o *TransferCompTransactionsCriteria) GetTargetFolioNo() int32 {
	if o == nil || IsNil(o.TargetFolioNo) {
		var ret int32
		return ret
	}
	return *o.TargetFolioNo
}

// GetTargetFolioNoOk returns a tuple with the TargetFolioNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferCompTransactionsCriteria) GetTargetFolioNoOk() (*int32, bool) {
	if o == nil || IsNil(o.TargetFolioNo) {
		return nil, false
	}
	return o.TargetFolioNo, true
}

// HasTargetFolioNo returns a boolean if a field has been set.
func (o *TransferCompTransactionsCriteria) HasTargetFolioNo() bool {
	if o != nil && !IsNil(o.TargetFolioNo) {
		return true
	}

	return false
}

// SetTargetFolioNo gets a reference to the given int32 and assigns it to the TargetFolioNo field.
func (o *TransferCompTransactionsCriteria) SetTargetFolioNo(v int32) {
	o.TargetFolioNo = &v
}

// GetTransactionList returns the TransactionList field value if set, zero value otherwise.
func (o *TransferCompTransactionsCriteria) GetTransactionList() []float32 {
	if o == nil || IsNil(o.TransactionList) {
		var ret []float32
		return ret
	}
	return o.TransactionList
}

// GetTransactionListOk returns a tuple with the TransactionList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferCompTransactionsCriteria) GetTransactionListOk() ([]float32, bool) {
	if o == nil || IsNil(o.TransactionList) {
		return nil, false
	}
	return o.TransactionList, true
}

// HasTransactionList returns a boolean if a field has been set.
func (o *TransferCompTransactionsCriteria) HasTransactionList() bool {
	if o != nil && !IsNil(o.TransactionList) {
		return true
	}

	return false
}

// SetTransactionList gets a reference to the given []float32 and assigns it to the TransactionList field.
func (o *TransferCompTransactionsCriteria) SetTransactionList(v []float32) {
	o.TransactionList = v
}

func (o TransferCompTransactionsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransferCompTransactionsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.TargetFolioNo) {
		toSerialize["targetFolioNo"] = o.TargetFolioNo
	}
	if !IsNil(o.TransactionList) {
		toSerialize["transactionList"] = o.TransactionList
	}
	return toSerialize, nil
}

type NullableTransferCompTransactionsCriteria struct {
	value *TransferCompTransactionsCriteria
	isSet bool
}

func (v NullableTransferCompTransactionsCriteria) Get() *TransferCompTransactionsCriteria {
	return v.value
}

func (v *NullableTransferCompTransactionsCriteria) Set(val *TransferCompTransactionsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferCompTransactionsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferCompTransactionsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferCompTransactionsCriteria(val *TransferCompTransactionsCriteria) *NullableTransferCompTransactionsCriteria {
	return &NullableTransferCompTransactionsCriteria{value: val, isSet: true}
}

func (v NullableTransferCompTransactionsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferCompTransactionsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

