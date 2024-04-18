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

// checks if the TemplateMarketCodeCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateMarketCodeCriteria{}

// TemplateMarketCodeCriteria Request object that holds the details of template Market Code to be created.
type TemplateMarketCodeCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateMarketCode *TemplateMarketCodeType `json:"templateMarketCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateMarketCodeCriteria instantiates a new TemplateMarketCodeCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateMarketCodeCriteria() *TemplateMarketCodeCriteria {
	this := TemplateMarketCodeCriteria{}
	return &this
}

// NewTemplateMarketCodeCriteriaWithDefaults instantiates a new TemplateMarketCodeCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateMarketCodeCriteriaWithDefaults() *TemplateMarketCodeCriteria {
	this := TemplateMarketCodeCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateMarketCodeCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateMarketCodeCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateMarketCodeCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateMarketCode returns the TemplateMarketCode field value if set, zero value otherwise.
func (o *TemplateMarketCodeCriteria) GetTemplateMarketCode() TemplateMarketCodeType {
	if o == nil || IsNil(o.TemplateMarketCode) {
		var ret TemplateMarketCodeType
		return ret
	}
	return *o.TemplateMarketCode
}

// GetTemplateMarketCodeOk returns a tuple with the TemplateMarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeCriteria) GetTemplateMarketCodeOk() (*TemplateMarketCodeType, bool) {
	if o == nil || IsNil(o.TemplateMarketCode) {
		return nil, false
	}
	return o.TemplateMarketCode, true
}

// HasTemplateMarketCode returns a boolean if a field has been set.
func (o *TemplateMarketCodeCriteria) HasTemplateMarketCode() bool {
	if o != nil && !IsNil(o.TemplateMarketCode) {
		return true
	}

	return false
}

// SetTemplateMarketCode gets a reference to the given TemplateMarketCodeType and assigns it to the TemplateMarketCode field.
func (o *TemplateMarketCodeCriteria) SetTemplateMarketCode(v TemplateMarketCodeType) {
	o.TemplateMarketCode = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateMarketCodeCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateMarketCodeCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateMarketCodeCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateMarketCodeCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateMarketCodeCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateMarketCode) {
		toSerialize["templateMarketCode"] = o.TemplateMarketCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateMarketCodeCriteria struct {
	value *TemplateMarketCodeCriteria
	isSet bool
}

func (v NullableTemplateMarketCodeCriteria) Get() *TemplateMarketCodeCriteria {
	return v.value
}

func (v *NullableTemplateMarketCodeCriteria) Set(val *TemplateMarketCodeCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateMarketCodeCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateMarketCodeCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateMarketCodeCriteria(val *TemplateMarketCodeCriteria) *NullableTemplateMarketCodeCriteria {
	return &NullableTemplateMarketCodeCriteria{value: val, isSet: true}
}

func (v NullableTemplateMarketCodeCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateMarketCodeCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

