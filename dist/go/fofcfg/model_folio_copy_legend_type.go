/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the FolioCopyLegendType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioCopyLegendType{}

// FolioCopyLegendType Search criteria to fetch folio copy legends information.
type FolioCopyLegendType struct {
	// Term code to be searched.
	Code *string `json:"code,omitempty"`
	// Term description
	Description *string `json:"description,omitempty"`
	// Language code to be searched.
	LanguageCode *string `json:"languageCode,omitempty"`
}

// NewFolioCopyLegendType instantiates a new FolioCopyLegendType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioCopyLegendType() *FolioCopyLegendType {
	this := FolioCopyLegendType{}
	return &this
}

// NewFolioCopyLegendTypeWithDefaults instantiates a new FolioCopyLegendType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioCopyLegendTypeWithDefaults() *FolioCopyLegendType {
	this := FolioCopyLegendType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *FolioCopyLegendType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioCopyLegendType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *FolioCopyLegendType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *FolioCopyLegendType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *FolioCopyLegendType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioCopyLegendType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *FolioCopyLegendType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *FolioCopyLegendType) SetDescription(v string) {
	o.Description = &v
}

// GetLanguageCode returns the LanguageCode field value if set, zero value otherwise.
func (o *FolioCopyLegendType) GetLanguageCode() string {
	if o == nil || IsNil(o.LanguageCode) {
		var ret string
		return ret
	}
	return *o.LanguageCode
}

// GetLanguageCodeOk returns a tuple with the LanguageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioCopyLegendType) GetLanguageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LanguageCode) {
		return nil, false
	}
	return o.LanguageCode, true
}

// HasLanguageCode returns a boolean if a field has been set.
func (o *FolioCopyLegendType) HasLanguageCode() bool {
	if o != nil && !IsNil(o.LanguageCode) {
		return true
	}

	return false
}

// SetLanguageCode gets a reference to the given string and assigns it to the LanguageCode field.
func (o *FolioCopyLegendType) SetLanguageCode(v string) {
	o.LanguageCode = &v
}

func (o FolioCopyLegendType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioCopyLegendType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.LanguageCode) {
		toSerialize["languageCode"] = o.LanguageCode
	}
	return toSerialize, nil
}

type NullableFolioCopyLegendType struct {
	value *FolioCopyLegendType
	isSet bool
}

func (v NullableFolioCopyLegendType) Get() *FolioCopyLegendType {
	return v.value
}

func (v *NullableFolioCopyLegendType) Set(val *FolioCopyLegendType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioCopyLegendType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioCopyLegendType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioCopyLegendType(val *FolioCopyLegendType) *NullableFolioCopyLegendType {
	return &NullableFolioCopyLegendType{value: val, isSet: true}
}

func (v NullableFolioCopyLegendType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioCopyLegendType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

