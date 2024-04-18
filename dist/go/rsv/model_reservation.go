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

// checks if the Reservation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Reservation{}

// Reservation Return object to the request for information regarding a reservation.
type Reservation struct {
	ChannelInfo *ReservationChannelInfoType `json:"channelInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	Reservations *HotelReservationsType `json:"reservations,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservation instantiates a new Reservation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservation() *Reservation {
	this := Reservation{}
	return &this
}

// NewReservationWithDefaults instantiates a new Reservation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationWithDefaults() *Reservation {
	this := Reservation{}
	return &this
}

// GetChannelInfo returns the ChannelInfo field value if set, zero value otherwise.
func (o *Reservation) GetChannelInfo() ReservationChannelInfoType {
	if o == nil || IsNil(o.ChannelInfo) {
		var ret ReservationChannelInfoType
		return ret
	}
	return *o.ChannelInfo
}

// GetChannelInfoOk returns a tuple with the ChannelInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Reservation) GetChannelInfoOk() (*ReservationChannelInfoType, bool) {
	if o == nil || IsNil(o.ChannelInfo) {
		return nil, false
	}
	return o.ChannelInfo, true
}

// HasChannelInfo returns a boolean if a field has been set.
func (o *Reservation) HasChannelInfo() bool {
	if o != nil && !IsNil(o.ChannelInfo) {
		return true
	}

	return false
}

// SetChannelInfo gets a reference to the given ReservationChannelInfoType and assigns it to the ChannelInfo field.
func (o *Reservation) SetChannelInfo(v ReservationChannelInfoType) {
	o.ChannelInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Reservation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Reservation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Reservation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Reservation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *Reservation) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Reservation) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *Reservation) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *Reservation) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetReservations returns the Reservations field value if set, zero value otherwise.
func (o *Reservation) GetReservations() HotelReservationsType {
	if o == nil || IsNil(o.Reservations) {
		var ret HotelReservationsType
		return ret
	}
	return *o.Reservations
}

// GetReservationsOk returns a tuple with the Reservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Reservation) GetReservationsOk() (*HotelReservationsType, bool) {
	if o == nil || IsNil(o.Reservations) {
		return nil, false
	}
	return o.Reservations, true
}

// HasReservations returns a boolean if a field has been set.
func (o *Reservation) HasReservations() bool {
	if o != nil && !IsNil(o.Reservations) {
		return true
	}

	return false
}

// SetReservations gets a reference to the given HotelReservationsType and assigns it to the Reservations field.
func (o *Reservation) SetReservations(v HotelReservationsType) {
	o.Reservations = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Reservation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Reservation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Reservation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Reservation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Reservation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Reservation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelInfo) {
		toSerialize["channelInfo"] = o.ChannelInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.Reservations) {
		toSerialize["reservations"] = o.Reservations
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservation struct {
	value *Reservation
	isSet bool
}

func (v NullableReservation) Get() *Reservation {
	return v.value
}

func (v *NullableReservation) Set(val *Reservation) {
	v.value = val
	v.isSet = true
}

func (v NullableReservation) IsSet() bool {
	return v.isSet
}

func (v *NullableReservation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservation(val *Reservation) *NullableReservation {
	return &NullableReservation{value: val, isSet: true}
}

func (v NullableReservation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

