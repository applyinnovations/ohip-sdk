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

// checks if the CopyActivityConfigCriteriaTypeCopyActivityConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyActivityConfigCriteriaTypeCopyActivityConfig{}

// CopyActivityConfigCriteriaTypeCopyActivityConfig The hotel code where the activity type was created.
type CopyActivityConfigCriteriaTypeCopyActivityConfig struct {
	ActivityCodeList []string `json:"activityCodeList,omitempty"`
	// The hotel code where the activity type was created.
	SourceHotelCode *string `json:"sourceHotelCode,omitempty"`
	TargetHotelCode []string `json:"targetHotelCode,omitempty"`
}

// NewCopyActivityConfigCriteriaTypeCopyActivityConfig instantiates a new CopyActivityConfigCriteriaTypeCopyActivityConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyActivityConfigCriteriaTypeCopyActivityConfig() *CopyActivityConfigCriteriaTypeCopyActivityConfig {
	this := CopyActivityConfigCriteriaTypeCopyActivityConfig{}
	return &this
}

// NewCopyActivityConfigCriteriaTypeCopyActivityConfigWithDefaults instantiates a new CopyActivityConfigCriteriaTypeCopyActivityConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyActivityConfigCriteriaTypeCopyActivityConfigWithDefaults() *CopyActivityConfigCriteriaTypeCopyActivityConfig {
	this := CopyActivityConfigCriteriaTypeCopyActivityConfig{}
	return &this
}

// GetActivityCodeList returns the ActivityCodeList field value if set, zero value otherwise.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetActivityCodeList() []string {
	if o == nil || IsNil(o.ActivityCodeList) {
		var ret []string
		return ret
	}
	return o.ActivityCodeList
}

// GetActivityCodeListOk returns a tuple with the ActivityCodeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetActivityCodeListOk() ([]string, bool) {
	if o == nil || IsNil(o.ActivityCodeList) {
		return nil, false
	}
	return o.ActivityCodeList, true
}

// HasActivityCodeList returns a boolean if a field has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) HasActivityCodeList() bool {
	if o != nil && !IsNil(o.ActivityCodeList) {
		return true
	}

	return false
}

// SetActivityCodeList gets a reference to the given []string and assigns it to the ActivityCodeList field.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) SetActivityCodeList(v []string) {
	o.ActivityCodeList = v
}

// GetSourceHotelCode returns the SourceHotelCode field value if set, zero value otherwise.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetSourceHotelCode() string {
	if o == nil || IsNil(o.SourceHotelCode) {
		var ret string
		return ret
	}
	return *o.SourceHotelCode
}

// GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetSourceHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceHotelCode) {
		return nil, false
	}
	return o.SourceHotelCode, true
}

// HasSourceHotelCode returns a boolean if a field has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) HasSourceHotelCode() bool {
	if o != nil && !IsNil(o.SourceHotelCode) {
		return true
	}

	return false
}

// SetSourceHotelCode gets a reference to the given string and assigns it to the SourceHotelCode field.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) SetSourceHotelCode(v string) {
	o.SourceHotelCode = &v
}

// GetTargetHotelCode returns the TargetHotelCode field value if set, zero value otherwise.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetTargetHotelCode() []string {
	if o == nil || IsNil(o.TargetHotelCode) {
		var ret []string
		return ret
	}
	return o.TargetHotelCode
}

// GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) GetTargetHotelCodeOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCode) {
		return nil, false
	}
	return o.TargetHotelCode, true
}

// HasTargetHotelCode returns a boolean if a field has been set.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) HasTargetHotelCode() bool {
	if o != nil && !IsNil(o.TargetHotelCode) {
		return true
	}

	return false
}

// SetTargetHotelCode gets a reference to the given []string and assigns it to the TargetHotelCode field.
func (o *CopyActivityConfigCriteriaTypeCopyActivityConfig) SetTargetHotelCode(v []string) {
	o.TargetHotelCode = v
}

func (o CopyActivityConfigCriteriaTypeCopyActivityConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyActivityConfigCriteriaTypeCopyActivityConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityCodeList) {
		toSerialize["activityCodeList"] = o.ActivityCodeList
	}
	if !IsNil(o.SourceHotelCode) {
		toSerialize["sourceHotelCode"] = o.SourceHotelCode
	}
	if !IsNil(o.TargetHotelCode) {
		toSerialize["targetHotelCode"] = o.TargetHotelCode
	}
	return toSerialize, nil
}

type NullableCopyActivityConfigCriteriaTypeCopyActivityConfig struct {
	value *CopyActivityConfigCriteriaTypeCopyActivityConfig
	isSet bool
}

func (v NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) Get() *CopyActivityConfigCriteriaTypeCopyActivityConfig {
	return v.value
}

func (v *NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) Set(val *CopyActivityConfigCriteriaTypeCopyActivityConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyActivityConfigCriteriaTypeCopyActivityConfig(val *CopyActivityConfigCriteriaTypeCopyActivityConfig) *NullableCopyActivityConfigCriteriaTypeCopyActivityConfig {
	return &NullableCopyActivityConfigCriteriaTypeCopyActivityConfig{value: val, isSet: true}
}

func (v NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyActivityConfigCriteriaTypeCopyActivityConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


