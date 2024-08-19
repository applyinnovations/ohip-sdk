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

// checks if the ReservationInterfaceStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationInterfaceStatusType{}

// ReservationInterfaceStatusType Hotel Interface Type for a reservation and status of the various services
type ReservationInterfaceStatusType struct {
	HotelInterface *HotelInterfaceType `json:"hotelInterface,omitempty"`
	// Contains a list of status/rights for the various services under this interface
	InterfaceRights []InterfaceRightsStatusType `json:"interfaceRights,omitempty"`
	// Identifier for the room extension
	RoomExtension *string `json:"roomExtension,omitempty"`
}

// NewReservationInterfaceStatusType instantiates a new ReservationInterfaceStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationInterfaceStatusType() *ReservationInterfaceStatusType {
	this := ReservationInterfaceStatusType{}
	return &this
}

// NewReservationInterfaceStatusTypeWithDefaults instantiates a new ReservationInterfaceStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationInterfaceStatusTypeWithDefaults() *ReservationInterfaceStatusType {
	this := ReservationInterfaceStatusType{}
	return &this
}

// GetHotelInterface returns the HotelInterface field value if set, zero value otherwise.
func (o *ReservationInterfaceStatusType) GetHotelInterface() HotelInterfaceType {
	if o == nil || IsNil(o.HotelInterface) {
		var ret HotelInterfaceType
		return ret
	}
	return *o.HotelInterface
}

// GetHotelInterfaceOk returns a tuple with the HotelInterface field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterfaceStatusType) GetHotelInterfaceOk() (*HotelInterfaceType, bool) {
	if o == nil || IsNil(o.HotelInterface) {
		return nil, false
	}
	return o.HotelInterface, true
}

// HasHotelInterface returns a boolean if a field has been set.
func (o *ReservationInterfaceStatusType) HasHotelInterface() bool {
	if o != nil && !IsNil(o.HotelInterface) {
		return true
	}

	return false
}

// SetHotelInterface gets a reference to the given HotelInterfaceType and assigns it to the HotelInterface field.
func (o *ReservationInterfaceStatusType) SetHotelInterface(v HotelInterfaceType) {
	o.HotelInterface = &v
}

// GetInterfaceRights returns the InterfaceRights field value if set, zero value otherwise.
func (o *ReservationInterfaceStatusType) GetInterfaceRights() []InterfaceRightsStatusType {
	if o == nil || IsNil(o.InterfaceRights) {
		var ret []InterfaceRightsStatusType
		return ret
	}
	return o.InterfaceRights
}

// GetInterfaceRightsOk returns a tuple with the InterfaceRights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterfaceStatusType) GetInterfaceRightsOk() ([]InterfaceRightsStatusType, bool) {
	if o == nil || IsNil(o.InterfaceRights) {
		return nil, false
	}
	return o.InterfaceRights, true
}

// HasInterfaceRights returns a boolean if a field has been set.
func (o *ReservationInterfaceStatusType) HasInterfaceRights() bool {
	if o != nil && !IsNil(o.InterfaceRights) {
		return true
	}

	return false
}

// SetInterfaceRights gets a reference to the given []InterfaceRightsStatusType and assigns it to the InterfaceRights field.
func (o *ReservationInterfaceStatusType) SetInterfaceRights(v []InterfaceRightsStatusType) {
	o.InterfaceRights = v
}

// GetRoomExtension returns the RoomExtension field value if set, zero value otherwise.
func (o *ReservationInterfaceStatusType) GetRoomExtension() string {
	if o == nil || IsNil(o.RoomExtension) {
		var ret string
		return ret
	}
	return *o.RoomExtension
}

// GetRoomExtensionOk returns a tuple with the RoomExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationInterfaceStatusType) GetRoomExtensionOk() (*string, bool) {
	if o == nil || IsNil(o.RoomExtension) {
		return nil, false
	}
	return o.RoomExtension, true
}

// HasRoomExtension returns a boolean if a field has been set.
func (o *ReservationInterfaceStatusType) HasRoomExtension() bool {
	if o != nil && !IsNil(o.RoomExtension) {
		return true
	}

	return false
}

// SetRoomExtension gets a reference to the given string and assigns it to the RoomExtension field.
func (o *ReservationInterfaceStatusType) SetRoomExtension(v string) {
	o.RoomExtension = &v
}

func (o ReservationInterfaceStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationInterfaceStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelInterface) {
		toSerialize["hotelInterface"] = o.HotelInterface
	}
	if !IsNil(o.InterfaceRights) {
		toSerialize["interfaceRights"] = o.InterfaceRights
	}
	if !IsNil(o.RoomExtension) {
		toSerialize["roomExtension"] = o.RoomExtension
	}
	return toSerialize, nil
}

type NullableReservationInterfaceStatusType struct {
	value *ReservationInterfaceStatusType
	isSet bool
}

func (v NullableReservationInterfaceStatusType) Get() *ReservationInterfaceStatusType {
	return v.value
}

func (v *NullableReservationInterfaceStatusType) Set(val *ReservationInterfaceStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationInterfaceStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationInterfaceStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationInterfaceStatusType(val *ReservationInterfaceStatusType) *NullableReservationInterfaceStatusType {
	return &NullableReservationInterfaceStatusType{value: val, isSet: true}
}

func (v NullableReservationInterfaceStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationInterfaceStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


