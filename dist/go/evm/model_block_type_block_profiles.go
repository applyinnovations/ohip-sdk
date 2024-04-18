/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BlockTypeBlockProfiles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockTypeBlockProfiles{}

// BlockTypeBlockProfiles A collection of all the profiles associated to this block. Please comment that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time.
type BlockTypeBlockProfiles struct {
	// The list of profiles associated with the block.
	BlockProfile []BlockProfilesType `json:"blockProfile,omitempty"`
	// Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided.
	FullOverlay *bool `json:"fullOverlay,omitempty"`
}

// NewBlockTypeBlockProfiles instantiates a new BlockTypeBlockProfiles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockTypeBlockProfiles() *BlockTypeBlockProfiles {
	this := BlockTypeBlockProfiles{}
	return &this
}

// NewBlockTypeBlockProfilesWithDefaults instantiates a new BlockTypeBlockProfiles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockTypeBlockProfilesWithDefaults() *BlockTypeBlockProfiles {
	this := BlockTypeBlockProfiles{}
	return &this
}

// GetBlockProfile returns the BlockProfile field value if set, zero value otherwise.
func (o *BlockTypeBlockProfiles) GetBlockProfile() []BlockProfilesType {
	if o == nil || IsNil(o.BlockProfile) {
		var ret []BlockProfilesType
		return ret
	}
	return o.BlockProfile
}

// GetBlockProfileOk returns a tuple with the BlockProfile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTypeBlockProfiles) GetBlockProfileOk() ([]BlockProfilesType, bool) {
	if o == nil || IsNil(o.BlockProfile) {
		return nil, false
	}
	return o.BlockProfile, true
}

// HasBlockProfile returns a boolean if a field has been set.
func (o *BlockTypeBlockProfiles) HasBlockProfile() bool {
	if o != nil && !IsNil(o.BlockProfile) {
		return true
	}

	return false
}

// SetBlockProfile gets a reference to the given []BlockProfilesType and assigns it to the BlockProfile field.
func (o *BlockTypeBlockProfiles) SetBlockProfile(v []BlockProfilesType) {
	o.BlockProfile = v
}

// GetFullOverlay returns the FullOverlay field value if set, zero value otherwise.
func (o *BlockTypeBlockProfiles) GetFullOverlay() bool {
	if o == nil || IsNil(o.FullOverlay) {
		var ret bool
		return ret
	}
	return *o.FullOverlay
}

// GetFullOverlayOk returns a tuple with the FullOverlay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTypeBlockProfiles) GetFullOverlayOk() (*bool, bool) {
	if o == nil || IsNil(o.FullOverlay) {
		return nil, false
	}
	return o.FullOverlay, true
}

// HasFullOverlay returns a boolean if a field has been set.
func (o *BlockTypeBlockProfiles) HasFullOverlay() bool {
	if o != nil && !IsNil(o.FullOverlay) {
		return true
	}

	return false
}

// SetFullOverlay gets a reference to the given bool and assigns it to the FullOverlay field.
func (o *BlockTypeBlockProfiles) SetFullOverlay(v bool) {
	o.FullOverlay = &v
}

func (o BlockTypeBlockProfiles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockTypeBlockProfiles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockProfile) {
		toSerialize["blockProfile"] = o.BlockProfile
	}
	if !IsNil(o.FullOverlay) {
		toSerialize["fullOverlay"] = o.FullOverlay
	}
	return toSerialize, nil
}

type NullableBlockTypeBlockProfiles struct {
	value *BlockTypeBlockProfiles
	isSet bool
}

func (v NullableBlockTypeBlockProfiles) Get() *BlockTypeBlockProfiles {
	return v.value
}

func (v *NullableBlockTypeBlockProfiles) Set(val *BlockTypeBlockProfiles) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockTypeBlockProfiles) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockTypeBlockProfiles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockTypeBlockProfiles(val *BlockTypeBlockProfiles) *NullableBlockTypeBlockProfiles {
	return &NullableBlockTypeBlockProfiles{value: val, isSet: true}
}

func (v NullableBlockTypeBlockProfiles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockTypeBlockProfiles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

