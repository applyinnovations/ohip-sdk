/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BlockWashSchedulesInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockWashSchedulesInfo{}

// BlockWashSchedulesInfo Request object to change multiple Block Wash Schedules under the selected block.
type BlockWashSchedulesInfo struct {
	BlockWashSchedulesInfo *BlockWashSchedulesInfoType `json:"blockWashSchedulesInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockWashSchedulesInfo instantiates a new BlockWashSchedulesInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockWashSchedulesInfo() *BlockWashSchedulesInfo {
	this := BlockWashSchedulesInfo{}
	return &this
}

// NewBlockWashSchedulesInfoWithDefaults instantiates a new BlockWashSchedulesInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockWashSchedulesInfoWithDefaults() *BlockWashSchedulesInfo {
	this := BlockWashSchedulesInfo{}
	return &this
}

// GetBlockWashSchedulesInfo returns the BlockWashSchedulesInfo field value if set, zero value otherwise.
func (o *BlockWashSchedulesInfo) GetBlockWashSchedulesInfo() BlockWashSchedulesInfoType {
	if o == nil || IsNil(o.BlockWashSchedulesInfo) {
		var ret BlockWashSchedulesInfoType
		return ret
	}
	return *o.BlockWashSchedulesInfo
}

// GetBlockWashSchedulesInfoOk returns a tuple with the BlockWashSchedulesInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashSchedulesInfo) GetBlockWashSchedulesInfoOk() (*BlockWashSchedulesInfoType, bool) {
	if o == nil || IsNil(o.BlockWashSchedulesInfo) {
		return nil, false
	}
	return o.BlockWashSchedulesInfo, true
}

// HasBlockWashSchedulesInfo returns a boolean if a field has been set.
func (o *BlockWashSchedulesInfo) HasBlockWashSchedulesInfo() bool {
	if o != nil && !IsNil(o.BlockWashSchedulesInfo) {
		return true
	}

	return false
}

// SetBlockWashSchedulesInfo gets a reference to the given BlockWashSchedulesInfoType and assigns it to the BlockWashSchedulesInfo field.
func (o *BlockWashSchedulesInfo) SetBlockWashSchedulesInfo(v BlockWashSchedulesInfoType) {
	o.BlockWashSchedulesInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockWashSchedulesInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashSchedulesInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockWashSchedulesInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockWashSchedulesInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockWashSchedulesInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashSchedulesInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockWashSchedulesInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockWashSchedulesInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockWashSchedulesInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockWashSchedulesInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockWashSchedulesInfo) {
		toSerialize["blockWashSchedulesInfo"] = o.BlockWashSchedulesInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockWashSchedulesInfo struct {
	value *BlockWashSchedulesInfo
	isSet bool
}

func (v NullableBlockWashSchedulesInfo) Get() *BlockWashSchedulesInfo {
	return v.value
}

func (v *NullableBlockWashSchedulesInfo) Set(val *BlockWashSchedulesInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockWashSchedulesInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockWashSchedulesInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockWashSchedulesInfo(val *BlockWashSchedulesInfo) *NullableBlockWashSchedulesInfo {
	return &NullableBlockWashSchedulesInfo{value: val, isSet: true}
}

func (v NullableBlockWashSchedulesInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockWashSchedulesInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

