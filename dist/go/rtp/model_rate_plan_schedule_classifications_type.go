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

// checks if the RatePlanScheduleClassificationsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanScheduleClassificationsType{}

// RatePlanScheduleClassificationsType struct for RatePlanScheduleClassificationsType
type RatePlanScheduleClassificationsType struct {
	// Market code for the rate schedule.
	MarketCode *string `json:"marketCode,omitempty"`
	// Source code for the rate schedule.
	SourceCode *string `json:"sourceCode,omitempty"`
}

// NewRatePlanScheduleClassificationsType instantiates a new RatePlanScheduleClassificationsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanScheduleClassificationsType() *RatePlanScheduleClassificationsType {
	this := RatePlanScheduleClassificationsType{}
	return &this
}

// NewRatePlanScheduleClassificationsTypeWithDefaults instantiates a new RatePlanScheduleClassificationsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanScheduleClassificationsTypeWithDefaults() *RatePlanScheduleClassificationsType {
	this := RatePlanScheduleClassificationsType{}
	return &this
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *RatePlanScheduleClassificationsType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleClassificationsType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *RatePlanScheduleClassificationsType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *RatePlanScheduleClassificationsType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *RatePlanScheduleClassificationsType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleClassificationsType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *RatePlanScheduleClassificationsType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *RatePlanScheduleClassificationsType) SetSourceCode(v string) {
	o.SourceCode = &v
}

func (o RatePlanScheduleClassificationsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanScheduleClassificationsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	return toSerialize, nil
}

type NullableRatePlanScheduleClassificationsType struct {
	value *RatePlanScheduleClassificationsType
	isSet bool
}

func (v NullableRatePlanScheduleClassificationsType) Get() *RatePlanScheduleClassificationsType {
	return v.value
}

func (v *NullableRatePlanScheduleClassificationsType) Set(val *RatePlanScheduleClassificationsType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanScheduleClassificationsType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanScheduleClassificationsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanScheduleClassificationsType(val *RatePlanScheduleClassificationsType) *NullableRatePlanScheduleClassificationsType {
	return &NullableRatePlanScheduleClassificationsType{value: val, isSet: true}
}

func (v NullableRatePlanScheduleClassificationsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanScheduleClassificationsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


