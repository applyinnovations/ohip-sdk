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

// checks if the BlockAllocationRangeTypeOverbookListInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockAllocationRangeTypeOverbookListInner{}

// BlockAllocationRangeTypeOverbookListInner struct for BlockAllocationRangeTypeOverbookListInner
type BlockAllocationRangeTypeOverbookListInner struct {
	// A true value indicates that the date/room type should be overbooked for inventory. A false value indicates that this combination should be excluded from range.
	Overbook *bool `json:"overbook,omitempty"`
	// Room type that has to be overbooked or excluded.
	RoomType *string `json:"roomType,omitempty"`
	// Date which has to be overbooked or excluded.
	StayDate *string `json:"stayDate,omitempty"`
}

// NewBlockAllocationRangeTypeOverbookListInner instantiates a new BlockAllocationRangeTypeOverbookListInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockAllocationRangeTypeOverbookListInner() *BlockAllocationRangeTypeOverbookListInner {
	this := BlockAllocationRangeTypeOverbookListInner{}
	return &this
}

// NewBlockAllocationRangeTypeOverbookListInnerWithDefaults instantiates a new BlockAllocationRangeTypeOverbookListInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockAllocationRangeTypeOverbookListInnerWithDefaults() *BlockAllocationRangeTypeOverbookListInner {
	this := BlockAllocationRangeTypeOverbookListInner{}
	return &this
}

// GetOverbook returns the Overbook field value if set, zero value otherwise.
func (o *BlockAllocationRangeTypeOverbookListInner) GetOverbook() bool {
	if o == nil || IsNil(o.Overbook) {
		var ret bool
		return ret
	}
	return *o.Overbook
}

// GetOverbookOk returns a tuple with the Overbook field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) GetOverbookOk() (*bool, bool) {
	if o == nil || IsNil(o.Overbook) {
		return nil, false
	}
	return o.Overbook, true
}

// HasOverbook returns a boolean if a field has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) HasOverbook() bool {
	if o != nil && !IsNil(o.Overbook) {
		return true
	}

	return false
}

// SetOverbook gets a reference to the given bool and assigns it to the Overbook field.
func (o *BlockAllocationRangeTypeOverbookListInner) SetOverbook(v bool) {
	o.Overbook = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *BlockAllocationRangeTypeOverbookListInner) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *BlockAllocationRangeTypeOverbookListInner) SetRoomType(v string) {
	o.RoomType = &v
}

// GetStayDate returns the StayDate field value if set, zero value otherwise.
func (o *BlockAllocationRangeTypeOverbookListInner) GetStayDate() string {
	if o == nil || IsNil(o.StayDate) {
		var ret string
		return ret
	}
	return *o.StayDate
}

// GetStayDateOk returns a tuple with the StayDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) GetStayDateOk() (*string, bool) {
	if o == nil || IsNil(o.StayDate) {
		return nil, false
	}
	return o.StayDate, true
}

// HasStayDate returns a boolean if a field has been set.
func (o *BlockAllocationRangeTypeOverbookListInner) HasStayDate() bool {
	if o != nil && !IsNil(o.StayDate) {
		return true
	}

	return false
}

// SetStayDate gets a reference to the given string and assigns it to the StayDate field.
func (o *BlockAllocationRangeTypeOverbookListInner) SetStayDate(v string) {
	o.StayDate = &v
}

func (o BlockAllocationRangeTypeOverbookListInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockAllocationRangeTypeOverbookListInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Overbook) {
		toSerialize["overbook"] = o.Overbook
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.StayDate) {
		toSerialize["stayDate"] = o.StayDate
	}
	return toSerialize, nil
}

type NullableBlockAllocationRangeTypeOverbookListInner struct {
	value *BlockAllocationRangeTypeOverbookListInner
	isSet bool
}

func (v NullableBlockAllocationRangeTypeOverbookListInner) Get() *BlockAllocationRangeTypeOverbookListInner {
	return v.value
}

func (v *NullableBlockAllocationRangeTypeOverbookListInner) Set(val *BlockAllocationRangeTypeOverbookListInner) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockAllocationRangeTypeOverbookListInner) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockAllocationRangeTypeOverbookListInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockAllocationRangeTypeOverbookListInner(val *BlockAllocationRangeTypeOverbookListInner) *NullableBlockAllocationRangeTypeOverbookListInner {
	return &NullableBlockAllocationRangeTypeOverbookListInner{value: val, isSet: true}
}

func (v NullableBlockAllocationRangeTypeOverbookListInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockAllocationRangeTypeOverbookListInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


