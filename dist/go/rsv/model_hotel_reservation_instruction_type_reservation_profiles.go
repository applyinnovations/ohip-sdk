/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the HotelReservationInstructionTypeReservationProfiles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationInstructionTypeReservationProfiles{}

// HotelReservationInstructionTypeReservationProfiles Collection of guests associated with the reservation.
type HotelReservationInstructionTypeReservationProfiles struct {
	CommissionPayoutTo *CommissionPayoutToType `json:"commissionPayoutTo,omitempty"`
	ReservationProfile []ReservationProfileType `json:"reservationProfile,omitempty"`
}

// NewHotelReservationInstructionTypeReservationProfiles instantiates a new HotelReservationInstructionTypeReservationProfiles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationInstructionTypeReservationProfiles() *HotelReservationInstructionTypeReservationProfiles {
	this := HotelReservationInstructionTypeReservationProfiles{}
	return &this
}

// NewHotelReservationInstructionTypeReservationProfilesWithDefaults instantiates a new HotelReservationInstructionTypeReservationProfiles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationInstructionTypeReservationProfilesWithDefaults() *HotelReservationInstructionTypeReservationProfiles {
	this := HotelReservationInstructionTypeReservationProfiles{}
	return &this
}

// GetCommissionPayoutTo returns the CommissionPayoutTo field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeReservationProfiles) GetCommissionPayoutTo() CommissionPayoutToType {
	if o == nil || IsNil(o.CommissionPayoutTo) {
		var ret CommissionPayoutToType
		return ret
	}
	return *o.CommissionPayoutTo
}

// GetCommissionPayoutToOk returns a tuple with the CommissionPayoutTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeReservationProfiles) GetCommissionPayoutToOk() (*CommissionPayoutToType, bool) {
	if o == nil || IsNil(o.CommissionPayoutTo) {
		return nil, false
	}
	return o.CommissionPayoutTo, true
}

// HasCommissionPayoutTo returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeReservationProfiles) HasCommissionPayoutTo() bool {
	if o != nil && !IsNil(o.CommissionPayoutTo) {
		return true
	}

	return false
}

// SetCommissionPayoutTo gets a reference to the given CommissionPayoutToType and assigns it to the CommissionPayoutTo field.
func (o *HotelReservationInstructionTypeReservationProfiles) SetCommissionPayoutTo(v CommissionPayoutToType) {
	o.CommissionPayoutTo = &v
}

// GetReservationProfile returns the ReservationProfile field value if set, zero value otherwise.
func (o *HotelReservationInstructionTypeReservationProfiles) GetReservationProfile() []ReservationProfileType {
	if o == nil || IsNil(o.ReservationProfile) {
		var ret []ReservationProfileType
		return ret
	}
	return o.ReservationProfile
}

// GetReservationProfileOk returns a tuple with the ReservationProfile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationInstructionTypeReservationProfiles) GetReservationProfileOk() ([]ReservationProfileType, bool) {
	if o == nil || IsNil(o.ReservationProfile) {
		return nil, false
	}
	return o.ReservationProfile, true
}

// HasReservationProfile returns a boolean if a field has been set.
func (o *HotelReservationInstructionTypeReservationProfiles) HasReservationProfile() bool {
	if o != nil && !IsNil(o.ReservationProfile) {
		return true
	}

	return false
}

// SetReservationProfile gets a reference to the given []ReservationProfileType and assigns it to the ReservationProfile field.
func (o *HotelReservationInstructionTypeReservationProfiles) SetReservationProfile(v []ReservationProfileType) {
	o.ReservationProfile = v
}

func (o HotelReservationInstructionTypeReservationProfiles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationInstructionTypeReservationProfiles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionPayoutTo) {
		toSerialize["commissionPayoutTo"] = o.CommissionPayoutTo
	}
	if !IsNil(o.ReservationProfile) {
		toSerialize["reservationProfile"] = o.ReservationProfile
	}
	return toSerialize, nil
}

type NullableHotelReservationInstructionTypeReservationProfiles struct {
	value *HotelReservationInstructionTypeReservationProfiles
	isSet bool
}

func (v NullableHotelReservationInstructionTypeReservationProfiles) Get() *HotelReservationInstructionTypeReservationProfiles {
	return v.value
}

func (v *NullableHotelReservationInstructionTypeReservationProfiles) Set(val *HotelReservationInstructionTypeReservationProfiles) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationInstructionTypeReservationProfiles) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationInstructionTypeReservationProfiles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationInstructionTypeReservationProfiles(val *HotelReservationInstructionTypeReservationProfiles) *NullableHotelReservationInstructionTypeReservationProfiles {
	return &NullableHotelReservationInstructionTypeReservationProfiles{value: val, isSet: true}
}

func (v NullableHotelReservationInstructionTypeReservationProfiles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationInstructionTypeReservationProfiles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


