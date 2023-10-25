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

// checks if the DisplaySetsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DisplaySetsToBeChanged{}

// DisplaySetsToBeChanged Request object for changing Display Sets.
type DisplaySetsToBeChanged struct {
	// List of Display Sets.
	DisplaySets []DisplaySetType `json:"displaySets,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDisplaySetsToBeChanged instantiates a new DisplaySetsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDisplaySetsToBeChanged() *DisplaySetsToBeChanged {
	this := DisplaySetsToBeChanged{}
	return &this
}

// NewDisplaySetsToBeChangedWithDefaults instantiates a new DisplaySetsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDisplaySetsToBeChangedWithDefaults() *DisplaySetsToBeChanged {
	this := DisplaySetsToBeChanged{}
	return &this
}

// GetDisplaySets returns the DisplaySets field value if set, zero value otherwise.
func (o *DisplaySetsToBeChanged) GetDisplaySets() []DisplaySetType {
	if o == nil || IsNil(o.DisplaySets) {
		var ret []DisplaySetType
		return ret
	}
	return o.DisplaySets
}

// GetDisplaySetsOk returns a tuple with the DisplaySets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DisplaySetsToBeChanged) GetDisplaySetsOk() ([]DisplaySetType, bool) {
	if o == nil || IsNil(o.DisplaySets) {
		return nil, false
	}
	return o.DisplaySets, true
}

// HasDisplaySets returns a boolean if a field has been set.
func (o *DisplaySetsToBeChanged) HasDisplaySets() bool {
	if o != nil && !IsNil(o.DisplaySets) {
		return true
	}

	return false
}

// SetDisplaySets gets a reference to the given []DisplaySetType and assigns it to the DisplaySets field.
func (o *DisplaySetsToBeChanged) SetDisplaySets(v []DisplaySetType) {
	o.DisplaySets = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DisplaySetsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DisplaySetsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DisplaySetsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DisplaySetsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DisplaySetsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DisplaySetsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DisplaySetsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DisplaySetsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DisplaySetsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DisplaySetsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DisplaySets) {
		toSerialize["displaySets"] = o.DisplaySets
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDisplaySetsToBeChanged struct {
	value *DisplaySetsToBeChanged
	isSet bool
}

func (v NullableDisplaySetsToBeChanged) Get() *DisplaySetsToBeChanged {
	return v.value
}

func (v *NullableDisplaySetsToBeChanged) Set(val *DisplaySetsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableDisplaySetsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableDisplaySetsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDisplaySetsToBeChanged(val *DisplaySetsToBeChanged) *NullableDisplaySetsToBeChanged {
	return &NullableDisplaySetsToBeChanged{value: val, isSet: true}
}

func (v NullableDisplaySetsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDisplaySetsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


