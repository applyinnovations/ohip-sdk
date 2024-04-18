/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ARReminderCycleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARReminderCycleType{}

// ARReminderCycleType When reminder letters needs to be generated. user can choose from End of month or Day cycle
type ARReminderCycleType struct {
	// Reminder letters will be generated based on the number of days for which the account has had an outstanding balance
	DaysCycle []ARDaysReminderCycleType `json:"daysCycle,omitempty"`
	EndOfMonthCycle *AREndOfMonthCycleType `json:"endOfMonthCycle,omitempty"`
}

// NewARReminderCycleType instantiates a new ARReminderCycleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARReminderCycleType() *ARReminderCycleType {
	this := ARReminderCycleType{}
	return &this
}

// NewARReminderCycleTypeWithDefaults instantiates a new ARReminderCycleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARReminderCycleTypeWithDefaults() *ARReminderCycleType {
	this := ARReminderCycleType{}
	return &this
}

// GetDaysCycle returns the DaysCycle field value if set, zero value otherwise.
func (o *ARReminderCycleType) GetDaysCycle() []ARDaysReminderCycleType {
	if o == nil || IsNil(o.DaysCycle) {
		var ret []ARDaysReminderCycleType
		return ret
	}
	return o.DaysCycle
}

// GetDaysCycleOk returns a tuple with the DaysCycle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderCycleType) GetDaysCycleOk() ([]ARDaysReminderCycleType, bool) {
	if o == nil || IsNil(o.DaysCycle) {
		return nil, false
	}
	return o.DaysCycle, true
}

// HasDaysCycle returns a boolean if a field has been set.
func (o *ARReminderCycleType) HasDaysCycle() bool {
	if o != nil && !IsNil(o.DaysCycle) {
		return true
	}

	return false
}

// SetDaysCycle gets a reference to the given []ARDaysReminderCycleType and assigns it to the DaysCycle field.
func (o *ARReminderCycleType) SetDaysCycle(v []ARDaysReminderCycleType) {
	o.DaysCycle = v
}

// GetEndOfMonthCycle returns the EndOfMonthCycle field value if set, zero value otherwise.
func (o *ARReminderCycleType) GetEndOfMonthCycle() AREndOfMonthCycleType {
	if o == nil || IsNil(o.EndOfMonthCycle) {
		var ret AREndOfMonthCycleType
		return ret
	}
	return *o.EndOfMonthCycle
}

// GetEndOfMonthCycleOk returns a tuple with the EndOfMonthCycle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderCycleType) GetEndOfMonthCycleOk() (*AREndOfMonthCycleType, bool) {
	if o == nil || IsNil(o.EndOfMonthCycle) {
		return nil, false
	}
	return o.EndOfMonthCycle, true
}

// HasEndOfMonthCycle returns a boolean if a field has been set.
func (o *ARReminderCycleType) HasEndOfMonthCycle() bool {
	if o != nil && !IsNil(o.EndOfMonthCycle) {
		return true
	}

	return false
}

// SetEndOfMonthCycle gets a reference to the given AREndOfMonthCycleType and assigns it to the EndOfMonthCycle field.
func (o *ARReminderCycleType) SetEndOfMonthCycle(v AREndOfMonthCycleType) {
	o.EndOfMonthCycle = &v
}

func (o ARReminderCycleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARReminderCycleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DaysCycle) {
		toSerialize["daysCycle"] = o.DaysCycle
	}
	if !IsNil(o.EndOfMonthCycle) {
		toSerialize["endOfMonthCycle"] = o.EndOfMonthCycle
	}
	return toSerialize, nil
}

type NullableARReminderCycleType struct {
	value *ARReminderCycleType
	isSet bool
}

func (v NullableARReminderCycleType) Get() *ARReminderCycleType {
	return v.value
}

func (v *NullableARReminderCycleType) Set(val *ARReminderCycleType) {
	v.value = val
	v.isSet = true
}

func (v NullableARReminderCycleType) IsSet() bool {
	return v.isSet
}

func (v *NullableARReminderCycleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARReminderCycleType(val *ARReminderCycleType) *NullableARReminderCycleType {
	return &NullableARReminderCycleType{value: val, isSet: true}
}

func (v NullableARReminderCycleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARReminderCycleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

