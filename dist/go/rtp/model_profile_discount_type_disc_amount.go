/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the ProfileDiscountTypeDiscAmount type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileDiscountTypeDiscAmount{}

// ProfileDiscountTypeDiscAmount Discount amount value and type. Percentage or flat for a discounted rate.
type ProfileDiscountTypeDiscAmount struct {
	Amount *float32 `json:"amount,omitempty"`
	FlatOrPercentage *string `json:"flatOrPercentage,omitempty"`
}

// NewProfileDiscountTypeDiscAmount instantiates a new ProfileDiscountTypeDiscAmount object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileDiscountTypeDiscAmount() *ProfileDiscountTypeDiscAmount {
	this := ProfileDiscountTypeDiscAmount{}
	return &this
}

// NewProfileDiscountTypeDiscAmountWithDefaults instantiates a new ProfileDiscountTypeDiscAmount object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileDiscountTypeDiscAmountWithDefaults() *ProfileDiscountTypeDiscAmount {
	this := ProfileDiscountTypeDiscAmount{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *ProfileDiscountTypeDiscAmount) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileDiscountTypeDiscAmount) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *ProfileDiscountTypeDiscAmount) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *ProfileDiscountTypeDiscAmount) SetAmount(v float32) {
	o.Amount = &v
}

// GetFlatOrPercentage returns the FlatOrPercentage field value if set, zero value otherwise.
func (o *ProfileDiscountTypeDiscAmount) GetFlatOrPercentage() string {
	if o == nil || IsNil(o.FlatOrPercentage) {
		var ret string
		return ret
	}
	return *o.FlatOrPercentage
}

// GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileDiscountTypeDiscAmount) GetFlatOrPercentageOk() (*string, bool) {
	if o == nil || IsNil(o.FlatOrPercentage) {
		return nil, false
	}
	return o.FlatOrPercentage, true
}

// HasFlatOrPercentage returns a boolean if a field has been set.
func (o *ProfileDiscountTypeDiscAmount) HasFlatOrPercentage() bool {
	if o != nil && !IsNil(o.FlatOrPercentage) {
		return true
	}

	return false
}

// SetFlatOrPercentage gets a reference to the given string and assigns it to the FlatOrPercentage field.
func (o *ProfileDiscountTypeDiscAmount) SetFlatOrPercentage(v string) {
	o.FlatOrPercentage = &v
}

func (o ProfileDiscountTypeDiscAmount) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileDiscountTypeDiscAmount) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.FlatOrPercentage) {
		toSerialize["flatOrPercentage"] = o.FlatOrPercentage
	}
	return toSerialize, nil
}

type NullableProfileDiscountTypeDiscAmount struct {
	value *ProfileDiscountTypeDiscAmount
	isSet bool
}

func (v NullableProfileDiscountTypeDiscAmount) Get() *ProfileDiscountTypeDiscAmount {
	return v.value
}

func (v *NullableProfileDiscountTypeDiscAmount) Set(val *ProfileDiscountTypeDiscAmount) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileDiscountTypeDiscAmount) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileDiscountTypeDiscAmount) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileDiscountTypeDiscAmount(val *ProfileDiscountTypeDiscAmount) *NullableProfileDiscountTypeDiscAmount {
	return &NullableProfileDiscountTypeDiscAmount{value: val, isSet: true}
}

func (v NullableProfileDiscountTypeDiscAmount) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileDiscountTypeDiscAmount) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

