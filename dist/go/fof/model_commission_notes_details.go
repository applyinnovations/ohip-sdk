/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CommissionNotesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionNotesDetails{}

// CommissionNotesDetails Response type for fetching commission notes.
type CommissionNotesDetails struct {
	// Commission Note for the reservation.
	CommissionNotesList []string `json:"commissionNotesList,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCommissionNotesDetails instantiates a new CommissionNotesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionNotesDetails() *CommissionNotesDetails {
	this := CommissionNotesDetails{}
	return &this
}

// NewCommissionNotesDetailsWithDefaults instantiates a new CommissionNotesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionNotesDetailsWithDefaults() *CommissionNotesDetails {
	this := CommissionNotesDetails{}
	return &this
}

// GetCommissionNotesList returns the CommissionNotesList field value if set, zero value otherwise.
func (o *CommissionNotesDetails) GetCommissionNotesList() []string {
	if o == nil || IsNil(o.CommissionNotesList) {
		var ret []string
		return ret
	}
	return o.CommissionNotesList
}

// GetCommissionNotesListOk returns a tuple with the CommissionNotesList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionNotesDetails) GetCommissionNotesListOk() ([]string, bool) {
	if o == nil || IsNil(o.CommissionNotesList) {
		return nil, false
	}
	return o.CommissionNotesList, true
}

// HasCommissionNotesList returns a boolean if a field has been set.
func (o *CommissionNotesDetails) HasCommissionNotesList() bool {
	if o != nil && !IsNil(o.CommissionNotesList) {
		return true
	}

	return false
}

// SetCommissionNotesList gets a reference to the given []string and assigns it to the CommissionNotesList field.
func (o *CommissionNotesDetails) SetCommissionNotesList(v []string) {
	o.CommissionNotesList = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CommissionNotesDetails) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionNotesDetails) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CommissionNotesDetails) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CommissionNotesDetails) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CommissionNotesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionNotesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CommissionNotesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CommissionNotesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *CommissionNotesDetails) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionNotesDetails) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *CommissionNotesDetails) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *CommissionNotesDetails) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CommissionNotesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionNotesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CommissionNotesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CommissionNotesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CommissionNotesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionNotesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionNotesList) {
		toSerialize["commissionNotesList"] = o.CommissionNotesList
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCommissionNotesDetails struct {
	value *CommissionNotesDetails
	isSet bool
}

func (v NullableCommissionNotesDetails) Get() *CommissionNotesDetails {
	return v.value
}

func (v *NullableCommissionNotesDetails) Set(val *CommissionNotesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionNotesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionNotesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionNotesDetails(val *CommissionNotesDetails) *NullableCommissionNotesDetails {
	return &NullableCommissionNotesDetails{value: val, isSet: true}
}

func (v NullableCommissionNotesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionNotesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


