/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the TranslationTextType2000 type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TranslationTextType2000{}

// TranslationTextType2000 Contains Multiple translated texts and language codes.
type TranslationTextType2000 struct {
	// Default text with Character length from 0 to 2000.
	DefaultText *string `json:"defaultText,omitempty"`
	// Language code for the translation.
	Translations []TranslationsTextTypeInner `json:"translations,omitempty"`
}

// NewTranslationTextType2000 instantiates a new TranslationTextType2000 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTranslationTextType2000() *TranslationTextType2000 {
	this := TranslationTextType2000{}
	return &this
}

// NewTranslationTextType2000WithDefaults instantiates a new TranslationTextType2000 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTranslationTextType2000WithDefaults() *TranslationTextType2000 {
	this := TranslationTextType2000{}
	return &this
}

// GetDefaultText returns the DefaultText field value if set, zero value otherwise.
func (o *TranslationTextType2000) GetDefaultText() string {
	if o == nil || IsNil(o.DefaultText) {
		var ret string
		return ret
	}
	return *o.DefaultText
}

// GetDefaultTextOk returns a tuple with the DefaultText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationTextType2000) GetDefaultTextOk() (*string, bool) {
	if o == nil || IsNil(o.DefaultText) {
		return nil, false
	}
	return o.DefaultText, true
}

// HasDefaultText returns a boolean if a field has been set.
func (o *TranslationTextType2000) HasDefaultText() bool {
	if o != nil && !IsNil(o.DefaultText) {
		return true
	}

	return false
}

// SetDefaultText gets a reference to the given string and assigns it to the DefaultText field.
func (o *TranslationTextType2000) SetDefaultText(v string) {
	o.DefaultText = &v
}

// GetTranslations returns the Translations field value if set, zero value otherwise.
func (o *TranslationTextType2000) GetTranslations() []TranslationsTextTypeInner {
	if o == nil || IsNil(o.Translations) {
		var ret []TranslationsTextTypeInner
		return ret
	}
	return o.Translations
}

// GetTranslationsOk returns a tuple with the Translations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TranslationTextType2000) GetTranslationsOk() ([]TranslationsTextTypeInner, bool) {
	if o == nil || IsNil(o.Translations) {
		return nil, false
	}
	return o.Translations, true
}

// HasTranslations returns a boolean if a field has been set.
func (o *TranslationTextType2000) HasTranslations() bool {
	if o != nil && !IsNil(o.Translations) {
		return true
	}

	return false
}

// SetTranslations gets a reference to the given []TranslationsTextTypeInner and assigns it to the Translations field.
func (o *TranslationTextType2000) SetTranslations(v []TranslationsTextTypeInner) {
	o.Translations = v
}

func (o TranslationTextType2000) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TranslationTextType2000) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultText) {
		toSerialize["defaultText"] = o.DefaultText
	}
	if !IsNil(o.Translations) {
		toSerialize["translations"] = o.Translations
	}
	return toSerialize, nil
}

type NullableTranslationTextType2000 struct {
	value *TranslationTextType2000
	isSet bool
}

func (v NullableTranslationTextType2000) Get() *TranslationTextType2000 {
	return v.value
}

func (v *NullableTranslationTextType2000) Set(val *TranslationTextType2000) {
	v.value = val
	v.isSet = true
}

func (v NullableTranslationTextType2000) IsSet() bool {
	return v.isSet
}

func (v *NullableTranslationTextType2000) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTranslationTextType2000(val *TranslationTextType2000) *NullableTranslationTextType2000 {
	return &NullableTranslationTextType2000{value: val, isSet: true}
}

func (v NullableTranslationTextType2000) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTranslationTextType2000) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


