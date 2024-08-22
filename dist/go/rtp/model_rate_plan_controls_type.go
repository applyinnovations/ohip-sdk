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

// checks if the RatePlanControlsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanControlsType{}

// RatePlanControlsType struct for RatePlanControlsType
type RatePlanControlsType struct {
	Sell *RatePlanSellControlsType `json:"sell,omitempty"`
	Yield *RatePlanYieldControlsType `json:"yield,omitempty"`
}

// NewRatePlanControlsType instantiates a new RatePlanControlsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanControlsType() *RatePlanControlsType {
	this := RatePlanControlsType{}
	return &this
}

// NewRatePlanControlsTypeWithDefaults instantiates a new RatePlanControlsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanControlsTypeWithDefaults() *RatePlanControlsType {
	this := RatePlanControlsType{}
	return &this
}

// GetSell returns the Sell field value if set, zero value otherwise.
func (o *RatePlanControlsType) GetSell() RatePlanSellControlsType {
	if o == nil || IsNil(o.Sell) {
		var ret RatePlanSellControlsType
		return ret
	}
	return *o.Sell
}

// GetSellOk returns a tuple with the Sell field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanControlsType) GetSellOk() (*RatePlanSellControlsType, bool) {
	if o == nil || IsNil(o.Sell) {
		return nil, false
	}
	return o.Sell, true
}

// HasSell returns a boolean if a field has been set.
func (o *RatePlanControlsType) HasSell() bool {
	if o != nil && !IsNil(o.Sell) {
		return true
	}

	return false
}

// SetSell gets a reference to the given RatePlanSellControlsType and assigns it to the Sell field.
func (o *RatePlanControlsType) SetSell(v RatePlanSellControlsType) {
	o.Sell = &v
}

// GetYield returns the Yield field value if set, zero value otherwise.
func (o *RatePlanControlsType) GetYield() RatePlanYieldControlsType {
	if o == nil || IsNil(o.Yield) {
		var ret RatePlanYieldControlsType
		return ret
	}
	return *o.Yield
}

// GetYieldOk returns a tuple with the Yield field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanControlsType) GetYieldOk() (*RatePlanYieldControlsType, bool) {
	if o == nil || IsNil(o.Yield) {
		return nil, false
	}
	return o.Yield, true
}

// HasYield returns a boolean if a field has been set.
func (o *RatePlanControlsType) HasYield() bool {
	if o != nil && !IsNil(o.Yield) {
		return true
	}

	return false
}

// SetYield gets a reference to the given RatePlanYieldControlsType and assigns it to the Yield field.
func (o *RatePlanControlsType) SetYield(v RatePlanYieldControlsType) {
	o.Yield = &v
}

func (o RatePlanControlsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanControlsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Sell) {
		toSerialize["sell"] = o.Sell
	}
	if !IsNil(o.Yield) {
		toSerialize["yield"] = o.Yield
	}
	return toSerialize, nil
}

type NullableRatePlanControlsType struct {
	value *RatePlanControlsType
	isSet bool
}

func (v NullableRatePlanControlsType) Get() *RatePlanControlsType {
	return v.value
}

func (v *NullableRatePlanControlsType) Set(val *RatePlanControlsType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanControlsType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanControlsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanControlsType(val *RatePlanControlsType) *NullableRatePlanControlsType {
	return &NullableRatePlanControlsType{value: val, isSet: true}
}

func (v NullableRatePlanControlsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanControlsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


