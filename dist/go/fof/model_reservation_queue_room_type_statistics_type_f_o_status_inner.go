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

// checks if the ReservationQueueRoomTypeStatisticsTypeFOStatusInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueueRoomTypeStatisticsTypeFOStatusInner{}

// ReservationQueueRoomTypeStatisticsTypeFOStatusInner struct for ReservationQueueRoomTypeStatisticsTypeFOStatusInner
type ReservationQueueRoomTypeStatisticsTypeFOStatusInner struct {
	FrontOfficeStatus *FrontOfficeRoomStatusType `json:"frontOfficeStatus,omitempty"`
	// The total number of rooms for the room type grouped by their Room Status i.e Clean, Dirty etc..
	RoomStatus []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner `json:"roomStatus,omitempty"`
	// The total number of rooms for the Front Office status.
	TotalRooms *int32 `json:"totalRooms,omitempty"`
}

// NewReservationQueueRoomTypeStatisticsTypeFOStatusInner instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueueRoomTypeStatisticsTypeFOStatusInner() *ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
	this := ReservationQueueRoomTypeStatisticsTypeFOStatusInner{}
	return &this
}

// NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerWithDefaults instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerWithDefaults() *ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
	this := ReservationQueueRoomTypeStatisticsTypeFOStatusInner{}
	return &this
}

// GetFrontOfficeStatus returns the FrontOfficeStatus field value if set, zero value otherwise.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetFrontOfficeStatus() FrontOfficeRoomStatusType {
	if o == nil || IsNil(o.FrontOfficeStatus) {
		var ret FrontOfficeRoomStatusType
		return ret
	}
	return *o.FrontOfficeStatus
}

// GetFrontOfficeStatusOk returns a tuple with the FrontOfficeStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetFrontOfficeStatusOk() (*FrontOfficeRoomStatusType, bool) {
	if o == nil || IsNil(o.FrontOfficeStatus) {
		return nil, false
	}
	return o.FrontOfficeStatus, true
}

// HasFrontOfficeStatus returns a boolean if a field has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasFrontOfficeStatus() bool {
	if o != nil && !IsNil(o.FrontOfficeStatus) {
		return true
	}

	return false
}

// SetFrontOfficeStatus gets a reference to the given FrontOfficeRoomStatusType and assigns it to the FrontOfficeStatus field.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetFrontOfficeStatus(v FrontOfficeRoomStatusType) {
	o.FrontOfficeStatus = &v
}

// GetRoomStatus returns the RoomStatus field value if set, zero value otherwise.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetRoomStatus() []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner {
	if o == nil || IsNil(o.RoomStatus) {
		var ret []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner
		return ret
	}
	return o.RoomStatus
}

// GetRoomStatusOk returns a tuple with the RoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetRoomStatusOk() ([]ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner, bool) {
	if o == nil || IsNil(o.RoomStatus) {
		return nil, false
	}
	return o.RoomStatus, true
}

// HasRoomStatus returns a boolean if a field has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasRoomStatus() bool {
	if o != nil && !IsNil(o.RoomStatus) {
		return true
	}

	return false
}

// SetRoomStatus gets a reference to the given []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner and assigns it to the RoomStatus field.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetRoomStatus(v []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner) {
	o.RoomStatus = v
}

// GetTotalRooms returns the TotalRooms field value if set, zero value otherwise.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetTotalRooms() int32 {
	if o == nil || IsNil(o.TotalRooms) {
		var ret int32
		return ret
	}
	return *o.TotalRooms
}

// GetTotalRoomsOk returns a tuple with the TotalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetTotalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRooms) {
		return nil, false
	}
	return o.TotalRooms, true
}

// HasTotalRooms returns a boolean if a field has been set.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasTotalRooms() bool {
	if o != nil && !IsNil(o.TotalRooms) {
		return true
	}

	return false
}

// SetTotalRooms gets a reference to the given int32 and assigns it to the TotalRooms field.
func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetTotalRooms(v int32) {
	o.TotalRooms = &v
}

func (o ReservationQueueRoomTypeStatisticsTypeFOStatusInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueueRoomTypeStatisticsTypeFOStatusInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FrontOfficeStatus) {
		toSerialize["frontOfficeStatus"] = o.FrontOfficeStatus
	}
	if !IsNil(o.RoomStatus) {
		toSerialize["roomStatus"] = o.RoomStatus
	}
	if !IsNil(o.TotalRooms) {
		toSerialize["totalRooms"] = o.TotalRooms
	}
	return toSerialize, nil
}

type NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner struct {
	value *ReservationQueueRoomTypeStatisticsTypeFOStatusInner
	isSet bool
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) Get() *ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
	return v.value
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) Set(val *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueueRoomTypeStatisticsTypeFOStatusInner(val *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner {
	return &NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner{value: val, isSet: true}
}

func (v NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueueRoomTypeStatisticsTypeFOStatusInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


