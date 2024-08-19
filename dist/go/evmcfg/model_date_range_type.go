/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the DateRangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DateRangeType{}

// DateRangeType Date Range with Start and End dates.
type DateRangeType struct {
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewDateRangeType instantiates a new DateRangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDateRangeType() *DateRangeType {
	this := DateRangeType{}
	return &this
}

// NewDateRangeTypeWithDefaults instantiates a new DateRangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDateRangeTypeWithDefaults() *DateRangeType {
	this := DateRangeType{}
	return &this
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *DateRangeType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateRangeType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *DateRangeType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *DateRangeType) SetEnd(v string) {
	o.End = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *DateRangeType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateRangeType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *DateRangeType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *DateRangeType) SetStart(v string) {
	o.Start = &v
}

func (o DateRangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DateRangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableDateRangeType struct {
	value *DateRangeType
	isSet bool
}

func (v NullableDateRangeType) Get() *DateRangeType {
	return v.value
}

func (v *NullableDateRangeType) Set(val *DateRangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableDateRangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableDateRangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDateRangeType(val *DateRangeType) *NullableDateRangeType {
	return &NullableDateRangeType{value: val, isSet: true}
}

func (v NullableDateRangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDateRangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


