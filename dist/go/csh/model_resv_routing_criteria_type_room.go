/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ResvRoutingCriteriaTypeRoom type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvRoutingCriteriaTypeRoom{}

// ResvRoutingCriteriaTypeRoom Room routing type.
type ResvRoutingCriteriaTypeRoom struct {
	// Display Name for the guest.
	GuestDisplayName *string `json:"guestDisplayName,omitempty"`
	GuestNameId *UniqueIDType `json:"guestNameId,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
	ReservationNameId *UniqueIDType `json:"reservationNameId,omitempty"`
	// Room number to route the instructions.
	RoomId *string `json:"roomId,omitempty"`
}

// NewResvRoutingCriteriaTypeRoom instantiates a new ResvRoutingCriteriaTypeRoom object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvRoutingCriteriaTypeRoom() *ResvRoutingCriteriaTypeRoom {
	this := ResvRoutingCriteriaTypeRoom{}
	return &this
}

// NewResvRoutingCriteriaTypeRoomWithDefaults instantiates a new ResvRoutingCriteriaTypeRoom object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvRoutingCriteriaTypeRoomWithDefaults() *ResvRoutingCriteriaTypeRoom {
	this := ResvRoutingCriteriaTypeRoom{}
	return &this
}

// GetGuestDisplayName returns the GuestDisplayName field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRoom) GetGuestDisplayName() string {
	if o == nil || IsNil(o.GuestDisplayName) {
		var ret string
		return ret
	}
	return *o.GuestDisplayName
}

// GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRoom) GetGuestDisplayNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestDisplayName) {
		return nil, false
	}
	return o.GuestDisplayName, true
}

// HasGuestDisplayName returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRoom) HasGuestDisplayName() bool {
	if o != nil && !IsNil(o.GuestDisplayName) {
		return true
	}

	return false
}

// SetGuestDisplayName gets a reference to the given string and assigns it to the GuestDisplayName field.
func (o *ResvRoutingCriteriaTypeRoom) SetGuestDisplayName(v string) {
	o.GuestDisplayName = &v
}

// GetGuestNameId returns the GuestNameId field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRoom) GetGuestNameId() UniqueIDType {
	if o == nil || IsNil(o.GuestNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.GuestNameId
}

// GetGuestNameIdOk returns a tuple with the GuestNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRoom) GetGuestNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.GuestNameId) {
		return nil, false
	}
	return o.GuestNameId, true
}

// HasGuestNameId returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRoom) HasGuestNameId() bool {
	if o != nil && !IsNil(o.GuestNameId) {
		return true
	}

	return false
}

// SetGuestNameId gets a reference to the given UniqueIDType and assigns it to the GuestNameId field.
func (o *ResvRoutingCriteriaTypeRoom) SetGuestNameId(v UniqueIDType) {
	o.GuestNameId = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRoom) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRoom) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRoom) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *ResvRoutingCriteriaTypeRoom) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

// GetReservationNameId returns the ReservationNameId field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRoom) GetReservationNameId() UniqueIDType {
	if o == nil || IsNil(o.ReservationNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationNameId
}

// GetReservationNameIdOk returns a tuple with the ReservationNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRoom) GetReservationNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationNameId) {
		return nil, false
	}
	return o.ReservationNameId, true
}

// HasReservationNameId returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRoom) HasReservationNameId() bool {
	if o != nil && !IsNil(o.ReservationNameId) {
		return true
	}

	return false
}

// SetReservationNameId gets a reference to the given UniqueIDType and assigns it to the ReservationNameId field.
func (o *ResvRoutingCriteriaTypeRoom) SetReservationNameId(v UniqueIDType) {
	o.ReservationNameId = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRoom) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRoom) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRoom) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *ResvRoutingCriteriaTypeRoom) SetRoomId(v string) {
	o.RoomId = &v
}

func (o ResvRoutingCriteriaTypeRoom) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvRoutingCriteriaTypeRoom) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	return toSerialize, nil
}

type NullableResvRoutingCriteriaTypeRoom struct {
	value *ResvRoutingCriteriaTypeRoom
	isSet bool
}

func (v NullableResvRoutingCriteriaTypeRoom) Get() *ResvRoutingCriteriaTypeRoom {
	return v.value
}

func (v *NullableResvRoutingCriteriaTypeRoom) Set(val *ResvRoutingCriteriaTypeRoom) {
	v.value = val
	v.isSet = true
}

func (v NullableResvRoutingCriteriaTypeRoom) IsSet() bool {
	return v.isSet
}

func (v *NullableResvRoutingCriteriaTypeRoom) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvRoutingCriteriaTypeRoom(val *ResvRoutingCriteriaTypeRoom) *NullableResvRoutingCriteriaTypeRoom {
	return &NullableResvRoutingCriteriaTypeRoom{value: val, isSet: true}
}

func (v NullableResvRoutingCriteriaTypeRoom) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvRoutingCriteriaTypeRoom) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


