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

// checks if the ChannelCardTypeMappings type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelCardTypeMappings{}

// ChannelCardTypeMappings Request object for creating a new channel-hotel card type mapping.
type ChannelCardTypeMappings struct {
	ChannelCardTypeMapping *ChannelCardTypeMappingType `json:"channelCardTypeMapping,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChannelCardTypeMappings instantiates a new ChannelCardTypeMappings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelCardTypeMappings() *ChannelCardTypeMappings {
	this := ChannelCardTypeMappings{}
	return &this
}

// NewChannelCardTypeMappingsWithDefaults instantiates a new ChannelCardTypeMappings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelCardTypeMappingsWithDefaults() *ChannelCardTypeMappings {
	this := ChannelCardTypeMappings{}
	return &this
}

// GetChannelCardTypeMapping returns the ChannelCardTypeMapping field value if set, zero value otherwise.
func (o *ChannelCardTypeMappings) GetChannelCardTypeMapping() ChannelCardTypeMappingType {
	if o == nil || IsNil(o.ChannelCardTypeMapping) {
		var ret ChannelCardTypeMappingType
		return ret
	}
	return *o.ChannelCardTypeMapping
}

// GetChannelCardTypeMappingOk returns a tuple with the ChannelCardTypeMapping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelCardTypeMappings) GetChannelCardTypeMappingOk() (*ChannelCardTypeMappingType, bool) {
	if o == nil || IsNil(o.ChannelCardTypeMapping) {
		return nil, false
	}
	return o.ChannelCardTypeMapping, true
}

// HasChannelCardTypeMapping returns a boolean if a field has been set.
func (o *ChannelCardTypeMappings) HasChannelCardTypeMapping() bool {
	if o != nil && !IsNil(o.ChannelCardTypeMapping) {
		return true
	}

	return false
}

// SetChannelCardTypeMapping gets a reference to the given ChannelCardTypeMappingType and assigns it to the ChannelCardTypeMapping field.
func (o *ChannelCardTypeMappings) SetChannelCardTypeMapping(v ChannelCardTypeMappingType) {
	o.ChannelCardTypeMapping = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChannelCardTypeMappings) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelCardTypeMappings) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChannelCardTypeMappings) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChannelCardTypeMappings) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChannelCardTypeMappings) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelCardTypeMappings) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChannelCardTypeMappings) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChannelCardTypeMappings) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChannelCardTypeMappings) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelCardTypeMappings) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelCardTypeMapping) {
		toSerialize["channelCardTypeMapping"] = o.ChannelCardTypeMapping
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChannelCardTypeMappings struct {
	value *ChannelCardTypeMappings
	isSet bool
}

func (v NullableChannelCardTypeMappings) Get() *ChannelCardTypeMappings {
	return v.value
}

func (v *NullableChannelCardTypeMappings) Set(val *ChannelCardTypeMappings) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelCardTypeMappings) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelCardTypeMappings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelCardTypeMappings(val *ChannelCardTypeMappings) *NullableChannelCardTypeMappings {
	return &NullableChannelCardTypeMappings{value: val, isSet: true}
}

func (v NullableChannelCardTypeMappings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelCardTypeMappings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


