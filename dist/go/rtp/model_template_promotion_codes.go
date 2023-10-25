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

// checks if the TemplatePromotionCodes type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplatePromotionCodes{}

// TemplatePromotionCodes struct for TemplatePromotionCodes
type TemplatePromotionCodes struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A template promotion.
	TemplatePromotionCodes []TemplatePromotionCodeType `json:"templatePromotionCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplatePromotionCodes instantiates a new TemplatePromotionCodes object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplatePromotionCodes() *TemplatePromotionCodes {
	this := TemplatePromotionCodes{}
	return &this
}

// NewTemplatePromotionCodesWithDefaults instantiates a new TemplatePromotionCodes object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplatePromotionCodesWithDefaults() *TemplatePromotionCodes {
	this := TemplatePromotionCodes{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplatePromotionCodes) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePromotionCodes) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplatePromotionCodes) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplatePromotionCodes) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplatePromotionCodes returns the TemplatePromotionCodes field value if set, zero value otherwise.
func (o *TemplatePromotionCodes) GetTemplatePromotionCodes() []TemplatePromotionCodeType {
	if o == nil || IsNil(o.TemplatePromotionCodes) {
		var ret []TemplatePromotionCodeType
		return ret
	}
	return o.TemplatePromotionCodes
}

// GetTemplatePromotionCodesOk returns a tuple with the TemplatePromotionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePromotionCodes) GetTemplatePromotionCodesOk() ([]TemplatePromotionCodeType, bool) {
	if o == nil || IsNil(o.TemplatePromotionCodes) {
		return nil, false
	}
	return o.TemplatePromotionCodes, true
}

// HasTemplatePromotionCodes returns a boolean if a field has been set.
func (o *TemplatePromotionCodes) HasTemplatePromotionCodes() bool {
	if o != nil && !IsNil(o.TemplatePromotionCodes) {
		return true
	}

	return false
}

// SetTemplatePromotionCodes gets a reference to the given []TemplatePromotionCodeType and assigns it to the TemplatePromotionCodes field.
func (o *TemplatePromotionCodes) SetTemplatePromotionCodes(v []TemplatePromotionCodeType) {
	o.TemplatePromotionCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplatePromotionCodes) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplatePromotionCodes) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplatePromotionCodes) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplatePromotionCodes) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplatePromotionCodes) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplatePromotionCodes) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplatePromotionCodes) {
		toSerialize["templatePromotionCodes"] = o.TemplatePromotionCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplatePromotionCodes struct {
	value *TemplatePromotionCodes
	isSet bool
}

func (v NullableTemplatePromotionCodes) Get() *TemplatePromotionCodes {
	return v.value
}

func (v *NullableTemplatePromotionCodes) Set(val *TemplatePromotionCodes) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplatePromotionCodes) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplatePromotionCodes) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplatePromotionCodes(val *TemplatePromotionCodes) *NullableTemplatePromotionCodes {
	return &NullableTemplatePromotionCodes{value: val, isSet: true}
}

func (v NullableTemplatePromotionCodes) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplatePromotionCodes) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


