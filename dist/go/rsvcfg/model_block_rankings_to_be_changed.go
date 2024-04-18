/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the BlockRankingsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockRankingsToBeChanged{}

// BlockRankingsToBeChanged Request object for changing Block Rankings.
type BlockRankingsToBeChanged struct {
	// List of Block Rankings.
	BlockRankings []BlockRankingType `json:"blockRankings,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockRankingsToBeChanged instantiates a new BlockRankingsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockRankingsToBeChanged() *BlockRankingsToBeChanged {
	this := BlockRankingsToBeChanged{}
	return &this
}

// NewBlockRankingsToBeChangedWithDefaults instantiates a new BlockRankingsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockRankingsToBeChangedWithDefaults() *BlockRankingsToBeChanged {
	this := BlockRankingsToBeChanged{}
	return &this
}

// GetBlockRankings returns the BlockRankings field value if set, zero value otherwise.
func (o *BlockRankingsToBeChanged) GetBlockRankings() []BlockRankingType {
	if o == nil || IsNil(o.BlockRankings) {
		var ret []BlockRankingType
		return ret
	}
	return o.BlockRankings
}

// GetBlockRankingsOk returns a tuple with the BlockRankings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRankingsToBeChanged) GetBlockRankingsOk() ([]BlockRankingType, bool) {
	if o == nil || IsNil(o.BlockRankings) {
		return nil, false
	}
	return o.BlockRankings, true
}

// HasBlockRankings returns a boolean if a field has been set.
func (o *BlockRankingsToBeChanged) HasBlockRankings() bool {
	if o != nil && !IsNil(o.BlockRankings) {
		return true
	}

	return false
}

// SetBlockRankings gets a reference to the given []BlockRankingType and assigns it to the BlockRankings field.
func (o *BlockRankingsToBeChanged) SetBlockRankings(v []BlockRankingType) {
	o.BlockRankings = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockRankingsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRankingsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockRankingsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockRankingsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockRankingsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRankingsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockRankingsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockRankingsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockRankingsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockRankingsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockRankings) {
		toSerialize["blockRankings"] = o.BlockRankings
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockRankingsToBeChanged struct {
	value *BlockRankingsToBeChanged
	isSet bool
}

func (v NullableBlockRankingsToBeChanged) Get() *BlockRankingsToBeChanged {
	return v.value
}

func (v *NullableBlockRankingsToBeChanged) Set(val *BlockRankingsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockRankingsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockRankingsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockRankingsToBeChanged(val *BlockRankingsToBeChanged) *NullableBlockRankingsToBeChanged {
	return &NullableBlockRankingsToBeChanged{value: val, isSet: true}
}

func (v NullableBlockRankingsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockRankingsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

