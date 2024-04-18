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

// checks if the TemplateGuaranteeCodeToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateGuaranteeCodeToBeChanged{}

// TemplateGuaranteeCodeToBeChanged Request object that holds the details of template Guarantee Code to be changed.
type TemplateGuaranteeCodeToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateGuaranteeCode *GuaranteeConfigType `json:"templateGuaranteeCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateGuaranteeCodeToBeChanged instantiates a new TemplateGuaranteeCodeToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateGuaranteeCodeToBeChanged() *TemplateGuaranteeCodeToBeChanged {
	this := TemplateGuaranteeCodeToBeChanged{}
	return &this
}

// NewTemplateGuaranteeCodeToBeChangedWithDefaults instantiates a new TemplateGuaranteeCodeToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateGuaranteeCodeToBeChangedWithDefaults() *TemplateGuaranteeCodeToBeChanged {
	this := TemplateGuaranteeCodeToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateGuaranteeCodeToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateGuaranteeCodeToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateGuaranteeCodeToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateGuaranteeCodeToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateGuaranteeCode returns the TemplateGuaranteeCode field value if set, zero value otherwise.
func (o *TemplateGuaranteeCodeToBeChanged) GetTemplateGuaranteeCode() GuaranteeConfigType {
	if o == nil || IsNil(o.TemplateGuaranteeCode) {
		var ret GuaranteeConfigType
		return ret
	}
	return *o.TemplateGuaranteeCode
}

// GetTemplateGuaranteeCodeOk returns a tuple with the TemplateGuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateGuaranteeCodeToBeChanged) GetTemplateGuaranteeCodeOk() (*GuaranteeConfigType, bool) {
	if o == nil || IsNil(o.TemplateGuaranteeCode) {
		return nil, false
	}
	return o.TemplateGuaranteeCode, true
}

// HasTemplateGuaranteeCode returns a boolean if a field has been set.
func (o *TemplateGuaranteeCodeToBeChanged) HasTemplateGuaranteeCode() bool {
	if o != nil && !IsNil(o.TemplateGuaranteeCode) {
		return true
	}

	return false
}

// SetTemplateGuaranteeCode gets a reference to the given GuaranteeConfigType and assigns it to the TemplateGuaranteeCode field.
func (o *TemplateGuaranteeCodeToBeChanged) SetTemplateGuaranteeCode(v GuaranteeConfigType) {
	o.TemplateGuaranteeCode = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateGuaranteeCodeToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateGuaranteeCodeToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateGuaranteeCodeToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateGuaranteeCodeToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateGuaranteeCodeToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateGuaranteeCodeToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateGuaranteeCode) {
		toSerialize["templateGuaranteeCode"] = o.TemplateGuaranteeCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateGuaranteeCodeToBeChanged struct {
	value *TemplateGuaranteeCodeToBeChanged
	isSet bool
}

func (v NullableTemplateGuaranteeCodeToBeChanged) Get() *TemplateGuaranteeCodeToBeChanged {
	return v.value
}

func (v *NullableTemplateGuaranteeCodeToBeChanged) Set(val *TemplateGuaranteeCodeToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateGuaranteeCodeToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateGuaranteeCodeToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateGuaranteeCodeToBeChanged(val *TemplateGuaranteeCodeToBeChanged) *NullableTemplateGuaranteeCodeToBeChanged {
	return &NullableTemplateGuaranteeCodeToBeChanged{value: val, isSet: true}
}

func (v NullableTemplateGuaranteeCodeToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateGuaranteeCodeToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

