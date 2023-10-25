/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the ReservationQueueInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueueInformationType{}

// ReservationQueueInformationType Information regarding the Date, Duration and Priority of the reservation on Queue for Check in.
type ReservationQueueInformationType struct {
	TimeSpan *ReservationQueueInformationTypeTimeSpan `json:"timeSpan,omitempty"`
	GuestTextInfo *QueueTextInfoType `json:"guestTextInfo,omitempty"`
	// The Queue Priority given to this reservation.
	Priority *int32 `json:"priority,omitempty"`
	// The average time, in seconds, a reservation was on queue prior to Check-In.
	AvgQueueTimeToCheckIn *int32 `json:"avgQueueTimeToCheckIn,omitempty"`
	// The average time, in seconds, of the reservations currently in queue.
	AvgQueueTimeCurrentReservations *int32 `json:"avgQueueTimeCurrentReservations,omitempty"`
	// The Business date on which the reservation was due to arrive and is currently placed on Queue for Check In.
	QueueDate *string `json:"queueDate,omitempty"`
}

// NewReservationQueueInformationType instantiates a new ReservationQueueInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueueInformationType() *ReservationQueueInformationType {
	this := ReservationQueueInformationType{}
	return &this
}

// NewReservationQueueInformationTypeWithDefaults instantiates a new ReservationQueueInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueueInformationTypeWithDefaults() *ReservationQueueInformationType {
	this := ReservationQueueInformationType{}
	return &this
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetTimeSpan() ReservationQueueInformationTypeTimeSpan {
	if o == nil || IsNil(o.TimeSpan) {
		var ret ReservationQueueInformationTypeTimeSpan
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetTimeSpanOk() (*ReservationQueueInformationTypeTimeSpan, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given ReservationQueueInformationTypeTimeSpan and assigns it to the TimeSpan field.
func (o *ReservationQueueInformationType) SetTimeSpan(v ReservationQueueInformationTypeTimeSpan) {
	o.TimeSpan = &v
}

// GetGuestTextInfo returns the GuestTextInfo field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetGuestTextInfo() QueueTextInfoType {
	if o == nil || IsNil(o.GuestTextInfo) {
		var ret QueueTextInfoType
		return ret
	}
	return *o.GuestTextInfo
}

// GetGuestTextInfoOk returns a tuple with the GuestTextInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetGuestTextInfoOk() (*QueueTextInfoType, bool) {
	if o == nil || IsNil(o.GuestTextInfo) {
		return nil, false
	}
	return o.GuestTextInfo, true
}

// HasGuestTextInfo returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasGuestTextInfo() bool {
	if o != nil && !IsNil(o.GuestTextInfo) {
		return true
	}

	return false
}

// SetGuestTextInfo gets a reference to the given QueueTextInfoType and assigns it to the GuestTextInfo field.
func (o *ReservationQueueInformationType) SetGuestTextInfo(v QueueTextInfoType) {
	o.GuestTextInfo = &v
}

// GetPriority returns the Priority field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetPriority() int32 {
	if o == nil || IsNil(o.Priority) {
		var ret int32
		return ret
	}
	return *o.Priority
}

// GetPriorityOk returns a tuple with the Priority field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetPriorityOk() (*int32, bool) {
	if o == nil || IsNil(o.Priority) {
		return nil, false
	}
	return o.Priority, true
}

// HasPriority returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasPriority() bool {
	if o != nil && !IsNil(o.Priority) {
		return true
	}

	return false
}

// SetPriority gets a reference to the given int32 and assigns it to the Priority field.
func (o *ReservationQueueInformationType) SetPriority(v int32) {
	o.Priority = &v
}

// GetAvgQueueTimeToCheckIn returns the AvgQueueTimeToCheckIn field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetAvgQueueTimeToCheckIn() int32 {
	if o == nil || IsNil(o.AvgQueueTimeToCheckIn) {
		var ret int32
		return ret
	}
	return *o.AvgQueueTimeToCheckIn
}

// GetAvgQueueTimeToCheckInOk returns a tuple with the AvgQueueTimeToCheckIn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetAvgQueueTimeToCheckInOk() (*int32, bool) {
	if o == nil || IsNil(o.AvgQueueTimeToCheckIn) {
		return nil, false
	}
	return o.AvgQueueTimeToCheckIn, true
}

// HasAvgQueueTimeToCheckIn returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasAvgQueueTimeToCheckIn() bool {
	if o != nil && !IsNil(o.AvgQueueTimeToCheckIn) {
		return true
	}

	return false
}

// SetAvgQueueTimeToCheckIn gets a reference to the given int32 and assigns it to the AvgQueueTimeToCheckIn field.
func (o *ReservationQueueInformationType) SetAvgQueueTimeToCheckIn(v int32) {
	o.AvgQueueTimeToCheckIn = &v
}

// GetAvgQueueTimeCurrentReservations returns the AvgQueueTimeCurrentReservations field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetAvgQueueTimeCurrentReservations() int32 {
	if o == nil || IsNil(o.AvgQueueTimeCurrentReservations) {
		var ret int32
		return ret
	}
	return *o.AvgQueueTimeCurrentReservations
}

// GetAvgQueueTimeCurrentReservationsOk returns a tuple with the AvgQueueTimeCurrentReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetAvgQueueTimeCurrentReservationsOk() (*int32, bool) {
	if o == nil || IsNil(o.AvgQueueTimeCurrentReservations) {
		return nil, false
	}
	return o.AvgQueueTimeCurrentReservations, true
}

// HasAvgQueueTimeCurrentReservations returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasAvgQueueTimeCurrentReservations() bool {
	if o != nil && !IsNil(o.AvgQueueTimeCurrentReservations) {
		return true
	}

	return false
}

// SetAvgQueueTimeCurrentReservations gets a reference to the given int32 and assigns it to the AvgQueueTimeCurrentReservations field.
func (o *ReservationQueueInformationType) SetAvgQueueTimeCurrentReservations(v int32) {
	o.AvgQueueTimeCurrentReservations = &v
}

// GetQueueDate returns the QueueDate field value if set, zero value otherwise.
func (o *ReservationQueueInformationType) GetQueueDate() string {
	if o == nil || IsNil(o.QueueDate) {
		var ret string
		return ret
	}
	return *o.QueueDate
}

// GetQueueDateOk returns a tuple with the QueueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueInformationType) GetQueueDateOk() (*string, bool) {
	if o == nil || IsNil(o.QueueDate) {
		return nil, false
	}
	return o.QueueDate, true
}

// HasQueueDate returns a boolean if a field has been set.
func (o *ReservationQueueInformationType) HasQueueDate() bool {
	if o != nil && !IsNil(o.QueueDate) {
		return true
	}

	return false
}

// SetQueueDate gets a reference to the given string and assigns it to the QueueDate field.
func (o *ReservationQueueInformationType) SetQueueDate(v string) {
	o.QueueDate = &v
}

func (o ReservationQueueInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueueInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.GuestTextInfo) {
		toSerialize["guestTextInfo"] = o.GuestTextInfo
	}
	if !IsNil(o.Priority) {
		toSerialize["priority"] = o.Priority
	}
	if !IsNil(o.AvgQueueTimeToCheckIn) {
		toSerialize["avgQueueTimeToCheckIn"] = o.AvgQueueTimeToCheckIn
	}
	if !IsNil(o.AvgQueueTimeCurrentReservations) {
		toSerialize["avgQueueTimeCurrentReservations"] = o.AvgQueueTimeCurrentReservations
	}
	if !IsNil(o.QueueDate) {
		toSerialize["queueDate"] = o.QueueDate
	}
	return toSerialize, nil
}

type NullableReservationQueueInformationType struct {
	value *ReservationQueueInformationType
	isSet bool
}

func (v NullableReservationQueueInformationType) Get() *ReservationQueueInformationType {
	return v.value
}

func (v *NullableReservationQueueInformationType) Set(val *ReservationQueueInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueueInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueueInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueueInformationType(val *ReservationQueueInformationType) *NullableReservationQueueInformationType {
	return &NullableReservationQueueInformationType{value: val, isSet: true}
}

func (v NullableReservationQueueInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueueInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


