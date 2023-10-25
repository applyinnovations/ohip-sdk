/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the KeywordType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &KeywordType{}

// KeywordType struct for KeywordType
type KeywordType struct {
	KeywordDetail *KeywordDetailType `json:"keywordDetail,omitempty"`
	// The type of keyword
	Type *string `json:"type,omitempty"`
	// The keyword value.
	Keyword *string `json:"keyword,omitempty"`
}

// NewKeywordType instantiates a new KeywordType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewKeywordType() *KeywordType {
	this := KeywordType{}
	return &this
}

// NewKeywordTypeWithDefaults instantiates a new KeywordType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewKeywordTypeWithDefaults() *KeywordType {
	this := KeywordType{}
	return &this
}

// GetKeywordDetail returns the KeywordDetail field value if set, zero value otherwise.
func (o *KeywordType) GetKeywordDetail() KeywordDetailType {
	if o == nil || IsNil(o.KeywordDetail) {
		var ret KeywordDetailType
		return ret
	}
	return *o.KeywordDetail
}

// GetKeywordDetailOk returns a tuple with the KeywordDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *KeywordType) GetKeywordDetailOk() (*KeywordDetailType, bool) {
	if o == nil || IsNil(o.KeywordDetail) {
		return nil, false
	}
	return o.KeywordDetail, true
}

// HasKeywordDetail returns a boolean if a field has been set.
func (o *KeywordType) HasKeywordDetail() bool {
	if o != nil && !IsNil(o.KeywordDetail) {
		return true
	}

	return false
}

// SetKeywordDetail gets a reference to the given KeywordDetailType and assigns it to the KeywordDetail field.
func (o *KeywordType) SetKeywordDetail(v KeywordDetailType) {
	o.KeywordDetail = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *KeywordType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *KeywordType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *KeywordType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *KeywordType) SetType(v string) {
	o.Type = &v
}

// GetKeyword returns the Keyword field value if set, zero value otherwise.
func (o *KeywordType) GetKeyword() string {
	if o == nil || IsNil(o.Keyword) {
		var ret string
		return ret
	}
	return *o.Keyword
}

// GetKeywordOk returns a tuple with the Keyword field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *KeywordType) GetKeywordOk() (*string, bool) {
	if o == nil || IsNil(o.Keyword) {
		return nil, false
	}
	return o.Keyword, true
}

// HasKeyword returns a boolean if a field has been set.
func (o *KeywordType) HasKeyword() bool {
	if o != nil && !IsNil(o.Keyword) {
		return true
	}

	return false
}

// SetKeyword gets a reference to the given string and assigns it to the Keyword field.
func (o *KeywordType) SetKeyword(v string) {
	o.Keyword = &v
}

func (o KeywordType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o KeywordType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.KeywordDetail) {
		toSerialize["keywordDetail"] = o.KeywordDetail
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Keyword) {
		toSerialize["keyword"] = o.Keyword
	}
	return toSerialize, nil
}

type NullableKeywordType struct {
	value *KeywordType
	isSet bool
}

func (v NullableKeywordType) Get() *KeywordType {
	return v.value
}

func (v *NullableKeywordType) Set(val *KeywordType) {
	v.value = val
	v.isSet = true
}

func (v NullableKeywordType) IsSet() bool {
	return v.isSet
}

func (v *NullableKeywordType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableKeywordType(val *KeywordType) *NullableKeywordType {
	return &NullableKeywordType{value: val, isSet: true}
}

func (v NullableKeywordType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableKeywordType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


