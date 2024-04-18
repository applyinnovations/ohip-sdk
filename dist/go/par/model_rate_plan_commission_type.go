/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the RatePlanCommissionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanCommissionType{}

// RatePlanCommissionType struct for RatePlanCommissionType
type RatePlanCommissionType struct {
	// commission amount used by the rate plan.
	CommissionAmount *float32 `json:"commissionAmount,omitempty"`
	// commission code used by the rate plan.
	CommissionCode *string `json:"commissionCode,omitempty"`
	// commission percentage used by the rate plan.
	CommissionPercentage *float32 `json:"commissionPercentage,omitempty"`
}

// NewRatePlanCommissionType instantiates a new RatePlanCommissionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanCommissionType() *RatePlanCommissionType {
	this := RatePlanCommissionType{}
	return &this
}

// NewRatePlanCommissionTypeWithDefaults instantiates a new RatePlanCommissionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanCommissionTypeWithDefaults() *RatePlanCommissionType {
	this := RatePlanCommissionType{}
	return &this
}

// GetCommissionAmount returns the CommissionAmount field value if set, zero value otherwise.
func (o *RatePlanCommissionType) GetCommissionAmount() float32 {
	if o == nil || IsNil(o.CommissionAmount) {
		var ret float32
		return ret
	}
	return *o.CommissionAmount
}

// GetCommissionAmountOk returns a tuple with the CommissionAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanCommissionType) GetCommissionAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.CommissionAmount) {
		return nil, false
	}
	return o.CommissionAmount, true
}

// HasCommissionAmount returns a boolean if a field has been set.
func (o *RatePlanCommissionType) HasCommissionAmount() bool {
	if o != nil && !IsNil(o.CommissionAmount) {
		return true
	}

	return false
}

// SetCommissionAmount gets a reference to the given float32 and assigns it to the CommissionAmount field.
func (o *RatePlanCommissionType) SetCommissionAmount(v float32) {
	o.CommissionAmount = &v
}

// GetCommissionCode returns the CommissionCode field value if set, zero value otherwise.
func (o *RatePlanCommissionType) GetCommissionCode() string {
	if o == nil || IsNil(o.CommissionCode) {
		var ret string
		return ret
	}
	return *o.CommissionCode
}

// GetCommissionCodeOk returns a tuple with the CommissionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanCommissionType) GetCommissionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CommissionCode) {
		return nil, false
	}
	return o.CommissionCode, true
}

// HasCommissionCode returns a boolean if a field has been set.
func (o *RatePlanCommissionType) HasCommissionCode() bool {
	if o != nil && !IsNil(o.CommissionCode) {
		return true
	}

	return false
}

// SetCommissionCode gets a reference to the given string and assigns it to the CommissionCode field.
func (o *RatePlanCommissionType) SetCommissionCode(v string) {
	o.CommissionCode = &v
}

// GetCommissionPercentage returns the CommissionPercentage field value if set, zero value otherwise.
func (o *RatePlanCommissionType) GetCommissionPercentage() float32 {
	if o == nil || IsNil(o.CommissionPercentage) {
		var ret float32
		return ret
	}
	return *o.CommissionPercentage
}

// GetCommissionPercentageOk returns a tuple with the CommissionPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanCommissionType) GetCommissionPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.CommissionPercentage) {
		return nil, false
	}
	return o.CommissionPercentage, true
}

// HasCommissionPercentage returns a boolean if a field has been set.
func (o *RatePlanCommissionType) HasCommissionPercentage() bool {
	if o != nil && !IsNil(o.CommissionPercentage) {
		return true
	}

	return false
}

// SetCommissionPercentage gets a reference to the given float32 and assigns it to the CommissionPercentage field.
func (o *RatePlanCommissionType) SetCommissionPercentage(v float32) {
	o.CommissionPercentage = &v
}

func (o RatePlanCommissionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanCommissionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionAmount) {
		toSerialize["commissionAmount"] = o.CommissionAmount
	}
	if !IsNil(o.CommissionCode) {
		toSerialize["commissionCode"] = o.CommissionCode
	}
	if !IsNil(o.CommissionPercentage) {
		toSerialize["commissionPercentage"] = o.CommissionPercentage
	}
	return toSerialize, nil
}

type NullableRatePlanCommissionType struct {
	value *RatePlanCommissionType
	isSet bool
}

func (v NullableRatePlanCommissionType) Get() *RatePlanCommissionType {
	return v.value
}

func (v *NullableRatePlanCommissionType) Set(val *RatePlanCommissionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanCommissionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanCommissionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanCommissionType(val *RatePlanCommissionType) *NullableRatePlanCommissionType {
	return &NullableRatePlanCommissionType{value: val, isSet: true}
}

func (v NullableRatePlanCommissionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanCommissionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

