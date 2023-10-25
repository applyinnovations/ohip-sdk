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

// checks if the BlocksType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlocksType{}

// BlocksType A collection of Block objects or Unique IDs of Blocks.
type BlocksType struct {
	// A collection of Blocks or Unique IDs of Blocks.
	BlockInfo []BlocksTypeBlockInfoInner `json:"blockInfo,omitempty"`
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewBlocksType instantiates a new BlocksType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlocksType() *BlocksType {
	this := BlocksType{}
	return &this
}

// NewBlocksTypeWithDefaults instantiates a new BlocksType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlocksTypeWithDefaults() *BlocksType {
	this := BlocksType{}
	return &this
}

// GetBlockInfo returns the BlockInfo field value if set, zero value otherwise.
func (o *BlocksType) GetBlockInfo() []BlocksTypeBlockInfoInner {
	if o == nil || IsNil(o.BlockInfo) {
		var ret []BlocksTypeBlockInfoInner
		return ret
	}
	return o.BlockInfo
}

// GetBlockInfoOk returns a tuple with the BlockInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlocksType) GetBlockInfoOk() ([]BlocksTypeBlockInfoInner, bool) {
	if o == nil || IsNil(o.BlockInfo) {
		return nil, false
	}
	return o.BlockInfo, true
}

// HasBlockInfo returns a boolean if a field has been set.
func (o *BlocksType) HasBlockInfo() bool {
	if o != nil && !IsNil(o.BlockInfo) {
		return true
	}

	return false
}

// SetBlockInfo gets a reference to the given []BlocksTypeBlockInfoInner and assigns it to the BlockInfo field.
func (o *BlocksType) SetBlockInfo(v []BlocksTypeBlockInfoInner) {
	o.BlockInfo = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *BlocksType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlocksType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *BlocksType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *BlocksType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *BlocksType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlocksType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *BlocksType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *BlocksType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *BlocksType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlocksType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *BlocksType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *BlocksType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o BlocksType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlocksType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockInfo) {
		toSerialize["blockInfo"] = o.BlockInfo
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableBlocksType struct {
	value *BlocksType
	isSet bool
}

func (v NullableBlocksType) Get() *BlocksType {
	return v.value
}

func (v *NullableBlocksType) Set(val *BlocksType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlocksType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlocksType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlocksType(val *BlocksType) *NullableBlocksType {
	return &NullableBlocksType{value: val, isSet: true}
}

func (v NullableBlocksType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlocksType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


