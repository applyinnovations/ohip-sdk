/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the BlockRatePlans type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockRatePlans{}

// BlockRatePlans Response object to fetch rate plans summary information for blocks.
type BlockRatePlans struct {
	BlockRatePlans *BlockRatePlansType `json:"blockRatePlans,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockRatePlans instantiates a new BlockRatePlans object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockRatePlans() *BlockRatePlans {
	this := BlockRatePlans{}
	return &this
}

// NewBlockRatePlansWithDefaults instantiates a new BlockRatePlans object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockRatePlansWithDefaults() *BlockRatePlans {
	this := BlockRatePlans{}
	return &this
}

// GetBlockRatePlans returns the BlockRatePlans field value if set, zero value otherwise.
func (o *BlockRatePlans) GetBlockRatePlans() BlockRatePlansType {
	if o == nil || IsNil(o.BlockRatePlans) {
		var ret BlockRatePlansType
		return ret
	}
	return *o.BlockRatePlans
}

// GetBlockRatePlansOk returns a tuple with the BlockRatePlans field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlans) GetBlockRatePlansOk() (*BlockRatePlansType, bool) {
	if o == nil || IsNil(o.BlockRatePlans) {
		return nil, false
	}
	return o.BlockRatePlans, true
}

// HasBlockRatePlans returns a boolean if a field has been set.
func (o *BlockRatePlans) HasBlockRatePlans() bool {
	if o != nil && !IsNil(o.BlockRatePlans) {
		return true
	}

	return false
}

// SetBlockRatePlans gets a reference to the given BlockRatePlansType and assigns it to the BlockRatePlans field.
func (o *BlockRatePlans) SetBlockRatePlans(v BlockRatePlansType) {
	o.BlockRatePlans = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockRatePlans) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlans) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockRatePlans) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockRatePlans) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockRatePlans) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlans) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockRatePlans) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockRatePlans) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockRatePlans) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockRatePlans) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockRatePlans) {
		toSerialize["blockRatePlans"] = o.BlockRatePlans
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockRatePlans struct {
	value *BlockRatePlans
	isSet bool
}

func (v NullableBlockRatePlans) Get() *BlockRatePlans {
	return v.value
}

func (v *NullableBlockRatePlans) Set(val *BlockRatePlans) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockRatePlans) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockRatePlans) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockRatePlans(val *BlockRatePlans) *NullableBlockRatePlans {
	return &NullableBlockRatePlans{value: val, isSet: true}
}

func (v NullableBlockRatePlans) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockRatePlans) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


