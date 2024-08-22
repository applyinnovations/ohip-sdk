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

// checks if the AdditionalGuestAmountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AdditionalGuestAmountType{}

// AdditionalGuestAmountType struct for AdditionalGuestAmountType
type AdditionalGuestAmountType struct {
	AgeQualifyingCode *string `json:"ageQualifyingCode,omitempty"`
	Amount *TotalType `json:"amount,omitempty"`
}

// NewAdditionalGuestAmountType instantiates a new AdditionalGuestAmountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdditionalGuestAmountType() *AdditionalGuestAmountType {
	this := AdditionalGuestAmountType{}
	return &this
}

// NewAdditionalGuestAmountTypeWithDefaults instantiates a new AdditionalGuestAmountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdditionalGuestAmountTypeWithDefaults() *AdditionalGuestAmountType {
	this := AdditionalGuestAmountType{}
	return &this
}

// GetAgeQualifyingCode returns the AgeQualifyingCode field value if set, zero value otherwise.
func (o *AdditionalGuestAmountType) GetAgeQualifyingCode() string {
	if o == nil || IsNil(o.AgeQualifyingCode) {
		var ret string
		return ret
	}
	return *o.AgeQualifyingCode
}

// GetAgeQualifyingCodeOk returns a tuple with the AgeQualifyingCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdditionalGuestAmountType) GetAgeQualifyingCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AgeQualifyingCode) {
		return nil, false
	}
	return o.AgeQualifyingCode, true
}

// HasAgeQualifyingCode returns a boolean if a field has been set.
func (o *AdditionalGuestAmountType) HasAgeQualifyingCode() bool {
	if o != nil && !IsNil(o.AgeQualifyingCode) {
		return true
	}

	return false
}

// SetAgeQualifyingCode gets a reference to the given string and assigns it to the AgeQualifyingCode field.
func (o *AdditionalGuestAmountType) SetAgeQualifyingCode(v string) {
	o.AgeQualifyingCode = &v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *AdditionalGuestAmountType) GetAmount() TotalType {
	if o == nil || IsNil(o.Amount) {
		var ret TotalType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdditionalGuestAmountType) GetAmountOk() (*TotalType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *AdditionalGuestAmountType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given TotalType and assigns it to the Amount field.
func (o *AdditionalGuestAmountType) SetAmount(v TotalType) {
	o.Amount = &v
}

func (o AdditionalGuestAmountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AdditionalGuestAmountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AgeQualifyingCode) {
		toSerialize["ageQualifyingCode"] = o.AgeQualifyingCode
	}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	return toSerialize, nil
}

type NullableAdditionalGuestAmountType struct {
	value *AdditionalGuestAmountType
	isSet bool
}

func (v NullableAdditionalGuestAmountType) Get() *AdditionalGuestAmountType {
	return v.value
}

func (v *NullableAdditionalGuestAmountType) Set(val *AdditionalGuestAmountType) {
	v.value = val
	v.isSet = true
}

func (v NullableAdditionalGuestAmountType) IsSet() bool {
	return v.isSet
}

func (v *NullableAdditionalGuestAmountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdditionalGuestAmountType(val *AdditionalGuestAmountType) *NullableAdditionalGuestAmountType {
	return &NullableAdditionalGuestAmountType{value: val, isSet: true}
}

func (v NullableAdditionalGuestAmountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdditionalGuestAmountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


