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

// checks if the FolioSummaryTypeReservationInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioSummaryTypeReservationInfo{}

// FolioSummaryTypeReservationInfo ReservationID to which this record applies.
type FolioSummaryTypeReservationInfo struct {
	// Guest Alternate Last and First Name
	AltName *string `json:"altName,omitempty"`
	// Guest Name
	GuestName *string `json:"guestName,omitempty"`
	NameId *UniqueIDType `json:"nameId,omitempty"`
	// ReservationID to which this record applies.
	ReservationId *float32 `json:"reservationId,omitempty"`
	// Room Number to which this record applies.
	Room *string `json:"room,omitempty"`
}

// NewFolioSummaryTypeReservationInfo instantiates a new FolioSummaryTypeReservationInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioSummaryTypeReservationInfo() *FolioSummaryTypeReservationInfo {
	this := FolioSummaryTypeReservationInfo{}
	return &this
}

// NewFolioSummaryTypeReservationInfoWithDefaults instantiates a new FolioSummaryTypeReservationInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioSummaryTypeReservationInfoWithDefaults() *FolioSummaryTypeReservationInfo {
	this := FolioSummaryTypeReservationInfo{}
	return &this
}

// GetAltName returns the AltName field value if set, zero value otherwise.
func (o *FolioSummaryTypeReservationInfo) GetAltName() string {
	if o == nil || IsNil(o.AltName) {
		var ret string
		return ret
	}
	return *o.AltName
}

// GetAltNameOk returns a tuple with the AltName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSummaryTypeReservationInfo) GetAltNameOk() (*string, bool) {
	if o == nil || IsNil(o.AltName) {
		return nil, false
	}
	return o.AltName, true
}

// HasAltName returns a boolean if a field has been set.
func (o *FolioSummaryTypeReservationInfo) HasAltName() bool {
	if o != nil && !IsNil(o.AltName) {
		return true
	}

	return false
}

// SetAltName gets a reference to the given string and assigns it to the AltName field.
func (o *FolioSummaryTypeReservationInfo) SetAltName(v string) {
	o.AltName = &v
}

// GetGuestName returns the GuestName field value if set, zero value otherwise.
func (o *FolioSummaryTypeReservationInfo) GetGuestName() string {
	if o == nil || IsNil(o.GuestName) {
		var ret string
		return ret
	}
	return *o.GuestName
}

// GetGuestNameOk returns a tuple with the GuestName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSummaryTypeReservationInfo) GetGuestNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestName) {
		return nil, false
	}
	return o.GuestName, true
}

// HasGuestName returns a boolean if a field has been set.
func (o *FolioSummaryTypeReservationInfo) HasGuestName() bool {
	if o != nil && !IsNil(o.GuestName) {
		return true
	}

	return false
}

// SetGuestName gets a reference to the given string and assigns it to the GuestName field.
func (o *FolioSummaryTypeReservationInfo) SetGuestName(v string) {
	o.GuestName = &v
}

// GetNameId returns the NameId field value if set, zero value otherwise.
func (o *FolioSummaryTypeReservationInfo) GetNameId() UniqueIDType {
	if o == nil || IsNil(o.NameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.NameId
}

// GetNameIdOk returns a tuple with the NameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSummaryTypeReservationInfo) GetNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.NameId) {
		return nil, false
	}
	return o.NameId, true
}

// HasNameId returns a boolean if a field has been set.
func (o *FolioSummaryTypeReservationInfo) HasNameId() bool {
	if o != nil && !IsNil(o.NameId) {
		return true
	}

	return false
}

// SetNameId gets a reference to the given UniqueIDType and assigns it to the NameId field.
func (o *FolioSummaryTypeReservationInfo) SetNameId(v UniqueIDType) {
	o.NameId = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *FolioSummaryTypeReservationInfo) GetReservationId() float32 {
	if o == nil || IsNil(o.ReservationId) {
		var ret float32
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSummaryTypeReservationInfo) GetReservationIdOk() (*float32, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *FolioSummaryTypeReservationInfo) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given float32 and assigns it to the ReservationId field.
func (o *FolioSummaryTypeReservationInfo) SetReservationId(v float32) {
	o.ReservationId = &v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *FolioSummaryTypeReservationInfo) GetRoom() string {
	if o == nil || IsNil(o.Room) {
		var ret string
		return ret
	}
	return *o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSummaryTypeReservationInfo) GetRoomOk() (*string, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *FolioSummaryTypeReservationInfo) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given string and assigns it to the Room field.
func (o *FolioSummaryTypeReservationInfo) SetRoom(v string) {
	o.Room = &v
}

func (o FolioSummaryTypeReservationInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioSummaryTypeReservationInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AltName) {
		toSerialize["altName"] = o.AltName
	}
	if !IsNil(o.GuestName) {
		toSerialize["guestName"] = o.GuestName
	}
	if !IsNil(o.NameId) {
		toSerialize["nameId"] = o.NameId
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	return toSerialize, nil
}

type NullableFolioSummaryTypeReservationInfo struct {
	value *FolioSummaryTypeReservationInfo
	isSet bool
}

func (v NullableFolioSummaryTypeReservationInfo) Get() *FolioSummaryTypeReservationInfo {
	return v.value
}

func (v *NullableFolioSummaryTypeReservationInfo) Set(val *FolioSummaryTypeReservationInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioSummaryTypeReservationInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioSummaryTypeReservationInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioSummaryTypeReservationInfo(val *FolioSummaryTypeReservationInfo) *NullableFolioSummaryTypeReservationInfo {
	return &NullableFolioSummaryTypeReservationInfo{value: val, isSet: true}
}

func (v NullableFolioSummaryTypeReservationInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioSummaryTypeReservationInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

