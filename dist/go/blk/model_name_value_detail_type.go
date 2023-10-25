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

// checks if the NameValueDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NameValueDetailType{}

// NameValueDetailType Detailed information returned during name value search.
type NameValueDetailType struct {
	// List of name value pairs.
	NameValues []NameValueType `json:"nameValues,omitempty"`
}

// NewNameValueDetailType instantiates a new NameValueDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNameValueDetailType() *NameValueDetailType {
	this := NameValueDetailType{}
	return &this
}

// NewNameValueDetailTypeWithDefaults instantiates a new NameValueDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNameValueDetailTypeWithDefaults() *NameValueDetailType {
	this := NameValueDetailType{}
	return &this
}

// GetNameValues returns the NameValues field value if set, zero value otherwise.
func (o *NameValueDetailType) GetNameValues() []NameValueType {
	if o == nil || IsNil(o.NameValues) {
		var ret []NameValueType
		return ret
	}
	return o.NameValues
}

// GetNameValuesOk returns a tuple with the NameValues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueDetailType) GetNameValuesOk() ([]NameValueType, bool) {
	if o == nil || IsNil(o.NameValues) {
		return nil, false
	}
	return o.NameValues, true
}

// HasNameValues returns a boolean if a field has been set.
func (o *NameValueDetailType) HasNameValues() bool {
	if o != nil && !IsNil(o.NameValues) {
		return true
	}

	return false
}

// SetNameValues gets a reference to the given []NameValueType and assigns it to the NameValues field.
func (o *NameValueDetailType) SetNameValues(v []NameValueType) {
	o.NameValues = v
}

func (o NameValueDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NameValueDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NameValues) {
		toSerialize["nameValues"] = o.NameValues
	}
	return toSerialize, nil
}

type NullableNameValueDetailType struct {
	value *NameValueDetailType
	isSet bool
}

func (v NullableNameValueDetailType) Get() *NameValueDetailType {
	return v.value
}

func (v *NullableNameValueDetailType) Set(val *NameValueDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableNameValueDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableNameValueDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNameValueDetailType(val *NameValueDetailType) *NullableNameValueDetailType {
	return &NullableNameValueDetailType{value: val, isSet: true}
}

func (v NullableNameValueDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNameValueDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


