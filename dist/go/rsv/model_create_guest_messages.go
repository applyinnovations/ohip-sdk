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

// checks if the CreateGuestMessages type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateGuestMessages{}

// CreateGuestMessages Request object for creating the Guest Messages for a Reservation.
type CreateGuestMessages struct {
	// Holds the Message Information
	GuestMessages []GuestMessageType `json:"guestMessages,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCreateGuestMessages instantiates a new CreateGuestMessages object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateGuestMessages() *CreateGuestMessages {
	this := CreateGuestMessages{}
	return &this
}

// NewCreateGuestMessagesWithDefaults instantiates a new CreateGuestMessages object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateGuestMessagesWithDefaults() *CreateGuestMessages {
	this := CreateGuestMessages{}
	return &this
}

// GetGuestMessages returns the GuestMessages field value if set, zero value otherwise.
func (o *CreateGuestMessages) GetGuestMessages() []GuestMessageType {
	if o == nil || IsNil(o.GuestMessages) {
		var ret []GuestMessageType
		return ret
	}
	return o.GuestMessages
}

// GetGuestMessagesOk returns a tuple with the GuestMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateGuestMessages) GetGuestMessagesOk() ([]GuestMessageType, bool) {
	if o == nil || IsNil(o.GuestMessages) {
		return nil, false
	}
	return o.GuestMessages, true
}

// HasGuestMessages returns a boolean if a field has been set.
func (o *CreateGuestMessages) HasGuestMessages() bool {
	if o != nil && !IsNil(o.GuestMessages) {
		return true
	}

	return false
}

// SetGuestMessages gets a reference to the given []GuestMessageType and assigns it to the GuestMessages field.
func (o *CreateGuestMessages) SetGuestMessages(v []GuestMessageType) {
	o.GuestMessages = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CreateGuestMessages) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateGuestMessages) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CreateGuestMessages) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CreateGuestMessages) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CreateGuestMessages) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateGuestMessages) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CreateGuestMessages) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CreateGuestMessages) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *CreateGuestMessages) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateGuestMessages) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *CreateGuestMessages) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *CreateGuestMessages) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CreateGuestMessages) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateGuestMessages) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CreateGuestMessages) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CreateGuestMessages) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CreateGuestMessages) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateGuestMessages) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestMessages) {
		toSerialize["guestMessages"] = o.GuestMessages
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCreateGuestMessages struct {
	value *CreateGuestMessages
	isSet bool
}

func (v NullableCreateGuestMessages) Get() *CreateGuestMessages {
	return v.value
}

func (v *NullableCreateGuestMessages) Set(val *CreateGuestMessages) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateGuestMessages) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateGuestMessages) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateGuestMessages(val *CreateGuestMessages) *NullableCreateGuestMessages {
	return &NullableCreateGuestMessages{value: val, isSet: true}
}

func (v NullableCreateGuestMessages) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateGuestMessages) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

