/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the NumberDescriptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NumberDescriptionType{}

// NumberDescriptionType Indicates type definition for Numbers.
type NumberDescriptionType struct {
	Description *TranslationTextType4000 `json:"description,omitempty"`
	// Used for Number specific codes for OPERA tables. Possible values of this pattern are 1, 10, 17, THOUSAND, BILLION, etc.
	NumberCode *string `json:"numberCode,omitempty"`
}

// NewNumberDescriptionType instantiates a new NumberDescriptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNumberDescriptionType() *NumberDescriptionType {
	this := NumberDescriptionType{}
	return &this
}

// NewNumberDescriptionTypeWithDefaults instantiates a new NumberDescriptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNumberDescriptionTypeWithDefaults() *NumberDescriptionType {
	this := NumberDescriptionType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *NumberDescriptionType) GetDescription() TranslationTextType4000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType4000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NumberDescriptionType) GetDescriptionOk() (*TranslationTextType4000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *NumberDescriptionType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType4000 and assigns it to the Description field.
func (o *NumberDescriptionType) SetDescription(v TranslationTextType4000) {
	o.Description = &v
}

// GetNumberCode returns the NumberCode field value if set, zero value otherwise.
func (o *NumberDescriptionType) GetNumberCode() string {
	if o == nil || IsNil(o.NumberCode) {
		var ret string
		return ret
	}
	return *o.NumberCode
}

// GetNumberCodeOk returns a tuple with the NumberCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NumberDescriptionType) GetNumberCodeOk() (*string, bool) {
	if o == nil || IsNil(o.NumberCode) {
		return nil, false
	}
	return o.NumberCode, true
}

// HasNumberCode returns a boolean if a field has been set.
func (o *NumberDescriptionType) HasNumberCode() bool {
	if o != nil && !IsNil(o.NumberCode) {
		return true
	}

	return false
}

// SetNumberCode gets a reference to the given string and assigns it to the NumberCode field.
func (o *NumberDescriptionType) SetNumberCode(v string) {
	o.NumberCode = &v
}

func (o NumberDescriptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NumberDescriptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.NumberCode) {
		toSerialize["numberCode"] = o.NumberCode
	}
	return toSerialize, nil
}

type NullableNumberDescriptionType struct {
	value *NumberDescriptionType
	isSet bool
}

func (v NullableNumberDescriptionType) Get() *NumberDescriptionType {
	return v.value
}

func (v *NullableNumberDescriptionType) Set(val *NumberDescriptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableNumberDescriptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableNumberDescriptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNumberDescriptionType(val *NumberDescriptionType) *NullableNumberDescriptionType {
	return &NullableNumberDescriptionType{value: val, isSet: true}
}

func (v NullableNumberDescriptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNumberDescriptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


