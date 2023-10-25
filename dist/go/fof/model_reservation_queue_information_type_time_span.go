/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReservationQueueInformationTypeTimeSpan type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueueInformationTypeTimeSpan{}

// ReservationQueueInformationTypeTimeSpan Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
type ReservationQueueInformationTypeTimeSpan struct {
	Duration *string `json:"duration,omitempty"`
	// The total duration, in seconds, the reservation is on Queue.
	DurationInSeconds *int32 `json:"durationInSeconds,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
}

// NewReservationQueueInformationTypeTimeSpan instantiates a new ReservationQueueInformationTypeTimeSpan object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueueInformationTypeTimeSpan() *ReservationQueueInformationTypeTimeSpan {
	this := ReservationQueueInformationTypeTimeSpan{}
	return &this
}

// NewReservationQueueInformationTypeTimeSpanWithDefaults instantiates a new ReservationQueueInformationTypeTimeSpan object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueueInformationTypeTimeSpanWithDefaults() *ReservationQueueInformationTypeTimeSpan {
	this := ReservationQueueInformationTypeTimeSpan{}
	return &this
}

// GetDuration returns the Duration field value if set, zero value otherwise.
func (o *ReservationQueueInformationTypeTimeSpan) GetDuration() string {
	if o == nil || IsNil(o.Duration) {
		var ret string
		return ret
	}
	return *o.Duration
}

// GetDurationOk returns a tuple with the Duration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationTypeTimeSpan) GetDurationOk() (*string, bool) {
	if o == nil || IsNil(o.Duration) {
		return nil, false
	}
	return o.Duration, true
}

// HasDuration returns a boolean if a field has been set.
func (o *ReservationQueueInformationTypeTimeSpan) HasDuration() bool {
	if o != nil && !IsNil(o.Duration) {
		return true
	}

	return false
}

// SetDuration gets a reference to the given string and assigns it to the Duration field.
func (o *ReservationQueueInformationTypeTimeSpan) SetDuration(v string) {
	o.Duration = &v
}

// GetDurationInSeconds returns the DurationInSeconds field value if set, zero value otherwise.
func (o *ReservationQueueInformationTypeTimeSpan) GetDurationInSeconds() int32 {
	if o == nil || IsNil(o.DurationInSeconds) {
		var ret int32
		return ret
	}
	return *o.DurationInSeconds
}

// GetDurationInSecondsOk returns a tuple with the DurationInSeconds field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationTypeTimeSpan) GetDurationInSecondsOk() (*int32, bool) {
	if o == nil || IsNil(o.DurationInSeconds) {
		return nil, false
	}
	return o.DurationInSeconds, true
}

// HasDurationInSeconds returns a boolean if a field has been set.
func (o *ReservationQueueInformationTypeTimeSpan) HasDurationInSeconds() bool {
	if o != nil && !IsNil(o.DurationInSeconds) {
		return true
	}

	return false
}

// SetDurationInSeconds gets a reference to the given int32 and assigns it to the DurationInSeconds field.
func (o *ReservationQueueInformationTypeTimeSpan) SetDurationInSeconds(v int32) {
	o.DurationInSeconds = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ReservationQueueInformationTypeTimeSpan) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationTypeTimeSpan) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ReservationQueueInformationTypeTimeSpan) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ReservationQueueInformationTypeTimeSpan) SetEndDate(v string) {
	o.EndDate = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *ReservationQueueInformationTypeTimeSpan) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationTypeTimeSpan) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *ReservationQueueInformationTypeTimeSpan) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *ReservationQueueInformationTypeTimeSpan) SetStartDate(v string) {
	o.StartDate = &v
}

func (o ReservationQueueInformationTypeTimeSpan) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueueInformationTypeTimeSpan) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Duration) {
		toSerialize["duration"] = o.Duration
	}
	if !IsNil(o.DurationInSeconds) {
		toSerialize["durationInSeconds"] = o.DurationInSeconds
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableReservationQueueInformationTypeTimeSpan struct {
	value *ReservationQueueInformationTypeTimeSpan
	isSet bool
}

func (v NullableReservationQueueInformationTypeTimeSpan) Get() *ReservationQueueInformationTypeTimeSpan {
	return v.value
}

func (v *NullableReservationQueueInformationTypeTimeSpan) Set(val *ReservationQueueInformationTypeTimeSpan) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueueInformationTypeTimeSpan) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueueInformationTypeTimeSpan) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueueInformationTypeTimeSpan(val *ReservationQueueInformationTypeTimeSpan) *NullableReservationQueueInformationTypeTimeSpan {
	return &NullableReservationQueueInformationTypeTimeSpan{value: val, isSet: true}
}

func (v NullableReservationQueueInformationTypeTimeSpan) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueueInformationTypeTimeSpan) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


