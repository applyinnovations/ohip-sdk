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

// checks if the BlockProfilesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockProfilesType{}

// BlockProfilesType A collection of Profile objects or Unique IDs of Profiles.
type BlockProfilesType struct {
	BlockProfileType *BlockProfileTypeType `json:"blockProfileType,omitempty"`
	// Indicates if profile is printable to customer reports by default.
	DefaultPrint *bool `json:"defaultPrint,omitempty"`
	// Is this profile attached to block is primary?
	Primary *bool `json:"primary,omitempty"`
	Profile *ProfileType `json:"profile,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
}

// NewBlockProfilesType instantiates a new BlockProfilesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockProfilesType() *BlockProfilesType {
	this := BlockProfilesType{}
	return &this
}

// NewBlockProfilesTypeWithDefaults instantiates a new BlockProfilesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockProfilesTypeWithDefaults() *BlockProfilesType {
	this := BlockProfilesType{}
	return &this
}

// GetBlockProfileType returns the BlockProfileType field value if set, zero value otherwise.
func (o *BlockProfilesType) GetBlockProfileType() BlockProfileTypeType {
	if o == nil || IsNil(o.BlockProfileType) {
		var ret BlockProfileTypeType
		return ret
	}
	return *o.BlockProfileType
}

// GetBlockProfileTypeOk returns a tuple with the BlockProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockProfilesType) GetBlockProfileTypeOk() (*BlockProfileTypeType, bool) {
	if o == nil || IsNil(o.BlockProfileType) {
		return nil, false
	}
	return o.BlockProfileType, true
}

// HasBlockProfileType returns a boolean if a field has been set.
func (o *BlockProfilesType) HasBlockProfileType() bool {
	if o != nil && !IsNil(o.BlockProfileType) {
		return true
	}

	return false
}

// SetBlockProfileType gets a reference to the given BlockProfileTypeType and assigns it to the BlockProfileType field.
func (o *BlockProfilesType) SetBlockProfileType(v BlockProfileTypeType) {
	o.BlockProfileType = &v
}

// GetDefaultPrint returns the DefaultPrint field value if set, zero value otherwise.
func (o *BlockProfilesType) GetDefaultPrint() bool {
	if o == nil || IsNil(o.DefaultPrint) {
		var ret bool
		return ret
	}
	return *o.DefaultPrint
}

// GetDefaultPrintOk returns a tuple with the DefaultPrint field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockProfilesType) GetDefaultPrintOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultPrint) {
		return nil, false
	}
	return o.DefaultPrint, true
}

// HasDefaultPrint returns a boolean if a field has been set.
func (o *BlockProfilesType) HasDefaultPrint() bool {
	if o != nil && !IsNil(o.DefaultPrint) {
		return true
	}

	return false
}

// SetDefaultPrint gets a reference to the given bool and assigns it to the DefaultPrint field.
func (o *BlockProfilesType) SetDefaultPrint(v bool) {
	o.DefaultPrint = &v
}

// GetPrimary returns the Primary field value if set, zero value otherwise.
func (o *BlockProfilesType) GetPrimary() bool {
	if o == nil || IsNil(o.Primary) {
		var ret bool
		return ret
	}
	return *o.Primary
}

// GetPrimaryOk returns a tuple with the Primary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockProfilesType) GetPrimaryOk() (*bool, bool) {
	if o == nil || IsNil(o.Primary) {
		return nil, false
	}
	return o.Primary, true
}

// HasPrimary returns a boolean if a field has been set.
func (o *BlockProfilesType) HasPrimary() bool {
	if o != nil && !IsNil(o.Primary) {
		return true
	}

	return false
}

// SetPrimary gets a reference to the given bool and assigns it to the Primary field.
func (o *BlockProfilesType) SetPrimary(v bool) {
	o.Primary = &v
}

// GetProfile returns the Profile field value if set, zero value otherwise.
func (o *BlockProfilesType) GetProfile() ProfileType {
	if o == nil || IsNil(o.Profile) {
		var ret ProfileType
		return ret
	}
	return *o.Profile
}

// GetProfileOk returns a tuple with the Profile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockProfilesType) GetProfileOk() (*ProfileType, bool) {
	if o == nil || IsNil(o.Profile) {
		return nil, false
	}
	return o.Profile, true
}

// HasProfile returns a boolean if a field has been set.
func (o *BlockProfilesType) HasProfile() bool {
	if o != nil && !IsNil(o.Profile) {
		return true
	}

	return false
}

// SetProfile gets a reference to the given ProfileType and assigns it to the Profile field.
func (o *BlockProfilesType) SetProfile(v ProfileType) {
	o.Profile = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *BlockProfilesType) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockProfilesType) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *BlockProfilesType) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *BlockProfilesType) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

func (o BlockProfilesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockProfilesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockProfileType) {
		toSerialize["blockProfileType"] = o.BlockProfileType
	}
	if !IsNil(o.DefaultPrint) {
		toSerialize["defaultPrint"] = o.DefaultPrint
	}
	if !IsNil(o.Primary) {
		toSerialize["primary"] = o.Primary
	}
	if !IsNil(o.Profile) {
		toSerialize["profile"] = o.Profile
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	return toSerialize, nil
}

type NullableBlockProfilesType struct {
	value *BlockProfilesType
	isSet bool
}

func (v NullableBlockProfilesType) Get() *BlockProfilesType {
	return v.value
}

func (v *NullableBlockProfilesType) Set(val *BlockProfilesType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockProfilesType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockProfilesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockProfilesType(val *BlockProfilesType) *NullableBlockProfilesType {
	return &NullableBlockProfilesType{value: val, isSet: true}
}

func (v NullableBlockProfilesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockProfilesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


