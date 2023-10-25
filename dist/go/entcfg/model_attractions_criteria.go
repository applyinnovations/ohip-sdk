/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the AttractionsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AttractionsCriteria{}

// AttractionsCriteria Request object for creating a new group of attractions.
type AttractionsCriteria struct {
	// Collection of hotel level alert codes with attached alert types.
	Attractions []AttractionCodeType `json:"attractions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAttractionsCriteria instantiates a new AttractionsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAttractionsCriteria() *AttractionsCriteria {
	this := AttractionsCriteria{}
	return &this
}

// NewAttractionsCriteriaWithDefaults instantiates a new AttractionsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAttractionsCriteriaWithDefaults() *AttractionsCriteria {
	this := AttractionsCriteria{}
	return &this
}

// GetAttractions returns the Attractions field value if set, zero value otherwise.
func (o *AttractionsCriteria) GetAttractions() []AttractionCodeType {
	if o == nil || IsNil(o.Attractions) {
		var ret []AttractionCodeType
		return ret
	}
	return o.Attractions
}

// GetAttractionsOk returns a tuple with the Attractions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionsCriteria) GetAttractionsOk() ([]AttractionCodeType, bool) {
	if o == nil || IsNil(o.Attractions) {
		return nil, false
	}
	return o.Attractions, true
}

// HasAttractions returns a boolean if a field has been set.
func (o *AttractionsCriteria) HasAttractions() bool {
	if o != nil && !IsNil(o.Attractions) {
		return true
	}

	return false
}

// SetAttractions gets a reference to the given []AttractionCodeType and assigns it to the Attractions field.
func (o *AttractionsCriteria) SetAttractions(v []AttractionCodeType) {
	o.Attractions = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AttractionsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AttractionsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AttractionsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AttractionsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AttractionsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AttractionsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AttractionsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AttractionsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attractions) {
		toSerialize["attractions"] = o.Attractions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAttractionsCriteria struct {
	value *AttractionsCriteria
	isSet bool
}

func (v NullableAttractionsCriteria) Get() *AttractionsCriteria {
	return v.value
}

func (v *NullableAttractionsCriteria) Set(val *AttractionsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableAttractionsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableAttractionsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAttractionsCriteria(val *AttractionsCriteria) *NullableAttractionsCriteria {
	return &NullableAttractionsCriteria{value: val, isSet: true}
}

func (v NullableAttractionsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAttractionsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


