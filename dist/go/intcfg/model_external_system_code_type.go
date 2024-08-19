/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ExternalSystemCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExternalSystemCodeType{}

// ExternalSystemCodeType External System Code
type ExternalSystemCodeType struct {
	Code *string `json:"code,omitempty"`
}

// NewExternalSystemCodeType instantiates a new ExternalSystemCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExternalSystemCodeType() *ExternalSystemCodeType {
	this := ExternalSystemCodeType{}
	return &this
}

// NewExternalSystemCodeTypeWithDefaults instantiates a new ExternalSystemCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExternalSystemCodeTypeWithDefaults() *ExternalSystemCodeType {
	this := ExternalSystemCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ExternalSystemCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalSystemCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ExternalSystemCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ExternalSystemCodeType) SetCode(v string) {
	o.Code = &v
}

func (o ExternalSystemCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExternalSystemCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	return toSerialize, nil
}

type NullableExternalSystemCodeType struct {
	value *ExternalSystemCodeType
	isSet bool
}

func (v NullableExternalSystemCodeType) Get() *ExternalSystemCodeType {
	return v.value
}

func (v *NullableExternalSystemCodeType) Set(val *ExternalSystemCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableExternalSystemCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableExternalSystemCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExternalSystemCodeType(val *ExternalSystemCodeType) *NullableExternalSystemCodeType {
	return &NullableExternalSystemCodeType{value: val, isSet: true}
}

func (v NullableExternalSystemCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExternalSystemCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


