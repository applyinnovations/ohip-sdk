/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the StayDetailSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StayDetailSummaryType{}

// StayDetailSummaryType Contains stay related information such as reservation nights,room nights,arrival rooms,cancel rooms,etc.
type StayDetailSummaryType struct {
	ArrivalRooms *int32 `json:"arrivalRooms,omitempty"`
	CancelRooms *int32 `json:"cancelRooms,omitempty"`
	DayUseRooms *int32 `json:"dayUseRooms,omitempty"`
	NoShowRooms *int32 `json:"noShowRooms,omitempty"`
	RoomNights *int32 `json:"roomNights,omitempty"`
	StayReservation *StayReservationType `json:"stayReservation,omitempty"`
	// Total Booked Stays/Reservations for Profile
	TotalBooked *int32 `json:"totalBooked,omitempty"`
	// Total Stayed Reservations for Profile
	TotalStays *int32 `json:"totalStays,omitempty"`
}

// NewStayDetailSummaryType instantiates a new StayDetailSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStayDetailSummaryType() *StayDetailSummaryType {
	this := StayDetailSummaryType{}
	return &this
}

// NewStayDetailSummaryTypeWithDefaults instantiates a new StayDetailSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStayDetailSummaryTypeWithDefaults() *StayDetailSummaryType {
	this := StayDetailSummaryType{}
	return &this
}

// GetArrivalRooms returns the ArrivalRooms field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetArrivalRooms() int32 {
	if o == nil || IsNil(o.ArrivalRooms) {
		var ret int32
		return ret
	}
	return *o.ArrivalRooms
}

// GetArrivalRoomsOk returns a tuple with the ArrivalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetArrivalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.ArrivalRooms) {
		return nil, false
	}
	return o.ArrivalRooms, true
}

// HasArrivalRooms returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasArrivalRooms() bool {
	if o != nil && !IsNil(o.ArrivalRooms) {
		return true
	}

	return false
}

// SetArrivalRooms gets a reference to the given int32 and assigns it to the ArrivalRooms field.
func (o *StayDetailSummaryType) SetArrivalRooms(v int32) {
	o.ArrivalRooms = &v
}

// GetCancelRooms returns the CancelRooms field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetCancelRooms() int32 {
	if o == nil || IsNil(o.CancelRooms) {
		var ret int32
		return ret
	}
	return *o.CancelRooms
}

// GetCancelRoomsOk returns a tuple with the CancelRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetCancelRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.CancelRooms) {
		return nil, false
	}
	return o.CancelRooms, true
}

// HasCancelRooms returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasCancelRooms() bool {
	if o != nil && !IsNil(o.CancelRooms) {
		return true
	}

	return false
}

// SetCancelRooms gets a reference to the given int32 and assigns it to the CancelRooms field.
func (o *StayDetailSummaryType) SetCancelRooms(v int32) {
	o.CancelRooms = &v
}

// GetDayUseRooms returns the DayUseRooms field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetDayUseRooms() int32 {
	if o == nil || IsNil(o.DayUseRooms) {
		var ret int32
		return ret
	}
	return *o.DayUseRooms
}

// GetDayUseRoomsOk returns a tuple with the DayUseRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetDayUseRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.DayUseRooms) {
		return nil, false
	}
	return o.DayUseRooms, true
}

// HasDayUseRooms returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasDayUseRooms() bool {
	if o != nil && !IsNil(o.DayUseRooms) {
		return true
	}

	return false
}

// SetDayUseRooms gets a reference to the given int32 and assigns it to the DayUseRooms field.
func (o *StayDetailSummaryType) SetDayUseRooms(v int32) {
	o.DayUseRooms = &v
}

// GetNoShowRooms returns the NoShowRooms field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetNoShowRooms() int32 {
	if o == nil || IsNil(o.NoShowRooms) {
		var ret int32
		return ret
	}
	return *o.NoShowRooms
}

// GetNoShowRoomsOk returns a tuple with the NoShowRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetNoShowRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NoShowRooms) {
		return nil, false
	}
	return o.NoShowRooms, true
}

// HasNoShowRooms returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasNoShowRooms() bool {
	if o != nil && !IsNil(o.NoShowRooms) {
		return true
	}

	return false
}

// SetNoShowRooms gets a reference to the given int32 and assigns it to the NoShowRooms field.
func (o *StayDetailSummaryType) SetNoShowRooms(v int32) {
	o.NoShowRooms = &v
}

// GetRoomNights returns the RoomNights field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetRoomNights() int32 {
	if o == nil || IsNil(o.RoomNights) {
		var ret int32
		return ret
	}
	return *o.RoomNights
}

// GetRoomNightsOk returns a tuple with the RoomNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetRoomNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomNights) {
		return nil, false
	}
	return o.RoomNights, true
}

// HasRoomNights returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasRoomNights() bool {
	if o != nil && !IsNil(o.RoomNights) {
		return true
	}

	return false
}

// SetRoomNights gets a reference to the given int32 and assigns it to the RoomNights field.
func (o *StayDetailSummaryType) SetRoomNights(v int32) {
	o.RoomNights = &v
}

// GetStayReservation returns the StayReservation field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetStayReservation() StayReservationType {
	if o == nil || IsNil(o.StayReservation) {
		var ret StayReservationType
		return ret
	}
	return *o.StayReservation
}

// GetStayReservationOk returns a tuple with the StayReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetStayReservationOk() (*StayReservationType, bool) {
	if o == nil || IsNil(o.StayReservation) {
		return nil, false
	}
	return o.StayReservation, true
}

// HasStayReservation returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasStayReservation() bool {
	if o != nil && !IsNil(o.StayReservation) {
		return true
	}

	return false
}

// SetStayReservation gets a reference to the given StayReservationType and assigns it to the StayReservation field.
func (o *StayDetailSummaryType) SetStayReservation(v StayReservationType) {
	o.StayReservation = &v
}

// GetTotalBooked returns the TotalBooked field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetTotalBooked() int32 {
	if o == nil || IsNil(o.TotalBooked) {
		var ret int32
		return ret
	}
	return *o.TotalBooked
}

// GetTotalBookedOk returns a tuple with the TotalBooked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetTotalBookedOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalBooked) {
		return nil, false
	}
	return o.TotalBooked, true
}

// HasTotalBooked returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasTotalBooked() bool {
	if o != nil && !IsNil(o.TotalBooked) {
		return true
	}

	return false
}

// SetTotalBooked gets a reference to the given int32 and assigns it to the TotalBooked field.
func (o *StayDetailSummaryType) SetTotalBooked(v int32) {
	o.TotalBooked = &v
}

// GetTotalStays returns the TotalStays field value if set, zero value otherwise.
func (o *StayDetailSummaryType) GetTotalStays() int32 {
	if o == nil || IsNil(o.TotalStays) {
		var ret int32
		return ret
	}
	return *o.TotalStays
}

// GetTotalStaysOk returns a tuple with the TotalStays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayDetailSummaryType) GetTotalStaysOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalStays) {
		return nil, false
	}
	return o.TotalStays, true
}

// HasTotalStays returns a boolean if a field has been set.
func (o *StayDetailSummaryType) HasTotalStays() bool {
	if o != nil && !IsNil(o.TotalStays) {
		return true
	}

	return false
}

// SetTotalStays gets a reference to the given int32 and assigns it to the TotalStays field.
func (o *StayDetailSummaryType) SetTotalStays(v int32) {
	o.TotalStays = &v
}

func (o StayDetailSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StayDetailSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalRooms) {
		toSerialize["arrivalRooms"] = o.ArrivalRooms
	}
	if !IsNil(o.CancelRooms) {
		toSerialize["cancelRooms"] = o.CancelRooms
	}
	if !IsNil(o.DayUseRooms) {
		toSerialize["dayUseRooms"] = o.DayUseRooms
	}
	if !IsNil(o.NoShowRooms) {
		toSerialize["noShowRooms"] = o.NoShowRooms
	}
	if !IsNil(o.RoomNights) {
		toSerialize["roomNights"] = o.RoomNights
	}
	if !IsNil(o.StayReservation) {
		toSerialize["stayReservation"] = o.StayReservation
	}
	if !IsNil(o.TotalBooked) {
		toSerialize["totalBooked"] = o.TotalBooked
	}
	if !IsNil(o.TotalStays) {
		toSerialize["totalStays"] = o.TotalStays
	}
	return toSerialize, nil
}

type NullableStayDetailSummaryType struct {
	value *StayDetailSummaryType
	isSet bool
}

func (v NullableStayDetailSummaryType) Get() *StayDetailSummaryType {
	return v.value
}

func (v *NullableStayDetailSummaryType) Set(val *StayDetailSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableStayDetailSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableStayDetailSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStayDetailSummaryType(val *StayDetailSummaryType) *NullableStayDetailSummaryType {
	return &NullableStayDetailSummaryType{value: val, isSet: true}
}

func (v NullableStayDetailSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStayDetailSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

