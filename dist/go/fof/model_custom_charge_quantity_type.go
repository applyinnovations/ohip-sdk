/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CustomChargeQuantityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeQuantityType{}

// CustomChargeQuantityType Contains quantity of custom charge exemptions.
type CustomChargeQuantityType struct {
	// Indicates if Custom Charges Exemption information is editable.
	Available *bool `json:"available,omitempty"`
	// Contains number of Custom Charge Exemption for a day.
	Quantity *int32 `json:"quantity,omitempty"`
}

// NewCustomChargeQuantityType instantiates a new CustomChargeQuantityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeQuantityType() *CustomChargeQuantityType {
	this := CustomChargeQuantityType{}
	return &this
}

// NewCustomChargeQuantityTypeWithDefaults instantiates a new CustomChargeQuantityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeQuantityTypeWithDefaults() *CustomChargeQuantityType {
	this := CustomChargeQuantityType{}
	return &this
}

// GetAvailable returns the Available field value if set, zero value otherwise.
func (o *CustomChargeQuantityType) GetAvailable() bool {
	if o == nil || IsNil(o.Available) {
		var ret bool
		return ret
	}
	return *o.Available
}

// GetAvailableOk returns a tuple with the Available field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeQuantityType) GetAvailableOk() (*bool, bool) {
	if o == nil || IsNil(o.Available) {
		return nil, false
	}
	return o.Available, true
}

// HasAvailable returns a boolean if a field has been set.
func (o *CustomChargeQuantityType) HasAvailable() bool {
	if o != nil && !IsNil(o.Available) {
		return true
	}

	return false
}

// SetAvailable gets a reference to the given bool and assigns it to the Available field.
func (o *CustomChargeQuantityType) SetAvailable(v bool) {
	o.Available = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *CustomChargeQuantityType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeQuantityType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *CustomChargeQuantityType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *CustomChargeQuantityType) SetQuantity(v int32) {
	o.Quantity = &v
}

func (o CustomChargeQuantityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeQuantityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Available) {
		toSerialize["available"] = o.Available
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	return toSerialize, nil
}

type NullableCustomChargeQuantityType struct {
	value *CustomChargeQuantityType
	isSet bool
}

func (v NullableCustomChargeQuantityType) Get() *CustomChargeQuantityType {
	return v.value
}

func (v *NullableCustomChargeQuantityType) Set(val *CustomChargeQuantityType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeQuantityType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeQuantityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeQuantityType(val *CustomChargeQuantityType) *NullableCustomChargeQuantityType {
	return &NullableCustomChargeQuantityType{value: val, isSet: true}
}

func (v NullableCustomChargeQuantityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeQuantityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


