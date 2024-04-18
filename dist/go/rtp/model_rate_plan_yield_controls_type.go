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

// checks if the RatePlanYieldControlsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanYieldControlsType{}

// RatePlanYieldControlsType struct for RatePlanYieldControlsType
type RatePlanYieldControlsType struct {
	// The rate bucket the rate plan code belongs to.
	RateBucket *string `json:"rateBucket,omitempty"`
	// This rate plan code is to be yielded as Yield as Rate Plan Code (if any).
	YieldAsRatePlanCode *string `json:"yieldAsRatePlanCode,omitempty"`
	// Yield Market Code for the rate plan code.
	YieldMarketCodeList []string `json:"yieldMarketCodeList,omitempty"`
	Yieldable *RatePlanYieldableType `json:"yieldable,omitempty"`
}

// NewRatePlanYieldControlsType instantiates a new RatePlanYieldControlsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanYieldControlsType() *RatePlanYieldControlsType {
	this := RatePlanYieldControlsType{}
	return &this
}

// NewRatePlanYieldControlsTypeWithDefaults instantiates a new RatePlanYieldControlsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanYieldControlsTypeWithDefaults() *RatePlanYieldControlsType {
	this := RatePlanYieldControlsType{}
	return &this
}

// GetRateBucket returns the RateBucket field value if set, zero value otherwise.
func (o *RatePlanYieldControlsType) GetRateBucket() string {
	if o == nil || IsNil(o.RateBucket) {
		var ret string
		return ret
	}
	return *o.RateBucket
}

// GetRateBucketOk returns a tuple with the RateBucket field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanYieldControlsType) GetRateBucketOk() (*string, bool) {
	if o == nil || IsNil(o.RateBucket) {
		return nil, false
	}
	return o.RateBucket, true
}

// HasRateBucket returns a boolean if a field has been set.
func (o *RatePlanYieldControlsType) HasRateBucket() bool {
	if o != nil && !IsNil(o.RateBucket) {
		return true
	}

	return false
}

// SetRateBucket gets a reference to the given string and assigns it to the RateBucket field.
func (o *RatePlanYieldControlsType) SetRateBucket(v string) {
	o.RateBucket = &v
}

// GetYieldAsRatePlanCode returns the YieldAsRatePlanCode field value if set, zero value otherwise.
func (o *RatePlanYieldControlsType) GetYieldAsRatePlanCode() string {
	if o == nil || IsNil(o.YieldAsRatePlanCode) {
		var ret string
		return ret
	}
	return *o.YieldAsRatePlanCode
}

// GetYieldAsRatePlanCodeOk returns a tuple with the YieldAsRatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanYieldControlsType) GetYieldAsRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.YieldAsRatePlanCode) {
		return nil, false
	}
	return o.YieldAsRatePlanCode, true
}

// HasYieldAsRatePlanCode returns a boolean if a field has been set.
func (o *RatePlanYieldControlsType) HasYieldAsRatePlanCode() bool {
	if o != nil && !IsNil(o.YieldAsRatePlanCode) {
		return true
	}

	return false
}

// SetYieldAsRatePlanCode gets a reference to the given string and assigns it to the YieldAsRatePlanCode field.
func (o *RatePlanYieldControlsType) SetYieldAsRatePlanCode(v string) {
	o.YieldAsRatePlanCode = &v
}

// GetYieldMarketCodeList returns the YieldMarketCodeList field value if set, zero value otherwise.
func (o *RatePlanYieldControlsType) GetYieldMarketCodeList() []string {
	if o == nil || IsNil(o.YieldMarketCodeList) {
		var ret []string
		return ret
	}
	return o.YieldMarketCodeList
}

// GetYieldMarketCodeListOk returns a tuple with the YieldMarketCodeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanYieldControlsType) GetYieldMarketCodeListOk() ([]string, bool) {
	if o == nil || IsNil(o.YieldMarketCodeList) {
		return nil, false
	}
	return o.YieldMarketCodeList, true
}

// HasYieldMarketCodeList returns a boolean if a field has been set.
func (o *RatePlanYieldControlsType) HasYieldMarketCodeList() bool {
	if o != nil && !IsNil(o.YieldMarketCodeList) {
		return true
	}

	return false
}

// SetYieldMarketCodeList gets a reference to the given []string and assigns it to the YieldMarketCodeList field.
func (o *RatePlanYieldControlsType) SetYieldMarketCodeList(v []string) {
	o.YieldMarketCodeList = v
}

// GetYieldable returns the Yieldable field value if set, zero value otherwise.
func (o *RatePlanYieldControlsType) GetYieldable() RatePlanYieldableType {
	if o == nil || IsNil(o.Yieldable) {
		var ret RatePlanYieldableType
		return ret
	}
	return *o.Yieldable
}

// GetYieldableOk returns a tuple with the Yieldable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanYieldControlsType) GetYieldableOk() (*RatePlanYieldableType, bool) {
	if o == nil || IsNil(o.Yieldable) {
		return nil, false
	}
	return o.Yieldable, true
}

// HasYieldable returns a boolean if a field has been set.
func (o *RatePlanYieldControlsType) HasYieldable() bool {
	if o != nil && !IsNil(o.Yieldable) {
		return true
	}

	return false
}

// SetYieldable gets a reference to the given RatePlanYieldableType and assigns it to the Yieldable field.
func (o *RatePlanYieldControlsType) SetYieldable(v RatePlanYieldableType) {
	o.Yieldable = &v
}

func (o RatePlanYieldControlsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanYieldControlsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RateBucket) {
		toSerialize["rateBucket"] = o.RateBucket
	}
	if !IsNil(o.YieldAsRatePlanCode) {
		toSerialize["yieldAsRatePlanCode"] = o.YieldAsRatePlanCode
	}
	if !IsNil(o.YieldMarketCodeList) {
		toSerialize["yieldMarketCodeList"] = o.YieldMarketCodeList
	}
	if !IsNil(o.Yieldable) {
		toSerialize["yieldable"] = o.Yieldable
	}
	return toSerialize, nil
}

type NullableRatePlanYieldControlsType struct {
	value *RatePlanYieldControlsType
	isSet bool
}

func (v NullableRatePlanYieldControlsType) Get() *RatePlanYieldControlsType {
	return v.value
}

func (v *NullableRatePlanYieldControlsType) Set(val *RatePlanYieldControlsType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanYieldControlsType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanYieldControlsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanYieldControlsType(val *RatePlanYieldControlsType) *NullableRatePlanYieldControlsType {
	return &NullableRatePlanYieldControlsType{value: val, isSet: true}
}

func (v NullableRatePlanYieldControlsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanYieldControlsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

