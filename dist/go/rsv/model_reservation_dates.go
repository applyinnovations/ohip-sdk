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

// checks if the ReservationDates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationDates{}

// ReservationDates Reservation Dates
type ReservationDates struct {
	// Date of arrival.
	ArrivalDate *string `json:"arrivalDate,omitempty"`
	// Date when reservation(s) was cancelled.
	CancelledOn *string `json:"cancelledOn,omitempty"`
	// Date when reservation(s) was created.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// Date of departure.
	DepartureDate *string `json:"departureDate,omitempty"`
	// Date when folio was closed.
	FolioClosedOn *string `json:"folioClosedOn,omitempty"`
	// Date when reservation(s) was updated.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
}

// NewReservationDates instantiates a new ReservationDates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationDates() *ReservationDates {
	this := ReservationDates{}
	return &this
}

// NewReservationDatesWithDefaults instantiates a new ReservationDates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationDatesWithDefaults() *ReservationDates {
	this := ReservationDates{}
	return &this
}

// GetArrivalDate returns the ArrivalDate field value if set, zero value otherwise.
func (o *ReservationDates) GetArrivalDate() string {
	if o == nil || IsNil(o.ArrivalDate) {
		var ret string
		return ret
	}
	return *o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetArrivalDateOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalDate) {
		return nil, false
	}
	return o.ArrivalDate, true
}

// HasArrivalDate returns a boolean if a field has been set.
func (o *ReservationDates) HasArrivalDate() bool {
	if o != nil && !IsNil(o.ArrivalDate) {
		return true
	}

	return false
}

// SetArrivalDate gets a reference to the given string and assigns it to the ArrivalDate field.
func (o *ReservationDates) SetArrivalDate(v string) {
	o.ArrivalDate = &v
}

// GetCancelledOn returns the CancelledOn field value if set, zero value otherwise.
func (o *ReservationDates) GetCancelledOn() string {
	if o == nil || IsNil(o.CancelledOn) {
		var ret string
		return ret
	}
	return *o.CancelledOn
}

// GetCancelledOnOk returns a tuple with the CancelledOn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetCancelledOnOk() (*string, bool) {
	if o == nil || IsNil(o.CancelledOn) {
		return nil, false
	}
	return o.CancelledOn, true
}

// HasCancelledOn returns a boolean if a field has been set.
func (o *ReservationDates) HasCancelledOn() bool {
	if o != nil && !IsNil(o.CancelledOn) {
		return true
	}

	return false
}

// SetCancelledOn gets a reference to the given string and assigns it to the CancelledOn field.
func (o *ReservationDates) SetCancelledOn(v string) {
	o.CancelledOn = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *ReservationDates) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *ReservationDates) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *ReservationDates) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetDepartureDate returns the DepartureDate field value if set, zero value otherwise.
func (o *ReservationDates) GetDepartureDate() string {
	if o == nil || IsNil(o.DepartureDate) {
		var ret string
		return ret
	}
	return *o.DepartureDate
}

// GetDepartureDateOk returns a tuple with the DepartureDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetDepartureDateOk() (*string, bool) {
	if o == nil || IsNil(o.DepartureDate) {
		return nil, false
	}
	return o.DepartureDate, true
}

// HasDepartureDate returns a boolean if a field has been set.
func (o *ReservationDates) HasDepartureDate() bool {
	if o != nil && !IsNil(o.DepartureDate) {
		return true
	}

	return false
}

// SetDepartureDate gets a reference to the given string and assigns it to the DepartureDate field.
func (o *ReservationDates) SetDepartureDate(v string) {
	o.DepartureDate = &v
}

// GetFolioClosedOn returns the FolioClosedOn field value if set, zero value otherwise.
func (o *ReservationDates) GetFolioClosedOn() string {
	if o == nil || IsNil(o.FolioClosedOn) {
		var ret string
		return ret
	}
	return *o.FolioClosedOn
}

// GetFolioClosedOnOk returns a tuple with the FolioClosedOn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetFolioClosedOnOk() (*string, bool) {
	if o == nil || IsNil(o.FolioClosedOn) {
		return nil, false
	}
	return o.FolioClosedOn, true
}

// HasFolioClosedOn returns a boolean if a field has been set.
func (o *ReservationDates) HasFolioClosedOn() bool {
	if o != nil && !IsNil(o.FolioClosedOn) {
		return true
	}

	return false
}

// SetFolioClosedOn gets a reference to the given string and assigns it to the FolioClosedOn field.
func (o *ReservationDates) SetFolioClosedOn(v string) {
	o.FolioClosedOn = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *ReservationDates) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDates) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *ReservationDates) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *ReservationDates) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

func (o ReservationDates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationDates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalDate) {
		toSerialize["arrivalDate"] = o.ArrivalDate
	}
	if !IsNil(o.CancelledOn) {
		toSerialize["cancelledOn"] = o.CancelledOn
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.DepartureDate) {
		toSerialize["departureDate"] = o.DepartureDate
	}
	if !IsNil(o.FolioClosedOn) {
		toSerialize["folioClosedOn"] = o.FolioClosedOn
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	return toSerialize, nil
}

type NullableReservationDates struct {
	value *ReservationDates
	isSet bool
}

func (v NullableReservationDates) Get() *ReservationDates {
	return v.value
}

func (v *NullableReservationDates) Set(val *ReservationDates) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationDates) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationDates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationDates(val *ReservationDates) *NullableReservationDates {
	return &NullableReservationDates{value: val, isSet: true}
}

func (v NullableReservationDates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationDates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

