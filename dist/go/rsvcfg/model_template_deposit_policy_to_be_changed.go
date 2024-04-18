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

// checks if the TemplateDepositPolicyToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateDepositPolicyToBeChanged{}

// TemplateDepositPolicyToBeChanged Request object that holds the details of template Deposit Policy to be changed.
type TemplateDepositPolicyToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateDepositPolicy *ConfigDepositPolicyType `json:"templateDepositPolicy,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateDepositPolicyToBeChanged instantiates a new TemplateDepositPolicyToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateDepositPolicyToBeChanged() *TemplateDepositPolicyToBeChanged {
	this := TemplateDepositPolicyToBeChanged{}
	return &this
}

// NewTemplateDepositPolicyToBeChangedWithDefaults instantiates a new TemplateDepositPolicyToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateDepositPolicyToBeChangedWithDefaults() *TemplateDepositPolicyToBeChanged {
	this := TemplateDepositPolicyToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateDepositPolicyToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDepositPolicyToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateDepositPolicyToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateDepositPolicyToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateDepositPolicy returns the TemplateDepositPolicy field value if set, zero value otherwise.
func (o *TemplateDepositPolicyToBeChanged) GetTemplateDepositPolicy() ConfigDepositPolicyType {
	if o == nil || IsNil(o.TemplateDepositPolicy) {
		var ret ConfigDepositPolicyType
		return ret
	}
	return *o.TemplateDepositPolicy
}

// GetTemplateDepositPolicyOk returns a tuple with the TemplateDepositPolicy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDepositPolicyToBeChanged) GetTemplateDepositPolicyOk() (*ConfigDepositPolicyType, bool) {
	if o == nil || IsNil(o.TemplateDepositPolicy) {
		return nil, false
	}
	return o.TemplateDepositPolicy, true
}

// HasTemplateDepositPolicy returns a boolean if a field has been set.
func (o *TemplateDepositPolicyToBeChanged) HasTemplateDepositPolicy() bool {
	if o != nil && !IsNil(o.TemplateDepositPolicy) {
		return true
	}

	return false
}

// SetTemplateDepositPolicy gets a reference to the given ConfigDepositPolicyType and assigns it to the TemplateDepositPolicy field.
func (o *TemplateDepositPolicyToBeChanged) SetTemplateDepositPolicy(v ConfigDepositPolicyType) {
	o.TemplateDepositPolicy = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateDepositPolicyToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateDepositPolicyToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateDepositPolicyToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateDepositPolicyToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateDepositPolicyToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateDepositPolicyToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateDepositPolicy) {
		toSerialize["templateDepositPolicy"] = o.TemplateDepositPolicy
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateDepositPolicyToBeChanged struct {
	value *TemplateDepositPolicyToBeChanged
	isSet bool
}

func (v NullableTemplateDepositPolicyToBeChanged) Get() *TemplateDepositPolicyToBeChanged {
	return v.value
}

func (v *NullableTemplateDepositPolicyToBeChanged) Set(val *TemplateDepositPolicyToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateDepositPolicyToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateDepositPolicyToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateDepositPolicyToBeChanged(val *TemplateDepositPolicyToBeChanged) *NullableTemplateDepositPolicyToBeChanged {
	return &NullableTemplateDepositPolicyToBeChanged{value: val, isSet: true}
}

func (v NullableTemplateDepositPolicyToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateDepositPolicyToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

