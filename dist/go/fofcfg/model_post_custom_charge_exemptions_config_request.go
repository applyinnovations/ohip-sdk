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

// checks if the PostCustomChargeExemptionsConfigRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCustomChargeExemptionsConfigRequest{}

// PostCustomChargeExemptionsConfigRequest struct for PostCustomChargeExemptionsConfigRequest
type PostCustomChargeExemptionsConfigRequest struct {
	// New one or more Custom Charge Exemptions to be created.
	CustomChargeExemptionsConfig [][]CustomChargeExemptionConfigType `json:"customChargeExemptionsConfig,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCustomChargeExemptionsConfigRequest instantiates a new PostCustomChargeExemptionsConfigRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCustomChargeExemptionsConfigRequest() *PostCustomChargeExemptionsConfigRequest {
	this := PostCustomChargeExemptionsConfigRequest{}
	return &this
}

// NewPostCustomChargeExemptionsConfigRequestWithDefaults instantiates a new PostCustomChargeExemptionsConfigRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCustomChargeExemptionsConfigRequestWithDefaults() *PostCustomChargeExemptionsConfigRequest {
	this := PostCustomChargeExemptionsConfigRequest{}
	return &this
}

// GetCustomChargeExemptionsConfig returns the CustomChargeExemptionsConfig field value if set, zero value otherwise.
func (o *PostCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfig() [][]CustomChargeExemptionConfigType {
	if o == nil || IsNil(o.CustomChargeExemptionsConfig) {
		var ret [][]CustomChargeExemptionConfigType
		return ret
	}
	return o.CustomChargeExemptionsConfig
}

// GetCustomChargeExemptionsConfigOk returns a tuple with the CustomChargeExemptionsConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfigOk() ([][]CustomChargeExemptionConfigType, bool) {
	if o == nil || IsNil(o.CustomChargeExemptionsConfig) {
		return nil, false
	}
	return o.CustomChargeExemptionsConfig, true
}

// HasCustomChargeExemptionsConfig returns a boolean if a field has been set.
func (o *PostCustomChargeExemptionsConfigRequest) HasCustomChargeExemptionsConfig() bool {
	if o != nil && !IsNil(o.CustomChargeExemptionsConfig) {
		return true
	}

	return false
}

// SetCustomChargeExemptionsConfig gets a reference to the given [][]CustomChargeExemptionConfigType and assigns it to the CustomChargeExemptionsConfig field.
func (o *PostCustomChargeExemptionsConfigRequest) SetCustomChargeExemptionsConfig(v [][]CustomChargeExemptionConfigType) {
	o.CustomChargeExemptionsConfig = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCustomChargeExemptionsConfigRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCustomChargeExemptionsConfigRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCustomChargeExemptionsConfigRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCustomChargeExemptionsConfigRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCustomChargeExemptionsConfigRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCustomChargeExemptionsConfigRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomChargeExemptionsConfig) {
		toSerialize["customChargeExemptionsConfig"] = o.CustomChargeExemptionsConfig
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCustomChargeExemptionsConfigRequest struct {
	value *PostCustomChargeExemptionsConfigRequest
	isSet bool
}

func (v NullablePostCustomChargeExemptionsConfigRequest) Get() *PostCustomChargeExemptionsConfigRequest {
	return v.value
}

func (v *NullablePostCustomChargeExemptionsConfigRequest) Set(val *PostCustomChargeExemptionsConfigRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCustomChargeExemptionsConfigRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCustomChargeExemptionsConfigRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCustomChargeExemptionsConfigRequest(val *PostCustomChargeExemptionsConfigRequest) *NullablePostCustomChargeExemptionsConfigRequest {
	return &NullablePostCustomChargeExemptionsConfigRequest{value: val, isSet: true}
}

func (v NullablePostCustomChargeExemptionsConfigRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCustomChargeExemptionsConfigRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


