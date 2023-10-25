/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the ReservationRotationPointsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationRotationPointsType{}

// ReservationRotationPointsType Individual reservation and associated rotation points information
type ReservationRotationPointsType struct {
	// Reservation arrival date
	ArrivalDate *string `json:"arrivalDate,omitempty"`
	// Reservation departure date
	DepartureDate *string `json:"departureDate,omitempty"`
	// The guest name on the reservation.
	GuestName *string `json:"guestName,omitempty"`
	// The number of nights of the reservation.
	Nights *int32 `json:"nights,omitempty"`
	// Whether rotation points for the room have been adjusted.
	PointsAdjusted *bool `json:"pointsAdjusted,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// Unique identifier of the reservation like Reservation Name Id, Confirmation Number.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// Room Number
	RoomId *string `json:"roomId,omitempty"`
	// Total rotation points for the room.
	TotalPoints *float32 `json:"totalPoints,omitempty"`
}

// NewReservationRotationPointsType instantiates a new ReservationRotationPointsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationRotationPointsType() *ReservationRotationPointsType {
	this := ReservationRotationPointsType{}
	return &this
}

// NewReservationRotationPointsTypeWithDefaults instantiates a new ReservationRotationPointsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationRotationPointsTypeWithDefaults() *ReservationRotationPointsType {
	this := ReservationRotationPointsType{}
	return &this
}

// GetArrivalDate returns the ArrivalDate field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetArrivalDate() string {
	if o == nil || IsNil(o.ArrivalDate) {
		var ret string
		return ret
	}
	return *o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetArrivalDateOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalDate) {
		return nil, false
	}
	return o.ArrivalDate, true
}

// HasArrivalDate returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasArrivalDate() bool {
	if o != nil && !IsNil(o.ArrivalDate) {
		return true
	}

	return false
}

// SetArrivalDate gets a reference to the given string and assigns it to the ArrivalDate field.
func (o *ReservationRotationPointsType) SetArrivalDate(v string) {
	o.ArrivalDate = &v
}

// GetDepartureDate returns the DepartureDate field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetDepartureDate() string {
	if o == nil || IsNil(o.DepartureDate) {
		var ret string
		return ret
	}
	return *o.DepartureDate
}

// GetDepartureDateOk returns a tuple with the DepartureDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetDepartureDateOk() (*string, bool) {
	if o == nil || IsNil(o.DepartureDate) {
		return nil, false
	}
	return o.DepartureDate, true
}

// HasDepartureDate returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasDepartureDate() bool {
	if o != nil && !IsNil(o.DepartureDate) {
		return true
	}

	return false
}

// SetDepartureDate gets a reference to the given string and assigns it to the DepartureDate field.
func (o *ReservationRotationPointsType) SetDepartureDate(v string) {
	o.DepartureDate = &v
}

// GetGuestName returns the GuestName field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetGuestName() string {
	if o == nil || IsNil(o.GuestName) {
		var ret string
		return ret
	}
	return *o.GuestName
}

// GetGuestNameOk returns a tuple with the GuestName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetGuestNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestName) {
		return nil, false
	}
	return o.GuestName, true
}

// HasGuestName returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasGuestName() bool {
	if o != nil && !IsNil(o.GuestName) {
		return true
	}

	return false
}

// SetGuestName gets a reference to the given string and assigns it to the GuestName field.
func (o *ReservationRotationPointsType) SetGuestName(v string) {
	o.GuestName = &v
}

// GetNights returns the Nights field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetNights() int32 {
	if o == nil || IsNil(o.Nights) {
		var ret int32
		return ret
	}
	return *o.Nights
}

// GetNightsOk returns a tuple with the Nights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.Nights) {
		return nil, false
	}
	return o.Nights, true
}

// HasNights returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasNights() bool {
	if o != nil && !IsNil(o.Nights) {
		return true
	}

	return false
}

// SetNights gets a reference to the given int32 and assigns it to the Nights field.
func (o *ReservationRotationPointsType) SetNights(v int32) {
	o.Nights = &v
}

// GetPointsAdjusted returns the PointsAdjusted field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetPointsAdjusted() bool {
	if o == nil || IsNil(o.PointsAdjusted) {
		var ret bool
		return ret
	}
	return *o.PointsAdjusted
}

// GetPointsAdjustedOk returns a tuple with the PointsAdjusted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetPointsAdjustedOk() (*bool, bool) {
	if o == nil || IsNil(o.PointsAdjusted) {
		return nil, false
	}
	return o.PointsAdjusted, true
}

// HasPointsAdjusted returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasPointsAdjusted() bool {
	if o != nil && !IsNil(o.PointsAdjusted) {
		return true
	}

	return false
}

// SetPointsAdjusted gets a reference to the given bool and assigns it to the PointsAdjusted field.
func (o *ReservationRotationPointsType) SetPointsAdjusted(v bool) {
	o.PointsAdjusted = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ReservationRotationPointsType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *ReservationRotationPointsType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *ReservationRotationPointsType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetTotalPoints returns the TotalPoints field value if set, zero value otherwise.
func (o *ReservationRotationPointsType) GetTotalPoints() float32 {
	if o == nil || IsNil(o.TotalPoints) {
		var ret float32
		return ret
	}
	return *o.TotalPoints
}

// GetTotalPointsOk returns a tuple with the TotalPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationRotationPointsType) GetTotalPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalPoints) {
		return nil, false
	}
	return o.TotalPoints, true
}

// HasTotalPoints returns a boolean if a field has been set.
func (o *ReservationRotationPointsType) HasTotalPoints() bool {
	if o != nil && !IsNil(o.TotalPoints) {
		return true
	}

	return false
}

// SetTotalPoints gets a reference to the given float32 and assigns it to the TotalPoints field.
func (o *ReservationRotationPointsType) SetTotalPoints(v float32) {
	o.TotalPoints = &v
}

func (o ReservationRotationPointsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationRotationPointsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalDate) {
		toSerialize["arrivalDate"] = o.ArrivalDate
	}
	if !IsNil(o.DepartureDate) {
		toSerialize["departureDate"] = o.DepartureDate
	}
	if !IsNil(o.GuestName) {
		toSerialize["guestName"] = o.GuestName
	}
	if !IsNil(o.Nights) {
		toSerialize["nights"] = o.Nights
	}
	if !IsNil(o.PointsAdjusted) {
		toSerialize["pointsAdjusted"] = o.PointsAdjusted
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.TotalPoints) {
		toSerialize["totalPoints"] = o.TotalPoints
	}
	return toSerialize, nil
}

type NullableReservationRotationPointsType struct {
	value *ReservationRotationPointsType
	isSet bool
}

func (v NullableReservationRotationPointsType) Get() *ReservationRotationPointsType {
	return v.value
}

func (v *NullableReservationRotationPointsType) Set(val *ReservationRotationPointsType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationRotationPointsType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationRotationPointsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationRotationPointsType(val *ReservationRotationPointsType) *NullableReservationRotationPointsType {
	return &NullableReservationRotationPointsType{value: val, isSet: true}
}

func (v NullableReservationRotationPointsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationRotationPointsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


