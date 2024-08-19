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

// checks if the BlockAllocationRange type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockAllocationRange{}

// BlockAllocationRange Request for updating block allocation for a range of dates.
type BlockAllocationRange struct {
	BlockAllocationRange *BlockAllocationRangeType `json:"blockAllocationRange,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockAllocationRange instantiates a new BlockAllocationRange object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockAllocationRange() *BlockAllocationRange {
	this := BlockAllocationRange{}
	return &this
}

// NewBlockAllocationRangeWithDefaults instantiates a new BlockAllocationRange object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockAllocationRangeWithDefaults() *BlockAllocationRange {
	this := BlockAllocationRange{}
	return &this
}

// GetBlockAllocationRange returns the BlockAllocationRange field value if set, zero value otherwise.
func (o *BlockAllocationRange) GetBlockAllocationRange() BlockAllocationRangeType {
	if o == nil || IsNil(o.BlockAllocationRange) {
		var ret BlockAllocationRangeType
		return ret
	}
	return *o.BlockAllocationRange
}

// GetBlockAllocationRangeOk returns a tuple with the BlockAllocationRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRange) GetBlockAllocationRangeOk() (*BlockAllocationRangeType, bool) {
	if o == nil || IsNil(o.BlockAllocationRange) {
		return nil, false
	}
	return o.BlockAllocationRange, true
}

// HasBlockAllocationRange returns a boolean if a field has been set.
func (o *BlockAllocationRange) HasBlockAllocationRange() bool {
	if o != nil && !IsNil(o.BlockAllocationRange) {
		return true
	}

	return false
}

// SetBlockAllocationRange gets a reference to the given BlockAllocationRangeType and assigns it to the BlockAllocationRange field.
func (o *BlockAllocationRange) SetBlockAllocationRange(v BlockAllocationRangeType) {
	o.BlockAllocationRange = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockAllocationRange) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRange) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockAllocationRange) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockAllocationRange) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockAllocationRange) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAllocationRange) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockAllocationRange) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockAllocationRange) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockAllocationRange) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockAllocationRange) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockAllocationRange) {
		toSerialize["blockAllocationRange"] = o.BlockAllocationRange
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockAllocationRange struct {
	value *BlockAllocationRange
	isSet bool
}

func (v NullableBlockAllocationRange) Get() *BlockAllocationRange {
	return v.value
}

func (v *NullableBlockAllocationRange) Set(val *BlockAllocationRange) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockAllocationRange) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockAllocationRange) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockAllocationRange(val *BlockAllocationRange) *NullableBlockAllocationRange {
	return &NullableBlockAllocationRange{value: val, isSet: true}
}

func (v NullableBlockAllocationRange) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockAllocationRange) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


