/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the FixedChargeScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FixedChargeScheduleType{}

// FixedChargeScheduleType Holds schedule of fixed charge.
type FixedChargeScheduleType struct {
	// Date of when to execute yearly fixed charge. Applicable when frequency is Yearly.
	DateToExecute *string `json:"dateToExecute,omitempty"`
	// Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly.
	DayToExecute *string `json:"dayToExecute,omitempty"`
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	Frequency *FixedChargeFrequencyType `json:"frequency,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewFixedChargeScheduleType instantiates a new FixedChargeScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFixedChargeScheduleType() *FixedChargeScheduleType {
	this := FixedChargeScheduleType{}
	return &this
}

// NewFixedChargeScheduleTypeWithDefaults instantiates a new FixedChargeScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFixedChargeScheduleTypeWithDefaults() *FixedChargeScheduleType {
	this := FixedChargeScheduleType{}
	return &this
}

// GetDateToExecute returns the DateToExecute field value if set, zero value otherwise.
func (o *FixedChargeScheduleType) GetDateToExecute() string {
	if o == nil || IsNil(o.DateToExecute) {
		var ret string
		return ret
	}
	return *o.DateToExecute
}

// GetDateToExecuteOk returns a tuple with the DateToExecute field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FixedChargeScheduleType) GetDateToExecuteOk() (*string, bool) {
	if o == nil || IsNil(o.DateToExecute) {
		return nil, false
	}
	return o.DateToExecute, true
}

// HasDateToExecute returns a boolean if a field has been set.
func (o *FixedChargeScheduleType) HasDateToExecute() bool {
	if o != nil && !IsNil(o.DateToExecute) {
		return true
	}

	return false
}

// SetDateToExecute gets a reference to the given string and assigns it to the DateToExecute field.
func (o *FixedChargeScheduleType) SetDateToExecute(v string) {
	o.DateToExecute = &v
}

// GetDayToExecute returns the DayToExecute field value if set, zero value otherwise.
func (o *FixedChargeScheduleType) GetDayToExecute() string {
	if o == nil || IsNil(o.DayToExecute) {
		var ret string
		return ret
	}
	return *o.DayToExecute
}

// GetDayToExecuteOk returns a tuple with the DayToExecute field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FixedChargeScheduleType) GetDayToExecuteOk() (*string, bool) {
	if o == nil || IsNil(o.DayToExecute) {
		return nil, false
	}
	return o.DayToExecute, true
}

// HasDayToExecute returns a boolean if a field has been set.
func (o *FixedChargeScheduleType) HasDayToExecute() bool {
	if o != nil && !IsNil(o.DayToExecute) {
		return true
	}

	return false
}

// SetDayToExecute gets a reference to the given string and assigns it to the DayToExecute field.
func (o *FixedChargeScheduleType) SetDayToExecute(v string) {
	o.DayToExecute = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *FixedChargeScheduleType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FixedChargeScheduleType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *FixedChargeScheduleType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *FixedChargeScheduleType) SetEnd(v string) {
	o.End = &v
}

// GetFrequency returns the Frequency field value if set, zero value otherwise.
func (o *FixedChargeScheduleType) GetFrequency() FixedChargeFrequencyType {
	if o == nil || IsNil(o.Frequency) {
		var ret FixedChargeFrequencyType
		return ret
	}
	return *o.Frequency
}

// GetFrequencyOk returns a tuple with the Frequency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FixedChargeScheduleType) GetFrequencyOk() (*FixedChargeFrequencyType, bool) {
	if o == nil || IsNil(o.Frequency) {
		return nil, false
	}
	return o.Frequency, true
}

// HasFrequency returns a boolean if a field has been set.
func (o *FixedChargeScheduleType) HasFrequency() bool {
	if o != nil && !IsNil(o.Frequency) {
		return true
	}

	return false
}

// SetFrequency gets a reference to the given FixedChargeFrequencyType and assigns it to the Frequency field.
func (o *FixedChargeScheduleType) SetFrequency(v FixedChargeFrequencyType) {
	o.Frequency = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *FixedChargeScheduleType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FixedChargeScheduleType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *FixedChargeScheduleType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *FixedChargeScheduleType) SetStart(v string) {
	o.Start = &v
}

func (o FixedChargeScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FixedChargeScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DateToExecute) {
		toSerialize["dateToExecute"] = o.DateToExecute
	}
	if !IsNil(o.DayToExecute) {
		toSerialize["dayToExecute"] = o.DayToExecute
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Frequency) {
		toSerialize["frequency"] = o.Frequency
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableFixedChargeScheduleType struct {
	value *FixedChargeScheduleType
	isSet bool
}

func (v NullableFixedChargeScheduleType) Get() *FixedChargeScheduleType {
	return v.value
}

func (v *NullableFixedChargeScheduleType) Set(val *FixedChargeScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableFixedChargeScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableFixedChargeScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFixedChargeScheduleType(val *FixedChargeScheduleType) *NullableFixedChargeScheduleType {
	return &NullableFixedChargeScheduleType{value: val, isSet: true}
}

func (v NullableFixedChargeScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFixedChargeScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


