/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the TranslationsTextTypeInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TranslationsTextTypeInner{}

// TranslationsTextTypeInner Language code for the translation.
type TranslationsTextTypeInner struct {
	// Language identification.
	Language *string `json:"language,omitempty"`
	// Used for Character Strings, length 0 to 2000.
	Value *string `json:"value,omitempty"`
}

// NewTranslationsTextTypeInner instantiates a new TranslationsTextTypeInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTranslationsTextTypeInner() *TranslationsTextTypeInner {
	this := TranslationsTextTypeInner{}
	return &this
}

// NewTranslationsTextTypeInnerWithDefaults instantiates a new TranslationsTextTypeInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTranslationsTextTypeInnerWithDefaults() *TranslationsTextTypeInner {
	this := TranslationsTextTypeInner{}
	return &this
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *TranslationsTextTypeInner) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationsTextTypeInner) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *TranslationsTextTypeInner) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *TranslationsTextTypeInner) SetLanguage(v string) {
	o.Language = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *TranslationsTextTypeInner) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationsTextTypeInner) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *TranslationsTextTypeInner) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *TranslationsTextTypeInner) SetValue(v string) {
	o.Value = &v
}

func (o TranslationsTextTypeInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TranslationsTextTypeInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableTranslationsTextTypeInner struct {
	value *TranslationsTextTypeInner
	isSet bool
}

func (v NullableTranslationsTextTypeInner) Get() *TranslationsTextTypeInner {
	return v.value
}

func (v *NullableTranslationsTextTypeInner) Set(val *TranslationsTextTypeInner) {
	v.value = val
	v.isSet = true
}

func (v NullableTranslationsTextTypeInner) IsSet() bool {
	return v.isSet
}

func (v *NullableTranslationsTextTypeInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTranslationsTextTypeInner(val *TranslationsTextTypeInner) *NullableTranslationsTextTypeInner {
	return &NullableTranslationsTextTypeInner{value: val, isSet: true}
}

func (v NullableTranslationsTextTypeInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTranslationsTextTypeInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


