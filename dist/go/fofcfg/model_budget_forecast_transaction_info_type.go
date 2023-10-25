/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the BudgetForecastTransactionInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastTransactionInfoType{}

// BudgetForecastTransactionInfoType Budget Forecast information for budget Transaction codes.
type BudgetForecastTransactionInfoType struct {
	// Budget Forecast information for Transaction segment code .
	TransactionCodeInformation []TransactionCodeInformationType `json:"transactionCodeInformation,omitempty"`
	TransactionCodeTotalsInformation *TransactionCodeTotalsInformationType `json:"transactionCodeTotalsInformation,omitempty"`
}

// NewBudgetForecastTransactionInfoType instantiates a new BudgetForecastTransactionInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastTransactionInfoType() *BudgetForecastTransactionInfoType {
	this := BudgetForecastTransactionInfoType{}
	return &this
}

// NewBudgetForecastTransactionInfoTypeWithDefaults instantiates a new BudgetForecastTransactionInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastTransactionInfoTypeWithDefaults() *BudgetForecastTransactionInfoType {
	this := BudgetForecastTransactionInfoType{}
	return &this
}

// GetTransactionCodeInformation returns the TransactionCodeInformation field value if set, zero value otherwise.
func (o *BudgetForecastTransactionInfoType) GetTransactionCodeInformation() []TransactionCodeInformationType {
	if o == nil || IsNil(o.TransactionCodeInformation) {
		var ret []TransactionCodeInformationType
		return ret
	}
	return o.TransactionCodeInformation
}

// GetTransactionCodeInformationOk returns a tuple with the TransactionCodeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastTransactionInfoType) GetTransactionCodeInformationOk() ([]TransactionCodeInformationType, bool) {
	if o == nil || IsNil(o.TransactionCodeInformation) {
		return nil, false
	}
	return o.TransactionCodeInformation, true
}

// HasTransactionCodeInformation returns a boolean if a field has been set.
func (o *BudgetForecastTransactionInfoType) HasTransactionCodeInformation() bool {
	if o != nil && !IsNil(o.TransactionCodeInformation) {
		return true
	}

	return false
}

// SetTransactionCodeInformation gets a reference to the given []TransactionCodeInformationType and assigns it to the TransactionCodeInformation field.
func (o *BudgetForecastTransactionInfoType) SetTransactionCodeInformation(v []TransactionCodeInformationType) {
	o.TransactionCodeInformation = v
}

// GetTransactionCodeTotalsInformation returns the TransactionCodeTotalsInformation field value if set, zero value otherwise.
func (o *BudgetForecastTransactionInfoType) GetTransactionCodeTotalsInformation() TransactionCodeTotalsInformationType {
	if o == nil || IsNil(o.TransactionCodeTotalsInformation) {
		var ret TransactionCodeTotalsInformationType
		return ret
	}
	return *o.TransactionCodeTotalsInformation
}

// GetTransactionCodeTotalsInformationOk returns a tuple with the TransactionCodeTotalsInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastTransactionInfoType) GetTransactionCodeTotalsInformationOk() (*TransactionCodeTotalsInformationType, bool) {
	if o == nil || IsNil(o.TransactionCodeTotalsInformation) {
		return nil, false
	}
	return o.TransactionCodeTotalsInformation, true
}

// HasTransactionCodeTotalsInformation returns a boolean if a field has been set.
func (o *BudgetForecastTransactionInfoType) HasTransactionCodeTotalsInformation() bool {
	if o != nil && !IsNil(o.TransactionCodeTotalsInformation) {
		return true
	}

	return false
}

// SetTransactionCodeTotalsInformation gets a reference to the given TransactionCodeTotalsInformationType and assigns it to the TransactionCodeTotalsInformation field.
func (o *BudgetForecastTransactionInfoType) SetTransactionCodeTotalsInformation(v TransactionCodeTotalsInformationType) {
	o.TransactionCodeTotalsInformation = &v
}

func (o BudgetForecastTransactionInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastTransactionInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TransactionCodeInformation) {
		toSerialize["transactionCodeInformation"] = o.TransactionCodeInformation
	}
	if !IsNil(o.TransactionCodeTotalsInformation) {
		toSerialize["transactionCodeTotalsInformation"] = o.TransactionCodeTotalsInformation
	}
	return toSerialize, nil
}

type NullableBudgetForecastTransactionInfoType struct {
	value *BudgetForecastTransactionInfoType
	isSet bool
}

func (v NullableBudgetForecastTransactionInfoType) Get() *BudgetForecastTransactionInfoType {
	return v.value
}

func (v *NullableBudgetForecastTransactionInfoType) Set(val *BudgetForecastTransactionInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastTransactionInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastTransactionInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastTransactionInfoType(val *BudgetForecastTransactionInfoType) *NullableBudgetForecastTransactionInfoType {
	return &NullableBudgetForecastTransactionInfoType{value: val, isSet: true}
}

func (v NullableBudgetForecastTransactionInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastTransactionInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


