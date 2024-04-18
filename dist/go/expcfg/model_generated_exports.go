/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the GeneratedExports type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GeneratedExports{}

// GeneratedExports Response object including a list of generated exports.
type GeneratedExports struct {
	GeneratedExports *GeneratedExportListType `json:"generatedExports,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGeneratedExports instantiates a new GeneratedExports object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGeneratedExports() *GeneratedExports {
	this := GeneratedExports{}
	return &this
}

// NewGeneratedExportsWithDefaults instantiates a new GeneratedExports object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGeneratedExportsWithDefaults() *GeneratedExports {
	this := GeneratedExports{}
	return &this
}

// GetGeneratedExports returns the GeneratedExports field value if set, zero value otherwise.
func (o *GeneratedExports) GetGeneratedExports() GeneratedExportListType {
	if o == nil || IsNil(o.GeneratedExports) {
		var ret GeneratedExportListType
		return ret
	}
	return *o.GeneratedExports
}

// GetGeneratedExportsOk returns a tuple with the GeneratedExports field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneratedExports) GetGeneratedExportsOk() (*GeneratedExportListType, bool) {
	if o == nil || IsNil(o.GeneratedExports) {
		return nil, false
	}
	return o.GeneratedExports, true
}

// HasGeneratedExports returns a boolean if a field has been set.
func (o *GeneratedExports) HasGeneratedExports() bool {
	if o != nil && !IsNil(o.GeneratedExports) {
		return true
	}

	return false
}

// SetGeneratedExports gets a reference to the given GeneratedExportListType and assigns it to the GeneratedExports field.
func (o *GeneratedExports) SetGeneratedExports(v GeneratedExportListType) {
	o.GeneratedExports = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GeneratedExports) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneratedExports) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GeneratedExports) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GeneratedExports) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GeneratedExports) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneratedExports) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GeneratedExports) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GeneratedExports) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GeneratedExports) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GeneratedExports) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GeneratedExports) {
		toSerialize["generatedExports"] = o.GeneratedExports
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGeneratedExports struct {
	value *GeneratedExports
	isSet bool
}

func (v NullableGeneratedExports) Get() *GeneratedExports {
	return v.value
}

func (v *NullableGeneratedExports) Set(val *GeneratedExports) {
	v.value = val
	v.isSet = true
}

func (v NullableGeneratedExports) IsSet() bool {
	return v.isSet
}

func (v *NullableGeneratedExports) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGeneratedExports(val *GeneratedExports) *NullableGeneratedExports {
	return &NullableGeneratedExports{value: val, isSet: true}
}

func (v NullableGeneratedExports) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGeneratedExports) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

