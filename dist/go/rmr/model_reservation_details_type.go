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

// checks if the ReservationDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationDetailsType{}

// ReservationDetailsType Reservation Details
type ReservationDetailsType struct {
	// Reservation arrival date
	Arrival *string `json:"arrival,omitempty"`
	// Reservation departure date
	Departure *string `json:"departure,omitempty"`
	// Given name, first name or names
	GivenName *string `json:"givenName,omitempty"`
	// Hotel Id
	HotelId *string `json:"hotelId,omitempty"`
	// The number of nights of the reservation.
	Nights *int32 `json:"nights,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// Unique identifier of the reservation like Reservation Name Id, Confirmation Number.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// Room Number
	RoomId *string `json:"roomId,omitempty"`
	// Family name, last name.
	Surname *string `json:"surname,omitempty"`
}

// NewReservationDetailsType instantiates a new ReservationDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationDetailsType() *ReservationDetailsType {
	this := ReservationDetailsType{}
	return &this
}

// NewReservationDetailsTypeWithDefaults instantiates a new ReservationDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationDetailsTypeWithDefaults() *ReservationDetailsType {
	this := ReservationDetailsType{}
	return &this
}

// GetArrival returns the Arrival field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetArrival() string {
	if o == nil || IsNil(o.Arrival) {
		var ret string
		return ret
	}
	return *o.Arrival
}

// GetArrivalOk returns a tuple with the Arrival field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetArrivalOk() (*string, bool) {
	if o == nil || IsNil(o.Arrival) {
		return nil, false
	}
	return o.Arrival, true
}

// HasArrival returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasArrival() bool {
	if o != nil && !IsNil(o.Arrival) {
		return true
	}

	return false
}

// SetArrival gets a reference to the given string and assigns it to the Arrival field.
func (o *ReservationDetailsType) SetArrival(v string) {
	o.Arrival = &v
}

// GetDeparture returns the Departure field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetDeparture() string {
	if o == nil || IsNil(o.Departure) {
		var ret string
		return ret
	}
	return *o.Departure
}

// GetDepartureOk returns a tuple with the Departure field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetDepartureOk() (*string, bool) {
	if o == nil || IsNil(o.Departure) {
		return nil, false
	}
	return o.Departure, true
}

// HasDeparture returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasDeparture() bool {
	if o != nil && !IsNil(o.Departure) {
		return true
	}

	return false
}

// SetDeparture gets a reference to the given string and assigns it to the Departure field.
func (o *ReservationDetailsType) SetDeparture(v string) {
	o.Departure = &v
}

// GetGivenName returns the GivenName field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetGivenName() string {
	if o == nil || IsNil(o.GivenName) {
		var ret string
		return ret
	}
	return *o.GivenName
}

// GetGivenNameOk returns a tuple with the GivenName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetGivenNameOk() (*string, bool) {
	if o == nil || IsNil(o.GivenName) {
		return nil, false
	}
	return o.GivenName, true
}

// HasGivenName returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasGivenName() bool {
	if o != nil && !IsNil(o.GivenName) {
		return true
	}

	return false
}

// SetGivenName gets a reference to the given string and assigns it to the GivenName field.
func (o *ReservationDetailsType) SetGivenName(v string) {
	o.GivenName = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReservationDetailsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNights returns the Nights field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetNights() int32 {
	if o == nil || IsNil(o.Nights) {
		var ret int32
		return ret
	}
	return *o.Nights
}

// GetNightsOk returns a tuple with the Nights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.Nights) {
		return nil, false
	}
	return o.Nights, true
}

// HasNights returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasNights() bool {
	if o != nil && !IsNil(o.Nights) {
		return true
	}

	return false
}

// SetNights gets a reference to the given int32 and assigns it to the Nights field.
func (o *ReservationDetailsType) SetNights(v int32) {
	o.Nights = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ReservationDetailsType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *ReservationDetailsType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *ReservationDetailsType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetSurname returns the Surname field value if set, zero value otherwise.
func (o *ReservationDetailsType) GetSurname() string {
	if o == nil || IsNil(o.Surname) {
		var ret string
		return ret
	}
	return *o.Surname
}

// GetSurnameOk returns a tuple with the Surname field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDetailsType) GetSurnameOk() (*string, bool) {
	if o == nil || IsNil(o.Surname) {
		return nil, false
	}
	return o.Surname, true
}

// HasSurname returns a boolean if a field has been set.
func (o *ReservationDetailsType) HasSurname() bool {
	if o != nil && !IsNil(o.Surname) {
		return true
	}

	return false
}

// SetSurname gets a reference to the given string and assigns it to the Surname field.
func (o *ReservationDetailsType) SetSurname(v string) {
	o.Surname = &v
}

func (o ReservationDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Arrival) {
		toSerialize["arrival"] = o.Arrival
	}
	if !IsNil(o.Departure) {
		toSerialize["departure"] = o.Departure
	}
	if !IsNil(o.GivenName) {
		toSerialize["givenName"] = o.GivenName
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Nights) {
		toSerialize["nights"] = o.Nights
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
	if !IsNil(o.Surname) {
		toSerialize["surname"] = o.Surname
	}
	return toSerialize, nil
}

type NullableReservationDetailsType struct {
	value *ReservationDetailsType
	isSet bool
}

func (v NullableReservationDetailsType) Get() *ReservationDetailsType {
	return v.value
}

func (v *NullableReservationDetailsType) Set(val *ReservationDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationDetailsType(val *ReservationDetailsType) *NullableReservationDetailsType {
	return &NullableReservationDetailsType{value: val, isSet: true}
}

func (v NullableReservationDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


