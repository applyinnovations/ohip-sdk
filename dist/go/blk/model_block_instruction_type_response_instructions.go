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

// checks if the BlockInstructionTypeResponseInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockInstructionTypeResponseInstructions{}

// BlockInstructionTypeResponseInstructions Collection of instructions to be returned as a set of block information.
type BlockInstructionTypeResponseInstructions struct {
	// If this value is set to TRUE, then the operation will only return for a Success or Failed flag.
	ConfirmationOnly *bool `json:"confirmationOnly,omitempty"`
	ResponseInstruction []BlockDetailInstructionType `json:"responseInstruction,omitempty"`
}

// NewBlockInstructionTypeResponseInstructions instantiates a new BlockInstructionTypeResponseInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockInstructionTypeResponseInstructions() *BlockInstructionTypeResponseInstructions {
	this := BlockInstructionTypeResponseInstructions{}
	return &this
}

// NewBlockInstructionTypeResponseInstructionsWithDefaults instantiates a new BlockInstructionTypeResponseInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockInstructionTypeResponseInstructionsWithDefaults() *BlockInstructionTypeResponseInstructions {
	this := BlockInstructionTypeResponseInstructions{}
	return &this
}

// GetConfirmationOnly returns the ConfirmationOnly field value if set, zero value otherwise.
func (o *BlockInstructionTypeResponseInstructions) GetConfirmationOnly() bool {
	if o == nil || IsNil(o.ConfirmationOnly) {
		var ret bool
		return ret
	}
	return *o.ConfirmationOnly
}

// GetConfirmationOnlyOk returns a tuple with the ConfirmationOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeResponseInstructions) GetConfirmationOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.ConfirmationOnly) {
		return nil, false
	}
	return o.ConfirmationOnly, true
}

// HasConfirmationOnly returns a boolean if a field has been set.
func (o *BlockInstructionTypeResponseInstructions) HasConfirmationOnly() bool {
	if o != nil && !IsNil(o.ConfirmationOnly) {
		return true
	}

	return false
}

// SetConfirmationOnly gets a reference to the given bool and assigns it to the ConfirmationOnly field.
func (o *BlockInstructionTypeResponseInstructions) SetConfirmationOnly(v bool) {
	o.ConfirmationOnly = &v
}

// GetResponseInstruction returns the ResponseInstruction field value if set, zero value otherwise.
func (o *BlockInstructionTypeResponseInstructions) GetResponseInstruction() []BlockDetailInstructionType {
	if o == nil || IsNil(o.ResponseInstruction) {
		var ret []BlockDetailInstructionType
		return ret
	}
	return o.ResponseInstruction
}

// GetResponseInstructionOk returns a tuple with the ResponseInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeResponseInstructions) GetResponseInstructionOk() ([]BlockDetailInstructionType, bool) {
	if o == nil || IsNil(o.ResponseInstruction) {
		return nil, false
	}
	return o.ResponseInstruction, true
}

// HasResponseInstruction returns a boolean if a field has been set.
func (o *BlockInstructionTypeResponseInstructions) HasResponseInstruction() bool {
	if o != nil && !IsNil(o.ResponseInstruction) {
		return true
	}

	return false
}

// SetResponseInstruction gets a reference to the given []BlockDetailInstructionType and assigns it to the ResponseInstruction field.
func (o *BlockInstructionTypeResponseInstructions) SetResponseInstruction(v []BlockDetailInstructionType) {
	o.ResponseInstruction = v
}

func (o BlockInstructionTypeResponseInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockInstructionTypeResponseInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConfirmationOnly) {
		toSerialize["confirmationOnly"] = o.ConfirmationOnly
	}
	if !IsNil(o.ResponseInstruction) {
		toSerialize["responseInstruction"] = o.ResponseInstruction
	}
	return toSerialize, nil
}

type NullableBlockInstructionTypeResponseInstructions struct {
	value *BlockInstructionTypeResponseInstructions
	isSet bool
}

func (v NullableBlockInstructionTypeResponseInstructions) Get() *BlockInstructionTypeResponseInstructions {
	return v.value
}

func (v *NullableBlockInstructionTypeResponseInstructions) Set(val *BlockInstructionTypeResponseInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockInstructionTypeResponseInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockInstructionTypeResponseInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockInstructionTypeResponseInstructions(val *BlockInstructionTypeResponseInstructions) *NullableBlockInstructionTypeResponseInstructions {
	return &NullableBlockInstructionTypeResponseInstructions{value: val, isSet: true}
}

func (v NullableBlockInstructionTypeResponseInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockInstructionTypeResponseInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

