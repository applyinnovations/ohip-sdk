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

// checks if the CashierTypeUsageInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierTypeUsageInfo{}

// CashierTypeUsageInfo Information about how the cashier is used.
type CashierTypeUsageInfo struct {
	History *CashierTypeUsageInfoHistory `json:"history,omitempty"`
	// The Maximum Daily Uses for the cashier.
	MaximumDailyUses *int32 `json:"maximumDailyUses,omitempty"`
}

// NewCashierTypeUsageInfo instantiates a new CashierTypeUsageInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierTypeUsageInfo() *CashierTypeUsageInfo {
	this := CashierTypeUsageInfo{}
	return &this
}

// NewCashierTypeUsageInfoWithDefaults instantiates a new CashierTypeUsageInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierTypeUsageInfoWithDefaults() *CashierTypeUsageInfo {
	this := CashierTypeUsageInfo{}
	return &this
}

// GetHistory returns the History field value if set, zero value otherwise.
func (o *CashierTypeUsageInfo) GetHistory() CashierTypeUsageInfoHistory {
	if o == nil || IsNil(o.History) {
		var ret CashierTypeUsageInfoHistory
		return ret
	}
	return *o.History
}

// GetHistoryOk returns a tuple with the History field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierTypeUsageInfo) GetHistoryOk() (*CashierTypeUsageInfoHistory, bool) {
	if o == nil || IsNil(o.History) {
		return nil, false
	}
	return o.History, true
}

// HasHistory returns a boolean if a field has been set.
func (o *CashierTypeUsageInfo) HasHistory() bool {
	if o != nil && !IsNil(o.History) {
		return true
	}

	return false
}

// SetHistory gets a reference to the given CashierTypeUsageInfoHistory and assigns it to the History field.
func (o *CashierTypeUsageInfo) SetHistory(v CashierTypeUsageInfoHistory) {
	o.History = &v
}

// GetMaximumDailyUses returns the MaximumDailyUses field value if set, zero value otherwise.
func (o *CashierTypeUsageInfo) GetMaximumDailyUses() int32 {
	if o == nil || IsNil(o.MaximumDailyUses) {
		var ret int32
		return ret
	}
	return *o.MaximumDailyUses
}

// GetMaximumDailyUsesOk returns a tuple with the MaximumDailyUses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierTypeUsageInfo) GetMaximumDailyUsesOk() (*int32, bool) {
	if o == nil || IsNil(o.MaximumDailyUses) {
		return nil, false
	}
	return o.MaximumDailyUses, true
}

// HasMaximumDailyUses returns a boolean if a field has been set.
func (o *CashierTypeUsageInfo) HasMaximumDailyUses() bool {
	if o != nil && !IsNil(o.MaximumDailyUses) {
		return true
	}

	return false
}

// SetMaximumDailyUses gets a reference to the given int32 and assigns it to the MaximumDailyUses field.
func (o *CashierTypeUsageInfo) SetMaximumDailyUses(v int32) {
	o.MaximumDailyUses = &v
}

func (o CashierTypeUsageInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierTypeUsageInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.History) {
		toSerialize["history"] = o.History
	}
	if !IsNil(o.MaximumDailyUses) {
		toSerialize["maximumDailyUses"] = o.MaximumDailyUses
	}
	return toSerialize, nil
}

type NullableCashierTypeUsageInfo struct {
	value *CashierTypeUsageInfo
	isSet bool
}

func (v NullableCashierTypeUsageInfo) Get() *CashierTypeUsageInfo {
	return v.value
}

func (v *NullableCashierTypeUsageInfo) Set(val *CashierTypeUsageInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierTypeUsageInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierTypeUsageInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierTypeUsageInfo(val *CashierTypeUsageInfo) *NullableCashierTypeUsageInfo {
	return &NullableCashierTypeUsageInfo{value: val, isSet: true}
}

func (v NullableCashierTypeUsageInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierTypeUsageInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

