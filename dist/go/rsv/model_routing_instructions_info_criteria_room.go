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

// checks if the RoutingInstructionsInfoCriteriaRoom type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutingInstructionsInfoCriteriaRoom{}

// RoutingInstructionsInfoCriteriaRoom Room routing type.
type RoutingInstructionsInfoCriteriaRoom struct {
	// Display Name for the guest.
	GuestDisplayName *string `json:"guestDisplayName,omitempty"`
	GuestNameId *UniqueIDType `json:"guestNameId,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
	ReservationNameId *UniqueIDType `json:"reservationNameId,omitempty"`
	// Room number to route the instructions.
	RoomNumber *string `json:"roomNumber,omitempty"`
}

// NewRoutingInstructionsInfoCriteriaRoom instantiates a new RoutingInstructionsInfoCriteriaRoom object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutingInstructionsInfoCriteriaRoom() *RoutingInstructionsInfoCriteriaRoom {
	this := RoutingInstructionsInfoCriteriaRoom{}
	return &this
}

// NewRoutingInstructionsInfoCriteriaRoomWithDefaults instantiates a new RoutingInstructionsInfoCriteriaRoom object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutingInstructionsInfoCriteriaRoomWithDefaults() *RoutingInstructionsInfoCriteriaRoom {
	this := RoutingInstructionsInfoCriteriaRoom{}
	return &this
}

// GetGuestDisplayName returns the GuestDisplayName field value if set, zero value otherwise.
func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestDisplayName() string {
	if o == nil || IsNil(o.GuestDisplayName) {
		var ret string
		return ret
	}
	return *o.GuestDisplayName
}

// GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestDisplayNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestDisplayName) {
		return nil, false
	}
	return o.GuestDisplayName, true
}

// HasGuestDisplayName returns a boolean if a field has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) HasGuestDisplayName() bool {
	if o != nil && !IsNil(o.GuestDisplayName) {
		return true
	}

	return false
}

// SetGuestDisplayName gets a reference to the given string and assigns it to the GuestDisplayName field.
func (o *RoutingInstructionsInfoCriteriaRoom) SetGuestDisplayName(v string) {
	o.GuestDisplayName = &v
}

// GetGuestNameId returns the GuestNameId field value if set, zero value otherwise.
func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestNameId() UniqueIDType {
	if o == nil || IsNil(o.GuestNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.GuestNameId
}

// GetGuestNameIdOk returns a tuple with the GuestNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.GuestNameId) {
		return nil, false
	}
	return o.GuestNameId, true
}

// HasGuestNameId returns a boolean if a field has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) HasGuestNameId() bool {
	if o != nil && !IsNil(o.GuestNameId) {
		return true
	}

	return false
}

// SetGuestNameId gets a reference to the given UniqueIDType and assigns it to the GuestNameId field.
func (o *RoutingInstructionsInfoCriteriaRoom) SetGuestNameId(v UniqueIDType) {
	o.GuestNameId = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *RoutingInstructionsInfoCriteriaRoom) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *RoutingInstructionsInfoCriteriaRoom) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

// GetReservationNameId returns the ReservationNameId field value if set, zero value otherwise.
func (o *RoutingInstructionsInfoCriteriaRoom) GetReservationNameId() UniqueIDType {
	if o == nil || IsNil(o.ReservationNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationNameId
}

// GetReservationNameIdOk returns a tuple with the ReservationNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) GetReservationNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationNameId) {
		return nil, false
	}
	return o.ReservationNameId, true
}

// HasReservationNameId returns a boolean if a field has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) HasReservationNameId() bool {
	if o != nil && !IsNil(o.ReservationNameId) {
		return true
	}

	return false
}

// SetReservationNameId gets a reference to the given UniqueIDType and assigns it to the ReservationNameId field.
func (o *RoutingInstructionsInfoCriteriaRoom) SetReservationNameId(v UniqueIDType) {
	o.ReservationNameId = &v
}

// GetRoomNumber returns the RoomNumber field value if set, zero value otherwise.
func (o *RoutingInstructionsInfoCriteriaRoom) GetRoomNumber() string {
	if o == nil || IsNil(o.RoomNumber) {
		var ret string
		return ret
	}
	return *o.RoomNumber
}

// GetRoomNumberOk returns a tuple with the RoomNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) GetRoomNumberOk() (*string, bool) {
	if o == nil || IsNil(o.RoomNumber) {
		return nil, false
	}
	return o.RoomNumber, true
}

// HasRoomNumber returns a boolean if a field has been set.
func (o *RoutingInstructionsInfoCriteriaRoom) HasRoomNumber() bool {
	if o != nil && !IsNil(o.RoomNumber) {
		return true
	}

	return false
}

// SetRoomNumber gets a reference to the given string and assigns it to the RoomNumber field.
func (o *RoutingInstructionsInfoCriteriaRoom) SetRoomNumber(v string) {
	o.RoomNumber = &v
}

func (o RoutingInstructionsInfoCriteriaRoom) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutingInstructionsInfoCriteriaRoom) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestDisplayName) {
		toSerialize["guestDisplayName"] = o.GuestDisplayName
	}
	if !IsNil(o.GuestNameId) {
		toSerialize["guestNameId"] = o.GuestNameId
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.ReservationNameId) {
		toSerialize["reservationNameId"] = o.ReservationNameId
	}
	if !IsNil(o.RoomNumber) {
		toSerialize["roomNumber"] = o.RoomNumber
	}
	return toSerialize, nil
}

type NullableRoutingInstructionsInfoCriteriaRoom struct {
	value *RoutingInstructionsInfoCriteriaRoom
	isSet bool
}

func (v NullableRoutingInstructionsInfoCriteriaRoom) Get() *RoutingInstructionsInfoCriteriaRoom {
	return v.value
}

func (v *NullableRoutingInstructionsInfoCriteriaRoom) Set(val *RoutingInstructionsInfoCriteriaRoom) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutingInstructionsInfoCriteriaRoom) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutingInstructionsInfoCriteriaRoom) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutingInstructionsInfoCriteriaRoom(val *RoutingInstructionsInfoCriteriaRoom) *NullableRoutingInstructionsInfoCriteriaRoom {
	return &NullableRoutingInstructionsInfoCriteriaRoom{value: val, isSet: true}
}

func (v NullableRoutingInstructionsInfoCriteriaRoom) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutingInstructionsInfoCriteriaRoom) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


