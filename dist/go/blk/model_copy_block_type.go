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

// checks if the CopyBlockType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyBlockType{}

// CopyBlockType The source block will be used as a template to create the new copied block.
type CopyBlockType struct {
	CopyInstructions *CopyBlockTypeCopyInstructions `json:"copyInstructions,omitempty"`
	// The hotel code of the source block.
	HotelId *string `json:"hotelId,omitempty"`
	NewBlock *NewBlockDetailsType `json:"newBlock,omitempty"`
	SourceBlockId *UniqueIDType `json:"sourceBlockId,omitempty"`
}

// NewCopyBlockType instantiates a new CopyBlockType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyBlockType() *CopyBlockType {
	this := CopyBlockType{}
	return &this
}

// NewCopyBlockTypeWithDefaults instantiates a new CopyBlockType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyBlockTypeWithDefaults() *CopyBlockType {
	this := CopyBlockType{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *CopyBlockType) GetCopyInstructions() CopyBlockTypeCopyInstructions {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret CopyBlockTypeCopyInstructions
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBlockType) GetCopyInstructionsOk() (*CopyBlockTypeCopyInstructions, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *CopyBlockType) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given CopyBlockTypeCopyInstructions and assigns it to the CopyInstructions field.
func (o *CopyBlockType) SetCopyInstructions(v CopyBlockTypeCopyInstructions) {
	o.CopyInstructions = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CopyBlockType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBlockType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CopyBlockType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CopyBlockType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNewBlock returns the NewBlock field value if set, zero value otherwise.
func (o *CopyBlockType) GetNewBlock() NewBlockDetailsType {
	if o == nil || IsNil(o.NewBlock) {
		var ret NewBlockDetailsType
		return ret
	}
	return *o.NewBlock
}

// GetNewBlockOk returns a tuple with the NewBlock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBlockType) GetNewBlockOk() (*NewBlockDetailsType, bool) {
	if o == nil || IsNil(o.NewBlock) {
		return nil, false
	}
	return o.NewBlock, true
}

// HasNewBlock returns a boolean if a field has been set.
func (o *CopyBlockType) HasNewBlock() bool {
	if o != nil && !IsNil(o.NewBlock) {
		return true
	}

	return false
}

// SetNewBlock gets a reference to the given NewBlockDetailsType and assigns it to the NewBlock field.
func (o *CopyBlockType) SetNewBlock(v NewBlockDetailsType) {
	o.NewBlock = &v
}

// GetSourceBlockId returns the SourceBlockId field value if set, zero value otherwise.
func (o *CopyBlockType) GetSourceBlockId() UniqueIDType {
	if o == nil || IsNil(o.SourceBlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.SourceBlockId
}

// GetSourceBlockIdOk returns a tuple with the SourceBlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBlockType) GetSourceBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.SourceBlockId) {
		return nil, false
	}
	return o.SourceBlockId, true
}

// HasSourceBlockId returns a boolean if a field has been set.
func (o *CopyBlockType) HasSourceBlockId() bool {
	if o != nil && !IsNil(o.SourceBlockId) {
		return true
	}

	return false
}

// SetSourceBlockId gets a reference to the given UniqueIDType and assigns it to the SourceBlockId field.
func (o *CopyBlockType) SetSourceBlockId(v UniqueIDType) {
	o.SourceBlockId = &v
}

func (o CopyBlockType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyBlockType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.NewBlock) {
		toSerialize["newBlock"] = o.NewBlock
	}
	if !IsNil(o.SourceBlockId) {
		toSerialize["sourceBlockId"] = o.SourceBlockId
	}
	return toSerialize, nil
}

type NullableCopyBlockType struct {
	value *CopyBlockType
	isSet bool
}

func (v NullableCopyBlockType) Get() *CopyBlockType {
	return v.value
}

func (v *NullableCopyBlockType) Set(val *CopyBlockType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyBlockType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyBlockType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyBlockType(val *CopyBlockType) *NullableCopyBlockType {
	return &NullableCopyBlockType{value: val, isSet: true}
}

func (v NullableCopyBlockType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyBlockType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


