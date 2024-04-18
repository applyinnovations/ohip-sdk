/*
OPERA Cloud DataValueMapping Service API

APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package dvm

import (
	"encoding/json"
)

// checks if the DefaultValueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DefaultValueType{}

// DefaultValueType Details of the default value fetched for an interface and resort.
type DefaultValueType struct {
	DefaultValueType *DefaultValueCodeType `json:"defaultValueType,omitempty"`
	// Value used by the external vendors.
	ExternalDefault *string `json:"externalDefault,omitempty"`
	// Opera Value
	OperaDefault *string `json:"operaDefault,omitempty"`
}

// NewDefaultValueType instantiates a new DefaultValueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDefaultValueType() *DefaultValueType {
	this := DefaultValueType{}
	return &this
}

// NewDefaultValueTypeWithDefaults instantiates a new DefaultValueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDefaultValueTypeWithDefaults() *DefaultValueType {
	this := DefaultValueType{}
	return &this
}

// GetDefaultValueType returns the DefaultValueType field value if set, zero value otherwise.
func (o *DefaultValueType) GetDefaultValueType() DefaultValueCodeType {
	if o == nil || IsNil(o.DefaultValueType) {
		var ret DefaultValueCodeType
		return ret
	}
	return *o.DefaultValueType
}

// GetDefaultValueTypeOk returns a tuple with the DefaultValueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultValueType) GetDefaultValueTypeOk() (*DefaultValueCodeType, bool) {
	if o == nil || IsNil(o.DefaultValueType) {
		return nil, false
	}
	return o.DefaultValueType, true
}

// HasDefaultValueType returns a boolean if a field has been set.
func (o *DefaultValueType) HasDefaultValueType() bool {
	if o != nil && !IsNil(o.DefaultValueType) {
		return true
	}

	return false
}

// SetDefaultValueType gets a reference to the given DefaultValueCodeType and assigns it to the DefaultValueType field.
func (o *DefaultValueType) SetDefaultValueType(v DefaultValueCodeType) {
	o.DefaultValueType = &v
}

// GetExternalDefault returns the ExternalDefault field value if set, zero value otherwise.
func (o *DefaultValueType) GetExternalDefault() string {
	if o == nil || IsNil(o.ExternalDefault) {
		var ret string
		return ret
	}
	return *o.ExternalDefault
}

// GetExternalDefaultOk returns a tuple with the ExternalDefault field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultValueType) GetExternalDefaultOk() (*string, bool) {
	if o == nil || IsNil(o.ExternalDefault) {
		return nil, false
	}
	return o.ExternalDefault, true
}

// HasExternalDefault returns a boolean if a field has been set.
func (o *DefaultValueType) HasExternalDefault() bool {
	if o != nil && !IsNil(o.ExternalDefault) {
		return true
	}

	return false
}

// SetExternalDefault gets a reference to the given string and assigns it to the ExternalDefault field.
func (o *DefaultValueType) SetExternalDefault(v string) {
	o.ExternalDefault = &v
}

// GetOperaDefault returns the OperaDefault field value if set, zero value otherwise.
func (o *DefaultValueType) GetOperaDefault() string {
	if o == nil || IsNil(o.OperaDefault) {
		var ret string
		return ret
	}
	return *o.OperaDefault
}

// GetOperaDefaultOk returns a tuple with the OperaDefault field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultValueType) GetOperaDefaultOk() (*string, bool) {
	if o == nil || IsNil(o.OperaDefault) {
		return nil, false
	}
	return o.OperaDefault, true
}

// HasOperaDefault returns a boolean if a field has been set.
func (o *DefaultValueType) HasOperaDefault() bool {
	if o != nil && !IsNil(o.OperaDefault) {
		return true
	}

	return false
}

// SetOperaDefault gets a reference to the given string and assigns it to the OperaDefault field.
func (o *DefaultValueType) SetOperaDefault(v string) {
	o.OperaDefault = &v
}

func (o DefaultValueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DefaultValueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultValueType) {
		toSerialize["defaultValueType"] = o.DefaultValueType
	}
	if !IsNil(o.ExternalDefault) {
		toSerialize["externalDefault"] = o.ExternalDefault
	}
	if !IsNil(o.OperaDefault) {
		toSerialize["operaDefault"] = o.OperaDefault
	}
	return toSerialize, nil
}

type NullableDefaultValueType struct {
	value *DefaultValueType
	isSet bool
}

func (v NullableDefaultValueType) Get() *DefaultValueType {
	return v.value
}

func (v *NullableDefaultValueType) Set(val *DefaultValueType) {
	v.value = val
	v.isSet = true
}

func (v NullableDefaultValueType) IsSet() bool {
	return v.isSet
}

func (v *NullableDefaultValueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDefaultValueType(val *DefaultValueType) *NullableDefaultValueType {
	return &NullableDefaultValueType{value: val, isSet: true}
}

func (v NullableDefaultValueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDefaultValueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

