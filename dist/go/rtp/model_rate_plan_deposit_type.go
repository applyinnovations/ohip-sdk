/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanDepositType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanDepositType{}

// RatePlanDepositType struct for RatePlanDepositType
type RatePlanDepositType struct {
	DepositMaturityPreference *DepositMaturityPreferenceType `json:"depositMaturityPreference,omitempty"`
}

// NewRatePlanDepositType instantiates a new RatePlanDepositType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanDepositType() *RatePlanDepositType {
	this := RatePlanDepositType{}
	return &this
}

// NewRatePlanDepositTypeWithDefaults instantiates a new RatePlanDepositType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanDepositTypeWithDefaults() *RatePlanDepositType {
	this := RatePlanDepositType{}
	return &this
}

// GetDepositMaturityPreference returns the DepositMaturityPreference field value if set, zero value otherwise.
func (o *RatePlanDepositType) GetDepositMaturityPreference() DepositMaturityPreferenceType {
	if o == nil || IsNil(o.DepositMaturityPreference) {
		var ret DepositMaturityPreferenceType
		return ret
	}
	return *o.DepositMaturityPreference
}

// GetDepositMaturityPreferenceOk returns a tuple with the DepositMaturityPreference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanDepositType) GetDepositMaturityPreferenceOk() (*DepositMaturityPreferenceType, bool) {
	if o == nil || IsNil(o.DepositMaturityPreference) {
		return nil, false
	}
	return o.DepositMaturityPreference, true
}

// HasDepositMaturityPreference returns a boolean if a field has been set.
func (o *RatePlanDepositType) HasDepositMaturityPreference() bool {
	if o != nil && !IsNil(o.DepositMaturityPreference) {
		return true
	}

	return false
}

// SetDepositMaturityPreference gets a reference to the given DepositMaturityPreferenceType and assigns it to the DepositMaturityPreference field.
func (o *RatePlanDepositType) SetDepositMaturityPreference(v DepositMaturityPreferenceType) {
	o.DepositMaturityPreference = &v
}

func (o RatePlanDepositType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanDepositType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DepositMaturityPreference) {
		toSerialize["depositMaturityPreference"] = o.DepositMaturityPreference
	}
	return toSerialize, nil
}

type NullableRatePlanDepositType struct {
	value *RatePlanDepositType
	isSet bool
}

func (v NullableRatePlanDepositType) Get() *RatePlanDepositType {
	return v.value
}

func (v *NullableRatePlanDepositType) Set(val *RatePlanDepositType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanDepositType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanDepositType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanDepositType(val *RatePlanDepositType) *NullableRatePlanDepositType {
	return &NullableRatePlanDepositType{value: val, isSet: true}
}

func (v NullableRatePlanDepositType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanDepositType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


