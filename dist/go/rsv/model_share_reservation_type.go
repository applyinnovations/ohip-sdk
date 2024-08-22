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

// checks if the ShareReservationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ShareReservationType{}

// ShareReservationType struct for ShareReservationType
type ShareReservationType struct {
	// Defines room rate information on a daily basis.
	DailyRates []DailyRateType `json:"dailyRates,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
}

// NewShareReservationType instantiates a new ShareReservationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewShareReservationType() *ShareReservationType {
	this := ShareReservationType{}
	return &this
}

// NewShareReservationTypeWithDefaults instantiates a new ShareReservationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewShareReservationTypeWithDefaults() *ShareReservationType {
	this := ShareReservationType{}
	return &this
}

// GetDailyRates returns the DailyRates field value if set, zero value otherwise.
func (o *ShareReservationType) GetDailyRates() []DailyRateType {
	if o == nil || IsNil(o.DailyRates) {
		var ret []DailyRateType
		return ret
	}
	return o.DailyRates
}

// GetDailyRatesOk returns a tuple with the DailyRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShareReservationType) GetDailyRatesOk() ([]DailyRateType, bool) {
	if o == nil || IsNil(o.DailyRates) {
		return nil, false
	}
	return o.DailyRates, true
}

// HasDailyRates returns a boolean if a field has been set.
func (o *ShareReservationType) HasDailyRates() bool {
	if o != nil && !IsNil(o.DailyRates) {
		return true
	}

	return false
}

// SetDailyRates gets a reference to the given []DailyRateType and assigns it to the DailyRates field.
func (o *ShareReservationType) SetDailyRates(v []DailyRateType) {
	o.DailyRates = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *ShareReservationType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShareReservationType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *ShareReservationType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *ShareReservationType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

func (o ShareReservationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ShareReservationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DailyRates) {
		toSerialize["dailyRates"] = o.DailyRates
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	return toSerialize, nil
}

type NullableShareReservationType struct {
	value *ShareReservationType
	isSet bool
}

func (v NullableShareReservationType) Get() *ShareReservationType {
	return v.value
}

func (v *NullableShareReservationType) Set(val *ShareReservationType) {
	v.value = val
	v.isSet = true
}

func (v NullableShareReservationType) IsSet() bool {
	return v.isSet
}

func (v *NullableShareReservationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableShareReservationType(val *ShareReservationType) *NullableShareReservationType {
	return &NullableShareReservationType{value: val, isSet: true}
}

func (v NullableShareReservationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableShareReservationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


