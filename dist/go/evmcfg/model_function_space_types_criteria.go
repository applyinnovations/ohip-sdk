/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the FunctionSpaceTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceTypesCriteria{}

// FunctionSpaceTypesCriteria Request object for creating Function Space Types.
type FunctionSpaceTypesCriteria struct {
	// List of Function Space Types.
	FunctionSpaceTypes []FunctionSpaceTypeType `json:"functionSpaceTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFunctionSpaceTypesCriteria instantiates a new FunctionSpaceTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceTypesCriteria() *FunctionSpaceTypesCriteria {
	this := FunctionSpaceTypesCriteria{}
	return &this
}

// NewFunctionSpaceTypesCriteriaWithDefaults instantiates a new FunctionSpaceTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceTypesCriteriaWithDefaults() *FunctionSpaceTypesCriteria {
	this := FunctionSpaceTypesCriteria{}
	return &this
}

// GetFunctionSpaceTypes returns the FunctionSpaceTypes field value if set, zero value otherwise.
func (o *FunctionSpaceTypesCriteria) GetFunctionSpaceTypes() []FunctionSpaceTypeType {
	if o == nil || IsNil(o.FunctionSpaceTypes) {
		var ret []FunctionSpaceTypeType
		return ret
	}
	return o.FunctionSpaceTypes
}

// GetFunctionSpaceTypesOk returns a tuple with the FunctionSpaceTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceTypesCriteria) GetFunctionSpaceTypesOk() ([]FunctionSpaceTypeType, bool) {
	if o == nil || IsNil(o.FunctionSpaceTypes) {
		return nil, false
	}
	return o.FunctionSpaceTypes, true
}

// HasFunctionSpaceTypes returns a boolean if a field has been set.
func (o *FunctionSpaceTypesCriteria) HasFunctionSpaceTypes() bool {
	if o != nil && !IsNil(o.FunctionSpaceTypes) {
		return true
	}

	return false
}

// SetFunctionSpaceTypes gets a reference to the given []FunctionSpaceTypeType and assigns it to the FunctionSpaceTypes field.
func (o *FunctionSpaceTypesCriteria) SetFunctionSpaceTypes(v []FunctionSpaceTypeType) {
	o.FunctionSpaceTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FunctionSpaceTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FunctionSpaceTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FunctionSpaceTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FunctionSpaceTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FunctionSpaceTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FunctionSpaceTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FunctionSpaceTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FunctionSpaceTypes) {
		toSerialize["functionSpaceTypes"] = o.FunctionSpaceTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFunctionSpaceTypesCriteria struct {
	value *FunctionSpaceTypesCriteria
	isSet bool
}

func (v NullableFunctionSpaceTypesCriteria) Get() *FunctionSpaceTypesCriteria {
	return v.value
}

func (v *NullableFunctionSpaceTypesCriteria) Set(val *FunctionSpaceTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceTypesCriteria(val *FunctionSpaceTypesCriteria) *NullableFunctionSpaceTypesCriteria {
	return &NullableFunctionSpaceTypesCriteria{value: val, isSet: true}
}

func (v NullableFunctionSpaceTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


