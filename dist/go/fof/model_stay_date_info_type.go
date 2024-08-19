/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the StayDateInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StayDateInfoType{}

// StayDateInfoType Room attached with stay detail information
type StayDateInfoType struct {
	ExpectedTimes *ResExpectedTimesType `json:"expectedTimes,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewStayDateInfoType instantiates a new StayDateInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStayDateInfoType() *StayDateInfoType {
	this := StayDateInfoType{}
	return &this
}

// NewStayDateInfoTypeWithDefaults instantiates a new StayDateInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStayDateInfoTypeWithDefaults() *StayDateInfoType {
	this := StayDateInfoType{}
	return &this
}

// GetExpectedTimes returns the ExpectedTimes field value if set, zero value otherwise.
func (o *StayDateInfoType) GetExpectedTimes() ResExpectedTimesType {
	if o == nil || IsNil(o.ExpectedTimes) {
		var ret ResExpectedTimesType
		return ret
	}
	return *o.ExpectedTimes
}

// GetExpectedTimesOk returns a tuple with the ExpectedTimes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDateInfoType) GetExpectedTimesOk() (*ResExpectedTimesType, bool) {
	if o == nil || IsNil(o.ExpectedTimes) {
		return nil, false
	}
	return o.ExpectedTimes, true
}

// HasExpectedTimes returns a boolean if a field has been set.
func (o *StayDateInfoType) HasExpectedTimes() bool {
	if o != nil && !IsNil(o.ExpectedTimes) {
		return true
	}

	return false
}

// SetExpectedTimes gets a reference to the given ResExpectedTimesType and assigns it to the ExpectedTimes field.
func (o *StayDateInfoType) SetExpectedTimes(v ResExpectedTimesType) {
	o.ExpectedTimes = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *StayDateInfoType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDateInfoType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *StayDateInfoType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *StayDateInfoType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o StayDateInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StayDateInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExpectedTimes) {
		toSerialize["expectedTimes"] = o.ExpectedTimes
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableStayDateInfoType struct {
	value *StayDateInfoType
	isSet bool
}

func (v NullableStayDateInfoType) Get() *StayDateInfoType {
	return v.value
}

func (v *NullableStayDateInfoType) Set(val *StayDateInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableStayDateInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableStayDateInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStayDateInfoType(val *StayDateInfoType) *NullableStayDateInfoType {
	return &NullableStayDateInfoType{value: val, isSet: true}
}

func (v NullableStayDateInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStayDateInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


