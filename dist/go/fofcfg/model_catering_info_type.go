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

// checks if the CateringInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringInfoType{}

// CateringInfoType Revenue and Covers information for a catering segment code. Holds total and monthly information.
type CateringInfoType struct {
	// Catering information for each month for segment code.
	MonthlyInfo []MonthlyCateringInfoType `json:"monthlyInfo,omitempty"`
	// Total Covers for segment code.
	TotalCovers *float32 `json:"totalCovers,omitempty"`
	// Total revenue for segment code.
	TotalRevenue *float32 `json:"totalRevenue,omitempty"`
}

// NewCateringInfoType instantiates a new CateringInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringInfoType() *CateringInfoType {
	this := CateringInfoType{}
	return &this
}

// NewCateringInfoTypeWithDefaults instantiates a new CateringInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringInfoTypeWithDefaults() *CateringInfoType {
	this := CateringInfoType{}
	return &this
}

// GetMonthlyInfo returns the MonthlyInfo field value if set, zero value otherwise.
func (o *CateringInfoType) GetMonthlyInfo() []MonthlyCateringInfoType {
	if o == nil || IsNil(o.MonthlyInfo) {
		var ret []MonthlyCateringInfoType
		return ret
	}
	return o.MonthlyInfo
}

// GetMonthlyInfoOk returns a tuple with the MonthlyInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringInfoType) GetMonthlyInfoOk() ([]MonthlyCateringInfoType, bool) {
	if o == nil || IsNil(o.MonthlyInfo) {
		return nil, false
	}
	return o.MonthlyInfo, true
}

// HasMonthlyInfo returns a boolean if a field has been set.
func (o *CateringInfoType) HasMonthlyInfo() bool {
	if o != nil && !IsNil(o.MonthlyInfo) {
		return true
	}

	return false
}

// SetMonthlyInfo gets a reference to the given []MonthlyCateringInfoType and assigns it to the MonthlyInfo field.
func (o *CateringInfoType) SetMonthlyInfo(v []MonthlyCateringInfoType) {
	o.MonthlyInfo = v
}

// GetTotalCovers returns the TotalCovers field value if set, zero value otherwise.
func (o *CateringInfoType) GetTotalCovers() float32 {
	if o == nil || IsNil(o.TotalCovers) {
		var ret float32
		return ret
	}
	return *o.TotalCovers
}

// GetTotalCoversOk returns a tuple with the TotalCovers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringInfoType) GetTotalCoversOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalCovers) {
		return nil, false
	}
	return o.TotalCovers, true
}

// HasTotalCovers returns a boolean if a field has been set.
func (o *CateringInfoType) HasTotalCovers() bool {
	if o != nil && !IsNil(o.TotalCovers) {
		return true
	}

	return false
}

// SetTotalCovers gets a reference to the given float32 and assigns it to the TotalCovers field.
func (o *CateringInfoType) SetTotalCovers(v float32) {
	o.TotalCovers = &v
}

// GetTotalRevenue returns the TotalRevenue field value if set, zero value otherwise.
func (o *CateringInfoType) GetTotalRevenue() float32 {
	if o == nil || IsNil(o.TotalRevenue) {
		var ret float32
		return ret
	}
	return *o.TotalRevenue
}

// GetTotalRevenueOk returns a tuple with the TotalRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringInfoType) GetTotalRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenue) {
		return nil, false
	}
	return o.TotalRevenue, true
}

// HasTotalRevenue returns a boolean if a field has been set.
func (o *CateringInfoType) HasTotalRevenue() bool {
	if o != nil && !IsNil(o.TotalRevenue) {
		return true
	}

	return false
}

// SetTotalRevenue gets a reference to the given float32 and assigns it to the TotalRevenue field.
func (o *CateringInfoType) SetTotalRevenue(v float32) {
	o.TotalRevenue = &v
}

func (o CateringInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MonthlyInfo) {
		toSerialize["monthlyInfo"] = o.MonthlyInfo
	}
	if !IsNil(o.TotalCovers) {
		toSerialize["totalCovers"] = o.TotalCovers
	}
	if !IsNil(o.TotalRevenue) {
		toSerialize["totalRevenue"] = o.TotalRevenue
	}
	return toSerialize, nil
}

type NullableCateringInfoType struct {
	value *CateringInfoType
	isSet bool
}

func (v NullableCateringInfoType) Get() *CateringInfoType {
	return v.value
}

func (v *NullableCateringInfoType) Set(val *CateringInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringInfoType(val *CateringInfoType) *NullableCateringInfoType {
	return &NullableCateringInfoType{value: val, isSet: true}
}

func (v NullableCateringInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


