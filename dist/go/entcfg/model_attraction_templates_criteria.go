/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the AttractionTemplatesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AttractionTemplatesCriteria{}

// AttractionTemplatesCriteria Request object for creating a new attraction code template.
type AttractionTemplatesCriteria struct {
	// Collection of attraction templates.
	AttractionTemplates []AttractionTemplateType `json:"attractionTemplates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAttractionTemplatesCriteria instantiates a new AttractionTemplatesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAttractionTemplatesCriteria() *AttractionTemplatesCriteria {
	this := AttractionTemplatesCriteria{}
	return &this
}

// NewAttractionTemplatesCriteriaWithDefaults instantiates a new AttractionTemplatesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAttractionTemplatesCriteriaWithDefaults() *AttractionTemplatesCriteria {
	this := AttractionTemplatesCriteria{}
	return &this
}

// GetAttractionTemplates returns the AttractionTemplates field value if set, zero value otherwise.
func (o *AttractionTemplatesCriteria) GetAttractionTemplates() []AttractionTemplateType {
	if o == nil || IsNil(o.AttractionTemplates) {
		var ret []AttractionTemplateType
		return ret
	}
	return o.AttractionTemplates
}

// GetAttractionTemplatesOk returns a tuple with the AttractionTemplates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionTemplatesCriteria) GetAttractionTemplatesOk() ([]AttractionTemplateType, bool) {
	if o == nil || IsNil(o.AttractionTemplates) {
		return nil, false
	}
	return o.AttractionTemplates, true
}

// HasAttractionTemplates returns a boolean if a field has been set.
func (o *AttractionTemplatesCriteria) HasAttractionTemplates() bool {
	if o != nil && !IsNil(o.AttractionTemplates) {
		return true
	}

	return false
}

// SetAttractionTemplates gets a reference to the given []AttractionTemplateType and assigns it to the AttractionTemplates field.
func (o *AttractionTemplatesCriteria) SetAttractionTemplates(v []AttractionTemplateType) {
	o.AttractionTemplates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AttractionTemplatesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionTemplatesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AttractionTemplatesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AttractionTemplatesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AttractionTemplatesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttractionTemplatesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AttractionTemplatesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AttractionTemplatesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AttractionTemplatesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AttractionTemplatesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AttractionTemplates) {
		toSerialize["attractionTemplates"] = o.AttractionTemplates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAttractionTemplatesCriteria struct {
	value *AttractionTemplatesCriteria
	isSet bool
}

func (v NullableAttractionTemplatesCriteria) Get() *AttractionTemplatesCriteria {
	return v.value
}

func (v *NullableAttractionTemplatesCriteria) Set(val *AttractionTemplatesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableAttractionTemplatesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableAttractionTemplatesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAttractionTemplatesCriteria(val *AttractionTemplatesCriteria) *NullableAttractionTemplatesCriteria {
	return &NullableAttractionTemplatesCriteria{value: val, isSet: true}
}

func (v NullableAttractionTemplatesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAttractionTemplatesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

