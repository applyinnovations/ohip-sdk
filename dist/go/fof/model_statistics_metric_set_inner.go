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

// checks if the StatisticsMetricSetInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatisticsMetricSetInner{}

// StatisticsMetricSetInner .
type StatisticsMetricSetInner struct {
	Code *string `json:"code,omitempty"`
	End *string `json:"end,omitempty"`
	Metrics []HSKStatType `json:"metrics,omitempty"`
	Start *string `json:"start,omitempty"`
}

// NewStatisticsMetricSetInner instantiates a new StatisticsMetricSetInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatisticsMetricSetInner() *StatisticsMetricSetInner {
	this := StatisticsMetricSetInner{}
	return &this
}

// NewStatisticsMetricSetInnerWithDefaults instantiates a new StatisticsMetricSetInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatisticsMetricSetInnerWithDefaults() *StatisticsMetricSetInner {
	this := StatisticsMetricSetInner{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *StatisticsMetricSetInner) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsMetricSetInner) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *StatisticsMetricSetInner) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *StatisticsMetricSetInner) SetCode(v string) {
	o.Code = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *StatisticsMetricSetInner) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsMetricSetInner) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *StatisticsMetricSetInner) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *StatisticsMetricSetInner) SetEnd(v string) {
	o.End = &v
}

// GetMetrics returns the Metrics field value if set, zero value otherwise.
func (o *StatisticsMetricSetInner) GetMetrics() []HSKStatType {
	if o == nil || IsNil(o.Metrics) {
		var ret []HSKStatType
		return ret
	}
	return o.Metrics
}

// GetMetricsOk returns a tuple with the Metrics field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsMetricSetInner) GetMetricsOk() ([]HSKStatType, bool) {
	if o == nil || IsNil(o.Metrics) {
		return nil, false
	}
	return o.Metrics, true
}

// HasMetrics returns a boolean if a field has been set.
func (o *StatisticsMetricSetInner) HasMetrics() bool {
	if o != nil && !IsNil(o.Metrics) {
		return true
	}

	return false
}

// SetMetrics gets a reference to the given []HSKStatType and assigns it to the Metrics field.
func (o *StatisticsMetricSetInner) SetMetrics(v []HSKStatType) {
	o.Metrics = v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *StatisticsMetricSetInner) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticsMetricSetInner) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *StatisticsMetricSetInner) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *StatisticsMetricSetInner) SetStart(v string) {
	o.Start = &v
}

func (o StatisticsMetricSetInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatisticsMetricSetInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Metrics) {
		toSerialize["metrics"] = o.Metrics
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableStatisticsMetricSetInner struct {
	value *StatisticsMetricSetInner
	isSet bool
}

func (v NullableStatisticsMetricSetInner) Get() *StatisticsMetricSetInner {
	return v.value
}

func (v *NullableStatisticsMetricSetInner) Set(val *StatisticsMetricSetInner) {
	v.value = val
	v.isSet = true
}

func (v NullableStatisticsMetricSetInner) IsSet() bool {
	return v.isSet
}

func (v *NullableStatisticsMetricSetInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatisticsMetricSetInner(val *StatisticsMetricSetInner) *NullableStatisticsMetricSetInner {
	return &NullableStatisticsMetricSetInner{value: val, isSet: true}
}

func (v NullableStatisticsMetricSetInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatisticsMetricSetInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


