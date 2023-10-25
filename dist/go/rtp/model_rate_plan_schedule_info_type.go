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

// checks if the RatePlanScheduleInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanScheduleInfoType{}

// RatePlanScheduleInfoType This type contains summary details about the rate plan schedules such as Schedulesefined etc.
type RatePlanScheduleInfoType struct {
	// Returns true in case the rate plan has any schedules defined.
	SchedulesDefined *bool `json:"schedulesDefined,omitempty"`
}

// NewRatePlanScheduleInfoType instantiates a new RatePlanScheduleInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanScheduleInfoType() *RatePlanScheduleInfoType {
	this := RatePlanScheduleInfoType{}
	return &this
}

// NewRatePlanScheduleInfoTypeWithDefaults instantiates a new RatePlanScheduleInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanScheduleInfoTypeWithDefaults() *RatePlanScheduleInfoType {
	this := RatePlanScheduleInfoType{}
	return &this
}

// GetSchedulesDefined returns the SchedulesDefined field value if set, zero value otherwise.
func (o *RatePlanScheduleInfoType) GetSchedulesDefined() bool {
	if o == nil || IsNil(o.SchedulesDefined) {
		var ret bool
		return ret
	}
	return *o.SchedulesDefined
}

// GetSchedulesDefinedOk returns a tuple with the SchedulesDefined field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleInfoType) GetSchedulesDefinedOk() (*bool, bool) {
	if o == nil || IsNil(o.SchedulesDefined) {
		return nil, false
	}
	return o.SchedulesDefined, true
}

// HasSchedulesDefined returns a boolean if a field has been set.
func (o *RatePlanScheduleInfoType) HasSchedulesDefined() bool {
	if o != nil && !IsNil(o.SchedulesDefined) {
		return true
	}

	return false
}

// SetSchedulesDefined gets a reference to the given bool and assigns it to the SchedulesDefined field.
func (o *RatePlanScheduleInfoType) SetSchedulesDefined(v bool) {
	o.SchedulesDefined = &v
}

func (o RatePlanScheduleInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanScheduleInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SchedulesDefined) {
		toSerialize["schedulesDefined"] = o.SchedulesDefined
	}
	return toSerialize, nil
}

type NullableRatePlanScheduleInfoType struct {
	value *RatePlanScheduleInfoType
	isSet bool
}

func (v NullableRatePlanScheduleInfoType) Get() *RatePlanScheduleInfoType {
	return v.value
}

func (v *NullableRatePlanScheduleInfoType) Set(val *RatePlanScheduleInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanScheduleInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanScheduleInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanScheduleInfoType(val *RatePlanScheduleInfoType) *NullableRatePlanScheduleInfoType {
	return &NullableRatePlanScheduleInfoType{value: val, isSet: true}
}

func (v NullableRatePlanScheduleInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanScheduleInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


