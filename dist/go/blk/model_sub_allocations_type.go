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

// checks if the SubAllocationsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SubAllocationsType{}

// SubAllocationsType A collection of Sub Allocations or Unique IDs of Sub Allocation.
type SubAllocationsType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// A collection of Sub Allocations or Unique IDs of Sub Allocations.
	SubAllocationInfo []SubAllocationsTypeSubAllocationInfoInner `json:"subAllocationInfo,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewSubAllocationsType instantiates a new SubAllocationsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubAllocationsType() *SubAllocationsType {
	this := SubAllocationsType{}
	return &this
}

// NewSubAllocationsTypeWithDefaults instantiates a new SubAllocationsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubAllocationsTypeWithDefaults() *SubAllocationsType {
	this := SubAllocationsType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *SubAllocationsType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocationsType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *SubAllocationsType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *SubAllocationsType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *SubAllocationsType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocationsType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *SubAllocationsType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *SubAllocationsType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetSubAllocationInfo returns the SubAllocationInfo field value if set, zero value otherwise.
func (o *SubAllocationsType) GetSubAllocationInfo() []SubAllocationsTypeSubAllocationInfoInner {
	if o == nil || IsNil(o.SubAllocationInfo) {
		var ret []SubAllocationsTypeSubAllocationInfoInner
		return ret
	}
	return o.SubAllocationInfo
}

// GetSubAllocationInfoOk returns a tuple with the SubAllocationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocationsType) GetSubAllocationInfoOk() ([]SubAllocationsTypeSubAllocationInfoInner, bool) {
	if o == nil || IsNil(o.SubAllocationInfo) {
		return nil, false
	}
	return o.SubAllocationInfo, true
}

// HasSubAllocationInfo returns a boolean if a field has been set.
func (o *SubAllocationsType) HasSubAllocationInfo() bool {
	if o != nil && !IsNil(o.SubAllocationInfo) {
		return true
	}

	return false
}

// SetSubAllocationInfo gets a reference to the given []SubAllocationsTypeSubAllocationInfoInner and assigns it to the SubAllocationInfo field.
func (o *SubAllocationsType) SetSubAllocationInfo(v []SubAllocationsTypeSubAllocationInfoInner) {
	o.SubAllocationInfo = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *SubAllocationsType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocationsType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *SubAllocationsType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *SubAllocationsType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o SubAllocationsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SubAllocationsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.SubAllocationInfo) {
		toSerialize["subAllocationInfo"] = o.SubAllocationInfo
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableSubAllocationsType struct {
	value *SubAllocationsType
	isSet bool
}

func (v NullableSubAllocationsType) Get() *SubAllocationsType {
	return v.value
}

func (v *NullableSubAllocationsType) Set(val *SubAllocationsType) {
	v.value = val
	v.isSet = true
}

func (v NullableSubAllocationsType) IsSet() bool {
	return v.isSet
}

func (v *NullableSubAllocationsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubAllocationsType(val *SubAllocationsType) *NullableSubAllocationsType {
	return &NullableSubAllocationsType{value: val, isSet: true}
}

func (v NullableSubAllocationsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubAllocationsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

