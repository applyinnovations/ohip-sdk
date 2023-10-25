/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the IndicatorType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &IndicatorType{}

// IndicatorType Lamp indicator Type.
type IndicatorType struct {
	// Indicates number of occurrences of the indicator.
	Count *int32 `json:"count,omitempty"`
	// Name of the indicator.
	IndicatorName *string `json:"indicatorName,omitempty"`
}

// NewIndicatorType instantiates a new IndicatorType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIndicatorType() *IndicatorType {
	this := IndicatorType{}
	return &this
}

// NewIndicatorTypeWithDefaults instantiates a new IndicatorType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIndicatorTypeWithDefaults() *IndicatorType {
	this := IndicatorType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *IndicatorType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IndicatorType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *IndicatorType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *IndicatorType) SetCount(v int32) {
	o.Count = &v
}

// GetIndicatorName returns the IndicatorName field value if set, zero value otherwise.
func (o *IndicatorType) GetIndicatorName() string {
	if o == nil || IsNil(o.IndicatorName) {
		var ret string
		return ret
	}
	return *o.IndicatorName
}

// GetIndicatorNameOk returns a tuple with the IndicatorName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IndicatorType) GetIndicatorNameOk() (*string, bool) {
	if o == nil || IsNil(o.IndicatorName) {
		return nil, false
	}
	return o.IndicatorName, true
}

// HasIndicatorName returns a boolean if a field has been set.
func (o *IndicatorType) HasIndicatorName() bool {
	if o != nil && !IsNil(o.IndicatorName) {
		return true
	}

	return false
}

// SetIndicatorName gets a reference to the given string and assigns it to the IndicatorName field.
func (o *IndicatorType) SetIndicatorName(v string) {
	o.IndicatorName = &v
}

func (o IndicatorType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o IndicatorType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.IndicatorName) {
		toSerialize["indicatorName"] = o.IndicatorName
	}
	return toSerialize, nil
}

type NullableIndicatorType struct {
	value *IndicatorType
	isSet bool
}

func (v NullableIndicatorType) Get() *IndicatorType {
	return v.value
}

func (v *NullableIndicatorType) Set(val *IndicatorType) {
	v.value = val
	v.isSet = true
}

func (v NullableIndicatorType) IsSet() bool {
	return v.isSet
}

func (v *NullableIndicatorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIndicatorType(val *IndicatorType) *NullableIndicatorType {
	return &NullableIndicatorType{value: val, isSet: true}
}

func (v NullableIndicatorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIndicatorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


