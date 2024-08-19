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

// checks if the InventoryItemsCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InventoryItemsCopy{}

// InventoryItemsCopy Request object for copying Inventory Items Setup configuration
type InventoryItemsCopy struct {
	CopyInventoryItems *CopyInventoryItemsType `json:"copyInventoryItems,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewInventoryItemsCopy instantiates a new InventoryItemsCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryItemsCopy() *InventoryItemsCopy {
	this := InventoryItemsCopy{}
	return &this
}

// NewInventoryItemsCopyWithDefaults instantiates a new InventoryItemsCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryItemsCopyWithDefaults() *InventoryItemsCopy {
	this := InventoryItemsCopy{}
	return &this
}

// GetCopyInventoryItems returns the CopyInventoryItems field value if set, zero value otherwise.
func (o *InventoryItemsCopy) GetCopyInventoryItems() CopyInventoryItemsType {
	if o == nil || IsNil(o.CopyInventoryItems) {
		var ret CopyInventoryItemsType
		return ret
	}
	return *o.CopyInventoryItems
}

// GetCopyInventoryItemsOk returns a tuple with the CopyInventoryItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemsCopy) GetCopyInventoryItemsOk() (*CopyInventoryItemsType, bool) {
	if o == nil || IsNil(o.CopyInventoryItems) {
		return nil, false
	}
	return o.CopyInventoryItems, true
}

// HasCopyInventoryItems returns a boolean if a field has been set.
func (o *InventoryItemsCopy) HasCopyInventoryItems() bool {
	if o != nil && !IsNil(o.CopyInventoryItems) {
		return true
	}

	return false
}

// SetCopyInventoryItems gets a reference to the given CopyInventoryItemsType and assigns it to the CopyInventoryItems field.
func (o *InventoryItemsCopy) SetCopyInventoryItems(v CopyInventoryItemsType) {
	o.CopyInventoryItems = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *InventoryItemsCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemsCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *InventoryItemsCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *InventoryItemsCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *InventoryItemsCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemsCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *InventoryItemsCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *InventoryItemsCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o InventoryItemsCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InventoryItemsCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInventoryItems) {
		toSerialize["copyInventoryItems"] = o.CopyInventoryItems
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableInventoryItemsCopy struct {
	value *InventoryItemsCopy
	isSet bool
}

func (v NullableInventoryItemsCopy) Get() *InventoryItemsCopy {
	return v.value
}

func (v *NullableInventoryItemsCopy) Set(val *InventoryItemsCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryItemsCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryItemsCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryItemsCopy(val *InventoryItemsCopy) *NullableInventoryItemsCopy {
	return &NullableInventoryItemsCopy{value: val, isSet: true}
}

func (v NullableInventoryItemsCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryItemsCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


