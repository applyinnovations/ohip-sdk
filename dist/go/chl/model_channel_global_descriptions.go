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

// checks if the ChannelGlobalDescriptions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelGlobalDescriptions{}

// ChannelGlobalDescriptions Request object to create new Global Descriptions of the GDS Channels
type ChannelGlobalDescriptions struct {
	// Collection of GDS channel Global description types
	ChannelGlobalDescriptions []GenericGlobalDescriptionType `json:"channelGlobalDescriptions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChannelGlobalDescriptions instantiates a new ChannelGlobalDescriptions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelGlobalDescriptions() *ChannelGlobalDescriptions {
	this := ChannelGlobalDescriptions{}
	return &this
}

// NewChannelGlobalDescriptionsWithDefaults instantiates a new ChannelGlobalDescriptions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelGlobalDescriptionsWithDefaults() *ChannelGlobalDescriptions {
	this := ChannelGlobalDescriptions{}
	return &this
}

// GetChannelGlobalDescriptions returns the ChannelGlobalDescriptions field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptions) GetChannelGlobalDescriptions() []GenericGlobalDescriptionType {
	if o == nil || IsNil(o.ChannelGlobalDescriptions) {
		var ret []GenericGlobalDescriptionType
		return ret
	}
	return o.ChannelGlobalDescriptions
}

// GetChannelGlobalDescriptionsOk returns a tuple with the ChannelGlobalDescriptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptions) GetChannelGlobalDescriptionsOk() ([]GenericGlobalDescriptionType, bool) {
	if o == nil || IsNil(o.ChannelGlobalDescriptions) {
		return nil, false
	}
	return o.ChannelGlobalDescriptions, true
}

// HasChannelGlobalDescriptions returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptions) HasChannelGlobalDescriptions() bool {
	if o != nil && !IsNil(o.ChannelGlobalDescriptions) {
		return true
	}

	return false
}

// SetChannelGlobalDescriptions gets a reference to the given []GenericGlobalDescriptionType and assigns it to the ChannelGlobalDescriptions field.
func (o *ChannelGlobalDescriptions) SetChannelGlobalDescriptions(v []GenericGlobalDescriptionType) {
	o.ChannelGlobalDescriptions = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptions) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptions) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptions) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChannelGlobalDescriptions) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChannelGlobalDescriptions) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelGlobalDescriptions) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChannelGlobalDescriptions) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChannelGlobalDescriptions) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChannelGlobalDescriptions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelGlobalDescriptions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelGlobalDescriptions) {
		toSerialize["channelGlobalDescriptions"] = o.ChannelGlobalDescriptions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChannelGlobalDescriptions struct {
	value *ChannelGlobalDescriptions
	isSet bool
}

func (v NullableChannelGlobalDescriptions) Get() *ChannelGlobalDescriptions {
	return v.value
}

func (v *NullableChannelGlobalDescriptions) Set(val *ChannelGlobalDescriptions) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelGlobalDescriptions) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelGlobalDescriptions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelGlobalDescriptions(val *ChannelGlobalDescriptions) *NullableChannelGlobalDescriptions {
	return &NullableChannelGlobalDescriptions{value: val, isSet: true}
}

func (v NullableChannelGlobalDescriptions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelGlobalDescriptions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

