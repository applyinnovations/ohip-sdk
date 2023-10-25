/*
OPERA Cloud Leisure Management API

APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lms

import (
	"encoding/json"
)

// checks if the FormattedTextTextType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FormattedTextTextType{}

// FormattedTextTextType Provides text and indicates whether it is formatted or not.
type FormattedTextTextType struct {
	// Language identification.
	Language *string `json:"language,omitempty"`
	// Property Value
	Value *string `json:"value,omitempty"`
}

// NewFormattedTextTextType instantiates a new FormattedTextTextType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFormattedTextTextType() *FormattedTextTextType {
	this := FormattedTextTextType{}
	return &this
}

// NewFormattedTextTextTypeWithDefaults instantiates a new FormattedTextTextType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFormattedTextTextTypeWithDefaults() *FormattedTextTextType {
	this := FormattedTextTextType{}
	return &this
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *FormattedTextTextType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FormattedTextTextType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *FormattedTextTextType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *FormattedTextTextType) SetLanguage(v string) {
	o.Language = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *FormattedTextTextType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FormattedTextTextType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *FormattedTextTextType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *FormattedTextTextType) SetValue(v string) {
	o.Value = &v
}

func (o FormattedTextTextType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FormattedTextTextType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableFormattedTextTextType struct {
	value *FormattedTextTextType
	isSet bool
}

func (v NullableFormattedTextTextType) Get() *FormattedTextTextType {
	return v.value
}

func (v *NullableFormattedTextTextType) Set(val *FormattedTextTextType) {
	v.value = val
	v.isSet = true
}

func (v NullableFormattedTextTextType) IsSet() bool {
	return v.isSet
}

func (v *NullableFormattedTextTextType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFormattedTextTextType(val *FormattedTextTextType) *NullableFormattedTextTextType {
	return &NullableFormattedTextTextType{value: val, isSet: true}
}

func (v NullableFormattedTextTextType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFormattedTextTextType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


