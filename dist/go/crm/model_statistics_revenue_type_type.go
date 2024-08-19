/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the StatisticsRevenueTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatisticsRevenueTypeType{}

// StatisticsRevenueTypeType Contains Revenue information
type StatisticsRevenueTypeType struct {
	RevenueAmount *float32 `json:"revenueAmount,omitempty"`
	RevenueLabel *string `json:"revenueLabel,omitempty"`
}

// NewStatisticsRevenueTypeType instantiates a new StatisticsRevenueTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatisticsRevenueTypeType() *StatisticsRevenueTypeType {
	this := StatisticsRevenueTypeType{}
	return &this
}

// NewStatisticsRevenueTypeTypeWithDefaults instantiates a new StatisticsRevenueTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatisticsRevenueTypeTypeWithDefaults() *StatisticsRevenueTypeType {
	this := StatisticsRevenueTypeType{}
	return &this
}

// GetRevenueAmount returns the RevenueAmount field value if set, zero value otherwise.
func (o *StatisticsRevenueTypeType) GetRevenueAmount() float32 {
	if o == nil || IsNil(o.RevenueAmount) {
		var ret float32
		return ret
	}
	return *o.RevenueAmount
}

// GetRevenueAmountOk returns a tuple with the RevenueAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsRevenueTypeType) GetRevenueAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.RevenueAmount) {
		return nil, false
	}
	return o.RevenueAmount, true
}

// HasRevenueAmount returns a boolean if a field has been set.
func (o *StatisticsRevenueTypeType) HasRevenueAmount() bool {
	if o != nil && !IsNil(o.RevenueAmount) {
		return true
	}

	return false
}

// SetRevenueAmount gets a reference to the given float32 and assigns it to the RevenueAmount field.
func (o *StatisticsRevenueTypeType) SetRevenueAmount(v float32) {
	o.RevenueAmount = &v
}

// GetRevenueLabel returns the RevenueLabel field value if set, zero value otherwise.
func (o *StatisticsRevenueTypeType) GetRevenueLabel() string {
	if o == nil || IsNil(o.RevenueLabel) {
		var ret string
		return ret
	}
	return *o.RevenueLabel
}

// GetRevenueLabelOk returns a tuple with the RevenueLabel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsRevenueTypeType) GetRevenueLabelOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueLabel) {
		return nil, false
	}
	return o.RevenueLabel, true
}

// HasRevenueLabel returns a boolean if a field has been set.
func (o *StatisticsRevenueTypeType) HasRevenueLabel() bool {
	if o != nil && !IsNil(o.RevenueLabel) {
		return true
	}

	return false
}

// SetRevenueLabel gets a reference to the given string and assigns it to the RevenueLabel field.
func (o *StatisticsRevenueTypeType) SetRevenueLabel(v string) {
	o.RevenueLabel = &v
}

func (o StatisticsRevenueTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatisticsRevenueTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RevenueAmount) {
		toSerialize["revenueAmount"] = o.RevenueAmount
	}
	if !IsNil(o.RevenueLabel) {
		toSerialize["revenueLabel"] = o.RevenueLabel
	}
	return toSerialize, nil
}

type NullableStatisticsRevenueTypeType struct {
	value *StatisticsRevenueTypeType
	isSet bool
}

func (v NullableStatisticsRevenueTypeType) Get() *StatisticsRevenueTypeType {
	return v.value
}

func (v *NullableStatisticsRevenueTypeType) Set(val *StatisticsRevenueTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatisticsRevenueTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatisticsRevenueTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatisticsRevenueTypeType(val *StatisticsRevenueTypeType) *NullableStatisticsRevenueTypeType {
	return &NullableStatisticsRevenueTypeType{value: val, isSet: true}
}

func (v NullableStatisticsRevenueTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatisticsRevenueTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


