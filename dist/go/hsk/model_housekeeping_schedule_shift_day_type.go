/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the HousekeepingScheduleShiftDayType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingScheduleShiftDayType{}

// HousekeepingScheduleShiftDayType Day of the week to which schedule of the week is to be shifted to.
type HousekeepingScheduleShiftDayType struct {
	DayOfWeek *DaysOfWeekType `json:"dayOfWeek,omitempty"`
}

// NewHousekeepingScheduleShiftDayType instantiates a new HousekeepingScheduleShiftDayType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingScheduleShiftDayType() *HousekeepingScheduleShiftDayType {
	this := HousekeepingScheduleShiftDayType{}
	return &this
}

// NewHousekeepingScheduleShiftDayTypeWithDefaults instantiates a new HousekeepingScheduleShiftDayType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingScheduleShiftDayTypeWithDefaults() *HousekeepingScheduleShiftDayType {
	this := HousekeepingScheduleShiftDayType{}
	return &this
}

// GetDayOfWeek returns the DayOfWeek field value if set, zero value otherwise.
func (o *HousekeepingScheduleShiftDayType) GetDayOfWeek() DaysOfWeekType {
	if o == nil || IsNil(o.DayOfWeek) {
		var ret DaysOfWeekType
		return ret
	}
	return *o.DayOfWeek
}

// GetDayOfWeekOk returns a tuple with the DayOfWeek field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingScheduleShiftDayType) GetDayOfWeekOk() (*DaysOfWeekType, bool) {
	if o == nil || IsNil(o.DayOfWeek) {
		return nil, false
	}
	return o.DayOfWeek, true
}

// HasDayOfWeek returns a boolean if a field has been set.
func (o *HousekeepingScheduleShiftDayType) HasDayOfWeek() bool {
	if o != nil && !IsNil(o.DayOfWeek) {
		return true
	}

	return false
}

// SetDayOfWeek gets a reference to the given DaysOfWeekType and assigns it to the DayOfWeek field.
func (o *HousekeepingScheduleShiftDayType) SetDayOfWeek(v DaysOfWeekType) {
	o.DayOfWeek = &v
}

func (o HousekeepingScheduleShiftDayType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingScheduleShiftDayType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DayOfWeek) {
		toSerialize["dayOfWeek"] = o.DayOfWeek
	}
	return toSerialize, nil
}

type NullableHousekeepingScheduleShiftDayType struct {
	value *HousekeepingScheduleShiftDayType
	isSet bool
}

func (v NullableHousekeepingScheduleShiftDayType) Get() *HousekeepingScheduleShiftDayType {
	return v.value
}

func (v *NullableHousekeepingScheduleShiftDayType) Set(val *HousekeepingScheduleShiftDayType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingScheduleShiftDayType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingScheduleShiftDayType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingScheduleShiftDayType(val *HousekeepingScheduleShiftDayType) *NullableHousekeepingScheduleShiftDayType {
	return &NullableHousekeepingScheduleShiftDayType{value: val, isSet: true}
}

func (v NullableHousekeepingScheduleShiftDayType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingScheduleShiftDayType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

