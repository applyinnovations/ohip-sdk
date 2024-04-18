/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ReservationArrivalInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationArrivalInfoType{}

// ReservationArrivalInfoType Type describing information regarding the arrival of a reservation.
type ReservationArrivalInfoType struct {
	// The time at which the guest arrives at the hotel.
	ArrivalTime *string `json:"arrivalTime,omitempty"`
}

// NewReservationArrivalInfoType instantiates a new ReservationArrivalInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationArrivalInfoType() *ReservationArrivalInfoType {
	this := ReservationArrivalInfoType{}
	return &this
}

// NewReservationArrivalInfoTypeWithDefaults instantiates a new ReservationArrivalInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationArrivalInfoTypeWithDefaults() *ReservationArrivalInfoType {
	this := ReservationArrivalInfoType{}
	return &this
}

// GetArrivalTime returns the ArrivalTime field value if set, zero value otherwise.
func (o *ReservationArrivalInfoType) GetArrivalTime() string {
	if o == nil || IsNil(o.ArrivalTime) {
		var ret string
		return ret
	}
	return *o.ArrivalTime
}

// GetArrivalTimeOk returns a tuple with the ArrivalTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationArrivalInfoType) GetArrivalTimeOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalTime) {
		return nil, false
	}
	return o.ArrivalTime, true
}

// HasArrivalTime returns a boolean if a field has been set.
func (o *ReservationArrivalInfoType) HasArrivalTime() bool {
	if o != nil && !IsNil(o.ArrivalTime) {
		return true
	}

	return false
}

// SetArrivalTime gets a reference to the given string and assigns it to the ArrivalTime field.
func (o *ReservationArrivalInfoType) SetArrivalTime(v string) {
	o.ArrivalTime = &v
}

func (o ReservationArrivalInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationArrivalInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalTime) {
		toSerialize["arrivalTime"] = o.ArrivalTime
	}
	return toSerialize, nil
}

type NullableReservationArrivalInfoType struct {
	value *ReservationArrivalInfoType
	isSet bool
}

func (v NullableReservationArrivalInfoType) Get() *ReservationArrivalInfoType {
	return v.value
}

func (v *NullableReservationArrivalInfoType) Set(val *ReservationArrivalInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationArrivalInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationArrivalInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationArrivalInfoType(val *ReservationArrivalInfoType) *NullableReservationArrivalInfoType {
	return &NullableReservationArrivalInfoType{value: val, isSet: true}
}

func (v NullableReservationArrivalInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationArrivalInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

