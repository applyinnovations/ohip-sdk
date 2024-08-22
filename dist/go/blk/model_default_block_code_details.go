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

// checks if the DefaultBlockCodeDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DefaultBlockCodeDetails{}

// DefaultBlockCodeDetails Response object that returns a default block code based on template.
type DefaultBlockCodeDetails struct {
	// Business Block Code.
	BlockCode *string `json:"blockCode,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDefaultBlockCodeDetails instantiates a new DefaultBlockCodeDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDefaultBlockCodeDetails() *DefaultBlockCodeDetails {
	this := DefaultBlockCodeDetails{}
	return &this
}

// NewDefaultBlockCodeDetailsWithDefaults instantiates a new DefaultBlockCodeDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDefaultBlockCodeDetailsWithDefaults() *DefaultBlockCodeDetails {
	this := DefaultBlockCodeDetails{}
	return &this
}

// GetBlockCode returns the BlockCode field value if set, zero value otherwise.
func (o *DefaultBlockCodeDetails) GetBlockCode() string {
	if o == nil || IsNil(o.BlockCode) {
		var ret string
		return ret
	}
	return *o.BlockCode
}

// GetBlockCodeOk returns a tuple with the BlockCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultBlockCodeDetails) GetBlockCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BlockCode) {
		return nil, false
	}
	return o.BlockCode, true
}

// HasBlockCode returns a boolean if a field has been set.
func (o *DefaultBlockCodeDetails) HasBlockCode() bool {
	if o != nil && !IsNil(o.BlockCode) {
		return true
	}

	return false
}

// SetBlockCode gets a reference to the given string and assigns it to the BlockCode field.
func (o *DefaultBlockCodeDetails) SetBlockCode(v string) {
	o.BlockCode = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DefaultBlockCodeDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultBlockCodeDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DefaultBlockCodeDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DefaultBlockCodeDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DefaultBlockCodeDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DefaultBlockCodeDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DefaultBlockCodeDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DefaultBlockCodeDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DefaultBlockCodeDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DefaultBlockCodeDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockCode) {
		toSerialize["blockCode"] = o.BlockCode
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDefaultBlockCodeDetails struct {
	value *DefaultBlockCodeDetails
	isSet bool
}

func (v NullableDefaultBlockCodeDetails) Get() *DefaultBlockCodeDetails {
	return v.value
}

func (v *NullableDefaultBlockCodeDetails) Set(val *DefaultBlockCodeDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableDefaultBlockCodeDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableDefaultBlockCodeDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDefaultBlockCodeDetails(val *DefaultBlockCodeDetails) *NullableDefaultBlockCodeDetails {
	return &NullableDefaultBlockCodeDetails{value: val, isSet: true}
}

func (v NullableDefaultBlockCodeDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDefaultBlockCodeDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


