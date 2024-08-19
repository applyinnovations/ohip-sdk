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

// checks if the CodeDescriptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CodeDescriptionType{}

// CodeDescriptionType This contains a generic code and description information.
type CodeDescriptionType struct {
	// Code.
	Code *string `json:"code,omitempty"`
	// description.
	Description *string `json:"description,omitempty"`
}

// NewCodeDescriptionType instantiates a new CodeDescriptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCodeDescriptionType() *CodeDescriptionType {
	this := CodeDescriptionType{}
	return &this
}

// NewCodeDescriptionTypeWithDefaults instantiates a new CodeDescriptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCodeDescriptionTypeWithDefaults() *CodeDescriptionType {
	this := CodeDescriptionType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CodeDescriptionType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeDescriptionType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CodeDescriptionType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CodeDescriptionType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CodeDescriptionType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CodeDescriptionType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CodeDescriptionType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CodeDescriptionType) SetDescription(v string) {
	o.Description = &v
}

func (o CodeDescriptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CodeDescriptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableCodeDescriptionType struct {
	value *CodeDescriptionType
	isSet bool
}

func (v NullableCodeDescriptionType) Get() *CodeDescriptionType {
	return v.value
}

func (v *NullableCodeDescriptionType) Set(val *CodeDescriptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableCodeDescriptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableCodeDescriptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCodeDescriptionType(val *CodeDescriptionType) *NullableCodeDescriptionType {
	return &NullableCodeDescriptionType{value: val, isSet: true}
}

func (v NullableCodeDescriptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCodeDescriptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


