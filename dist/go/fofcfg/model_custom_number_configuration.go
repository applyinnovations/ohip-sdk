/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CustomNumberConfiguration type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomNumberConfiguration{}

// CustomNumberConfiguration Request object to create custom number configuration.
type CustomNumberConfiguration struct {
	CustomNumberConfiguration *CustomNumberConfigurationType `json:"customNumberConfiguration,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCustomNumberConfiguration instantiates a new CustomNumberConfiguration object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomNumberConfiguration() *CustomNumberConfiguration {
	this := CustomNumberConfiguration{}
	return &this
}

// NewCustomNumberConfigurationWithDefaults instantiates a new CustomNumberConfiguration object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomNumberConfigurationWithDefaults() *CustomNumberConfiguration {
	this := CustomNumberConfiguration{}
	return &this
}

// GetCustomNumberConfiguration returns the CustomNumberConfiguration field value if set, zero value otherwise.
func (o *CustomNumberConfiguration) GetCustomNumberConfiguration() CustomNumberConfigurationType {
	if o == nil || IsNil(o.CustomNumberConfiguration) {
		var ret CustomNumberConfigurationType
		return ret
	}
	return *o.CustomNumberConfiguration
}

// GetCustomNumberConfigurationOk returns a tuple with the CustomNumberConfiguration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberConfiguration) GetCustomNumberConfigurationOk() (*CustomNumberConfigurationType, bool) {
	if o == nil || IsNil(o.CustomNumberConfiguration) {
		return nil, false
	}
	return o.CustomNumberConfiguration, true
}

// HasCustomNumberConfiguration returns a boolean if a field has been set.
func (o *CustomNumberConfiguration) HasCustomNumberConfiguration() bool {
	if o != nil && !IsNil(o.CustomNumberConfiguration) {
		return true
	}

	return false
}

// SetCustomNumberConfiguration gets a reference to the given CustomNumberConfigurationType and assigns it to the CustomNumberConfiguration field.
func (o *CustomNumberConfiguration) SetCustomNumberConfiguration(v CustomNumberConfigurationType) {
	o.CustomNumberConfiguration = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CustomNumberConfiguration) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberConfiguration) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CustomNumberConfiguration) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CustomNumberConfiguration) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CustomNumberConfiguration) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomNumberConfiguration) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CustomNumberConfiguration) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CustomNumberConfiguration) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CustomNumberConfiguration) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomNumberConfiguration) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomNumberConfiguration) {
		toSerialize["customNumberConfiguration"] = o.CustomNumberConfiguration
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCustomNumberConfiguration struct {
	value *CustomNumberConfiguration
	isSet bool
}

func (v NullableCustomNumberConfiguration) Get() *CustomNumberConfiguration {
	return v.value
}

func (v *NullableCustomNumberConfiguration) Set(val *CustomNumberConfiguration) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomNumberConfiguration) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomNumberConfiguration) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomNumberConfiguration(val *CustomNumberConfiguration) *NullableCustomNumberConfiguration {
	return &NullableCustomNumberConfiguration{value: val, isSet: true}
}

func (v NullableCustomNumberConfiguration) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomNumberConfiguration) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


