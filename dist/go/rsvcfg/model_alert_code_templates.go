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

// checks if the AlertCodeTemplates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AlertCodeTemplates{}

// AlertCodeTemplates Response object for information regarding alert templates.
type AlertCodeTemplates struct {
	// Collection of alert code templates.
	AlertCodeTemplates []AlertTemplateType `json:"alertCodeTemplates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAlertCodeTemplates instantiates a new AlertCodeTemplates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAlertCodeTemplates() *AlertCodeTemplates {
	this := AlertCodeTemplates{}
	return &this
}

// NewAlertCodeTemplatesWithDefaults instantiates a new AlertCodeTemplates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAlertCodeTemplatesWithDefaults() *AlertCodeTemplates {
	this := AlertCodeTemplates{}
	return &this
}

// GetAlertCodeTemplates returns the AlertCodeTemplates field value if set, zero value otherwise.
func (o *AlertCodeTemplates) GetAlertCodeTemplates() []AlertTemplateType {
	if o == nil || IsNil(o.AlertCodeTemplates) {
		var ret []AlertTemplateType
		return ret
	}
	return o.AlertCodeTemplates
}

// GetAlertCodeTemplatesOk returns a tuple with the AlertCodeTemplates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertCodeTemplates) GetAlertCodeTemplatesOk() ([]AlertTemplateType, bool) {
	if o == nil || IsNil(o.AlertCodeTemplates) {
		return nil, false
	}
	return o.AlertCodeTemplates, true
}

// HasAlertCodeTemplates returns a boolean if a field has been set.
func (o *AlertCodeTemplates) HasAlertCodeTemplates() bool {
	if o != nil && !IsNil(o.AlertCodeTemplates) {
		return true
	}

	return false
}

// SetAlertCodeTemplates gets a reference to the given []AlertTemplateType and assigns it to the AlertCodeTemplates field.
func (o *AlertCodeTemplates) SetAlertCodeTemplates(v []AlertTemplateType) {
	o.AlertCodeTemplates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AlertCodeTemplates) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertCodeTemplates) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AlertCodeTemplates) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AlertCodeTemplates) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AlertCodeTemplates) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertCodeTemplates) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AlertCodeTemplates) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AlertCodeTemplates) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AlertCodeTemplates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AlertCodeTemplates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlertCodeTemplates) {
		toSerialize["alertCodeTemplates"] = o.AlertCodeTemplates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAlertCodeTemplates struct {
	value *AlertCodeTemplates
	isSet bool
}

func (v NullableAlertCodeTemplates) Get() *AlertCodeTemplates {
	return v.value
}

func (v *NullableAlertCodeTemplates) Set(val *AlertCodeTemplates) {
	v.value = val
	v.isSet = true
}

func (v NullableAlertCodeTemplates) IsSet() bool {
	return v.isSet
}

func (v *NullableAlertCodeTemplates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAlertCodeTemplates(val *AlertCodeTemplates) *NullableAlertCodeTemplates {
	return &NullableAlertCodeTemplates{value: val, isSet: true}
}

func (v NullableAlertCodeTemplates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAlertCodeTemplates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


