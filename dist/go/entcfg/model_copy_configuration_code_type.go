/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CopyConfigurationCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyConfigurationCodeType{}

// CopyConfigurationCodeType Information needed to copy configuration code from one property to the other.
type CopyConfigurationCodeType struct {
	// Property to which configuration code type to be copied to.
	TargetHotelCode []string `json:"targetHotelCode,omitempty"`
	// Code that is to be copied.
	SourceHotelCode *string `json:"sourceHotelCode,omitempty"`
	// Source hotel code from which code is to be copied from.
	Code *string `json:"code,omitempty"`
}

// NewCopyConfigurationCodeType instantiates a new CopyConfigurationCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyConfigurationCodeType() *CopyConfigurationCodeType {
	this := CopyConfigurationCodeType{}
	return &this
}

// NewCopyConfigurationCodeTypeWithDefaults instantiates a new CopyConfigurationCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyConfigurationCodeTypeWithDefaults() *CopyConfigurationCodeType {
	this := CopyConfigurationCodeType{}
	return &this
}

// GetTargetHotelCode returns the TargetHotelCode field value if set, zero value otherwise.
func (o *CopyConfigurationCodeType) GetTargetHotelCode() []string {
	if o == nil || IsNil(o.TargetHotelCode) {
		var ret []string
		return ret
	}
	return o.TargetHotelCode
}

// GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyConfigurationCodeType) GetTargetHotelCodeOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCode) {
		return nil, false
	}
	return o.TargetHotelCode, true
}

// HasTargetHotelCode returns a boolean if a field has been set.
func (o *CopyConfigurationCodeType) HasTargetHotelCode() bool {
	if o != nil && !IsNil(o.TargetHotelCode) {
		return true
	}

	return false
}

// SetTargetHotelCode gets a reference to the given []string and assigns it to the TargetHotelCode field.
func (o *CopyConfigurationCodeType) SetTargetHotelCode(v []string) {
	o.TargetHotelCode = v
}

// GetSourceHotelCode returns the SourceHotelCode field value if set, zero value otherwise.
func (o *CopyConfigurationCodeType) GetSourceHotelCode() string {
	if o == nil || IsNil(o.SourceHotelCode) {
		var ret string
		return ret
	}
	return *o.SourceHotelCode
}

// GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyConfigurationCodeType) GetSourceHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceHotelCode) {
		return nil, false
	}
	return o.SourceHotelCode, true
}

// HasSourceHotelCode returns a boolean if a field has been set.
func (o *CopyConfigurationCodeType) HasSourceHotelCode() bool {
	if o != nil && !IsNil(o.SourceHotelCode) {
		return true
	}

	return false
}

// SetSourceHotelCode gets a reference to the given string and assigns it to the SourceHotelCode field.
func (o *CopyConfigurationCodeType) SetSourceHotelCode(v string) {
	o.SourceHotelCode = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CopyConfigurationCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyConfigurationCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CopyConfigurationCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CopyConfigurationCodeType) SetCode(v string) {
	o.Code = &v
}

func (o CopyConfigurationCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyConfigurationCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TargetHotelCode) {
		toSerialize["targetHotelCode"] = o.TargetHotelCode
	}
	if !IsNil(o.SourceHotelCode) {
		toSerialize["sourceHotelCode"] = o.SourceHotelCode
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	return toSerialize, nil
}

type NullableCopyConfigurationCodeType struct {
	value *CopyConfigurationCodeType
	isSet bool
}

func (v NullableCopyConfigurationCodeType) Get() *CopyConfigurationCodeType {
	return v.value
}

func (v *NullableCopyConfigurationCodeType) Set(val *CopyConfigurationCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyConfigurationCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyConfigurationCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyConfigurationCodeType(val *CopyConfigurationCodeType) *NullableCopyConfigurationCodeType {
	return &NullableCopyConfigurationCodeType{value: val, isSet: true}
}

func (v NullableCopyConfigurationCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyConfigurationCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


