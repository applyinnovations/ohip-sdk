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

// checks if the RevenueNightsInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueNightsInfoType{}

// RevenueNightsInfoType Revenue information for a segment code. Holds total and monthly revenue information.
type RevenueNightsInfoType struct {
	// Revenue information for each month for segment code.
	MonthlyRevenueInfo []MonthlyRevenueNightsInfoType `json:"monthlyRevenueInfo,omitempty"`
	// Total Nights for segment code.
	TotalNights *float32 `json:"totalNights,omitempty"`
	// Total revenue for segment code.
	TotalRevenue *float32 `json:"totalRevenue,omitempty"`
}

// NewRevenueNightsInfoType instantiates a new RevenueNightsInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueNightsInfoType() *RevenueNightsInfoType {
	this := RevenueNightsInfoType{}
	return &this
}

// NewRevenueNightsInfoTypeWithDefaults instantiates a new RevenueNightsInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueNightsInfoTypeWithDefaults() *RevenueNightsInfoType {
	this := RevenueNightsInfoType{}
	return &this
}

// GetMonthlyRevenueInfo returns the MonthlyRevenueInfo field value if set, zero value otherwise.
func (o *RevenueNightsInfoType) GetMonthlyRevenueInfo() []MonthlyRevenueNightsInfoType {
	if o == nil || IsNil(o.MonthlyRevenueInfo) {
		var ret []MonthlyRevenueNightsInfoType
		return ret
	}
	return o.MonthlyRevenueInfo
}

// GetMonthlyRevenueInfoOk returns a tuple with the MonthlyRevenueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueNightsInfoType) GetMonthlyRevenueInfoOk() ([]MonthlyRevenueNightsInfoType, bool) {
	if o == nil || IsNil(o.MonthlyRevenueInfo) {
		return nil, false
	}
	return o.MonthlyRevenueInfo, true
}

// HasMonthlyRevenueInfo returns a boolean if a field has been set.
func (o *RevenueNightsInfoType) HasMonthlyRevenueInfo() bool {
	if o != nil && !IsNil(o.MonthlyRevenueInfo) {
		return true
	}

	return false
}

// SetMonthlyRevenueInfo gets a reference to the given []MonthlyRevenueNightsInfoType and assigns it to the MonthlyRevenueInfo field.
func (o *RevenueNightsInfoType) SetMonthlyRevenueInfo(v []MonthlyRevenueNightsInfoType) {
	o.MonthlyRevenueInfo = v
}

// GetTotalNights returns the TotalNights field value if set, zero value otherwise.
func (o *RevenueNightsInfoType) GetTotalNights() float32 {
	if o == nil || IsNil(o.TotalNights) {
		var ret float32
		return ret
	}
	return *o.TotalNights
}

// GetTotalNightsOk returns a tuple with the TotalNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueNightsInfoType) GetTotalNightsOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalNights) {
		return nil, false
	}
	return o.TotalNights, true
}

// HasTotalNights returns a boolean if a field has been set.
func (o *RevenueNightsInfoType) HasTotalNights() bool {
	if o != nil && !IsNil(o.TotalNights) {
		return true
	}

	return false
}

// SetTotalNights gets a reference to the given float32 and assigns it to the TotalNights field.
func (o *RevenueNightsInfoType) SetTotalNights(v float32) {
	o.TotalNights = &v
}

// GetTotalRevenue returns the TotalRevenue field value if set, zero value otherwise.
func (o *RevenueNightsInfoType) GetTotalRevenue() float32 {
	if o == nil || IsNil(o.TotalRevenue) {
		var ret float32
		return ret
	}
	return *o.TotalRevenue
}

// GetTotalRevenueOk returns a tuple with the TotalRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueNightsInfoType) GetTotalRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenue) {
		return nil, false
	}
	return o.TotalRevenue, true
}

// HasTotalRevenue returns a boolean if a field has been set.
func (o *RevenueNightsInfoType) HasTotalRevenue() bool {
	if o != nil && !IsNil(o.TotalRevenue) {
		return true
	}

	return false
}

// SetTotalRevenue gets a reference to the given float32 and assigns it to the TotalRevenue field.
func (o *RevenueNightsInfoType) SetTotalRevenue(v float32) {
	o.TotalRevenue = &v
}

func (o RevenueNightsInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueNightsInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MonthlyRevenueInfo) {
		toSerialize["monthlyRevenueInfo"] = o.MonthlyRevenueInfo
	}
	if !IsNil(o.TotalNights) {
		toSerialize["totalNights"] = o.TotalNights
	}
	if !IsNil(o.TotalRevenue) {
		toSerialize["totalRevenue"] = o.TotalRevenue
	}
	return toSerialize, nil
}

type NullableRevenueNightsInfoType struct {
	value *RevenueNightsInfoType
	isSet bool
}

func (v NullableRevenueNightsInfoType) Get() *RevenueNightsInfoType {
	return v.value
}

func (v *NullableRevenueNightsInfoType) Set(val *RevenueNightsInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueNightsInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueNightsInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueNightsInfoType(val *RevenueNightsInfoType) *NullableRevenueNightsInfoType {
	return &NullableRevenueNightsInfoType{value: val, isSet: true}
}

func (v NullableRevenueNightsInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueNightsInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


