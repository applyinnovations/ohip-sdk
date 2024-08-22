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

// checks if the ScriptsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ScriptsCriteria{}

// ScriptsCriteria Request object for creating Scripts.
type ScriptsCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A Script associated to either Chain, CRO or Property and to a Language and/or Membership Type.
	Scripts []ScriptType `json:"scripts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewScriptsCriteria instantiates a new ScriptsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewScriptsCriteria() *ScriptsCriteria {
	this := ScriptsCriteria{}
	return &this
}

// NewScriptsCriteriaWithDefaults instantiates a new ScriptsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewScriptsCriteriaWithDefaults() *ScriptsCriteria {
	this := ScriptsCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ScriptsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ScriptsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ScriptsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ScriptsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetScripts returns the Scripts field value if set, zero value otherwise.
func (o *ScriptsCriteria) GetScripts() []ScriptType {
	if o == nil || IsNil(o.Scripts) {
		var ret []ScriptType
		return ret
	}
	return o.Scripts
}

// GetScriptsOk returns a tuple with the Scripts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ScriptsCriteria) GetScriptsOk() ([]ScriptType, bool) {
	if o == nil || IsNil(o.Scripts) {
		return nil, false
	}
	return o.Scripts, true
}

// HasScripts returns a boolean if a field has been set.
func (o *ScriptsCriteria) HasScripts() bool {
	if o != nil && !IsNil(o.Scripts) {
		return true
	}

	return false
}

// SetScripts gets a reference to the given []ScriptType and assigns it to the Scripts field.
func (o *ScriptsCriteria) SetScripts(v []ScriptType) {
	o.Scripts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ScriptsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ScriptsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ScriptsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ScriptsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ScriptsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ScriptsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Scripts) {
		toSerialize["scripts"] = o.Scripts
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableScriptsCriteria struct {
	value *ScriptsCriteria
	isSet bool
}

func (v NullableScriptsCriteria) Get() *ScriptsCriteria {
	return v.value
}

func (v *NullableScriptsCriteria) Set(val *ScriptsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableScriptsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableScriptsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableScriptsCriteria(val *ScriptsCriteria) *NullableScriptsCriteria {
	return &NullableScriptsCriteria{value: val, isSet: true}
}

func (v NullableScriptsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableScriptsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


