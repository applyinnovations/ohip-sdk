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

// checks if the TranslationTextType100 type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TranslationTextType100{}

// TranslationTextType100 Contains Multiple translated texts and language codes.
type TranslationTextType100 struct {
	// Default text with Character length from 0 to 100.
	DefaultText *string `json:"defaultText,omitempty"`
	// Language code for the translation.
	TranslatedTexts []TranslationsTextTypeInner `json:"translatedTexts,omitempty"`
}

// NewTranslationTextType100 instantiates a new TranslationTextType100 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTranslationTextType100() *TranslationTextType100 {
	this := TranslationTextType100{}
	return &this
}

// NewTranslationTextType100WithDefaults instantiates a new TranslationTextType100 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTranslationTextType100WithDefaults() *TranslationTextType100 {
	this := TranslationTextType100{}
	return &this
}

// GetDefaultText returns the DefaultText field value if set, zero value otherwise.
func (o *TranslationTextType100) GetDefaultText() string {
	if o == nil || IsNil(o.DefaultText) {
		var ret string
		return ret
	}
	return *o.DefaultText
}

// GetDefaultTextOk returns a tuple with the DefaultText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationTextType100) GetDefaultTextOk() (*string, bool) {
	if o == nil || IsNil(o.DefaultText) {
		return nil, false
	}
	return o.DefaultText, true
}

// HasDefaultText returns a boolean if a field has been set.
func (o *TranslationTextType100) HasDefaultText() bool {
	if o != nil && !IsNil(o.DefaultText) {
		return true
	}

	return false
}

// SetDefaultText gets a reference to the given string and assigns it to the DefaultText field.
func (o *TranslationTextType100) SetDefaultText(v string) {
	o.DefaultText = &v
}

// GetTranslatedTexts returns the TranslatedTexts field value if set, zero value otherwise.
func (o *TranslationTextType100) GetTranslatedTexts() []TranslationsTextTypeInner {
	if o == nil || IsNil(o.TranslatedTexts) {
		var ret []TranslationsTextTypeInner
		return ret
	}
	return o.TranslatedTexts
}

// GetTranslatedTextsOk returns a tuple with the TranslatedTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationTextType100) GetTranslatedTextsOk() ([]TranslationsTextTypeInner, bool) {
	if o == nil || IsNil(o.TranslatedTexts) {
		return nil, false
	}
	return o.TranslatedTexts, true
}

// HasTranslatedTexts returns a boolean if a field has been set.
func (o *TranslationTextType100) HasTranslatedTexts() bool {
	if o != nil && !IsNil(o.TranslatedTexts) {
		return true
	}

	return false
}

// SetTranslatedTexts gets a reference to the given []TranslationsTextTypeInner and assigns it to the TranslatedTexts field.
func (o *TranslationTextType100) SetTranslatedTexts(v []TranslationsTextTypeInner) {
	o.TranslatedTexts = v
}

func (o TranslationTextType100) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TranslationTextType100) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultText) {
		toSerialize["defaultText"] = o.DefaultText
	}
	if !IsNil(o.TranslatedTexts) {
		toSerialize["translatedTexts"] = o.TranslatedTexts
	}
	return toSerialize, nil
}

type NullableTranslationTextType100 struct {
	value *TranslationTextType100
	isSet bool
}

func (v NullableTranslationTextType100) Get() *TranslationTextType100 {
	return v.value
}

func (v *NullableTranslationTextType100) Set(val *TranslationTextType100) {
	v.value = val
	v.isSet = true
}

func (v NullableTranslationTextType100) IsSet() bool {
	return v.isSet
}

func (v *NullableTranslationTextType100) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTranslationTextType100(val *TranslationTextType100) *NullableTranslationTextType100 {
	return &NullableTranslationTextType100{value: val, isSet: true}
}

func (v NullableTranslationTextType100) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTranslationTextType100) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


