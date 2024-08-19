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

// checks if the FolioTypesConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTypesConfig{}

// FolioTypesConfig struct for FolioTypesConfig
type FolioTypesConfig struct {
	// Information details of the Folio Type Names.
	FolioTypes []FolioTypeConfigType `json:"folioTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFolioTypesConfig instantiates a new FolioTypesConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTypesConfig() *FolioTypesConfig {
	this := FolioTypesConfig{}
	return &this
}

// NewFolioTypesConfigWithDefaults instantiates a new FolioTypesConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTypesConfigWithDefaults() *FolioTypesConfig {
	this := FolioTypesConfig{}
	return &this
}

// GetFolioTypes returns the FolioTypes field value if set, zero value otherwise.
func (o *FolioTypesConfig) GetFolioTypes() []FolioTypeConfigType {
	if o == nil || IsNil(o.FolioTypes) {
		var ret []FolioTypeConfigType
		return ret
	}
	return o.FolioTypes
}

// GetFolioTypesOk returns a tuple with the FolioTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesConfig) GetFolioTypesOk() ([]FolioTypeConfigType, bool) {
	if o == nil || IsNil(o.FolioTypes) {
		return nil, false
	}
	return o.FolioTypes, true
}

// HasFolioTypes returns a boolean if a field has been set.
func (o *FolioTypesConfig) HasFolioTypes() bool {
	if o != nil && !IsNil(o.FolioTypes) {
		return true
	}

	return false
}

// SetFolioTypes gets a reference to the given []FolioTypeConfigType and assigns it to the FolioTypes field.
func (o *FolioTypesConfig) SetFolioTypes(v []FolioTypeConfigType) {
	o.FolioTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FolioTypesConfig) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesConfig) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FolioTypesConfig) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FolioTypesConfig) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FolioTypesConfig) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesConfig) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FolioTypesConfig) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FolioTypesConfig) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FolioTypesConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTypesConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioTypes) {
		toSerialize["folioTypes"] = o.FolioTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFolioTypesConfig struct {
	value *FolioTypesConfig
	isSet bool
}

func (v NullableFolioTypesConfig) Get() *FolioTypesConfig {
	return v.value
}

func (v *NullableFolioTypesConfig) Set(val *FolioTypesConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTypesConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTypesConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTypesConfig(val *FolioTypesConfig) *NullableFolioTypesConfig {
	return &NullableFolioTypesConfig{value: val, isSet: true}
}

func (v NullableFolioTypesConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTypesConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


