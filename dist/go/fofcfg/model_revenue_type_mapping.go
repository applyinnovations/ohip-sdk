/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the RevenueTypeMapping type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueTypeMapping{}

// RevenueTypeMapping struct for RevenueTypeMapping
type RevenueTypeMapping struct {
	Links []InstanceLink `json:"links,omitempty"`
	RevenueTypeMapping *RevenueTypeMappingType `json:"revenueTypeMapping,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRevenueTypeMapping instantiates a new RevenueTypeMapping object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueTypeMapping() *RevenueTypeMapping {
	this := RevenueTypeMapping{}
	return &this
}

// NewRevenueTypeMappingWithDefaults instantiates a new RevenueTypeMapping object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueTypeMappingWithDefaults() *RevenueTypeMapping {
	this := RevenueTypeMapping{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RevenueTypeMapping) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeMapping) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RevenueTypeMapping) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RevenueTypeMapping) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRevenueTypeMapping returns the RevenueTypeMapping field value if set, zero value otherwise.
func (o *RevenueTypeMapping) GetRevenueTypeMapping() RevenueTypeMappingType {
	if o == nil || IsNil(o.RevenueTypeMapping) {
		var ret RevenueTypeMappingType
		return ret
	}
	return *o.RevenueTypeMapping
}

// GetRevenueTypeMappingOk returns a tuple with the RevenueTypeMapping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeMapping) GetRevenueTypeMappingOk() (*RevenueTypeMappingType, bool) {
	if o == nil || IsNil(o.RevenueTypeMapping) {
		return nil, false
	}
	return o.RevenueTypeMapping, true
}

// HasRevenueTypeMapping returns a boolean if a field has been set.
func (o *RevenueTypeMapping) HasRevenueTypeMapping() bool {
	if o != nil && !IsNil(o.RevenueTypeMapping) {
		return true
	}

	return false
}

// SetRevenueTypeMapping gets a reference to the given RevenueTypeMappingType and assigns it to the RevenueTypeMapping field.
func (o *RevenueTypeMapping) SetRevenueTypeMapping(v RevenueTypeMappingType) {
	o.RevenueTypeMapping = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RevenueTypeMapping) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeMapping) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RevenueTypeMapping) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RevenueTypeMapping) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RevenueTypeMapping) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueTypeMapping) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RevenueTypeMapping) {
		toSerialize["revenueTypeMapping"] = o.RevenueTypeMapping
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRevenueTypeMapping struct {
	value *RevenueTypeMapping
	isSet bool
}

func (v NullableRevenueTypeMapping) Get() *RevenueTypeMapping {
	return v.value
}

func (v *NullableRevenueTypeMapping) Set(val *RevenueTypeMapping) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueTypeMapping) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueTypeMapping) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueTypeMapping(val *RevenueTypeMapping) *NullableRevenueTypeMapping {
	return &NullableRevenueTypeMapping{value: val, isSet: true}
}

func (v NullableRevenueTypeMapping) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueTypeMapping) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


