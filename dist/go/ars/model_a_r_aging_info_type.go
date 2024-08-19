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

// checks if the ARAgingInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARAgingInfoType{}

// ARAgingInfoType Information regarding the aging balances for an account.
type ARAgingInfoType struct {
	// The debit and credit balance per Aging bucket.
	Aging []ARAgingType `json:"aging,omitempty"`
	TotalOutstanding *ARBalanceType `json:"totalOutstanding,omitempty"`
}

// NewARAgingInfoType instantiates a new ARAgingInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARAgingInfoType() *ARAgingInfoType {
	this := ARAgingInfoType{}
	return &this
}

// NewARAgingInfoTypeWithDefaults instantiates a new ARAgingInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARAgingInfoTypeWithDefaults() *ARAgingInfoType {
	this := ARAgingInfoType{}
	return &this
}

// GetAging returns the Aging field value if set, zero value otherwise.
func (o *ARAgingInfoType) GetAging() []ARAgingType {
	if o == nil || IsNil(o.Aging) {
		var ret []ARAgingType
		return ret
	}
	return o.Aging
}

// GetAgingOk returns a tuple with the Aging field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingInfoType) GetAgingOk() ([]ARAgingType, bool) {
	if o == nil || IsNil(o.Aging) {
		return nil, false
	}
	return o.Aging, true
}

// HasAging returns a boolean if a field has been set.
func (o *ARAgingInfoType) HasAging() bool {
	if o != nil && !IsNil(o.Aging) {
		return true
	}

	return false
}

// SetAging gets a reference to the given []ARAgingType and assigns it to the Aging field.
func (o *ARAgingInfoType) SetAging(v []ARAgingType) {
	o.Aging = v
}

// GetTotalOutstanding returns the TotalOutstanding field value if set, zero value otherwise.
func (o *ARAgingInfoType) GetTotalOutstanding() ARBalanceType {
	if o == nil || IsNil(o.TotalOutstanding) {
		var ret ARBalanceType
		return ret
	}
	return *o.TotalOutstanding
}

// GetTotalOutstandingOk returns a tuple with the TotalOutstanding field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingInfoType) GetTotalOutstandingOk() (*ARBalanceType, bool) {
	if o == nil || IsNil(o.TotalOutstanding) {
		return nil, false
	}
	return o.TotalOutstanding, true
}

// HasTotalOutstanding returns a boolean if a field has been set.
func (o *ARAgingInfoType) HasTotalOutstanding() bool {
	if o != nil && !IsNil(o.TotalOutstanding) {
		return true
	}

	return false
}

// SetTotalOutstanding gets a reference to the given ARBalanceType and assigns it to the TotalOutstanding field.
func (o *ARAgingInfoType) SetTotalOutstanding(v ARBalanceType) {
	o.TotalOutstanding = &v
}

func (o ARAgingInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARAgingInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Aging) {
		toSerialize["aging"] = o.Aging
	}
	if !IsNil(o.TotalOutstanding) {
		toSerialize["totalOutstanding"] = o.TotalOutstanding
	}
	return toSerialize, nil
}

type NullableARAgingInfoType struct {
	value *ARAgingInfoType
	isSet bool
}

func (v NullableARAgingInfoType) Get() *ARAgingInfoType {
	return v.value
}

func (v *NullableARAgingInfoType) Set(val *ARAgingInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableARAgingInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableARAgingInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARAgingInfoType(val *ARAgingInfoType) *NullableARAgingInfoType {
	return &NullableARAgingInfoType{value: val, isSet: true}
}

func (v NullableARAgingInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARAgingInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


