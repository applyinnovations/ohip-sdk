/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the RoomingListReservationsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomingListReservationsType{}

// RoomingListReservationsType If anyone or more reservations failed, then it specifies the associated error messages.
type RoomingListReservationsType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// A collection of Block Rooming List Reservations.
	Reservation []RoomingListReservationType `json:"reservation,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewRoomingListReservationsType instantiates a new RoomingListReservationsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomingListReservationsType() *RoomingListReservationsType {
	this := RoomingListReservationsType{}
	return &this
}

// NewRoomingListReservationsTypeWithDefaults instantiates a new RoomingListReservationsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomingListReservationsTypeWithDefaults() *RoomingListReservationsType {
	this := RoomingListReservationsType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *RoomingListReservationsType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationsType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *RoomingListReservationsType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *RoomingListReservationsType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *RoomingListReservationsType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationsType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *RoomingListReservationsType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *RoomingListReservationsType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *RoomingListReservationsType) GetReservation() []RoomingListReservationType {
	if o == nil || IsNil(o.Reservation) {
		var ret []RoomingListReservationType
		return ret
	}
	return o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationsType) GetReservationOk() ([]RoomingListReservationType, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *RoomingListReservationsType) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given []RoomingListReservationType and assigns it to the Reservation field.
func (o *RoomingListReservationsType) SetReservation(v []RoomingListReservationType) {
	o.Reservation = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *RoomingListReservationsType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationsType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *RoomingListReservationsType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *RoomingListReservationsType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o RoomingListReservationsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomingListReservationsType) ToMap() (map[string]interface{}, error) {
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

type NullableRoomingListReservationsType struct {
	value *RoomingListReservationsType
	isSet bool
}

func (v NullableRoomingListReservationsType) Get() *RoomingListReservationsType {
	return v.value
}

func (v *NullableRoomingListReservationsType) Set(val *RoomingListReservationsType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomingListReservationsType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomingListReservationsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomingListReservationsType(val *RoomingListReservationsType) *NullableRoomingListReservationsType {
	return &NullableRoomingListReservationsType{value: val, isSet: true}
}

func (v NullableRoomingListReservationsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomingListReservationsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


