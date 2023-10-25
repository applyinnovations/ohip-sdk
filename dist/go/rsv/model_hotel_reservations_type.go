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

// checks if the HotelReservationsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationsType{}

// HotelReservationsType A collection of Reservation objects and Unique IDs of Reservation.
type HotelReservationsType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// A collection of Reservations.
	Reservation []HotelReservationType `json:"reservation,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewHotelReservationsType instantiates a new HotelReservationsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationsType() *HotelReservationsType {
	this := HotelReservationsType{}
	return &this
}

// NewHotelReservationsTypeWithDefaults instantiates a new HotelReservationsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationsTypeWithDefaults() *HotelReservationsType {
	this := HotelReservationsType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *HotelReservationsType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *HotelReservationsType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *HotelReservationsType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *HotelReservationsType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *HotelReservationsType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *HotelReservationsType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *HotelReservationsType) GetReservation() []HotelReservationType {
	if o == nil || IsNil(o.Reservation) {
		var ret []HotelReservationType
		return ret
	}
	return o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsType) GetReservationOk() ([]HotelReservationType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *HotelReservationsType) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given []HotelReservationType and assigns it to the Reservation field.
func (o *HotelReservationsType) SetReservation(v []HotelReservationType) {
	o.Reservation = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *HotelReservationsType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationsType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *HotelReservationsType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *HotelReservationsType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o HotelReservationsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableHotelReservationsType struct {
	value *HotelReservationsType
	isSet bool
}

func (v NullableHotelReservationsType) Get() *HotelReservationsType {
	return v.value
}

func (v *NullableHotelReservationsType) Set(val *HotelReservationsType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationsType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationsType(val *HotelReservationsType) *NullableHotelReservationsType {
	return &NullableHotelReservationsType{value: val, isSet: true}
}

func (v NullableHotelReservationsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


