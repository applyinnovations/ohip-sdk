/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the CopyRatePlanType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyRatePlanType{}

// CopyRatePlanType The type describes Rate plan Details being copied.
type CopyRatePlanType struct {
	// Rate plan code being copied.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// The details of Rate plan targets, where it is being copied and with what name.
	Targets []CopyRatePlanTypeTargetsInner `json:"targets,omitempty"`
}

// NewCopyRatePlanType instantiates a new CopyRatePlanType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyRatePlanType() *CopyRatePlanType {
	this := CopyRatePlanType{}
	return &this
}

// NewCopyRatePlanTypeWithDefaults instantiates a new CopyRatePlanType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyRatePlanTypeWithDefaults() *CopyRatePlanType {
	this := CopyRatePlanType{}
	return &this
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *CopyRatePlanType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlanType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *CopyRatePlanType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *CopyRatePlanType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetTargets returns the Targets field value if set, zero value otherwise.
func (o *CopyRatePlanType) GetTargets() []CopyRatePlanTypeTargetsInner {
	if o == nil || IsNil(o.Targets) {
		var ret []CopyRatePlanTypeTargetsInner
		return ret
	}
	return o.Targets
}

// GetTargetsOk returns a tuple with the Targets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlanType) GetTargetsOk() ([]CopyRatePlanTypeTargetsInner, bool) {
	if o == nil || IsNil(o.Targets) {
		return nil, false
	}
	return o.Targets, true
}

// HasTargets returns a boolean if a field has been set.
func (o *CopyRatePlanType) HasTargets() bool {
	if o != nil && !IsNil(o.Targets) {
		return true
	}

	return false
}

// SetTargets gets a reference to the given []CopyRatePlanTypeTargetsInner and assigns it to the Targets field.
func (o *CopyRatePlanType) SetTargets(v []CopyRatePlanTypeTargetsInner) {
	o.Targets = v
}

func (o CopyRatePlanType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyRatePlanType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.Targets) {
		toSerialize["targets"] = o.Targets
	}
	return toSerialize, nil
}

type NullableCopyRatePlanType struct {
	value *CopyRatePlanType
	isSet bool
}

func (v NullableCopyRatePlanType) Get() *CopyRatePlanType {
	return v.value
}

func (v *NullableCopyRatePlanType) Set(val *CopyRatePlanType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyRatePlanType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyRatePlanType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyRatePlanType(val *CopyRatePlanType) *NullableCopyRatePlanType {
	return &NullableCopyRatePlanType{value: val, isSet: true}
}

func (v NullableCopyRatePlanType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyRatePlanType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


