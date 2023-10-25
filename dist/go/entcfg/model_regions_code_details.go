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

// checks if the RegionsCodeDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegionsCodeDetails{}

// RegionsCodeDetails Response object for fetching Regions Code.
type RegionsCodeDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Regions Code.
	RegionsCode []RegionCodeType `json:"regionsCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRegionsCodeDetails instantiates a new RegionsCodeDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegionsCodeDetails() *RegionsCodeDetails {
	this := RegionsCodeDetails{}
	return &this
}

// NewRegionsCodeDetailsWithDefaults instantiates a new RegionsCodeDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegionsCodeDetailsWithDefaults() *RegionsCodeDetails {
	this := RegionsCodeDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RegionsCodeDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionsCodeDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RegionsCodeDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RegionsCodeDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRegionsCode returns the RegionsCode field value if set, zero value otherwise.
func (o *RegionsCodeDetails) GetRegionsCode() []RegionCodeType {
	if o == nil || IsNil(o.RegionsCode) {
		var ret []RegionCodeType
		return ret
	}
	return o.RegionsCode
}

// GetRegionsCodeOk returns a tuple with the RegionsCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionsCodeDetails) GetRegionsCodeOk() ([]RegionCodeType, bool) {
	if o == nil || IsNil(o.RegionsCode) {
		return nil, false
	}
	return o.RegionsCode, true
}

// HasRegionsCode returns a boolean if a field has been set.
func (o *RegionsCodeDetails) HasRegionsCode() bool {
	if o != nil && !IsNil(o.RegionsCode) {
		return true
	}

	return false
}

// SetRegionsCode gets a reference to the given []RegionCodeType and assigns it to the RegionsCode field.
func (o *RegionsCodeDetails) SetRegionsCode(v []RegionCodeType) {
	o.RegionsCode = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RegionsCodeDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionsCodeDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RegionsCodeDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RegionsCodeDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RegionsCodeDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegionsCodeDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RegionsCode) {
		toSerialize["regionsCode"] = o.RegionsCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRegionsCodeDetails struct {
	value *RegionsCodeDetails
	isSet bool
}

func (v NullableRegionsCodeDetails) Get() *RegionsCodeDetails {
	return v.value
}

func (v *NullableRegionsCodeDetails) Set(val *RegionsCodeDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRegionsCodeDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRegionsCodeDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegionsCodeDetails(val *RegionsCodeDetails) *NullableRegionsCodeDetails {
	return &NullableRegionsCodeDetails{value: val, isSet: true}
}

func (v NullableRegionsCodeDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegionsCodeDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


