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

// checks if the SubAllocationsTypeSubAllocationInfoInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SubAllocationsTypeSubAllocationInfoInner{}

// SubAllocationsTypeSubAllocationInfoInner struct for SubAllocationsTypeSubAllocationInfoInner
type SubAllocationsTypeSubAllocationInfoInner struct {
	SubAllocation *SubAllocationType `json:"subAllocation,omitempty"`
}

// NewSubAllocationsTypeSubAllocationInfoInner instantiates a new SubAllocationsTypeSubAllocationInfoInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubAllocationsTypeSubAllocationInfoInner() *SubAllocationsTypeSubAllocationInfoInner {
	this := SubAllocationsTypeSubAllocationInfoInner{}
	return &this
}

// NewSubAllocationsTypeSubAllocationInfoInnerWithDefaults instantiates a new SubAllocationsTypeSubAllocationInfoInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubAllocationsTypeSubAllocationInfoInnerWithDefaults() *SubAllocationsTypeSubAllocationInfoInner {
	this := SubAllocationsTypeSubAllocationInfoInner{}
	return &this
}

// GetSubAllocation returns the SubAllocation field value if set, zero value otherwise.
func (o *SubAllocationsTypeSubAllocationInfoInner) GetSubAllocation() SubAllocationType {
	if o == nil || IsNil(o.SubAllocation) {
		var ret SubAllocationType
		return ret
	}
	return *o.SubAllocation
}

// GetSubAllocationOk returns a tuple with the SubAllocation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocationsTypeSubAllocationInfoInner) GetSubAllocationOk() (*SubAllocationType, bool) {
	if o == nil || IsNil(o.SubAllocation) {
		return nil, false
	}
	return o.SubAllocation, true
}

// HasSubAllocation returns a boolean if a field has been set.
func (o *SubAllocationsTypeSubAllocationInfoInner) HasSubAllocation() bool {
	if o != nil && !IsNil(o.SubAllocation) {
		return true
	}

	return false
}

// SetSubAllocation gets a reference to the given SubAllocationType and assigns it to the SubAllocation field.
func (o *SubAllocationsTypeSubAllocationInfoInner) SetSubAllocation(v SubAllocationType) {
	o.SubAllocation = &v
}

func (o SubAllocationsTypeSubAllocationInfoInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SubAllocationsTypeSubAllocationInfoInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SubAllocation) {
		toSerialize["subAllocation"] = o.SubAllocation
	}
	return toSerialize, nil
}

type NullableSubAllocationsTypeSubAllocationInfoInner struct {
	value *SubAllocationsTypeSubAllocationInfoInner
	isSet bool
}

func (v NullableSubAllocationsTypeSubAllocationInfoInner) Get() *SubAllocationsTypeSubAllocationInfoInner {
	return v.value
}

func (v *NullableSubAllocationsTypeSubAllocationInfoInner) Set(val *SubAllocationsTypeSubAllocationInfoInner) {
	v.value = val
	v.isSet = true
}

func (v NullableSubAllocationsTypeSubAllocationInfoInner) IsSet() bool {
	return v.isSet
}

func (v *NullableSubAllocationsTypeSubAllocationInfoInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubAllocationsTypeSubAllocationInfoInner(val *SubAllocationsTypeSubAllocationInfoInner) *NullableSubAllocationsTypeSubAllocationInfoInner {
	return &NullableSubAllocationsTypeSubAllocationInfoInner{value: val, isSet: true}
}

func (v NullableSubAllocationsTypeSubAllocationInfoInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubAllocationsTypeSubAllocationInfoInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


