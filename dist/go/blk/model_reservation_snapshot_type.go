/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ReservationSnapshotType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationSnapshotType{}

// ReservationSnapshotType This is used when changing block reservations in bulk.
type ReservationSnapshotType struct {
	HotelReservation *HotelReservationType `json:"hotelReservation,omitempty"`
	// A routing info object can either be of type Folio OR of type Room with its corresponding instructions.
	RoutingInstructions []RoutingInfoType `json:"routingInstructions,omitempty"`
}

// NewReservationSnapshotType instantiates a new ReservationSnapshotType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationSnapshotType() *ReservationSnapshotType {
	this := ReservationSnapshotType{}
	return &this
}

// NewReservationSnapshotTypeWithDefaults instantiates a new ReservationSnapshotType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationSnapshotTypeWithDefaults() *ReservationSnapshotType {
	this := ReservationSnapshotType{}
	return &this
}

// GetHotelReservation returns the HotelReservation field value if set, zero value otherwise.
func (o *ReservationSnapshotType) GetHotelReservation() HotelReservationType {
	if o == nil || IsNil(o.HotelReservation) {
		var ret HotelReservationType
		return ret
	}
	return *o.HotelReservation
}

// GetHotelReservationOk returns a tuple with the HotelReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationSnapshotType) GetHotelReservationOk() (*HotelReservationType, bool) {
	if o == nil || IsNil(o.HotelReservation) {
		return nil, false
	}
	return o.HotelReservation, true
}

// HasHotelReservation returns a boolean if a field has been set.
func (o *ReservationSnapshotType) HasHotelReservation() bool {
	if o != nil && !IsNil(o.HotelReservation) {
		return true
	}

	return false
}

// SetHotelReservation gets a reference to the given HotelReservationType and assigns it to the HotelReservation field.
func (o *ReservationSnapshotType) SetHotelReservation(v HotelReservationType) {
	o.HotelReservation = &v
}

// GetRoutingInstructions returns the RoutingInstructions field value if set, zero value otherwise.
func (o *ReservationSnapshotType) GetRoutingInstructions() []RoutingInfoType {
	if o == nil || IsNil(o.RoutingInstructions) {
		var ret []RoutingInfoType
		return ret
	}
	return o.RoutingInstructions
}

// GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationSnapshotType) GetRoutingInstructionsOk() ([]RoutingInfoType, bool) {
	if o == nil || IsNil(o.RoutingInstructions) {
		return nil, false
	}
	return o.RoutingInstructions, true
}

// HasRoutingInstructions returns a boolean if a field has been set.
func (o *ReservationSnapshotType) HasRoutingInstructions() bool {
	if o != nil && !IsNil(o.RoutingInstructions) {
		return true
	}

	return false
}

// SetRoutingInstructions gets a reference to the given []RoutingInfoType and assigns it to the RoutingInstructions field.
func (o *ReservationSnapshotType) SetRoutingInstructions(v []RoutingInfoType) {
	o.RoutingInstructions = v
}

func (o ReservationSnapshotType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationSnapshotType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelReservation) {
		toSerialize["hotelReservation"] = o.HotelReservation
	}
	if !IsNil(o.RoutingInstructions) {
		toSerialize["routingInstructions"] = o.RoutingInstructions
	}
	return toSerialize, nil
}

type NullableReservationSnapshotType struct {
	value *ReservationSnapshotType
	isSet bool
}

func (v NullableReservationSnapshotType) Get() *ReservationSnapshotType {
	return v.value
}

func (v *NullableReservationSnapshotType) Set(val *ReservationSnapshotType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationSnapshotType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationSnapshotType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationSnapshotType(val *ReservationSnapshotType) *NullableReservationSnapshotType {
	return &NullableReservationSnapshotType{value: val, isSet: true}
}

func (v NullableReservationSnapshotType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationSnapshotType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


