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

// checks if the OperaVersion type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OperaVersion{}

// OperaVersion Response for Ping operation.
type OperaVersion struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Current Opera Version Number
	OperaVersion *string `json:"operaVersion,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewOperaVersion instantiates a new OperaVersion object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOperaVersion() *OperaVersion {
	this := OperaVersion{}
	return &this
}

// NewOperaVersionWithDefaults instantiates a new OperaVersion object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOperaVersionWithDefaults() *OperaVersion {
	this := OperaVersion{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *OperaVersion) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OperaVersion) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *OperaVersion) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *OperaVersion) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOperaVersion returns the OperaVersion field value if set, zero value otherwise.
func (o *OperaVersion) GetOperaVersion() string {
	if o == nil || IsNil(o.OperaVersion) {
		var ret string
		return ret
	}
	return *o.OperaVersion
}

// GetOperaVersionOk returns a tuple with the OperaVersion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OperaVersion) GetOperaVersionOk() (*string, bool) {
	if o == nil || IsNil(o.OperaVersion) {
		return nil, false
	}
	return o.OperaVersion, true
}

// HasOperaVersion returns a boolean if a field has been set.
func (o *OperaVersion) HasOperaVersion() bool {
	if o != nil && !IsNil(o.OperaVersion) {
		return true
	}

	return false
}

// SetOperaVersion gets a reference to the given string and assigns it to the OperaVersion field.
func (o *OperaVersion) SetOperaVersion(v string) {
	o.OperaVersion = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *OperaVersion) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OperaVersion) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *OperaVersion) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *OperaVersion) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o OperaVersion) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OperaVersion) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.OperaVersion) {
		toSerialize["operaVersion"] = o.OperaVersion
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableOperaVersion struct {
	value *OperaVersion
	isSet bool
}

func (v NullableOperaVersion) Get() *OperaVersion {
	return v.value
}

func (v *NullableOperaVersion) Set(val *OperaVersion) {
	v.value = val
	v.isSet = true
}

func (v NullableOperaVersion) IsSet() bool {
	return v.isSet
}

func (v *NullableOperaVersion) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOperaVersion(val *OperaVersion) *NullableOperaVersion {
	return &NullableOperaVersion{value: val, isSet: true}
}

func (v NullableOperaVersion) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOperaVersion) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


