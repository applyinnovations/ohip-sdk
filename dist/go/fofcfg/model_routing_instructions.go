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

// checks if the RoutingInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutingInstructions{}

// RoutingInstructions struct for RoutingInstructions
type RoutingInstructions struct {
	Links []InstanceLink `json:"links,omitempty"`
	// This type holds a collection of routing instructions.
	RoutingInstructions []ConfigRoutingInstructionType `json:"routingInstructions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRoutingInstructions instantiates a new RoutingInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutingInstructions() *RoutingInstructions {
	this := RoutingInstructions{}
	return &this
}

// NewRoutingInstructionsWithDefaults instantiates a new RoutingInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutingInstructionsWithDefaults() *RoutingInstructions {
	this := RoutingInstructions{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoutingInstructions) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructions) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoutingInstructions) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoutingInstructions) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoutingInstructions returns the RoutingInstructions field value if set, zero value otherwise.
func (o *RoutingInstructions) GetRoutingInstructions() []ConfigRoutingInstructionType {
	if o == nil || IsNil(o.RoutingInstructions) {
		var ret []ConfigRoutingInstructionType
		return ret
	}
	return o.RoutingInstructions
}

// GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructions) GetRoutingInstructionsOk() ([]ConfigRoutingInstructionType, bool) {
	if o == nil || IsNil(o.RoutingInstructions) {
		return nil, false
	}
	return o.RoutingInstructions, true
}

// HasRoutingInstructions returns a boolean if a field has been set.
func (o *RoutingInstructions) HasRoutingInstructions() bool {
	if o != nil && !IsNil(o.RoutingInstructions) {
		return true
	}

	return false
}

// SetRoutingInstructions gets a reference to the given []ConfigRoutingInstructionType and assigns it to the RoutingInstructions field.
func (o *RoutingInstructions) SetRoutingInstructions(v []ConfigRoutingInstructionType) {
	o.RoutingInstructions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoutingInstructions) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructions) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoutingInstructions) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoutingInstructions) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RoutingInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutingInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoutingInstructions) {
		toSerialize["routingInstructions"] = o.RoutingInstructions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRoutingInstructions struct {
	value *RoutingInstructions
	isSet bool
}

func (v NullableRoutingInstructions) Get() *RoutingInstructions {
	return v.value
}

func (v *NullableRoutingInstructions) Set(val *RoutingInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutingInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutingInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutingInstructions(val *RoutingInstructions) *NullableRoutingInstructions {
	return &NullableRoutingInstructions{value: val, isSet: true}
}

func (v NullableRoutingInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutingInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


