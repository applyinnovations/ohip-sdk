/*
OPERA Cloud List of Values Management API

APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lov

import (
	"encoding/json"
)

// checks if the ParametersNameType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ParametersNameType{}

// ParametersNameType struct for ParametersNameType
type ParametersNameType struct {
	// This element depicts if the given parameter is mandatory for the LOV.
	Mandatory *bool `json:"mandatory,omitempty"`
	// Name of the parameter needed by the LOV.
	ParameterName *string `json:"parameterName,omitempty"`
}

// NewParametersNameType instantiates a new ParametersNameType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewParametersNameType() *ParametersNameType {
	this := ParametersNameType{}
	return &this
}

// NewParametersNameTypeWithDefaults instantiates a new ParametersNameType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewParametersNameTypeWithDefaults() *ParametersNameType {
	this := ParametersNameType{}
	return &this
}

// GetMandatory returns the Mandatory field value if set, zero value otherwise.
func (o *ParametersNameType) GetMandatory() bool {
	if o == nil || IsNil(o.Mandatory) {
		var ret bool
		return ret
	}
	return *o.Mandatory
}

// GetMandatoryOk returns a tuple with the Mandatory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParametersNameType) GetMandatoryOk() (*bool, bool) {
	if o == nil || IsNil(o.Mandatory) {
		return nil, false
	}
	return o.Mandatory, true
}

// HasMandatory returns a boolean if a field has been set.
func (o *ParametersNameType) HasMandatory() bool {
	if o != nil && !IsNil(o.Mandatory) {
		return true
	}

	return false
}

// SetMandatory gets a reference to the given bool and assigns it to the Mandatory field.
func (o *ParametersNameType) SetMandatory(v bool) {
	o.Mandatory = &v
}

// GetParameterName returns the ParameterName field value if set, zero value otherwise.
func (o *ParametersNameType) GetParameterName() string {
	if o == nil || IsNil(o.ParameterName) {
		var ret string
		return ret
	}
	return *o.ParameterName
}

// GetParameterNameOk returns a tuple with the ParameterName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParametersNameType) GetParameterNameOk() (*string, bool) {
	if o == nil || IsNil(o.ParameterName) {
		return nil, false
	}
	return o.ParameterName, true
}

// HasParameterName returns a boolean if a field has been set.
func (o *ParametersNameType) HasParameterName() bool {
	if o != nil && !IsNil(o.ParameterName) {
		return true
	}

	return false
}

// SetParameterName gets a reference to the given string and assigns it to the ParameterName field.
func (o *ParametersNameType) SetParameterName(v string) {
	o.ParameterName = &v
}

func (o ParametersNameType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ParametersNameType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Mandatory) {
		toSerialize["mandatory"] = o.Mandatory
	}
	if !IsNil(o.ParameterName) {
		toSerialize["parameterName"] = o.ParameterName
	}
	return toSerialize, nil
}

type NullableParametersNameType struct {
	value *ParametersNameType
	isSet bool
}

func (v NullableParametersNameType) Get() *ParametersNameType {
	return v.value
}

func (v *NullableParametersNameType) Set(val *ParametersNameType) {
	v.value = val
	v.isSet = true
}

func (v NullableParametersNameType) IsSet() bool {
	return v.isSet
}

func (v *NullableParametersNameType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParametersNameType(val *ParametersNameType) *NullableParametersNameType {
	return &NullableParametersNameType{value: val, isSet: true}
}

func (v NullableParametersNameType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParametersNameType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


