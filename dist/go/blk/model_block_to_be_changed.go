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

// checks if the BlockToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockToBeChanged{}

// BlockToBeChanged Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
type BlockToBeChanged struct {
	// Provides detailed information of the block to be changed.
	Blocks []BlockInstructionType `json:"blocks,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockToBeChanged instantiates a new BlockToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockToBeChanged() *BlockToBeChanged {
	this := BlockToBeChanged{}
	return &this
}

// NewBlockToBeChangedWithDefaults instantiates a new BlockToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockToBeChangedWithDefaults() *BlockToBeChanged {
	this := BlockToBeChanged{}
	return &this
}

// GetBlocks returns the Blocks field value if set, zero value otherwise.
func (o *BlockToBeChanged) GetBlocks() []BlockInstructionType {
	if o == nil || IsNil(o.Blocks) {
		var ret []BlockInstructionType
		return ret
	}
	return o.Blocks
}

// GetBlocksOk returns a tuple with the Blocks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockToBeChanged) GetBlocksOk() ([]BlockInstructionType, bool) {
	if o == nil || IsNil(o.Blocks) {
		return nil, false
	}
	return o.Blocks, true
}

// HasBlocks returns a boolean if a field has been set.
func (o *BlockToBeChanged) HasBlocks() bool {
	if o != nil && !IsNil(o.Blocks) {
		return true
	}

	return false
}

// SetBlocks gets a reference to the given []BlockInstructionType and assigns it to the Blocks field.
func (o *BlockToBeChanged) SetBlocks(v []BlockInstructionType) {
	o.Blocks = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Blocks) {
		toSerialize["blocks"] = o.Blocks
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockToBeChanged struct {
	value *BlockToBeChanged
	isSet bool
}

func (v NullableBlockToBeChanged) Get() *BlockToBeChanged {
	return v.value
}

func (v *NullableBlockToBeChanged) Set(val *BlockToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockToBeChanged(val *BlockToBeChanged) *NullableBlockToBeChanged {
	return &NullableBlockToBeChanged{value: val, isSet: true}
}

func (v NullableBlockToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


