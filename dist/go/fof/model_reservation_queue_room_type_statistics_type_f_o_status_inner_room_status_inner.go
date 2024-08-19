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

// checks if the ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner{}

// ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner struct for ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner
type ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner struct {
	HousekeepingRoomStatus *HousekeepingRoomStatusType `json:"housekeepingRoomStatus,omitempty"`
	// The total number of rooms for the room status.
	TotalRooms *int32 `json:"totalRooms,omitempty"`
}

// NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner() *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner {
	this := ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner{}
	return &this
}

// NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerWithDefaults instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerWithDefaults() *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner {
	this := ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner{}
	return &this
}

// GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field value if set, zero value otherwise.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) GetHousekeepingRoomStatus() HousekeepingRoomStatusType {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		var ret HousekeepingRoomStatusType
		return ret
	}
	return *o.HousekeepingRoomStatus
}

// GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool) {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		return nil, false
	}
	return o.HousekeepingRoomStatus, true
}

// HasHousekeepingRoomStatus returns a boolean if a field has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) HasHousekeepingRoomStatus() bool {
	if o != nil && !IsNil(o.HousekeepingRoomStatus) {
		return true
	}

	return false
}

// SetHousekeepingRoomStatus gets a reference to the given HousekeepingRoomStatusType and assigns it to the HousekeepingRoomStatus field.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType) {
	o.HousekeepingRoomStatus = &v
}

// GetTotalRooms returns the TotalRooms field value if set, zero value otherwise.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) GetTotalRooms() int32 {
	if o == nil || IsNil(o.TotalRooms) {
		var ret int32
		return ret
	}
	return *o.TotalRooms
}

// GetTotalRoomsOk returns a tuple with the TotalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) GetTotalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRooms) {
		return nil, false
	}
	return o.TotalRooms, true
}

// HasTotalRooms returns a boolean if a field has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) HasTotalRooms() bool {
	if o != nil && !IsNil(o.TotalRooms) {
		return true
	}

	return false
}

// SetTotalRooms gets a reference to the given int32 and assigns it to the TotalRooms field.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) SetTotalRooms(v int32) {
	o.TotalRooms = &v
}

func (o ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HousekeepingRoomStatus) {
		toSerialize["housekeepingRoomStatus"] = o.HousekeepingRoomStatus
	}
	if !IsNil(o.TotalRooms) {
		toSerialize["totalRooms"] = o.TotalRooms
	}
	return toSerialize, nil
}

type NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner struct {
	value *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner
	isSet bool
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) Get() *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner {
	return v.value
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) Set(val *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner(val *ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner {
	return &NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner{value: val, isSet: true}
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


