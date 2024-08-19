/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the TemplateSourceCodeCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateSourceCodeCriteria{}

// TemplateSourceCodeCriteria Request object that holds the details of template Source Code to be created.
type TemplateSourceCodeCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateSourceCode *TemplateSourceCodeType `json:"templateSourceCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateSourceCodeCriteria instantiates a new TemplateSourceCodeCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateSourceCodeCriteria() *TemplateSourceCodeCriteria {
	this := TemplateSourceCodeCriteria{}
	return &this
}

// NewTemplateSourceCodeCriteriaWithDefaults instantiates a new TemplateSourceCodeCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateSourceCodeCriteriaWithDefaults() *TemplateSourceCodeCriteria {
	this := TemplateSourceCodeCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateSourceCodeCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceCodeCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateSourceCodeCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateSourceCodeCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateSourceCode returns the TemplateSourceCode field value if set, zero value otherwise.
func (o *TemplateSourceCodeCriteria) GetTemplateSourceCode() TemplateSourceCodeType {
	if o == nil || IsNil(o.TemplateSourceCode) {
		var ret TemplateSourceCodeType
		return ret
	}
	return *o.TemplateSourceCode
}

// GetTemplateSourceCodeOk returns a tuple with the TemplateSourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceCodeCriteria) GetTemplateSourceCodeOk() (*TemplateSourceCodeType, bool) {
	if o == nil || IsNil(o.TemplateSourceCode) {
		return nil, false
	}
	return o.TemplateSourceCode, true
}

// HasTemplateSourceCode returns a boolean if a field has been set.
func (o *TemplateSourceCodeCriteria) HasTemplateSourceCode() bool {
	if o != nil && !IsNil(o.TemplateSourceCode) {
		return true
	}

	return false
}

// SetTemplateSourceCode gets a reference to the given TemplateSourceCodeType and assigns it to the TemplateSourceCode field.
func (o *TemplateSourceCodeCriteria) SetTemplateSourceCode(v TemplateSourceCodeType) {
	o.TemplateSourceCode = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateSourceCodeCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateSourceCodeCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateSourceCodeCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateSourceCodeCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateSourceCodeCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateSourceCodeCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateSourceCode) {
		toSerialize["templateSourceCode"] = o.TemplateSourceCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateSourceCodeCriteria struct {
	value *TemplateSourceCodeCriteria
	isSet bool
}

func (v NullableTemplateSourceCodeCriteria) Get() *TemplateSourceCodeCriteria {
	return v.value
}

func (v *NullableTemplateSourceCodeCriteria) Set(val *TemplateSourceCodeCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateSourceCodeCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateSourceCodeCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateSourceCodeCriteria(val *TemplateSourceCodeCriteria) *NullableTemplateSourceCodeCriteria {
	return &NullableTemplateSourceCodeCriteria{value: val, isSet: true}
}

func (v NullableTemplateSourceCodeCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateSourceCodeCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


