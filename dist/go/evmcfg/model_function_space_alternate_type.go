/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the FunctionSpaceAlternateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceAlternateType{}

// FunctionSpaceAlternateType Details for alternate function spaces.
type FunctionSpaceAlternateType struct {
	ExcludedCateringEventTypes []string `json:"excludedCateringEventTypes,omitempty"`
	// Flag to indicate if the function space must have an alternate space when used.
	ForceAlternate *bool `json:"forceAlternate,omitempty"`
}

// NewFunctionSpaceAlternateType instantiates a new FunctionSpaceAlternateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceAlternateType() *FunctionSpaceAlternateType {
	this := FunctionSpaceAlternateType{}
	return &this
}

// NewFunctionSpaceAlternateTypeWithDefaults instantiates a new FunctionSpaceAlternateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceAlternateTypeWithDefaults() *FunctionSpaceAlternateType {
	this := FunctionSpaceAlternateType{}
	return &this
}

// GetExcludedCateringEventTypes returns the ExcludedCateringEventTypes field value if set, zero value otherwise.
func (o *FunctionSpaceAlternateType) GetExcludedCateringEventTypes() []string {
	if o == nil || IsNil(o.ExcludedCateringEventTypes) {
		var ret []string
		return ret
	}
	return o.ExcludedCateringEventTypes
}

// GetExcludedCateringEventTypesOk returns a tuple with the ExcludedCateringEventTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAlternateType) GetExcludedCateringEventTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.ExcludedCateringEventTypes) {
		return nil, false
	}
	return o.ExcludedCateringEventTypes, true
}

// HasExcludedCateringEventTypes returns a boolean if a field has been set.
func (o *FunctionSpaceAlternateType) HasExcludedCateringEventTypes() bool {
	if o != nil && !IsNil(o.ExcludedCateringEventTypes) {
		return true
	}

	return false
}

// SetExcludedCateringEventTypes gets a reference to the given []string and assigns it to the ExcludedCateringEventTypes field.
func (o *FunctionSpaceAlternateType) SetExcludedCateringEventTypes(v []string) {
	o.ExcludedCateringEventTypes = v
}

// GetForceAlternate returns the ForceAlternate field value if set, zero value otherwise.
func (o *FunctionSpaceAlternateType) GetForceAlternate() bool {
	if o == nil || IsNil(o.ForceAlternate) {
		var ret bool
		return ret
	}
	return *o.ForceAlternate
}

// GetForceAlternateOk returns a tuple with the ForceAlternate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAlternateType) GetForceAlternateOk() (*bool, bool) {
	if o == nil || IsNil(o.ForceAlternate) {
		return nil, false
	}
	return o.ForceAlternate, true
}

// HasForceAlternate returns a boolean if a field has been set.
func (o *FunctionSpaceAlternateType) HasForceAlternate() bool {
	if o != nil && !IsNil(o.ForceAlternate) {
		return true
	}

	return false
}

// SetForceAlternate gets a reference to the given bool and assigns it to the ForceAlternate field.
func (o *FunctionSpaceAlternateType) SetForceAlternate(v bool) {
	o.ForceAlternate = &v
}

func (o FunctionSpaceAlternateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceAlternateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExcludedCateringEventTypes) {
		toSerialize["excludedCateringEventTypes"] = o.ExcludedCateringEventTypes
	}
	if !IsNil(o.ForceAlternate) {
		toSerialize["forceAlternate"] = o.ForceAlternate
	}
	return toSerialize, nil
}

type NullableFunctionSpaceAlternateType struct {
	value *FunctionSpaceAlternateType
	isSet bool
}

func (v NullableFunctionSpaceAlternateType) Get() *FunctionSpaceAlternateType {
	return v.value
}

func (v *NullableFunctionSpaceAlternateType) Set(val *FunctionSpaceAlternateType) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceAlternateType) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceAlternateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceAlternateType(val *FunctionSpaceAlternateType) *NullableFunctionSpaceAlternateType {
	return &NullableFunctionSpaceAlternateType{value: val, isSet: true}
}

func (v NullableFunctionSpaceAlternateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceAlternateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

