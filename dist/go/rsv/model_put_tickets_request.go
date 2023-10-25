/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the PutTicketsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutTicketsRequest{}

// PutTicketsRequest struct for PutTicketsRequest
type PutTicketsRequest struct {
	// Hotel Code of the Reservation.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// Collection of TicketType objects.
	Tickets []TicketType `json:"tickets,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutTicketsRequest instantiates a new PutTicketsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutTicketsRequest() *PutTicketsRequest {
	this := PutTicketsRequest{}
	return &this
}

// NewPutTicketsRequestWithDefaults instantiates a new PutTicketsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutTicketsRequestWithDefaults() *PutTicketsRequest {
	this := PutTicketsRequest{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PutTicketsRequest) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTicketsRequest) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PutTicketsRequest) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PutTicketsRequest) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutTicketsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTicketsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutTicketsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutTicketsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *PutTicketsRequest) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTicketsRequest) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *PutTicketsRequest) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *PutTicketsRequest) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetTickets returns the Tickets field value if set, zero value otherwise.
func (o *PutTicketsRequest) GetTickets() []TicketType {
	if o == nil || IsNil(o.Tickets) {
		var ret []TicketType
		return ret
	}
	return o.Tickets
}

// GetTicketsOk returns a tuple with the Tickets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTicketsRequest) GetTicketsOk() ([]TicketType, bool) {
	if o == nil || IsNil(o.Tickets) {
		return nil, false
	}
	return o.Tickets, true
}

// HasTickets returns a boolean if a field has been set.
func (o *PutTicketsRequest) HasTickets() bool {
	if o != nil && !IsNil(o.Tickets) {
		return true
	}

	return false
}

// SetTickets gets a reference to the given []TicketType and assigns it to the Tickets field.
func (o *PutTicketsRequest) SetTickets(v []TicketType) {
	o.Tickets = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutTicketsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTicketsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutTicketsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutTicketsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutTicketsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutTicketsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.Tickets) {
		toSerialize["tickets"] = o.Tickets
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutTicketsRequest struct {
	value *PutTicketsRequest
	isSet bool
}

func (v NullablePutTicketsRequest) Get() *PutTicketsRequest {
	return v.value
}

func (v *NullablePutTicketsRequest) Set(val *PutTicketsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutTicketsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutTicketsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutTicketsRequest(val *PutTicketsRequest) *NullablePutTicketsRequest {
	return &NullablePutTicketsRequest{value: val, isSet: true}
}

func (v NullablePutTicketsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutTicketsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


