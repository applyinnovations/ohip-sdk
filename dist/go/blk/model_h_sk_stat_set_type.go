/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the HSKStatSetType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HSKStatSetType{}

// HSKStatSetType Base statistic set holder which defines the span of the statistical data.
type HSKStatSetType struct {
	Code *string `json:"code,omitempty"`
	End *string `json:"end,omitempty"`
	Start *string `json:"start,omitempty"`
	Stat []HSKStatType `json:"stat,omitempty"`
}

// NewHSKStatSetType instantiates a new HSKStatSetType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHSKStatSetType() *HSKStatSetType {
	this := HSKStatSetType{}
	return &this
}

// NewHSKStatSetTypeWithDefaults instantiates a new HSKStatSetType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHSKStatSetTypeWithDefaults() *HSKStatSetType {
	this := HSKStatSetType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HSKStatSetType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatSetType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HSKStatSetType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HSKStatSetType) SetCode(v string) {
	o.Code = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *HSKStatSetType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatSetType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *HSKStatSetType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *HSKStatSetType) SetEnd(v string) {
	o.End = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *HSKStatSetType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatSetType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *HSKStatSetType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *HSKStatSetType) SetStart(v string) {
	o.Start = &v
}

// GetStat returns the Stat field value if set, zero value otherwise.
func (o *HSKStatSetType) GetStat() []HSKStatType {
	if o == nil || IsNil(o.Stat) {
		var ret []HSKStatType
		return ret
	}
	return o.Stat
}

// GetStatOk returns a tuple with the Stat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HSKStatSetType) GetStatOk() ([]HSKStatType, bool) {
	if o == nil || IsNil(o.Stat) {
		return nil, false
	}
	return o.Stat, true
}

// HasStat returns a boolean if a field has been set.
func (o *HSKStatSetType) HasStat() bool {
	if o != nil && !IsNil(o.Stat) {
		return true
	}

	return false
}

// SetStat gets a reference to the given []HSKStatType and assigns it to the Stat field.
func (o *HSKStatSetType) SetStat(v []HSKStatType) {
	o.Stat = v
}

func (o HSKStatSetType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HSKStatSetType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	if !IsNil(o.Stat) {
		toSerialize["stat"] = o.Stat
	}
	return toSerialize, nil
}

type NullableHSKStatSetType struct {
	value *HSKStatSetType
	isSet bool
}

func (v NullableHSKStatSetType) Get() *HSKStatSetType {
	return v.value
}

func (v *NullableHSKStatSetType) Set(val *HSKStatSetType) {
	v.value = val
	v.isSet = true
}

func (v NullableHSKStatSetType) IsSet() bool {
	return v.isSet
}

func (v *NullableHSKStatSetType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHSKStatSetType(val *HSKStatSetType) *NullableHSKStatSetType {
	return &NullableHSKStatSetType{value: val, isSet: true}
}

func (v NullableHSKStatSetType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHSKStatSetType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

