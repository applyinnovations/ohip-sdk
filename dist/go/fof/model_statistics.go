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

// checks if the Statistics type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Statistics{}

// Statistics Response element for frontOffice statistics.
type Statistics struct {
	// Statistical date of the requested report.
	CalendarDate *string `json:"calendarDate,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Base statistic set holder which defines the span of the statistical data.
	MetricSet []StatisticsMetricSetInner `json:"metricSet,omitempty"`
	StatisticsCode *HSKStatReportCodeType `json:"statisticsCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewStatistics instantiates a new Statistics object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatistics() *Statistics {
	this := Statistics{}
	return &this
}

// NewStatisticsWithDefaults instantiates a new Statistics object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatisticsWithDefaults() *Statistics {
	this := Statistics{}
	return &this
}

// GetCalendarDate returns the CalendarDate field value if set, zero value otherwise.
func (o *Statistics) GetCalendarDate() string {
	if o == nil || IsNil(o.CalendarDate) {
		var ret string
		return ret
	}
	return *o.CalendarDate
}

// GetCalendarDateOk returns a tuple with the CalendarDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Statistics) GetCalendarDateOk() (*string, bool) {
	if o == nil || IsNil(o.CalendarDate) {
		return nil, false
	}
	return o.CalendarDate, true
}

// HasCalendarDate returns a boolean if a field has been set.
func (o *Statistics) HasCalendarDate() bool {
	if o != nil && !IsNil(o.CalendarDate) {
		return true
	}

	return false
}

// SetCalendarDate gets a reference to the given string and assigns it to the CalendarDate field.
func (o *Statistics) SetCalendarDate(v string) {
	o.CalendarDate = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Statistics) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Statistics) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Statistics) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Statistics) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMetricSet returns the MetricSet field value if set, zero value otherwise.
func (o *Statistics) GetMetricSet() []StatisticsMetricSetInner {
	if o == nil || IsNil(o.MetricSet) {
		var ret []StatisticsMetricSetInner
		return ret
	}
	return o.MetricSet
}

// GetMetricSetOk returns a tuple with the MetricSet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Statistics) GetMetricSetOk() ([]StatisticsMetricSetInner, bool) {
	if o == nil || IsNil(o.MetricSet) {
		return nil, false
	}
	return o.MetricSet, true
}

// HasMetricSet returns a boolean if a field has been set.
func (o *Statistics) HasMetricSet() bool {
	if o != nil && !IsNil(o.MetricSet) {
		return true
	}

	return false
}

// SetMetricSet gets a reference to the given []StatisticsMetricSetInner and assigns it to the MetricSet field.
func (o *Statistics) SetMetricSet(v []StatisticsMetricSetInner) {
	o.MetricSet = v
}

// GetStatisticsCode returns the StatisticsCode field value if set, zero value otherwise.
func (o *Statistics) GetStatisticsCode() HSKStatReportCodeType {
	if o == nil || IsNil(o.StatisticsCode) {
		var ret HSKStatReportCodeType
		return ret
	}
	return *o.StatisticsCode
}

// GetStatisticsCodeOk returns a tuple with the StatisticsCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Statistics) GetStatisticsCodeOk() (*HSKStatReportCodeType, bool) {
	if o == nil || IsNil(o.StatisticsCode) {
		return nil, false
	}
	return o.StatisticsCode, true
}

// HasStatisticsCode returns a boolean if a field has been set.
func (o *Statistics) HasStatisticsCode() bool {
	if o != nil && !IsNil(o.StatisticsCode) {
		return true
	}

	return false
}

// SetStatisticsCode gets a reference to the given HSKStatReportCodeType and assigns it to the StatisticsCode field.
func (o *Statistics) SetStatisticsCode(v HSKStatReportCodeType) {
	o.StatisticsCode = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Statistics) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Statistics) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Statistics) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Statistics) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Statistics) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Statistics) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CalendarDate) {
		toSerialize["calendarDate"] = o.CalendarDate
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MetricSet) {
		toSerialize["metricSet"] = o.MetricSet
	}
	if !IsNil(o.StatisticsCode) {
		toSerialize["statisticsCode"] = o.StatisticsCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableStatistics struct {
	value *Statistics
	isSet bool
}

func (v NullableStatistics) Get() *Statistics {
	return v.value
}

func (v *NullableStatistics) Set(val *Statistics) {
	v.value = val
	v.isSet = true
}

func (v NullableStatistics) IsSet() bool {
	return v.isSet
}

func (v *NullableStatistics) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatistics(val *Statistics) *NullableStatistics {
	return &NullableStatistics{value: val, isSet: true}
}

func (v NullableStatistics) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatistics) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

