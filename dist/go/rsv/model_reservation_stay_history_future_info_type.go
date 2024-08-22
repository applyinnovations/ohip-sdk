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

// checks if the ReservationStayHistoryFutureInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationStayHistoryFutureInfoType{}

// ReservationStayHistoryFutureInfoType Information of History and Future Reservation details attached to Profiles.
type ReservationStayHistoryFutureInfoType struct {
	FutureList *StayFutureListType `json:"futureList,omitempty"`
	HistoryList *StayHistoryListType `json:"historyList,omitempty"`
}

// NewReservationStayHistoryFutureInfoType instantiates a new ReservationStayHistoryFutureInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationStayHistoryFutureInfoType() *ReservationStayHistoryFutureInfoType {
	this := ReservationStayHistoryFutureInfoType{}
	return &this
}

// NewReservationStayHistoryFutureInfoTypeWithDefaults instantiates a new ReservationStayHistoryFutureInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationStayHistoryFutureInfoTypeWithDefaults() *ReservationStayHistoryFutureInfoType {
	this := ReservationStayHistoryFutureInfoType{}
	return &this
}

// GetFutureList returns the FutureList field value if set, zero value otherwise.
func (o *ReservationStayHistoryFutureInfoType) GetFutureList() StayFutureListType {
	if o == nil || IsNil(o.FutureList) {
		var ret StayFutureListType
		return ret
	}
	return *o.FutureList
}

// GetFutureListOk returns a tuple with the FutureList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationStayHistoryFutureInfoType) GetFutureListOk() (*StayFutureListType, bool) {
	if o == nil || IsNil(o.FutureList) {
		return nil, false
	}
	return o.FutureList, true
}

// HasFutureList returns a boolean if a field has been set.
func (o *ReservationStayHistoryFutureInfoType) HasFutureList() bool {
	if o != nil && !IsNil(o.FutureList) {
		return true
	}

	return false
}

// SetFutureList gets a reference to the given StayFutureListType and assigns it to the FutureList field.
func (o *ReservationStayHistoryFutureInfoType) SetFutureList(v StayFutureListType) {
	o.FutureList = &v
}

// GetHistoryList returns the HistoryList field value if set, zero value otherwise.
func (o *ReservationStayHistoryFutureInfoType) GetHistoryList() StayHistoryListType {
	if o == nil || IsNil(o.HistoryList) {
		var ret StayHistoryListType
		return ret
	}
	return *o.HistoryList
}

// GetHistoryListOk returns a tuple with the HistoryList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationStayHistoryFutureInfoType) GetHistoryListOk() (*StayHistoryListType, bool) {
	if o == nil || IsNil(o.HistoryList) {
		return nil, false
	}
	return o.HistoryList, true
}

// HasHistoryList returns a boolean if a field has been set.
func (o *ReservationStayHistoryFutureInfoType) HasHistoryList() bool {
	if o != nil && !IsNil(o.HistoryList) {
		return true
	}

	return false
}

// SetHistoryList gets a reference to the given StayHistoryListType and assigns it to the HistoryList field.
func (o *ReservationStayHistoryFutureInfoType) SetHistoryList(v StayHistoryListType) {
	o.HistoryList = &v
}

func (o ReservationStayHistoryFutureInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationStayHistoryFutureInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FutureList) {
		toSerialize["futureList"] = o.FutureList
	}
	if !IsNil(o.HistoryList) {
		toSerialize["historyList"] = o.HistoryList
	}
	return toSerialize, nil
}

type NullableReservationStayHistoryFutureInfoType struct {
	value *ReservationStayHistoryFutureInfoType
	isSet bool
}

func (v NullableReservationStayHistoryFutureInfoType) Get() *ReservationStayHistoryFutureInfoType {
	return v.value
}

func (v *NullableReservationStayHistoryFutureInfoType) Set(val *ReservationStayHistoryFutureInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationStayHistoryFutureInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationStayHistoryFutureInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationStayHistoryFutureInfoType(val *ReservationStayHistoryFutureInfoType) *NullableReservationStayHistoryFutureInfoType {
	return &NullableReservationStayHistoryFutureInfoType{value: val, isSet: true}
}

func (v NullableReservationStayHistoryFutureInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationStayHistoryFutureInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


