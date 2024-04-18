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

// checks if the BlockAvailabilityRoomTypeInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockAvailabilityRoomTypeInfo{}

// BlockAvailabilityRoomTypeInfo Room type information including packages and basic room type details.
type BlockAvailabilityRoomTypeInfo struct {
	// Indicates whether the room type is defined in the rate code for which availability is fetched.
	Available *bool `json:"available,omitempty"`
	// Package information.
	Packages []PackageElementType `json:"packages,omitempty"`
	// Room type for which the details can be found in this node.
	RoomType *string `json:"roomType,omitempty"`
	RoomTypeInfo *RoomTypeInfoType `json:"roomTypeInfo,omitempty"`
}

// NewBlockAvailabilityRoomTypeInfo instantiates a new BlockAvailabilityRoomTypeInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockAvailabilityRoomTypeInfo() *BlockAvailabilityRoomTypeInfo {
	this := BlockAvailabilityRoomTypeInfo{}
	return &this
}

// NewBlockAvailabilityRoomTypeInfoWithDefaults instantiates a new BlockAvailabilityRoomTypeInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockAvailabilityRoomTypeInfoWithDefaults() *BlockAvailabilityRoomTypeInfo {
	this := BlockAvailabilityRoomTypeInfo{}
	return &this
}

// GetAvailable returns the Available field value if set, zero value otherwise.
func (o *BlockAvailabilityRoomTypeInfo) GetAvailable() bool {
	if o == nil || IsNil(o.Available) {
		var ret bool
		return ret
	}
	return *o.Available
}

// GetAvailableOk returns a tuple with the Available field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAvailabilityRoomTypeInfo) GetAvailableOk() (*bool, bool) {
	if o == nil || IsNil(o.Available) {
		return nil, false
	}
	return o.Available, true
}

// HasAvailable returns a boolean if a field has been set.
func (o *BlockAvailabilityRoomTypeInfo) HasAvailable() bool {
	if o != nil && !IsNil(o.Available) {
		return true
	}

	return false
}

// SetAvailable gets a reference to the given bool and assigns it to the Available field.
func (o *BlockAvailabilityRoomTypeInfo) SetAvailable(v bool) {
	o.Available = &v
}

// GetPackages returns the Packages field value if set, zero value otherwise.
func (o *BlockAvailabilityRoomTypeInfo) GetPackages() []PackageElementType {
	if o == nil || IsNil(o.Packages) {
		var ret []PackageElementType
		return ret
	}
	return o.Packages
}

// GetPackagesOk returns a tuple with the Packages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAvailabilityRoomTypeInfo) GetPackagesOk() ([]PackageElementType, bool) {
	if o == nil || IsNil(o.Packages) {
		return nil, false
	}
	return o.Packages, true
}

// HasPackages returns a boolean if a field has been set.
func (o *BlockAvailabilityRoomTypeInfo) HasPackages() bool {
	if o != nil && !IsNil(o.Packages) {
		return true
	}

	return false
}

// SetPackages gets a reference to the given []PackageElementType and assigns it to the Packages field.
func (o *BlockAvailabilityRoomTypeInfo) SetPackages(v []PackageElementType) {
	o.Packages = v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *BlockAvailabilityRoomTypeInfo) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *BlockAvailabilityRoomTypeInfo) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *BlockAvailabilityRoomTypeInfo) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRoomTypeInfo returns the RoomTypeInfo field value if set, zero value otherwise.
func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeInfo() RoomTypeInfoType {
	if o == nil || IsNil(o.RoomTypeInfo) {
		var ret RoomTypeInfoType
		return ret
	}
	return *o.RoomTypeInfo
}

// GetRoomTypeInfoOk returns a tuple with the RoomTypeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeInfoOk() (*RoomTypeInfoType, bool) {
	if o == nil || IsNil(o.RoomTypeInfo) {
		return nil, false
	}
	return o.RoomTypeInfo, true
}

// HasRoomTypeInfo returns a boolean if a field has been set.
func (o *BlockAvailabilityRoomTypeInfo) HasRoomTypeInfo() bool {
	if o != nil && !IsNil(o.RoomTypeInfo) {
		return true
	}

	return false
}

// SetRoomTypeInfo gets a reference to the given RoomTypeInfoType and assigns it to the RoomTypeInfo field.
func (o *BlockAvailabilityRoomTypeInfo) SetRoomTypeInfo(v RoomTypeInfoType) {
	o.RoomTypeInfo = &v
}

func (o BlockAvailabilityRoomTypeInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockAvailabilityRoomTypeInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Available) {
		toSerialize["available"] = o.Available
	}
	if !IsNil(o.Packages) {
		toSerialize["packages"] = o.Packages
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RoomTypeInfo) {
		toSerialize["roomTypeInfo"] = o.RoomTypeInfo
	}
	return toSerialize, nil
}

type NullableBlockAvailabilityRoomTypeInfo struct {
	value *BlockAvailabilityRoomTypeInfo
	isSet bool
}

func (v NullableBlockAvailabilityRoomTypeInfo) Get() *BlockAvailabilityRoomTypeInfo {
	return v.value
}

func (v *NullableBlockAvailabilityRoomTypeInfo) Set(val *BlockAvailabilityRoomTypeInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockAvailabilityRoomTypeInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockAvailabilityRoomTypeInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockAvailabilityRoomTypeInfo(val *BlockAvailabilityRoomTypeInfo) *NullableBlockAvailabilityRoomTypeInfo {
	return &NullableBlockAvailabilityRoomTypeInfo{value: val, isSet: true}
}

func (v NullableBlockAvailabilityRoomTypeInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockAvailabilityRoomTypeInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

