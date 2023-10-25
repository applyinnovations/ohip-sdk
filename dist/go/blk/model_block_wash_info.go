/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BlockWashInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockWashInfo{}

// BlockWashInfo Block information required for performing a wash operation on a block.
type BlockWashInfo struct {
	BlockWashInformation *BlockWashInfoType `json:"blockWashInformation,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockWashInfo instantiates a new BlockWashInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockWashInfo() *BlockWashInfo {
	this := BlockWashInfo{}
	return &this
}

// NewBlockWashInfoWithDefaults instantiates a new BlockWashInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockWashInfoWithDefaults() *BlockWashInfo {
	this := BlockWashInfo{}
	return &this
}

// GetBlockWashInformation returns the BlockWashInformation field value if set, zero value otherwise.
func (o *BlockWashInfo) GetBlockWashInformation() BlockWashInfoType {
	if o == nil || IsNil(o.BlockWashInformation) {
		var ret BlockWashInfoType
		return ret
	}
	return *o.BlockWashInformation
}

// GetBlockWashInformationOk returns a tuple with the BlockWashInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfo) GetBlockWashInformationOk() (*BlockWashInfoType, bool) {
	if o == nil || IsNil(o.BlockWashInformation) {
		return nil, false
	}
	return o.BlockWashInformation, true
}

// HasBlockWashInformation returns a boolean if a field has been set.
func (o *BlockWashInfo) HasBlockWashInformation() bool {
	if o != nil && !IsNil(o.BlockWashInformation) {
		return true
	}

	return false
}

// SetBlockWashInformation gets a reference to the given BlockWashInfoType and assigns it to the BlockWashInformation field.
func (o *BlockWashInfo) SetBlockWashInformation(v BlockWashInfoType) {
	o.BlockWashInformation = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockWashInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockWashInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockWashInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockWashInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockWashInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockWashInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockWashInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockWashInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockWashInformation) {
		toSerialize["blockWashInformation"] = o.BlockWashInformation
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockWashInfo struct {
	value *BlockWashInfo
	isSet bool
}

func (v NullableBlockWashInfo) Get() *BlockWashInfo {
	return v.value
}

func (v *NullableBlockWashInfo) Set(val *BlockWashInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockWashInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockWashInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockWashInfo(val *BlockWashInfo) *NullableBlockWashInfo {
	return &NullableBlockWashInfo{value: val, isSet: true}
}

func (v NullableBlockWashInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockWashInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


