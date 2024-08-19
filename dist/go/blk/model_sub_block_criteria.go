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

// checks if the SubBlockCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SubBlockCriteria{}

// SubBlockCriteria Criteria to create new sub block.
type SubBlockCriteria struct {
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	MasterBlockHotelCode *string `json:"masterBlockHotelCode,omitempty"`
	// Sub Block Information for creating Sub Blocks.
	SubBlockInfo []CreateSubBlockBaseInfoType `json:"subBlockInfo,omitempty"`
}

// NewSubBlockCriteria instantiates a new SubBlockCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubBlockCriteria() *SubBlockCriteria {
	this := SubBlockCriteria{}
	return &this
}

// NewSubBlockCriteriaWithDefaults instantiates a new SubBlockCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubBlockCriteriaWithDefaults() *SubBlockCriteria {
	this := SubBlockCriteria{}
	return &this
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *SubBlockCriteria) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubBlockCriteria) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *SubBlockCriteria) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *SubBlockCriteria) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetMasterBlockHotelCode returns the MasterBlockHotelCode field value if set, zero value otherwise.
func (o *SubBlockCriteria) GetMasterBlockHotelCode() string {
	if o == nil || IsNil(o.MasterBlockHotelCode) {
		var ret string
		return ret
	}
	return *o.MasterBlockHotelCode
}

// GetMasterBlockHotelCodeOk returns a tuple with the MasterBlockHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubBlockCriteria) GetMasterBlockHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MasterBlockHotelCode) {
		return nil, false
	}
	return o.MasterBlockHotelCode, true
}

// HasMasterBlockHotelCode returns a boolean if a field has been set.
func (o *SubBlockCriteria) HasMasterBlockHotelCode() bool {
	if o != nil && !IsNil(o.MasterBlockHotelCode) {
		return true
	}

	return false
}

// SetMasterBlockHotelCode gets a reference to the given string and assigns it to the MasterBlockHotelCode field.
func (o *SubBlockCriteria) SetMasterBlockHotelCode(v string) {
	o.MasterBlockHotelCode = &v
}

// GetSubBlockInfo returns the SubBlockInfo field value if set, zero value otherwise.
func (o *SubBlockCriteria) GetSubBlockInfo() []CreateSubBlockBaseInfoType {
	if o == nil || IsNil(o.SubBlockInfo) {
		var ret []CreateSubBlockBaseInfoType
		return ret
	}
	return o.SubBlockInfo
}

// GetSubBlockInfoOk returns a tuple with the SubBlockInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubBlockCriteria) GetSubBlockInfoOk() ([]CreateSubBlockBaseInfoType, bool) {
	if o == nil || IsNil(o.SubBlockInfo) {
		return nil, false
	}
	return o.SubBlockInfo, true
}

// HasSubBlockInfo returns a boolean if a field has been set.
func (o *SubBlockCriteria) HasSubBlockInfo() bool {
	if o != nil && !IsNil(o.SubBlockInfo) {
		return true
	}

	return false
}

// SetSubBlockInfo gets a reference to the given []CreateSubBlockBaseInfoType and assigns it to the SubBlockInfo field.
func (o *SubBlockCriteria) SetSubBlockInfo(v []CreateSubBlockBaseInfoType) {
	o.SubBlockInfo = v
}

func (o SubBlockCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SubBlockCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.MasterBlockHotelCode) {
		toSerialize["masterBlockHotelCode"] = o.MasterBlockHotelCode
	}
	if !IsNil(o.SubBlockInfo) {
		toSerialize["subBlockInfo"] = o.SubBlockInfo
	}
	return toSerialize, nil
}

type NullableSubBlockCriteria struct {
	value *SubBlockCriteria
	isSet bool
}

func (v NullableSubBlockCriteria) Get() *SubBlockCriteria {
	return v.value
}

func (v *NullableSubBlockCriteria) Set(val *SubBlockCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableSubBlockCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableSubBlockCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubBlockCriteria(val *SubBlockCriteria) *NullableSubBlockCriteria {
	return &NullableSubBlockCriteria{value: val, isSet: true}
}

func (v NullableSubBlockCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubBlockCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


