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

// checks if the CateringContainersInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringContainersInfo{}

// CateringContainersInfo Response object for fetching Catering Code Containers details.
type CateringContainersInfo struct {
	// Catering Code details.
	Containers []CateringCodeType `json:"containers,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCateringContainersInfo instantiates a new CateringContainersInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringContainersInfo() *CateringContainersInfo {
	this := CateringContainersInfo{}
	return &this
}

// NewCateringContainersInfoWithDefaults instantiates a new CateringContainersInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringContainersInfoWithDefaults() *CateringContainersInfo {
	this := CateringContainersInfo{}
	return &this
}

// GetContainers returns the Containers field value if set, zero value otherwise.
func (o *CateringContainersInfo) GetContainers() []CateringCodeType {
	if o == nil || IsNil(o.Containers) {
		var ret []CateringCodeType
		return ret
	}
	return o.Containers
}

// GetContainersOk returns a tuple with the Containers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringContainersInfo) GetContainersOk() ([]CateringCodeType, bool) {
	if o == nil || IsNil(o.Containers) {
		return nil, false
	}
	return o.Containers, true
}

// HasContainers returns a boolean if a field has been set.
func (o *CateringContainersInfo) HasContainers() bool {
	if o != nil && !IsNil(o.Containers) {
		return true
	}

	return false
}

// SetContainers gets a reference to the given []CateringCodeType and assigns it to the Containers field.
func (o *CateringContainersInfo) SetContainers(v []CateringCodeType) {
	o.Containers = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CateringContainersInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringContainersInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CateringContainersInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CateringContainersInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CateringContainersInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringContainersInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CateringContainersInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CateringContainersInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CateringContainersInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringContainersInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Containers) {
		toSerialize["containers"] = o.Containers
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCateringContainersInfo struct {
	value *CateringContainersInfo
	isSet bool
}

func (v NullableCateringContainersInfo) Get() *CateringContainersInfo {
	return v.value
}

func (v *NullableCateringContainersInfo) Set(val *CateringContainersInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringContainersInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringContainersInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringContainersInfo(val *CateringContainersInfo) *NullableCateringContainersInfo {
	return &NullableCateringContainersInfo{value: val, isSet: true}
}

func (v NullableCateringContainersInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringContainersInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


