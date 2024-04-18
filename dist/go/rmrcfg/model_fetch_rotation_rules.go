/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the FetchRotationRules type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchRotationRules{}

// FetchRotationRules Response object for retrieving rotation setup rules for a given property
type FetchRotationRules struct {
	Links []InstanceLink `json:"links,omitempty"`
	RotationRulesResult *RotationRulesResultType `json:"rotationRulesResult,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFetchRotationRules instantiates a new FetchRotationRules object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchRotationRules() *FetchRotationRules {
	this := FetchRotationRules{}
	return &this
}

// NewFetchRotationRulesWithDefaults instantiates a new FetchRotationRules object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchRotationRulesWithDefaults() *FetchRotationRules {
	this := FetchRotationRules{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FetchRotationRules) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchRotationRules) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FetchRotationRules) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FetchRotationRules) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRotationRulesResult returns the RotationRulesResult field value if set, zero value otherwise.
func (o *FetchRotationRules) GetRotationRulesResult() RotationRulesResultType {
	if o == nil || IsNil(o.RotationRulesResult) {
		var ret RotationRulesResultType
		return ret
	}
	return *o.RotationRulesResult
}

// GetRotationRulesResultOk returns a tuple with the RotationRulesResult field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchRotationRules) GetRotationRulesResultOk() (*RotationRulesResultType, bool) {
	if o == nil || IsNil(o.RotationRulesResult) {
		return nil, false
	}
	return o.RotationRulesResult, true
}

// HasRotationRulesResult returns a boolean if a field has been set.
func (o *FetchRotationRules) HasRotationRulesResult() bool {
	if o != nil && !IsNil(o.RotationRulesResult) {
		return true
	}

	return false
}

// SetRotationRulesResult gets a reference to the given RotationRulesResultType and assigns it to the RotationRulesResult field.
func (o *FetchRotationRules) SetRotationRulesResult(v RotationRulesResultType) {
	o.RotationRulesResult = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FetchRotationRules) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchRotationRules) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FetchRotationRules) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FetchRotationRules) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FetchRotationRules) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchRotationRules) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RotationRulesResult) {
		toSerialize["rotationRulesResult"] = o.RotationRulesResult
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFetchRotationRules struct {
	value *FetchRotationRules
	isSet bool
}

func (v NullableFetchRotationRules) Get() *FetchRotationRules {
	return v.value
}

func (v *NullableFetchRotationRules) Set(val *FetchRotationRules) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchRotationRules) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchRotationRules) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchRotationRules(val *FetchRotationRules) *NullableFetchRotationRules {
	return &NullableFetchRotationRules{value: val, isSet: true}
}

func (v NullableFetchRotationRules) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchRotationRules) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

