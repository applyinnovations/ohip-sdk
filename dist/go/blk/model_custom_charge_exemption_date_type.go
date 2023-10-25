/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CustomChargeExemptionDateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeExemptionDateType{}

// CustomChargeExemptionDateType Contains Custom Charge Exemption information for a day.
type CustomChargeExemptionDateType struct {
	// Contains Custom Charge Exemption date.
	Date *string `json:"date,omitempty"`
	// Contains number of Custom Charge Exemption for a day.
	Quantity *int32 `json:"quantity,omitempty"`
}

// NewCustomChargeExemptionDateType instantiates a new CustomChargeExemptionDateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeExemptionDateType() *CustomChargeExemptionDateType {
	this := CustomChargeExemptionDateType{}
	return &this
}

// NewCustomChargeExemptionDateTypeWithDefaults instantiates a new CustomChargeExemptionDateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeExemptionDateTypeWithDefaults() *CustomChargeExemptionDateType {
	this := CustomChargeExemptionDateType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *CustomChargeExemptionDateType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionDateType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *CustomChargeExemptionDateType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *CustomChargeExemptionDateType) SetDate(v string) {
	o.Date = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *CustomChargeExemptionDateType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionDateType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *CustomChargeExemptionDateType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *CustomChargeExemptionDateType) SetQuantity(v int32) {
	o.Quantity = &v
}

func (o CustomChargeExemptionDateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeExemptionDateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	return toSerialize, nil
}

type NullableCustomChargeExemptionDateType struct {
	value *CustomChargeExemptionDateType
	isSet bool
}

func (v NullableCustomChargeExemptionDateType) Get() *CustomChargeExemptionDateType {
	return v.value
}

func (v *NullableCustomChargeExemptionDateType) Set(val *CustomChargeExemptionDateType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeExemptionDateType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeExemptionDateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeExemptionDateType(val *CustomChargeExemptionDateType) *NullableCustomChargeExemptionDateType {
	return &NullableCustomChargeExemptionDateType{value: val, isSet: true}
}

func (v NullableCustomChargeExemptionDateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeExemptionDateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


