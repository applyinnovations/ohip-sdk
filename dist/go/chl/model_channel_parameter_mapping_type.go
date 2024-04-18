/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelParameterMappingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelParameterMappingType{}

// ChannelParameterMappingType Includes information about the parametersTypes and system Information for the Channel/Hotel.
type ChannelParameterMappingType struct {
	// Collection of channel parameters organized into groups.
	Groups []ChannelParameterGroupType `json:"groups,omitempty"`
	SystemInfo *SystemInfoType `json:"systemInfo,omitempty"`
}

// NewChannelParameterMappingType instantiates a new ChannelParameterMappingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelParameterMappingType() *ChannelParameterMappingType {
	this := ChannelParameterMappingType{}
	return &this
}

// NewChannelParameterMappingTypeWithDefaults instantiates a new ChannelParameterMappingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelParameterMappingTypeWithDefaults() *ChannelParameterMappingType {
	this := ChannelParameterMappingType{}
	return &this
}

// GetGroups returns the Groups field value if set, zero value otherwise.
func (o *ChannelParameterMappingType) GetGroups() []ChannelParameterGroupType {
	if o == nil || IsNil(o.Groups) {
		var ret []ChannelParameterGroupType
		return ret
	}
	return o.Groups
}

// GetGroupsOk returns a tuple with the Groups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelParameterMappingType) GetGroupsOk() ([]ChannelParameterGroupType, bool) {
	if o == nil || IsNil(o.Groups) {
		return nil, false
	}
	return o.Groups, true
}

// HasGroups returns a boolean if a field has been set.
func (o *ChannelParameterMappingType) HasGroups() bool {
	if o != nil && !IsNil(o.Groups) {
		return true
	}

	return false
}

// SetGroups gets a reference to the given []ChannelParameterGroupType and assigns it to the Groups field.
func (o *ChannelParameterMappingType) SetGroups(v []ChannelParameterGroupType) {
	o.Groups = v
}

// GetSystemInfo returns the SystemInfo field value if set, zero value otherwise.
func (o *ChannelParameterMappingType) GetSystemInfo() SystemInfoType {
	if o == nil || IsNil(o.SystemInfo) {
		var ret SystemInfoType
		return ret
	}
	return *o.SystemInfo
}

// GetSystemInfoOk returns a tuple with the SystemInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelParameterMappingType) GetSystemInfoOk() (*SystemInfoType, bool) {
	if o == nil || IsNil(o.SystemInfo) {
		return nil, false
	}
	return o.SystemInfo, true
}

// HasSystemInfo returns a boolean if a field has been set.
func (o *ChannelParameterMappingType) HasSystemInfo() bool {
	if o != nil && !IsNil(o.SystemInfo) {
		return true
	}

	return false
}

// SetSystemInfo gets a reference to the given SystemInfoType and assigns it to the SystemInfo field.
func (o *ChannelParameterMappingType) SetSystemInfo(v SystemInfoType) {
	o.SystemInfo = &v
}

func (o ChannelParameterMappingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelParameterMappingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Groups) {
		toSerialize["groups"] = o.Groups
	}
	if !IsNil(o.SystemInfo) {
		toSerialize["systemInfo"] = o.SystemInfo
	}
	return toSerialize, nil
}

type NullableChannelParameterMappingType struct {
	value *ChannelParameterMappingType
	isSet bool
}

func (v NullableChannelParameterMappingType) Get() *ChannelParameterMappingType {
	return v.value
}

func (v *NullableChannelParameterMappingType) Set(val *ChannelParameterMappingType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelParameterMappingType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelParameterMappingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelParameterMappingType(val *ChannelParameterMappingType) *NullableChannelParameterMappingType {
	return &NullableChannelParameterMappingType{value: val, isSet: true}
}

func (v NullableChannelParameterMappingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelParameterMappingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

