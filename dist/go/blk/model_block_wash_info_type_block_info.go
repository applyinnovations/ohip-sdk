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

// checks if the BlockWashInfoTypeBlockInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockWashInfoTypeBlockInfo{}

// BlockWashInfoTypeBlockInfo Block information required to perform a wash operation.
type BlockWashInfoTypeBlockInfo struct {
	// Block code of the block on which wash operation is performed.
	BlockCode *string `json:"blockCode,omitempty"`
	BlockId *BlockId `json:"blockId,omitempty"`
	// End date of the block.
	EndDate *string `json:"endDate,omitempty"`
	// Hotel Code to which the block belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	InventoryControl *BlockInventoryControlType `json:"inventoryControl,omitempty"`
	// Shoulder end date of the block.
	ShoulderEndDate *string `json:"shoulderEndDate,omitempty"`
	// Shoulder start date of the block.
	ShoulderStartDate *string `json:"shoulderStartDate,omitempty"`
	// Start date of the block.
	StartDate *string `json:"startDate,omitempty"`
}

// NewBlockWashInfoTypeBlockInfo instantiates a new BlockWashInfoTypeBlockInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockWashInfoTypeBlockInfo() *BlockWashInfoTypeBlockInfo {
	this := BlockWashInfoTypeBlockInfo{}
	return &this
}

// NewBlockWashInfoTypeBlockInfoWithDefaults instantiates a new BlockWashInfoTypeBlockInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockWashInfoTypeBlockInfoWithDefaults() *BlockWashInfoTypeBlockInfo {
	this := BlockWashInfoTypeBlockInfo{}
	return &this
}

// GetBlockCode returns the BlockCode field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetBlockCode() string {
	if o == nil || IsNil(o.BlockCode) {
		var ret string
		return ret
	}
	return *o.BlockCode
}

// GetBlockCodeOk returns a tuple with the BlockCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetBlockCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BlockCode) {
		return nil, false
	}
	return o.BlockCode, true
}

// HasBlockCode returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasBlockCode() bool {
	if o != nil && !IsNil(o.BlockCode) {
		return true
	}

	return false
}

// SetBlockCode gets a reference to the given string and assigns it to the BlockCode field.
func (o *BlockWashInfoTypeBlockInfo) SetBlockCode(v string) {
	o.BlockCode = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *BlockWashInfoTypeBlockInfo) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *BlockWashInfoTypeBlockInfo) SetEndDate(v string) {
	o.EndDate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BlockWashInfoTypeBlockInfo) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInventoryControl returns the InventoryControl field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetInventoryControl() BlockInventoryControlType {
	if o == nil || IsNil(o.InventoryControl) {
		var ret BlockInventoryControlType
		return ret
	}
	return *o.InventoryControl
}

// GetInventoryControlOk returns a tuple with the InventoryControl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetInventoryControlOk() (*BlockInventoryControlType, bool) {
	if o == nil || IsNil(o.InventoryControl) {
		return nil, false
	}
	return o.InventoryControl, true
}

// HasInventoryControl returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasInventoryControl() bool {
	if o != nil && !IsNil(o.InventoryControl) {
		return true
	}

	return false
}

// SetInventoryControl gets a reference to the given BlockInventoryControlType and assigns it to the InventoryControl field.
func (o *BlockWashInfoTypeBlockInfo) SetInventoryControl(v BlockInventoryControlType) {
	o.InventoryControl = &v
}

// GetShoulderEndDate returns the ShoulderEndDate field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetShoulderEndDate() string {
	if o == nil || IsNil(o.ShoulderEndDate) {
		var ret string
		return ret
	}
	return *o.ShoulderEndDate
}

// GetShoulderEndDateOk returns a tuple with the ShoulderEndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetShoulderEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.ShoulderEndDate) {
		return nil, false
	}
	return o.ShoulderEndDate, true
}

// HasShoulderEndDate returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasShoulderEndDate() bool {
	if o != nil && !IsNil(o.ShoulderEndDate) {
		return true
	}

	return false
}

// SetShoulderEndDate gets a reference to the given string and assigns it to the ShoulderEndDate field.
func (o *BlockWashInfoTypeBlockInfo) SetShoulderEndDate(v string) {
	o.ShoulderEndDate = &v
}

// GetShoulderStartDate returns the ShoulderStartDate field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetShoulderStartDate() string {
	if o == nil || IsNil(o.ShoulderStartDate) {
		var ret string
		return ret
	}
	return *o.ShoulderStartDate
}

// GetShoulderStartDateOk returns a tuple with the ShoulderStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetShoulderStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.ShoulderStartDate) {
		return nil, false
	}
	return o.ShoulderStartDate, true
}

// HasShoulderStartDate returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasShoulderStartDate() bool {
	if o != nil && !IsNil(o.ShoulderStartDate) {
		return true
	}

	return false
}

// SetShoulderStartDate gets a reference to the given string and assigns it to the ShoulderStartDate field.
func (o *BlockWashInfoTypeBlockInfo) SetShoulderStartDate(v string) {
	o.ShoulderStartDate = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *BlockWashInfoTypeBlockInfo) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashInfoTypeBlockInfo) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *BlockWashInfoTypeBlockInfo) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *BlockWashInfoTypeBlockInfo) SetStartDate(v string) {
	o.StartDate = &v
}

func (o BlockWashInfoTypeBlockInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockWashInfoTypeBlockInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockCode) {
		toSerialize["blockCode"] = o.BlockCode
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InventoryControl) {
		toSerialize["inventoryControl"] = o.InventoryControl
	}
	if !IsNil(o.ShoulderEndDate) {
		toSerialize["shoulderEndDate"] = o.ShoulderEndDate
	}
	if !IsNil(o.ShoulderStartDate) {
		toSerialize["shoulderStartDate"] = o.ShoulderStartDate
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableBlockWashInfoTypeBlockInfo struct {
	value *BlockWashInfoTypeBlockInfo
	isSet bool
}

func (v NullableBlockWashInfoTypeBlockInfo) Get() *BlockWashInfoTypeBlockInfo {
	return v.value
}

func (v *NullableBlockWashInfoTypeBlockInfo) Set(val *BlockWashInfoTypeBlockInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockWashInfoTypeBlockInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockWashInfoTypeBlockInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockWashInfoTypeBlockInfo(val *BlockWashInfoTypeBlockInfo) *NullableBlockWashInfoTypeBlockInfo {
	return &NullableBlockWashInfoTypeBlockInfo{value: val, isSet: true}
}

func (v NullableBlockWashInfoTypeBlockInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockWashInfoTypeBlockInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

