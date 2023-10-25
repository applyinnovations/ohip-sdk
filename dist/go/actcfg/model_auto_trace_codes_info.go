/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
)

// checks if the AutoTraceCodesInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoTraceCodesInfo{}

// AutoTraceCodesInfo Request object for creating/changing Auto Trace Codes.
type AutoTraceCodesInfo struct {
	// Detailed information of configured Auto Trace Codes.
	AutoTraceCodesConfig []AutoTraceCodeDetailType `json:"autoTraceCodesConfig,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAutoTraceCodesInfo instantiates a new AutoTraceCodesInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoTraceCodesInfo() *AutoTraceCodesInfo {
	this := AutoTraceCodesInfo{}
	return &this
}

// NewAutoTraceCodesInfoWithDefaults instantiates a new AutoTraceCodesInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoTraceCodesInfoWithDefaults() *AutoTraceCodesInfo {
	this := AutoTraceCodesInfo{}
	return &this
}

// GetAutoTraceCodesConfig returns the AutoTraceCodesConfig field value if set, zero value otherwise.
func (o *AutoTraceCodesInfo) GetAutoTraceCodesConfig() []AutoTraceCodeDetailType {
	if o == nil || IsNil(o.AutoTraceCodesConfig) {
		var ret []AutoTraceCodeDetailType
		return ret
	}
	return o.AutoTraceCodesConfig
}

// GetAutoTraceCodesConfigOk returns a tuple with the AutoTraceCodesConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceCodesInfo) GetAutoTraceCodesConfigOk() ([]AutoTraceCodeDetailType, bool) {
	if o == nil || IsNil(o.AutoTraceCodesConfig) {
		return nil, false
	}
	return o.AutoTraceCodesConfig, true
}

// HasAutoTraceCodesConfig returns a boolean if a field has been set.
func (o *AutoTraceCodesInfo) HasAutoTraceCodesConfig() bool {
	if o != nil && !IsNil(o.AutoTraceCodesConfig) {
		return true
	}

	return false
}

// SetAutoTraceCodesConfig gets a reference to the given []AutoTraceCodeDetailType and assigns it to the AutoTraceCodesConfig field.
func (o *AutoTraceCodesInfo) SetAutoTraceCodesConfig(v []AutoTraceCodeDetailType) {
	o.AutoTraceCodesConfig = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AutoTraceCodesInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceCodesInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AutoTraceCodesInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AutoTraceCodesInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AutoTraceCodesInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoTraceCodesInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoTraceCodesConfig) {
		toSerialize["autoTraceCodesConfig"] = o.AutoTraceCodesConfig
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAutoTraceCodesInfo struct {
	value *AutoTraceCodesInfo
	isSet bool
}

func (v NullableAutoTraceCodesInfo) Get() *AutoTraceCodesInfo {
	return v.value
}

func (v *NullableAutoTraceCodesInfo) Set(val *AutoTraceCodesInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoTraceCodesInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoTraceCodesInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoTraceCodesInfo(val *AutoTraceCodesInfo) *NullableAutoTraceCodesInfo {
	return &NullableAutoTraceCodesInfo{value: val, isSet: true}
}

func (v NullableAutoTraceCodesInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoTraceCodesInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


