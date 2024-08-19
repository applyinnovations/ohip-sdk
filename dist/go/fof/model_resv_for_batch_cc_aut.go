/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ResvForBatchCCAut type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvForBatchCCAut{}

// ResvForBatchCCAut Response which contains a listing of reservations, and associated payment methods, that require credit card authorization.
type ResvForBatchCCAut struct {
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// List of reservations with their payment methods.
	Reservations []ReservationForCCAuthType `json:"reservations,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewResvForBatchCCAut instantiates a new ResvForBatchCCAut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvForBatchCCAut() *ResvForBatchCCAut {
	this := ResvForBatchCCAut{}
	return &this
}

// NewResvForBatchCCAutWithDefaults instantiates a new ResvForBatchCCAut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvForBatchCCAutWithDefaults() *ResvForBatchCCAut {
	this := ResvForBatchCCAut{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ResvForBatchCCAut) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvForBatchCCAut) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ResvForBatchCCAut) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ResvForBatchCCAut) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ResvForBatchCCAut) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvForBatchCCAut) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ResvForBatchCCAut) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ResvForBatchCCAut) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservations returns the Reservations field value if set, zero value otherwise.
func (o *ResvForBatchCCAut) GetReservations() []ReservationForCCAuthType {
	if o == nil || IsNil(o.Reservations) {
		var ret []ReservationForCCAuthType
		return ret
	}
	return o.Reservations
}

// GetReservationsOk returns a tuple with the Reservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvForBatchCCAut) GetReservationsOk() ([]ReservationForCCAuthType, bool) {
	if o == nil || IsNil(o.Reservations) {
		return nil, false
	}
	return o.Reservations, true
}

// HasReservations returns a boolean if a field has been set.
func (o *ResvForBatchCCAut) HasReservations() bool {
	if o != nil && !IsNil(o.Reservations) {
		return true
	}

	return false
}

// SetReservations gets a reference to the given []ReservationForCCAuthType and assigns it to the Reservations field.
func (o *ResvForBatchCCAut) SetReservations(v []ReservationForCCAuthType) {
	o.Reservations = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ResvForBatchCCAut) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvForBatchCCAut) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ResvForBatchCCAut) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ResvForBatchCCAut) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ResvForBatchCCAut) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvForBatchCCAut) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Reservations) {
		toSerialize["reservations"] = o.Reservations
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableResvForBatchCCAut struct {
	value *ResvForBatchCCAut
	isSet bool
}

func (v NullableResvForBatchCCAut) Get() *ResvForBatchCCAut {
	return v.value
}

func (v *NullableResvForBatchCCAut) Set(val *ResvForBatchCCAut) {
	v.value = val
	v.isSet = true
}

func (v NullableResvForBatchCCAut) IsSet() bool {
	return v.isSet
}

func (v *NullableResvForBatchCCAut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvForBatchCCAut(val *ResvForBatchCCAut) *NullableResvForBatchCCAut {
	return &NullableResvForBatchCCAut{value: val, isSet: true}
}

func (v NullableResvForBatchCCAut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvForBatchCCAut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


