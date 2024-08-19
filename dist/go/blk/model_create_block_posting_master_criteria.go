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

// checks if the CreateBlockPostingMasterCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateBlockPostingMasterCriteria{}

// CreateBlockPostingMasterCriteria Criteria to create a new posting master reservation.
type CreateBlockPostingMasterCriteria struct {
	BlockId *BlockId `json:"blockId,omitempty"`
	// Hotel Code of the business block.
	HotelId *string `json:"hotelId,omitempty"`
	ResponseInstruction *CreateBlockPostingMasterCriteriaResponseInstruction `json:"responseInstruction,omitempty"`
}

// NewCreateBlockPostingMasterCriteria instantiates a new CreateBlockPostingMasterCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateBlockPostingMasterCriteria() *CreateBlockPostingMasterCriteria {
	this := CreateBlockPostingMasterCriteria{}
	return &this
}

// NewCreateBlockPostingMasterCriteriaWithDefaults instantiates a new CreateBlockPostingMasterCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateBlockPostingMasterCriteriaWithDefaults() *CreateBlockPostingMasterCriteria {
	this := CreateBlockPostingMasterCriteria{}
	return &this
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *CreateBlockPostingMasterCriteria) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateBlockPostingMasterCriteria) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *CreateBlockPostingMasterCriteria) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *CreateBlockPostingMasterCriteria) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CreateBlockPostingMasterCriteria) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateBlockPostingMasterCriteria) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CreateBlockPostingMasterCriteria) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CreateBlockPostingMasterCriteria) SetHotelId(v string) {
	o.HotelId = &v
}

// GetResponseInstruction returns the ResponseInstruction field value if set, zero value otherwise.
func (o *CreateBlockPostingMasterCriteria) GetResponseInstruction() CreateBlockPostingMasterCriteriaResponseInstruction {
	if o == nil || IsNil(o.ResponseInstruction) {
		var ret CreateBlockPostingMasterCriteriaResponseInstruction
		return ret
	}
	return *o.ResponseInstruction
}

// GetResponseInstructionOk returns a tuple with the ResponseInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateBlockPostingMasterCriteria) GetResponseInstructionOk() (*CreateBlockPostingMasterCriteriaResponseInstruction, bool) {
	if o == nil || IsNil(o.ResponseInstruction) {
		return nil, false
	}
	return o.ResponseInstruction, true
}

// HasResponseInstruction returns a boolean if a field has been set.
func (o *CreateBlockPostingMasterCriteria) HasResponseInstruction() bool {
	if o != nil && !IsNil(o.ResponseInstruction) {
		return true
	}

	return false
}

// SetResponseInstruction gets a reference to the given CreateBlockPostingMasterCriteriaResponseInstruction and assigns it to the ResponseInstruction field.
func (o *CreateBlockPostingMasterCriteria) SetResponseInstruction(v CreateBlockPostingMasterCriteriaResponseInstruction) {
	o.ResponseInstruction = &v
}

func (o CreateBlockPostingMasterCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateBlockPostingMasterCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ResponseInstruction) {
		toSerialize["responseInstruction"] = o.ResponseInstruction
	}
	return toSerialize, nil
}

type NullableCreateBlockPostingMasterCriteria struct {
	value *CreateBlockPostingMasterCriteria
	isSet bool
}

func (v NullableCreateBlockPostingMasterCriteria) Get() *CreateBlockPostingMasterCriteria {
	return v.value
}

func (v *NullableCreateBlockPostingMasterCriteria) Set(val *CreateBlockPostingMasterCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateBlockPostingMasterCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateBlockPostingMasterCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateBlockPostingMasterCriteria(val *CreateBlockPostingMasterCriteria) *NullableCreateBlockPostingMasterCriteria {
	return &NullableCreateBlockPostingMasterCriteria{value: val, isSet: true}
}

func (v NullableCreateBlockPostingMasterCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateBlockPostingMasterCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


