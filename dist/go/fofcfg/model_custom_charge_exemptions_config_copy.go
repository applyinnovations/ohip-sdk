/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CustomChargeExemptionsConfigCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeExemptionsConfigCopy{}

// CustomChargeExemptionsConfigCopy struct for CustomChargeExemptionsConfigCopy
type CustomChargeExemptionsConfigCopy struct {
	// List of the Custom Charge Exemptions to be copied.
	CustomChargeExemptionsConfigCopy []CopyCustomChargeExemptionConfigType `json:"customChargeExemptionsConfigCopy,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCustomChargeExemptionsConfigCopy instantiates a new CustomChargeExemptionsConfigCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeExemptionsConfigCopy() *CustomChargeExemptionsConfigCopy {
	this := CustomChargeExemptionsConfigCopy{}
	return &this
}

// NewCustomChargeExemptionsConfigCopyWithDefaults instantiates a new CustomChargeExemptionsConfigCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeExemptionsConfigCopyWithDefaults() *CustomChargeExemptionsConfigCopy {
	this := CustomChargeExemptionsConfigCopy{}
	return &this
}

// GetCustomChargeExemptionsConfigCopy returns the CustomChargeExemptionsConfigCopy field value if set, zero value otherwise.
func (o *CustomChargeExemptionsConfigCopy) GetCustomChargeExemptionsConfigCopy() []CopyCustomChargeExemptionConfigType {
	if o == nil || IsNil(o.CustomChargeExemptionsConfigCopy) {
		var ret []CopyCustomChargeExemptionConfigType
		return ret
	}
	return o.CustomChargeExemptionsConfigCopy
}

// GetCustomChargeExemptionsConfigCopyOk returns a tuple with the CustomChargeExemptionsConfigCopy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionsConfigCopy) GetCustomChargeExemptionsConfigCopyOk() ([]CopyCustomChargeExemptionConfigType, bool) {
	if o == nil || IsNil(o.CustomChargeExemptionsConfigCopy) {
		return nil, false
	}
	return o.CustomChargeExemptionsConfigCopy, true
}

// HasCustomChargeExemptionsConfigCopy returns a boolean if a field has been set.
func (o *CustomChargeExemptionsConfigCopy) HasCustomChargeExemptionsConfigCopy() bool {
	if o != nil && !IsNil(o.CustomChargeExemptionsConfigCopy) {
		return true
	}

	return false
}

// SetCustomChargeExemptionsConfigCopy gets a reference to the given []CopyCustomChargeExemptionConfigType and assigns it to the CustomChargeExemptionsConfigCopy field.
func (o *CustomChargeExemptionsConfigCopy) SetCustomChargeExemptionsConfigCopy(v []CopyCustomChargeExemptionConfigType) {
	o.CustomChargeExemptionsConfigCopy = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CustomChargeExemptionsConfigCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionsConfigCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CustomChargeExemptionsConfigCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CustomChargeExemptionsConfigCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CustomChargeExemptionsConfigCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionsConfigCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CustomChargeExemptionsConfigCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CustomChargeExemptionsConfigCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CustomChargeExemptionsConfigCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeExemptionsConfigCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomChargeExemptionsConfigCopy) {
		toSerialize["customChargeExemptionsConfigCopy"] = o.CustomChargeExemptionsConfigCopy
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCustomChargeExemptionsConfigCopy struct {
	value *CustomChargeExemptionsConfigCopy
	isSet bool
}

func (v NullableCustomChargeExemptionsConfigCopy) Get() *CustomChargeExemptionsConfigCopy {
	return v.value
}

func (v *NullableCustomChargeExemptionsConfigCopy) Set(val *CustomChargeExemptionsConfigCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeExemptionsConfigCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeExemptionsConfigCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeExemptionsConfigCopy(val *CustomChargeExemptionsConfigCopy) *NullableCustomChargeExemptionsConfigCopy {
	return &NullableCustomChargeExemptionsConfigCopy{value: val, isSet: true}
}

func (v NullableCustomChargeExemptionsConfigCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeExemptionsConfigCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


