/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelGlobalDescription type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelGlobalDescription{}

// ChannelGlobalDescription Request object for changing channel rate codes global description.
type ChannelGlobalDescription struct {
	ChannelRoomDescription *ChannelGlobalDescriptionType `json:"channelRoomDescription,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChannelGlobalDescription instantiates a new ChannelGlobalDescription object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelGlobalDescription() *ChannelGlobalDescription {
	this := ChannelGlobalDescription{}
	return &this
}

// NewChannelGlobalDescriptionWithDefaults instantiates a new ChannelGlobalDescription object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelGlobalDescriptionWithDefaults() *ChannelGlobalDescription {
	this := ChannelGlobalDescription{}
	return &this
}

// GetChannelRoomDescription returns the ChannelRoomDescription field value if set, zero value otherwise.
func (o *ChannelGlobalDescription) GetChannelRoomDescription() ChannelGlobalDescriptionType {
	if o == nil || IsNil(o.ChannelRoomDescription) {
		var ret ChannelGlobalDescriptionType
		return ret
	}
	return *o.ChannelRoomDescription
}

// GetChannelRoomDescriptionOk returns a tuple with the ChannelRoomDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescription) GetChannelRoomDescriptionOk() (*ChannelGlobalDescriptionType, bool) {
	if o == nil || IsNil(o.ChannelRoomDescription) {
		return nil, false
	}
	return o.ChannelRoomDescription, true
}

// HasChannelRoomDescription returns a boolean if a field has been set.
func (o *ChannelGlobalDescription) HasChannelRoomDescription() bool {
	if o != nil && !IsNil(o.ChannelRoomDescription) {
		return true
	}

	return false
}

// SetChannelRoomDescription gets a reference to the given ChannelGlobalDescriptionType and assigns it to the ChannelRoomDescription field.
func (o *ChannelGlobalDescription) SetChannelRoomDescription(v ChannelGlobalDescriptionType) {
	o.ChannelRoomDescription = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChannelGlobalDescription) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescription) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChannelGlobalDescription) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChannelGlobalDescription) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChannelGlobalDescription) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescription) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChannelGlobalDescription) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChannelGlobalDescription) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChannelGlobalDescription) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelGlobalDescription) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelRoomDescription) {
		toSerialize["channelRoomDescription"] = o.ChannelRoomDescription
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChannelGlobalDescription struct {
	value *ChannelGlobalDescription
	isSet bool
}

func (v NullableChannelGlobalDescription) Get() *ChannelGlobalDescription {
	return v.value
}

func (v *NullableChannelGlobalDescription) Set(val *ChannelGlobalDescription) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelGlobalDescription) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelGlobalDescription) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelGlobalDescription(val *ChannelGlobalDescription) *NullableChannelGlobalDescription {
	return &NullableChannelGlobalDescription{value: val, isSet: true}
}

func (v NullableChannelGlobalDescription) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelGlobalDescription) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


