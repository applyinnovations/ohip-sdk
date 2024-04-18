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

// checks if the ItemClassesInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ItemClassesInfo{}

// ItemClassesInfo Response object for fetching item class.
type ItemClassesInfo struct {
	// Holds Item Class details.
	ItemClasses []ItemClassType `json:"itemClasses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewItemClassesInfo instantiates a new ItemClassesInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewItemClassesInfo() *ItemClassesInfo {
	this := ItemClassesInfo{}
	return &this
}

// NewItemClassesInfoWithDefaults instantiates a new ItemClassesInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewItemClassesInfoWithDefaults() *ItemClassesInfo {
	this := ItemClassesInfo{}
	return &this
}

// GetItemClasses returns the ItemClasses field value if set, zero value otherwise.
func (o *ItemClassesInfo) GetItemClasses() []ItemClassType {
	if o == nil || IsNil(o.ItemClasses) {
		var ret []ItemClassType
		return ret
	}
	return o.ItemClasses
}

// GetItemClassesOk returns a tuple with the ItemClasses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemClassesInfo) GetItemClassesOk() ([]ItemClassType, bool) {
	if o == nil || IsNil(o.ItemClasses) {
		return nil, false
	}
	return o.ItemClasses, true
}

// HasItemClasses returns a boolean if a field has been set.
func (o *ItemClassesInfo) HasItemClasses() bool {
	if o != nil && !IsNil(o.ItemClasses) {
		return true
	}

	return false
}

// SetItemClasses gets a reference to the given []ItemClassType and assigns it to the ItemClasses field.
func (o *ItemClassesInfo) SetItemClasses(v []ItemClassType) {
	o.ItemClasses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ItemClassesInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemClassesInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ItemClassesInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ItemClassesInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ItemClassesInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ItemClassesInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ItemClassesInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ItemClassesInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ItemClassesInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ItemClassesInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ItemClasses) {
		toSerialize["itemClasses"] = o.ItemClasses
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableItemClassesInfo struct {
	value *ItemClassesInfo
	isSet bool
}

func (v NullableItemClassesInfo) Get() *ItemClassesInfo {
	return v.value
}

func (v *NullableItemClassesInfo) Set(val *ItemClassesInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableItemClassesInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableItemClassesInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableItemClassesInfo(val *ItemClassesInfo) *NullableItemClassesInfo {
	return &NullableItemClassesInfo{value: val, isSet: true}
}

func (v NullableItemClassesInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableItemClassesInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

