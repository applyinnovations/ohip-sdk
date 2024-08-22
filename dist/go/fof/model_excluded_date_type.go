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

// checks if the ExcludedDateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExcludedDateType{}

// ExcludedDateType Specifies all the enabled dates.
type ExcludedDateType struct {
	// Contains exclusion date.
	Date *string `json:"date,omitempty"`
	Reason *ExclusionReasonType `json:"reason,omitempty"`
}

// NewExcludedDateType instantiates a new ExcludedDateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExcludedDateType() *ExcludedDateType {
	this := ExcludedDateType{}
	return &this
}

// NewExcludedDateTypeWithDefaults instantiates a new ExcludedDateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExcludedDateTypeWithDefaults() *ExcludedDateType {
	this := ExcludedDateType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ExcludedDateType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExcludedDateType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ExcludedDateType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ExcludedDateType) SetDate(v string) {
	o.Date = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *ExcludedDateType) GetReason() ExclusionReasonType {
	if o == nil || IsNil(o.Reason) {
		var ret ExclusionReasonType
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExcludedDateType) GetReasonOk() (*ExclusionReasonType, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *ExcludedDateType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given ExclusionReasonType and assigns it to the Reason field.
func (o *ExcludedDateType) SetReason(v ExclusionReasonType) {
	o.Reason = &v
}

func (o ExcludedDateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExcludedDateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	return toSerialize, nil
}

type NullableExcludedDateType struct {
	value *ExcludedDateType
	isSet bool
}

func (v NullableExcludedDateType) Get() *ExcludedDateType {
	return v.value
}

func (v *NullableExcludedDateType) Set(val *ExcludedDateType) {
	v.value = val
	v.isSet = true
}

func (v NullableExcludedDateType) IsSet() bool {
	return v.isSet
}

func (v *NullableExcludedDateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExcludedDateType(val *ExcludedDateType) *NullableExcludedDateType {
	return &NullableExcludedDateType{value: val, isSet: true}
}

func (v NullableExcludedDateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExcludedDateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


