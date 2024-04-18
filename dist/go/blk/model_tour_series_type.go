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

// checks if the TourSeriesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TourSeriesType{}

// TourSeriesType This contains information as the block code, block name, block status regarding the blocks to be created as tour series.
type TourSeriesType struct {
	// The hotel code of the source block.
	HotelId *string `json:"hotelId,omitempty"`
	TourBlockId *UniqueIDType `json:"tourBlockId,omitempty"`
	// The tour code to be applied to the blocks that are part of this tour series.
	TourCode *string `json:"tourCode,omitempty"`
	TourInstructions *TourSeriesTypeTourInstructions `json:"tourInstructions,omitempty"`
	// Contains tour series blocks information.
	TourSeriesBlocks []TourSeriesBlockType `json:"tourSeriesBlocks,omitempty"`
}

// NewTourSeriesType instantiates a new TourSeriesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTourSeriesType() *TourSeriesType {
	this := TourSeriesType{}
	return &this
}

// NewTourSeriesTypeWithDefaults instantiates a new TourSeriesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTourSeriesTypeWithDefaults() *TourSeriesType {
	this := TourSeriesType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TourSeriesType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TourSeriesType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TourSeriesType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TourSeriesType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetTourBlockId returns the TourBlockId field value if set, zero value otherwise.
func (o *TourSeriesType) GetTourBlockId() UniqueIDType {
	if o == nil || IsNil(o.TourBlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.TourBlockId
}

// GetTourBlockIdOk returns a tuple with the TourBlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TourSeriesType) GetTourBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.TourBlockId) {
		return nil, false
	}
	return o.TourBlockId, true
}

// HasTourBlockId returns a boolean if a field has been set.
func (o *TourSeriesType) HasTourBlockId() bool {
	if o != nil && !IsNil(o.TourBlockId) {
		return true
	}

	return false
}

// SetTourBlockId gets a reference to the given UniqueIDType and assigns it to the TourBlockId field.
func (o *TourSeriesType) SetTourBlockId(v UniqueIDType) {
	o.TourBlockId = &v
}

// GetTourCode returns the TourCode field value if set, zero value otherwise.
func (o *TourSeriesType) GetTourCode() string {
	if o == nil || IsNil(o.TourCode) {
		var ret string
		return ret
	}
	return *o.TourCode
}

// GetTourCodeOk returns a tuple with the TourCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TourSeriesType) GetTourCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TourCode) {
		return nil, false
	}
	return o.TourCode, true
}

// HasTourCode returns a boolean if a field has been set.
func (o *TourSeriesType) HasTourCode() bool {
	if o != nil && !IsNil(o.TourCode) {
		return true
	}

	return false
}

// SetTourCode gets a reference to the given string and assigns it to the TourCode field.
func (o *TourSeriesType) SetTourCode(v string) {
	o.TourCode = &v
}

// GetTourInstructions returns the TourInstructions field value if set, zero value otherwise.
func (o *TourSeriesType) GetTourInstructions() TourSeriesTypeTourInstructions {
	if o == nil || IsNil(o.TourInstructions) {
		var ret TourSeriesTypeTourInstructions
		return ret
	}
	return *o.TourInstructions
}

// GetTourInstructionsOk returns a tuple with the TourInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TourSeriesType) GetTourInstructionsOk() (*TourSeriesTypeTourInstructions, bool) {
	if o == nil || IsNil(o.TourInstructions) {
		return nil, false
	}
	return o.TourInstructions, true
}

// HasTourInstructions returns a boolean if a field has been set.
func (o *TourSeriesType) HasTourInstructions() bool {
	if o != nil && !IsNil(o.TourInstructions) {
		return true
	}

	return false
}

// SetTourInstructions gets a reference to the given TourSeriesTypeTourInstructions and assigns it to the TourInstructions field.
func (o *TourSeriesType) SetTourInstructions(v TourSeriesTypeTourInstructions) {
	o.TourInstructions = &v
}

// GetTourSeriesBlocks returns the TourSeriesBlocks field value if set, zero value otherwise.
func (o *TourSeriesType) GetTourSeriesBlocks() []TourSeriesBlockType {
	if o == nil || IsNil(o.TourSeriesBlocks) {
		var ret []TourSeriesBlockType
		return ret
	}
	return o.TourSeriesBlocks
}

// GetTourSeriesBlocksOk returns a tuple with the TourSeriesBlocks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TourSeriesType) GetTourSeriesBlocksOk() ([]TourSeriesBlockType, bool) {
	if o == nil || IsNil(o.TourSeriesBlocks) {
		return nil, false
	}
	return o.TourSeriesBlocks, true
}

// HasTourSeriesBlocks returns a boolean if a field has been set.
func (o *TourSeriesType) HasTourSeriesBlocks() bool {
	if o != nil && !IsNil(o.TourSeriesBlocks) {
		return true
	}

	return false
}

// SetTourSeriesBlocks gets a reference to the given []TourSeriesBlockType and assigns it to the TourSeriesBlocks field.
func (o *TourSeriesType) SetTourSeriesBlocks(v []TourSeriesBlockType) {
	o.TourSeriesBlocks = v
}

func (o TourSeriesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TourSeriesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.TourBlockId) {
		toSerialize["tourBlockId"] = o.TourBlockId
	}
	if !IsNil(o.TourCode) {
		toSerialize["tourCode"] = o.TourCode
	}
	if !IsNil(o.TourInstructions) {
		toSerialize["tourInstructions"] = o.TourInstructions
	}
	if !IsNil(o.TourSeriesBlocks) {
		toSerialize["tourSeriesBlocks"] = o.TourSeriesBlocks
	}
	return toSerialize, nil
}

type NullableTourSeriesType struct {
	value *TourSeriesType
	isSet bool
}

func (v NullableTourSeriesType) Get() *TourSeriesType {
	return v.value
}

func (v *NullableTourSeriesType) Set(val *TourSeriesType) {
	v.value = val
	v.isSet = true
}

func (v NullableTourSeriesType) IsSet() bool {
	return v.isSet
}

func (v *NullableTourSeriesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTourSeriesType(val *TourSeriesType) *NullableTourSeriesType {
	return &NullableTourSeriesType{value: val, isSet: true}
}

func (v NullableTourSeriesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTourSeriesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

