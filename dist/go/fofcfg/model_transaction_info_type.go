/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TransactionInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionInfoType{}

// TransactionInfoType Revenue information for a TRANSACTION segment code. Holds total and monthly revenue information.
type TransactionInfoType struct {
	// Value information for each month for TRANSACTION segment code.
	MonthlyRevenueInfo []MonthlyTransactionInfoType `json:"monthlyRevenueInfo,omitempty"`
	// Total Value for TRANSACTION segment code.
	TotalRevenue *float32 `json:"totalRevenue,omitempty"`
}

// NewTransactionInfoType instantiates a new TransactionInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionInfoType() *TransactionInfoType {
	this := TransactionInfoType{}
	return &this
}

// NewTransactionInfoTypeWithDefaults instantiates a new TransactionInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionInfoTypeWithDefaults() *TransactionInfoType {
	this := TransactionInfoType{}
	return &this
}

// GetMonthlyRevenueInfo returns the MonthlyRevenueInfo field value if set, zero value otherwise.
func (o *TransactionInfoType) GetMonthlyRevenueInfo() []MonthlyTransactionInfoType {
	if o == nil || IsNil(o.MonthlyRevenueInfo) {
		var ret []MonthlyTransactionInfoType
		return ret
	}
	return o.MonthlyRevenueInfo
}

// GetMonthlyRevenueInfoOk returns a tuple with the MonthlyRevenueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionInfoType) GetMonthlyRevenueInfoOk() ([]MonthlyTransactionInfoType, bool) {
	if o == nil || IsNil(o.MonthlyRevenueInfo) {
		return nil, false
	}
	return o.MonthlyRevenueInfo, true
}

// HasMonthlyRevenueInfo returns a boolean if a field has been set.
func (o *TransactionInfoType) HasMonthlyRevenueInfo() bool {
	if o != nil && !IsNil(o.MonthlyRevenueInfo) {
		return true
	}

	return false
}

// SetMonthlyRevenueInfo gets a reference to the given []MonthlyTransactionInfoType and assigns it to the MonthlyRevenueInfo field.
func (o *TransactionInfoType) SetMonthlyRevenueInfo(v []MonthlyTransactionInfoType) {
	o.MonthlyRevenueInfo = v
}

// GetTotalRevenue returns the TotalRevenue field value if set, zero value otherwise.
func (o *TransactionInfoType) GetTotalRevenue() float32 {
	if o == nil || IsNil(o.TotalRevenue) {
		var ret float32
		return ret
	}
	return *o.TotalRevenue
}

// GetTotalRevenueOk returns a tuple with the TotalRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionInfoType) GetTotalRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenue) {
		return nil, false
	}
	return o.TotalRevenue, true
}

// HasTotalRevenue returns a boolean if a field has been set.
func (o *TransactionInfoType) HasTotalRevenue() bool {
	if o != nil && !IsNil(o.TotalRevenue) {
		return true
	}

	return false
}

// SetTotalRevenue gets a reference to the given float32 and assigns it to the TotalRevenue field.
func (o *TransactionInfoType) SetTotalRevenue(v float32) {
	o.TotalRevenue = &v
}

func (o TransactionInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MonthlyRevenueInfo) {
		toSerialize["monthlyRevenueInfo"] = o.MonthlyRevenueInfo
	}
	if !IsNil(o.TotalRevenue) {
		toSerialize["totalRevenue"] = o.TotalRevenue
	}
	return toSerialize, nil
}

type NullableTransactionInfoType struct {
	value *TransactionInfoType
	isSet bool
}

func (v NullableTransactionInfoType) Get() *TransactionInfoType {
	return v.value
}

func (v *NullableTransactionInfoType) Set(val *TransactionInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionInfoType(val *TransactionInfoType) *NullableTransactionInfoType {
	return &NullableTransactionInfoType{value: val, isSet: true}
}

func (v NullableTransactionInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

