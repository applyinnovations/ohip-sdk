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

// checks if the BlockWashScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockWashScheduleType{}

// BlockWashScheduleType Allows to select type of wash schedule: by number of rooms or by percentage.
type BlockWashScheduleType struct {
	// A single room type on which wash operation should be performed.
	RoomTypes []string `json:"roomTypes,omitempty"`
	// When using the Wash by % option, indicate a wash percentage that will be applied it to the whole block.
	WashByPercent *float32 `json:"washByPercent,omitempty"`
	WashByRooms *BlockGridInvType `json:"washByRooms,omitempty"`
	// Date on which the block wash operation will be performed.
	WashDate *string `json:"washDate,omitempty"`
}

// NewBlockWashScheduleType instantiates a new BlockWashScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockWashScheduleType() *BlockWashScheduleType {
	this := BlockWashScheduleType{}
	return &this
}

// NewBlockWashScheduleTypeWithDefaults instantiates a new BlockWashScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockWashScheduleTypeWithDefaults() *BlockWashScheduleType {
	this := BlockWashScheduleType{}
	return &this
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *BlockWashScheduleType) GetRoomTypes() []string {
	if o == nil || IsNil(o.RoomTypes) {
		var ret []string
		return ret
	}
	return o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashScheduleType) GetRoomTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *BlockWashScheduleType) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given []string and assigns it to the RoomTypes field.
func (o *BlockWashScheduleType) SetRoomTypes(v []string) {
	o.RoomTypes = v
}

// GetWashByPercent returns the WashByPercent field value if set, zero value otherwise.
func (o *BlockWashScheduleType) GetWashByPercent() float32 {
	if o == nil || IsNil(o.WashByPercent) {
		var ret float32
		return ret
	}
	return *o.WashByPercent
}

// GetWashByPercentOk returns a tuple with the WashByPercent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashScheduleType) GetWashByPercentOk() (*float32, bool) {
	if o == nil || IsNil(o.WashByPercent) {
		return nil, false
	}
	return o.WashByPercent, true
}

// HasWashByPercent returns a boolean if a field has been set.
func (o *BlockWashScheduleType) HasWashByPercent() bool {
	if o != nil && !IsNil(o.WashByPercent) {
		return true
	}

	return false
}

// SetWashByPercent gets a reference to the given float32 and assigns it to the WashByPercent field.
func (o *BlockWashScheduleType) SetWashByPercent(v float32) {
	o.WashByPercent = &v
}

// GetWashByRooms returns the WashByRooms field value if set, zero value otherwise.
func (o *BlockWashScheduleType) GetWashByRooms() BlockGridInvType {
	if o == nil || IsNil(o.WashByRooms) {
		var ret BlockGridInvType
		return ret
	}
	return *o.WashByRooms
}

// GetWashByRoomsOk returns a tuple with the WashByRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashScheduleType) GetWashByRoomsOk() (*BlockGridInvType, bool) {
	if o == nil || IsNil(o.WashByRooms) {
		return nil, false
	}
	return o.WashByRooms, true
}

// HasWashByRooms returns a boolean if a field has been set.
func (o *BlockWashScheduleType) HasWashByRooms() bool {
	if o != nil && !IsNil(o.WashByRooms) {
		return true
	}

	return false
}

// SetWashByRooms gets a reference to the given BlockGridInvType and assigns it to the WashByRooms field.
func (o *BlockWashScheduleType) SetWashByRooms(v BlockGridInvType) {
	o.WashByRooms = &v
}

// GetWashDate returns the WashDate field value if set, zero value otherwise.
func (o *BlockWashScheduleType) GetWashDate() string {
	if o == nil || IsNil(o.WashDate) {
		var ret string
		return ret
	}
	return *o.WashDate
}

// GetWashDateOk returns a tuple with the WashDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockWashScheduleType) GetWashDateOk() (*string, bool) {
	if o == nil || IsNil(o.WashDate) {
		return nil, false
	}
	return o.WashDate, true
}

// HasWashDate returns a boolean if a field has been set.
func (o *BlockWashScheduleType) HasWashDate() bool {
	if o != nil && !IsNil(o.WashDate) {
		return true
	}

	return false
}

// SetWashDate gets a reference to the given string and assigns it to the WashDate field.
func (o *BlockWashScheduleType) SetWashDate(v string) {
	o.WashDate = &v
}

func (o BlockWashScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockWashScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	if !IsNil(o.WashByPercent) {
		toSerialize["washByPercent"] = o.WashByPercent
	}
	if !IsNil(o.WashByRooms) {
		toSerialize["washByRooms"] = o.WashByRooms
	}
	if !IsNil(o.WashDate) {
		toSerialize["washDate"] = o.WashDate
	}
	return toSerialize, nil
}

type NullableBlockWashScheduleType struct {
	value *BlockWashScheduleType
	isSet bool
}

func (v NullableBlockWashScheduleType) Get() *BlockWashScheduleType {
	return v.value
}

func (v *NullableBlockWashScheduleType) Set(val *BlockWashScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockWashScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockWashScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockWashScheduleType(val *BlockWashScheduleType) *NullableBlockWashScheduleType {
	return &NullableBlockWashScheduleType{value: val, isSet: true}
}

func (v NullableBlockWashScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockWashScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


