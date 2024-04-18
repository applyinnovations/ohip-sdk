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

// checks if the AmountPointsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AmountPointsType{}

// AmountPointsType Holds monetary value expressed with a currency code / number of points
type AmountPointsType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Number of points
	Points *int32 `json:"points,omitempty"`
}

// NewAmountPointsType instantiates a new AmountPointsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAmountPointsType() *AmountPointsType {
	this := AmountPointsType{}
	return &this
}

// NewAmountPointsTypeWithDefaults instantiates a new AmountPointsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAmountPointsTypeWithDefaults() *AmountPointsType {
	this := AmountPointsType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *AmountPointsType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountPointsType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *AmountPointsType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *AmountPointsType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *AmountPointsType) GetPoints() int32 {
	if o == nil || IsNil(o.Points) {
		var ret int32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountPointsType) GetPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *AmountPointsType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given int32 and assigns it to the Points field.
func (o *AmountPointsType) SetPoints(v int32) {
	o.Points = &v
}

func (o AmountPointsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AmountPointsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	return toSerialize, nil
}

type NullableAmountPointsType struct {
	value *AmountPointsType
	isSet bool
}

func (v NullableAmountPointsType) Get() *AmountPointsType {
	return v.value
}

func (v *NullableAmountPointsType) Set(val *AmountPointsType) {
	v.value = val
	v.isSet = true
}

func (v NullableAmountPointsType) IsSet() bool {
	return v.isSet
}

func (v *NullableAmountPointsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAmountPointsType(val *AmountPointsType) *NullableAmountPointsType {
	return &NullableAmountPointsType{value: val, isSet: true}
}

func (v NullableAmountPointsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAmountPointsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

