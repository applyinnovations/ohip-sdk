/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the DateTimeSpanType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DateTimeSpanType{}

// DateTimeSpanType Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
type DateTimeSpanType struct {
	EndDateTime *string `json:"endDateTime,omitempty"`
	StartDateTime *string `json:"startDateTime,omitempty"`
}

// NewDateTimeSpanType instantiates a new DateTimeSpanType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDateTimeSpanType() *DateTimeSpanType {
	this := DateTimeSpanType{}
	return &this
}

// NewDateTimeSpanTypeWithDefaults instantiates a new DateTimeSpanType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDateTimeSpanTypeWithDefaults() *DateTimeSpanType {
	this := DateTimeSpanType{}
	return &this
}

// GetEndDateTime returns the EndDateTime field value if set, zero value otherwise.
func (o *DateTimeSpanType) GetEndDateTime() string {
	if o == nil || IsNil(o.EndDateTime) {
		var ret string
		return ret
	}
	return *o.EndDateTime
}

// GetEndDateTimeOk returns a tuple with the EndDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateTimeSpanType) GetEndDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.EndDateTime) {
		return nil, false
	}
	return o.EndDateTime, true
}

// HasEndDateTime returns a boolean if a field has been set.
func (o *DateTimeSpanType) HasEndDateTime() bool {
	if o != nil && !IsNil(o.EndDateTime) {
		return true
	}

	return false
}

// SetEndDateTime gets a reference to the given string and assigns it to the EndDateTime field.
func (o *DateTimeSpanType) SetEndDateTime(v string) {
	o.EndDateTime = &v
}

// GetStartDateTime returns the StartDateTime field value if set, zero value otherwise.
func (o *DateTimeSpanType) GetStartDateTime() string {
	if o == nil || IsNil(o.StartDateTime) {
		var ret string
		return ret
	}
	return *o.StartDateTime
}

// GetStartDateTimeOk returns a tuple with the StartDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DateTimeSpanType) GetStartDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.StartDateTime) {
		return nil, false
	}
	return o.StartDateTime, true
}

// HasStartDateTime returns a boolean if a field has been set.
func (o *DateTimeSpanType) HasStartDateTime() bool {
	if o != nil && !IsNil(o.StartDateTime) {
		return true
	}

	return false
}

// SetStartDateTime gets a reference to the given string and assigns it to the StartDateTime field.
func (o *DateTimeSpanType) SetStartDateTime(v string) {
	o.StartDateTime = &v
}

func (o DateTimeSpanType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DateTimeSpanType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndDateTime) {
		toSerialize["endDateTime"] = o.EndDateTime
	}
	if !IsNil(o.StartDateTime) {
		toSerialize["startDateTime"] = o.StartDateTime
	}
	return toSerialize, nil
}

type NullableDateTimeSpanType struct {
	value *DateTimeSpanType
	isSet bool
}

func (v NullableDateTimeSpanType) Get() *DateTimeSpanType {
	return v.value
}

func (v *NullableDateTimeSpanType) Set(val *DateTimeSpanType) {
	v.value = val
	v.isSet = true
}

func (v NullableDateTimeSpanType) IsSet() bool {
	return v.isSet
}

func (v *NullableDateTimeSpanType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDateTimeSpanType(val *DateTimeSpanType) *NullableDateTimeSpanType {
	return &NullableDateTimeSpanType{value: val, isSet: true}
}

func (v NullableDateTimeSpanType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDateTimeSpanType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


