/*
OPERA Cloud List of Values Management API

APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lov

import (
	"encoding/json"
)

// checks if the LOVNameType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LOVNameType{}

// LOVNameType struct for LOVNameType
type LOVNameType struct {
	// Unique name for the LOV.
	Name *string `json:"name,omitempty"`
	// List of parameter names applicable for the particular LOV.
	Parameters []ParametersNameType `json:"parameters,omitempty"`
}

// NewLOVNameType instantiates a new LOVNameType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLOVNameType() *LOVNameType {
	this := LOVNameType{}
	return &this
}

// NewLOVNameTypeWithDefaults instantiates a new LOVNameType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLOVNameTypeWithDefaults() *LOVNameType {
	this := LOVNameType{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *LOVNameType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LOVNameType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *LOVNameType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *LOVNameType) SetName(v string) {
	o.Name = &v
}

// GetParameters returns the Parameters field value if set, zero value otherwise.
func (o *LOVNameType) GetParameters() []ParametersNameType {
	if o == nil || IsNil(o.Parameters) {
		var ret []ParametersNameType
		return ret
	}
	return o.Parameters
}

// GetParametersOk returns a tuple with the Parameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LOVNameType) GetParametersOk() ([]ParametersNameType, bool) {
	if o == nil || IsNil(o.Parameters) {
		return nil, false
	}
	return o.Parameters, true
}

// HasParameters returns a boolean if a field has been set.
func (o *LOVNameType) HasParameters() bool {
	if o != nil && !IsNil(o.Parameters) {
		return true
	}

	return false
}

// SetParameters gets a reference to the given []ParametersNameType and assigns it to the Parameters field.
func (o *LOVNameType) SetParameters(v []ParametersNameType) {
	o.Parameters = v
}

func (o LOVNameType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LOVNameType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Parameters) {
		toSerialize["parameters"] = o.Parameters
	}
	return toSerialize, nil
}

type NullableLOVNameType struct {
	value *LOVNameType
	isSet bool
}

func (v NullableLOVNameType) Get() *LOVNameType {
	return v.value
}

func (v *NullableLOVNameType) Set(val *LOVNameType) {
	v.value = val
	v.isSet = true
}

func (v NullableLOVNameType) IsSet() bool {
	return v.isSet
}

func (v *NullableLOVNameType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLOVNameType(val *LOVNameType) *NullableLOVNameType {
	return &NullableLOVNameType{value: val, isSet: true}
}

func (v NullableLOVNameType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLOVNameType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


