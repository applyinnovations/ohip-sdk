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

// checks if the HotelReservationsIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationsIDType{}

// HotelReservationsIDType List of Reservation Unique identifiers to represent multiple reservations with each reservation's one unique id.
type HotelReservationsIDType struct {
	// All reservation ids in the list must belong to this property.
	HotelId *string `json:"hotelId,omitempty"`
	// Unique identifier for a reservation.
	ReservationId []ReservationId `json:"reservationId,omitempty"`
}

// NewHotelReservationsIDType instantiates a new HotelReservationsIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationsIDType() *HotelReservationsIDType {
	this := HotelReservationsIDType{}
	return &this
}

// NewHotelReservationsIDTypeWithDefaults instantiates a new HotelReservationsIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationsIDTypeWithDefaults() *HotelReservationsIDType {
	this := HotelReservationsIDType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelReservationsIDType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsIDType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelReservationsIDType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelReservationsIDType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *HotelReservationsIDType) GetReservationId() []ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret []ReservationId
		return ret
	}
	return o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsIDType) GetReservationIdOk() ([]ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *HotelReservationsIDType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given []ReservationId and assigns it to the ReservationId field.
func (o *HotelReservationsIDType) SetReservationId(v []ReservationId) {
	o.ReservationId = v
}

func (o HotelReservationsIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationsIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	return toSerialize, nil
}

type NullableHotelReservationsIDType struct {
	value *HotelReservationsIDType
	isSet bool
}

func (v NullableHotelReservationsIDType) Get() *HotelReservationsIDType {
	return v.value
}

func (v *NullableHotelReservationsIDType) Set(val *HotelReservationsIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationsIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationsIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationsIDType(val *HotelReservationsIDType) *NullableHotelReservationsIDType {
	return &NullableHotelReservationsIDType{value: val, isSet: true}
}

func (v NullableHotelReservationsIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationsIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

