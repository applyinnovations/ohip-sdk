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

// checks if the StrategyControlType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StrategyControlType{}

// StrategyControlType The Rate strategy Control type.
type StrategyControlType struct {
	DateRange *TimeSpanType `json:"dateRange,omitempty"`
	RollingDaysRange *StrategyControlTypeRollingDaysRange `json:"rollingDaysRange,omitempty"`
}

// NewStrategyControlType instantiates a new StrategyControlType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStrategyControlType() *StrategyControlType {
	this := StrategyControlType{}
	return &this
}

// NewStrategyControlTypeWithDefaults instantiates a new StrategyControlType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStrategyControlTypeWithDefaults() *StrategyControlType {
	this := StrategyControlType{}
	return &this
}

// GetDateRange returns the DateRange field value if set, zero value otherwise.
func (o *StrategyControlType) GetDateRange() TimeSpanType {
	if o == nil || IsNil(o.DateRange) {
		var ret TimeSpanType
		return ret
	}
	return *o.DateRange
}

// GetDateRangeOk returns a tuple with the DateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyControlType) GetDateRangeOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.DateRange) {
		return nil, false
	}
	return o.DateRange, true
}

// HasDateRange returns a boolean if a field has been set.
func (o *StrategyControlType) HasDateRange() bool {
	if o != nil && !IsNil(o.DateRange) {
		return true
	}

	return false
}

// SetDateRange gets a reference to the given TimeSpanType and assigns it to the DateRange field.
func (o *StrategyControlType) SetDateRange(v TimeSpanType) {
	o.DateRange = &v
}

// GetRollingDaysRange returns the RollingDaysRange field value if set, zero value otherwise.
func (o *StrategyControlType) GetRollingDaysRange() StrategyControlTypeRollingDaysRange {
	if o == nil || IsNil(o.RollingDaysRange) {
		var ret StrategyControlTypeRollingDaysRange
		return ret
	}
	return *o.RollingDaysRange
}

// GetRollingDaysRangeOk returns a tuple with the RollingDaysRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyControlType) GetRollingDaysRangeOk() (*StrategyControlTypeRollingDaysRange, bool) {
	if o == nil || IsNil(o.RollingDaysRange) {
		return nil, false
	}
	return o.RollingDaysRange, true
}

// HasRollingDaysRange returns a boolean if a field has been set.
func (o *StrategyControlType) HasRollingDaysRange() bool {
	if o != nil && !IsNil(o.RollingDaysRange) {
		return true
	}

	return false
}

// SetRollingDaysRange gets a reference to the given StrategyControlTypeRollingDaysRange and assigns it to the RollingDaysRange field.
func (o *StrategyControlType) SetRollingDaysRange(v StrategyControlTypeRollingDaysRange) {
	o.RollingDaysRange = &v
}

func (o StrategyControlType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StrategyControlType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DateRange) {
		toSerialize["dateRange"] = o.DateRange
	}
	if !IsNil(o.RollingDaysRange) {
		toSerialize["rollingDaysRange"] = o.RollingDaysRange
	}
	return toSerialize, nil
}

type NullableStrategyControlType struct {
	value *StrategyControlType
	isSet bool
}

func (v NullableStrategyControlType) Get() *StrategyControlType {
	return v.value
}

func (v *NullableStrategyControlType) Set(val *StrategyControlType) {
	v.value = val
	v.isSet = true
}

func (v NullableStrategyControlType) IsSet() bool {
	return v.isSet
}

func (v *NullableStrategyControlType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStrategyControlType(val *StrategyControlType) *NullableStrategyControlType {
	return &NullableStrategyControlType{value: val, isSet: true}
}

func (v NullableStrategyControlType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStrategyControlType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


